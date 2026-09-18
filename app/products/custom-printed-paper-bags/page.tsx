import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Custom Printed Paper Bags Wholesale | Branded Kraft Packaging Manufacturer",
  description: "Custom printed paper bags manufacturer in India. Bulk flexographic printing up to 4 colors with water-based food-grade inks. Custom sizes, twisted handles, and high-volume container export.",
  keywords: [
    "custom printed paper bags wholesale",
    "custom paper bags manufacturer",
    "branded kraft bags bulk",
    "logo printed paper bags exporter",
    "flexographic printed packaging bags"
  ],
  alternates: {
    canonical: "/products/custom-printed-paper-bags",
  },
  openGraph: {
    title: "Custom Printed Paper Bags Wholesale | Gargi PaperKraft Factory",
    description: "Full-color flexographic custom printing on SOS, flat bottom, and carry bags for corporate brands and retail chains.",
    url: "https://www.gargipaperkraft.com/products/custom-printed-paper-bags",
  },
};

export default function CustomPrintedBagsPage() {
  return (
    <div className="bg-white text-stone-900">
      {/* Header */}
      <section className="bg-stone-950 text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-stone-800">
        <div className="max-w-6xl mx-auto">
          <nav className="text-xs text-stone-400 mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:underline">Home</Link> / <Link href="/products" className="hover:underline">Products</Link> / <span>Custom Printed Bags</span>
          </nav>
          <span className="inline-block px-3 py-1 bg-amber-900/40 border border-amber-600/50 text-amber-300 text-xs font-semibold uppercase tracking-wider rounded mb-3">
            Bespoke Branding &bull; Flexographic Print Up to 4 Colors
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">
            Custom Printed Kraft Paper Bags
          </h1>
          <p className="text-stone-300 max-w-3xl text-base sm:text-lg leading-relaxed mb-6">
            Turn your packaging into a mobile brand billboard. We print bespoke logos, full-bleed artwork, regulatory compliance codes, and marketing messages on high-tensile brown and bleached white kraft paper.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/request-quote"
              className="px-6 py-3 bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold rounded-lg transition text-sm"
            >
              Request Custom Printed Quote
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

      {/* Printing Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-6">
          High-Speed Inline Flexographic Capabilities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm mb-16">
          <div className="border border-stone-200 p-6 rounded-xl bg-stone-50">
            <h3 className="text-lg font-bold text-stone-900 mb-2">1 to 4 Color In-Line Flexo</h3>
            <p className="text-stone-600">
              Automated high-speed printing directly on the paper roll prior to folding, ensuring razor-sharp registration and zero ink smear.
            </p>
          </div>

          <div className="border border-stone-200 p-6 rounded-xl bg-stone-50">
            <h3 className="text-lg font-bold text-stone-900 mb-2">Food-Safe Water-Based Inks</h3>
            <p className="text-stone-600">
              100% odorless, non-toxic water-based inks suitable for direct and indirect food contact compliance in Europe and the Americas.
            </p>
          </div>

          <div className="border border-stone-200 p-6 rounded-xl bg-stone-50">
            <h3 className="text-lg font-bold text-stone-900 mb-2">Full Gusset &amp; Edge Printing</h3>
            <p className="text-stone-600">
              Print across front, back, side gussets, and bottom panel for 360-degree brand visibility on retail streets.
            </p>
          </div>
        </div>

        {/* Customization Options */}
        <h2 className="text-2xl font-bold text-stone-900 mb-4">
          Custom Specification Options
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs text-stone-800 mb-16">
          <div className="p-4 border border-stone-200 rounded-lg bg-white">
            <strong className="block text-stone-900 text-sm mb-1">Paper Substrate</strong>
            Virgin Brown Kraft, Recycled Brown Kraft, Bleached White Kraft (50 - 140 GSM).
          </div>
          <div className="p-4 border border-stone-200 rounded-lg bg-white">
            <strong className="block text-stone-900 text-sm mb-1">Handle Types</strong>
            Twisted Paper Cord, Flat Folded Internal Tape, Die-Cut Handle, or Handleless SOS.
          </div>
          <div className="p-4 border border-stone-200 rounded-lg bg-white">
            <strong className="block text-stone-900 text-sm mb-1">Color Systems</strong>
            Pantone Solid Coated / Uncoated (PMS) matching with digital proofing.
          </div>
          <div className="p-4 border border-stone-200 rounded-lg bg-white">
            <strong className="block text-stone-900 text-sm mb-1">Custom MOQ</strong>
            Standard MOQ is 100,000 units for custom printed runs; test runs possible upon consultation.
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/request-quote"
            className="inline-block px-8 py-4 bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold rounded-xl shadow transition"
          >
            Upload Artwork &amp; Get a Custom Print Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
