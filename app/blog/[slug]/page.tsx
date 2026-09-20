import { blogPosts } from '@/lib/blog-data';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, User, Calendar, Clock, Package, ArrowRight, ShieldCheck } from 'lucide-react';

interface Props {
    params: Promise<{
        slug: string;
    }>;
}

// Generate static params for all posts
export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

// Generate specific metadata for each post
export async function generateMetadata({ params }: Props) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);
    if (!post) return { title: 'Post Not Found' };

    return {
        title: `${post.title} | Gargi PaperKraft`,
        description: post.excerpt,
        keywords: post.keywords,
        alternates: {
            canonical: `/blog/${post.slug}`,
        },
        openGraph: {
            title: post.title,
            description: post.excerpt,
            url: `https://www.gargipaperkraft.com/blog/${post.slug}`,
            type: 'article',
            publishedTime: new Date(post.date).toISOString(),
            authors: [post.author],
        },
    };
}

export default async function BlogPost({ params }: Props) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    const jsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'BreadcrumbList',
                'itemListElement': [
                    {
                        '@type': 'ListItem',
                        'position': 1,
                        'name': 'Home',
                        'item': 'https://www.gargipaperkraft.com',
                    },
                    {
                        '@type': 'ListItem',
                        'position': 2,
                        'name': 'Blog & Insights',
                        'item': 'https://www.gargipaperkraft.com/blog',
                    },
                    {
                        '@type': 'ListItem',
                        'position': 3,
                        'name': post.title,
                        'item': `https://www.gargipaperkraft.com/blog/${post.slug}`,
                    },
                ],
            },
            {
                '@type': 'Article',
                'headline': post.title,
                'description': post.excerpt,
                'author': {
                    '@type': 'Organization',
                    'name': 'Gargi PaperKraft Export Division',
                    'url': 'https://www.gargipaperkraft.com',
                },
                'publisher': {
                    '@type': 'Organization',
                    'name': 'Gargi PaperKraft',
                    'logo': {
                        '@type': 'ImageObject',
                        'url': 'https://www.gargipaperkraft.com/logo.png',
                    },
                },
                'datePublished': new Date(post.date).toISOString(),
                'dateModified': new Date().toISOString(),
                'mainEntityOfPage': `https://www.gargipaperkraft.com/blog/${post.slug}`,
                'keywords': post.keywords.join(', '),
            },
        ],
    };

    return (
        <article className="min-h-screen pt-24 pb-20 bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Post Header */}
            <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <Link
                    href="/blog"
                    className="inline-flex items-center text-forest-600 hover:text-forest-800 transition-colors mb-8 font-medium text-sm"
                >
                    <ArrowLeft className="mr-2 w-4 h-4" /> Back to Insights
                </Link>

                <h1 className="text-3xl md:text-5xl font-bold text-forest-950 mb-6 leading-tight">
                    {post.title}
                </h1>

                <div className="flex flex-wrap items-center gap-6 text-forest-500 text-sm font-medium border-b border-kraft-200 pb-8">
                    <div className="flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        {post.author}
                    </div>
                    <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {post.date}
                    </div>
                    <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {post.readTime}
                    </div>
                </div>
            </header>

            {/* Post Content */}
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    className="prose prose-lg prose-forest max-w-none text-forest-800 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* B2B Export Lead Conversion Magnet Box */}
                <div className="mt-14 p-6 sm:p-8 bg-stone-900 text-white rounded-2xl border border-stone-800 shadow-xl">
                    <div className="flex items-center gap-2 text-amber-400 text-xs font-mono font-bold uppercase tracking-wider mb-2">
                        <ShieldCheck className="w-4 h-4" />
                        <span>Factory Direct Sourcing · International Export Desk</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white">
                        Sourcing Paper Bags for International Export?
                    </h3>
                    <p className="text-sm text-stone-300 mb-6 leading-relaxed">
                        Gargi PaperKraft manufactures high-tensile kraft paper bags (SOS square bottom, flat bottom with handles, and pinch pouches) sourced from FSC-certified paper mills. We ship 20ft and 40ft High Cube containers (FOB / CIF) to the UAE, UK, Spain, Italy, and international markets.
                    </p>
                    <div className="flex flex-wrap items-center gap-3">
                        <Link
                            href="/request-quote"
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold rounded-lg text-xs transition"
                        >
                            <Package className="w-4 h-4" />
                            <span>Request Free Export Sample Kit</span>
                        </Link>
                        <a
                            href="https://wa.me/919918280347?text=Hello%20Gargi%20PaperKraft%20Export%20Desk,%20I%20am%20interested%20in%20container%20paper%20bag%20supply."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-700 hover:bg-emerald-600 text-white font-semibold rounded-lg text-xs transition"
                        >
                            <span>WhatsApp Export Desk (+91 9918280347)</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-kraft-200">
                    <h4 className="text-xs font-bold text-forest-400 uppercase tracking-widest mb-3">Related Search Topics</h4>
                    <div className="flex flex-wrap gap-2">
                        {post.keywords.map((keyword, idx) => (
                            <span key={idx} className="bg-kraft-100 text-forest-800 px-3 py-1 rounded-full text-xs font-semibold">
                                #{keyword}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </article>
    );
}
