import type { Metadata } from "next";
import { Speakers } from "@/components/sections/nexus/Speakers";
import { Agenda } from "@/components/sections/nexus/Agenda";
import { RegisterCTA } from "@/components/sections/nexus/RegisterCTA";

export const metadata: Metadata = {
  title: "Expertos y Ponentes — Imparables Nexus",
  description:
    "Conoce a los ponentes y panelistas de Imparables Nexus: líderes empresariales y especialistas en inteligencia artificial.",
};

export default function ExpertosPage() {
  return (
    <div className="pt-16 md:pt-24 bg-[#080808]">
      <Speakers />
      <Agenda />
      <RegisterCTA />
    </div>
  );
}
