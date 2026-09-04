import type { Metadata } from "next";
import { ImparablesAboutHero } from "@/components/sections/imparables/ImparablesAboutHero";
import { ImparablesFounder } from "@/components/sections/imparables/ImparablesFounder";
import { ImparablesAbout } from "@/components/sections/imparables/ImparablesAbout";
import { ImparablesFormatsBridge } from "@/components/sections/imparables/ImparablesFormatsBridge";

export const metadata: Metadata = {
  title: "Nosotros — Historia y Filosofía de Imparables",
  description:
    "Conoce a Andersong Trocel y la visión detrás de Imparables: una plataforma de conferencias, formación y experiencias para el crecimiento empresarial.",
};

export default function NosotrosPage() {
  return (
    <div className="pt-28 md:pt-36">
      {/* Page Hero Header Banner */}
      <ImparablesAboutHero />

      {/* Dedicated Founder Component */}
      <ImparablesFounder />

      {/* Main About Component */}
      <ImparablesAbout />

      {/* Navigation Bridge to Formats & Contact */}
      <ImparablesFormatsBridge />
    </div>
  );
}
