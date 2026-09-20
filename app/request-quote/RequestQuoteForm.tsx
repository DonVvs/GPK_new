"use client";

import { useState } from "react";
import { Package, FileText, CheckCircle2, Truck, ShieldCheck } from "lucide-react";

export default function RequestQuoteForm() {
  const [activeTab, setActiveTab] = useState<"sample_kit" | "full_rfq">("sample_kit");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [submittedType, setSubmittedType] = useState<"sample_kit" | "full_rfq">("sample_kit");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "c81c34ad-86e6-492c-91d8-6f0e411ecc5a");
    
    const isSampleKit = activeTab === "sample_kit";
    formData.append(
      "subject",
      isSampleKit
        ? "New Free Export Sample Kit Request - Gargi PaperKraft"
        : "New International Container RFQ (FOB/CIF) - Gargi PaperKraft"
    );
    formData.append("form_type", isSampleKit ? "Export Sample Kit" : "Container RFQ");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (data.success) {
        setSubmittedType(activeTab);
        setStatus("success");
        form.reset();

        // Push GA4 event if dataLayer is active
        if (typeof window !== "undefined" && (window as unknown as { dataLayer?: unknown[] }).dataLayer) {
          (window as unknown as { dataLayer: unknown[] }).dataLayer.push({
            event: isSampleKit ? "export_sample_kit_request" : "b2b_export_quote_submission",
            country: formData.get("destination_country"),
            form_type: isSampleKit ? "sample_kit" : "container_rfq",
          });
        }
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Failed to submit request. Please reach us directly at gargi.paperkraft@gmail.com");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again or reach our export sales desk via WhatsApp (+91 9918280347).");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-emerald-50 border border-emerald-300 rounded-2xl p-8 text-center text-emerald-950 shadow-sm">
        <div className="w-12 h-12 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center mx-auto mb-4 text-emerald-700">
          <CheckCircle2 className="w-7 h-7" />
        </div>
        <h3 className="text-2xl font-bold mb-2">
          {submittedType === "sample_kit"
            ? "Sample Kit Request Received!"
            : "Export Quotation Request Received!"}
        </h3>
        <p className="text-sm max-w-lg mx-auto mb-4 text-emerald-900 leading-relaxed">
          {submittedType === "sample_kit"
            ? "Thank you for requesting physical packaging samples. Our international logistics desk will verify your courier address and coordinate DHL / FedEx dispatch within 24–48 business hours."
            : "Thank you for providing your technical specifications. Our export desk will review your sizing, GSM, and freight requirements to prepare a formal Proforma / CIF quotation within 24 business hours."}
        </p>
        <p className="text-xs text-emerald-800 mb-6">
          Need immediate consultation or urgent container timeline? Message our export team directly on WhatsApp at{" "}
          <strong>+91 9918280347</strong>.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="px-6 py-2.5 bg-emerald-700 hover:bg-emerald-600 text-white font-semibold text-xs rounded-lg transition"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <div>
      {/* Tab Switcher */}
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 p-1.5 bg-stone-100 rounded-xl border border-stone-200 mb-8">
        <button
          type="button"
          onClick={() => setActiveTab("sample_kit")}
          className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-xs sm:text-sm font-bold transition-all ${
            activeTab === "sample_kit"
              ? "bg-white text-stone-900 shadow-sm border border-stone-200"
              : "text-stone-600 hover:text-stone-900"
          }`}
        >
          <Package className="w-4 h-4 text-amber-600" />
          <span>1. Request Free Export Sample Kit</span>
          <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] uppercase font-bold bg-amber-100 text-amber-900 rounded">
            Recommended
          </span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("full_rfq")}
          className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-xs sm:text-sm font-bold transition-all ${
            activeTab === "full_rfq"
              ? "bg-white text-stone-900 shadow-sm border border-stone-200"
              : "text-stone-600 hover:text-stone-900"
          }`}
        >
          <FileText className="w-4 h-4 text-stone-700" />
          <span>2. Full Container RFQ (FOB / CIF)</span>
        </button>
      </div>

      {activeTab === "sample_kit" ? (
        /* ══════════ TAB 1: SAMPLE KIT FORM ══════════ */
        <form onSubmit={handleSubmit} className="space-y-6">
          <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />
          <input type="hidden" name="form_mode" value="Export Sample Kit Request" />

          {/* Value Prop Banner */}
          <div className="bg-amber-50/80 border border-amber-200 rounded-xl p-4 flex items-start gap-3 text-xs text-amber-950">
            <Truck className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-bold block text-sm mb-0.5 text-stone-900">
                Test Our Paper Quality &amp; Burst Strength Before Placing Container Orders
              </span>
              Our export sample pack includes physical samples of SOS square bottom bags, twisted handle shopping bags, and pinch bottom bags across 60–140 GSM with FSC-certified kraft paper. Dispatched worldwide via DHL / FedEx.
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-3 border-b border-stone-200 pb-2">
              1. Contact &amp; Company Details
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="sk_name" className="block text-xs font-semibold text-stone-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="full_name"
                  id="sk_name"
                  required
                  placeholder="e.g. John Doe / Tariq Al-Mansoor"
                  className="w-full text-sm px-3 py-2.5 border border-stone-300 rounded-lg focus:ring-1 focus:ring-amber-500 outline-none"
                />
              </div>

              <div>
                <label htmlFor="sk_company" className="block text-xs font-semibold text-stone-700 mb-1">
                  Company / Organization *
                </label>
                <input
                  type="text"
                  name="company_name"
                  id="sk_company"
                  required
                  placeholder="e.g. Gulf Retail LLC / London Foods Ltd"
                  className="w-full text-sm px-3 py-2.5 border border-stone-300 rounded-lg focus:ring-1 focus:ring-amber-500 outline-none"
                />
              </div>

              <div>
                <label htmlFor="sk_email" className="block text-xs font-semibold text-stone-700 mb-1">
                  Business Email *
                </label>
                <input
                  type="email"
                  name="business_email"
                  id="sk_email"
                  required
                  placeholder="e.g. procurement@company.com"
                  className="w-full text-sm px-3 py-2.5 border border-stone-300 rounded-lg focus:ring-1 focus:ring-amber-500 outline-none"
                />
              </div>

              <div>
                <label htmlFor="sk_phone" className="block text-xs font-semibold text-stone-700 mb-1">
                  Phone / WhatsApp (with Country Code) *
                </label>
                <input
                  type="tel"
                  name="phone_whatsapp"
                  id="sk_phone"
                  required
                  placeholder="e.g. +971 50 123 4567 / +44 7700 900077"
                  className="w-full text-sm px-3 py-2.5 border border-stone-300 rounded-lg focus:ring-1 focus:ring-amber-500 outline-none"
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-3 border-b border-stone-200 pb-2">
              2. Courier Delivery Address
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="sk_country" className="block text-xs font-semibold text-stone-700 mb-1">
                  Destination Country *
                </label>
                <select
                  name="destination_country"
                  id="sk_country"
                  required
                  className="w-full text-sm px-3 py-2.5 border border-stone-300 rounded-lg focus:ring-1 focus:ring-amber-500 outline-none bg-white"
                >
                  <option value="">Select Destination Country</option>
                  <option value="United Arab Emirates">United Arab Emirates (UAE)</option>
                  <option value="United Kingdom">United Kingdom (UK)</option>
                  <option value="Spain">Spain (España)</option>
                  <option value="Italy">Italy (Italia)</option>
                  <option value="Saudi Arabia">Saudi Arabia (KSA)</option>
                  <option value="Germany">Germany</option>
                  <option value="France">France</option>
                  <option value="Netherlands">Netherlands</option>
                  <option value="Sri Lanka">Sri Lanka</option>
                  <option value="United States">United States (USA)</option>
                  <option value="Canada">Canada</option>
                  <option value="Australia">Australia</option>
                  <option value="Other">Other International Destination</option>
                </select>
              </div>

              <div>
                <label htmlFor="sk_city_postal" className="block text-xs font-semibold text-stone-700 mb-1">
                  City &amp; Postal / Zip Code *
                </label>
                <input
                  type="text"
                  name="city_postal"
                  id="sk_city_postal"
                  required
                  placeholder="e.g. Dubai 00000 / London EC1A 1BB"
                  className="w-full text-sm px-3 py-2.5 border border-stone-300 rounded-lg focus:ring-1 focus:ring-amber-500 outline-none"
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="sk_address" className="block text-xs font-semibold text-stone-700 mb-1">
                  Full Street / Office Address *
                </label>
                <textarea
                  name="shipping_address"
                  id="sk_address"
                  required
                  rows={2}
                  placeholder="Building name, street, suite/unit, city, country (for courier consignment)"
                  className="w-full text-sm px-3 py-2 border border-stone-300 rounded-lg focus:ring-1 focus:ring-amber-500 outline-none"
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-3 border-b border-stone-200 pb-2">
              3. Sample Kit Preferences
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="sk_bag_interest" className="block text-xs font-semibold text-stone-700 mb-1">
                  Primary Bag Type of Interest *
                </label>
                <select
                  name="bag_type_interest"
                  id="sk_bag_interest"
                  required
                  className="w-full text-sm px-3 py-2.5 border border-stone-300 rounded-lg focus:ring-1 focus:ring-amber-500 outline-none bg-white"
                >
                  <option value="Mixed Assortment (All Bag Styles)">Mixed Assortment (All Bag Styles)</option>
                  <option value="SOS Square Bottom (Grocery/Delivery)">SOS Square Bottom (Grocery/Takeaway)</option>
                  <option value="Flat Bottom Shopping Bags (Handles)">Flat Bottom with Handles (Retail/Apparel)</option>
                  <option value="V-Bottom Pinch Bags (Bakery/Pharmacy)">V-Bottom Pinch Bags (Bakery/Pharmacy)</option>
                  <option value="Custom Printed Brand Samples">Custom Printed Samples</option>
                </select>
              </div>

              <div>
                <label htmlFor="sk_courier_pref" className="block text-xs font-semibold text-stone-700 mb-1">
                  Courier Account Preference
                </label>
                <select
                  name="courier_preference"
                  id="sk_courier_pref"
                  className="w-full text-sm px-3 py-2.5 border border-stone-300 rounded-lg focus:ring-1 focus:ring-amber-500 outline-none bg-white"
                >
                  <option value="Will provide DHL / FedEx account">Charge to my DHL or FedEx account</option>
                  <option value="Please quote courier cost">Please email me DHL courier rate for my address</option>
                  <option value="Have existing forwarder in India">My freight forwarder will collect in India</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="sk_notes" className="block text-xs font-semibold text-stone-700 mb-1">
                  Specific Requirements or Estimated Annual Volume
                </label>
                <input
                  type="text"
                  name="spec_notes"
                  id="sk_notes"
                  placeholder="e.g. Need bags for supermarket chain, approx. 2 x 40ft containers per quarter"
                  className="w-full text-sm px-3 py-2.5 border border-stone-300 rounded-lg focus:ring-1 focus:ring-amber-500 outline-none"
                />
              </div>
            </div>
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
              className="w-full sm:w-auto px-8 py-3.5 bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold rounded-lg transition shadow disabled:opacity-50 flex items-center justify-center gap-2"
            >
              <Package className="w-4 h-4" />
              <span>{status === "submitting" ? "Processing Sample Request..." : "Request Free Export Sample Kit"}</span>
            </button>
            <p className="text-[11px] text-stone-500 mt-2 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
              Sample kit product pieces are provided free of charge. Dispatched within 48 hours.
            </p>
          </div>
        </form>
      ) : (
        /* ══════════ TAB 2: FULL CONTAINER RFQ ══════════ */
        <form onSubmit={handleSubmit} className="space-y-6">
          <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />
          <input type="hidden" name="form_mode" value="Full Container RFQ" />

          {/* Section 1: Contact Identity */}
          <div>
            <h3 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-3 border-b border-stone-200 pb-2">
              1. Company &amp; Contact Details
            </h3>
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
                  <option value="Germany">Germany</option>
                  <option value="France">France</option>
                  <option value="Netherlands">Netherlands</option>
                  <option value="Sri Lanka">Sri Lanka</option>
                  <option value="United States">United States (USA)</option>
                  <option value="Canada">Canada</option>
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
            <h3 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-3 border-b border-stone-200 pb-2">
              2. Paper Bag Specifications
            </h3>
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
                  <option value="Unsure - Advise Best Style">Unsure - Advise Best Style for My Application</option>
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
                  placeholder="e.g. 260 x 140 x 320 mm or Standard Large"
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
                  <option value="Recommend Best GSM">Recommend Best GSM for My Application</option>
                  <option value="50-60 GSM">50 - 60 GSM (Lightweight bakery / pharmacy)</option>
                  <option value="70-80 GSM">70 - 80 GSM (Standard takeaway / grocery)</option>
                  <option value="90-110 GSM">90 - 110 GSM (Heavy retail / delivery)</option>
                  <option value="120-140 GSM">120 - 140 GSM (Heavy-duty premium shopping)</option>
                </select>
              </div>

              <div>
                <label htmlFor="paper_type" className="block text-xs font-semibold text-stone-700 mb-1">
                  Paper Finish (FSC Certified)
                </label>
                <select
                  name="paper_type"
                  id="paper_type"
                  className="w-full text-sm px-3 py-2 border border-stone-300 rounded-lg focus:ring-1 focus:ring-amber-500 outline-none bg-white"
                >
                  <option value="Natural Brown Kraft">Natural Brown Kraft (FSC Pulp)</option>
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
            <h3 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-3 border-b border-stone-200 pb-2">
              3. Order Quantity &amp; Shipping Terms
            </h3>
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
            <label htmlFor="spec_notes_full" className="block text-xs font-semibold text-stone-700 mb-1">
              Additional Specifications, Target Price, or Delivery Timeline
            </label>
            <textarea
              name="spec_notes"
              id="spec_notes_full"
              rows={3}
              placeholder="Please mention any specific load requirements, gusset details, food contact requirements, or target delivery dates."
              className="w-full text-sm px-3 py-2 border border-stone-300 rounded-lg focus:ring-1 focus:ring-amber-500 outline-none"
            />
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
              className="w-full sm:w-auto px-8 py-3.5 bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold rounded-lg transition shadow disabled:opacity-50 flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>{status === "submitting" ? "Submitting Export RFQ..." : "Submit Export Quote Request"}</span>
            </button>
            <p className="text-[11px] text-stone-500 mt-2">
              Specifications are used solely by our commercial export team to calculate freight and unit pricing.
            </p>
          </div>
        </form>
      )}
    </div>
  );
}
