import type { Metadata, Viewport } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["500", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["400", "500", "700"],
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
        {children}
      </body>
    </html>
  );
}
