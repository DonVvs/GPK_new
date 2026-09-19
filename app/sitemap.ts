import { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/blog-data';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.gargipaperkraft.com';
    const now = new Date();

    // Core money and category routes
    const routes = [
        { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
        { path: '/paper-bag-exporter-india', priority: 0.95, changeFrequency: 'weekly' as const },
        { path: '/paper-bag-manufacturer-india', priority: 0.9, changeFrequency: 'weekly' as const },
        { path: '/request-quote', priority: 0.9, changeFrequency: 'weekly' as const },
        { path: '/products', priority: 0.85, changeFrequency: 'weekly' as const },
        { path: '/products/square-bottom-paper-bags', priority: 0.9, changeFrequency: 'weekly' as const },
        { path: '/products/flat-bottom-paper-bags', priority: 0.9, changeFrequency: 'weekly' as const },
        { path: '/products/v-bottom-paper-bags', priority: 0.85, changeFrequency: 'weekly' as const },
        { path: '/products/custom-printed-paper-bags', priority: 0.85, changeFrequency: 'weekly' as const },
        { path: '/export/uae', priority: 0.9, changeFrequency: 'weekly' as const },
        { path: '/export/uk', priority: 0.9, changeFrequency: 'weekly' as const },
        { path: '/export/spain', priority: 0.85, changeFrequency: 'weekly' as const },
        { path: '/export/italy', priority: 0.85, changeFrequency: 'weekly' as const },
        { path: '/manufacturing', priority: 0.8, changeFrequency: 'monthly' as const },
        { path: '/about', priority: 0.7, changeFrequency: 'monthly' as const },
        { path: '/contact', priority: 0.8, changeFrequency: 'monthly' as const },
        { path: '/blog', priority: 0.7, changeFrequency: 'weekly' as const },
        { path: '/privacy-policy', priority: 0.4, changeFrequency: 'yearly' as const },
        { path: '/terms-of-service', priority: 0.4, changeFrequency: 'yearly' as const },
    ].map((item) => ({
        url: `${baseUrl}${item.path}`,
        lastModified: now,
        changeFrequency: item.changeFrequency,
        priority: item.priority,
    }));

    // Dynamic blog routes
    const blogRoutes = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    return [...routes, ...blogRoutes];
}
