import type { Metadata } from "next";
import { Speakers } from "@/components/sections/nexus/Speakers";
import { Agenda } from "@/components/sections/nexus/Agenda";

export const metadata: Metadata = {
  title: "Expertos y Ponentes — Imparables Nexus",
  description:
    "Conoce a los ponentes y panelistas de Imparables Nexus: líderes empresariales y especialistas en inteligencia artificial.",
};

export default function ExpertosPage() {
  return (
    <div className="pt-20 md:pt-28">
      <Speakers />
      <Agenda />
    </div>
  );
}
