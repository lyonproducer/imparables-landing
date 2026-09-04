import type { Metadata } from "next";
import { ImparablesHero } from "@/components/sections/imparables/ImparablesHero";
import { ImparablesPlatform } from "@/components/sections/imparables/ImparablesPlatform";
import { ImparablesTrackDivider } from "@/components/ui/imparables";
import { ImparablesFormats } from "@/components/sections/imparables/ImparablesFormats";
import { ImparablesImpact } from "@/components/sections/imparables/ImparablesImpact";
import { ImparablesPartners } from "@/components/sections/imparables/ImparablesPartners";
import { ImparablesCommunity } from "@/components/sections/imparables/ImparablesCommunity";
import { ImparablesInstagramFeed } from "@/components/sections/imparables/ImparablesInstagramFeed";

export const metadata: Metadata = {
  title: "Imparables — Plataforma de Experiencias, Formación y Encuentros",
  description:
    "No importa dónde comienza tu historia. Importa lo que decides hacer con ella. Conoce la plataforma oficial de Imparables, sus formatos y a su creador Andersong Trocel.",
  openGraph: {
    title: "Imparables — Triunfos que inspiran, historias que transforman",
    description:
      "Plataforma de experiencias, formación y encuentros para el crecimiento personal y empresarial.",
    images: ["/logo/imparables-summit-logo.png"],
  },
};

export default function Home() {
  return (
    <>
      <ImparablesHero />
      <ImparablesPlatform />
      <ImparablesTrackDivider />
      <ImparablesFormats />
      <ImparablesPartners />
      <ImparablesImpact />
      <ImparablesCommunity />
      <ImparablesInstagramFeed />
    </>
  );
}
