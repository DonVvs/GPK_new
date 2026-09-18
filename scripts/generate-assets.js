const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function processImages() {
  const rootDir = path.resolve(__dirname, '..');
  const inputPath = path.join(rootDir, 'public', 'gpk_paperbagexporterindia.png');
  
  console.log('Reading:', inputPath);

  // 1. Trim the logo to eliminate transparent padding
  const trimmedBuffer = await sharp(inputPath)
    .trim()
    .toBuffer();

  const trimmedMeta = await sharp(trimmedBuffer).metadata();
  console.log('Trimmed dimensions:', trimmedMeta.width, 'x', trimmedMeta.height);

  // Save the trimmed logo as public/logo.png and public/gpk-logo-trimmed.png
  await sharp(trimmedBuffer)
    .png({ quality: 100, compressionLevel: 9 })
    .toFile(path.join(rootDir, 'public', 'logo.png'));
  console.log('Created public/logo.png');

  // Also create a white/kraft version for dark backgrounds (Footer)
  // Let's create a clean white version if needed, or we can use CSS invert / tint
  // For maximum crispness, let's create a white version with transparency
  const rawPixelData = await sharp(trimmedBuffer).raw().toBuffer({ resolveWithObject: true });
  const { data, info } = rawPixelData;
  const whiteData = Buffer.from(data);
  for (let i = 0; i < whiteData.length; i += info.channels) {
    // Keep alpha, turn RGB to white (255, 255, 255)
    if (whiteData[i + 3] > 0) {
      whiteData[i] = 255;
      whiteData[i + 1] = 255;
      whiteData[i + 2] = 255;
    }
  }
  await sharp(whiteData, {
    raw: {
      width: info.width,
      height: info.height,
      channels: info.channels
    }
  })
  .png()
  .toFile(path.join(rootDir, 'public', 'logo-white.png'));
  console.log('Created public/logo-white.png');

  // 2. Favicon creation:
  // The emblem is rectangular (3762 x 2206, ~1.7:1).
  // For favicon, we want it nicely centered in a square with transparent background and 'a little zoom' (minimal padding, e.g. 5%)
  const maxDim = Math.max(info.width, info.height);
  const padding = Math.round(maxDim * 0.05); // 5% padding for high visibility / zoom in browser tab
  const squareCanvasSize = maxDim + padding * 2;

  const squareFaviconBase = await sharp({
    create: {
      width: squareCanvasSize,
      height: squareCanvasSize,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    }
  })
  .composite([{
    input: trimmedBuffer,
    gravity: 'centre'
  }])
  .png()
  .toBuffer();

  const iconSizes = [
    { target: path.join(rootDir, 'public', 'favicon-16x16.png'), size: 16 },
    { target: path.join(rootDir, 'public', 'favicon-32x32.png'), size: 32 },
    { target: path.join(rootDir, 'public', 'favicon-48x48.png'), size: 48 },
    { target: path.join(rootDir, 'public', 'favicon.png'), size: 48 },
    { target: path.join(rootDir, 'public', 'apple-icon.png'), size: 180 },
    { target: path.join(rootDir, 'public', 'apple-touch-icon.png'), size: 180 },
    { target: path.join(rootDir, 'public', 'icon.png'), size: 512 },
    { target: path.join(rootDir, 'public', 'android-chrome-192x192.png'), size: 192 },
    { target: path.join(rootDir, 'public', 'android-chrome-512x512.png'), size: 512 },
    { target: path.join(rootDir, 'app', 'icon.png'), size: 512 },
    { target: path.join(rootDir, 'app', 'apple-icon.png'), size: 180 }
  ];

  for (const item of iconSizes) {
    await sharp(squareFaviconBase)
      .resize(item.size, item.size, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .png()
      .toFile(item.target);
    console.log(`Generated: ${path.relative(rootDir, item.target)} (${item.size}x${item.size})`);
  }

  // Create real .ico file containing 16x16, 32x32, 48x48 PNG frames
  // A standard modern ICO can embed PNG images directly (PNG-compressed ICO format supported by all modern browsers)
  // Let's create proper multi-resolution ico using standard ICO directory header + PNG data
  const icoSizes = [16, 32, 48];
  const pngBuffers = [];
  for (const s of icoSizes) {
    const buf = await sharp(squareFaviconBase)
      .resize(s, s, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toBuffer();
    pngBuffers.push({ size: s, buffer: buf });
  }

  // ICO header: 6 bytes (Reserved 2 bytes = 0, Type 2 bytes = 1 for icon, Count 2 bytes)
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // icon type
  header.writeUInt16LE(pngBuffers.length, 4); // number of images

  let offset = 6 + 16 * pngBuffers.length;
  const directoryEntries = [];
  const imageDatas = [];

  for (const { size, buffer } of pngBuffers) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(size === 256 ? 0 : size, 0); // width
    entry.writeUInt8(size === 256 ? 0 : size, 1); // height
    entry.writeUInt8(0, 2); // color palette count
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(buffer.length, 8); // image size in bytes
    entry.writeUInt32LE(offset, 12); // image offset

    directoryEntries.push(entry);
    imageDatas.push(buffer);
    offset += buffer.length;
  }

  const icoBuffer = Buffer.concat([header, ...directoryEntries, ...imageDatas]);
  fs.writeFileSync(path.join(rootDir, 'public', 'favicon.ico'), icoBuffer);
  fs.writeFileSync(path.join(rootDir, 'app', 'favicon.ico'), icoBuffer);
  console.log('Created valid multi-resolution favicon.ico in public/ and app/');
}

processImages()
  .then(() => console.log('All brand assets successfully generated!'))
  .catch(err => {
    console.error('Error generating assets:', err);
    process.exit(1);
  });
