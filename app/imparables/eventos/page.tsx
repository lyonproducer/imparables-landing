import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { ImparablesFormats } from "@/components/sections/imparables/ImparablesFormats";
import { ImparablesFooter } from "@/components/sections/imparables/ImparablesFooter";

export const metadata: Metadata = {
  title: "Formatos & Experiencias — Imparables",
  description:
    "Descubre los diferentes formatos oficiales de Imparables: Conferencias, Business Summit, Liderazgo 360 y Voces Imparables.",
};

export default function EventosPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground selection:bg-accent selection:text-accent-foreground">
      <Header />
      <main className="flex-1 pt-20 md:pt-28">
        <ImparablesFormats />
      </main>
      <ImparablesFooter />
    </div>
  );
}
