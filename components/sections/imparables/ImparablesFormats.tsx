"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowsOutSimple,
  X,
  Calendar,
  CheckCircle,
} from "@phosphor-icons/react";
import { fadeUpVariant, staggerContainer } from "@/lib/motion/motion-variants";

export interface FormatItem {
  id: string;
  tag: string;
  title: string;
  headline: string;
  description: string;
  flyerSrc: string;
  flyerAlt: string;
  yearOrMetric: string;
  metricLabel: string;
  accentColor: string;
  rotation: string;
}

const formatsData: FormatItem[] = [
  {
    id: "conferencias",
    tag: "CONFERENCIAS IMPARABLES",
    title: "Conferencias Imparables",
    headline: "Aunque nada cambie, si yo cambio, todo cambia",
    description:
      "Historias y conversaciones que buscan inspirar a las personas a mirar sus posibilidades desde una perspectiva diferente.",
    flyerSrc: "/flyers/464917687_18459870139059362_6820635933111071404_n.webp",
    flyerAlt: "Flyer Conferencias Imparables — Andersong Trocel y Gelson Páez",
    yearOrMetric: "100%",
    metricLabel: "Historias reales",
    accentColor: "#004F9E",
    rotation: "-rotate-3 lg:-rotate-2",
  },
  {
    id: "business-summit",
    tag: "BUSINESS SUMMIT",
    title: "Imparables Business Summit",
    headline: "Donde las marcas cuentan la historia de las personas detrás de ellas",
    description:
      "El escenario donde las marcas dejan de ser solamente marcas y nos cuentan la historia de las personas que estuvieron detrás de ellas.",
    flyerSrc: "/flyers/495451317_18496194547059362_1041185602152418121_n.webp",
    flyerAlt: "Flyer Imparables Business Summit — Encuentro empresarial",
    yearOrMetric: "+12",
    metricLabel: "Marcas y líderes",
    accentColor: "#FFB100",
    rotation: "rotate-1 lg:rotate-1",
  },
  {
    id: "liderazgo-360",
    tag: "LIDERAZGO 360",
    title: "Conversatorio Liderazgo 360",
    headline: "Visión integral, toma de decisiones y liderazgo con propósito",
    description:
      "Conversatorio de alto impacto con líderes y referentes sobre visión estratégica, resiliencia y gestión de equipos.",
    flyerSrc: "/flyers/649236992_18561148135059362_3506792468321341082_n.webp",
    flyerAlt: "Flyer Conversatorio Liderazgo 360 — Andersong Trocel y panel de invitados",
    yearOrMetric: "360°",
    metricLabel: "Visión de liderazgo",
    accentColor: "#004F9E",
    rotation: "-rotate-1 lg:-rotate-1",
  },
  {
    id: "voces-imparables",
    tag: "VOCES IMPARABLES",
    title: "Voces Imparables",
    headline: "Comunicación, crecimiento y transformación de impacto",
    description:
      "Nuestro programa de formación en comunicación, crecimiento y liderazgo, diseñado para ayudar a las personas a encontrar su propia voz.",
    flyerSrc: "/flyers/748161065_18598341691059362_4810160585673327155_n.webp",
    flyerAlt: "Flyer Voces Imparables — Comunicación, crecimiento y transformación",
    yearOrMetric: "4+",
    metricLabel: "Habilidades clave",
    accentColor: "#FFB100",
    rotation: "rotate-3 lg:rotate-2",
  },
];

export const ImparablesFormats: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [selectedFormat, setSelectedFormat] = useState<FormatItem | null>(null);

  return (
    <section
      id="formatos"
      className="relative w-full py-24 md:py-32 bg-[#FFFFFF] text-neutral-900 overflow-hidden border-black/5"
    >
      {/* Anchor for nav link #eventos */}
      <div id="eventos" className="absolute -top-20" aria-hidden="true" />

      {/* SVG Background: Thick Gray Athletic Track Lines */}
      {/* Subtle Architectural Athletic Track Watermark */}
       <div className="absolute inset-0 pointer-events-none">
        <svg
          className="w-full h-full object-cover"
          viewBox="0 0 1440 600"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          {[...Array(6)].map((_, i) => (
            <path
              key={i}
              d={`M -100 ${50 + i * 80} Q 420 ${-80 + i * 80} 920 ${120 + i * 80} T 1580 ${260 + i * 80}`}
              stroke="#0E1015"
              strokeWidth="28"
              strokeOpacity={0.05}
              fill="none"
              strokeLinecap="round"
            />
          ))}
          <path
            d="M -50 480 C 300 380, 500 620, 750 450 S 1200 240, 1500 340"
            stroke="#FFFFFF"
            strokeWidth="3.5"
            strokeDasharray="10 8"
            fill="none"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* ================= EDITORIAL 2-COLUMN HEADER (LIGHT THEME) ================= */}
        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-end mb-16 sm:mb-20"
        >
          {/* Left Column: Kicker & Display Headline */}
          <motion.div variants={fadeUpVariant} className="lg:col-span-7 flex flex-col items-start text-left">
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-[3.4rem] text-neutral-950 leading-[1.08] tracking-tight">
              Diferentes escenarios.{" "}
              <span className="block mt-1.5 text-transparent bg-clip-text bg-gradient-to-r from-[#004F9E] via-[#002B5B] to-[#FFB100]">
                Una misma esencia.
              </span>
            </h2>
             {/* <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed font-normal">
              Desde conferencias transformadoras hasta cumbres empresariales y programas de
              comunicación, cada iniciativa conecta personas, ideas y oportunidades reales.
            </p> */}
          </motion.div>

          {/* Right Column: Paragraph narrative */}
          <motion.div variants={fadeUpVariant} className="lg:col-span-5 flex flex-col justify-end text-left">
            <p className="text-neutral-700 font-medium text-base sm:text-lg leading-relaxed">
              Imparables desarrolla diferentes formatos y experiencias, cada uno diseñado para
              abordar una conversación distinta.
            </p>
          </motion.div>
        </motion.div>

        {/* ================= FANNED OVERLAPPING CARDS DECK (REFERENCE REPLICA) ================= */}
        <div className="relative w-full">
          {/* Mobile horizontal snap carousel / Desktop fanned overlapping grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5 items-stretch">
            {formatsData.map((item, idx) => {
              return (
                <motion.div
                  key={item.id}
                  initial={shouldReduceMotion ? false : "hidden"}
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  variants={fadeUpVariant}
                  transition={{ delay: idx * 0.1 }}
                  className={`group relative flex flex-col justify-between rounded-4xl overflow-hidden bg-[#005193] border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.6)] cursor-pointer transition-all duration-500 ease-out hover:z-30 hover:-translate-y-3 hover:scale-[1.03] hover:shadow-[0_30px_70px_rgba(0,0,0,0.8)] hover:border-[#FFB100]/40 ${
                    shouldReduceMotion ? "" : item.rotation
                  } hover:rotate-0`}
                  onClick={() => setSelectedFormat(item)}
                >
                  {/* Aspect Ratio 4:5 Poster Image */}
                  <div className="relative w-full aspect-4/5 overflow-hidden bg-neutral-900">
                    <Image
                      src={item.flyerSrc}
                      alt={item.flyerAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover object-center group-hover:scale-[1.08] transition-transform duration-700 ease-out"
                    />

                    {/* Ambient Gradient Overlays for optimal typography legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#005193] via-[#005193]/30 to-transparent opacity-90 group-hover:opacity-75 transition-opacity duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent opacity-0" />

                    {/* Top Action Button */}
                    <div className="absolute top-4 right-4 z-10">
                      <div className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-80 group-hover:opacity-100 group-hover:bg-[#FFB100] group-hover:text-neutral-950 transition-all duration-300 shadow-md">
                        <ArrowsOutSimple size={15} weight="bold" />
                      </div>
                    </div>

                    {/* Metrics Anchored to Bottom Gradient */}
                    <div className="absolute bottom-3.5 left-4 sm:left-5 z-10 flex items-baseline gap-2">
                      <span className="font-display font-black text-2xl sm:text-3xl text-white drop-shadow-md leading-none">
                        {item.yearOrMetric}
                      </span>
                      <span className="text-[10px] sm:text-[11px] font-sans font-bold tracking-[0.06em] uppercase text-[#FFB100] drop-shadow-sm leading-none">
                        {item.metricLabel}
                      </span>
                    </div>
                  </div>

                  {/* Bottom Text Content & Editorial Divider */}
                  <div className="p-5 sm:p-6 bg-[#005193] flex flex-col justify-between flex-1 relative z-10 border-t border-white/10">
                    <div>
                      <h3 className="font-display font-bold text-lg sm:text-xl text-white group-hover:text-[#FFB100] transition-colors leading-snug mb-2">
                        {item.title}
                      </h3>
                      <div className="w-10 h-0.5 bg-[#FFB100] mb-3 group-hover:w-16 transition-all duration-300" />
                      <p className="text-white/70 text-xs sm:text-sm leading-relaxed line-clamp-3 font-normal">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-4 mt-2 flex items-center justify-between text-xs font-semibold text-[#FFB100]">
                      <span className="font-sans font-bold tracking-[0.06em] uppercase">Ver detalle</span>
                      <ArrowUpRight size={15} weight="bold" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ================= HIGHLIGHT BANNER: IMPARABLES NEXUS BRIDGE ================= */}
        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={fadeUpVariant}
          className="mt-14 sm:mt-18 rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-[#003875]/80 via-[#00224a]/80 to-[#0E1015]/90 border border-blue-400/30 backdrop-blur-xl shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden"
        >
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-accent/15 blur-3xl rounded-full pointer-events-none" />

          <div className="flex-1 relative z-10">
            <h4 className="font-display font-extrabold text-xl sm:text-2xl text-white mb-1.5">
              Imparables Nexus: Inteligencia Artificial & Empresas
            </h4>
            <p className="text-blue-100/80 text-xs sm:text-sm max-w-2xl leading-relaxed">
              Un encuentro dedicado a la tecnología, la innovación y las herramientas que están transformando la manera de hacer negocios.
            </p>
          </div>

          <div className="shrink-0 relative z-10 w-full md:w-auto">
            <Link
              href="/nexus"
              className="inline-flex items-center justify-center gap-2 w-full md:w-auto px-6 py-3 rounded-full bg-accent text-neutral-950 font-bold text-sm shadow-lg shadow-blue-500/25 hover:bg-accent/90 transition-all cursor-pointer"
            >
              <span>Explorar mundo Nexus</span>
              <ArrowUpRight size={16} weight="bold" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* ================= MODAL LIGHTBOX FOR FULL FLYER INSPECTION ================= */}
      <AnimatePresence>
        {selectedFormat && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md"
            onClick={() => setSelectedFormat(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0E1015] border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl text-white"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedFormat(null)}
                className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer z-20"
                aria-label="Cerrar vista previa"
              >
                <X size={20} weight="bold" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
                {/* Full Flyer Poster Column */}
                <div className="md:col-span-6 relative aspect-4/5 rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-neutral-900">
                  <Image
                    src={selectedFormat.flyerSrc}
                    alt={selectedFormat.flyerAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain object-center"
                    priority
                  />
                </div>

                {/* Details Column */}
                <div className="md:col-span-6 flex flex-col justify-between gap-5">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full text-[11px] font-sans font-bold uppercase tracking-[0.08em] bg-[#FFB100]/20 text-[#FFB100] border border-[#FFB100]/30 mb-3">
                      {selectedFormat.tag}
                    </span>
                    <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white mb-2 leading-tight">
                      {selectedFormat.title}
                    </h3>
                    <div className="w-12 h-1 bg-[#FFB100] mb-4 rounded-full" />
                    <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-4">
                      {selectedFormat.description}
                    </p>
                    <p className="text-white/60 text-xs sm:text-sm italic leading-relaxed">
                      &ldquo;{selectedFormat.headline}&rdquo;
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
                    <CheckCircle size={24} weight="duotone" className="text-[#FFB100] shrink-0" />
                    <div className="text-xs text-white/80 leading-relaxed">
                      Formato oficial de la plataforma Imparables. Abierto para empresas, patrocinadores y participantes.
                    </div>
                  </div>

                  <div className="pt-2">
                    <Link
                      href="#comunidad"
                      onClick={() => setSelectedFormat(null)}
                      className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl bg-[#FFB100] text-neutral-950 font-bold text-sm hover:bg-[#FFB100]/90 transition-colors shadow-lg shadow-[#FFB100]/20 cursor-pointer"
                    >
                      <Calendar size={18} weight="bold" />
                      <span>Participar en este formato</span>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ImparablesFormats;
