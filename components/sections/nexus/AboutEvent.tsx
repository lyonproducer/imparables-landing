"use client";

import React, { useRef } from "react";
import { LinesBackground } from "@/components/ui/shared/LinesBackground";
import { SectionHeading } from "@/components/ui/shared/SectionHeading";
import { eventConfig } from "@/lib/content/event.config";
import { useSectionReveal } from "@/lib/motion/gsap-hooks";
import { GlobeHemisphereWest, UsersThree, Lightbulb } from "@phosphor-icons/react";

export const AboutEvent: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useSectionReveal(sectionRef);

  return (
    <section
      id="sobre-el-evento"
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-background overflow-hidden border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Context Copy */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <SectionHeading
              kicker="SOBRE EL ENCUENTRO"
              title="Para crecer en el nuevo mundo empresarial, debemos entender el mundo digital."
              align="left"
            />

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              {eventConfig.aboutEvent.highlight}
            </p>

            {/* Pull Quote */}
            <div className="relative p-6 rounded-2xl bg-background-elevated/70 border-l-4 border-accent border-y border-r border-border my-2">
              <p className="font-display font-medium text-lg md:text-xl text-foreground italic">
                “{eventConfig.aboutEvent.quote}”
              </p>
            </div>

            {/* 3 Pillar highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="flex flex-col gap-2 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <GlobeHemisphereWest size={24} weight="duotone" className="text-accent" />
                <span className="font-display font-semibold text-sm text-foreground">
                  Alcance Global
                </span>
                <span className="text-xs text-muted-foreground">
                  Casos de venezolanos trabajando para mercados internacionales.
                </span>
              </div>

              <div className="flex flex-col gap-2 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <UsersThree size={24} weight="duotone" className="text-accent" />
                <span className="font-display font-semibold text-sm text-foreground">
                  Talento Regional
                </span>
                <span className="text-xs text-muted-foreground">
                  Desarrolladores, creadores y especialistas de nuestra propia región.
                </span>
              </div>

              <div className="flex flex-col gap-2 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <Lightbulb size={24} weight="duotone" className="text-accent" />
                <span className="font-display font-semibold text-sm text-foreground">
                  Aplicación Real
                </span>
                <span className="text-xs text-muted-foreground">
                  IA y automatización orientada a rentabilidad de empresas de hoy.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Decorative Graphic Panel with LinesBackground */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-square w-full rounded-card bg-gradient-to-br from-primary/20 via-background-elevated to-background border border-primary/30 overflow-hidden shadow-2xl flex items-center justify-center p-6">
              {/* Parametric lines background embedded */}
              <LinesBackground className="absolute inset-0 opacity-80" />

              {/* Central Floating Highlight badge */}
              <div className="relative z-10 p-8 rounded-2xl bg-background-elevated/85 border border-white/10 text-center max-w-xs shadow-xl backdrop-blur-xs">
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-accent font-bold">
                  2026 EDITION
                </span>
                <h3 className="font-display font-bold text-2xl text-foreground mt-2">
                  Imparables Nexus
                </h3>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                  Conectando a dueños de negocio, líderes de equipo y desarrolladores en un solo espacio.
                </p>
                <div className="mt-5 pt-4 border-t border-white/10">
                  <span className="text-[11px] font-medium text-foreground/80">
                    Puerto Ordaz · Estado Bolívar
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
