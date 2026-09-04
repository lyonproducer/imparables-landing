"use client";

import React, { useRef } from "react";
import { SectionHeading } from "@/components/ui/shared/SectionHeading";
import { eventConfig } from "@/lib/content/event.config";
import { useSectionReveal } from "@/lib/motion/gsap-hooks";
import { Quotes } from "@phosphor-icons/react";

export const AboutImparables: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useSectionReveal(sectionRef);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-background-elevated/40 border-t border-border overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl mx-auto flex flex-col gap-6">
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
      </div>
    </section>
  );
};
