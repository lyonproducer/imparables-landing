"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Sparkle, ArrowUpRight, Handshake } from "@phosphor-icons/react";
import { fadeUpVariant, staggerContainer } from "@/lib/motion/motion-variants";

interface PartnerItem {
  id: string;
  name: string;
  role: string;
  theme: "blue" | "amber" | "light" | "dark";
  puzzleKey?: "right-amber" | "left-blue" | "none";
  primaryLogo: string;
  hoverLogo?: string;
  logoAlt: string;
  logoClassName?: string;
}

const partnersList: PartnerItem[] = [
  {
    id: "seguros-caracas",
    name: "Seguros Caracas",
    role: "Aseguradora Líder · Patrocinante Oficial",
    theme: "blue",
    puzzleKey: "right-amber",
    primaryLogo: "/partners/IMG_20260621_185449_214.png",
    logoAlt: "Seguros Caracas Logo",
    logoClassName: "w-44 sm:w-48 h-20",
  },
  {
    id: "lagars",
    name: "Lagar's",
    role: "Gastronomía & Experiencias",
    theme: "dark",
    primaryLogo: "/partners/lagars.png",
    hoverLogo: "/partners/IMG_20260621_185449_358.png",
    logoAlt: "Lagar's Logo",
    logoClassName: "w-40 sm:w-44 h-20",
  },
  {
    id: "eprisma",
    name: "Eprisma",
    role: "Tecnología, Software & Estrategia",
    theme: "dark",
    primaryLogo: "/partners/eprisma-white.png",
    hoverLogo: "/partners/eprisma-green.png",
    logoAlt: "Eprisma Logo",
    logoClassName: "w-24 sm:w-28 h-20",
  },
  {
    id: "camcaroni",
    name: "Expo Empresarial Camcaroní",
    role: "Aliado Institucional & Gremial",
    theme: "light",
    primaryLogo: "/partners/expo-camcaroni.png",
    logoAlt: "Expo Empresarial Camcaroní Logo",
    logoClassName: "w-44 sm:w-52 h-20",
  },
  {
    id: "rumbapp",
    name: "Rumbapp",
    role: "Entretenimiento & Eventos",
    theme: "amber",
    puzzleKey: "left-blue",
    primaryLogo: "/partners/rumbapp.png",
    logoAlt: "Rumbapp Logo",
    logoClassName: "w-36 sm:w-40 h-20",
  },
];

export const ImparablesPartners: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredPartner, setHoveredPartner] = useState<string | null>(null);

  const getContainerStyles = (theme: PartnerItem["theme"]) => {
    switch (theme) {
      case "blue":
        return "bg-[#004F9E] text-white border-blue-400/30 shadow-blue-950/50";
      case "amber":
        return "bg-[#FFB100] text-neutral-950 border-amber-300/40 shadow-amber-950/40";
      case "light":
        return "bg-[#F4F4F6] text-neutral-900 border-white/80 shadow-black/15";
      case "dark":
      default:
        return "bg-[#0E1015] text-white border-white/15 shadow-black/60";
    }
  };

  return (
    <section
      id="aliados"
      className="relative w-full py-24 md:py-32 bg-[#030F1C] overflow-hidden border-t border-white/10"
    >
      {/* Ambient background lighting */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[350px] bg-[#004F9E]/12 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[300px] bg-[#FFB100]/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* ================= SECTION HEADER ================= */}
        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
        >
          <motion.div variants={fadeUpVariant} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/12 text-[#FFB100] text-xs font-mono font-bold tracking-[0.2em] uppercase mb-5">
            <Sparkle size={13} weight="fill" />
            <span>ALIANZAS & EMPRESAS</span>
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

        {/* ================= GEOMETRIC PARTNER CONTAINERS (MATCHING USER REFERENCE) ================= */}
        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto"
        >
          {partnersList.map((partner) => {
            const isHovered = hoveredPartner === partner.id;

            return (
              <motion.div
                key={partner.id}
                variants={fadeUpVariant}
                whileHover={shouldReduceMotion ? undefined : { y: -8, scale: 1.025 }}
                transition={{ type: "spring", stiffness: 350, damping: 22 }}
                onMouseEnter={() => setHoveredPartner(partner.id)}
                onMouseLeave={() => setHoveredPartner(null)}
                className={`group relative flex flex-col justify-between items-center p-6 sm:p-8 aspect-square rounded-3xl border shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden ${getContainerStyles(
                  partner.theme
                )}`}
              >
                {/* INTERLOCKING PUZZLE KEY ACCENTS (AS SEEN IN USER REFERENCE) */}
                {partner.puzzleKey === "right-amber" && (
                  <div
                    className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-[#FFB100] border border-black/10 shadow-md z-20 pointer-events-none rounded-sm"
                    aria-hidden="true"
                  />
                )}

                {partner.puzzleKey === "left-blue" && (
                  <div
                    className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-[#004F9E] border border-white/20 shadow-md z-20 pointer-events-none rounded-sm"
                    aria-hidden="true"
                  />
                )}

                {/* Top Badge Row */}
                <div className="w-full flex items-center justify-between text-[10px] sm:text-xs font-mono font-bold tracking-wider uppercase opacity-75">
                  <span>PARTNER</span>
                  <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                    ↗
                  </span>
                </div>

                {/* Central Logo Container with smooth hover cross-fade */}
                <div className="relative my-auto flex items-center justify-center w-full">
                  <div className={`relative ${partner.logoClassName}`}>
                    {/* Primary Logo */}
                    <Image
                      src={partner.primaryLogo}
                      alt={partner.logoAlt}
                      fill
                      sizes="(max-width: 768px) 160px, 200px"
                      className={`object-contain transition-all duration-300 ${
                        partner.hoverLogo && isHovered ? "opacity-0 scale-95" : "opacity-100 scale-100"
                      } ${partner.theme === "amber" && partner.id === "rumbapp" ? "brightness-95 contrast-125" : ""}`}
                    />

                    {/* Optional Hover Alternate Color Logo */}
                    {partner.hoverLogo && (
                      <Image
                        src={partner.hoverLogo}
                        alt={`${partner.logoAlt} alternate`}
                        fill
                        sizes="(max-width: 768px) 160px, 200px"
                        className={`object-contain transition-all duration-300 absolute inset-0 ${
                          isHovered ? "opacity-100 scale-105" : "opacity-0 scale-95"
                        }`}
                      />
                    )}
                  </div>
                </div>

                {/* Bottom Meta Label */}
                <div className="w-full text-center pt-2">
                  <h4 className="font-display font-bold text-xs sm:text-sm tracking-tight truncate">
                    {partner.name}
                  </h4>
                  <p className="text-[10px] sm:text-xs opacity-70 truncate font-normal">
                    {partner.role}
                  </p>
                </div>
              </motion.div>
            );
          })}

          {/* 6th Slot: Inviting Partnership Card */}
          <motion.div
            variants={fadeUpVariant}
            whileHover={shouldReduceMotion ? undefined : { y: -8, scale: 1.025 }}
            transition={{ type: "spring", stiffness: 350, damping: 22 }}
            className="group relative flex flex-col justify-between items-center p-6 sm:p-8 aspect-square rounded-3xl border border-dashed border-[#FFB100]/40 bg-[#0E1015]/60 hover:bg-[#0E1015] shadow-2xl transition-all duration-300 cursor-pointer text-center"
          >
            <div className="w-full flex items-center justify-between text-[10px] sm:text-xs font-mono font-bold tracking-wider uppercase text-[#FFB100]">
              <span>ALIANZAS 2026</span>
              <Sparkle size={14} weight="fill" />
            </div>

            <div className="my-auto flex flex-col items-center">
              <div className="w-12 h-12 rounded-2xl bg-[#FFB100]/15 text-[#FFB100] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-lg shadow-[#FFB100]/10">
                <Handshake size={24} weight="duotone" />
              </div>
              <h4 className="font-display font-extrabold text-base sm:text-lg text-white mb-1">
                ¿Tu marca aquí?
              </h4>
              <p className="text-[11px] sm:text-xs text-muted-foreground max-w-[180px] leading-relaxed">
                Conviértete en patrocinador oficial de nuestras próximas experiencias.
              </p>
            </div>

            <Link
              href="/imparables/contacto"
              className="inline-flex items-center gap-1 text-xs font-bold text-[#FFB100] group-hover:underline"
            >
              <span>Postular mi marca</span>
              <ArrowUpRight size={14} weight="bold" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImparablesPartners;
