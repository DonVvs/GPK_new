import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Proveedor de Bolsas de Papel Kraft España | Fábrica en India",
  description: "Fabricante y exportador de bolsas de papel kraft para España. 100% exentas del impuesto especial sobre envases de plástico (Ley 7/2022). Envíos marítimos a Barcelona y Valencia en 16-20 días.",
  keywords: [
    "proveedores de bolsas de papel kraft españa",
    "fabricante bolsas de papel al por mayor",
    "bolsas papel kraft barcelona",
    "bolsas de papel hosteleria españa",
    "importar bolsas de papel de la india",
    "bolsas papel fondo plano españa"
  ],
  alternates: {
    canonical: "/export/spain",
    languages: {
      "es-ES": "https://www.gargipaperkraft.com/export/spain",
      "es": "https://www.gargipaperkraft.com/export/spain",
      "en": "https://www.gargipaperkraft.com/paper-bag-exporter-india",
      "x-default": "https://www.gargipaperkraft.com/paper-bag-exporter-india",
    },
  },
  openGraph: {
    title: "Bolsas de Papel Kraft al por Mayor para España | Gargi PaperKraft",
    description: "Suministro directo de fábrica de bolsas de papel kraft de alta resistencia para comercios, supermercados y hostelería en España. Papel certificado FSC.",
    url: "https://www.gargipaperkraft.com/export/spain",
  },
};

export default function ExportSpainPage() {
  return (
    <div className="bg-white text-stone-900">
      {/* Hero */}
      <section className="bg-stone-950 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-stone-800">
        <div className="max-w-6xl mx-auto">
          <nav className="text-xs text-stone-400 mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:underline">Home</Link> / <Link href="/paper-bag-exporter-india" className="hover:underline">Export</Link> / <span>España</span>
          </nav>
          <span className="inline-block px-3 py-1 bg-amber-900/40 border border-amber-600/50 text-amber-300 text-xs font-semibold uppercase tracking-wider rounded mb-4">
            Exportación Directa a España &bull; Puertos de Barcelona y Valencia
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-6">
            Fabricante y Proveedor de Bolsas de Papel Kraft para España
          </h1>
          <p className="text-lg sm:text-xl text-stone-300 max-w-3xl mb-8 leading-relaxed">
            Suministramos contenedores completos de bolsas de papel kraft resistentes y ecológicas (fabricadas con papel procedente de molinos certificados FSC) para mayoristas de envases, cadenas de supermercados, hostelería (HORECA) y comercios minoristas en toda España.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/request-quote"
              className="px-6 py-3 bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold rounded-lg transition"
            >
              Muestras Gratuitas / Presupuesto (CIF España)
            </Link>
            <Link
              href="/Brochure_GPK.pdf"
              download
              className="px-6 py-3 bg-stone-800 hover:bg-stone-700 text-stone-100 font-semibold rounded-lg border border-stone-700 transition"
            >
              Descargar Catálogo Técnico (PDF)
            </Link>
          </div>
        </div>
      </section>

      {/* Regulación Española: Ley 7/2022 */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="border border-stone-200 rounded-2xl p-8 bg-stone-50 mb-12">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">
            Exención del Impuesto Especial al Plástico (Ley 7/2022)
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-4">
            La Ley 7/2022 de residuos y suelos contaminados para una economía circular grava en España con <strong>0,45 &euro; por kilogramo</strong> el plástico no reciclado utilizado en envases no reutilizables. Nuestras bolsas fabricadas 100% con papel kraft están <strong>completamente exentas de este impuesto</strong>, permitiendo a las empresas españolas ahorrar costes fiscales y alinearse con la normativa comunitaria.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            Además, cumplen con los requisitos de Responsabilidad Ampliada del Productor (RAP) y están diseñadas para un reciclaje óptimo en el contenedor azul (código PAP 22).
          </p>
        </div>

        {/* Ventajas Logísticas */}
        <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-6">
          Logística Marítima y Envíos a España
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm mb-16">
          <div className="border border-stone-200 p-6 rounded-xl">
            <h3 className="text-lg font-bold text-stone-900 mb-2">16 a 20 Días de Tránsito Marítimo</h3>
            <p className="text-stone-600">
              Rutas marítimas directas desde Nhava Sheva (JNPT) y Mundra hacia los puertos de Barcelona y Valencia.
            </p>
          </div>
          <div className="border border-stone-200 p-6 rounded-xl">
            <h3 className="text-lg font-bold text-stone-900 mb-2">Paletización Estándar Europeo</h3>
            <p className="text-stone-600">
              Cajas de cartón corrugado de 5 capas sobre europalets (1200 x 800 mm) precintados contra la humedad marina.
            </p>
          </div>
          <div className="border border-stone-200 p-6 rounded-xl">
            <h3 className="text-lg font-bold text-stone-900 mb-2">Documentación para Aduanas</h3>
            <p className="text-stone-600">
              Conocimiento de embarque (B/L), factura comercial, lista de contenido (packing list) y certificado de origen para el despacho arancelario en la UE.
            </p>
          </div>
        </div>

        {/* Tipos de Bolsas para el Mercado Español */}
        <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-6">
          Gama de Bolsas para Distribuidores Españoles
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm mb-16">
          <div className="border border-stone-200 p-5 rounded-xl bg-white shadow-sm">
            <h3 className="font-bold text-base mb-2">Bolsas SOS Fondo Cuadrado</h3>
            <p className="text-stone-600 mb-3">Base rectangular autoportante para entrega de comida (delivery), panaderías y cadenas de supermercados.</p>
            <span className="text-xs font-semibold text-stone-900">Gramajes recomendados: 70 - 90 GSM</span>
          </div>

          <div className="border border-stone-200 p-5 rounded-xl bg-white shadow-sm">
            <h3 className="font-bold text-base mb-2">Bolsas con Asa Rizada / Plana</h3>
            <p className="text-stone-600 mb-3">Para comercio minorista, tiendas de moda y farmacias. Gran resistencia de carga con refuerzo interior en el asa.</p>
            <span className="text-xs font-semibold text-stone-900">Gramajes recomendados: 90 - 130 GSM</span>
          </div>

          <div className="border border-stone-200 p-5 rounded-xl bg-white shadow-sm">
            <h3 className="font-bold text-base mb-2">Bolsas de Fondo V (Sobres de Papel)</h3>
            <p className="text-stone-600 mb-3">Solución económica y compacta para farmacias, bollería, pan y frutos secos.</p>
            <span className="text-xs font-semibold text-stone-900">Gramajes recomendados: 50 - 70 GSM</span>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/request-quote"
            className="inline-block px-8 py-4 bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold rounded-xl shadow transition"
          >
            Solicitar Oferta por Contenedor (FOB / CIF)
          </Link>
        </div>
      </section>
    </div>
  );
}
