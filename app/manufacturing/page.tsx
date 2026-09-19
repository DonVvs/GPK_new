"use client";

import { motion } from "framer-motion";
import { Settings, Truck, CheckCircle, RefreshCw, Cpu, BarChart3, Clock, Scale } from "lucide-react";
import Image from "next/image";
import LazyVideo from "@/components/LazyVideo";

export default function ManufacturingPage() {
    const processSteps = [
        {
            id: 1,
            title: "Sustainable Kraft Reel Sourcing",
            desc: "Production begins with virgin and recycled FSC-certified kraft paper reels (50–140 GSM). Jumbo rolls are mounted on heavy-duty reel stands engineered for continuous automated feed.",
            icon: <RefreshCw className="w-6 h-6" />,
            image: "/factory/real-jumbo-roll-1.webp",
            video: "/factory/IMG_2750.mp4"
        },
        {
            id: 2,
            title: "Precision Tension & Web Guiding",
            desc: "Multi-roller precision tension feed ensures wrinkle-free, millimeter-accurate paper movement into downstream folding and printing sections with zero web drift.",
            icon: <Cpu className="w-6 h-6" />,
            image: "/factory/real-unwinding-line.webp"
        },
        {
            id: 3,
            title: "High-Speed Automated Forming",
            desc: "Our high-speed conversion line automatically folds, side-glues, attaches twisted paper handles, and forms square-bottom bags with robotic precision.",
            icon: <Settings className="w-6 h-6" />,
            image: "/factory/real-forming-line-1.webp",
            video: "/factory/IMG_2511.mp4"
        },
        {
            id: 4,
            title: "Optical Sensor Verification & QC",
            desc: "Electronic sensors monitor fold alignment, handle adhesion, and bag dimensions in real time. Every batch undergoes burst-factor (BF 20–35+) tensile load verification.",
            icon: <CheckCircle className="w-6 h-6" />,
            image: "/factory/real-machinery-close.webp" 
        }
    ];

    return (
        <div className="bg-white min-h-screen">

            {/* Cinematic Hero with Real Factory Video Loop */}
            <div className="relative min-h-[420px] sm:h-[60vh] pt-28 sm:pt-0 flex items-center justify-center overflow-hidden bg-[#081412]">
                <LazyVideo
                    className="absolute inset-0 w-full h-full object-cover opacity-50"
                    poster="/factory/real-jumbo-roll-1.webp"
                    ariaLabel="Sustainable Kraft Reel Sourcing"
                    priority={true}
                    sources={[
                        { src: "/factory/IMG_2750.mp4", type: "video/mp4" },
                        { src: "/factory/IMG_2750.mov", type: "video/quicktime" },
                    ]}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#081412]/90 via-[#081412]/40 to-[#081412]/90" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081412] via-transparent to-transparent" />

                <div className="relative z-10 max-w-7xl mx-auto px-4 text-center pb-12 sm:pb-0">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl sm:text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-kraft-100 to-white mb-4 sm:mb-6 leading-tight"
                    >
                        Precision Engineering.
                    </motion.h1>
                    <p className="text-base sm:text-xl md:text-2xl text-forest-200 max-w-3xl mx-auto font-light leading-relaxed">
                        Where advanced automation meets environmental stewardship.
                    </p>
                </div>
            </div>

            {/* Capacity Stats Dashboard */}
            <div className="relative -mt-10 sm:-mt-20 z-20 max-w-7xl mx-auto px-4">
                <div className="bg-white rounded-2xl shadow-xl border border-kraft-200 p-5 sm:p-8 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-kraft-200">
                    <div className="py-4 md:px-8 text-center bg-[url('/grid.svg')]">
                        <div className="flex items-center justify-center mb-3 sm:mb-4 text-forest-500">
                            <BarChart3 className="w-7 h-7 sm:w-8 sm:h-8" />
                        </div>
                        <h3 className="text-3xl sm:text-4xl font-bold text-forest-900 mb-1 sm:mb-2">1,00,000+</h3>
                        <p className="text-forest-600 text-sm sm:text-base font-medium">Bags Produced Daily</p>
                    </div>
                    <div className="py-4 md:px-8 text-center bg-[url('/grid.svg')]">
                        <div className="flex items-center justify-center mb-3 sm:mb-4 text-forest-500">
                            <Clock className="w-7 h-7 sm:w-8 sm:h-8" />
                        </div>
                        <h3 className="text-3xl sm:text-4xl font-bold text-forest-900 mb-1 sm:mb-2">24/7</h3>
                        <p className="text-forest-600 text-sm sm:text-base font-medium">Automated Operations</p>
                    </div>
                    <div className="py-4 md:px-8 text-center bg-[url('/grid.svg')]">
                        <div className="flex items-center justify-center mb-3 sm:mb-4 text-forest-500">
                            <Scale className="w-7 h-7 sm:w-8 sm:h-8" />
                        </div>
                        <h3 className="text-3xl sm:text-4xl font-bold text-forest-900 mb-1 sm:mb-2">100%</h3>
                        <p className="text-forest-600 text-sm sm:text-base font-medium">Quality Compliance</p>
                    </div>
                </div>
            </div>

            {/* Visual Process Journey */}
            <div className="max-w-7xl mx-auto px-4 py-16 sm:py-28">
                <div className="text-center mb-12 sm:mb-20">
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-forest-900 mb-4 sm:mb-6">The Manufacturing Journey</h2>
                    <p className="text-sm sm:text-lg text-forest-600 max-w-2xl mx-auto">
                        A transparent look at how raw kraft paper transforms into your brand's packaging.
                    </p>
                </div>


                <div className="space-y-24 relative">
                    {/* Center Line */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-forest-200 via-forest-900/20 to-forest-200 -translate-x-1/2" />

                    {processSteps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className={`flex flex-col md:flex-row items-center gap-10 md:gap-20 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                        >
                            {/* Visual Side */}
                            <div className="flex-1 w-full group">
                                <div className="relative h-80 md:h-auto md:aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-white rotate-1 md:group-hover:rotate-0 transition-transform duration-500 bg-[#081412]">
                                    {step.video ? (
                                        <LazyVideo
                                            className="w-full h-full object-cover"
                                            poster={step.image}
                                            ariaLabel={step.title}
                                            sources={[
                                                { src: step.video, type: "video/mp4" }
                                            ]}
                                        />
                                    ) : (
                                        <Image
                                            src={step.image}
                                            alt={step.title}
                                            fill
                                            className="object-cover md:group-hover:scale-105 transition-transform duration-700"
                                        />
                                    )}
                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-forest-900/60 to-transparent opacity-60 pointer-events-none" />
                                    <div className="absolute bottom-3 left-3 text-[11px] font-mono text-white/90 bg-black/60 px-2.5 py-1 rounded-md backdrop-blur-sm">
                                        Gargi Facility · Real Footage
                                    </div>
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className="flex-1 text-center md:text-left relative">
                                <div className="inline-flex items-center justify-center p-3 bg-forest-50 rounded-xl text-forest-700 mb-6 shadow-sm border border-forest-100">
                                    {step.icon}
                                    <span className="ml-2 font-bold text-sm tracking-widest uppercase">Step 0{step.id}</span>
                                </div>
                                <h3 className="text-3xl font-bold text-forest-900 mb-4">{step.title}</h3>
                                <p className="text-lg text-forest-600 leading-relaxed">
                                    {step.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Export & Logistics */}
            <div className="bg-forest-950 text-white py-24">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl font-bold mb-6">Built for Global Scale</h2>
                        <p className="text-forest-200 text-lg mb-8">
                            Our facility is optimized not just for production, but for logistics. Located near major transport arteries in Lucknow, we ensure seamless dispatch across India and borders.
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-forest-900/50 p-6 rounded-xl border border-forest-800">
                                <Truck className="w-8 h-8 text-kraft-400 mb-4" />
                                <h4 className="font-bold">Fleet Ready</h4>
                                <p className="text-sm text-forest-300">Daily dispatches to major hubs.</p>
                            </div>
                            <div className="bg-forest-900/50 p-6 rounded-xl border border-forest-800">
                                <CheckCircle className="w-8 h-8 text-kraft-400 mb-4" />
                                <h4 className="font-bold">Pan India Delivery</h4>
                                <p className="text-sm text-forest-300">We delivery to all major cities in India.</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-96 w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#081412]">
                        <LazyVideo
                            className="w-full h-full object-cover"
                            poster="/factory/factory-clip-2.webp"
                            ariaLabel="Plant Floor Chinhat Lucknow"
                            sources={[
                                { src: "/factory/IMG_2750.mp4", type: "video/mp4" },
                                { src: "/factory/IMG_2750.mov", type: "video/quicktime" },
                            ]}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-transparent pointer-events-none" />
                        <div className="absolute bottom-4 left-4 text-xs font-mono text-white/90 bg-black/60 px-3 py-1.5 rounded-full backdrop-blur-sm">
                            Plant Floor · Chinhat, Lucknow
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
