import type { Metadata } from "next";
import { Topics } from "@/components/sections/nexus/Topics";
import { Audience } from "@/components/sections/nexus/Audience";

export const metadata: Metadata = {
  title: "Temas e Innovación — Imparables Nexus",
  description:
    "Descubre los ejes temáticos de Imparables Nexus: Inteligencia Artificial, automatización de procesos, nuevos modelos de negocio y transformación digital.",
};

export default function TemasPage() {
  return (
    <div className="pt-20 md:pt-28">
      <Topics />
      <Audience />
    </div>
  );
}
