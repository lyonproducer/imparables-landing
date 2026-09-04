import type { Metadata } from "next";
import { EventosContent } from "@/components/sections/imparables/EventosContent";

export const metadata: Metadata = {
  title: "Formatos & Trayectoria — Imparables",
  description:
    "Descubre los formatos oficiales de Imparables y su línea de tiempo: Conferencias, Business Summit, Liderazgo 360, Voces Imparables y Nexus.",
};

export default function EventosPage() {
  return <EventosContent />;
}
