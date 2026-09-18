"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Package, ShieldCheck, Globe, Phone, Mail } from "lucide-react";
import PartnerTicker from "@/components/PartnerTicker";
import { BrochureModal, BrochurePopup } from "@/components/BrochureViewer";

/* ─── Intersection-observer hook ───────────────────────── */
function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/* ─── Animated counter ──────────────────────────────────── */
function Counter({ to, suffix = "", duration = 1800 }: { to: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const { ref, visible } = useInView(0.3);
  useEffect(() => {
    if (!visible) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) { setCount(to); return; }
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * to));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [visible, to, duration]);
  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

/* ─── Animated section wrapper ──────────────────────────── */
function AnimSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, visible } = useInView();
  return (
    <div
      ref={ref}
      className={`gpk-animate-in ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ─── Global Trade Map & Logistics Console ──────────────── */
const EXPORT_CORRIDORS = [
  {
    id: "ae",
    name: "UAE · Dubai",
    flag: "🇦🇪",
    port: "Port of Jebel Ali, Dubai",
    transit: "Direct Arabian Sea Liner Route",
    compliance: "Single-Use Plastic Ban Compliant (Res. 1/2024)",
    duty: "0% Duty under India-UAE CEPA",
    packing: "40ft HC (~260,000 bags) or 20ft GP (~120,000 bags)",
    href: "/export/uae",
    status: "Active Liner",
    dot: { x: 648, y: 220 },
    curve: "M 700 226 Q 674 230 648 220"
  },
  {
    id: "gb",
    name: "United Kingdom",
    flag: "🇬🇧",
    port: "Port of Felixstowe / London Gateway",
    transit: "Direct Deep-Sea European Container Route",
    compliance: "100% Exempt from UK Plastic Packaging Tax (£217.85/t)",
    duty: "Full UK Customs & COO Documentation",
    packing: "Carton-packed & shrink-wrapped EUR-pallets",
    href: "/export/uk",
    status: "Active Liner",
    dot: { x: 504, y: 128 },
    curve: "M 700 226 Q 600 152 504 128"
  },
  {
    id: "es",
    name: "Spain · EU",
    flag: "🇪🇸",
    port: "Port of Barcelona / Valencia",
    transit: "Direct Mediterranean Liner Service",
    compliance: "Exempt from Spain Ley 7/2022 Plastic Tax (€0.45/kg)",
    duty: "EN 13432 & EU Packaging Waste Directive",
    packing: "40ft High Cube Container Dispatch",
    href: "/export/spain",
    status: "Building Corridor",
    dot: { x: 508, y: 164 },
    curve: "M 700 226 Q 605 182 508 164"
  },
  {
    id: "it",
    name: "Italy · EU",
    flag: "🇮🇹",
    port: "Port of Genoa / La Spezia",
    transit: "Southern European Commercial Gateway",
    compliance: "CONAI Environmental Labelling Compliant (PAP 22)",
    duty: "High Burst Factor (BF 20–35+) Certified",
    packing: "40ft High Cube Container Dispatch",
    href: "/export/italy",
    status: "Building Corridor",
    dot: { x: 526, y: 154 },
    curve: "M 700 226 Q 612 178 526 154"
  },
  {
    id: "sa",
    name: "Saudi Arabia",
    flag: "🇸🇦",
    port: "King Abdulaziz Port (Dammam) / Jeddah",
    transit: "Direct Arabian Gulf & Red Sea Feeder",
    compliance: "SASO Food Grade & Retail Packaging Compliant",
    duty: "GCC Trade Documentation & Phyto Certified",
    packing: "Custom palletizing & moisture-barrier wrap",
    href: "/request-quote",
    status: "Active Corridor",
    dot: { x: 624, y: 224 },
    curve: "M 700 226 Q 662 232 624 224"
  }
];

function GlobalTradeMap() {
  const [activeId, setActiveId] = useState<string>("all");
  const activeCorridor = EXPORT_CORRIDORS.find(c => c.id === activeId);

  return (
    <div className="relative rounded-3xl overflow-hidden border shadow-2xl" style={{ backgroundColor: "var(--gpk-dark)", borderColor: "rgba(255,255,255,0.1)" }}>
      {/* Top logistics toolbar */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 p-4 sm:p-7 border-b backdrop-blur-md" style={{ backgroundColor: "rgba(8,20,18,0.7)", borderColor: "rgba(255,255,255,0.08)" }}>
        <div className="flex items-center gap-2 text-[11px] sm:text-xs font-mono text-white/90">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
          <span className="font-semibold tracking-wide truncate">EXPORT DESK · MUNDRA &amp; NHAVA SHEVA (JNPT)</span>
        </div>

        {/* Interactive corridor pills - horizontal scrollable on mobile */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar w-full sm:w-auto pb-1 sm:pb-0">
          <button
            onClick={() => setActiveId("all")}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all flex-shrink-0 ${
              activeId === "all"
                ? "bg-white text-[#081412] shadow-sm font-semibold"
                : "text-white/70 hover:text-white hover:bg-white/10"
            }`}
          >
            All Corridors
          </button>
          {EXPORT_CORRIDORS.map(c => (
            <button
              key={c.id}
              onClick={() => setActiveId(c.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 flex-shrink-0 ${
                activeId === c.id
                  ? "bg-[var(--gpk-brand)] text-white shadow-sm font-semibold ring-1 ring-white/20"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              }`}
            >
              <span>{c.flag}</span>
              <span>{c.name.split(" · ")[0]}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Map visual stage */}
      <div className="relative aspect-[16/9] sm:aspect-[21/10] min-h-[420px] sm:min-h-[500px] w-full overflow-hidden flex items-center justify-center select-none">
        {/* Subtle radial teal aura behind Arabian Sea / India trade hub */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(circle at 70% 41%, rgba(45,112,107,0.45) 0%, rgba(8,20,18,0) 65%)"
          }}
        />

        {/* Real High-Resolution World Map Silhouette (Clean, crisp white landmasses on dark forest) */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/world-map.png"
            alt="Global Export Shipping Map"
            className="w-full h-full object-fill opacity-30"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </div>

        {/* Latitude/Longitude navigation graticule */}
        <svg viewBox="0 0 1000 556" className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          {/* Subtle lat parallels */}
          {[120, 226, 330, 440].map(y => (
            <line key={`lat-${y}`} x1="0" y1={y} x2="1000" y2={y} stroke="#2d706b" strokeWidth="0.5" strokeDasharray="3 6" opacity="0.25" />
          ))}
          {/* Subtle lon meridians */}
          {[200, 350, 500, 650, 800].map(x => (
            <line key={`lon-${x}`} x1={x} y1="0" x2={x} y2="556" stroke="#2d706b" strokeWidth="0.5" strokeDasharray="3 6" opacity="0.25" />
          ))}

          {/* Shipping lanes from India */}
          {EXPORT_CORRIDORS.map(c => {
            const isSelected = activeId === c.id;
            const isDimmed = activeId !== "all" && !isSelected;
            return (
              <g key={`route-${c.id}`} className="transition-opacity duration-300" opacity={isDimmed ? 0.15 : isSelected ? 1 : 0.75}>
                {/* Glow underlay */}
                <path
                  d={c.curve}
                  fill="none"
                  stroke={isSelected ? "#4fa8a0" : "#2d706b"}
                  strokeWidth={isSelected ? "3.5" : "1.8"}
                  opacity={isSelected ? "0.9" : "0.4"}
                  strokeLinecap="round"
                />
                {/* Animated flowing dashed lane */}
                <path
                  d={c.curve}
                  fill="none"
                  stroke={isSelected ? "#ffffff" : "#6ee7b7"}
                  strokeWidth={isSelected ? "2.2" : "1.3"}
                  className="gpk-trade-lane"
                  strokeLinecap="round"
                />
              </g>
            );
          })}

          {/* India Origin Terminal (Mundra & JNPT) */}
          <g>
            {/* Outer expanding pulse ring */}
            <circle
              cx="700" cy="226" r="15"
              fill="transparent"
              stroke="#4fa8a0"
              strokeWidth="1.2"
              className="gpk-map-dot-ring"
              style={{ transformOrigin: "700px 226px" }}
            />
            {/* Inner solid beacon */}
            <circle cx="700" cy="226" r="5.5" fill="#e6a875" stroke="#ffffff" strokeWidth="1.5" />
            <text x="714" y="228" fill="#ffffff" fontSize="10" fontWeight="700" letterSpacing="0.06em" fontFamily="monospace">
              MUNDRA &amp; JNPT
            </text>
            <text x="714" y="240" fill="#aededa" fontSize="8" fontFamily="monospace" opacity="0.9">
              ORIGIN TERMINAL (IN)
            </text>
          </g>

          {/* Destination Port Nodes & Labels */}
          {EXPORT_CORRIDORS.map(c => {
            const isSelected = activeId === c.id;
            const isDimmed = activeId !== "all" && !isSelected;
            return (
              <g
                key={`dot-${c.id}`}
                className="cursor-pointer transition-transform duration-200"
                onClick={() => setActiveId(c.id)}
                opacity={isDimmed ? 0.25 : 1}
              >
                {isSelected && (
                  <circle
                    cx={c.dot.x} cy={c.dot.y} r="13"
                    fill="transparent"
                    stroke="#4fa8a0"
                    strokeWidth="1.2"
                    className="gpk-map-dot-ring"
                    style={{ transformOrigin: `${c.dot.x}px ${c.dot.y}px` }}
                  />
                )}
                <circle
                  cx={c.dot.x} cy={c.dot.y}
                  r={isSelected ? "5" : "3.5"}
                  fill={isSelected ? "#4fa8a0" : "#aededa"}
                  stroke="#ffffff"
                  strokeWidth="1.2"
                />
                {/* Port label text */}
                <text
                  x={c.dot.x + (c.id === "gb" || c.id === "es" ? -8 : 8)}
                  y={c.dot.y - 6}
                  textAnchor={c.id === "gb" || c.id === "es" ? "end" : "start"}
                  fill={isSelected ? "#ffffff" : "#aededa"}
                  fontSize="8"
                  fontWeight={isSelected ? "700" : "600"}
                  fontFamily="monospace"
                  letterSpacing="0.04em"
                  opacity={isSelected ? 1 : 0.85}
                >
                  {c.port.split(",")[0].replace("Port of ", "").toUpperCase()}
                </text>
              </g>
            );
          })}
        </svg>


        {/* Floating inspection HUD card */}
        <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-auto sm:max-w-md z-20">
          {activeCorridor ? (
            <div className="backdrop-blur-xl rounded-xl sm:rounded-2xl p-3.5 sm:p-5 border text-white shadow-2xl transition-all" style={{ backgroundColor: "rgba(8,20,18,0.9)", borderColor: "rgba(255,255,255,0.15)" }}>
              <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-lg sm:text-xl">{activeCorridor.flag}</span>
                  <span className="font-bold text-xs sm:text-sm text-white">{activeCorridor.name}</span>
                </div>
                <span className="text-[9px] sm:text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold">
                  {activeCorridor.status}
                </span>
              </div>
              <div className="text-[11px] sm:text-xs text-white/90 font-medium mb-1 flex items-center gap-1.5">
                <span className="text-[#aededa]">Port:</span> {activeCorridor.port}
              </div>
              <div className="text-[10px] sm:text-[11px] text-white/70 leading-relaxed mb-2.5 line-clamp-2 sm:line-clamp-none">
                {activeCorridor.compliance} · {activeCorridor.transit}
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-white/10">
                <span className="text-[9px] sm:text-[10px] font-mono text-white/50">{activeCorridor.packing}</span>
                <Link
                  href={activeCorridor.href}
                  className="text-[11px] sm:text-xs font-semibold text-[#aededa] hover:text-white flex items-center gap-1 transition-colors"
                >
                  View Dossier <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ) : (
            <div className="backdrop-blur-xl rounded-xl sm:rounded-2xl p-3.5 sm:p-5 border text-white shadow-2xl transition-all" style={{ backgroundColor: "rgba(8,20,18,0.9)", borderColor: "rgba(255,255,255,0.15)" }}>
              <div className="flex items-center gap-2 mb-1 sm:mb-1.5">
                <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#aededa]" />
                <span className="font-bold text-xs sm:text-sm text-white">Global Commercial Freight Corridors</span>
              </div>
              <p className="text-[10px] sm:text-xs text-white/70 leading-relaxed mb-2.5">
                Container despatches from Mundra &amp; JNPT to Felixstowe, Jebel Ali, Barcelona, and Genoa.
              </p>
              <div className="flex items-center gap-2.5 pt-2 border-t border-white/10 text-[10px] sm:text-[11px] text-[#aededa] font-semibold">
                <Link href="/export/uae" className="hover:text-white transition-colors">🇦🇪 UAE</Link>
                <span className="text-white/20">·</span>
                <Link href="/export/uk" className="hover:text-white transition-colors">🇬🇧 UK</Link>
                <span className="text-white/20">·</span>
                <Link href="/export/spain" className="hover:text-white transition-colors">🇪🇸 Spain</Link>
                <span className="text-white/20">·</span>
                <Link href="/export/italy" className="hover:text-white transition-colors">🇮🇹 Italy</Link>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom overlay spec strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-px border-t" style={{ backgroundColor: "rgba(255,255,255,0.06)", borderColor: "rgba(255,255,255,0.08)" }}>
        {[
          { l: "Origin Gateways", v: "Mundra & JNPT" },
          { l: "Container Packing", v: "40ft HC & 20ft GP" },
          { l: "Tax Exemption", v: "UK PPT & Spain Ley 7" },
          { l: "Commercial Terms", v: "FOB · CIF · CFR" },
        ].map((s, idx) => (
          <div key={idx} className="p-3 sm:p-5" style={{ backgroundColor: "rgba(8,20,18,0.65)" }}>
            <div className="text-[9px] sm:text-[10px] font-mono tracking-widest text-white/40 uppercase mb-0.5 sm:mb-1">{s.l}</div>
            <div className="text-xs sm:text-sm font-bold text-white font-mono">{s.v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════════════════ */
export default function Home() {
  const [brochureOpen, setBrochureOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">

      {/* ══ 1. HERO ══════════════════════════════════════════
          Video fills the section. Dark overlay required for text readability.
          This is the ONLY dark element outside the footer.
      ══════════════════════════════════════════════════════ */}
      <section className="relative w-full min-h-[88vh] flex items-end overflow-hidden" style={{ backgroundColor: "var(--gpk-dark)" }}>

        {/* SEO h1 — hidden visually, present for crawlers */}
        <h1 className="sr-only">Paper Bag Manufacturer &amp; Exporter in India — Gargi PaperKraft</h1>

        {/* Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          style={{ animation: "gpk-video-breathe 20s ease-in-out infinite" }}
          autoPlay loop muted playsInline
          poster="/images/hero-poster.png"
          preload="metadata"
        >
          <source src="/videos/hero-background.webm" type="video/webm" />
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#081412]/95 via-[#0d1f1c]/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#081412]/60 via-transparent to-transparent" />

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pb-16 sm:pb-20">

          <div className="gpk-eyebrow mb-5" style={{ color: "#78c6c1", animation: "gpk-fade-up 0.8s ease-out 0.1s both" }}>
            Direct Factory Manufacturer · Lucknow, India
          </div>

          {/* Visual headline */}
          <div
            className="gpk-display text-white mb-3 max-w-3xl"
            style={{ animation: "gpk-fade-up 0.9s ease-out 0.2s both" }}
            aria-hidden="true"
          >
            MADE TO SCALE.
          </div>

          <p
            className="text-white/55 text-base sm:text-lg font-light max-w-xl mb-10 leading-relaxed"
            style={{ animation: "gpk-fade-up 0.9s ease-out 0.35s both" }}
          >
            High-tensile kraft paper bags — manufactured in India, shipped to the UAE, UK, Europe &amp; beyond in full container loads.
          </p>

          <div className="flex flex-wrap gap-3" style={{ animation: "gpk-fade-up 0.9s ease-out 0.48s both" }}>
            <Link
              href="/request-quote"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-white rounded-full font-semibold text-sm transition-all duration-300 shadow-lg hover:-translate-y-0.5"
              style={{ backgroundColor: "var(--gpk-brand)" }}
            >
              Request Export Quote
            </Link>
            <Link
              href="/paper-bag-exporter-india"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/25 hover:border-white/50 text-white rounded-full font-semibold text-sm transition-all duration-300 backdrop-blur-sm hover:-translate-y-0.5"
            >
              Export Division <ArrowRight className="w-4 h-4" />
            </Link>
            <button
              onClick={() => setBrochureOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/12 hover:border-white/30 text-white/65 hover:text-white rounded-full font-medium text-sm transition-all duration-300"
            >
              View Catalogue (PDF)
            </button>
          </div>

          {/* Metric strip */}
          <div
            className="grid grid-cols-2 sm:grid-cols-4 gap-px mt-14 pt-8 border-t border-white/10"
            style={{ animation: "gpk-fade-up 0.9s ease-out 0.6s both" }}
          >
            {[
              { value: 100000, suffix: "+", label: "Bags per day",           prefix: "" },
              { value: 35,     suffix: "+", label: "Max Burst Factor",       prefix: "BF " },
              { value: 140,    suffix: " GSM", label: "Paper spectrum",      prefix: "50–" },
              { value: 100,    suffix: "%", label: "Food Grade & Recyclable", prefix: "" },
            ].map((m, i) => (
              <div key={i} className="px-4 py-2 first:pl-0">
                <div className="text-2xl sm:text-3xl font-bold text-white font-mono tracking-tight">
                  {m.prefix}<Counter to={m.value} suffix={m.suffix} />
                </div>
                <div className="text-xs text-white/40 mt-0.5 tracking-wide">{m.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero bottom edge fades into brand bg */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#fbf8f5] to-transparent pointer-events-none" />
      </section>

      {/* ══ 2. PARTNER TICKER ════════════════════════════════ */}
      <PartnerTicker />

      {/* ══ 3. CAPABILITIES ══════════════════════════════════
          Light warm beige background — brand colors
      ══════════════════════════════════════════════════════ */}
      {/* ══ 3. CAPABILITIES — Redesigned in Section 5's iconic style ════════════ */}
      <section className="py-24" style={{ backgroundColor: "var(--gpk-bg)" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <AnimSection className="mb-12">
            <p className="gpk-eyebrow mb-4">Capabilities &amp; Compliance</p>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <h2 className="gpk-display leading-[1.0]" style={{ color: "var(--gpk-text)" }}>
                BUILT FOR SCALE.
              </h2>
              <p className="text-base max-w-md leading-relaxed" style={{ color: "var(--gpk-muted)" }}>
                High-tensile virgin and recycled kraft converted to strict international standards. Engineered for container-scale global export and rapid domestic fulfillment.
              </p>
            </div>
          </AnimSection>

          {/* Cinematic rounded container with real factory tension line video */}
          <AnimSection delay={100}>
            <div className="relative rounded-3xl overflow-hidden aspect-[16/9] sm:aspect-[21/9]" style={{ backgroundColor: "var(--gpk-dark)" }}>
              <video
                className="absolute inset-0 w-full h-full object-cover opacity-85"
                autoPlay loop muted playsInline
                poster="/factory/real-jumbo-roll-1.jpg"
                preload="metadata"
              >
                <source src="/factory/IMG_2750.mp4" type="video/mp4" />
                <source src="/factory/IMG_2750.mov" type="video/quicktime" />
              </video>

              <div className="absolute top-3 left-3 sm:top-5 sm:left-5 z-10 flex items-center gap-2 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full backdrop-blur-md border text-[10px] sm:text-xs font-mono text-white/90 max-w-[90%] sm:max-w-none truncate" style={{ backgroundColor: "rgba(8,20,18,0.6)", borderColor: "rgba(255,255,255,0.15)" }}>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                <span className="truncate">Gargi Plant · Raw Material &amp; Web Tension Line</span>
              </div>

              <div className="absolute inset-0 bg-gradient-to-r from-[#081412]/65 via-transparent to-[#081412]/25" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081412]/75 via-transparent to-transparent" />

              {/* Stat pills */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5 flex flex-wrap gap-2 sm:gap-2.5">
                {[
                  { v: "100%", l: "Plastic-Ban Compliant" },
                  { v: "BF 20–35+", l: "Burst Factor Rating" },
                  { v: "FOB & CIF", l: "Global Export Terms" },
                ].map((s) => (
                  <div key={s.v} className="backdrop-blur-md rounded-lg sm:rounded-xl px-2.5 sm:px-4 py-1.5 sm:py-2.5 border" style={{ backgroundColor: "rgba(255,255,255,0.09)", borderColor: "rgba(255,255,255,0.12)" }}>
                    <div className="text-sm sm:text-lg font-bold text-white font-mono">{s.v}</div>
                    <div className="text-[10px] sm:text-xs text-white/50">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </AnimSection>

          {/* Capabilities breakdown strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px mt-14 pt-10 border-t" style={{ borderColor: "rgba(44,112,107,0.15)" }}>
            {[
              { step: "01", label: "Compliance", desc: "100% Biodegradable FSC Virgin & Recycled Kraft" },
              { step: "02", label: "Strength",   desc: "Tear-resistant bottom pasting & gussets" },
              { step: "03", label: "Output",     desc: "100,000+ units daily machine capacity" },
              { step: "04", label: "Logistics",  desc: "Container-ready export on FOB & CIF terms" },
            ].map((s, i) => (
              <AnimSection key={i} delay={i * 80}>
                <div className="px-4 py-2 first:pl-0 border-l first:border-l-0" style={{ borderColor: "rgba(44,112,107,0.15)" }}>
                  <div className="font-mono text-xs mb-1 font-bold" style={{ color: "var(--gpk-brand)" }}>{s.step}</div>
                  <div className="font-semibold text-sm mb-1" style={{ color: "var(--gpk-text)" }}>{s.label}</div>
                  <div className="text-xs leading-relaxed" style={{ color: "var(--gpk-muted)" }}>{s.desc}</div>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 4. PRODUCTS — Clean Editorial Architecture ══════════════ */}
      <section className="py-24" style={{ backgroundColor: "var(--gpk-bg-alt)" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <AnimSection className="mb-12">
            <p className="gpk-eyebrow mb-4">Product Portfolio</p>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <h2 className="gpk-display leading-[1.0]" style={{ color: "var(--gpk-text)" }}>
                CORE GEOMETRIES.
              </h2>
              <div className="max-w-md">
                <p className="text-base leading-relaxed mb-3" style={{ color: "var(--gpk-muted)" }}>
                  Three structural architectures engineered for FMCG retail, food takeaway, and wholesale distribution. 100% customisable in size, GSM, and flexo branding.
                </p>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest transition-colors hover:underline"
                  style={{ color: "var(--gpk-brand)" }}
                >
                  Browse Full Catalogue <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </AnimSection>

          {/* Open Editorial 3-Column Architecture (Unboxed, Natural, 100% Genuine Specs) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {[
              {
                num: "01 · SOS",
                src: "/images/square-bottom.png",
                alt: "Square Bottom SOS Paper Bags",
                tag: "Supermarkets · Food Takeaway · QSR",
                title: "Square Bottom (SOS) Bags",
                body: "Rigid self-standing block base with 4-panel gussets for maximum volume and rapid checkout filling.",
                href: "/products/square-bottom-paper-bags",
                cta: "View SOS Specifications",
                specs: "70–140 GSM · Block Base · Self-Standing",
              },
              {
                num: "02 · Shopper",
                src: "/images/flat-bottom.png",
                alt: "Flat Bottom Shopping Bags",
                tag: "Fashion Retail · Apparel · Gifting",
                title: "Flat Bottom Shopping Bags",
                body: "Stable base with reinforced twisted rope or flat tape handles engineered for retail packaging.",
                href: "/products/flat-bottom-paper-bags",
                cta: "View Retail Bag Specs",
                specs: "80–140 GSM · Twisted Handles · Flat Base",
              },
              {
                num: "03 · Pinch",
                src: "/images/v-bottom.png",
                alt: "V-Bottom Pinch Paper Bags",
                tag: "Bakeries · Pharmacies · Confectionery",
                title: "V-Bottom Pinch Bags",
                body: "Compact sharp V-fold for high-velocity dispensing and lightweight grocery packing.",
                href: "/products/v-bottom-paper-bags",
                cta: "View Pinch Bag Specs",
                specs: "50–80 GSM · Sharp V-Fold · High Speed",
              },
            ].map((p, i) => (
              <AnimSection key={i} delay={i * 80}>
                <Link
                  href={p.href}
                  className="group flex flex-col justify-between h-full transition-all duration-300"
                >
                  <div>
                    {/* Visual Frame - Seamless, high-end studio display without nested card boxiness */}
                    <div
                      className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6 transition-all duration-500 group-hover:border-[#2c706b]/40 group-hover:shadow-lg"
                      style={{
                        background: "radial-gradient(ellipse at 50% 50%, #ffffff 0%, #faf6f0 60%, #efe7dc 100%)",
                        border: "1px solid rgba(44,112,107,0.16)",
                      }}
                    >
                      {/* Structural Numeral Badge */}
                      <div className="absolute top-3.5 left-3.5 z-10">
                        <span
                          className="font-mono text-[11px] font-bold px-2.5 py-1 rounded-full border backdrop-blur-md"
                          style={{
                            backgroundColor: "rgba(255,255,255,0.9)",
                            borderColor: "rgba(44,112,107,0.22)",
                            color: "var(--gpk-brand)",
                          }}
                        >
                          {p.num}
                        </span>
                      </div>

                      {/* Product Image */}
                      <div className="absolute inset-0 p-6 flex items-center justify-center">
                        <Image
                          src={p.src}
                          alt={p.alt}
                          fill
                          className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 33vw"
                          loading={i === 0 ? "eager" : "lazy"}
                        />
                      </div>
                    </div>

                    {/* Metadata & Description */}
                    <p className="text-[11px] font-mono tracking-widest uppercase mb-2 font-semibold" style={{ color: "var(--gpk-brand)" }}>
                      {p.tag}
                    </p>
                    <h3 className="text-2xl font-bold mb-2.5 tracking-tight group-hover:text-[#2c706b] transition-colors" style={{ color: "var(--gpk-text)" }}>
                      {p.title}
                    </h3>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--gpk-muted)" }}>
                      {p.body}
                    </p>

                    {/* Clean Typographic Spec Line (Real factory specs, no pill soup) */}
                    <div
                      className="py-2.5 border-t text-xs font-mono font-medium mb-4"
                      style={{ borderColor: "rgba(44,112,107,0.12)", color: "var(--gpk-brand)" }}
                    >
                      {p.specs}
                    </div>
                  </div>

                  {/* Clean CTA Link */}
                  <div className="pt-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider transition-colors group-hover:underline" style={{ color: "var(--gpk-brand)" }}>
                      {p.cta} <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </AnimSection>
            ))}
          </div>

          {/* Real Manufacturing Capabilities Breakdown Strip (matching Section 5 & 6) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px mt-16 pt-10 border-t" style={{ borderColor: "rgba(44,112,107,0.15)" }}>
            {[
              { step: "01", label: "SOS Square Bottom", desc: "Self-standing block base for supermarket & delivery" },
              { step: "02", label: "Flat Bottom Shoppers", desc: "Reinforced twisted rope handles for retail & apparel" },
              { step: "03", label: "V-Bottom Pinch Bags", desc: "Compact sharp V-fold for bakery & pharmacy packaging" },
              { step: "04", label: "Custom Flexo Print", desc: "Up to 4-colour water-based ink printing" },
            ].map((s, i) => (
              <AnimSection key={i} delay={i * 80}>
                <div className="px-4 py-2 first:pl-0 border-l first:border-l-0" style={{ borderColor: "rgba(44,112,107,0.15)" }}>
                  <div className="font-mono text-xs mb-1 font-bold" style={{ color: "var(--gpk-brand)" }}>{s.step}</div>
                  <div className="font-semibold text-sm mb-1" style={{ color: "var(--gpk-text)" }}>{s.label}</div>
                  <div className="text-xs leading-relaxed" style={{ color: "var(--gpk-muted)" }}>{s.desc}</div>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 5. FACTORY — light section with teal brand accent ═ */}
      <section className="py-24" style={{ backgroundColor: "var(--gpk-bg)" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <AnimSection className="mb-12">
            <p className="gpk-eyebrow mb-4">The Facility</p>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <h2 className="gpk-display leading-[1.0]" style={{ color: "var(--gpk-text)" }}>
                WE MANUFACTURE.
              </h2>
              <p className="text-base max-w-md leading-relaxed" style={{ color: "var(--gpk-muted)" }}>
                From raw paper rolls to finished, stacked and carton-packed bags — every stage built around consistency, customisation and scale.
              </p>
            </div>
          </AnimSection>

          {/* Cinematic rounded container */}
          <AnimSection delay={100}>
            <div className="relative rounded-3xl overflow-hidden aspect-[16/9] sm:aspect-[21/9]" style={{ backgroundColor: "var(--gpk-dark)" }}>
              {/* Real factory automated conversion line */}
              <video
                className="absolute inset-0 w-full h-full object-cover opacity-90"
                autoPlay loop muted playsInline
                poster="/factory/factory-clip-1.jpg"
                preload="metadata"
              >
                <source src="/factory/IMG_2511.mp4" type="video/mp4" />
                <source src="/factory/IMG_2511.mov" type="video/quicktime" />
              </video>

              <div className="absolute top-3 left-3 sm:top-5 sm:left-5 z-10 flex items-center gap-2 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full backdrop-blur-md border text-[10px] sm:text-xs font-mono text-white/90 max-w-[90%] sm:max-w-none truncate" style={{ backgroundColor: "rgba(8,20,18,0.6)", borderColor: "rgba(255,255,255,0.15)" }}>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                <span className="truncate">Gargi Plant · Automated Bag Forming Line</span>
              </div>

              <div className="absolute inset-0 bg-gradient-to-r from-[#081412]/65 via-transparent to-[#081412]/25" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081412]/75 via-transparent to-transparent" />

              {/* Stat pills */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5 flex flex-wrap gap-2 sm:gap-2.5">
                {[
                  { v: "100,000+", l: "Bags per day" },
                  { v: "BF 20–35+", l: "Burst Factor" },
                  { v: "Mundra & JNPT", l: "Ports of loading" },
                ].map((s) => (
                  <div key={s.v} className="backdrop-blur-md rounded-lg sm:rounded-xl px-2.5 sm:px-4 py-1.5 sm:py-2.5 border" style={{ backgroundColor: "rgba(255,255,255,0.09)", borderColor: "rgba(255,255,255,0.12)" }}>
                    <div className="text-sm sm:text-lg font-bold text-white font-mono">{s.v}</div>
                    <div className="text-[10px] sm:text-xs text-white/50">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </AnimSection>

          {/* Process steps */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px mt-14 pt-10 border-t" style={{ borderColor: "rgba(44,112,107,0.15)" }}>
            {[
              { step: "01", label: "Raw Paper Rolls", desc: "50–140 GSM virgin & recycled kraft" },
              { step: "02", label: "Bag Forming",     desc: "Automated conversion lines" },
              { step: "03", label: "Custom Printing", desc: "Up to 4-colour flexographic" },
              { step: "04", label: "QC & Dispatch",   desc: "Carton-packed, container-ready" },
            ].map((s, i) => (
              <AnimSection key={i} delay={i * 80}>
                <div className="px-4 py-2 first:pl-0 border-l first:border-l-0" style={{ borderColor: "rgba(44,112,107,0.15)" }}>
                  <div className="text-[10px] font-mono tracking-widest mb-2" style={{ color: "var(--gpk-brand)" }}>{s.step}</div>
                  <div className="text-sm font-semibold mb-1" style={{ color: "var(--gpk-text)" }}>{s.label}</div>
                  <div className="text-xs" style={{ color: "var(--gpk-muted)" }}>{s.desc}</div>
                </div>
              </AnimSection>
            ))}
          </div>

          <AnimSection delay={200} className="mt-10">
            <Link
              href="/manufacturing"
              className="inline-flex items-center gap-2 border px-7 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5"
              style={{ borderColor: "var(--gpk-brand)", color: "var(--gpk-brand)" }}
            >
              Explore Manufacturing Capability <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimSection>
        </div>
      </section>

      {/* ══ 6. GLOBAL EXPORT ════════════════════════════════ */}
      <section className="py-24" style={{ backgroundColor: "var(--gpk-bg-alt)" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <AnimSection className="mb-12">
            <p className="gpk-eyebrow mb-4">Export Infrastructure · Ocean Freight</p>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <h2 className="gpk-display leading-[1.0]" style={{ color: "var(--gpk-text)" }}>
                GLOBAL CORRIDORS.
              </h2>
              <p className="text-base max-w-md leading-relaxed" style={{ color: "var(--gpk-muted)" }}>
                Direct container vessel despatches from Mundra Port and Nhava Sheva (JNPT) to premier commercial hubs across the UK, Europe, and the Middle East. CIF &amp; FOB execution.
              </p>
            </div>
          </AnimSection>

          {/* Cinematic Global Trade Console */}
          <AnimSection delay={100}>
            <GlobalTradeMap />
          </AnimSection>

          {/* 4-column hairline breakdown strip (matching Section 5) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px mt-14 pt-10 border-t" style={{ borderColor: "rgba(44,112,107,0.15)" }}>
            {[
              { step: "01", label: "Mundra Port (Gujarat)", desc: "High-frequency container liner sailings to Arabian Gulf & Red Sea hubs." },
              { step: "02", label: "Nhava Sheva / JNPT",   desc: "India's premier gateway with direct deep-sea mother vessels to UK & Europe." },
              { step: "03", label: "Zero Plastic Tax",     desc: "Exempt from UK PPT (£217.85/t), Spain Ley 7/2022, and Italy CONAI PAP 22." },
              { step: "04", label: "Customs Documentation",desc: "COO, CEPA preferential duty certificates, B/L, and Phytosanitary documentation." },
            ].map((s, i) => (
              <AnimSection key={i} delay={i * 80}>
                <div className="px-4 py-2 first:pl-0 border-l first:border-l-0" style={{ borderColor: "rgba(44,112,107,0.15)" }}>
                  <div className="text-[10px] font-mono tracking-widest mb-2" style={{ color: "var(--gpk-brand)" }}>{s.step}</div>
                  <div className="text-sm font-semibold mb-1" style={{ color: "var(--gpk-text)" }}>{s.label}</div>
                  <div className="text-xs" style={{ color: "var(--gpk-muted)" }}>{s.desc}</div>
                </div>
              </AnimSection>
            ))}
          </div>

          <AnimSection delay={200} className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/request-quote"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-white rounded-full text-sm font-semibold transition-all duration-300 shadow-md hover:-translate-y-0.5"
              style={{ backgroundColor: "var(--gpk-brand)" }}
            >
              Request Export Quotation (CIF / FOB) <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/export/uae"
              className="inline-flex items-center gap-2 border px-7 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5"
              style={{ borderColor: "var(--gpk-brand)", color: "var(--gpk-brand)" }}
            >
              Explore Country Trade Dossiers <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimSection>

        </div>
      </section>

      {/* ══ 7. CTA STRIP ════════════════════════════════════
          Uses brand teal (forest-900) — not pure black
      ══════════════════════════════════════════════════════ */}
      <section className="py-24 text-white relative overflow-hidden" style={{ backgroundColor: "var(--gpk-brand)" }}>
        {/* Subtle dot texture */}
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "22px 22px" }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <AnimSection>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/60 mb-5">Ready to Source?</p>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-5 leading-tight">
              Direct from an Indian manufacturer
            </h2>
            <p className="text-white/65 text-base mb-10 max-w-xl mx-auto leading-relaxed">
              Factory-direct pricing for full container loads (FOB / CIF). Custom sizes, GSM, handle types, and printing.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/request-quote"
                className="px-9 py-4 font-bold rounded-full transition-all duration-300 hover:-translate-y-0.5 shadow-lg"
                style={{ backgroundColor: "var(--gpk-bg)", color: "var(--gpk-brand)" }}
              >
                Request Export Quotation
              </Link>
              <Link
                href="/paper-bag-exporter-india"
                className="px-7 py-4 border border-white/30 hover:border-white/60 text-white font-semibold rounded-full transition-all duration-300 hover:-translate-y-0.5"
              >
                View Export Capabilities
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-6 mt-10 text-sm text-white/50">
              <a href="tel:+919918280347" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-3.5 h-3.5" /> +91 99182 80347
              </a>
              <a href="mailto:gargi.paperkraft@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-3.5 h-3.5" /> gargi.paperkraft@gmail.com
              </a>
            </div>
          </AnimSection>
        </div>
      </section>

      {/* Brochure modals */}
      <BrochurePopup />
      <BrochureModal isOpen={brochureOpen} onClose={() => setBrochureOpen(false)} />
    </div>
  );
}
