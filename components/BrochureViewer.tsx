"use client";

import { useState, useEffect } from "react";
import { X, Download, BookOpen, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const BROCHURE_PATH = "/Brochure_GPK.pdf";

// ─── Full PDF Modal ───────────────────────────────────────────────────────────

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
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
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
                    transition={{ duration: 0.2 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center sm:p-4"
                    onClick={onClose}
                >
                    {/* Backdrop */}
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

                    {/* Panel - Full-screen on mobile, rounded card on desktop */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.96, y: 15 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.96, y: 15 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="relative z-10 w-full sm:max-w-5xl h-[100dvh] sm:h-[90vh] bg-forest-950 rounded-none sm:rounded-2xl shadow-2xl border-0 sm:border border-forest-800 flex flex-col overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4 border-b border-forest-800/80 flex-shrink-0 bg-forest-950">
                            <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-forest-800 flex items-center justify-center flex-shrink-0">
                                    <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-kraft-400" />
                                </div>
                                <div className="truncate">
                                    <h2 className="text-white font-bold text-sm sm:text-base leading-tight truncate">
                                        GPK Company Brochure
                                    </h2>
                                    <p className="text-forest-400 text-[10px] sm:text-xs truncate">
                                        Product catalogue &amp; specifications
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-1.5 sm:gap-3 flex-shrink-0">
                                {/* Direct Open Fullscreen for mobile */}
                                <a
                                    href={BROCHURE_PATH}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hidden xs:inline-flex items-center gap-1 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-lg bg-forest-800 hover:bg-forest-700 text-kraft-300 hover:text-white text-xs font-medium transition-colors"
                                    title="Open in browser native reader"
                                >
                                    <span>Fullscreen</span>
                                    <span className="text-[10px]">↗</span>
                                </a>

                                <a
                                    href={BROCHURE_PATH}
                                    download="GPK_Brochure.pdf"
                                    className="flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-kraft-500 hover:bg-kraft-400 text-white text-xs sm:text-sm font-semibold transition-colors shadow-sm"
                                >
                                    <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                    <span className="hidden sm:inline">Download</span>
                                </a>

                                <button
                                    onClick={onClose}
                                    aria-label="Close brochure"
                                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center bg-forest-800 hover:bg-forest-700 text-forest-300 hover:text-white transition-colors"
                                >
                                    <X className="w-4 h-4 sm:w-5 sm:h-5" />
                                </button>
                            </div>
                        </div>

                        {/* Mobile quick-tip banner */}
                        <div className="sm:hidden flex items-center justify-between px-4 py-2 bg-kraft-500/10 border-b border-kraft-500/20 text-[11px] text-kraft-300 flex-shrink-0">
                            <span>Best viewed in full screen:</span>
                            <a
                                href={BROCHURE_PATH}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-bold text-white underline flex items-center gap-0.5"
                            >
                                Open Native PDF ↗
                            </a>
                        </div>

                        {/* Responsive PDF Viewer with fallback */}
                        <div className="flex-1 min-h-0 w-full h-full bg-forest-900/50 relative overflow-hidden" style={{ WebkitOverflowScrolling: "touch" }}>
                            <object
                                data={`${BROCHURE_PATH}#view=FitH`}
                                type="application/pdf"
                                className="w-full h-full"
                            >
                                <iframe
                                    src={`${BROCHURE_PATH}#view=FitH&toolbar=0&navpanes=0`}
                                    className="w-full h-full border-0"
                                    title="GPK Brochure"
                                >
                                    <div className="flex flex-col items-center justify-center p-8 text-center h-full text-white">
                                        <FileText className="w-12 h-12 text-kraft-400 mb-3" />
                                        <p className="font-semibold text-base mb-1">Gargi PaperKraft Brochure</p>
                                        <p className="text-xs text-forest-300 mb-4">Click below to view or download the complete PDF.</p>
                                        <a
                                            href={BROCHURE_PATH}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-6 py-3 rounded-full bg-kraft-500 text-white font-bold text-xs shadow-lg"
                                        >
                                            Open Fullscreen Brochure
                                        </a>
                                    </div>
                                </iframe>
                            </object>
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
            {/* Popup toast - Mobile safe positioning */}
            <AnimatePresence>
                {visible && !dismissed && (
                    <motion.div
                        key="brochure-popup"
                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 30, scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 280, damping: 24 }}
                        className="fixed bottom-20 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-24 z-40 sm:w-80 rounded-2xl bg-forest-950 border border-forest-700/80 shadow-2xl shadow-black/60 overflow-hidden"
                    >
                        {/* Accent bar */}
                        <div className="h-1 w-full bg-gradient-to-r from-kraft-500 to-forest-500" />

                        <div className="p-4 sm:p-5">
                            {/* Icon + close */}
                            <div className="flex items-start justify-between mb-2.5">
                                <div className="w-9 h-9 rounded-xl bg-kraft-500/15 flex items-center justify-center">
                                    <BookOpen className="w-4 h-4 text-kraft-400" />
                                </div>
                                <button
                                    onClick={dismiss}
                                    aria-label="Dismiss brochure prompt"
                                    className="text-forest-400 hover:text-white p-1 transition-colors"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            </div>

                            <h3 className="text-white font-bold text-sm mb-1">
                                Explore Factory Brochure
                            </h3>
                            <p className="text-forest-300/80 text-xs leading-relaxed mb-3.5">
                                Full product range, machine specifications &amp; export compliance details.
                            </p>

                            <div className="flex gap-2">
                                <button
                                    onClick={openBrochure}
                                    className="flex-1 py-2 sm:py-2.5 rounded-lg bg-kraft-500 hover:bg-kraft-400 text-white text-xs font-semibold transition-colors shadow-sm"
                                >
                                    View Brochure
                                </button>
                                <a
                                    href={BROCHURE_PATH}
                                    download="GPK_Brochure.pdf"
                                    onClick={dismiss}
                                    aria-label="Download brochure PDF"
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
