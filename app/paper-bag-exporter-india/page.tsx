import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Paper Bag Exporter in India | Bulk Container Supply (FOB & CIF)",
  description: "Direct manufacturer & exporter of kraft paper bags in India. Supplying high-tensile SOS, flat bottom, and grocery bags to UAE, UK, Spain, Italy, and global distributors. Full container loads via Mundra & Nhava Sheva.",
  keywords: [
    "paper bag exporter india",
    "kraft paper bag exporter india",
    "paper bags from india",
    "indian paper bag manufacturer exporter",
    "paper bags 20ft container supplier",
    "FOB paper bags india",
    "paper bag factory export lucknow"
  ],
  alternates: {
    canonical: "/paper-bag-exporter-india",
    languages: {
      "en": "https://www.gargipaperkraft.com/paper-bag-exporter-india",
      "en-GB": "https://www.gargipaperkraft.com/export/uk",
      "en-AE": "https://www.gargipaperkraft.com/export/uae",
      "es-ES": "https://www.gargipaperkraft.com/export/spain",
      "it-IT": "https://www.gargipaperkraft.com/export/italy",
      "x-default": "https://www.gargipaperkraft.com/paper-bag-exporter-india",
    },
  },
  openGraph: {
    title: "Paper Bag Exporter in India | Bulk Kraft Paper Bags Worldwide",
    description: "Exporting high-quality kraft paper bags to international buyers. Sourced from FSC-certified mills. Full container logistics, custom printing, and certified paper grades.",
    url: "https://www.gargipaperkraft.com/paper-bag-exporter-india",
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
          "name": "Export Division",
          "item": "https://www.gargipaperkraft.com/paper-bag-exporter-india"
        }
      ]
    },
    {
      "@type": "Product",
      "name": "Export Quality Kraft Paper Bags",
      "description": "Bulk manufacturing and international export of SOS square bottom, flat bottom, and pinch bottom kraft paper bags from India.",
      "brand": {
        "@type": "Brand",
        "name": "Gargi PaperKraft"
      },
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

export default function PaperBagExporterIndia() {
  return (
    <div className="bg-white text-stone-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="bg-stone-950 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-stone-800">
        <div className="max-w-6xl mx-auto">
          <nav className="text-xs text-stone-400 mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:underline">Home</Link> / <span>Export Division</span>
          </nav>
          <span className="inline-block px-3 py-1 bg-amber-900/40 border border-amber-600/50 text-amber-300 text-xs font-semibold uppercase tracking-wider rounded mb-4">
            International B2B Supply &bull; Direct Factory Exporter
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-6">
            Paper Bag Manufacturer &amp; Global Exporter in India
          </h1>
          <p className="text-lg sm:text-xl text-stone-300 max-w-3xl mb-8 leading-relaxed">
            Gargi PaperKraft manufactures and exports industrial-grade, eco-friendly kraft paper bags (sourced from FSC-certified mills) for international packaging distributors, supermarket chains, food-service brands, and retail groups. We supply 20ft and 40ft High Cube container loads with complete export documentation and sea freight logistics.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/request-quote"
              className="px-6 py-3 bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold rounded-lg transition"
            >
              Order Free Sample Kit / Get RFQ
            </Link>
            <Link
              href="/Brochure_GPK.pdf"
              download
              className="px-6 py-3 bg-stone-800 hover:bg-stone-700 text-stone-100 font-semibold rounded-lg border border-stone-700 transition"
            >
              Download Export Catalogue (PDF)
            </Link>
          </div>
        </div>
      </section>

      {/* Core Export Capabilities */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-4">
          Why International Importers Source from Gargi PaperKraft
        </h2>
        <p className="text-stone-600 mb-10 max-w-3xl">
          We combine high-speed automated bag-forming machinery with sustainable raw paper sourcing to deliver high Burst Factor (BF) packaging that complies with global single-use plastic restrictions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border border-stone-200 p-6 rounded-xl bg-stone-50">
            <h3 className="text-xl font-bold mb-3">High-Volume Production</h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              Equipped for automated roll-fed production delivering over 100,000 units daily, ensuring rapid lead times for repeat container orders.
            </p>
          </div>
          <div className="border border-stone-200 p-6 rounded-xl bg-stone-50">
            <h3 className="text-xl font-bold mb-3">Custom GSM &amp; High Tensile Strength</h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              Available from 50 GSM to 140 GSM in natural virgin kraft, recycled kraft, and bleached white paper with Burst Factor ranging from BF 20 to BF 35+.
            </p>
          </div>
          <div className="border border-stone-200 p-6 rounded-xl bg-stone-50">
            <h3 className="text-xl font-bold mb-3">Flexographic Custom Printing</h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              Inline 1 to 4 color flexographic printing with odorless, non-toxic, water-based inks suitable for food contact and corporate branding.
            </p>
          </div>
        </div>
      </section>

      {/* Container Volume & Shipping Reference Table */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-stone-100 border-t border-b border-stone-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-4">
            Container Loading &amp; Packing Specifications
          </h2>
          <p className="text-stone-600 mb-8 max-w-3xl text-sm">
            Estimated load capacities per ocean shipping container. Bags are packed in heavy-duty 5-ply corrugated master cartons and shrink-wrapped on export pallets.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse bg-white rounded-lg shadow-sm border border-stone-300">
              <thead className="bg-stone-900 text-stone-100 uppercase text-xs">
                <tr>
                  <th className="p-4 border border-stone-700">Bag Category</th>
                  <th className="p-4 border border-stone-700">Sample Dimensions (W x G x H)</th>
                  <th className="p-4 border border-stone-700">GSM Range</th>
                  <th className="p-4 border border-stone-700">Units / Master Box</th>
                  <th className="p-4 border border-stone-700">Approx. 20ft FCL</th>
                  <th className="p-4 border border-stone-700">Approx. 40ft HC FCL</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 text-stone-800">
                <tr>
                  <td className="p-4 font-semibold">Small SOS (Bakery / Pharmacy)</td>
                  <td className="p-4">150 x 90 x 270 mm</td>
                  <td className="p-4">60 - 70 GSM</td>
                  <td className="p-4">1,000 pcs</td>
                  <td className="p-4">350,000 - 400,000 pcs</td>
                  <td className="p-4">750,000 - 850,000 pcs</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Medium SOS (Takeaway / Food Delivery)</td>
                  <td className="p-4">260 x 140 x 320 mm</td>
                  <td className="p-4">70 - 90 GSM</td>
                  <td className="p-4">500 pcs</td>
                  <td className="p-4">180,000 - 220,000 pcs</td>
                  <td className="p-4">400,000 - 480,000 pcs</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Large Grocery / Supermarket SOS</td>
                  <td className="p-4">320 x 170 x 420 mm</td>
                  <td className="p-4">80 - 120 GSM</td>
                  <td className="p-4">250 pcs</td>
                  <td className="p-4">110,000 - 140,000 pcs</td>
                  <td className="p-4">240,000 - 290,000 pcs</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Retail Shopping Bags (Handles)</td>
                  <td className="p-4">300 x 120 x 400 mm</td>
                  <td className="p-4">90 - 140 GSM</td>
                  <td className="p-4">250 pcs</td>
                  <td className="p-4">90,000 - 120,000 pcs</td>
                  <td className="p-4">200,000 - 250,000 pcs</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">V-Bottom Pinch Bags (Flat Pouch)</td>
                  <td className="p-4">180 x 0 x 250 mm</td>
                  <td className="p-4">50 - 70 GSM</td>
                  <td className="p-4">2,000 pcs</td>
                  <td className="p-4">600,000 - 700,000 pcs</td>
                  <td className="p-4">1,300,000 - 1,500,000 pcs</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Export Logistics & Trade Terms */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-8">
          Export Logistics, Ports &amp; Incoterms
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-stone-700">
          <div className="border border-stone-200 p-6 rounded-lg space-y-3">
            <h3 className="text-lg font-bold text-stone-900">Ports of Dispatch (India)</h3>
            <p><strong>Primary Sea Ports:</strong> Mundra Port (Gujarat) &amp; Nhava Sheva / JNPT (Mumbai).</p>
            <p><strong>Inland Container Depot (ICD):</strong> ICD Kanpur / ICD Dadri for customs stuffing and bonded rail transit.</p>
            <p><strong>Air Cargo Dispatch:</strong> Chaudhary Charan Singh International Airport (Lucknow) for urgent sample batches and pre-production proofs.</p>
          </div>

          <div className="border border-stone-200 p-6 rounded-lg space-y-3">
            <h3 className="text-lg font-bold text-stone-900">Trade Terms &amp; Documentation</h3>
            <p><strong>Incoterms Supported:</strong> FOB (Free on Board), CIF (Cost, Insurance &amp; Freight), CFR, and EXW (Factory).</p>
            <p><strong>Export Documents Provided:</strong> Bill of Lading (B/L), Commercial Invoice, Detailed Packing List, Certificate of Origin, Certificate of Analysis (COA), and Lab Burst Test Reports.</p>
            <p><strong>Payment Terms:</strong> Irrevocable Letter of Credit (L/C at sight) or T/T wire transfer.</p>
          </div>
        </div>
      </section>

      {/* Priority Export Destinations */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-stone-50 border-t border-stone-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-4">
            Priority International Export Markets
          </h2>
          <p className="text-stone-600 mb-8 text-sm">
            Click on our regional trade hubs for market-specific compliance and shipping timelines:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <Link
              href="/export/uae"
              className="p-6 bg-white border border-stone-200 rounded-xl hover:border-amber-600 hover:shadow-md transition"
            >
              <h3 className="font-bold text-lg mb-2 text-stone-900">UAE &amp; Middle East</h3>
              <p className="text-xs text-stone-600 mb-3">Dubai single-use plastic ban compliant. Direct sea freight to Jebel Ali Port.</p>
              <span className="text-xs font-semibold text-amber-700">Explore UAE Hub &rarr;</span>
            </Link>

            <Link
              href="/export/uk"
              className="p-6 bg-white border border-stone-200 rounded-xl hover:border-amber-600 hover:shadow-md transition"
            >
              <h3 className="font-bold text-lg mb-2 text-stone-900">United Kingdom</h3>
              <p className="text-xs text-stone-600 mb-3">100% exempt from UK Plastic Packaging Tax. 18-22 days to Felixstowe.</p>
              <span className="text-xs font-semibold text-amber-700">Explore UK Hub &rarr;</span>
            </Link>

            <Link
              href="/export/spain"
              className="p-6 bg-white border border-stone-200 rounded-xl hover:border-amber-600 hover:shadow-md transition"
            >
              <h3 className="font-bold text-lg mb-2 text-stone-900">Spain (España)</h3>
              <p className="text-xs text-stone-600 mb-3">Exempt from Ley 7/2022 plastic tax (€0.45/kg). 16-20 days to Barcelona.</p>
              <span className="text-xs font-semibold text-amber-700">Explore Spain Hub &rarr;</span>
            </Link>

            <Link
              href="/export/italy"
              className="p-6 bg-white border border-stone-200 rounded-xl hover:border-amber-600 hover:shadow-md transition"
            >
              <h3 className="font-bold text-lg mb-2 text-stone-900">Italy (Italia)</h3>
              <p className="text-xs text-stone-600 mb-3">Mandatory CONAI environmental labeling compliance (PAP 22). Shipments to Genoa.</p>
              <span className="text-xs font-semibold text-amber-700">Explore Italy Hub &rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Export FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-8">
          Frequently Asked Questions by International Buyers
        </h2>

        <div className="space-y-6 text-sm text-stone-700">
          <div className="border border-stone-200 p-5 rounded-lg">
            <h3 className="font-bold text-stone-900 text-base mb-2">
              What is your Minimum Order Quantity (MOQ) for export shipments?
            </h3>
            <p>
              Our standard export MOQ is 50,000 units per SKU for unprinted bags, and 100,000 units for custom-printed bags. We consolidate mixed SKU orders into single 20ft or 40ft containers to help buyers diversify product lines.
            </p>
          </div>

          <div className="border border-stone-200 p-5 rounded-lg">
            <h3 className="font-bold text-stone-900 text-base mb-2">
              How do you ensure paper bags do not tear during heavy loading?
            </h3>
            <p>
              We source kraft paper with guaranteed Burst Factor (BF) between 20 and 35+ and conduct in-house drop testing and tensile stress evaluations prior to dispatch.
            </p>
          </div>

          <div className="border border-stone-200 p-5 rounded-lg">
            <h3 className="font-bold text-stone-900 text-base mb-2">
              Can you send physical product samples before we confirm a container order?
            </h3>
            <p>
              Yes. We provide free standard sample packs representing our bag geometries, handles, and paper GSM options. International courier charges can be charged to your DHL or FedEx account.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/request-quote"
            className="inline-block px-8 py-4 bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-lg rounded-xl shadow transition"
          >
            Request an Export Quotation Today
          </Link>
        </div>
      </section>
    </div>
  );
}
