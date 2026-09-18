"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/paper-bag-exporter-india", label: "Export" },
    { href: "/products", label: "Products" },
    { href: "/manufacturing", label: "Manufacturing" },
    { href: "/about", label: "About" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-3 sm:pt-4 px-3 sm:px-6 transition-all duration-300">
      <nav
        className={`max-w-7xl mx-auto rounded-full px-4 sm:px-6 py-2.5 sm:py-3 transition-all duration-400 border flex items-center justify-between ${
          scrolled
            ? "bg-[#fbf8f5]/92 backdrop-blur-xl shadow-[0_12px_36px_-6px_rgba(15,34,33,0.12)] border-[#2d706b]/20"
            : "bg-[#fbf8f5]/82 backdrop-blur-lg shadow-sm border-[#2d706b]/12"
        }`}
      >
        {/* Logo — original brand monogram & refined typography */}
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group relative z-50 flex-shrink-0">
          <Image
            src="/gpk_paperbagexporterindia.png"
            alt="Gargi PaperKraft Logo"
            width={120}
            height={44}
            className="h-8 sm:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            priority
          />
          <div className="flex flex-col">
            <span className="font-extrabold text-xs sm:text-sm tracking-tight leading-none text-[#1c3d3c]">
              GARGI <span className="text-[#2d706b]">PAPERKRAFT</span>
            </span>
            <span className="text-[8px] sm:text-[8.5px] font-mono tracking-[0.22em] uppercase font-semibold text-[#4a7270] mt-0.5">
              Industrial Packaging
            </span>
          </div>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs uppercase font-bold tracking-[0.14em] text-[#1c3d3c]/75 hover:text-[#2d706b] transition-colors duration-200 relative group py-1"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#2d706b] rounded-full transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Desktop CTA actions */}
        <div className="hidden lg:flex items-center gap-2.5">
          <Link
            href="/contact"
            className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-[#2d706b] border border-[#2d706b]/25 hover:border-[#2d706b] hover:bg-[#2d706b]/6 transition-all duration-200"
          >
            Contact
          </Link>
          <Link
            href="/request-quote"
            className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-white shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(135deg, #2d706b 0%, #1e4a49 100%)",
            }}
          >
            <span>Request Quote</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <div className="lg:hidden flex items-center z-50">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="p-2 rounded-full transition-colors text-[#2d706b] hover:bg-[#2d706b]/10"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed inset-x-3 sm:inset-x-4 top-16 sm:top-20 max-h-[calc(100dvh-5rem)] overflow-y-auto rounded-3xl p-5 sm:p-6 lg:hidden shadow-2xl border border-[#2d706b]/20 backdrop-blur-2xl z-40"
            style={{ backgroundColor: "rgba(251, 248, 245, 0.98)" }}

          >
            <div className="flex flex-col space-y-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.2 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-xl font-bold py-3 border-b text-[#1c3d3c] hover:text-[#2d706b] transition-colors"
                    style={{ borderColor: "rgba(44,112,107,0.1)" }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <div className="pt-5 flex flex-col gap-2.5">
                <Link
                  href="/request-quote"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center text-white font-bold py-3.5 rounded-full text-sm uppercase tracking-wider transition-all"
                  style={{ background: "linear-gradient(135deg, #2d706b 0%, #1e4a49 100%)" }}
                >
                  Request Export Quote
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center font-bold py-3 rounded-full text-sm uppercase tracking-wider text-[#2d706b] border border-[#2d706b]/30"
                >
                  Contact Factory Desk
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
