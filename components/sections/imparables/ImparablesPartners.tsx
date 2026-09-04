"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Handshake } from "@phosphor-icons/react";
import { ImparablesInterlock } from "@/components/ui/imparables";
import { fadeUpVariant, staggerContainer } from "@/lib/motion/motion-variants";

interface PartnerItem {
  id: string;
  number: string;
  tag: string;
  name: string;
  role: string;
  theme: "blue" | "amber" | "light" | "dark";
  primaryLogo: string;
  hoverLogo?: string;
  logoAlt: string;
  logoClassName: string;
  bgClass: string;
  textClass: string;
  tagClass: string;
  numberClass: string;
  glowColor: string;
  accentBar: string;
  rightKeyColor?: string;
  leftKeyColor?: string;
  isCta?: boolean;
}

const partnersList: PartnerItem[] = [
  {
    id: "seguros-caracas",
    number: "01",
    tag: "Aseguradora Líder",
    name: "Seguros Caracas",
    role: "Patrocinante Oficial · Respaldo Nacional",
    theme: "blue",
    primaryLogo: "/partners/IMG_20260621_185449_214.png",
    logoAlt: "Seguros Caracas Logo",
    logoClassName: "w-40 sm:w-44 h-16 sm:h-18",
    bgClass: "bg-[#004F9E] text-white border-blue-400/30",
    textClass: "text-blue-100/90",
    tagClass: "text-blue-200/90",
    numberClass: "text-[#FFB100]",
    glowColor: "rgba(0,79,158,0.55)",
    accentBar: "bg-[#FFB100]",
    rightKeyColor: "#FFB100",
  },
  {
    id: "lagars",
    number: "02",
    tag: "Gastronomía",
    name: "Lagar's",
    role: "Experiencias Exclusivas & Vinos",
    theme: "dark",
    primaryLogo: "/partners/lagars.png",
    hoverLogo: "/partners/IMG_20260621_185449_358.png",
    logoAlt: "Lagar's Logo",
    logoClassName: "w-36 sm:w-40 h-16 sm:h-18",
    bgClass: "bg-[#0D0F14] text-white border-white/15",
    textClass: "text-muted-foreground",
    tagClass: "text-white/60",
    numberClass: "text-[#FFB100]",
    glowColor: "rgba(255,255,255,0.2)",
    accentBar: "bg-[#FFB100]",
    leftKeyColor: "#FFB100",
    rightKeyColor: "#004F9E",
  },
  {
    id: "eprisma",
    number: "03",
    tag: "Tecnología & IA",
    name: "Eprisma",
    role: "Software, Plataformas & Estrategia",
    theme: "dark",
    primaryLogo: "/partners/eprisma-white.png",
    hoverLogo: "/partners/eprisma-green.png",
    logoAlt: "Eprisma Logo",
    logoClassName: "w-24 sm:w-28 h-16 sm:h-18",
    bgClass: "bg-[#0D0F14] text-white border-white/15",
    textClass: "text-muted-foreground",
    tagClass: "text-white/60",
    numberClass: "text-[#FFB100]",
    glowColor: "rgba(34,197,94,0.3)",
    accentBar: "bg-emerald-400",
    leftKeyColor: "#004F9E",
    rightKeyColor: "#FFB100",
  },
  {
    id: "camcaroni",
    number: "04",
    tag: "Gremio Empresarial",
    name: "Camcaroní",
    role: "Cámara de Comercio e Industrias",
    theme: "light",
    primaryLogo: "/partners/camcaroni-color.png",
    logoAlt: "Camcaroní - Cámara de Comercio e Industrias",
    logoClassName: "w-28 sm:w-32 h-20 sm:h-22",
    bgClass: "bg-white text-neutral-950 border-neutral-300/90 shadow-xl",
    textClass: "text-neutral-600",
    tagClass: "text-neutral-700",
    numberClass: "text-[#1F2B48]",
    glowColor: "rgba(230,168,37,0.45)",
    accentBar: "bg-[#E6A825]",
    leftKeyColor: "#FFB100",
    rightKeyColor: "#FFB100",
  },
  {
    id: "rumbapp",
    number: "05",
    tag: "Entretenimiento",
    name: "Rumbapp",
    role: "Ticketing Oficial & Experiencias",
    theme: "amber",
    primaryLogo: "/partners/rumbapp.png",
    logoAlt: "Rumbapp Logo",
    logoClassName: "w-32 sm:w-36 h-16 sm:h-18",
    bgClass: "bg-[#FFB100] text-neutral-950 border-amber-300/40",
    textClass: "text-neutral-950/85 font-medium",
    tagClass: "text-neutral-950/70",
    numberClass: "text-neutral-950",
    glowColor: "rgba(255,177,0,0.5)",
    accentBar: "bg-neutral-950",
    leftKeyColor: "#FFB100",
    rightKeyColor: "#004F9E",
  },
  {
    id: "troval",
    number: "06",
    tag: "Corporativo",
    name: "Troval Group",
    role: "Inversiones & Desarrollo Empresarial",
    theme: "light",
    primaryLogo: "/partners/troval-blanco.png",
    logoAlt: "Troval Group Logo",
    logoClassName: "w-40 sm:w-44 h-16 sm:h-18",
    bgClass: "bg-white text-neutral-950 border-neutral-300/90 shadow-xl",
    textClass: "text-neutral-600",
    tagClass: "text-neutral-700",
    numberClass: "text-[#004F9E]",
    glowColor: "rgba(255,255,255,0.45)",
    accentBar: "bg-[#004F9E]",
    leftKeyColor: "#004F9E",
    rightKeyColor: "#FFB100",
  },
  {
    id: "trocel",
    number: "07",
    tag: "Liderazgo",
    name: "Andersong Trocel",
    role: "Conferencista & Mentor de Negocios",
    theme: "dark",
    primaryLogo: "/partners/trocel-blanco.png",
    logoAlt: "Andersong Trocel Firma",
    logoClassName: "w-28 sm:w-32 h-18 sm:h-20",
    bgClass: "bg-[#0D0F14] text-white border-white/15",
    textClass: "text-muted-foreground",
    tagClass: "text-white/60",
    numberClass: "text-[#FFB100]",
    glowColor: "rgba(255,177,0,0.3)",
    accentBar: "bg-[#FFB100]",
    leftKeyColor: "#FFB100",
    rightKeyColor: "#004F9E",
  },
  {
    id: "lyon-incode",
    number: "08",
    tag: "Desarrollo Digital",
    name: "Lyon Incode",
    role: "Ingeniería de Software & Arquitectura",
    theme: "dark",
    primaryLogo: "/partners/lyon-incode.png",
    logoAlt: "Lyon Incode Logo",
    logoClassName: "w-36 sm:w-40 h-14 sm:h-16",
    bgClass: "bg-[#0D0F14] text-white border-white/15",
    textClass: "text-muted-foreground",
    tagClass: "text-white/60",
    numberClass: "text-accent",
    glowColor: "rgba(59,130,246,0.3)",
    accentBar: "bg-blue-400",
    leftKeyColor: "#004F9E",
    rightKeyColor: "#FFB100",
  },
  {
    id: "cta-partner",
    number: "09",
    tag: "Convocatoria",
    name: "¿Tu marca aquí?",
    role: "Postúlate como patrocinador oficial",
    theme: "dark",
    primaryLogo: "",
    logoAlt: "Convocatoria Patrocinios",
    logoClassName: "",
    bgClass: "bg-[#0D0F14]/80 hover:bg-[#0D0F14] text-white border border-dashed border-[#FFB100]/40",
    textClass: "text-muted-foreground",
    tagClass: "text-[#FFB100]",
    numberClass: "text-[#FFB100]",
    glowColor: "rgba(255,177,0,0.35)",
    accentBar: "bg-[#FFB100]",
    leftKeyColor: "#FFB100",
    isCta: true,
  },
];

// Duplicate list for infinite smooth seamless marquee loop
const infinitePartners = [...partnersList, ...partnersList];

export const ImparablesPartners: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredPartner, setHoveredPartner] = useState<string | null>(null);

  return (
    <section
      id="aliados"
      className="relative w-full py-24 md:py-32 bg-[#0066b0] overflow-hidden border-t border-white/10"
    >
      {/* Background Graphic: Nexus Lines Pattern */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <Image
          src="/backgrounds/nexus-lines-pattern.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-35"
        />
        {/* Soft Vignette / Gradient overlays for contrast and smooth section blend */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0066b0] via-[#0066b0]/60 to-[#0066b0]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0066b0]/80 via-transparent to-[#0066b0]/80" />
      </div>

      {/* Ambient glow highlights */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[350px] bg-[#004F9E]/20 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[300px] bg-[#FFB100]/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff04_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />

      <div className="relative z-10 w-full">
        {/* ================= SECTION HEADER ================= */}
        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="text-center max-w-3xl mx-auto px-6 mb-14 sm:mb-18"
        >
          <motion.div variants={fadeUpVariant} className="flex items-center justify-center gap-2 mb-4">
            <ImparablesInterlock size="sm" />
            <span className="text-xs font-sans font-bold tracking-[0.08em] text-[#FFB100] uppercase">
              ALIANZAS & EMPRESAS
            </span>
          </motion.div>

          <motion.h2 variants={fadeUpVariant} className="font-display font-extrabold text-3xl sm:text-5xl text-white leading-[1.1] tracking-tight mb-4">
            Marcas que impulsan la{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-amber-300 to-amber-500">
              visión Imparables
            </span>
          </motion.h2>

          <motion.p variants={fadeUpVariant} className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            Empresas, gremios y organizaciones que creen en el talento, la formación y el poder transformador de nuestras historias.
          </motion.p>
        </motion.div>

        {/* ================= CONTINUOUS AUTOPLAY SINGLE-ROW MARQUEE ================= */}
        <div className="relative w-full overflow-hidden py-4">
          {/* Edge Vignette Masks for Smooth Left/Right Transitions */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-r from-[#0066b0] to-transparent z-20" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-l from-[#0066b0] to-transparent z-20" />

          {/* Autoplay Row Track (Pauses cleanly on hover) */}
          <div className="animate-partner-marquee flex items-center gap-5 sm:gap-7">
            {infinitePartners.map((partner, index) => {
              const uniqueKey = `${partner.id}-${index}`;
              const isHovered = hoveredPartner === uniqueKey;

              if (partner.isCta) {
                return (
                  <div
                    key={uniqueKey}
                    onMouseEnter={() => setHoveredPartner(uniqueKey)}
                    onMouseLeave={() => setHoveredPartner(null)}
                    style={{
                      boxShadow: isHovered
                        ? "0 25px 50px -12px rgba(255,177,0,0.35)"
                        : "0 10px 30px -10px rgba(0,0,0,0.5)",
                    }}
                    className={`group relative flex flex-col justify-between p-6 sm:p-7 w-[270px] sm:w-[310px] aspect-square shrink-0 shadow-2xl overflow-hidden transition-all duration-300 cursor-pointer ${partner.bgClass}`}
                  >
                    {/* Left key tab to connect with previous tile */}
                    <div
                      style={{ backgroundColor: "#FFB100" }}
                      className="hidden lg:block absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-10 h-10 lg:w-11 lg:h-11 z-20 shadow-md border border-black/10 pointer-events-none"
                      aria-hidden="true"
                    />

                    {/* Header Row */}
                    <div className="relative z-10 flex items-center justify-between text-[10px] sm:text-xs font-sans font-bold tracking-widest uppercase text-[#FFB100]">
                      <span>{partner.tag}</span>
                      <span className="flex items-center gap-1 select-none">
                        <span>{partner.number}</span>
                        <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                          ↗
                        </span>
                      </span>
                    </div>

                    {/* Central CTA Content */}
                    <div className="relative z-10 my-auto flex flex-col items-center text-center py-2">
                      <div className="w-12 h-12 rounded-2xl bg-[#FFB100]/15 text-[#FFB100] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-lg shadow-[#FFB100]/10">
                        <Handshake size={26} weight="duotone" />
                      </div>
                      <h3 className="font-display font-extrabold text-base sm:text-lg text-white mb-1">
                        ¿Tu marca aquí?
                      </h3>
                      <p className="text-xs text-muted-foreground max-w-[190px] leading-relaxed">
                        Suma a tu empresa a la próxima gran experiencia.
                      </p>
                    </div>

                    {/* Bottom CTA Link */}
                    <div className="relative z-10 pt-1">
                      <div className="w-8 sm:w-10 h-0.5 sm:h-1 mt-2 mb-2 rounded-full bg-[#FFB100] group-hover:w-16 transition-all duration-300" />
                      <Link
                        href="/contacto"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FFB100] group-hover:underline"
                      >
                        <span>Postular mi empresa</span>
                        <ArrowUpRight size={14} weight="bold" />
                      </Link>
                    </div>
                  </div>
                );
              }

              return (
                <div
                  key={uniqueKey}
                  onMouseEnter={() => setHoveredPartner(uniqueKey)}
                  onMouseLeave={() => setHoveredPartner(null)}
                  style={{
                    boxShadow: isHovered
                      ? `0 25px 50px -12px ${partner.glowColor}`
                      : "0 10px 30px -10px rgba(0,0,0,0.5)",
                  }}
                  className={`group relative flex flex-col justify-between p-6 sm:p-7 w-[270px] sm:w-[310px] aspect-square shrink-0 border shadow-2xl overflow-hidden transition-all duration-300 cursor-pointer ${partner.bgClass}`}
                >
                  {/* INTERLOCKING GEOMETRIC KEYS (MATCHING IMPARABLESPLATFORM) */}
                  {partner.rightKeyColor && (
                    <div
                      style={{ backgroundColor: partner.rightKeyColor }}
                      className="hidden lg:block absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-10 h-10 lg:w-11 lg:h-11 z-20 shadow-md border border-black/10 pointer-events-none"
                      aria-hidden="true"
                    />
                  )}

                  {partner.leftKeyColor && (
                    <div
                      style={{ backgroundColor: partner.leftKeyColor }}
                      className="hidden lg:block absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-10 h-10 lg:w-11 lg:h-11 z-20 shadow-md border border-black/10 pointer-events-none"
                      aria-hidden="true"
                    />
                  )}

                  {/* Card Header Row */}
                  <div className="relative z-10 flex items-center justify-between gap-2">
                    <span
                      className={`text-[10px] sm:text-xs font-sans font-bold tracking-widest uppercase ${partner.tagClass}`}
                    >
                      {partner.tag}
                    </span>
                    <span
                      className={`text-[10px] sm:text-xs font-sans font-bold tracking-widest uppercase select-none flex items-center gap-1 ${partner.numberClass}`}
                    >
                      <span>{partner.number}</span>
                      <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                        ↗
                      </span>
                    </span>
                  </div>

                  {/* Central Logo with Smooth Hover Cross-fade */}
                  <div className="relative z-10 my-auto flex items-center justify-center w-full py-2">
                    <div className={`relative ${partner.logoClassName}`}>
                      {/* Primary Logo */}
                      <Image
                        src={partner.primaryLogo}
                        alt={partner.logoAlt}
                        fill
                        sizes="180px"
                        className={`object-contain transition-all duration-300 ${
                          partner.hoverLogo && isHovered ? "opacity-0 scale-95" : "opacity-100 scale-100"
                        } ${partner.theme === "amber" && partner.id === "rumbapp" ? "brightness-95 contrast-125" : ""}`}
                      />

                      {/* Optional Hover Alternate Logo */}
                      {partner.hoverLogo && (
                        <Image
                          src={partner.hoverLogo}
                          alt={`${partner.logoAlt} alterno`}
                          fill
                          sizes="180px"
                          className={`object-contain transition-all duration-300 absolute inset-0 ${
                            isHovered ? "opacity-100 scale-105" : "opacity-0 scale-95"
                          }`}
                        />
                      )}
                    </div>
                  </div>

                  {/* Card Bottom Meta Area */}
                  <div className="relative z-10 pt-1">
                    <h3 className="font-display font-extrabold text-base sm:text-lg tracking-tight leading-snug truncate">
                      {partner.name}
                    </h3>

                    <div
                      className={`w-8 sm:w-10 h-0.5 sm:h-1 mt-2 mb-2 rounded-full group-hover:w-16 transition-all duration-300 ${partner.accentBar}`}
                    />

                    <p className={`text-xs leading-relaxed truncate ${partner.textClass}`}>
                      {partner.role}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImparablesPartners;
