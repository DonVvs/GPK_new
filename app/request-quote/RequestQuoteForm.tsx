"use client";

import { useState } from "react";

export default function RequestQuoteForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "c81c34ad-86e6-492c-91d8-6f0e411ecc5a");
    formData.append("subject", "New International B2B Export Quote Request");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (data.success) {
        setStatus("success");
        form.reset();

        // Push GA4 event if dataLayer is active
        if (typeof window !== "undefined" && (window as unknown as { dataLayer?: unknown[] }).dataLayer) {
          (window as unknown as { dataLayer: unknown[] }).dataLayer.push({
            event: "b2b_export_quote_submission",
            country: formData.get("destination_country"),
            bag_type: formData.get("bag_type"),
            volume: formData.get("order_volume"),
            incoterm: formData.get("incoterm"),
          });
        }
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Failed to submit request. Please contact gargi.paperkraft@gmail.com");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again or reach our export desk via WhatsApp.");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-emerald-50 border border-emerald-300 rounded-xl p-8 text-center text-emerald-950">
        <h3 className="text-2xl font-bold mb-2">Quote Request Received Successfully</h3>
        <p className="text-sm mb-4">
          Thank you for providing your technical packaging specifications. Our international export team will prepare a formal Proforma / CIF quotation and contact you within 24 business hours.
        </p>
        <p className="text-xs text-emerald-800">
          Urgent requirements? You can also message us directly on WhatsApp at <strong>+91 9918280347</strong>.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 px-5 py-2 bg-emerald-700 hover:bg-emerald-600 text-white font-semibold text-xs rounded-lg transition"
        >
          Submit Another Requirement
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Honeypot */}
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

      {/* Section 1: Contact Identity */}
      <div>
        <h2 className="text-sm font-bold text-stone-900 uppercase tracking-wider mb-3 border-b border-stone-200 pb-2">
          1. Company &amp; Contact Details
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="full_name" className="block text-xs font-semibold text-stone-700 mb-1">
              Contact Name *
            </label>
            <input
              type="text"
              name="full_name"
              id="full_name"
              required
              placeholder="e.g. John Doe / Tariq Al-Mansoor"
              className="w-full text-sm px-3 py-2 border border-stone-300 rounded-lg focus:ring-1 focus:ring-amber-500 outline-none"
            />
          </div>

          <div>
            <label htmlFor="company_name" className="block text-xs font-semibold text-stone-700 mb-1">
              Company Name *
            </label>
            <input
              type="text"
              name="company_name"
              id="company_name"
              required
              placeholder="e.g. Gulf Retail LLC / UK Foods Ltd"
              className="w-full text-sm px-3 py-2 border border-stone-300 rounded-lg focus:ring-1 focus:ring-amber-500 outline-none"
            />
          </div>

          <div>
            <label htmlFor="business_email" className="block text-xs font-semibold text-stone-700 mb-1">
              Business Email *
            </label>
            <input
              type="email"
              name="business_email"
              id="business_email"
              required
              placeholder="e.g. procurement@company.com"
              className="w-full text-sm px-3 py-2 border border-stone-300 rounded-lg focus:ring-1 focus:ring-amber-500 outline-none"
            />
          </div>

          <div>
            <label htmlFor="phone_whatsapp" className="block text-xs font-semibold text-stone-700 mb-1">
              Phone / WhatsApp (with Country Code) *
            </label>
            <input
              type="tel"
              name="phone_whatsapp"
              id="phone_whatsapp"
              required
              placeholder="e.g. +971 50 123 4567 / +44 7700 900077"
              className="w-full text-sm px-3 py-2 border border-stone-300 rounded-lg focus:ring-1 focus:ring-amber-500 outline-none"
            />
          </div>

          <div>
            <label htmlFor="destination_country" className="block text-xs font-semibold text-stone-700 mb-1">
              Destination Country *
            </label>
            <select
              name="destination_country"
              id="destination_country"
              required
              className="w-full text-sm px-3 py-2 border border-stone-300 rounded-lg focus:ring-1 focus:ring-amber-500 outline-none bg-white"
            >
              <option value="">Select Destination Country</option>
              <option value="United Arab Emirates">United Arab Emirates (UAE)</option>
              <option value="United Kingdom">United Kingdom (UK)</option>
              <option value="Spain">Spain (España)</option>
              <option value="Italy">Italy (Italia)</option>
              <option value="Saudi Arabia">Saudi Arabia (KSA)</option>
              <option value="Sri Lanka">Sri Lanka</option>
              <option value="United States">United States (USA)</option>
              <option value="Canada">Canada</option>
              <option value="Germany">Germany</option>
              <option value="France">France</option>
              <option value="Netherlands">Netherlands</option>
              <option value="Australia">Australia</option>
              <option value="Other">Other Country</option>
            </select>
          </div>

          <div>
            <label htmlFor="port_of_discharge" className="block text-xs font-semibold text-stone-700 mb-1">
              Target Port of Discharge / City
            </label>
            <input
              type="text"
              name="port_of_discharge"
              id="port_of_discharge"
              placeholder="e.g. Jebel Ali, Felixstowe, Barcelona, Genoa"
              className="w-full text-sm px-3 py-2 border border-stone-300 rounded-lg focus:ring-1 focus:ring-amber-500 outline-none"
            />
          </div>
        </div>
      </div>

      {/* Section 2: Technical Specifications */}
      <div>
        <h2 className="text-sm font-bold text-stone-900 uppercase tracking-wider mb-3 border-b border-stone-200 pb-2">
          2. Paper Bag Specifications
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label htmlFor="bag_type" className="block text-xs font-semibold text-stone-700 mb-1">
              Bag Construction Style *
            </label>
            <select
              name="bag_type"
              id="bag_type"
              required
              className="w-full text-sm px-3 py-2 border border-stone-300 rounded-lg focus:ring-1 focus:ring-amber-500 outline-none bg-white"
            >
              <option value="">Select Bag Style</option>
              <option value="SOS Square Bottom">SOS Square Bottom (Grocery/Delivery)</option>
              <option value="Flat Bottom with Handles">Flat Bottom (Shopping/Retail with Handles)</option>
              <option value="V-Bottom Pinch Bag">V-Bottom Pinch Bag (Pharmacy/Bakery)</option>
              <option value="Custom Branded Shopping Bag">Custom Branded Bag</option>
            </select>
          </div>

          <div>
            <label htmlFor="dimensions" className="block text-xs font-semibold text-stone-700 mb-1">
              Dimensions (Width x Gusset x Height) *
            </label>
            <input
              type="text"
              name="dimensions"
              id="dimensions"
              required
              placeholder="e.g. 260 x 140 x 320 mm"
              className="w-full text-sm px-3 py-2 border border-stone-300 rounded-lg focus:ring-1 focus:ring-amber-500 outline-none"
            />
          </div>

          <div>
            <label htmlFor="gsm_weight" className="block text-xs font-semibold text-stone-700 mb-1">
              Paper Weight (GSM) *
            </label>
            <select
              name="gsm_weight"
              id="gsm_weight"
              required
              className="w-full text-sm px-3 py-2 border border-stone-300 rounded-lg focus:ring-1 focus:ring-amber-500 outline-none bg-white"
            >
              <option value="">Select Paper GSM</option>
              <option value="50-60 GSM">50 - 60 GSM (Lightweight bakery / pharmacy)</option>
              <option value="70-80 GSM">70 - 80 GSM (Standard takeaway / grocery)</option>
              <option value="90-110 GSM">90 - 110 GSM (Heavy retail / delivery)</option>
              <option value="120-140 GSM">120 - 140 GSM (Heavy-duty premium shopping)</option>
              <option value="Recommend Best GSM">Recommend Best GSM for My Application</option>
            </select>
          </div>

          <div>
            <label htmlFor="paper_type" className="block text-xs font-semibold text-stone-700 mb-1">
              Paper Finish
            </label>
            <select
              name="paper_type"
              id="paper_type"
              className="w-full text-sm px-3 py-2 border border-stone-300 rounded-lg focus:ring-1 focus:ring-amber-500 outline-none bg-white"
            >
              <option value="Natural Brown Kraft">Natural Brown Kraft (Virgin / Recycled)</option>
              <option value="Bleached White Kraft">Bleached White Kraft</option>
              <option value="Greaseproof (OGR)">Greaseproof (OGR) Food Grade</option>
            </select>
          </div>

          <div>
            <label htmlFor="handle_type" className="block text-xs font-semibold text-stone-700 mb-1">
              Handle Style
            </label>
            <select
              name="handle_type"
              id="handle_type"
              className="w-full text-sm px-3 py-2 border border-stone-300 rounded-lg focus:ring-1 focus:ring-amber-500 outline-none bg-white"
            >
              <option value="No Handle (SOS / Pouch)">No Handle (SOS / Pinch Pouch)</option>
              <option value="Twisted Paper Rope Handle">Twisted Paper Rope Handle</option>
              <option value="Flat Tape Internal Handle">Flat Tape Internal Handle</option>
              <option value="Die-Cut Handle">Die-Cut Handle</option>
            </select>
          </div>

          <div>
            <label htmlFor="printing_requirements" className="block text-xs font-semibold text-stone-700 mb-1">
              Printing Requirements
            </label>
            <select
              name="printing_requirements"
              id="printing_requirements"
              className="w-full text-sm px-3 py-2 border border-stone-300 rounded-lg focus:ring-1 focus:ring-amber-500 outline-none bg-white"
            >
              <option value="Plain (Unprinted)">Plain (Unprinted)</option>
              <option value="1 Color Flexo">1 Color Flexographic Print</option>
              <option value="2 Colors Flexo">2 Colors Flexographic Print</option>
              <option value="3-4 Colors Flexo">3 to 4 Colors Flexographic Print</option>
            </select>
          </div>
        </div>
      </div>

      {/* Section 3: Commercial Terms */}
      <div>
        <h2 className="text-sm font-bold text-stone-900 uppercase tracking-wider mb-3 border-b border-stone-200 pb-2">
          3. Order Quantity &amp; Shipping Terms
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="order_volume" className="block text-xs font-semibold text-stone-700 mb-1">
              Target Order Volume *
            </label>
            <select
              name="order_volume"
              id="order_volume"
              required
              className="w-full text-sm px-3 py-2 border border-stone-300 rounded-lg focus:ring-1 focus:ring-amber-500 outline-none bg-white"
            >
              <option value="">Select Volume</option>
              <option value="50,000 - 100,000 units">50,000 - 100,000 units (Standard MOQ)</option>
              <option value="100,000 - 250,000 units">100,000 - 250,000 units</option>
              <option value="1 x 20ft Container (FCL)">1 x 20ft Container (Approx. 150k - 400k pcs)</option>
              <option value="1 x 40ft HC Container (FCL)">1 x 40ft HC Container (Approx. 350k - 900k pcs)</option>
              <option value="Multi-Container Contract">Recurring Multi-Container Annual Contract</option>
            </select>
          </div>

          <div>
            <label htmlFor="incoterm" className="block text-xs font-semibold text-stone-700 mb-1">
              Incoterm Preference *
            </label>
            <select
              name="incoterm"
              id="incoterm"
              required
              className="w-full text-sm px-3 py-2 border border-stone-300 rounded-lg focus:ring-1 focus:ring-amber-500 outline-none bg-white"
            >
              <option value="FOB Mundra / Nhava Sheva">FOB (Free on Board - Mundra / Nhava Sheva)</option>
              <option value="CIF Destination Port">CIF (Cost, Insurance &amp; Freight to Destination Port)</option>
              <option value="CFR Destination Port">CFR (Cost &amp; Freight)</option>
              <option value="EXW Factory Lucknow">EXW (Ex-Works Factory - Lucknow, India)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Section 4: Notes */}
      <div>
        <label htmlFor="spec_notes" className="block text-xs font-semibold text-stone-700 mb-1">
          Additional Specifications, Target Price, or Delivery Timeline
        </label>
        <textarea
          name="spec_notes"
          id="spec_notes"
          rows={3}
          placeholder="Please mention any specific load requirements, gusset details, food contact certifications required, or target delivery dates."
          className="w-full text-sm px-3 py-2 border border-stone-300 rounded-lg focus:ring-1 focus:ring-amber-500 outline-none"
        ></textarea>
      </div>

      {status === "error" && (
        <div className="p-3 bg-rose-50 border border-rose-300 rounded-lg text-rose-800 text-xs">
          {errorMessage}
        </div>
      )}

      <div>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full sm:w-auto px-8 py-3.5 bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold rounded-lg transition shadow disabled:opacity-50"
        >
          {status === "submitting" ? "Submitting Export RFQ..." : "Submit Export Quote Request"}
        </button>
        <p className="text-[11px] text-stone-500 mt-2">
          We protect your privacy. Specifications are used solely by our commercial export team to calculate freight and unit pricing.
        </p>
      </div>
    </form>
  );
}
