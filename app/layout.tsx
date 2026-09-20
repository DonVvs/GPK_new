import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  preload: false,
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.gargipaperkraft.com/#organization",
      "name": "Gargi PaperKraft",
      "url": "https://www.gargipaperkraft.com",
      "logo": "https://www.gargipaperkraft.com/logo.png",
      "description": "Industrial manufacturer and global exporter of eco-friendly kraft paper bags, SOS bags, and custom printed packaging sourced from FSC-certified paper mills.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Plot No-20, Goyala Industrial Area, Chinhat, Dewa Road",
        "addressLocality": "Lucknow",
        "addressRegion": "Uttar Pradesh",
        "postalCode": "226019",
        "addressCountry": "IN"
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+91-9918280347",
          "email": "gargi.paperkraft@gmail.com",
          "contactType": "export sales",
          "areaServed": ["AE", "GB", "ES", "IT", "SA", "LK", "Worldwide"],
          "availableLanguage": ["English", "Hindi"]
        }
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.gargipaperkraft.com/#website",
      "url": "https://www.gargipaperkraft.com",
      "name": "Gargi PaperKraft",
      "publisher": {
        "@id": "https://www.gargipaperkraft.com/#organization"
      }
    }
  ]
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.gargipaperkraft.com"),
  alternates: {
    canonical: "./",
  },
  title: {
    default: "Paper Bag Manufacturer & Global Exporter | Gargi PaperKraft India",
    template: "%s | Gargi PaperKraft"
  },
  description: "Direct manufacturer & exporter of kraft paper bags in India. Supplying SOS square bottom, flat bottom, and food-grade takeaway bags to the UAE, UK, Spain, Italy, and global markets. Sourced from FSC-certified paper mills. Bulk container loads & custom printing.",
  keywords: [
    "Paper Bag Manufacturer India",
    "Paper Bag Exporter India",
    "Kraft Paper Bags Wholesale",
    "SOS Paper Bags Bulk",
    "Square Bottom Paper Bags Manufacturer",
    "Custom Printed Paper Bags Exporter",
    "Paper Bags Supplier UAE",
    "Paper Bags Wholesale UK"
  ],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" }
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ]
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.gargipaperkraft.com",
    title: "Paper Bag Manufacturer & Global Exporter | Gargi PaperKraft India",
    description: "Direct manufacturer and exporter of kraft paper bags in India. Bulk container supply for UAE, UK, Europe, and global retail/food chains. Sourced from FSC-certified mills.",
    siteName: "Gargi PaperKraft",
    images: [
      {
        url: "/gpk_paperbagexporterindia.png",
        width: 1200,
        height: 630,
        alt: "Gargi PaperKraft Paper Bag Manufacturer and Exporter India",
      }
    ]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <head>
        {/* Resource Preloading for LCP & Visual Stability */}
        <link
          rel="preload"
          as="image"
          href="/images/hero-poster.webp"
          type="image/webp"
          // @ts-expect-error fetchpriority attribute
          fetchpriority="high"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Google Analytics 4 (GA4) Tracking */}
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <WhatsAppButton />

        <Footer />
      </body>
    </html>
  );
}
