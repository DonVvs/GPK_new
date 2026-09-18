"use client";

import Image from "next/image";

// Blinkit removed per brand review
const partners = [
  { name: "Indian Railways", logo: "/images/partners/indian-railways.png" },
  { name: "Swiggy", logo: "/images/partners/swiggy.png" },
  { name: "Goli Vada Pav", logo: "/images/partners/goli.jpg" },
  { name: "Mahesh Masala", logo: "/images/partners/mahesh.jpg" },
  { name: "Good Bakery", logo: "/images/partners/good-bakery.png" },
];

// Duplicate for seamless CSS loop (no JS animation dependency)
const track = [...partners, ...partners];

export default function PartnerTicker() {
  return (
    <section className="py-10 bg-[#fbf8f5] border-b overflow-hidden" style={{ borderColor: "rgba(44,112,107,0.12)" }}>
      {/* Label */}
      <p className="text-center gpk-eyebrow mb-7">
        Trusted by domestic brands &amp; institutions
      </p>

      {/* Ticker track */}
      <div
        className="relative flex overflow-hidden"
        style={{ maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)" }}
      >
        <div
          className="flex items-center gap-16 will-change-transform"
          style={{
            animation: "gpk-ticker 28s linear infinite",
            width: "max-content",
          }}
        >
          {track.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center flex-shrink-0"
            >
              <div className="relative h-14 w-44 opacity-60 hover:opacity-90 transition-opacity duration-300 grayscale hover:grayscale-0">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain"
                  sizes="176px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
