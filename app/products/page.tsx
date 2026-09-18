import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Kraft Paper Bags Product Catalog | Wholesale Manufacturer India",
  description: "Browse our complete industrial paper bag manufacturing range: SOS square bottom, flat bottom shopping bags, V-bottom pinch bags, and custom printed kraft bags. Bulk wholesale and container export.",
  keywords: [
    "kraft paper bags catalog",
    "paper bag manufacturer products",
    "wholesale paper bags types",
    "sos bags supplier",
    "flat bottom carry bags india"
  ],
  alternates: {
    canonical: "/products",
  },
  openGraph: {
    title: "Paper Bags Product Catalog | Gargi PaperKraft India",
    description: "Industrial paper bag manufacturing catalog. Sizing, GSM, handle options, and container capacities for global buyers.",
    url: "https://www.gargipaperkraft.com/products",
  },
};

const productCategories = [
  {
    id: "square-bottom",
    title: "Square Bottom (SOS) Bags",
    subtitle: "The Volume Workhorse",
    description: "Rigid block bottom with 4-panel side gussets. Self-standing structure engineered for supermarkets, grocery packaging, takeout, and automated fast filling.",
    specs: "60 - 130 GSM | Handleless or Flat Internal Handle | Max Load: 12kg",
    features: [
      "Stands upright unsupported on checkout counters",
      "Maximizes internal volume for boxes and containers",
      "Food-grade certified paper and safe adhesive",
      "Over 400,000 pcs fit in a 40ft High Cube container"
    ],
    href: "/products/square-bottom-paper-bags",
    image: "/images/square-bottom.png",
  },
  {
    id: "flat-bottom",
    title: "Flat Bottom Shopping Bags",
    subtitle: "The Retail & Fashion Standard",
    description: "Self-standing flat block base with reinforced twisted paper rope or flat tape handles. Designed for fashion boutiques, luxury retail, and department stores.",
    specs: "80 - 140 GSM | Twisted Paper Rope or Flat Tape Handle | Max Load: 15kg",
    features: [
      "Reinforced handle patch prevents tearing under stress",
      "Premium presentation in natural brown or bleached white",
      "High Burst Factor (BF 20-35) virgin kraft paper",
      "100% recyclable, biodegradable, and plastic-tax exempt"
    ],
    href: "/products/flat-bottom-paper-bags",
    image: "/images/flat-bottom.png",
  },
  {
    id: "v-bottom",
    title: "V-Bottom (Pinch Bottom) Bags",
    subtitle: "Ultra-Compact & Economical",
    description: "Smart pinch-bottom flat design ideal for pharmacies, bakeries, confectionery, and street food. Flat storage density reduces shipping and storage costs.",
    specs: "45 - 80 GSM | Pinch Bottom Pouch Style | High Speed",
    features: [
      "Lowest cost per unit for high-speed dispensing",
      "Grease-resistant (OGR) options for fried snacks and pastries",
      "Over 1,000,000 units fit in a 40ft HC shipping container",
      "Natural unbleached or clean white bleached paper"
    ],
    href: "/products/v-bottom-paper-bags",
    image: "/images/v-bottom.png",
  },
  {
    id: "custom-printed",
    title: "Custom Printed Paper Bags",
    subtitle: "Mobile Brand Advertising",
    description: "High-precision flexographic printing up to 4 colors with water-based food-safe inks. Custom Pantone color matching, barcodes, and regulatory recycling codes.",
    specs: "50 - 140 GSM | Any Bag Construction | 1-4 Color Flexo",
    features: [
      "Inline high-speed printing directly on the paper roll",
      "Odorless, non-toxic water-based inks for food contact",
      "Full bleed and gusset edge printing for 360-degree branding",
      "Custom MOQ from 100,000 units per artwork SKU"
    ],
    href: "/products/custom-printed-paper-bags",
    image: "/images/products-hero.jpg",
  }
];

export default function ProductsPage() {
  return (
    <div className="bg-white min-h-screen text-stone-900">
      {/* Hero */}
      <section className="bg-stone-950 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-stone-800">
        <div className="max-w-6xl mx-auto text-center">
          <span className="inline-block px-3 py-1 bg-amber-900/40 border border-amber-600/50 text-amber-300 text-xs font-semibold uppercase tracking-wider rounded mb-4">
            Industrial Paper Packaging Portfolio
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">
            Precision-Manufactured Kraft Paper Bags
          </h1>
          <p className="text-stone-300 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed mb-6">
            Direct factory manufacturing of eco-friendly paper bags for retail chains, supermarkets, food service, and global packaging distributors.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/request-quote"
              className="px-6 py-3 bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold rounded-lg transition text-sm"
            >
              Request Bulk Quotation
            </Link>
            <Link
              href="/paper-bag-exporter-india"
              className="px-6 py-3 bg-stone-800 hover:bg-stone-700 text-stone-100 font-semibold rounded-lg border border-stone-700 transition text-sm"
            >
              Export Logistics &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Product Category Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="space-y-16">
          {productCategories.map((product, index) => (
            <div
              key={product.id}
              className={`flex flex-col md:flex-row gap-8 items-center border border-stone-200 rounded-2xl p-6 sm:p-8 bg-stone-50/50 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Product Visual */}
              <div className="w-full md:w-1/2 flex items-center justify-center p-4 bg-white rounded-xl border border-stone-200">
                <div className="relative w-full h-64 sm:h-72">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Product Info */}
              <div className="w-full md:w-1/2 space-y-4 text-sm">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
                  {product.subtitle}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
                  {product.title}
                </h2>
                <p className="text-stone-600 leading-relaxed">
                  {product.description}
                </p>
                <div className="p-3 bg-stone-100 rounded-lg text-xs font-semibold text-stone-800">
                  {product.specs}
                </div>

                <ul className="space-y-2 text-stone-700">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-2 flex items-center gap-4">
                  <Link
                    href={product.href}
                    className="inline-flex items-center gap-2 text-amber-700 font-bold hover:text-amber-800 transition"
                  >
                    <span>View Sizing &amp; Technical Specs</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global Export Banner */}
        <div className="mt-16 bg-stone-900 text-white rounded-2xl p-8 text-center sm:text-left sm:flex sm:items-center sm:justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold mb-2">Need Container Loads for International Markets?</h3>
            <p className="text-stone-300 text-xs sm:text-sm">
              We export 20ft and 40ft container loads to the UAE, UK, Spain, Italy, and worldwide via Mundra and Nhava Sheva ports.
            </p>
          </div>
          <Link
            href="/request-quote"
            className="mt-4 sm:mt-0 inline-block px-6 py-3 bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-sm rounded-lg whitespace-nowrap transition"
          >
            Get Container Pricing
          </Link>
        </div>
      </section>
    </div>
  );
}
