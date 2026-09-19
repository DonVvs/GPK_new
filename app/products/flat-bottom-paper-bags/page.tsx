import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Flat Bottom Paper Bags Wholesale | Retail Shopping Bags Manufacturer",
  description: "Bulk flat bottom kraft paper shopping bags with twisted and flat paper handles. 80-140 GSM, reinforced base, custom flexo printing. Direct factory supply from India for retail, fashion, and food brands.",
  keywords: [
    "flat bottom paper bags wholesale",
    "paper shopping bags with handles",
    "kraft carrier bags manufacturer",
    "twisted handle paper bags bulk",
    "retail paper bags supplier india"
  ],
  alternates: {
    canonical: "/products/flat-bottom-paper-bags",
  },
  openGraph: {
    title: "Flat Bottom Paper Bags Wholesale | Gargi PaperKraft Factory Direct",
    description: "Manufactured with reinforced handles and stable block base for retail apparel, gift shops, and premium takeaways.",
    url: "https://www.gargipaperkraft.com/products/flat-bottom-paper-bags",
  },
};

export default function FlatBottomBagsPage() {
  return (
    <div className="bg-white text-stone-900">
      {/* Header */}
      <section className="bg-stone-950 text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-stone-800">
        <div className="max-w-6xl mx-auto">
          <nav className="text-xs text-stone-400 mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:underline">Home</Link> / <Link href="/products" className="hover:underline">Products</Link> / <span>Flat Bottom Bags</span>
          </nav>
          <span className="inline-block px-3 py-1 bg-amber-900/40 border border-amber-600/50 text-amber-300 text-xs font-semibold uppercase tracking-wider rounded mb-3">
            The Retail Standard &bull; Twisted &amp; Flat Tape Handles
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">
            Flat Bottom Kraft Paper Shopping Bags
          </h1>
          <p className="text-stone-300 max-w-3xl text-base sm:text-lg leading-relaxed mb-6">
            Engineered for high aesthetic appeal and heavy load capacity. Featuring an ultra-stable self-standing block base with reinforced handle attachments, perfect for fashion boutiques, department stores, retail chains, and premium takeaway food.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/request-quote"
              className="px-6 py-3 bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold rounded-lg transition text-sm"
            >
              Request Wholesale Quote
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
                src="/images/flat-bottom.webp"
                alt="Flat Bottom Kraft Paper Shopping Bags with Handles"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          <div className="space-y-4 text-stone-700 text-sm sm:text-base">
            <h2 className="text-2xl font-bold text-stone-900">
              Durable Handle Engineering &amp; Presentation
            </h2>
            <p className="leading-relaxed">
              Our flat bottom shopping bags combine high tensile strength virgin kraft paper with precision-glued handle reinforcement patches. The handle attachment is engineered to withstand vertical pull stress, ensuring zero detachment even when carrying heavy garments, shoe boxes, or gourmet food containers.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-stone-800 font-medium">
              <li>Reinforced twisted paper cord or folded internal flat tape handles.</li>
              <li>Supports loads up to 15 kg depending on GSM configuration.</li>
              <li>Available in natural unbleached brown kraft or bleached white paper.</li>
              <li>100% recyclable, biodegradable, and plastic-tax exempt across Europe and the UK.</li>
            </ul>
          </div>
        </div>

        {/* Specifications Table */}
        <h2 className="text-2xl font-bold text-stone-900 mb-4">
          Standard Sizing &amp; Handle Configurations
        </h2>
        <div className="overflow-x-auto mb-16">
          <table className="w-full text-left text-sm border-collapse bg-white border border-stone-300">
            <thead className="bg-stone-900 text-stone-100 uppercase text-xs">
              <tr>
                <th className="p-3 border border-stone-700">Size Classification</th>
                <th className="p-3 border border-stone-700">Dimensions (W x G x H)</th>
                <th className="p-3 border border-stone-700">Handle Type</th>
                <th className="p-3 border border-stone-700">GSM Range</th>
                <th className="p-3 border border-stone-700">Recommended Use</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200 text-stone-800">
              <tr>
                <td className="p-3 font-semibold">Small Boutique</td>
                <td className="p-3">220 x 100 x 280 mm</td>
                <td className="p-3">Twisted Paper Rope</td>
                <td className="p-3">90 - 110 GSM</td>
                <td className="p-3">Cosmetics, jewelry, accessories, small books</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">Medium Retail</td>
                <td className="p-3">300 x 120 x 400 mm</td>
                <td className="p-3">Twisted or Flat Tape</td>
                <td className="p-3">100 - 130 GSM</td>
                <td className="p-3">Apparel, footwear, fashion retail, gifts</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">Large Shopping</td>
                <td className="p-3">420 x 150 x 500 mm</td>
                <td className="p-3">Reinforced Twisted Cord</td>
                <td className="p-3">120 - 140 GSM</td>
                <td className="p-3">Winter coats, department store goods, electronics</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">Food Takeaway Wide Base</td>
                <td className="p-3">280 x 180 x 300 mm</td>
                <td className="p-3">Flat Internal Tape</td>
                <td className="p-3">80 - 100 GSM</td>
                <td className="p-3">Catering trays, burger boxes, sushi platters</td>
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
            Get a Wholesale Quote for Flat Bottom Bags
          </Link>
        </div>
      </section>
    </div>
  );
}
