"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ImparablesInterlock } from "@/components/ui/imparables";
import { ArrowUpRight, Sparkle, MicrophoneStage, UsersThree } from "@phosphor-icons/react";
import { fadeUpVariant, staggerContainer } from "@/lib/motion/motion-variants";

export const ImparablesFounder: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="creador"
      className="relative py-20 sm:py-28 md:py-36 bg-[#F8F9FA] text-neutral-950 border-b border-neutral-200/80 overflow-hidden"
    >
      {/* Subtle architectural ambient background */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#004F9E]/05 blur-[160px] rounded-full" />
        <div className="absolute bottom-1/4 left-1/4 w-[450px] h-[450px] bg-[#FFB100]/06 blur-[160px] rounded-full" />
        <div className="absolute inset-0 bg-[radial-gradient(#00000008_1px,transparent_1px)] [background-size:28px_28px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
        >
          {/* ================= LEFT COLUMN: PORTRAIT IMAGE ================= */}
          <motion.div
            variants={fadeUpVariant}
            className="lg:col-span-6 w-full flex justify-center lg:justify-start"
          >
            <div className="relative w-full max-w-[540px] aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-3xl sm:rounded-[2.25rem] overflow-hidden shadow-2xl border border-neutral-200/90 group bg-neutral-200">
              <Image
                src="/ig/ig-02.jpeg"
                alt="Andersong Trocel — Creador y Fundador de Imparables"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 45vw"
                className="object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Gentle bottom shadow gradient for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 pointer-events-none" />

              {/* Floating role badge */}
              <div className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6 z-10 px-4 py-2.5 rounded-2xl bg-[#0E1015]/90 backdrop-blur-md border border-white/15 shadow-xl text-white">
                <span className="font-display font-bold text-sm sm:text-base block leading-tight">
                  Andersong Trocel
                </span>
                <span className="text-[11px] font-sans font-medium text-neutral-300 uppercase tracking-wider block mt-0.5">
                  Creador de Imparables
                </span>
              </div>
            </div>
          </motion.div>

          {/* ================= RIGHT COLUMN: EDITORIAL CONTENT ================= */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            {/* Kicker Overline */}
            <motion.div variants={fadeUpVariant} className="flex items-center gap-2 mb-4">
              <ImparablesInterlock size="sm" />
              <span className="text-xs font-sans font-bold tracking-[0.1em] text-[#004F9E] uppercase">
                CREADOR & FUNDADOR
              </span>
            </motion.div>

            {/* Editorial H2 Headline (matches reference bold typographic style) */}
            <motion.h2
              variants={fadeUpVariant}
              className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-neutral-950 leading-[1.12] tracking-tight mb-6"
            >
              Liderando con visión, propósito y{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004F9E] via-blue-700 to-[#D98E00]">
                acción real
              </span>
            </motion.h2>

            {/* Narrative Body Copy */}
            <motion.p
              variants={fadeUpVariant}
              className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed mb-5"
            >
              Andersong Trocel concibió <strong className="text-neutral-900 font-semibold">Imparables</strong> a partir de una convicción innegociable: el crecimiento personal y empresarial no se logra desde la inercia, sino desde la decisión consciente de convertir cualquier punto de partida en un motor de avance.
            </motion.p>

            <motion.p
              variants={fadeUpVariant}
              className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed mb-8"
            >
              Como conferencista, estratega y articulador de experiencias, ha impulsado escenarios de alto impacto como el encuentro Nexus, conectando líderes, creadores y marcas en torno al aprendizaje estratégico, la tecnología y el liderazgo del futuro.
            </motion.p>

            {/* Key Pill Pillars / Credentials */}
            <motion.div
              variants={fadeUpVariant}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mb-8 pt-2"
            >
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-neutral-200/80 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#004F9E]/10 text-[#004F9E] flex items-center justify-center shrink-0">
                  <MicrophoneStage size={20} weight="bold" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-neutral-900 leading-tight">Keynote Speaker</h4>
                  <p className="text-xs text-neutral-500 mt-0.5">Conferencias de alto impacto</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-neutral-200/80 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#FFB100]/15 text-[#D98E00] flex items-center justify-center shrink-0">
                  <Sparkle size={20} weight="bold" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-neutral-900 leading-tight">Estrategia & Visión</h4>
                  <p className="text-xs text-neutral-500 mt-0.5">Desarrollo de marcas e ideas</p>
                </div>
              </div>
            </motion.div>

            {/* Action Button (matches reference pill style with design system tokens) */}
            <motion.div variants={fadeUpVariant} className="pt-2">
              <Link
                href="/imparables/contacto"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#0E1015] hover:bg-neutral-800 text-white font-sans font-bold text-sm sm:text-base transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 group cursor-pointer"
              >
                <span>Conectar con Andersong</span>
                <ArrowUpRight
                  size={18}
                  weight="bold"
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImparablesFounder;
