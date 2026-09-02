"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { eventConfig } from "@/lib/content/event.config";
import { useSectionReveal } from "@/lib/motion/gsap-hooks";
import { ArrowUpRight, Handshake } from "@phosphor-icons/react";

export const Partners: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useSectionReveal(sectionRef);

  return (
    <section
      id="aliados"
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-background border-t border-border overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeading
          kicker="ALIANZAS ESTRATÉGICAS"
          title="Creemos en lo que podemos construir juntos"
          subtitle="Organizaciones, marcas y plataformas que impulsan el desarrollo productivo, la innovación y el talento de la región."
          align="center"
          className="mb-12 md:mb-16"
        />

        {/* Logos Grid with Grayscale filter and Color on Hover */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {eventConfig.partners.map((partner, index) => (
            <div
              key={index}
              className="group flex flex-col items-center justify-center p-8 rounded-[var(--radius-card)] bg-background-elevated/60 border border-border hover:border-accent/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="relative h-20 w-44 flex items-center justify-center filter grayscale contrast-125 opacity-70 group-hover:grayscale-0 group-hover:contrast-100 group-hover:opacity-100 transition-all duration-300">
                <Image
                  src={partner.logoUrl}
                  alt={partner.name}
                  fill
                  sizes="176px"
                  className="object-contain"
                />
              </div>

              <div className="mt-4 text-center">
                <span className="text-xs font-semibold text-accent/90 uppercase tracking-wider block">
                  {partner.category}
                </span>
                <span className="text-sm font-medium text-foreground/80 mt-1 block">
                  {partner.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Secondary Partner CTA */}
        <div className="flex flex-col items-center justify-center text-center p-8 rounded-2xl bg-white/[0.02] border border-white/5 max-w-2xl mx-auto">
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
        </div>
      </div>
    </section>
  );
};
