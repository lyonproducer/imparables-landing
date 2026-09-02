"use client";

import React, { useRef } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AgendaItem } from "@/components/ui/AgendaItem";
import { eventConfig } from "@/lib/content/event.config";
import { useSectionReveal } from "@/lib/motion/gsap-hooks";
import { Info } from "@phosphor-icons/react";

export const Agenda: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useSectionReveal(sectionRef);

  return (
    <section
      id="agenda"
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-background border-t border-border overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <SectionHeading
          kicker="PROGRAMA DEL DÍA"
          title="Agenda preliminar del encuentro"
          subtitle="Una jornada condensada diseñada para maximizar el aprendizaje práctico y las conexiones estratégicas de valor."
          align="center"
          className="mb-8"
        />

        {/* Notice of tentative status */}
        <div className="flex items-center gap-3 p-4 rounded-xl bg-primary/15 border border-primary/25 text-xs text-muted-foreground mb-10 max-w-2xl mx-auto">
          <Info size={18} weight="fill" className="text-accent shrink-0" aria-hidden="true" />
          <p>
            Los bloques y horarios específicos mostrados a continuación corresponden a una
            estructura de referencia y se ajustarán conforme se confirme la sede y los paneles definitivos.
          </p>
        </div>

        {/* Timeline list */}
        <div className="flex flex-col gap-4">
          {eventConfig.agenda.map((item, index) => (
            <AgendaItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
