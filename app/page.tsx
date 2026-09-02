import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { ImparablesHero } from "@/components/sections/imparables/ImparablesHero";
import { ImparablesPlatform } from "@/components/sections/imparables/ImparablesPlatform";
import { ImparablesAbout } from "@/components/sections/imparables/ImparablesAbout";
import { ImparablesTrackDivider } from "@/components/ui/imparables";
import { ImparablesEvents } from "@/components/sections/imparables/ImparablesEvents";
import { ImparablesPartners } from "@/components/sections/imparables/ImparablesPartners";
import { ImparablesCommunity } from "@/components/sections/imparables/ImparablesCommunity";
import { ImparablesInstagramFeed } from "@/components/sections/imparables/ImparablesInstagramFeed";
import { ImparablesFooter } from "@/components/sections/imparables/ImparablesFooter";

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
    <div className="flex min-h-screen flex-col bg-background text-foreground selection:bg-accent selection:text-accent-foreground">
      <Header />
      <main className="flex-1">
        <ImparablesHero />
        <ImparablesPlatform />
        <ImparablesTrackDivider />
        <ImparablesAbout />
        <ImparablesInstagramFeed />
        {/* <ImparablesEvents />
        <ImparablesPartners /> */}
        <ImparablesCommunity />
      </main>
      <ImparablesFooter />
    </div>
  );
}
