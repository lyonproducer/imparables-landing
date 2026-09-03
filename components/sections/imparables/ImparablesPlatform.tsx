"use client";

import React, { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ImparablesBadge } from "@/components/ui/imparables";
import { fadeUpVariant, staggerContainer } from "@/lib/motion/motion-variants";

interface PillarItem {
  id: string;
  number: string;
  tag: string;
  title: string;
  desc: string;
  bgClass: string;
  textClass: string;
  tagClass: string;
  numberClass: string;
  glowColor: string;
  accentBar: string;
  rightKeyColor?: string;
  leftKeyColor?: string;
}

const pillars: PillarItem[] = [
  {
    id: "inspirar",
    number: "01",
    tag: "Propósito",
    title: "INSPIRAR",
    desc: "Historias y testimonios reales que nos recuerdan que sí es posible avanzar.",
    bgClass: "bg-[#004F9E] text-white border-blue-400/20",
    textClass: "text-blue-100/90",
    tagClass: "text-blue-200/80",
    numberClass: "text-[#FFB100]",
    glowColor: "rgba(0,79,158,0.45)",
    accentBar: "bg-[#FFB100]",
    rightKeyColor: "#FFB100",
  },
  {
    id: "conectar",
    number: "02",
    tag: "Comunidad",
    title: "CONECTAR",
    desc: "Personas, marcas y proyectos que se encuentran para crear nuevas oportunidades.",
    bgClass: "bg-[#FFB100] text-neutral-950 border-amber-300/30",
    textClass: "text-neutral-900 font-medium",
    tagClass: "text-neutral-950/70",
    numberClass: "text-neutral-950",
    glowColor: "rgba(255,177,0,0.4)",
    accentBar: "bg-neutral-950",
    leftKeyColor: "#004F9E",
    rightKeyColor: "#FFFFFF",
  },
  {
    id: "formar",
    number: "03",
    tag: "Desarrollo",
    title: "FORMAR",
    desc: "Herramientas prácticas para desarrollar habilidades y crecer continuamente.",
    bgClass: "bg-white text-neutral-950 border-neutral-300/80 shadow-xl",
    textClass: "text-neutral-700 font-normal",
    tagClass: "text-neutral-600",
    numberClass: "text-[#004F9E]",
    glowColor: "rgba(255,255,255,0.6)",
    accentBar: "bg-[#004F9E]",
    leftKeyColor: "#FFB100",
    rightKeyColor: "#0D0F14",
  },
  {
    id: "experimentar",
    number: "04",
    tag: "Vivencia",
    title: "EXPERIMENTAR",
    desc: "Escenarios y eventos diseñados para aprender, compartir y vivir algo diferente.",
    bgClass: "bg-[#0D0F14] text-white border-white/15",
    textClass: "text-muted-foreground font-normal",
    tagClass: "text-white/50",
    numberClass: "text-[#FFB100]",
    glowColor: "rgba(255,255,255,0.15)",
    accentBar: "bg-[#FFB100]",
    leftKeyColor: "#FFFFFF",
  },
];

export const ImparablesPlatform: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section
      id="esencia"
      ref={containerRef}
      className="relative py-24 md:py-32 bg-[#F0F2F6] text-neutral-950 overflow-hidden"
    >
      {/* Dynamic Light Background Ambience */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[700px] h-[700px] bg-[#004F9E]/08 blur-[180px] rounded-full" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#FFB100]/08 blur-[180px] rounded-full" />
        <div className="absolute inset-0 bg-[radial-gradient(#0000000a_1px,transparent_1px)] [background-size:28px_28px]" />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-10 lg:px-12">
        {/* ================= SECTION HEADER ================= */}
        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="flex flex-col items-start text-left max-w-3xl mb-14 md:mb-16"
        >
          {/* Kicker */}
          <motion.div variants={fadeUpVariant} className="flex items-center gap-2 mb-4">
            <ImparablesBadge theme="light">
              IMPARABLES NO ES UN SOLO FORMATO
            </ImparablesBadge>
          </motion.div>

          {/* Main Headline */}
          <motion.h2
            variants={fadeUpVariant}
            className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-neutral-950 leading-[1.12] tracking-tight"
          >
            Es una plataforma que evoluciona para crear{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004F9E] via-blue-700 to-[#D98E00]">
              diferentes experiencias
            </span>
          </motion.h2>
        </motion.div>

        {/* ================= 4 Interactive Columns/Tiles ================= */}
        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {pillars.map((item) => {
            const isHovered = hoveredCard === item.id;
            return (
              <motion.div
                key={item.id}
                variants={fadeUpVariant}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: -12,
                        scale: 1.025,
                        zIndex: 30,
                      }
                }
                transition={{ type: "spring", stiffness: 350, damping: 22 }}
                onMouseEnter={() => setHoveredCard(item.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  boxShadow: isHovered
                    ? `0 25px 50px -12px ${item.glowColor}`
                    : "0 10px 30px -10px rgba(0,0,0,0.5)",
                }}
                className={`group relative flex flex-col justify-between p-6 sm:p-8 aspect-square border shadow-2xl overflow-hidden transition-all duration-300 cursor-pointer ${item.bgClass}`}
              >
                {/* INTERLOCKING GEOMETRIC KEYS (Sharp, Modern, Non-skeuomorphic) */}
                {item.rightKeyColor && (
                  <div
                    style={{ backgroundColor: item.rightKeyColor }}
                    className="hidden lg:block absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 z-20 shadow-md border border-black/10 pointer-events-none"
                    aria-hidden="true"
                  />
                )}

                {item.leftKeyColor && (
                  <div
                    style={{ backgroundColor: item.leftKeyColor }}
                    className="hidden lg:block absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 z-20 shadow-md border border-black/10 pointer-events-none"
                    aria-hidden="true"
                  />
                )}

                {/* Card Header Row */}
                <div className="relative z-10 flex items-center justify-between gap-2">
                  <span
                    className={`text-[10px] sm:text-xs font-sans font-bold tracking-widest uppercase ${item.tagClass}`}
                  >
                    {item.tag}
                  </span>
                  <span
                    className={`text-[10px] sm:text-xs font-sans font-bold tracking-widest uppercase select-none ${item.numberClass}`}
                  >
                    {item.number}
                  </span>
                </div>

                {/* Card Main Body */}
                <div className="relative z-10 my-auto py-1 sm:py-2">
                  <h3 className="font-display font-extrabold text-base sm:text-3xl lg:text-3xl tracking-tight leading-snug sm:leading-none">
                    {item.title}
                  </h3>

                  <div
                    className={`w-8 sm:w-10 h-0.5 sm:h-1 mt-2 sm:mt-3.5 mb-2 sm:mb-4 rounded-full group-hover:w-16 transition-all duration-300 ${item.accentBar}`}
                  />
                  <p
                    className={`text-xs sm:text-base leading-tight sm:leading-relaxed flex items-start ${item.textClass}`}
                  >
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
