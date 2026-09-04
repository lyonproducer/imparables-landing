import type { Metadata } from "next";
import { RegisterCTA } from "@/components/sections/nexus/RegisterCTA";

export const metadata: Metadata = {
  title: "Reserva tu Lugar — Imparables Nexus",
  description:
    "Asegura tu entrada al evento Imparables Nexus. Cupos limitados para una experiencia presencial inmersiva sobre inteligencia artificial y negocios.",
};

export default function ReservaPage() {
  return (
    <div className="pt-20 md:pt-28">
      <RegisterCTA />
    </div>
  );
}
