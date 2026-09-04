"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowsOutSimple,
  ArrowDown,
  X,
  Calendar,
  CheckCircle,
} from "@phosphor-icons/react";
import { ImparablesInterlock } from "@/components/ui/imparables";
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
  offsetClass: string;
}

export const formatsData: FormatItem[] = [
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
    offsetClass: "sm:translate-y-0 lg:-translate-y-0",
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
    offsetClass: "sm:translate-y-6 lg:translate-y-10",
  },
  {
    id: "liderazgo-360",
    tag: "LIDERAZGO 360",
    title: "Conversatorio Liderazgo 360",
    headline: "Visión integral, toma de decisiones y liderazgo con propósito",
    description:
      "Conversatorio de alto impacto con líderes y referentes sobre visión estratégica, resiliencia y gestión de equipos.",
    flyerSrc: "/flyers/649236992_18561148135059362_3506792468321341082_n.jpg",
    flyerAlt: "Flyer Conversatorio Liderazgo 360 — Andersong Trocel y panel de invitados",
    yearOrMetric: "360°",
    metricLabel: "Visión integral",
    accentColor: "#004F9E",
    offsetClass: "sm:translate-y-0 lg:-translate-y-2",
  },
  {
    id: "voces-imparables",
    tag: "VOCES IMPARABLES",
    title: "Voces Imparables",
    headline: "Comunicación, crecimiento y transformación de impacto",
    description:
      "Nuestro programa de formación en comunicación, crecimiento y liderazgo, diseñado para ayudar a las personas a encontrar su propia voz.",
    flyerSrc: "/flyers/748161065_18598341691059362_4810160585673327155_n.jpg",
    flyerAlt: "Flyer Voces Imparables — Comunicación, crecimiento y transformación",
    yearOrMetric: "4+",
    metricLabel: "Habilidades clave",
    accentColor: "#FFB100",
    offsetClass: "sm:translate-y-6 lg:translate-y-12",
  },
];

interface ImparablesEventFormatsProps {
  onSelectFormat?: (formatId: string) => void;
}

export const ImparablesEventFormats: React.FC<ImparablesEventFormatsProps> = ({
  onSelectFormat,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const [selectedFormat, setSelectedFormat] = useState<FormatItem | null>(null);

  const scrollToGallery = () => {
    const el =
      document.getElementById("timeline-section") ||
      document.getElementById("galeria-formatos");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-background">
      {/* =========================================================================
          TOP HERO REGION: VIBRANT BRAND YELLOW (#FFB100)
          Matches reference design: big headline, narrative & dark pill button
         ========================================================================= */}
      <div className="relative bg-[#FFB100] pt-36 sm:pt-44 md:pt-48 lg:pt-52 pb-60 sm:pb-72 md:pb-84 lg:pb-96 px-6 md:px-12 lg:px-16 text-center overflow-hidden">
        {/* Subtle Architectural Ambient Track lines */}
        <div className="absolute inset-0 pointer-events-none select-none">
          <svg
            className="w-full h-full object-cover"
            viewBox="0 0 1440 600"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden="true"
          >
            {[...Array(5)].map((_, i) => (
              <path
                key={i}
                d={`M -80 ${30 + i * 85} Q 460 ${-60 + i * 85} 960 ${110 + i * 85} T 1560 ${240 + i * 85}`}
                stroke="#000000"
                strokeOpacity="0.05"
                strokeWidth="18"
                fill="none"
                strokeLinecap="round"
              />
            ))}
          </svg>
        </div>

        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-white"
        >
          {/* Tag Kicker (Clean, Unboxed Typographic Overline per MASTER.md 4.4) */}
          <motion.div
            variants={fadeUpVariant}
            className="flex items-center gap-2 text-white text-xs font-sans font-bold tracking-[0.08em] uppercase mb-4 drop-shadow-sm"
          >
            <ImparablesInterlock size="sm" />
            <span>Mundo Imparables · Formatos</span>
          </motion.div>

          {/* Large Bold Display Headline */}
          <motion.h1
            variants={fadeUpVariant}
            className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] text-white tracking-tight leading-[1.06] mb-5 drop-shadow-[0_2px_12px_rgba(0,0,0,0.18)]"
          >
            ¡Descubre nuestros formatos de experiencia!
          </motion.h1>

          {/* Narrative Subtitle */}
          <motion.p
            variants={fadeUpVariant}
            className="text-white/95 font-medium text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed drop-shadow-sm"
          >
            Desde conferencias transformadoras hasta cumbres empresariales y programas de comunicación, cada formato conecta personas, ideas y oportunidades reales.
          </motion.p>
        </motion.div>
      </div>

      {/* =========================================================================
          LOWER SECTION (CLEAN LIGHT BACKGROUND):
          Houses the staggered cards overlapping the seam, details & Nexus Bridge
         ========================================================================= */}
      <div
        id="galeria-formatos"
        className="relative bg-[#FFFFFF] text-neutral-900 px-6 md:px-12 lg:px-16 pt-0 pb-24 md:pb-32"
      >
        {/* STAGGERED OVERLAPPING CARDS DECK:
            Pulled upwards with negative top margin to overlap the yellow-to-white horizon line */}
        <div className="-mt-40 sm:-mt-48 md:-mt-56 lg:-mt-64 max-w-7xl mx-auto relative z-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5 items-start -translate-y-20">
            {formatsData.map((item, idx) => {
              return (
                <motion.div
                  key={item.id}
                  initial={shouldReduceMotion ? false : "hidden"}
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  variants={fadeUpVariant}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => {
                    if (onSelectFormat) {
                      onSelectFormat(item.id);
                    } else {
                      setSelectedFormat(item);
                    }
                  }}
                  className={`group relative h-[440px] sm:h-[470px] lg:h-[500px] rounded-[2rem] sm:rounded-[2.25rem] overflow-hidden bg-neutral-950 border border-black/10 shadow-[0_20px_50px_rgba(0,0,0,0.18)] hover:shadow-[0_30px_70px_rgba(0,0,0,0.32)] cursor-pointer transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.02] flex flex-col justify-between ${
                    shouldReduceMotion ? "" : item.offsetClass
                  }`}
                >
                  {/* Poster Image */}
                  <div className="absolute inset-0 z-0 bg-neutral-900">
                    <Image
                      src={item.flyerSrc}
                      alt={item.flyerAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover object-center group-hover:scale-[1.08] transition-transform duration-700 ease-out"
                    />

                    {/* Gradient Overlays for High Legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent opacity-90 group-hover:opacity-75 transition-opacity duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent opacity-80" />
                  </div>

                  {/* Top Bar on Card: Expand Icon */}
                  <div className="relative z-10 p-4 sm:p-5 flex items-center justify-end">
                    <div className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-85 group-hover:opacity-100 group-hover:bg-[#FFB100] group-hover:text-neutral-950 group-hover:border-[#FFB100] transition-all shadow-md">
                      <ArrowsOutSimple size={15} weight="bold" />
                    </div>
                  </div>

                  {/* Bottom Bar on Card: Narrative & Action */}
                  <div className="relative z-10 p-5 sm:p-6 flex flex-col justify-end text-left">
                    {/* Headline Quote */}
                    <p className="text-white/70 text-xs italic line-clamp-2 leading-relaxed mb-3">
                      &ldquo;{item.headline}&rdquo;
                    </p>

                    {/* Ver detalle link */}
                    <div className="flex items-center justify-between text-xs font-semibold text-[#FFB100] pt-2 border-t border-white/15">
                      <span className="font-sans font-bold tracking-[0.06em] uppercase">
                        {onSelectFormat ? "Ver información" : "Ver flyer y detalle"}
                      </span>
                      <ArrowUpRight
                        size={15}
                        weight="bold"
                        className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* =========================================================================
            HIGHLIGHT BANNER: IMPARABLES NEXUS BRIDGE
           ========================================================================= */}
        <div className="max-w-7xl mx-auto mt-10 sm:mt-14">
          <motion.div
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeUpVariant}
            className="mt-14 sm:mt-18 rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-[#003875]/85 via-[#00224a]/85 to-[#0E1015]/95 border border-blue-400/30 backdrop-blur-xl shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden"
          >
            {/* Ambient Glow */}
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
      </div>

      {/* =========================================================================
          MODAL LIGHTBOX FOR FULL FLYER INSPECTION
         ========================================================================= */}
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
                type="button"
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
                      href="/contacto"
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

export default ImparablesEventFormats;
