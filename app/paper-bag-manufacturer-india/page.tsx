import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Paper Bag Manufacturer in India | Bulk Kraft Factory Direct",
  description: "Premier kraft paper bag manufacturer in India. Automated factory producing SOS square bottom, flat bottom, and food carry bags. High BF paper, custom flexo printing & wholesale pricing.",
  keywords: [
    "paper bag manufacturer india",
    "kraft paper bag manufacturer india",
    "custom paper bag manufacturer india",
    "paper bag factory in india",
    "bulk paper bags wholesale india",
    "paper bag supplier lucknow"
  ],
  alternates: {
    canonical: "/paper-bag-manufacturer-india",
  },
  openGraph: {
    title: "Paper Bag Manufacturer in India | Gargi PaperKraft Factory",
    description: "Industrial paper bag manufacturing facility in Lucknow, India. Producing over 100,000 bags daily for global and domestic brands.",
    url: "https://www.gargipaperkraft.com/paper-bag-manufacturer-india",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.gargipaperkraft.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Manufacturer Profile",
          "item": "https://www.gargipaperkraft.com/paper-bag-manufacturer-india"
        }
      ]
    },
    {
      "@type": "LocalBusiness",
      "name": "Gargi PaperKraft Manufacturing Plant",
      "image": "https://www.gargipaperkraft.com/factory/real-forming-line-1.jpg",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Plot No-20, Goyala Industrial Area, Chinhat, Dewa Road",
        "addressLocality": "Lucknow",
        "addressRegion": "Uttar Pradesh",
        "postalCode": "226019",
        "addressCountry": "IN"
      },
      "telephone": "+91-9918280347"
    }
  ]
};

export default function PaperBagManufacturerIndia() {
  return (
    <div className="bg-white text-stone-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <section className="bg-stone-950 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-stone-800">
        <div className="max-w-6xl mx-auto">
          <nav className="text-xs text-stone-400 mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:underline">Home</Link> / <span>Manufacturing Facility</span>
          </nav>
          <span className="inline-block px-3 py-1 bg-amber-900/40 border border-amber-600/50 text-amber-300 text-xs font-semibold uppercase tracking-wider rounded mb-4">
            Direct Factory Production &bull; High-Volume Machinery
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-6">
            Paper Bag Manufacturer in India
          </h1>
          <p className="text-lg sm:text-xl text-stone-300 max-w-3xl mb-8 leading-relaxed">
            Gargi PaperKraft is an industrial-scale kraft paper bag manufacturing facility based in Lucknow, Uttar Pradesh. We engineer precision-formed Flat Bottom, Square Bottom (SOS), and V-Bottom carry bags for FMCG enterprises, supermarket chains, QSR food delivery, and international retail brands.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/request-quote"
              className="px-6 py-3 bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold rounded-lg transition"
            >
              Request Factory Quote
            </Link>
            <Link
              href="/paper-bag-exporter-india"
              className="px-6 py-3 bg-stone-800 hover:bg-stone-700 text-stone-100 font-semibold rounded-lg border border-stone-700 transition"
            >
              View Export Logistics &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Factory Specifications */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-6">
          Factory Capabilities &amp; Technical Infrastructure
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <div className="border border-stone-200 p-6 rounded-xl">
            <h3 className="text-lg font-bold text-stone-900 mb-2">Automated High-Speed Machinery</h3>
            <p className="text-stone-600">
              Roll-fed automated conversion lines with integrated gusset folding, precision slicing, and touch-free bottom pasting.
            </p>
          </div>
          <div className="border border-stone-200 p-6 rounded-xl">
            <h3 className="text-lg font-bold text-stone-900 mb-2">Daily Production Capacity</h3>
            <p className="text-stone-600">
              Over 100,000 bags manufactured per day across multiple shifts, supporting both container-load export contracts and domestic bulk requirements.
            </p>
          </div>
          <div className="border border-stone-200 p-6 rounded-xl">
            <h3 className="text-lg font-bold text-stone-900 mb-2">Certified Raw Materials</h3>
            <p className="text-stone-600">
              Virgin and recycled kraft paper reels sourced responsibly with strict Burst Factor (BF) testing to ensure structural integrity under load.
            </p>
          </div>
        </div>

        {/* Real Factory Video Showcase */}
        <div className="mt-8 rounded-2xl overflow-hidden border border-stone-200 shadow-xl aspect-[16/9] sm:aspect-[21/9] relative bg-stone-950">
          <video
            className="w-full h-full object-cover"
            autoPlay loop muted playsInline
            poster="/factory/factory-clip-1.jpg"
            preload="metadata"
          >
            <source src="/factory/IMG_2511.mp4" type="video/mp4" />
            <source src="/factory/IMG_2511.mov" type="video/quicktime" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 text-xs font-mono text-white/90">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Live Plant Conversion Line · Lucknow Plant</span>
          </div>
        </div>
      </section>

      {/* Manufactured Bag Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-stone-50 border-t border-stone-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-8">
            Paper Bag Product Lines Manufactured In-House
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-sm">
            <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
              <h3 className="font-bold text-base text-stone-900 mb-2">SOS Square Bottom Bags</h3>
              <p className="text-stone-600 mb-4">Self-opening, 4-panel gusset bags ideal for supermarket bulk goods, flour, takeaway, and cloud kitchens.</p>
              <Link href="/products/square-bottom-paper-bags" className="text-amber-700 font-semibold hover:underline">
                View Specifications &rarr;
              </Link>
            </div>

            <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
              <h3 className="font-bold text-base text-stone-900 mb-2">Flat Bottom Shopping Bags</h3>
              <p className="text-stone-600 mb-4">Self-standing base with reinforced twisted paper rope or flat tape handles for apparel and fashion retail.</p>
              <Link href="/products/flat-bottom-paper-bags" className="text-amber-700 font-semibold hover:underline">
                View Specifications &rarr;
              </Link>
            </div>

            <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
              <h3 className="font-bold text-base text-stone-900 mb-2">V-Bottom Pinch Bags</h3>
              <p className="text-stone-600 mb-4">Economical sharp V-fold pinch bags for bakeries, pharmaceuticals, confectioneries, and lightweight retail.</p>
              <Link href="/products/v-bottom-paper-bags" className="text-amber-700 font-semibold hover:underline">
                View Specifications &rarr;
              </Link>
            </div>

            <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
              <h3 className="font-bold text-base text-stone-900 mb-2">Custom Printed Bags</h3>
              <p className="text-stone-600 mb-4">1-4 color flexographic printing with custom Pantone matching and food-safe water-based inks.</p>
              <Link href="/products/custom-printed-paper-bags" className="text-amber-700 font-semibold hover:underline">
                View Specifications &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Control Standards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-sm text-stone-700">
        <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-6">
          Quality Control &amp; Testing Rigor
        </h2>
        <p className="text-stone-600 mb-6 max-w-3xl">
          Every production run undergoes strict quality assurance protocols before packing and dispatch:
        </p>
        <ul className="list-disc pl-5 space-y-2 max-w-3xl mb-8">
          <li><strong>Burst Factor (BF) Verification:</strong> Calibrated digital burst testing confirming 20 BF to 35+ BF resistance.</li>
          <li><strong>Seam &amp; Glue Strength Test:</strong> Automated pull-stress testing on bottom and longitudinal adhesive joints.</li>
          <li><strong>Load Bearing &amp; Drop Stress Evaluation:</strong> Rigorous weight-load drop simulations replicating transit and carrying conditions.</li>
          <li><strong>Hygienic Production Environment:</strong> Touch-free automated forming lines meeting food contact standards.</li>
        </ul>

        <div className="bg-stone-100 p-6 rounded-xl border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-bold text-stone-900 text-base">Looking for Container Volume Export Pricing?</h3>
            <p className="text-stone-600 text-xs">Explore our dedicated international trade portal with full port-of-exit logistics.</p>
          </div>
          <Link
            href="/paper-bag-exporter-india"
            className="px-5 py-2.5 bg-stone-900 text-white font-semibold rounded-lg hover:bg-stone-800 transition"
          >
            Visit Export Portal
          </Link>
        </div>
      </section>
    </div>
  );
}
