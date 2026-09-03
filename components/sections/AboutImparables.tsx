"use client";

import React, { useRef } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { eventConfig } from "@/lib/content/event.config";
import { useSectionReveal } from "@/lib/motion/gsap-hooks";
import { Quotes, Sparkle } from "@phosphor-icons/react";

export const AboutImparables: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useSectionReveal(sectionRef);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-background-elevated/40 border-t border-border overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Brand Context and Mission */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <SectionHeading
              kicker="PLATAFORMA IMPARABLES"
              title="Una idea que sigue creciendo desde 2024"
              align="left"
            />

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              {eventConfig.aboutImparables.body}
            </p>

            {/* Official Quote Box */}
            <div className="relative p-6 sm:p-8 rounded-card bg-background/80 border border-primary/30 shadow-xl mt-2">
              <Quotes size={32} weight="fill" className="text-accent/60 mb-2" aria-hidden="true" />
              <blockquote className="font-display font-medium text-lg md:text-xl text-foreground italic leading-relaxed">
                “{eventConfig.aboutImparables.quote}”
              </blockquote>
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                  — {eventConfig.aboutImparables.author}
                </span>
                <span className="text-xs text-muted-foreground">
                  Director General de Imparables
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Evolution Timeline */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <div className="p-6 rounded-2xl bg-background-elevated/80 border border-border flex flex-col gap-2 transition-all hover:border-primary/40">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-accent px-2.5 py-0.5 rounded-full bg-accent/10 border border-accent/20">
                  2024
                </span>
                <span className="text-xs text-muted-foreground">El Comienzo</span>
              </div>
              <h4 className="font-display font-bold text-lg text-foreground mt-1">
                Conferencias Imparables
              </h4>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                “Aunque nada cambie, si yo cambio, todo cambia.” Dos fechas que marcaron el inicio de una comunidad que cree en avanzar.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-background-elevated/80 border border-border flex flex-col gap-2 transition-all hover:border-primary/40">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-primary-foreground px-2.5 py-0.5 rounded-full bg-primary/40 border border-primary/60">
                  2025
                </span>
                <span className="text-xs text-muted-foreground">Ecosistema</span>
              </div>
              <h4 className="font-display font-bold text-lg text-foreground mt-1">
                Imparables Business Summit
              </h4>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                “Detrás de cada marca hay una historia.” Más de 20 marcas en el escenario compartiendo el camino real para construir empresas.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-primary/20 border-2 border-accent/50 flex flex-col gap-2 shadow-lg shadow-primary/20">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-accent-foreground px-2.5 py-0.5 rounded-full bg-accent">
                  2026 · AHORA
                </span>
                <span className="text-xs text-accent font-semibold flex items-center gap-1">
                  <Sparkle size={12} weight="fill" /> Próxima edición
                </span>
              </div>
              <h4 className="font-display font-bold text-xl text-foreground mt-1">
                Imparables Nexus
              </h4>
              <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed">
                “El futuro de las empresas ya está pasando.” Un encuentro dedicado a explorar la tecnología, la IA y las nuevas oportunidades digitales.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
