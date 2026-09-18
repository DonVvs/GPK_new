import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Square Bottom (SOS) Paper Bags Wholesale | Manufacturer Factory Direct",
  description: "Bulk SOS square bottom kraft paper bags from leading Indian manufacturer. 60-130 GSM, high burst strength, food-grade certified, plain or custom flexo printed. 20ft & 40ft container export.",
  keywords: [
    "square bottom paper bags wholesale",
    "sos kraft paper bags bulk",
    "self opening sack paper bags manufacturer",
    "grocery paper bags supplier india",
    "food delivery kraft bags factory"
  ],
  alternates: {
    canonical: "/products/square-bottom-paper-bags",
  },
  openGraph: {
    title: "Square Bottom (SOS) Paper Bags Wholesale | Gargi PaperKraft",
    description: "Industrial manufacturer of square bottom SOS paper bags for supermarkets, food delivery, and bulk dry food packing.",
    url: "https://www.gargipaperkraft.com/products/square-bottom-paper-bags",
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
          "name": "Products",
          "item": "https://www.gargipaperkraft.com/products"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Square Bottom Paper Bags",
          "item": "https://www.gargipaperkraft.com/products/square-bottom-paper-bags"
        }
      ]
    },
    {
      "@type": "Product",
      "name": "Square Bottom (SOS) Kraft Paper Bags",
      "description": "High tensile strength self-opening sack (SOS) square bottom kraft paper bags for supermarkets, food delivery, and retail bulk supply.",
      "brand": {
        "@type": "Brand",
        "name": "Gargi PaperKraft"
      },
      "category": "Packaging > Paper Bags",
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "USD",
        "price": "0.03",
        "priceValidUntil": "2027-12-31",
        "itemCondition": "https://schema.org/NewCondition",
        "availability": "https://schema.org/InStock"
      }
    }
  ]
};

export default function SquareBottomBagsPage() {
  return (
    <div className="bg-white text-stone-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <section className="bg-stone-950 text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-stone-800">
        <div className="max-w-6xl mx-auto">
          <nav className="text-xs text-stone-400 mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:underline">Home</Link> / <Link href="/products" className="hover:underline">Products</Link> / <span>Square Bottom Bags</span>
          </nav>
          <span className="inline-block px-3 py-1 bg-amber-900/40 border border-amber-600/50 text-amber-300 text-xs font-semibold uppercase tracking-wider rounded mb-3">
            Self-Opening Sack (SOS) &bull; Maximum Volume
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">
            Square Bottom (SOS) Kraft Paper Bags
          </h1>
          <p className="text-stone-300 max-w-3xl text-base sm:text-lg leading-relaxed mb-6">
            Engineered with a rigid rectangular block base and 4-panel side gussets. Our SOS bags stand upright unsupported for rapid automated filling in supermarkets, takeaways, cloud kitchens, and grain packing facilities.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/request-quote"
              className="px-6 py-3 bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold rounded-lg transition text-sm"
            >
              Request Wholesale Quote
            </Link>
            <Link
              href="/paper-bag-exporter-india"
              className="px-6 py-3 bg-stone-800 hover:bg-stone-700 text-stone-100 font-semibold rounded-lg border border-stone-700 transition text-sm"
            >
              View Container Loading Specs &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Product Overview & Visuals */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
          <div className="border border-stone-200 rounded-2xl p-6 bg-stone-50 flex items-center justify-center">
            <div className="relative w-full h-80">
              <Image
                src="/images/square-bottom.png"
                alt="Square Bottom SOS Kraft Paper Bags"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          <div className="space-y-4 text-stone-700 text-sm sm:text-base">
            <h2 className="text-2xl font-bold text-stone-900">
              Industrial Grade Structural Integrity
            </h2>
            <p className="leading-relaxed">
              Square bottom bags (also known as Self-Opening Sacks or SOS) offer the highest volume-to-surface ratio of all paper bag geometries. The block-bottom configuration prevents tipping, protecting hot food containers and fragile retail items during delivery and customer handling.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-stone-800 font-medium">
              <li>Self-standing structure for quick bagging at checkout counters.</li>
              <li>High Burst Factor (BF 20–35+) with tear-resistant side gussets.</li>
              <li>Available handleless, with flat internal handles, or with die-cut grips.</li>
              <li>Food-grade certified paper and odor-free food safe adhesive.</li>
            </ul>
          </div>
        </div>

        {/* Technical Specification Matrix */}
        <h2 className="text-2xl font-bold text-stone-900 mb-4">
          Technical Specifications &amp; Standard Sizing Table
        </h2>
        <p className="text-xs text-stone-600 mb-6">
          Custom dimensions can be engineered to match your exact container filling or delivery box dimensions.
        </p>

        <div className="overflow-x-auto mb-16">
          <table className="w-full text-left text-sm border-collapse bg-white border border-stone-300">
            <thead className="bg-stone-900 text-stone-100 uppercase text-xs">
              <tr>
                <th className="p-3 border border-stone-700">Size Reference</th>
                <th className="p-3 border border-stone-700">Dimensions (W x G x H)</th>
                <th className="p-3 border border-stone-700">Recommended GSM</th>
                <th className="p-3 border border-stone-700">Weight Capacity</th>
                <th className="p-3 border border-stone-700">Primary Applications</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200 text-stone-800">
              <tr>
                <td className="p-3 font-semibold">Small SOS</td>
                <td className="p-3">150 x 90 x 270 mm</td>
                <td className="p-3">60 - 70 GSM</td>
                <td className="p-3">Up to 2.5 kg</td>
                <td className="p-3">Pharmacies, bakeries, coffee beans, cosmetics</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">Medium SOS</td>
                <td className="p-3">260 x 140 x 320 mm</td>
                <td className="p-3">70 - 90 GSM</td>
                <td className="p-3">Up to 6.0 kg</td>
                <td className="p-3">QSR food delivery (Swiggy, Talabat), apparel</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">Large Grocery SOS</td>
                <td className="p-3">320 x 170 x 420 mm</td>
                <td className="p-3">90 - 120 GSM</td>
                <td className="p-3">Up to 12.0 kg</td>
                <td className="p-3">Supermarkets, flour packing, organic grains</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">Extra Large Bulk</td>
                <td className="p-3">350 x 200 x 480 mm</td>
                <td className="p-3">110 - 140 GSM</td>
                <td className="p-3">Up to 16.0 kg</td>
                <td className="p-3">Industrial hardware, institutional supply</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Custom Flexo Printing */}
        <div className="bg-stone-50 border border-stone-200 rounded-2xl p-8 mb-16">
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-3">
            Custom Flexographic Printing &amp; Branding
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed mb-4">
            Transform your packaging into a high-visibility marketing asset. We provide precision flexographic printing in up to 4 colors, reproducing corporate logos, regulatory recycling symbols (e.g. Italian CONAI PAP 22), barcodes, and QR codes with crisp edge definition.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-semibold text-stone-800">
            <div className="p-3 bg-white rounded border border-stone-200">
              &bull; Pantone Matching System (PMS)
            </div>
            <div className="p-3 bg-white rounded border border-stone-200">
              &bull; 100% Water-Based Odorless Inks
            </div>
            <div className="p-3 bg-white rounded border border-stone-200">
              &bull; Full Bleed &amp; Gusset Edge Printing
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/request-quote"
            className="inline-block px-8 py-4 bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold rounded-xl shadow transition"
          >
            Get a Custom Quote for Square Bottom Bags
          </Link>
        </div>
      </section>
    </div>
  );
}
