import type { Metadata } from "next";
import RequestQuoteForm from "./RequestQuoteForm";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Request Export Quote | Bulk Paper Bags Manufacturer & Exporter",
  description: "Request wholesale pricing for bulk kraft paper bags. Custom dimensions, GSM, printing, container loads (FCL / LCL), and global shipping terms (FOB / CIF). Rapid 24-hour response.",
  alternates: {
    canonical: "/request-quote",
  },
  openGraph: {
    title: "Request Export Quote | Gargi PaperKraft B2B Pricing",
    description: "Submit your packaging requirements for competitive factory-direct paper bag pricing for UAE, UK, Spain, Italy, and international markets.",
    url: "https://www.gargipaperkraft.com/request-quote",
  },
};

export default function RequestQuotePage() {
  return (
    <div className="bg-stone-50 min-h-screen pt-28 pb-16 sm:pt-32 sm:pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb & Header */}
        <nav className="text-xs text-stone-500 mb-4" aria-label="Breadcrumb">
          <Link href="/" className="hover:underline">Home</Link> / <span>Request Export Quote</span>
        </nav>

        <div className="bg-white border border-stone-200 rounded-2xl p-5 sm:p-10 shadow-sm mb-8">
          <span className="inline-block px-3 py-1 bg-amber-100 text-amber-900 border border-amber-300 text-xs font-semibold rounded uppercase tracking-wider mb-3">

            Factory Direct Sourcing &bull; International Export Desk
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
            Request an Export Quotation (FOB / CIF)
          </h1>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-6">
            Please fill out your packaging specifications below. Our export sales team will review your sizing, GSM, printing, and container freight requirements and provide a formal Proforma / Quotation within 24 business hours.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-stone-50 rounded-xl border border-stone-200 text-xs text-stone-700 mb-8">
            <div>
              <span className="font-bold block text-stone-900">Standard MOQ:</span>
              50,000 pcs (Plain) / 100,000 pcs (Printed)
            </div>
            <div>
              <span className="font-bold block text-stone-900">Container Supply:</span>
              20ft FCL / 40ft High Cube
            </div>
            <div>
              <span className="font-bold block text-stone-900">Incoterms:</span>
              FOB, CIF, CFR, EXW
            </div>
            <div>
              <span className="font-bold block text-stone-900">Ports of Loading:</span>
              Mundra Port / Nhava Sheva (JNPT)
            </div>
          </div>

          {/* Form Component */}
          <RequestQuoteForm />
        </div>

        {/* Additional Contact Methods */}
        <div className="bg-stone-900 text-white rounded-xl p-6 text-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h2 className="font-bold text-base mb-1">Need Urgent Consultation for a Tender or Large Order?</h2>
            <p className="text-stone-300 text-xs">Reach our Export Sales Desk directly via WhatsApp or Email.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://wa.me/919918280347?text=Hello%20Gargi%20PaperKraft%20Export%20Desk,%20I%20have%20an%20urgent%20container%20order%20inquiry."
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 font-semibold rounded text-xs transition"
            >
              WhatsApp Export Desk
            </a>
            <a
              href="mailto:gargi.paperkraft@gmail.com"
              className="px-4 py-2 bg-stone-700 hover:bg-stone-600 font-semibold rounded text-xs transition"
            >
              Email: gargi.paperkraft@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
