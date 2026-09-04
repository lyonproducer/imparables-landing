"use client";

import React, { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionHeading } from "@/components/ui/shared/SectionHeading";
import { TopicCard } from "@/components/ui/nexus/TopicCard";
import { eventConfig } from "@/lib/content/event.config";
import { staggerContainer } from "@/lib/motion/motion-variants";

export const Topics: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

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

        {/* Grid with Framer Motion whileInView stagger */}
        <motion.div
          variants={staggerContainer}
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {eventConfig.topics.map((topic, index) => (
            <TopicCard key={topic.id} topic={topic} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
