"use client";

import React, { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionHeading } from "@/components/ui/shared/SectionHeading";
import { LogoCloud } from "@/components/ui/logo-cloud";
import { eventConfig } from "@/lib/content/event.config";
import { ArrowUpRight, Handshake } from "@phosphor-icons/react";
import { fadeUpVariant } from "@/lib/motion/motion-variants";

export const Partners: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="aliados"
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-background border-t border-border overflow-hidden"
    >
      {/* Ambient decor — inverted from the obsidian sections for the #0066b0 canvas */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[460px] bg-[#7CC9FF]/30 blur-[150px] rounded-full" />
        <div className="absolute -bottom-24 -left-24 w-[640px] h-[400px] bg-[#002b5b]/50 blur-[150px] rounded-full" />
        <div className="absolute bottom-1/3 right-[-10%] w-[520px] h-[320px] bg-accent/12 blur-[150px] rounded-full" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff22_1px,transparent_1px)] [background-size:28px_28px] opacity-70" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <SectionHeading
          kicker="ALIANZAS ESTRATÉGICAS"
          title="Creemos en lo que podemos construir juntos"
          subtitle="Organizaciones, marcas y plataformas que impulsan el desarrollo productivo, la innovación y el talento de la región."
          align="center"
          className="mb-12 md:mb-16"
        />

        {/* Logo Cloud with Framer Motion reveal */}
        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUpVariant}
          className="max-w-4xl mx-auto mb-12"
        >
          <LogoCloud
            logos={eventConfig.partners.map((partner) => ({
              src: partner.logoUrl,
              alt: partner.name,
            }))}
          />
        </motion.div>

        {/* Secondary Partner CTA with Framer Motion reveal */}
        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={fadeUpVariant}
          className="flex flex-col items-center justify-center text-center p-8 sm:p-10 rounded-2xl md:rounded-3xl bg-[#0D1626]/45 backdrop-blur-2xl backdrop-saturate-200 border border-white/15 max-w-2xl mx-auto shadow-xl relative overflow-hidden before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/15 before:to-transparent"
        >
          <Handshake size={32} weight="duotone" className="text-accent mb-2" aria-hidden="true" />
          <h4 className="font-display font-bold text-lg md:text-xl text-foreground">
            Tu marca también puede ser parte de la experiencia
          </h4>
          <p className="text-sm text-muted-foreground mt-1 mb-5 max-w-lg">
            No buscamos simplemente colocar un logo: creamos activaciones y espacios donde las marcas tienen algo real que decir.
          </p>

          <a
            href="mailto:alianzas@imparables.com?subject=Interes%20en%20ser%20Aliado%20Imparables%20Nexus"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-hover hover:underline transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg px-2 py-1"
          >
            <span>Quiero ser aliado o patrocinante</span>
            <ArrowUpRight size={16} weight="bold" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
