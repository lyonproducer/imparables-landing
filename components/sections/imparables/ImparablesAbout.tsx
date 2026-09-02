"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ImparablesInterlock } from "@/components/ui/imparables";
import { Quotes, Sparkle } from "@phosphor-icons/react";
import { fadeUpVariant, staggerContainer } from "@/lib/motion/motion-variants";

const formatPills = [
  "Conferencias",
  "Experiencias empresariales",
  "Tecnología",
  "Formación",
  "Networking",
  "Historias reales",
];

export const ImparablesAbout: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="nosotros"
      ref={sectionRef}
      className="relative py-20 sm:py-28 md:py-36 bg-[#F0F2F6] text-neutral-950 border-b border-neutral-300/80 overflow-hidden"
    >
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
              <motion.div variants={fadeUpVariant} className="flex items-center gap-2 mb-4">
                <ImparablesInterlock size="sm" />
                <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#004F9E] uppercase">
                  UNA MARCA QUE NACIÓ PARA IMPULSAR
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

              {/* Subtitle / Description */}
              <motion.p
                variants={fadeUpVariant}
                className="text-base sm:text-lg md:text-xl text-neutral-600 font-normal leading-relaxed mb-8"
              >
                Desde entonces hemos creado diferentes formatos para hablar de aquello que nos mueve, nos desafía y nos impulsa a crecer.
              </motion.p>

              {/* Formats Pills */}
              <motion.div variants={fadeUpVariant} className="flex flex-wrap gap-2.5 sm:gap-3 mb-10">
                {formatPills.map((pill) => (
                  <span
                    key={pill}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-neutral-900 border border-neutral-300/80 text-xs sm:text-sm font-semibold shadow-sm hover:border-[#004F9E]/40 hover:shadow-md transition-all duration-200"
                  >
                    <Sparkle size={14} weight="fill" className="text-[#FFB100]" />
                    <span>{pill}</span>
                  </span>
                ))}
              </motion.div>

              {/* Belief / Purpose Card */}
              <motion.div
                variants={fadeUpVariant}
                className="relative p-6 sm:p-8 rounded-3xl bg-white border border-neutral-300/80 shadow-lg mb-10 overflow-hidden group"
              >
                <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[#004F9E] to-[#FFB100]" />
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-[#004F9E]/10 text-[#004F9E] flex items-center justify-center shrink-0">
                    <Quotes size={22} weight="fill" />
                  </div>
                  <blockquote className="font-display font-semibold text-base sm:text-lg text-neutral-900 leading-relaxed italic">
                    “Porque creemos que detrás de cada sueño existe una persona que decidió creer antes de tener todas las respuestas.”
                  </blockquote>
                </div>
              </motion.div>
            </div>

            {/* Bottom-Left Image (Matches Reference Layout) */}
            <motion.div
              variants={fadeUpVariant}
              className="relative w-full aspect-[16/10] rounded-3xl sm:rounded-[2.25rem] overflow-hidden shadow-2xl border border-neutral-300/80 group"
            >
              <Image
                src="/images/imparables-about-2.webp"
                alt="Imparables Formación y Encuentros"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
            </motion.div>
          </div>

          {/* ================= RIGHT COLUMN: TALL PORTRAIT HERO IMAGE (Matches Reference Layout) ================= */}
          <div className="lg:col-span-6 w-full sticky top-28">
            <motion.div
              variants={fadeUpVariant}
              className="relative w-full h-[520px] sm:h-[640px] md:h-[700px] lg:h-[760px] rounded-3xl sm:rounded-[2.5rem] overflow-hidden shadow-2xl border border-neutral-300/80 group bg-neutral-200"
            >
              <Image
                src="/images/imparables-about-1.webp"
                alt="Andersong Trocel Imparables"
                fill
                sizes="(max-width: 1024px) 100vw, 48vw"
                priority
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-50" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImparablesAbout;
