"use client";

import React, { useRef } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TopicCard } from "@/components/ui/TopicCard";
import { eventConfig } from "@/lib/content/event.config";
import { useStaggerReveal, useSectionReveal } from "@/lib/motion/gsap-hooks";

export const Topics: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useSectionReveal(sectionRef);
  useStaggerReveal(gridRef, ".topic-card");

  return (
    <section
      id="temas"
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-background-elevated/40 border-t border-border overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeading
          kicker="EJES TEMÁTICOS"
          title="Lo que abordaremos en Imparables Nexus"
          subtitle="Una mirada práctica a las tecnologías, herramientas y enfoques que están redefiniendo el ecosistema productivo."
          align="center"
          className="mb-12 md:mb-16"
        />

        {/* Grid: 2 cols on mobile, 4 cols on desktop */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {eventConfig.topics.map((topic, index) => (
            <TopicCard key={topic.id} topic={topic} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
