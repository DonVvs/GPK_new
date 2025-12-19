"use client";

import { motion } from "framer-motion";
import { Settings, Truck, CheckCircle, RefreshCw, Cpu, BarChart3, Clock, Scale } from "lucide-react";
import Image from "next/image";

export default function ManufacturingPage() {
    const processSteps = [
        {
            id: 1,
            title: "Sustainable Sourcing",
            desc: "It all begins with premium, FSC-certified kraft paper rolls sourced from sustainable forests. Our warehouse maintains optimal humidity to ensure paper tensile strength.",
            icon: <RefreshCw className="w-6 h-6" />,
            image: "/images/manufacturing/raw-rolls.png"
        },
        {
            id: 2,
            title: "Precision Cutting",
            desc: "High-speed automated cutters slice paper with millimeter precision. This stage minimizes waste and ensures distinct uniformity for every batch.",
            icon: <Cpu className="w-6 h-6" />,
            image: "/images/manufacturing/cutting.png"
        },
        {
            id: 3,
            title: "Automated Forming",
            desc: "Our Japanese machinery folds, pastes, and forms the bags. This touch-free process guarantees hygiene for food-grade packaging while maximizing output speed.",
            icon: <Settings className="w-6 h-6" />,
            image: "/images/manufacturing/forming.png"
        },
        {
            id: 4,
            title: "Rigorous Quality Control",
            desc: "Before dispatch, bags undergo 'Burst Factor' and weight-bearing stress tests. Only batches with 100% pass rates make it to our shipping docks.",
            icon: <CheckCircle className="w-6 h-6" />,
            image: "/images/factory/quality-control.png" 
        }
    ];

    return (
        <div className="bg-white min-h-screen">

            {/* Cinematic Hero */}
            <div className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-forest-950">
                <div className="absolute inset-0 opacity-60">
                    <Image
                        src="/images/manufacturing/hero.png"
                        alt="Manufacturing Hero Macro"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-forest-950/90 via-forest-900/40 to-forest-950/90" />

                <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-kraft-100 to-white mb-6"
                    >
                        Precision Engineering.
                    </motion.h1>
                    <p className="text-xl md:text-2xl text-forest-200 max-w-3xl mx-auto font-light">
                        Where advanced automation meets environmental stewardship.
                    </p>
                </div>
            </div>

            {/* Capacity Stats Dashboard */}
            <div className="relative -mt-20 z-20 max-w-7xl mx-auto px-4">
                <div className="bg-white rounded-2xl shadow-xl border border-kraft-200 p-8 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-kraft-200">
                    <div className="py-4 md:px-8 text-center bg-[url('/grid.svg')]">
                        <div className="flex items-center justify-center mb-4 text-forest-500">
                            <BarChart3 className="w-8 h-8" />
                        </div>
                        <h3 className="text-4xl font-bold text-forest-900 mb-2">1,00,000+</h3>
                        <p className="text-forest-600 font-medium">Bags Produced Daily</p>
                    </div>
                    <div className="py-4 md:px-8 text-center bg-[url('/grid.svg')]">
                        <div className="flex items-center justify-center mb-4 text-forest-500">
                            <Clock className="w-8 h-8" />
                        </div>
                        <h3 className="text-4xl font-bold text-forest-900 mb-2">24/7</h3>
                        <p className="text-forest-600 font-medium">Automated Operations</p>
                    </div>
                    <div className="py-4 md:px-8 text-center bg-[url('/grid.svg')]">
                        <div className="flex items-center justify-center mb-4 text-forest-500">
                            <Scale className="w-8 h-8" />
                        </div>
                        <h3 className="text-4xl font-bold text-forest-900 mb-2">100%</h3>
                        <p className="text-forest-600 font-medium">Quality Compliance</p>
                    </div>
                </div>
            </div>

            {/* Visual Process Journey */}
            <div className="max-w-7xl mx-auto px-4 py-32">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold text-forest-900 mb-6">The Manufacturing Journey</h2>
                    <p className="text-lg text-forest-600 max-w-2xl mx-auto">
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
                                {/* FIX APPLIED BELOW: Added md:h-auto and md:aspect-square */}
                                <div className="relative h-80 md:h-auto md:aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-white rotate-1 md:group-hover:rotate-0 transition-transform duration-500">
                                    <Image
                                        src={step.image}
                                        alt={step.title}
                                        fill
                                        className="object-cover md:group-hover:scale-110 transition-transform duration-700"
                                    />
                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-forest-900/60 to-transparent opacity-60" />
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
                    <div className="relative h-96 w-full rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                        <Image
                            src="/images/factory/warehouse.png"
                            alt="Export Warehouse"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>

        </div>
    );
}
