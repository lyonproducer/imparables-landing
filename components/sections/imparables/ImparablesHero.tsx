"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { LinesBackground } from "@/components/ui/LinesBackground";
import { ArrowUpRight, CaretDown } from "@phosphor-icons/react";
import { fadeUpVariant, staggerContainer } from "@/lib/motion/motion-variants";

import TextLoop from "@/components/ui/TextLoop";

export const ImparablesHero: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [activeFlyer, setActiveFlyer] = useState<"top" | "bottom">("bottom");

  return (
    <section
      id="inicio"
      ref={containerRef}
      className="relative min-h-[105vh] md:min-h-[110vh] flex flex-col justify-between px-6 md:px-12 lg:px-16 pt-36 md:pt-44 lg:pt-48 pb-32 md:pb-40 overflow-hidden bg-background"
    >
      {/* Vector SVG Track Lines Background & Ambient Gradients */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden">
        <div className="absolute inset-0 opacity-70">
          <LinesBackground />
        </div>
        {/* Ambient atmospheric gradients */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[650px] h-[450px] bg-[#004F9E]/20 blur-[180px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 w-[600px] h-[400px] bg-[#FFB100]/15 blur-[180px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      {/* Main Content Layout */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-8 sm:py-12">
        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          animate="visible"
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-14"
        >
          {/* ================= LEFT COLUMN: TYPOGRAPHY & CTAs ================= */}
          <div className="lg:col-span-6 flex flex-col items-start text-left gap-6 sm:gap-8">
            {/* Editorial H1 Headline */}
            <motion.h1
              variants={fadeUpVariant}
              className="font-display font-extrabold text-4xl sm:text-5xl md:text-5xl lg:text-[3.75rem] text-foreground leading-[1.08] tracking-tight"
            >
              No importa dónde comienza tu historia.{" "}
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-accent via-amber-300 to-amber-500">
                Importa lo que decides hacer con ella.
              </span>
            </motion.h1>

            {/* Subtitle description */}
            <motion.p
              variants={fadeUpVariant}
              className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl font-normal"
            >
              Una plataforma de experiencias, formación y encuentros que conecta personas,
              ideas y oportunidades para impulsar el crecimiento personal y empresarial.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              variants={fadeUpVariant}
              className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto"
            >
              <a href="#esencia" className="w-full sm:w-auto">
                <Button
                  variant="primary"
                  size="lg"
                  icon={<CaretDown size={18} weight="bold" />}
                  className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg shadow-accent/20 cursor-pointer"
                >
                  Conoce Imparables
                </Button>
              </a>

              <Link href="/nexus" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  icon={<ArrowUpRight size={18} weight="bold" />}
                  className="w-full sm:w-auto border-white/20 hover:bg-white/10 text-foreground cursor-pointer"
                >
                  Ver evento Nexus
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* ================= RIGHT COLUMN: INTERACTIVE 3D LAYER SWAP DUAL FLYERS ================= */}
          <div className="lg:col-span-6 relative w-full h-[520px] sm:h-[620px] md:h-[680px] lg:h-[660px] flex items-center justify-center">
            {/* Top-Right Flyer Card */}
            <motion.div
              variants={fadeUpVariant}
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      scale: activeFlyer === "top" ? 1.05 : 0.95,
                      rotate: activeFlyer === "top" ? 0 : 4,
                      zIndex: activeFlyer === "top" ? 30 : 10,
                      opacity: activeFlyer === "top" ? 1 : 0.8,
                    }
              }
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onMouseEnter={() => setActiveFlyer("top")}
              className={`absolute top-0 right-0 sm:right-2 w-[72%] sm:w-[68%] lg:w-[66%] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border transition-colors duration-300 bg-card/70 backdrop-blur-md group cursor-pointer ${
                activeFlyer === "top"
                  ? "border-accent/80 shadow-[0_20px_50px_rgba(255,177,0,0.25)]"
                  : "border-white/15"
              }`}
            >
              <Image
                src="/flyers/748161065_18598341691059362_4810160585673327155_n.jpg"
                alt="Imparables Flyer"
                fill
                sizes="(max-width: 768px) 65vw, 40vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
            </motion.div>

            {/* Bottom-Left Flyer Card */}
            <motion.div
              variants={fadeUpVariant}
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      scale: activeFlyer === "bottom" ? 1.05 : 0.95,
                      rotate: activeFlyer === "bottom" ? 0 : -4,
                      zIndex: activeFlyer === "bottom" ? 30 : 10,
                      opacity: activeFlyer === "bottom" ? 1 : 0.8,
                    }
              }
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onMouseEnter={() => setActiveFlyer("bottom")}
              className={`absolute bottom-0 left-0 sm:left-2 w-[76%] sm:w-[72%] lg:w-[70%] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border transition-colors duration-300 bg-card/80 backdrop-blur-lg group cursor-pointer ${
                activeFlyer === "bottom"
                  ? "border-accent/80 shadow-[0_20px_50px_rgba(0,79,158,0.35)]"
                  : "border-white/20"
              }`}
            >
              <Image
                src="/flyers/495451317_18496194547059362_1041185602152418121_n.webp"
                alt="Imparables Evento Flyer"
                fill
                sizes="(max-width: 768px) 70vw, 45vw"
                priority
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Subtle indicator to scroll */}
      <div className="relative z-10 pt-2 pb-6 flex justify-center text-muted-foreground/50 hover:text-accent transition-colors animate-bounce">
        <a href="#esencia" aria-label="Ir a sección Plataforma">
          <CaretDown size={24} weight="bold" />
        </a>
      </div>

      {/* Integrated Yellow Wave Text Loop Bottom Separator */}
      <div className="absolute -bottom-[20%] inset-x-0 z-20 overflow-hidden pointer-events-auto">
        <TextLoop
          text="CRECER ✦ AVANZAR ✦ TRANSFORMAR ✦ INSPIRAR ✦ LIDERAR ✦ PERSEVERAR ✦ TRIUNFAR"
          shape="wave"
          speed={55}
          direction="forward"
          separator="✦"
          curviness={18}
          fontSize={22}
          fontWeight={800}
          letterSpacing={1.5}
          uppercase
          color="#0E1015"
          ribbon
          ribbonColor="#FFB100"
          ribbonWidth={54}
          bottomFillColor="#F0F2F6"
          pauseOnHover
        />
      </div>
    </section>
  );
};
