"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
  const phoneNumber = "919918280347";
  const message = "Hello Gargi PaperKraft Export Desk, I would like to inquire about container-load paper bag supply.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <motion.div
          whileHover={{ scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.97 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="group flex items-center gap-3 pl-3 pr-3 sm:pr-4 py-2.5 rounded-full backdrop-blur-xl border transition-all duration-300 shadow-2xl cursor-pointer"
          style={{
            backgroundColor: "rgba(15, 34, 33, 0.92)",
            borderColor: "rgba(120, 198, 193, 0.28)",
            boxShadow: "0 12px 32px -4px rgba(0, 0, 0, 0.45), 0 0 18px rgba(45, 112, 107, 0.25)",
          }}
        >
          {/* Brand-themed icon circle with live status indicator */}
          <div
            className="relative flex items-center justify-center w-9 h-9 rounded-full text-white transition-transform duration-300 group-hover:scale-105"
            style={{ backgroundColor: "var(--gpk-brand)" }}
          >
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="currentColor"
              className="text-white drop-shadow-sm"
              aria-hidden="true"
            >
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.42 0-2.82-.37-4.05-1.08l-.29-.17-3.12.82.83-3.04-.19-.3a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.49-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.72 4.31 3.81.6.26 1.07.42 1.44.53.61.2 1.16.17 1.6.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.17-.48-.3" />
            </svg>
            {/* Pulsing live dot */}
            <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-[#0f2221] animate-pulse" />
          </div>

          {/* Export Desk Label */}
          <div className="hidden sm:flex flex-col text-left pr-1">
            <span
              className="text-[10px] font-mono font-bold uppercase tracking-widest leading-tight"
              style={{ color: "#78c6c1" }}
            >
              Export Desk
            </span>
            <span className="text-xs font-semibold text-white tracking-tight leading-tight mt-0.5">
              WhatsApp Sales
            </span>
          </div>
        </motion.div>
      </Link>
    </div>
  );
}
