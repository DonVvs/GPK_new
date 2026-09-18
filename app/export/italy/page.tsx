import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Produttore Sacchetti di Carta per l'Italia | Fornitore all'Ingrosso",
  description: "Fabbrica e fornitura all'ingrosso di sacchetti e shopper in carta kraft per distributori e dettaglianti in Italia. Piena conformità all'etichettatura ambientale CONAI (PAP 22). Spedizioni marittime dirette a Genova.",
  keywords: [
    "produttori sacchetti di carta italia",
    "ingrosso sacchetti di carta kraft",
    "shopper di carta personalizzate ingrosso",
    "fornitori sacchetti carta per alimenti",
    "fabbrica sacchetti carta importazione india",
    "sacchetti fondo quadro italia"
  ],
  alternates: {
    canonical: "/export/italy",
  },
  openGraph: {
    title: "Sacchetti di Carta Kraft all'Ingrosso per l'Italia | Gargi PaperKraft",
    description: "Produzione su scala industriale ed esportazione diretta di sacchetti in carta per negozi, panifici e ristorazione in Italia.",
    url: "https://www.gargipaperkraft.com/export/italy",
  },
};

export default function ExportItalyPage() {
  return (
    <div className="bg-white text-stone-900">
      {/* Hero */}
      <section className="bg-stone-950 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-stone-800">
        <div className="max-w-6xl mx-auto">
          <nav className="text-xs text-stone-400 mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:underline">Home</Link> / <Link href="/paper-bag-exporter-india" className="hover:underline">Export</Link> / <span>Italia</span>
          </nav>
          <span className="inline-block px-3 py-1 bg-amber-900/40 border border-amber-600/50 text-amber-300 text-xs font-semibold uppercase tracking-wider rounded mb-4">
            Esportazione Diretta in Italia &bull; Porto di Genova &amp; Gioia Tauro
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-6">
            Produttore e Fornitore di Sacchetti di Carta Kraft per l&apos;Italia
          </h1>
          <p className="text-lg sm:text-xl text-stone-300 max-w-3xl mb-8 leading-relaxed">
            Forniamo container completi di shopper e sacchetti in carta kraft ad alta resistenza per grossisti di imballaggi, catene di supermercati, panifici artigianali e boutique di moda in tutta Italia.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/request-quote"
              className="px-6 py-3 bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold rounded-lg transition"
            >
              Richiedi Preventivo Export (CIF Genova)
            </Link>
            <Link
              href="/Brochure_GPK.pdf"
              download
              className="px-6 py-3 bg-stone-800 hover:bg-stone-700 text-stone-100 font-semibold rounded-lg border border-stone-700 transition"
            >
              Scarica Catalogo Tecnico
            </Link>
          </div>
        </div>
      </section>

      {/* Conformità Ambientale CONAI */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="border border-stone-200 rounded-2xl p-8 bg-stone-50 mb-12">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">
            Conformità all&apos;Etichettatura Ambientale CONAI (D.Lgs. 116/2020)
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-4">
            In conformità alla normativa italiana sull&apos;etichettatura ambientale degli imballaggi, stampiamo direttamente su ogni sacchetto i codici alfanumerici previsti dalla Decisione 129/97/CE (<strong>PAP 22 per carta comune</strong> e <strong>PAP 21 per carta non ondulata</strong>), corredati dalle indicazioni chiare per la raccolta differenziata (&quot;Raccolta Carta&quot;).
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            I nostri sacchetti sono realizzati al 100% con fibre di carta biodegradabili e riciclabili, garantendo la totale assenza di materiali plastici aggiunti.
          </p>
        </div>

        {/* Logistica Marittima per l'Italia */}
        <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-6">
          Spedizioni e Logistica Marittima verso l&apos;Italia
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm mb-16">
          <div className="border border-stone-200 p-6 rounded-xl">
            <h3 className="text-lg font-bold text-stone-900 mb-2">16-20 Giorni di Transito Marittimo</h3>
            <p className="text-stone-600">
              Spedizioni regolari di container marittimi da Nhava Sheva (JNPT) con arrivo diretto al Porto di Genova e Gioia Tauro.
            </p>
          </div>
          <div className="border border-stone-200 p-6 rounded-xl">
            <h3 className="text-lg font-bold text-stone-900 mb-2">Pallettizzazione Standard Europallet</h3>
            <p className="text-stone-600">
              Imballo in scatole da 5 onde posizionate su europallet standard (800 x 1200 mm) con film estensibile protettivo anti-umidità.
            </p>
          </div>
          <div className="border border-stone-200 p-6 rounded-xl">
            <h3 className="text-lg font-bold text-stone-900 mb-2">Supporto Documentale Completo</h3>
            <p className="text-stone-600">
              Polizza di carico (B/L), fattura commerciale, packing list dettagliato e certificato di conformità per lo sdoganamento rapido nell&apos;UE.
            </p>
          </div>
        </div>

        {/* Gamma di Prodotti per l'Italia */}
        <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-6">
          Tipologie di Sacchetti Richieste sul Mercato Italiano
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm mb-16">
          <div className="border border-stone-200 p-5 rounded-xl bg-white shadow-sm">
            <h3 className="font-bold text-base mb-2">Shopper con Manico Ritorto</h3>
            <p className="text-stone-600 mb-3">Shopper eleganti in carta kraft avana o bianca con cordino ritorto, ideali per boutique, negozi di abbigliamento e pelletteria.</p>
            <span className="text-xs font-semibold text-stone-900">Grammature: 90 - 130 GSM</span>
          </div>

          <div className="border border-stone-200 p-5 rounded-xl bg-white shadow-sm">
            <h3 className="font-bold text-base mb-2">Sacchetti Fondo Quadro (SOS) Take-Away</h3>
            <p className="text-stone-600 mb-3">Base larga stabile con o senza manici, ideale per gastronomie, pizzerie, fast food e consegna a domicilio.</p>
            <span className="text-xs font-semibold text-stone-900">Grammature: 70 - 100 GSM</span>
          </div>

          <div className="border border-stone-200 p-5 rounded-xl bg-white shadow-sm">
            <h3 className="font-bold text-base mb-2">Sacchetti Fondo a V per Panetteria e Farmacia</h3>
            <p className="text-stone-600 mb-3">Sacchetti a bustina senza soffietti laterali per pane, croissant, pasticceria secca e parafarmacie.</p>
            <span className="text-xs font-semibold text-stone-900">Grammature: 50 - 70 GSM</span>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/request-quote"
            className="inline-block px-8 py-4 bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold rounded-xl shadow transition"
          >
            Richiedi Quotazione Container (FOB / CIF Genova)
          </Link>
        </div>
      </section>
    </div>
  );
}
