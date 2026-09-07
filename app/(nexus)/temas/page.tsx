import type { Metadata } from "next";
import { Topics } from "@/components/sections/nexus/Topics";
import { Audience } from "@/components/sections/nexus/Audience";
import { RegisterCTA } from "@/components/sections/nexus/RegisterCTA";

export const metadata: Metadata = {
  title: "Temas e Innovación — Imparables Nexus",
  description:
    "Descubre los ejes temáticos de Imparables Nexus: Inteligencia Artificial, automatización de procesos, nuevos modelos de negocio y transformación digital.",
};

export default function TemasPage() {
  return (
    <div className="pt-16 md:pt-24 bg-[#080808]">
      <Topics />
      <Audience />
      <RegisterCTA />
    </div>
  );
}
