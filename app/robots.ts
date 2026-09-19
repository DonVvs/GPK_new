import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    const baseUrl = 'https://www.gargipaperkraft.com';

    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/', '/private/'],
            },
            {
                userAgent: 'Googlebot',
                allow: ['/', '/_next/static/'],
                disallow: ['/api/', '/private/'],
            },
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
        host: baseUrl,
    };
}
