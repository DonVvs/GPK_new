const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const TARGET_DIRS = [
  path.join(__dirname, '..', 'public'),
  path.join(__dirname, '..', 'public', 'images'),
  path.join(__dirname, '..', 'public', 'images', 'partners'),
  path.join(__dirname, '..', 'public', 'factory'),
  path.join(__dirname, '..', 'public', 'images', 'manufacturing'),
  path.join(__dirname, '..', 'public', 'images', 'factory'),
];

async function optimizeDirectory(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) continue;

    const ext = path.extname(file).toLowerCase();
    if (!['.png', '.jpg', '.jpeg'].includes(ext)) continue;

    const baseName = path.basename(file, ext);
    const webpPath = path.join(dir, `${baseName}.webp`);

    try {
      const origSize = stat.size;
      const image = sharp(fullPath);
      const meta = await image.metadata();

      // Cap maximum dimensions to 1920px width/height for web performance if oversized
      let pipeline = sharp(fullPath);
      if (meta.width > 1920 || meta.height > 1920) {
        pipeline = pipeline.resize(1920, 1920, { fit: 'inside', withoutEnlargement: true });
      }

      // 1. Generate WebP version (quality 82, effort 6)
      await pipeline
        .clone()
        .webp({ quality: 82, effort: 6 })
        .toFile(webpPath);
      const webpSize = fs.statSync(webpPath).size;

      // 2. Also optimize the original PNG/JPG in place if it's large (> 100KB)
      if (origSize > 100 * 1024) {
        const tempPath = path.join(dir, `__temp_${file}`);
        if (ext === '.png') {
          await pipeline
            .clone()
            .png({ quality: 85, compressionLevel: 9, effort: 8 })
            .toFile(tempPath);
        } else {
          await pipeline
            .clone()
            .jpeg({ quality: 82, mozjpeg: true })
            .toFile(tempPath);
        }
        const newSize = fs.statSync(tempPath).size;
        if (newSize < origSize) {
          fs.copyFileSync(tempPath, fullPath);
          fs.unlinkSync(tempPath);
          console.log(`[Optimized] ${file}: ${(origSize/1024).toFixed(1)}KB -> ${(newSize/1024).toFixed(1)}KB (WebP: ${(webpSize/1024).toFixed(1)}KB)`);
        } else {
          fs.unlinkSync(tempPath);
          console.log(`[WebP Created] ${file} (${(origSize/1024).toFixed(1)}KB) -> WebP: ${(webpSize/1024).toFixed(1)}KB`);
        }
      } else {
        console.log(`[WebP Created] ${file} -> WebP: ${(webpSize/1024).toFixed(1)}KB`);
      }
    } catch (err) {
      console.error(`Error optimizing ${file}:`, err.message);
    }
  }
}

async function run() {
  console.log('Starting Image Optimization via Sharp...');
  for (const dir of TARGET_DIRS) {
    console.log(`Scanning: ${dir}`);
    await optimizeDirectory(dir);
  }
  console.log('Image Optimization Complete!');
}

run();
