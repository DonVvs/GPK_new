import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "V Bottom Paper Bags Wholesale | Pharmacy & Bakery Bags Factory Direct",
  description: "Bulk V-bottom pinch paper bags from Indian manufacturer. 45-80 GSM, lightweight, high-volume production for bakeries, pharmacies, confectioneries & dry food. Worldwide export.",
  keywords: [
    "v bottom paper bags wholesale",
    "pinch bottom paper bags",
    "pharmacy paper bags manufacturer",
    "bakery paper bags bulk",
    "grease resistant paper pouches",
    "flat paper bags supplier india"
  ],
  alternates: {
    canonical: "/products/v-bottom-paper-bags",
  },
  openGraph: {
    title: "V Bottom Paper Bags Wholesale | Gargi PaperKraft",
    description: "Compact, economical pinch-bottom kraft paper bags for pharmacies, food dispensaries, and bakeries.",
    url: "https://www.gargipaperkraft.com/products/v-bottom-paper-bags",
  },
};

export default function VBottomBagsPage() {
  return (
    <div className="bg-white text-stone-900">
      {/* Header */}
      <section className="bg-stone-950 text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-stone-800">
        <div className="max-w-6xl mx-auto">
          <nav className="text-xs text-stone-400 mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:underline">Home</Link> / <Link href="/products" className="hover:underline">Products</Link> / <span>V-Bottom Bags</span>
          </nav>
          <span className="inline-block px-3 py-1 bg-amber-900/40 border border-amber-600/50 text-amber-300 text-xs font-semibold uppercase tracking-wider rounded mb-3">
            Ultra-Compact &bull; High-Speed Packaging
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">
            V-Bottom (Pinch Bottom) Kraft Paper Bags
          </h1>
          <p className="text-stone-300 max-w-3xl text-base sm:text-lg leading-relaxed mb-6">
            Lightweight, economical, and fast to dispense. Our V-bottom pinch bags store flat in high density and pop open instantly for high-volume checkout counters in pharmacies, bakeries, confectioneries, and street-food outlets.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/request-quote"
              className="px-6 py-3 bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold rounded-lg transition text-sm"
            >
              Request Bulk Pricing
            </Link>
            <Link
              href="/Brochure_GPK.pdf"
              download
              className="px-6 py-3 bg-stone-800 hover:bg-stone-700 text-stone-100 font-semibold rounded-lg border border-stone-700 transition text-sm"
            >
              Download Catalogue (PDF)
            </Link>
          </div>
        </div>
      </section>

      {/* Overview & Image */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
          <div className="border border-stone-200 rounded-2xl p-6 bg-stone-50 flex items-center justify-center">
            <div className="relative w-full h-80">
              <Image
                src="/images/v-bottom.png"
                alt="V-Bottom Kraft Paper Pinch Bags"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          <div className="space-y-4 text-stone-700 text-sm sm:text-base">
            <h2 className="text-2xl font-bold text-stone-900">
              Economical High-Volume Dispensing
            </h2>
            <p className="leading-relaxed">
              V-bottom bags (also known as pinch bottom or flat merchandise bags) offer the lowest material weight per bag, translating to exceptional cost savings for businesses packing thousands of items daily. Their ultra-slim storage profile maximizes shelf space under checkout counters.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-stone-800 font-medium">
              <li>High-speed automated manufacturing producing millions of units monthly.</li>
              <li>Greaseproof (OGR) paper options available for fried food, donuts, and pastries.</li>
              <li>Brown unbleached kraft or bright white bleached medical-grade paper.</li>
              <li>Over 1,000,000 units fit into a single 40ft High Cube container, lowering landed shipping cost.</li>
            </ul>
          </div>
        </div>

        {/* Specifications Table */}
        <h2 className="text-2xl font-bold text-stone-900 mb-4">
          Standard V-Bottom Bag Sizes &amp; Specifications
        </h2>
        <div className="overflow-x-auto mb-16">
          <table className="w-full text-left text-sm border-collapse bg-white border border-stone-300">
            <thead className="bg-stone-900 text-stone-100 uppercase text-xs">
              <tr>
                <th className="p-3 border border-stone-700">Size Reference</th>
                <th className="p-3 border border-stone-700">Dimensions (Width x Height)</th>
                <th className="p-3 border border-stone-700">GSM Range</th>
                <th className="p-3 border border-stone-700">Paper Finish</th>
                <th className="p-3 border border-stone-700">Target Industry</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200 text-stone-800">
              <tr>
                <td className="p-3 font-semibold">Small Pharmacy Pouch</td>
                <td className="p-3">120 x 200 mm</td>
                <td className="p-3">45 - 55 GSM</td>
                <td className="p-3">Brown or White Kraft</td>
                <td className="p-3">Prescription medicines, pills, cosmetics</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">Medium Bakery / Bread</td>
                <td className="p-3">180 x 260 mm</td>
                <td className="p-3">50 - 65 GSM</td>
                <td className="p-3">Breathable Kraft / OGR</td>
                <td className="p-3">Croissants, cookies, rolls, sandwiches</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">Large Baguette / Dry Food</td>
                <td className="p-3">140 x 500 mm</td>
                <td className="p-3">55 - 70 GSM</td>
                <td className="p-3">Brown Virgin Kraft</td>
                <td className="p-3">Baguettes, long loaves, craft goods</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">Greaseproof Fast Food</td>
                <td className="p-3">160 x 220 mm</td>
                <td className="p-3">40 - 50 GSM</td>
                <td className="p-3">Oil &amp; Grease Resistant</td>
                <td className="p-3">French fries, fried samosas, burgers</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/request-quote"
            className="inline-block px-8 py-4 bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold rounded-xl shadow transition"
          >
            Request Container Pricing for V-Bottom Bags
          </Link>
        </div>
      </section>
    </div>
  );
}
