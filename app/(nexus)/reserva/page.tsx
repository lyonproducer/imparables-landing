import type { Metadata } from "next";
import { Pricing } from "@/components/sections/nexus/Pricing";
import { Sponsorship } from "@/components/sections/nexus/Sponsorship";
import { RegisterCTA } from "@/components/sections/nexus/RegisterCTA";

export const metadata: Metadata = {
  title: "Entradas y Reserva — Imparables Nexus",
  description:
    "Asegura tu entrada al evento Imparables Nexus. Tarifas por fases en USDT y tasa oficial BCV para una experiencia empresarial de alto impacto.",
};

export default function ReservaPage() {
  return (
    <div className="pt-16 md:pt-24 bg-[#080808]">
      <Pricing />
      <Sponsorship />
      <RegisterCTA />
    </div>
  );
}
