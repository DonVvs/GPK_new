import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Leaf, ShieldCheck, Truck } from 'lucide-react';

export const metadata = {
    title: 'Top Paper Bag Manufacturer in Lucknow | About Gargi PaperKraft',
    description: 'Gargi PaperKraft is a leading ISO-certified paper bag manufacturer in Lucknow, India. We specialize in sustainable, eco-friendly packaging for big brands like Swiggy and Zomato.',
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-forest-950 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-25">
                    <video
                        className="w-full h-full object-cover"
                        autoPlay loop muted playsInline
                        poster="/factory/real-reel-stand.jpg"
                        preload="metadata"
                    >
                        <source src="/factory/IMG_2750.mp4" type="video/mp4" />
                        <source src="/factory/IMG_2750.mov" type="video/quicktime" />
                    </video>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-900/80 to-transparent pointer-events-none" />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Crafting Sustainability Since 2018</h1>
                    <p className="text-xl text-forest-200 max-w-3xl mx-auto leading-relaxed">
                        From a small unit to a state-of-the-art manufacturing hub in Lucknow, Gargi PaperKraft has been on a mission to replace plastic with premium, eco-friendly paper solutions.
                    </p>
                </div>
            </section>

            {/* Our Story & Mission */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <div className="inline-block bg-kraft-100 text-forest-800 px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase">
                                Our Story
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-forest-900 leading-tight">
                                More Than Just A Paper Bag Manufacturer
                            </h2>
                            <p className="text-lg text-forest-700/80 leading-relaxed">
                                Gargi PaperKraft was founded with a singular vision: to empower brands with packaging that reflects their commitment to the planet. We recognized early on that the future of retail and food delivery lies in sustainable materials.
                            </p>
                            <p className="text-lg text-forest-700/80 leading-relaxed">
                                Today, operating from our expansive facility in the <strong>Goyala Industrial Area, Lucknow</strong>, we serve some of India's biggest brands including Swiggy, Zomato, and Indian Railways. Our automated production lines ensure consistency, while our rigorous quality control guarantees that every bag meets international standards.
                            </p>

                            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="flex items-start space-x-3">
                                    <div className="bg-green-100 p-2 rounded-lg text-green-700">
                                        <Leaf className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-forest-900">100% Eco-Friendly</h4>
                                        <p className="text-sm text-forest-600">Biodegradable materials sourced responsibly.</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="bg-blue-100 p-2 rounded-lg text-blue-700">
                                        <ShieldCheck className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-forest-900">ISO Certified</h4>
                                        <p className="text-sm text-forest-600">Global standards for quality and safety.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl group bg-[#081412] border border-stone-200">
                            <video
                                className="w-full h-full object-cover"
                                autoPlay loop muted playsInline
                                poster="/factory/real-forming-line-1.jpg"
                                preload="metadata"
                            >
                                <source src="/factory/IMG_2511.mp4" type="video/mp4" />
                                <source src="/factory/IMG_2511.mov" type="video/quicktime" />
                            </video>
                            <div className="absolute inset-0 bg-gradient-to-tr from-forest-950/40 via-transparent to-transparent pointer-events-none" />
                            <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 text-xs font-mono text-white/90">
                                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                <span>Automated Bag Machine · Lucknow Plant</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Factory Showcase Grid */}
            <section className="py-20 bg-kraft-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-forest-900 mb-4">Inside Our Factory</h2>
                        <p className="text-lg text-forest-600 max-w-2xl mx-auto">
                            Authentic footage from our plant floor in Lucknow. Where high-speed automation meets rigorous engineering.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Showcase 1: Real Bag Forming Machine */}
                        <div className="relative group h-80 rounded-xl overflow-hidden shadow-lg bg-[#081412] border border-stone-200">
                            <video
                                className="w-full h-full object-cover"
                                autoPlay loop muted playsInline
                                poster="/factory/factory-clip-1.jpg"
                                preload="metadata"
                            >
                                <source src="/factory/IMG_2511.mp4" type="video/mp4" />
                                <source src="/factory/IMG_2511.mov" type="video/quicktime" />
                            </video>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-5">
                                <span className="text-white font-bold text-lg">Automated Bag Line</span>
                                <span className="text-white/70 text-xs font-mono mt-0.5">High-speed conversion &amp; handles</span>
                            </div>
                        </div>

                        {/* Showcase 2: Real Jumbo Kraft Reel Stand */}
                        <div className="relative group h-80 rounded-xl overflow-hidden shadow-lg bg-[#081412] border border-stone-200">
                            <video
                                className="w-full h-full object-cover"
                                autoPlay loop muted playsInline
                                poster="/factory/real-jumbo-roll-1.jpg"
                                preload="metadata"
                            >
                                <source src="/factory/IMG_2750.mp4" type="video/mp4" />
                                <source src="/factory/IMG_2750.mov" type="video/quicktime" />
                            </video>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-5">
                                <span className="text-white font-bold text-lg">Jumbo Reel Feeding</span>
                                <span className="text-white/70 text-xs font-mono mt-0.5">Automated unwinding &amp; tension</span>
                            </div>
                        </div>

                        {/* Showcase 3: Real Optical Sensor Quality Control */}
                        <div className="relative group h-80 rounded-xl overflow-hidden shadow-lg bg-[#081412] border border-stone-200">
                            <Image
                                src="/factory/real-machinery-close.jpg"
                                alt="Optical Sensor Alignment"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-5">
                                <span className="text-white font-bold text-lg">Sensor Alignment &amp; QC</span>
                                <span className="text-white/70 text-xs font-mono mt-0.5">Optical inspection &amp; micro-sensors</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Location */}
            <section className="bg-forest-900 text-white py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div className="relative">
                                <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Location</h2>
                                <div className="h-1 w-24 bg-white rounded-full" />
                            </div>

                            <div className="space-y-6 text-forest-50 text-xl leading-relaxed">
                                <p>
                                    Plot No 20, Deva Rd, behind Paras Biotech, near Chinhat UPSIDC, Industrial Area, Goila, Lucknow, Uttar Pradesh 226019
                                </p>

                                <div className="pt-4 space-y-4">
                                    <div className="flex flex-col space-y-1">
                                        <span className="font-bold text-white tracking-wide">Tel:</span>
                                        <span>+91 99182 80347</span>
                                        <span>+91 70079 22573</span>
                                    </div>
                                    <div className="flex flex-col space-y-1">
                                        <span className="font-bold text-white tracking-wide">Email:</span>
                                        <span>gargi.paperkraft@gmail.com</span>
                                    </div>
                                </div>

                                <div className="pt-8 space-y-2 text-base opacity-80 font-light border-t border-forest-700/50 mt-8">
                                    <p>Sustainable Manufacturing Practices</p>
                                </div>
                            </div>
                        </div>

                        <div className="h-[450px] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-forest-800/30">
                            <iframe
                                src="https://maps.google.com/maps?q=Gargi+PaperKraft+Lucknow&t=&z=14&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full h-full filter grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 bg-forest-950 text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-6">Ready to Partner With Us?</h2>
                    <p className="text-xl text-forest-200 mb-10">
                        Join the league of sustainable brands relying on Gargi PaperKraft.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block bg-white text-forest-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-kraft-100 transition-all shadow-lg"
                    >
                        Contact Us Today
                    </Link>
                </div>
            </section>
        </main>
    );
}
