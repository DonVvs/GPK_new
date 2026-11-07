"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
    return (
        <div className="bg-kraft-50 min-h-screen">
            {/* Header */}
            <section className="bg-forest-900 text-white pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/factory/real-unwinding-line.webp')] opacity-15 bg-cover bg-center" />
                <div className="absolute inset-0 bg-gradient-to-b from-forest-900/40 to-forest-900" />
                <div className="relative max-w-7xl mx-auto px-4 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold mb-6"
                    >
                        Get in Touch
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-forest-200 max-w-2xl mx-auto"
                    >
                        Have a question about our products or need a custom quote? We're here to help.
                    </motion.p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-12"
                    >
                        <div>
                            <h2 className="text-3xl font-bold text-forest-900 mb-6">Contact Information</h2>
                            <p className="text-forest-700 text-lg leading-relaxed">
                                Reach out to our sales or support team directly. We pride ourselves on quick response times and personalized service.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div className="flex items-start space-x-6 group">
                                <div className="bg-white p-4 rounded-xl shadow-sm border border-kraft-200 group-hover:border-forest-500 transition-colors">
                                    <MapPin className="w-6 h-6 text-forest-600" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-forest-900 mb-1">Registered Office</h4>
                                    <p className="text-forest-700">
                                        B-33, Dayal Greens Phase - I, Dewa Road, <br />
                                        Near Kunwar Global School, Lucknow, UP – 226019
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-6 group">
                                <div className="bg-white p-4 rounded-xl shadow-sm border border-kraft-200 group-hover:border-forest-500 transition-colors">
                                    <MapPin className="w-6 h-6 text-forest-600" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-forest-900 mb-1">Factory Works</h4>
                                    <p className="text-forest-700 mb-2">
                                        Plot No-20, Goyala Industrial Area, <br />
                                        Near Paras Biotech, Chinhat, Dewa Road, <br />
                                        Lucknow, UP - 226019
                                    </p>
                                    <a
                                        href="https://maps.app.goo.gl/XF3KbU1vbkkFAjK98"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-sm font-bold text-kraft-600 hover:text-forest-600 transition-colors"
                                    >
                                        View on Google Maps <ExternalLink className="w-4 h-4 ml-1" />
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-6 group">
                                <div className="bg-white p-4 rounded-xl shadow-sm border border-kraft-200 group-hover:border-forest-500 transition-colors">
                                    <Phone className="w-6 h-6 text-forest-600" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-forest-900 mb-1">Phone</h4>
                                    <p className="text-forest-700 text-lg">+91 9918280347</p>
                                    <p className="text-forest-700 text-lg">+91 7007922573</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-6 group">
                                <div className="bg-white p-4 rounded-xl shadow-sm border border-kraft-200 group-hover:border-forest-500 transition-colors">
                                    <Mail className="w-6 h-6 text-forest-600" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-forest-900 mb-1">Email</h4>
                                    <div className="space-y-1.5 text-base text-forest-700">
                                        <p>
                                            For domestic queries use:{" "}
                                            <a
                                                href="mailto:sales@gargipaperkraft.com"
                                                className="text-forest-900 font-semibold hover:underline"
                                            >
                                                sales@gargipaperkraft.com
                                            </a>
                                        </p>
                                        <p>
                                            For export queries:{" "}
                                            <a
                                                href="mailto:export@gargipaperkraft.com"
                                                className="text-forest-900 font-semibold hover:underline"
                                            >
                                                export@gargipaperkraft.com
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </motion.div>

                    {/* Contact Form Component */}
                    <ContactForm />

                </div>
            </div>
        </div>
    );
}
