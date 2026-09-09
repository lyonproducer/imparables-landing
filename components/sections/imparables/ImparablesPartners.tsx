"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
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
    tagClass: "text-blue-200/80",
    numberClass: "text-[#FFB100]",
    glowColor: "rgba(0,79,158,0.35)",
    accentBar: "bg-[#FFB100]",
    rightKeyColor: "#FFB100",
  },
  {
    id: "lagars",
    number: "02",
    tag: "Moda & Estilo",
    name: "Lagar's",
    role: "Indumentaria & Presencia de Marca",
    theme: "dark",
    primaryLogo: "/partners/lagars.png",
    hoverLogo: "/partners/IMG_20260621_185449_358.png",
    logoAlt: "Lagar's Logo",
    logoClassName: "w-36 sm:w-40 h-16 sm:h-18",
    bgClass: "bg-[#111111] text-white border-white/15",
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
    bgClass: "bg-[#111111] text-white border-white/15",
    textClass: "text-muted-foreground",
    tagClass: "text-white/60",
    numberClass: "text-[#FFB100]",
    glowColor: "rgba(34,197,94,0.3)",
    accentBar: "bg-emerald-400",
    leftKeyColor: "#004F9E",
    rightKeyColor: "#FFB100",
  },
  {
    id: "rumbapp",
    number: "04",
    tag: "Entretenimiento & App",
    name: "Rumbapp",
    role: "Ticketing & Plataforma Digital Oficial",
    theme: "amber",
    primaryLogo: "/partners/rumbapp.png",
    logoAlt: "Rumbapp Logo",
    logoClassName: "w-36 sm:w-40 h-16 sm:h-18",
    bgClass: "bg-[#FFB100] text-neutral-950 border-amber-300/40",
    textClass: "text-neutral-800",
    tagClass: "text-neutral-700",
    numberClass: "text-[#004F9E]",
    glowColor: "rgba(255,177,0,0.4)",
    accentBar: "bg-neutral-950",
    leftKeyColor: "#FFB100",
    rightKeyColor: "#004F9E",
  },
  {
    id: "andersong-trocel",
    number: "05",
    tag: "Fundador & Marca",
    name: "Andersong Trocel",
    role: "Firma Personal · Creador de Imparables",
    theme: "dark",
    primaryLogo: "/partners/trocel-blanco.png",
    logoAlt: "Andersong Trocel Firma",
    logoClassName: "w-28 sm:w-32 h-18 sm:h-20",
    bgClass: "bg-[#111111] text-white border-white/15",
    textClass: "text-muted-foreground",
    tagClass: "text-white/60",
    numberClass: "text-[#FFB100]",
    glowColor: "rgba(255,255,255,0.2)",
    accentBar: "bg-[#FFB100]",
    leftKeyColor: "#004F9E",
    rightKeyColor: "#FFB100",
  },
  {
    id: "lyon-incode",
    number: "06",
    tag: "Desarrollo Digital",
    name: "Lyon Incode",
    role: "Arquitectura Web & Experiencia de Usuario",
    theme: "dark",
    primaryLogo: "/partners/lyon-incode.png",
    logoAlt: "Lyon Incode Logo",
    logoClassName: "w-36 sm:w-40 h-14 sm:h-16",
    bgClass: "bg-[#111111] text-white border-white/15",
    textClass: "text-muted-foreground",
    tagClass: "text-white/60",
    numberClass: "text-accent",
    glowColor: "rgba(255,177,0,0.3)",
    accentBar: "bg-[#FFB100]",
    leftKeyColor: "#FFB100",
    rightKeyColor: "#004F9E",
  },
  {
    id: "mel-visual-designer",
    number: "07",
    tag: "Diseño Visual",
    name: "Mel Visual Designer",
    role: "Identidad Visual & Dirección de Arte",
    theme: "dark",
    primaryLogo: "/partners/mel-visual-designer.webp",
    logoAlt: "Mel Visual Designer Logo",
    logoClassName: "w-32 sm:w-36 h-14 sm:h-16",
    bgClass: "bg-[#111111] text-white border-white/15",
    textClass: "text-muted-foreground",
    tagClass: "text-white/60",
    numberClass: "text-[#FFB100]",
    glowColor: "rgba(255,255,255,0.25)",
    accentBar: "bg-[#FFB100]",
    leftKeyColor: "#004F9E",
    rightKeyColor: "#FFB100",
  },
  {
    id: "mundo-streaming",
    number: "08",
    tag: "Streaming & Medios",
    name: "Mundo Streaming",
    role: "Transmisión en Vivo & Cobertura Audiovisual",
    theme: "dark",
    primaryLogo: "/partners/mundo-streaming.webp",
    logoAlt: "Mundo Streaming Logo",
    logoClassName: "w-40 sm:w-44 h-14 sm:h-16",
    bgClass: "bg-[#111111] text-white border-white/15",
    textClass: "text-muted-foreground",
    tagClass: "text-white/60",
    numberClass: "text-[#FFB100]",
    glowColor: "rgba(230,0,126,0.35)",
    accentBar: "bg-[#E6007E]",
    leftKeyColor: "#FFB100",
    rightKeyColor: "#004F9E",
  },
  {
    id: "jmi",
    number: "09",
    tag: "Moda & Talento",
    name: "JMI International",
    role: "Escuela y Agencia de Modelos",
    theme: "dark",
    primaryLogo: "/partners/jmi.webp",
    logoAlt: "JMI Jhiraldi's Models International Logo",
    logoClassName: "w-40 sm:w-44 h-14 sm:h-16",
    bgClass: "bg-[#111111] text-white border-white/15",
    textClass: "text-muted-foreground",
    tagClass: "text-white/60",
    numberClass: "text-[#FFB100]",
    glowColor: "rgba(255,255,255,0.25)",
    accentBar: "bg-[#FFB100]",
    leftKeyColor: "#004F9E",
    rightKeyColor: "#FFB100",
  },
  {
    id: "eiker-melendez",
    number: "10",
    tag: "Audiovisual & Cine",
    name: "Eiker Meléndez",
    role: "Filmmaker Oficial · Cobertura & Producción Audiovisual",
    theme: "dark",
    primaryLogo: "/partners/eiker-melendez.webp",
    logoAlt: "Eiker Meléndez Filmmaker Logo",
    logoClassName: "w-36 sm:w-40 h-14 sm:h-16",
    bgClass: "bg-[#111111] text-white border-white/15",
    textClass: "text-muted-foreground",
    tagClass: "text-white/60",
    numberClass: "text-[#FFB100]",
    glowColor: "rgba(255,255,255,0.25)",
    accentBar: "bg-[#FFB100]",
    leftKeyColor: "#FFB100",
    rightKeyColor: "#004F9E",
  },
  {
    id: "cta-partner",
    number: "11",
    tag: "Convocatoria",
    name: "¿Tu marca aquí?",
    role: "Postúlate como patrocinador oficial",
    theme: "dark",
    primaryLogo: "",
    logoAlt: "Convocatoria Patrocinios",
    logoClassName: "",
    bgClass: "bg-[#111111]/80 hover:bg-[#111111] text-white border border-dashed border-[#FFB100]/40",
    textClass: "text-muted-foreground",
    tagClass: "text-[#FFB100]",
    numberClass: "text-[#FFB100]",
    glowColor: "rgba(255,177,0,0.25)",
    accentBar: "bg-[#FFB100]",
    leftKeyColor: "#004F9E",
    isCta: true,
  },
];

// Triplicate list for infinite smooth seamless virtual wrap in both directions
const infinitePartners = [...partnersList, ...partnersList, ...partnersList];

export const ImparablesPartners: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredPartner, setHoveredPartner] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const trackRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const hasMovedRef = useRef(false);
  const startXRef = useRef(0);
  const lastXRef = useRef(0);
  const currentXRef = useRef(0);
  const velocityRef = useRef(0);
  const lastTimeRef = useRef(0);
  const singleWidthRef = useRef(0);

  // Measure single copy width
  const updateMetrics = useCallback(() => {
    if (trackRef.current) {
      const totalWidth = trackRef.current.scrollWidth;
      const singleWidth = totalWidth / 3;
      singleWidthRef.current = singleWidth;
      if (currentXRef.current === 0 && singleWidth > 0) {
        currentXRef.current = -singleWidth;
        trackRef.current.style.transform = `translate3d(${currentXRef.current}px, 0, 0)`;
      }
    }
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    updateMetrics();
    const ro = new ResizeObserver(updateMetrics);
    ro.observe(track);

    let animationFrameId: number;
    let lastTime = performance.now();
    const baseSpeed = 0.045; // ~45px/s autoplay

    const animate = (time: number) => {
      const dt = Math.min(time - lastTime, 64);
      lastTime = time;

      const singleWidth = singleWidthRef.current;

      if (!isDraggingRef.current && singleWidth > 0) {
        // Residual flick momentum with smooth friction decay
        if (Math.abs(velocityRef.current) > 0.01) {
          currentXRef.current += velocityRef.current * dt;
          velocityRef.current *= Math.pow(0.92, dt / 16.6);
        } else {
          velocityRef.current = 0;
          // Normal autoplay (paused when hovered)
          const speed = hoveredPartner ? 0 : baseSpeed;
          currentXRef.current -= speed * dt;
        }

        // Seamless wrap in both directions
        while (currentXRef.current <= -2 * singleWidth) {
          currentXRef.current += singleWidth;
        }
        while (currentXRef.current > -singleWidth) {
          currentXRef.current -= singleWidth;
        }

        track.style.transform = `translate3d(${currentXRef.current}px, 0, 0)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    if (!shouldReduceMotion) {
      animationFrameId = requestAnimationFrame(animate);
    }

    return () => {
      ro.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, [hoveredPartner, shouldReduceMotion, updateMetrics]);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.button !== 0) return; // Only primary button
    isDraggingRef.current = true;
    hasMovedRef.current = false;
    startXRef.current = e.clientX;
    lastXRef.current = e.clientX;
    lastTimeRef.current = performance.now();
    velocityRef.current = 0;
    setIsDragging(true);

    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      // Ignore
    }
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;

    const now = performance.now();
    const dt = Math.max(now - lastTimeRef.current, 1);
    const deltaX = e.clientX - lastXRef.current;

    if (Math.abs(e.clientX - startXRef.current) > 5) {
      hasMovedRef.current = true;
    }

    currentXRef.current += deltaX;
    velocityRef.current = deltaX / dt;

    const singleWidth = singleWidthRef.current;
    if (singleWidth > 0) {
      while (currentXRef.current <= -2 * singleWidth) {
        currentXRef.current += singleWidth;
      }
      while (currentXRef.current > -singleWidth) {
        currentXRef.current -= singleWidth;
      }
    }

    if (trackRef.current) {
      trackRef.current.style.transform = `translate3d(${currentXRef.current}px, 0, 0)`;
    }

    lastXRef.current = e.clientX;
    lastTimeRef.current = now;
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    setIsDragging(false);

    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // Ignore
    }

    // Limit maximum flick velocity for natural inertia
    const maxVelocity = 1.2;
    velocityRef.current = Math.max(Math.min(velocityRef.current, maxVelocity), -maxVelocity);
  };

  return (
    <section
      id="aliados"
      className="relative w-full py-24 md:py-32 bg-[#0066b0] overflow-hidden border-t border-white/10"
    >
      {/* Background Graphic: Nexus Lines Pattern */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <Image
          src="/backgrounds/nexus-lines-pattern.webp"
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

        {/* ================= CONTINUOUS & DRAGGABLE MARQUEE ================= */}
        <div
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onClickCapture={(e) => {
            if (hasMovedRef.current) {
              e.preventDefault();
              e.stopPropagation();
            }
          }}
          className={`relative w-full overflow-hidden py-4 select-none touch-pan-y ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
        >
          {/* Edge Vignette Masks for Smooth Left/Right Transitions */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-r from-[#0066b0] to-transparent z-20" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-l from-[#0066b0] to-transparent z-20" />

          {/* Interactive Row Track */}
          <div
            ref={trackRef}
            className="flex items-center gap-5 sm:gap-7 w-max will-change-transform"
          >
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
                        draggable={false}
                        className={`object-contain transition-all duration-300 pointer-events-none select-none ${
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
                          draggable={false}
                          className={`object-contain transition-all duration-300 absolute inset-0 pointer-events-none select-none ${
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
