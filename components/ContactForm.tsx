"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

export default function ContactForm() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [message, setMessage] = useState("");
    const [captcha, setCaptcha] = useState({ num1: 0, num2: 0 });
    const [captchaAnswer, setCaptchaAnswer] = useState("");

    useEffect(() => {
        setCaptcha({
            num1: Math.floor(Math.random() * 10),
            num2: Math.floor(Math.random() * 10)
        });
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (parseInt(captchaAnswer) !== captcha.num1 + captcha.num2) {
            setStatus("error");
            setMessage("Incorrect captcha. Please check the answer.");
            return;
        }

        setStatus("submitting");

        const formData = new FormData(e.currentTarget);
        // Add your Web3Forms Access Key here or via environment variable
        formData.append("access_key", "c81c34ad-86e6-492c-91d8-6f0e411ecc5a");


        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setStatus("success");
                setMessage("Message sent successfully! We will get back to you soon.");
                (e.target as HTMLFormElement).reset();
                setCaptchaAnswer("");
                setCaptcha({ num1: Math.floor(Math.random() * 10), num2: Math.floor(Math.random() * 10) });
            } else {
                setStatus("error");
                setMessage(data.message || "Something went wrong. Please try again.");
            }
        } catch (error) {
            setStatus("error");
            setMessage("Failed to connect to the server.");
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl shadow-xl border border-kraft-100"
        >
            <h3 className="text-xl sm:text-2xl font-bold text-forest-900 mb-6">Send us a Message</h3>


            <form onSubmit={handleSubmit} className="space-y-6">

                {/* Security: Honeypot for Bots */}
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-semibold text-forest-700">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            required
                            placeholder="Amit Shah"
                            className="w-full px-4 py-3 rounded-xl border border-kraft-200 focus:border-forest-500 focus:ring-2 focus:ring-forest-200 outline-none transition-all bg-kraft-50/50"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-semibold text-forest-700">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            placeholder="e.g. buyer@company.com"
                            className="w-full px-4 py-3 rounded-xl border border-kraft-200 focus:border-forest-500 focus:ring-2 focus:ring-forest-200 outline-none transition-all bg-kraft-50/50"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-semibold text-forest-700">Subject</label>
                    <select
                        name="subject"
                        id="subject"
                        className="w-full px-4 py-3 rounded-xl border border-kraft-200 focus:border-forest-500 focus:ring-2 focus:ring-forest-200 outline-none transition-all bg-kraft-50/50 appearance-none"
                    >
                        <option value="Export Order Inquiry">Export Order Inquiry (Container / Bulk Supply)</option>
                        <option value="Sample Kit Request">Sample Kit Request</option>
                        <option value="Custom Order">Domestic Wholesale / Custom Quote</option>
                        <option value="Distributorship">Distributorship Interest</option>
                        <option value="General Inquiry">General Inquiry</option>
                    </select>
                </div>

                <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold text-forest-700">Message</label>
                    <textarea
                        name="message"
                        id="message"
                        required
                        rows={4}
                        placeholder="Tell us about your packaging requirements (bag size, quantity, destination port)..."
                        className="w-full px-4 py-3 rounded-xl border border-kraft-200 focus:border-forest-500 focus:ring-2 focus:ring-forest-200 outline-none transition-all bg-kraft-50/50 resize-none"
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="captcha" className="text-sm font-semibold text-forest-700">
                        Security Question: What is {captcha.num1 || 4} + {captcha.num2 || 3}?
                    </label>
                    <input
                        type="number"
                        id="captcha"
                        required
                        value={captchaAnswer}
                        onChange={(e) => setCaptchaAnswer(e.target.value)}
                        placeholder="Answer"
                        className="w-full px-4 py-3 rounded-xl border border-kraft-200 focus:border-forest-500 focus:ring-2 focus:ring-forest-200 outline-none transition-all bg-kraft-50/50"
                    />
                </div>

                <button
                    type="submit"
                    disabled={status === "submitting" || status === "success"}
                    className="w-full bg-forest-900 text-white font-bold py-4 rounded-xl hover:bg-forest-800 transition-all flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed group"
                >
                    {status === "submitting" ? (
                        <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            <span>Sending...</span>
                        </>
                    ) : status === "success" ? (
                        <>
                            <CheckCircle className="w-5 h-5" />
                            <span>Sent Successfully</span>
                        </>
                    ) : (
                        <>
                            <span>Send Message</span>
                            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </>
                    )}
                </button>

                {status === "success" && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 bg-green-50 text-green-700 rounded-xl flex items-center space-x-3 text-sm font-medium"
                    >
                        <CheckCircle className="w-5 h-5 flex-shrink-0" />
                        <span>{message}</span>
                    </motion.div>
                )}

                {status === "error" && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 bg-red-50 text-red-700 rounded-xl flex items-center space-x-3 text-sm font-medium"
                    >
                        <AlertCircle className="w-5 h-5 flex-shrink-0" />
                        <span>{message}</span>
                    </motion.div>
                )}

            </form>
        </motion.div>
    );
}
