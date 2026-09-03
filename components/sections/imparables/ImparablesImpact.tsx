"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ImparablesInterlock } from "@/components/ui/imparables";
import { NumberTicker } from "@/components/ui/NumberTicker";
import { fadeUpVariant, staggerContainer } from "@/lib/motion/motion-variants";

interface StatItem {
  id: string;
  numberValue: number;
  prefix?: string;
  suffix?: string;
  label: string;
  sublabel: string;
  delay: number;
}

const stats: StatItem[] = [
  {
    id: "events",
    numberValue: 4,
    prefix: "+",
    label: "Eventos realizados",
    sublabel: "Experiencias y cumbres de impacto",
    delay: 0.1,
  },
  {
    id: "attendees",
    numberValue: 200,
    prefix: "+",
    label: "Asistencias en eventos",
    sublabel: "Personas conectadas y formadas",
    delay: 0.2,
  },
  {
    id: "allies",
    numberValue: 5,
    prefix: "+",
    label: "Aliados comerciales",
    sublabel: "Empresas que respaldan la visión",
    delay: 0.3,
  },
  {
    id: "experts",
    numberValue: 5,
    prefix: "+",
    label: "Expertos en el equipo",
    sublabel: "Profesionales dedicados al crecimiento",
    delay: 0.4,
  },
];

export const ImparablesImpact: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="impacto"
      className="relative w-full py-24 sm:py-28 md:py-36 bg-gradient-to-b from-[#FFB800] via-[#FFB100] to-[#F59E0B] text-neutral-950 overflow-hidden border-y border-black/10 select-none"
    >

      {/* Radial soft depth vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.06)_100%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 md:px-12 lg:px-16 text-center">
        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="flex flex-col items-center"
        >
          {/* Section Kicker */}
          <motion.div
            variants={fadeUpVariant}
            className="flex items-center justify-center gap-2.5 mb-6 sm:mb-8"
          >
            <ImparablesInterlock size="sm" />
            <span className="text-xs font-sans font-extrabold tracking-[0.12em] text-neutral-950/80 uppercase">
              PROPÓSITO & TRAYECTORIA
            </span>
          </motion.div>

          {/* Main Statement Headline */}
          <motion.h2
            variants={fadeUpVariant}
            className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] text-neutral-950 leading-[1.08] tracking-tight max-w-4xl mx-auto mb-16 sm:mb-20 md:mb-24"
          >
            Donde empresas visionarias y personas imparables conectan para transformar su futuro
          </motion.h2>

          {/* 4 Stats Grid */}
          <motion.div
            variants={staggerContainer}
            className="w-full grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-8 pt-6 border-t border-neutral-950/15"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.id}
                variants={fadeUpVariant}
                className="flex flex-col items-center text-center group cursor-default"
              >
                {/* Large Display Metric with NumberTicker */}
                <div className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-[5.2rem] text-neutral-950 leading-none tracking-tight transition-transform duration-300 group-hover:scale-105">
                  <NumberTicker
                    value={stat.numberValue}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    delay={stat.delay}
                  />
                </div>

                {/* Main Label */}
                <h4 className="mt-3 sm:mt-4 font-sans font-extrabold text-base sm:text-lg text-neutral-950 tracking-tight">
                  {stat.label}
                </h4>

                {/* Sublabel / Context */}
                <p className="mt-1 text-xs sm:text-sm font-sans font-medium text-neutral-950/70 max-w-[180px]">
                  {stat.sublabel}
                </p>

                {/* Subtle bottom accent hairline */}
                <div className="w-8 h-1 bg-neutral-950/20 rounded-full mt-4 transition-all duration-300 group-hover:w-16 group-hover:bg-neutral-950" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
