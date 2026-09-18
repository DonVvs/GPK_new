import Link from "next/link";
import Image from "next/image";
import { Factory, Leaf, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="text-white/70 py-16 border-t relative overflow-hidden"
      style={{ backgroundColor: "var(--gpk-dark)", borderColor: "rgba(255,255,255,0.05)" }}
    >
      {/* Subtle background tree motif */}
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 opacity-[0.05] pointer-events-none w-[560px] h-[420px] mix-blend-screen">
        <Image
          src="/images/footer-tree-v2.jpg"
          alt=""
          fill
          className="object-contain object-bottom"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="space-y-5">
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="/logo-white.png"
                alt="Gargi PaperKraft"
                width={160}
                height={55}
                className="h-10 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity"
              />
              <div className="flex flex-col">
                <span className="font-bold text-base text-white tracking-tight leading-tight">
                  GARGI <span style={{ color: "#78c6c1" }} className="font-extrabold">PAPERKRAFT</span>
                </span>
                <span className="text-[9px] tracking-[0.2em] text-white/30 uppercase font-medium">
                  Industrial Packaging
                </span>
              </div>
            </Link>

            <p className="text-white/40 text-sm leading-relaxed">
              Built for scale. Manufactured in India. Supplying supermarkets, food chains, and retailers globally.
            </p>

            <div className="flex gap-3 pt-1">
              {[Leaf, Factory].map((Icon, i) => (
                <div key={i} className="w-9 h-9 flex items-center justify-center rounded-xl border" style={{ backgroundColor: "rgba(44,112,107,0.15)", borderColor: "rgba(44,112,107,0.25)" }}>
                  <Icon className="w-4 h-4" style={{ color: "#78c6c1" }} />
                </div>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white text-sm font-semibold tracking-wide mb-5">Paper Bags</h4>
            <ul className="space-y-3 text-sm">
              {[
                { href: "/products/square-bottom-paper-bags", label: "Square Bottom (SOS)" },
                { href: "/products/flat-bottom-paper-bags",   label: "Flat Bottom Shopping" },
                { href: "/products/v-bottom-paper-bags",      label: "V-Bottom Pinch Bags" },
                { href: "/products/custom-printed-paper-bags",label: "Custom Printed Bags" },
                { href: "/products",                          label: "All Products →", accent: true },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="transition-colors duration-200"
                    style={{ color: l.accent ? "#78c6c1" : "rgba(255,255,255,0.4)" }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Export */}
          <div>
            <h4 className="text-white text-sm font-semibold tracking-wide mb-5">Export Destinations</h4>
            <ul className="space-y-3 text-sm">
              {[
                { href: "/paper-bag-exporter-india", label: "Global Export Hub →", accent: true },
                { href: "/export/uae",   label: "United Arab Emirates" },
                { href: "/export/uk",    label: "United Kingdom" },
                { href: "/export/spain", label: "Spain (España)" },
                { href: "/export/italy", label: "Italy (Italia)" },
                { href: "/request-quote",label: "Request Export Quote →", accent: true },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="transition-colors duration-200"
                    style={{ color: l.accent ? "#78c6c1" : "rgba(255,255,255,0.4)" }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-sm font-semibold tracking-wide mb-5">Export Desk &amp; Works</h4>
            <div className="space-y-4 text-sm">
              <div className="flex gap-3">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#78c6c1" }} />
                <p className="text-white/40 leading-relaxed">
                  Plot No-20, Goyala Industrial Area, Chinhat, Dewa Road, Lucknow, UP – 226019
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <Phone className="w-4 h-4 flex-shrink-0" style={{ color: "#78c6c1" }} />
                <a href="tel:+919918280347" className="text-white/40 hover:text-white/80 transition-colors">
                  +91 9918280347 / +91 7007922573
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <Mail className="w-4 h-4 flex-shrink-0" style={{ color: "#78c6c1" }} />
                <a href="mailto:gargi.paperkraft@gmail.com" className="text-white/40 hover:text-white/80 transition-colors">
                  gargi.paperkraft@gmail.com
                </a>
              </div>
              <p className="text-white/20 text-xs leading-relaxed pt-1">
                Ports: Mundra Port · Nhava Sheva (JNPT) · ICD Kanpur
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/20 border-t" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
          <p>© {new Date().getFullYear()} Gargi PaperKraft. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white/50 transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-white/50 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
