"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ImparablesInterlock } from "@/components/ui/imparables";
import { Quotes } from "@phosphor-icons/react";
import { fadeUpVariant, staggerContainer } from "@/lib/motion/motion-variants";

export const ImparablesAbout: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="nosotros"
      ref={sectionRef}
      className="relative py-20 sm:py-28 md:py-36 bg-[#e8e6eb] text-neutral-950 border-b border-neutral-300/80 overflow-hidden"
    >
      {/* Background Graphic: Architectural Track Lines (Flipped 180deg) */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <Image
          src="/backgrounds/Screenshot_2026-09-03_at_7.25.39_PM.png_202609031929.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center rotate-180"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#e8e6eb]/30 via-transparent to-[#e8e6eb]/40" />
      </div>

      {/* Dynamic Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-[650px] h-[650px] bg-[#004F9E]/06 blur-[180px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[550px] h-[550px] bg-[#FFB100]/06 blur-[180px] rounded-full" />
        <div className="absolute inset-0 bg-[radial-gradient(#0000000a_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
        >
          {/* ================= LEFT COLUMN: EDITORIAL CONTENT & BOTTOM-LEFT IMAGE ================= */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              {/* Kicker */}
              <motion.div variants={fadeUpVariant} className="flex items-center gap-2 mb-3">
                <ImparablesInterlock size="sm" />
                <span className="text-xs font-sans font-bold tracking-[0.1em] text-[#004F9E] uppercase">
                  SOBRE IMPARABLES
                </span>
                <span className="text-neutral-400">·</span>
                <span className="text-xs font-sans font-semibold tracking-[0.06em] text-neutral-600 uppercase">
                  UNA IDEA QUE SIGUE CRECIENDO
                </span>
              </motion.div>

              {/* Main Headline */}
              <motion.h2
                variants={fadeUpVariant}
                className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-neutral-950 leading-[1.12] tracking-tight mb-6"
              >
                Imparables nació en 2024 con una idea muy sencilla:{" "}
                <span className="text-[#004F9E]">
                  recordarle a las personas que siempre existe una posibilidad de avanzar.
                </span>
              </motion.h2>

              {/* Narrative Paragraphs */}
              <div className="space-y-4 mb-8 text-base sm:text-lg text-[#545454] font-normal leading-relaxed">
                <motion.p variants={fadeUpVariant}>
                  <strong className="text-neutral-950 font-semibold">Imparables</strong> fue creado por{" "}
                  <strong className="text-neutral-950 font-semibold">Andersong Trocel</strong>, comunicador, locutor y director creativo con más de 15 años de experiencia en el mundo de la comunicación.
                </motion.p>
                <motion.p variants={fadeUpVariant}>
                  Después de años trabajando frente a micrófonos, escenarios, marcas y audiencias, nació la necesidad de crear un espacio donde la comunicación pudiera convertirse en algo más: una herramienta para conectar personas, contar historias y abrir oportunidades.
                </motion.p>
                <motion.p variants={fadeUpVariant}>
                  Así comenzó Imparables. Una marca que empezó con una conferencia y que hoy continúa evolucionando hacia nuevas experiencias, nuevos escenarios y nuevas conversaciones.
                </motion.p>
              </div>
            </div>

            {/* Bottom-Left Image (Expanded in height) */}
            <motion.div
              variants={fadeUpVariant}
              className="relative w-full h-[360px] sm:h-[440px] md:h-[500px] rounded-3xl sm:rounded-[2.25rem] overflow-hidden shadow-2xl border border-neutral-300/80 group"
            >
              <Image
                src="/events/business-submit/IMG_20260905_025046_204.webp"
                alt="Imparables Formación y Encuentros"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 pointer-events-none" />
            </motion.div>
          </div>

          {/* ================= RIGHT COLUMN: TALL PORTRAIT HERO IMAGE & QUOTE BOX ================= */}
          <div className="lg:col-span-6 w-full flex flex-col gap-6 sm:gap-8">
            <motion.div
              variants={fadeUpVariant}
              className="relative w-full h-[460px] sm:h-[540px] md:h-[600px] rounded-3xl sm:rounded-[2.5rem] overflow-hidden shadow-2xl border border-neutral-300/80 group bg-neutral-200"
            >
              <Image
                src="/events/liderazgo/IMG_2432.webp"
                alt="Andersong Trocel Imparables"
                fill
                sizes="(max-width: 1024px) 100vw, 48vw"
                priority
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-50 pointer-events-none" />
            </motion.div>

            {/* Official Quote Box (Moved to Right Column) */}
            <motion.div
              variants={fadeUpVariant}
              className="relative p-6 sm:p-8 rounded-3xl sm:rounded-[2rem] bg-white/95 backdrop-blur-md border border-neutral-300/80 shadow-xl"
            >
              <Quotes size={28} weight="fill" className="text-[#004F9E] mb-3" aria-hidden="true" />
              <blockquote className="font-display font-bold text-base sm:text-lg md:text-xl text-neutral-950 leading-snug uppercase tracking-tight">
                “NO QUEREMOS DECIRLE A LAS PERSONAS QUE TODO SERÁ FÁCIL. QUEREMOS RECORDARLES QUE SIEMPRE PUEDEN HACER ALGO.”
              </blockquote>
              <div className="mt-4 pt-3 border-t border-neutral-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <span className="text-xs font-sans font-bold text-[#004F9E] uppercase tracking-wider">
                  — ANDERSONG TROCEL
                </span>
                <span className="text-xs text-[#545454] font-medium">
                  Creador y Director General de Imparables
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImparablesAbout;
