"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf, ShieldCheck, Truck } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import PartnerTicker from "@/components/PartnerTicker";
import { BrochureModal, BrochurePopup } from "@/components/BrochureViewer";

export default function Home() {
  const [brochureOpen, setBrochureOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-forest-950">
        <div className="absolute inset-0 opacity-40">
          {/* Video Background */}
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            poster="/images/hero-poster.png"
          >
            {/* Placeholder video source - user can drop in a real file here later */}
            <source src="/videos/hero-background.webm" type="video/webm" />
          </video>

          {/* Overlay Gradient for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-900/60 to-black/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-kraft-100 mb-6 tracking-tight">
              Engineered for Sustainability. <br />
              <span className="text-forest-400">Built for Scale.</span>
            </h1>
            <p className="text-xl md:text-2xl text-kraft-200 mb-10 max-w-3xl mx-auto font-light">
              Premium kraft paper packaging solutions. Flat, Square, and V Bottom bags designed for global industry leaders.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
              <Link
                href="/products"
                className="bg-forest-900 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-forest-800 transition-all flex items-center shadow-xl shadow-forest-900/20 group"
              >
                Explore Products <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 bg-transparent border-2 border-kraft-400 text-kraft-100 hover:bg-kraft-400 hover:text-forest-900 rounded-full font-semibold text-lg transition-all"
              >
                Request Quote
              </Link>

              {/* Brochure Button */}
              <button
                onClick={() => setBrochureOpen(true)}
                className="flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-lg bg-kraft-500/20 border-2 border-kraft-500/60 text-kraft-200 hover:bg-kraft-500/30 hover:border-kraft-400 transition-all backdrop-blur-sm"
              >
                Our Brochure
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trusted By Section */}
      <PartnerTicker />

      {/* Value Props - Engineering Blueprint Design */}
      <section className="py-24 bg-forest-950 relative overflow-hidden border-t border-forest-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="text-center mb-20">
            <h2 className="text-kraft-400 font-mono tracking-widest uppercase text-xs mb-3 flex items-center justify-center gap-4">
              <span className="h-px w-8 bg-kraft-400/30"></span>
              CORE COMPETENCIES
              <span className="h-px w-8 bg-kraft-400/30"></span>
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Engineered for <span className="text-forest-400">Impact</span>
            </h3>
          </div>

          {/* Technical Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-b border-forest-800/50 divide-y md:divide-y-0 md:divide-x divide-forest-800/50">

            {/* Feature 01 */}
            <div className="group relative p-10 hover:bg-forest-900/20 transition-colors duration-500">
              <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
                <span className="text-6xl font-black text-forest-800 font-mono">01</span>
              </div>
              <div className="mb-8 relative">
                <div className="w-12 h-12 flex items-center justify-center rounded-sm border border-kraft-400/20 text-kraft-400 group-hover:border-kraft-400 group-hover:scale-110 transition-all duration-300">
                  <Leaf className="w-6 h-6 stroke-1" />
                </div>
              </div>
              <h4 className="text-xl font-bold text-white mb-4 group-hover:text-kraft-300 transition-colors">100% Sustainable</h4>
              <p className="text-forest-300/60 leading-relaxed text-sm font-light">
                Responsibly sourced material foundation. Fully biodegradable matrix ensures zero environmental footprint post-lifecycle.
              </p>
            </div>

            {/* Feature 02 */}
            <div className="group relative p-10 hover:bg-forest-900/20 transition-colors duration-500">
              <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
                <span className="text-6xl font-black text-forest-800 font-mono">02</span>
              </div>
              <div className="mb-8 relative">
                <div className="w-12 h-12 flex items-center justify-center rounded-sm border border-kraft-400/20 text-kraft-400 group-hover:border-kraft-400 group-hover:scale-110 transition-all duration-300">
                  <ShieldCheck className="w-6 h-6 stroke-1" />
                </div>
              </div>
              <h4 className="text-xl font-bold text-white mb-4 group-hover:text-kraft-300 transition-colors">High Tensile Strength</h4>
              <p className="text-forest-300/60 leading-relaxed text-sm font-light">
                Engineered load capacity exceeding industry standards (BF 24-35). Structural integrity maintained under vertical stress.
              </p>
            </div>

            {/* Feature 03 */}
            <div className="group relative p-10 hover:bg-forest-900/20 transition-colors duration-500">
              <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
                <span className="text-6xl font-black text-forest-800 font-mono">03</span>
              </div>
              <div className="mb-8 relative">
                <div className="w-12 h-12 flex items-center justify-center rounded-sm border border-kraft-400/20 text-kraft-400 group-hover:border-kraft-400 group-hover:scale-110 transition-all duration-300">
                  <Truck className="w-6 h-6 stroke-1" />
                </div>
              </div>
              <h4 className="text-xl font-bold text-white mb-4 group-hover:text-kraft-300 transition-colors">Pan-India Delivery</h4>
              <p className="text-forest-300/60 leading-relaxed text-sm font-light">
                Reliable logistics network covering all major Indian metros. Commitment to best-in-class quality standards.
              </p>
            </div>

          </div>

          <div className="mt-12 flex justify-center opacity-60">
            <div className="flex gap-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-1 h-1 bg-forest-800 rounded-full"></div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Product Showcase — no cards, images + SVG animations */}
      <section className="py-28 bg-white relative overflow-hidden">

        {/* Large faint background SVG — decorative arcs */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none" aria-hidden>
          <ellipse cx="50%" cy="50%" rx="45%" ry="40%" stroke="#25684a" strokeWidth="1" fill="none" strokeDasharray="6 10" />
          <ellipse cx="50%" cy="50%" rx="35%" ry="30%" stroke="#d69f6e" strokeWidth="1" fill="none" strokeDasharray="3 14" />
        </svg>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-24"
          >
            <p className="text-kraft-500 font-mono tracking-widest uppercase text-xs flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-8 bg-kraft-400/50" />
              PRODUCT LINE
              <span className="h-px w-8 bg-kraft-400/50" />
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-forest-900 tracking-tight">
              Our Core <span className="text-forest-600">Solutions</span>
            </h2>
            <p className="text-forest-700/50 mt-4 max-w-xl mx-auto text-lg font-light">
              Precision-manufactured kraft bags tailored to your brand&apos;s specifications.
            </p>
          </motion.div>

          {/* Products — open layout, no cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-20">
            <ProductShowcase
              index={0}
              title="Flat Bottom Bags"
              desc="Stable self-standing base — perfect for retail, bakery, and premium takeaways."
              imageSrc="/images/flat-bottom.png"
              svgColor="#d69f6e"
              svgAccent="#a15535"
            />
            <ProductShowcase
              index={1}
              title="Square Bottom Bags"
              desc="Maximized volume with a four-panel gusset — structured for industrial use."
              imageSrc="/images/square-bottom.png"
              svgColor="#3aa272"
              svgAccent="#1d4434"
            />
            <ProductShowcase
              index={2}
              title="V Bottom Bags"
              desc="Sharp V-fold base for compact stacking — ideal for pharmacy and FMCG."
              imageSrc="/images/v-bottom.png"
              svgColor="#cf844e"
              svgAccent="#6a3b29"
            />
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-24 flex justify-center"
          >
            <Link
              href="/products"
              className="flex items-center gap-2 px-8 py-4 rounded-full border-2 border-forest-800/20 text-forest-800 hover:bg-forest-900 hover:text-white hover:border-forest-900 transition-all text-sm font-semibold tracking-wide"
            >
              View Full Catalogue <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-forest-900 text-kraft-100">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Switch to Sustainable Packaging?</h2>
          <p className="text-xl text-forest-200 mb-10">Get a custom quote for your bulk order today. Pan-India delivery available.</p>
          <Link
            href="/contact"
            className="inline-block px-10 py-5 bg-kraft-500 hover:bg-kraft-400 text-white rounded-lg font-bold text-xl shadow-xl transition-all"
          >
            Get a Quote
          </Link>
        </div>
      </section>

      {/* Brochure Components */}
      <BrochurePopup />
      <BrochureModal isOpen={brochureOpen} onClose={() => setBrochureOpen(false)} />

    </div>
  );
}

function FeatureCard({ icon, title, description, delay }: { icon: React.ReactNode, title: string, description: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="flex flex-col items-start text-left p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-kraft-400/50 hover:bg-white/10 transition-all duration-300 group"
    >
      <div className="mb-6 p-3 bg-forest-900 rounded-lg border border-forest-800 group-hover:border-kraft-500/30 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-kraft-300 transition-colors">{title}</h3>
      <p className="text-forest-200/70 leading-relaxed text-sm">{description}</p>
    </motion.div>
  );
}

function ProductShowcase({
  index, title, desc, imageSrc, svgColor, svgAccent
}: {
  index: number;
  title: string;
  desc: string;
  imageSrc: string;
  svgColor: string;
  svgAccent: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.18, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group flex flex-col items-center text-center"
    >
      {/* Image + SVG animation area */}
      <div className="relative w-64 h-72 mb-8">

        {/* Animated SVG layer — sits behind the image */}
        <svg
          viewBox="0 0 256 288"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full"
          aria-hidden
        >
          {/* Outer dashed orbit ring */}
          <motion.ellipse
            cx="128" cy="160" rx="110" ry="100"
            stroke={svgColor} strokeWidth="1" strokeDasharray="6 10"
            fill="none" opacity="0.25"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "128px 160px" }}
          />

          {/* Inner arc */}
          <motion.path
            d="M 40 160 A 88 88 0 0 1 216 160"
            stroke={svgColor} strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.35"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.35 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: index * 0.18 + 0.3, ease: "easeOut" }}
          />

          {/* Bottom shadow arc */}
          <motion.path
            d="M 64 220 A 64 20 0 0 0 192 220"
            stroke={svgAccent} strokeWidth="1" fill="none" opacity="0.2"
            strokeDasharray="4 6"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: index * 0.18 + 0.6 }}
          />

          {/* Orbiting dot 1 */}
          <motion.circle
            cx="0" cy="0" r="4" fill={svgColor} opacity="0.6"
            animate={{
              cx: [128 + 108 * Math.cos(0), 128 + 108 * Math.cos(Math.PI), 128 + 108 * Math.cos(2 * Math.PI)],
              cy: [160 + 98 * Math.sin(0), 160 + 98 * Math.sin(Math.PI), 160 + 98 * Math.sin(2 * Math.PI)],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          />

          {/* Orbiting dot 2 — offset phase */}
          <motion.circle
            cx="0" cy="0" r="3" fill={svgAccent} opacity="0.5"
            animate={{
              cx: [128 + 108 * Math.cos(Math.PI), 128 + 108 * Math.cos(2 * Math.PI), 128 + 108 * Math.cos(3 * Math.PI)],
              cy: [160 + 98 * Math.sin(Math.PI), 160 + 98 * Math.sin(2 * Math.PI), 160 + 98 * Math.sin(3 * Math.PI)],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          />

          {/* Corner accent lines */}
          <motion.line x1="20" y1="40" x2="44" y2="40" stroke={svgColor} strokeWidth="1.5" strokeLinecap="round" opacity="0.4"
            initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.18 + 0.8 }}
            style={{ transformOrigin: "20px 40px" }}
          />
          <motion.line x1="20" y1="40" x2="20" y2="64" stroke={svgColor} strokeWidth="1.5" strokeLinecap="round" opacity="0.4"
            initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.18 + 0.9 }}
            style={{ transformOrigin: "20px 40px" }}
          />
          <motion.line x1="236" y1="280" x2="212" y2="280" stroke={svgColor} strokeWidth="1.5" strokeLinecap="round" opacity="0.4"
            initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.18 + 1.0 }}
            style={{ transformOrigin: "236px 280px" }}
          />
          <motion.line x1="236" y1="280" x2="236" y2="256" stroke={svgColor} strokeWidth="1.5" strokeLinecap="round" opacity="0.4"
            initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.18 + 1.1 }}
            style={{ transformOrigin: "236px 280px" }}
          />

          {/* Small cross at center-top */}
          <motion.path d="M128 56 v8 M124 60 h8" stroke={svgColor} strokeWidth="1.5" strokeLinecap="round" opacity="0.5"
            initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 0.5, scale: 1 }} viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.18 + 1.2 }}
            style={{ transformOrigin: "128px 60px" }}
          />
        </svg>

        {/* Product image — on top of SVG */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          whileHover={{ y: -12, scale: 1.05 }}
          transition={{ type: "spring", stiffness: 280, damping: 20 }}
        >
          <div className="relative w-48 h-56 drop-shadow-[0_24px_40px_rgba(0,0,0,0.14)]">
            <Image src={imageSrc} alt={title} fill className="object-contain" />
          </div>
        </motion.div>

      </div>

      {/* Text — below the image */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.18 + 0.4 }}
      >
        {/* Number label */}
        <p className="text-xs font-mono tracking-widest text-kraft-400/60 mb-2">
          {String(index + 1).padStart(2, "0")}
        </p>
        <h3 className="text-2xl font-bold text-forest-900 mb-2">{title}</h3>
        {/* Decorative rule */}
        <motion.div
          className="mx-auto mb-3 h-px bg-kraft-400/40"
          initial={{ width: 0 }}
          whileInView={{ width: 48 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.18 + 0.6 }}
        />
        <p className="text-forest-700/55 text-sm leading-relaxed max-w-xs mx-auto">{desc}</p>
      </motion.div>
    </motion.div>
  );
}
