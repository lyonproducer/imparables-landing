import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
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

export const viewport: Viewport = {
  themeColor: "#030f1c",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Imparables Nexus — El futuro de las empresas ya está pasando",
  description:
    "Un encuentro de Imparables dedicado a explorar cómo la inteligencia artificial y la tecnología están transformando el mundo empresarial. Noviembre 2026.",
  authors: [{ name: "Imparables", url: "https://imparables.com" }],
  keywords: [
    "Imparables",
    "Nexus",
    "Inteligencia Artificial",
    "Tecnología",
    "Automatización",
    "Empresas",
    "Puerto Ordaz",
    "Venezuela",
    "Innovación",
  ],
  metadataBase: new URL("https://nexus.imparables.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Imparables Nexus — El futuro de las empresas ya está pasando",
    description:
      "Inteligencia Artificial, automatización e innovación empresarial. Noviembre 2026.",
    url: "https://nexus.imparables.com",
    siteName: "Imparables Nexus",
    images: [
      {
        url: "/og/imparables-nexus-og.jpg",
        width: 1200,
        height: 630,
        alt: "Imparables Nexus 2026",
      },
    ],
    locale: "es_VE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Imparables Nexus — El futuro de las empresas ya está pasando",
    description:
      "Explora cómo la IA y la tecnología están transformando el mundo empresarial. Noviembre 2026.",
    images: ["/og/imparables-nexus-og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-VE" className={`${spaceGrotesk.variable} ${dmSans.variable}`}>
      <body className="min-h-screen bg-background text-foreground antialiased selection:bg-accent selection:text-accent-foreground">
        <SmoothScrollProvider>
          {children}
          <ProgressiveBlur height="140px" position="bottom" className="fixed bottom-0 z-40 pointer-events-none" />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
