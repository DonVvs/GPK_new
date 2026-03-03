"use client";

import { useState, useEffect } from "react";
import { X, Download, BookOpen, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const BROCHURE_PATH = "/Brochure_GPK.pdf";

// ─── Full PDF Modal ───────────────────────────────────────────────────────────

export function BrochureModal({
    isOpen,
    onClose,
}: {
    isOpen: boolean;
    onClose: () => void;
}) {
    // Prevent background scroll when modal is open
    useEffect(() => {
        if (isOpen) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "";
        return () => { document.body.style.overflow = ""; };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    key="brochure-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4"
                    onClick={onClose}
                >
                    {/* Backdrop */}
                    <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

                    {/* Panel */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="relative z-10 w-full max-w-5xl h-[90vh] bg-forest-950 rounded-2xl shadow-2xl border border-forest-800 flex flex-col overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-6 py-4 border-b border-forest-800 flex-shrink-0">
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-lg bg-forest-800 flex items-center justify-center">
                                    <FileText className="w-5 h-5 text-kraft-400" />
                                </div>
                                <div>
                                    <h2 className="text-white font-bold text-lg leading-tight">
                                        GPK Company Brochure
                                    </h2>
                                    <p className="text-forest-400 text-xs">
                                        Product catalogue &amp; capabilities
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <a
                                    href={BROCHURE_PATH}
                                    download="GPK_Brochure.pdf"
                                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-kraft-500 hover:bg-kraft-400 text-white text-sm font-semibold transition-colors"
                                >
                                    <Download className="w-4 h-4" />
                                    Download
                                </a>
                                <button
                                    onClick={onClose}
                                    aria-label="Close brochure"
                                    className="w-9 h-9 rounded-lg flex items-center justify-center bg-forest-800 hover:bg-forest-700 text-forest-300 hover:text-white transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/* PDF Embed */}
                        <div className="flex-1 min-h-0">
                            <iframe
                                src={`${BROCHURE_PATH}#toolbar=1&navpanes=0`}
                                className="w-full h-full"
                                title="GPK Brochure"
                            />
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

// ─── Gentle Popup Prompt ──────────────────────────────────────────────────────

export function BrochurePopup() {
    const [visible, setVisible] = useState(false);
    const [dismissed, setDismissed] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    // Show popup after 4 s, only once per session
    useEffect(() => {
        const alreadySeen = sessionStorage.getItem("gpk_brochure_popup_seen");
        if (alreadySeen) return;

        const timer = setTimeout(() => {
            setVisible(true);
            sessionStorage.setItem("gpk_brochure_popup_seen", "true");
        }, 4000);

        return () => clearTimeout(timer);
    }, []);

    const dismiss = () => {
        setVisible(false);
        setDismissed(true);
    };

    const openBrochure = () => {
        setVisible(false);
        setModalOpen(true);
    };

    return (
        <>
            {/* Popup toast */}
            <AnimatePresence>
                {visible && !dismissed && (
                    <motion.div
                        key="brochure-popup"
                        initial={{ opacity: 0, y: 40, x: 20 }}
                        animate={{ opacity: 1, y: 0, x: 0 }}
                        exit={{ opacity: 0, y: 40, x: 20 }}
                        transition={{ type: "spring", stiffness: 260, damping: 22 }}
                        className="fixed bottom-24 right-6 z-50 w-72 rounded-2xl bg-forest-950 border border-forest-700 shadow-2xl shadow-black/50 overflow-hidden"
                    >
                        {/* Accent bar */}
                        <div className="h-1 w-full bg-gradient-to-r from-kraft-500 to-forest-500" />

                        <div className="p-5">
                            {/* Icon + close */}
                            <div className="flex items-start justify-between mb-3">
                                <div className="w-10 h-10 rounded-xl bg-kraft-500/15 flex items-center justify-center">
                                    <BookOpen className="w-5 h-5 text-kraft-400" />
                                </div>
                                <button
                                    onClick={dismiss}
                                    aria-label="Dismiss"
                                    className="text-forest-500 hover:text-forest-200 transition-colors mt-0.5"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            </div>

                            <h3 className="text-white font-bold text-sm mb-1">
                                Explore Our Brochure
                            </h3>
                            <p className="text-forest-300/80 text-xs leading-relaxed mb-4">
                                Discover our full product range, custom capabilities &amp; sustainability story.
                            </p>

                            <div className="flex gap-2">
                                <button
                                    onClick={openBrochure}
                                    className="flex-1 py-2 rounded-lg bg-kraft-500 hover:bg-kraft-400 text-white text-xs font-semibold transition-colors"
                                >
                                    View Brochure
                                </button>
                                <a
                                    href={BROCHURE_PATH}
                                    download="GPK_Brochure.pdf"
                                    onClick={dismiss}
                                    className="flex items-center justify-center px-3 py-2 rounded-lg bg-forest-800 hover:bg-forest-700 text-kraft-300 hover:text-kraft-200 transition-colors"
                                >
                                    <Download className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Full viewer */}
            <BrochureModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
        </>
    );
}
