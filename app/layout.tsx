import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { ProgressiveBlur } from "@/components/ui/shared/progressive-blur";
import "./globals.css";

const spaceGrotesk = localFont({
  src: "../public/fonts/SpaceGrotesk-Variable.woff2",
  variable: "--font-space-grotesk",
  display: "swap",
  weight: "300 700",
});

const dmSans = localFont({
  src: [
    {
      path: "../public/fonts/DMSans-Variable.woff2",
      style: "normal",
      weight: "100 1000",
    },
    {
      path: "../public/fonts/DMSans-Italic-Variable.woff2",
      style: "italic",
      weight: "100 1000",
    },
  ],
  variable: "--font-dm-sans",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://imparable-landing.vercel.app";

export const viewport: Viewport = {
  themeColor: "#0066b0",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Imparables — Plataforma de Experiencias, Formación y Encuentros",
    template: "%s | Imparables",
  },
  description:
    "No importa dónde comienza tu historia. Importa lo que decides hacer con ella. Plataforma que conecta personas, ideas y oportunidades para impulsar el crecimiento personal y empresarial. Fundada por Andersong Trocel.",
  applicationName: "Imparables",
  authors: [{ name: "Andersong Trocel" }, { name: "Imparables", url: siteUrl }],
  creator: "Andersong Trocel",
  publisher: "Imparables",
  keywords: [
    "Imparables",
    "Andersong Trocel",
    "Nexus",
    "Conferencias",
    "Liderazgo",
    "Storytelling",
    "Formación Empresarial",
    "Inteligencia Artificial",
    "Innovación",
    "Puerto Ordaz",
    "Venezuela",
    "Crecimiento Empresarial",
    "Summit Imparables",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "es_VE",
    url: siteUrl,
    siteName: "Imparables",
    title: "Imparables — Triunfos que inspiran, historias que transforman",
    description:
      "Una plataforma de experiencias, formación y encuentros que conecta personas, ideas y oportunidades para impulsar el crecimiento personal y empresarial.",
    images: [
      {
        url: "/og/imparables-nexus-og.jpg",
        width: 1200,
        height: 630,
        alt: "Imparables — Plataforma de Experiencias y Formación",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Imparables — Triunfos que inspiran, historias que transforman",
    description:
      "Plataforma de experiencias, formación y encuentros para impulsar el crecimiento personal y empresarial.",
    images: ["/og/imparables-nexus-og.jpg"],
    creator: "@imparables",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Imparables",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo/imparables-icon.png`,
        width: 951,
        height: 935,
      },
      description:
        "Plataforma de experiencias, formación y encuentros que conecta personas, ideas y oportunidades para impulsar el crecimiento personal y empresarial.",
      founder: {
        "@type": "Person",
        name: "Andersong Trocel",
        jobTitle: "Creador y Fundador de Imparables",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Puerto Ordaz",
        addressRegion: "Bolívar",
        addressCountry: "VE",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Imparables",
      description: "Plataforma oficial de Imparables y evento Nexus",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      inLanguage: "es-VE",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-VE" className={`${spaceGrotesk.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased selection:bg-accent selection:text-accent-foreground">
        <SmoothScrollProvider>
          {children}
          <ProgressiveBlur height="140px" position="bottom" className="fixed bottom-0 z-40 pointer-events-none" />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
