"use client";

import React, { useRef } from "react";
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

  return (
    <section
      id="inicio"
      ref={containerRef}
      className="relative min-h-[100svh] lg:min-h-[108vh] xl:min-h-[112vh] flex flex-col justify-between px-5 sm:px-8 md:px-12 lg:px-16 pt-28 sm:pt-36 md:pt-40 lg:pt-44 xl:pt-48 pb-12 sm:pb-16 lg:pb-20 overflow-hidden bg-background"
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
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-4 sm:pt-4 pb-20 sm:pb-28 lg:pb-36 xl:pb-44">
        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          animate="visible"
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-14"
        >
          {/* ================= LEFT COLUMN: TYPOGRAPHY & CTAs ================= */}
          <div className="lg:col-span-6 flex flex-col items-start text-left gap-5 sm:gap-7 lg:gap-8 mt-2 sm:mt-6 lg:mt-4">
            {/* Editorial H1 Headline */}
            <motion.h1
              variants={fadeUpVariant}
              className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[3.85rem] xl:text-[4.2rem] text-foreground leading-[1.08] tracking-tight"
            >
              No importa dónde comienza tu historia.{" "}
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-accent via-amber-300 to-amber-500">
                Importa lo que decides hacer con ella.
              </span>
            </motion.h1>

            {/* Subtitle description */}
            <motion.p
              variants={fadeUpVariant}
              className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl font-normal"
            >
              Una plataforma de experiencias, formación y encuentros que conecta personas,
              ideas y oportunidades para impulsar el crecimiento personal y empresarial.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              variants={fadeUpVariant}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2 w-full sm:w-auto"
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

          {/* ================= RIGHT COLUMN: FOUNDER HERO PORTRAIT ================= */}
          <motion.div
            variants={fadeUpVariant}
            className="lg:col-span-6 relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[760px] xl:h-[840px] 2xl:h-[880px] flex items-end justify-center mt-6 lg:mt-0"
          >
            {/* Ambient Backlight Halo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[400px] lg:w-[500px] xl:w-[600px] h-[280px] sm:h-[400px] lg:h-[500px] xl:h-[600px] rounded-full bg-gradient-to-tr from-[#004F9E]/35 via-[#004F9E]/15 to-[#FFB100]/25 blur-[100px] pointer-events-none" />

            {/* Geometric Architectural Backdrop Frame */}
            <div className="absolute bottom-4 sm:bottom-6 w-[260px] sm:w-[360px] lg:w-[450px] xl:w-[500px] h-[320px] sm:h-[440px] lg:h-[580px] xl:h-[660px] rounded-[2.5rem] lg:rounded-[3.5rem] border border-white/10 bg-gradient-to-b from-white/[0.05] via-white/[0.01] to-transparent pointer-events-none shadow-2xl" />

            {/* Andersong Cutout Image */}
            <div className="relative w-full h-full max-w-[380px] sm:max-w-[480px] lg:max-w-[600px] xl:max-w-[680px] flex items-end justify-center">
              <Image
                src="/team/andersong-hero-cutout.png"
                alt="Andersong Trocel — Creador y Fundador de Imparables"
                fill
                priority
                sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 45vw"
                className="object-contain object-bottom select-none drop-shadow-[0_25px_45px_rgba(0,0,0,0.8)]"
              />

              {/* Bottom Gradient Fade to merge seamlessly with the floor */}
              <div className="absolute inset-x-0 bottom-0 h-20 sm:h-28 lg:h-36 bg-gradient-to-t from-background via-background/40 to-transparent pointer-events-none" />

              {/* Floating Editorial Badge */}
              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.6 }}
                className="absolute bottom-6 left-2 sm:left-4 z-20 px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-2xl bg-[#0E1015]/90 backdrop-blur-xl border border-white/15 shadow-2xl flex items-center gap-2.5 sm:gap-3"
              >
                <div>
                  <h4 className="font-display font-bold text-xs sm:text-sm text-white tracking-tight leading-tight">
                    Andersong Trocel
                  </h4>
                  <p className="text-[10px] sm:text-[11px] font-sans font-medium text-muted-foreground uppercase tracking-[0.08em]">
                    Creador de Imparables
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Integrated Yellow Wave Text Loop Bottom Separator */}
      <div className="absolute -bottom-1 sm:-bottom-2 md:-bottom-3 inset-x-0 z-20 overflow-hidden pointer-events-none">
        <TextLoop
          text="CRECER ✦ AVANZAR ✦ TRANSFORMAR ✦ INSPIRAR ✦ LIDERAR ✦ PERSEVERAR ✦ TRIUNFAR"
          shape="wave"
          speed={55}
          direction="forward"
          separator="✦"
          curviness={16}
          fontSize={18}
          fontWeight={800}
          letterSpacing={1.5}
          uppercase
          color="#0E1015"
          ribbon
          ribbonColor="#FFB100"
          ribbonWidth={44}
          bottomFillColor="#FFFFFF"
          pauseOnHover={false}
        />
      </div>
    </section>
  );
};
