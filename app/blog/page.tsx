import Link from 'next/link';
import { blogPosts } from '@/lib/blog-data';
import { ArrowRight } from 'lucide-react';

export const metadata = {
    title: 'Paper Bag Industry Insights & Export Guides | Gargi PaperKraft',
    description: 'Expert guides on importing paper bags from India to Sri Lanka, sustainable packaging regulations, pricing comparisons, and industry insights from Gargi PaperKraft — a leading Indian kraft paper bag manufacturer and exporter.',
};

export default function BlogIndex() {
    return (
        <main className="min-h-screen pb-20 bg-kraft-50">
            {/* Blog Header */}
            <section className="relative bg-forest-950 text-white py-32 mb-16 overflow-hidden">
                {/* Background Texture */}
                <div className="absolute inset-0 opacity-20 mix-blend-overlay">
                    <img
                        src="/images/blog-hero-texture.png"
                        alt="Texture"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Industry Insights</h1>
                    <p className="text-xl text-forest-200 max-w-2xl mx-auto font-light">
                        Expert perspectives on sustainable packaging, manufacturing technology, and the future of the paper industry in India.
                    </p>
                </div>
            </section>

            {/* Blog Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {blogPosts.map((post) => (
                        <article key={post.slug} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-kraft-200 group">
                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex items-center text-xs font-semibold tracking-wider text-forest-600 uppercase mb-3">
                                    {post.readTime} &bull; {post.date}
                                </div>
                                <h2 className="text-2xl font-bold text-forest-900 mb-4 group-hover:text-forest-700 transition-colors">
                                    <Link href={`/blog/${post.slug}`}>
                                        {post.title}
                                    </Link>
                                </h2>
                                <p className="text-forest-700/70 mb-6 flex-grow leading-relaxed">
                                    {post.excerpt}
                                </p>
                                <div className="mt-auto pt-6 border-t border-kraft-100 flex items-center justify-between">
                                    <span className="text-sm font-medium text-forest-500">
                                        By {post.author}
                                    </span>
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="inline-flex items-center text-forest-700 font-bold hover:text-forest-900 transition-colors"
                                    >
                                        Read Article <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </main>
    );
}
