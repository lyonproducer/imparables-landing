import type { Metadata } from "next";
import { Hero } from "@/components/sections/nexus/Hero";
import { AboutEvent } from "@/components/sections/nexus/AboutEvent";
import { Topics } from "@/components/sections/nexus/Topics";
import { Audience } from "@/components/sections/nexus/Audience";
import { Speakers } from "@/components/sections/nexus/Speakers";
import { Agenda } from "@/components/sections/nexus/Agenda";
import { AboutImparables } from "@/components/sections/nexus/AboutImparables";
import { Partners } from "@/components/sections/nexus/Partners";
import { RegisterCTA } from "@/components/sections/nexus/RegisterCTA";

export const metadata: Metadata = {
  title: "Imparables Nexus — El futuro de las empresas ya está pasando",
  description:
    "Un encuentro de Imparables dedicado a explorar cómo la inteligencia artificial y la tecnología están transformando el mundo empresarial. Noviembre 2026.",
  openGraph: {
    title: "Imparables Nexus — El futuro de las empresas ya está pasando",
    description:
      "Inteligencia Artificial, automatización e innovación empresarial. Noviembre 2026.",
    images: ["/og/imparables-nexus-og.jpg"],
  },
};

export default function NexusPage() {
  return (
    <>
      <Hero />
      <AboutEvent />
      <Topics />
      <Audience />
      <Speakers />
      <Agenda />
      <AboutImparables />
      <Partners />
      <RegisterCTA />
    </>
  );
}
