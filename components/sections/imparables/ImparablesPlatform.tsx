"use client";

import React, { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ImparablesInterlock } from "@/components/ui/imparables";
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
    tag: "Narrativas & Propósito",
    title: "Inspirar",
    desc: "Historias reales y aprendizajes de líderes para transformar tu perspectiva y pasar a la acción.",
    bgClass: "bg-gradient-to-br from-[#003875] via-[#002855] to-[#001733] text-white border-blue-400/30",
    textClass: "text-blue-100/90",
    tagClass: "text-blue-200/90",
    numberClass: "text-[#FFB100]",
    glowColor: "rgba(0,79,158,0.55)",
    accentBar: "bg-[#FFB100]",
    rightKeyColor: "#FFB100",
  },
  {
    id: "conectar",
    number: "02",
    tag: "Networking Estratégico",
    title: "Conectar",
    desc: "Círculos de alto nivel donde empresarios, creadores y profesionales cruzan oportunidades.",
    bgClass: "bg-[#FFB100] text-neutral-950 border-amber-300/40 shadow-xl",
    textClass: "text-neutral-950/85 font-medium",
    tagClass: "text-neutral-950/70",
    numberClass: "text-neutral-950",
    glowColor: "rgba(255,177,0,0.5)",
    accentBar: "bg-neutral-950",
    leftKeyColor: "#FFB100",
    rightKeyColor: "#004F9E",
  },
  {
    id: "formar",
    number: "03",
    tag: "Mastery & Habilidades",
    title: "Formar",
    desc: "Programas prácticos de comunicación, storytelling y liderazgo con aplicación directa.",
    bgClass: "bg-[#F4F4F6] text-neutral-950 border-neutral-300/80 shadow-xl",
    textClass: "text-neutral-600",
    tagClass: "text-neutral-500",
    numberClass: "text-[#004F9E]",
    glowColor: "rgba(255,255,255,0.35)",
    accentBar: "bg-[#004F9E]",
    leftKeyColor: "#004F9E",
    rightKeyColor: "#0E1015",
  },
  {
    id: "transformar",
    number: "04",
    tag: "Evolución Empresarial",
    title: "Transformar",
    desc: "Cumbres y summits que integran tecnología, IA y modelos de negocio para el futuro.",
    bgClass: "bg-[#0E1015] text-white border-white/15",
    textClass: "text-muted-foreground",
    tagClass: "text-white/60",
    numberClass: "text-[#FFB100]",
    glowColor: "rgba(255,255,255,0.2)",
    accentBar: "bg-[#FFB100]",
    leftKeyColor: "#0E1015",
  },
];

export const ImparablesPlatform: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section
      id="esencia"
      className="relative w-full pb-20 md:pb-28 bg-[#FFFFFF] text-neutral-950 overflow-hidden"
    >
      {/* Subtle brand ambiance glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#004F9E]/5 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-[#FFB100]/5 blur-3xl rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 mt-20 sm:px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="max-w-3xl mb-12 sm:mb-16 text-left"
        >
          {/* Kicker */}
          <motion.div variants={fadeUpVariant} className="flex items-center gap-2 mb-4">
            <ImparablesInterlock size="sm" />
            <span className="text-xs font-sans font-bold tracking-[0.08em] text-[#004F9E] uppercase">
              IMPARABLES NO ES UN SOLO FORMATO
            </span>
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
          className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 lg:gap-6"
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
                className={`group relative flex flex-col justify-between p-3.5 sm:p-6 md:p-8 aspect-square border shadow-xl sm:shadow-2xl overflow-hidden transition-all duration-300 cursor-pointer ${item.bgClass}`}
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
                <div className="relative z-10 flex items-center justify-between gap-1.5 sm:gap-2">
                  <span
                    className={`text-[9px] sm:text-xs font-sans font-bold tracking-wider sm:tracking-widest uppercase truncate ${item.tagClass}`}
                  >
                    {item.tag}
                  </span>
                  <span
                    className={`text-[10px] sm:text-xs font-sans font-bold tracking-wider sm:tracking-widest uppercase select-none shrink-0 ${item.numberClass}`}
                  >
                    {item.number}
                  </span>
                </div>

                {/* Card Main Body */}
                <div className="relative z-10 my-auto py-1 sm:py-2">
                  <h3 className="font-display font-extrabold text-base sm:text-2xl lg:text-3xl tracking-tight leading-tight sm:leading-none">
                    {item.title}
                  </h3>

                  <div
                    className={`w-6 sm:w-10 h-0.5 sm:h-1 mt-1.5 sm:mt-3.5 mb-1.5 sm:mb-4 rounded-full group-hover:w-12 sm:group-hover:w-16 transition-all duration-300 ${item.accentBar}`}
                  />
                  <p
                    className={`text-[11px] sm:text-sm lg:text-base leading-snug sm:leading-relaxed ${item.textClass}`}
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
