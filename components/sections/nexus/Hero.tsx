"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/shared/Button";
import { ArrowUpRight, CaretDown } from "@phosphor-icons/react";
import { eventConfig } from "@/lib/content/event.config";
import { fadeUpVariant, staggerContainer } from "@/lib/motion/motion-variants";
import AdmitOneTicket from "@/components/ui/admit-one-ticket";
import WarpText from "@/components/ui/WarpText";
import EventCountdown from "@/components/ui/EventCountdown";
import Scanner from "@/components/ui/Scanner";

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const ticketContainerRef = useRef<HTMLDivElement>(null);
  const [ticketWidth, setTicketWidth] = useState<number>(640);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!ticketContainerRef.current) return;
    const updateSize = () => {
      if (ticketContainerRef.current) {
        const available = ticketContainerRef.current.offsetWidth;
        // Keep ticket responsive: 290px on mobile up to 660px on desktop
        const optimal = Math.min(Math.max(available - 24, 290), 660);
        setTicketWidth(optimal);
      }
    };
    updateSize();
    const ro = new ResizeObserver(updateSize);
    ro.observe(ticketContainerRef.current);
    return () => ro.disconnect();
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-[100svh] flex flex-col justify-center items-center px-4 sm:px-6 md:px-10 pt-28 sm:pt-32 pb-20 overflow-hidden"
    >
      {/* Dynamic Background: Scanner WebGL effect with Nexus Design System colors */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden">
        <Scanner
          color1="#004F9E"
          color2="#FFB100"
          color3="#FFFFFF"
          speed={0.45}
          sweepSpeed={0.22}
          sweepWidth={1.8}
          sweepFalloff={5.5}
          scale={1.4}
          frequency={2.2}
          ripple={0.2}
          bandDensity={12}
          lineSharpness={5.2}
          glow={0.24}
          scanDirection="vertical"
          colorSpread={0.65}
          brightness={0.9}
          contrast={1.2}
          softness={1.5}
          vignette={0.5}
          scanline={true}
          grain={true}
          grainIntensity={0.04}
          opacity={0.65}
          mouseInteraction={true}
          mouseRadius={0.5}
          mouseStrength={0.45}
        />
        {/* Soft radial and linear vignettes for contrast and seamless section blending */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/80 via-transparent to-[#080808]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#080808_95%)]" />
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[350px] bg-[#004F9E]/20 blur-[160px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[300px] bg-accent/15 blur-[160px] rounded-full" />
      </div>

      {/* Main Single-Column Stack */}
      <motion.div
        initial={shouldReduceMotion ? false : "hidden"}
        animate="visible"
        variants={staggerContainer}
        className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center gap-8 sm:gap-10 md:gap-12"
      >
        {/* ================= 1. PRIMERO: NEXUS (WARPTEXT LOGO EFFECT) ================= */}
        <motion.div variants={fadeUpVariant} className="flex flex-col items-center w-full">
          {/* WarpText NEXUS Header (Identical to nexus-logo.webp typography + WebGL glass refraction) */}
          <div className="w-full max-w-3xl h-28 sm:h-36 md:h-44 flex items-center justify-center">
            <WarpText
              text="NEXUS"
              color="#ffffff"
              warpStrength={0.08}
              warpScale={1.6}
              speed={0.3}
              pointerInfluence={0.5}
              pointerStrength={0.65}
              refraction={0.024}
              strokeWidth={3.5}
              ripple
              fontSize="clamp(3.8rem, 13vw, 8.5rem)"
              fontWeight={950}
              letterSpacing="0.08em"
              style={{ height: "100%", width: "100%" }}
            />
          </div>
        </motion.div>

        {/* ================= 2. SEGUNDO: EL TICKET (3D ADMIT ONE TICKET) ================= */}
        <motion.div
          variants={fadeUpVariant}
          ref={ticketContainerRef}
          className="relative w-full flex flex-col items-center justify-center group"
        >
          {/* Cyber Halo Glow behind Ticket */}
          <div className="absolute -inset-4 sm:-inset-10 bg-gradient-to-tr from-[#004F9E]/40 via-[#0284C7]/25 to-[#FFB100]/25 blur-3xl -z-10 rounded-full opacity-60 group-hover:opacity-95 transition-opacity duration-700 pointer-events-none" />

          <AdmitOneTicket
            name="EL FUTURO DE LAS EMPRESAS"
            presenter="IMPARABLES PRESENTA"
            event="IMPARABLES NEXUS 2026"
            venue="PUERTO ORDAZ, VZLA"
            dates="7 NOVIEMBRE 2026"
            stubText="ADMIT ONE · NEXUS"
            watermark="2026"
            width={ticketWidth}
            tilt={{
              maxTilt: 10,
              scale: 1.03,
              glare: 0.22,
            }}
          />
        </motion.div>

        {/* ================= 3. TERCERO: CUENTA REGRESIVA AL 7 DE NOVIEMBRE ================= */}
        <motion.div variants={fadeUpVariant} className="flex flex-col items-center gap-6 w-full pt-2">
          {/* Automatic Countdown Timer */}
          <EventCountdown targetDate={eventConfig.dateIso} />

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 w-full sm:w-auto">
            <a href="#registro" className="w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                icon={<ArrowUpRight size={18} weight="bold" />}
                className="w-full sm:w-auto shadow-lg shadow-blue-500/20 hover:shadow-blue-500/35 px-8"
              >
                Quiero asistir
              </Button>
            </a>

            <a href="#temas" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                icon={<CaretDown size={18} weight="bold" />}
                className="w-full sm:w-auto px-8"
              >
                Conoce los temas
              </Button>
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Subtle indicator to scroll */}
      <div className="relative z-10 pt-12 flex justify-center text-muted-foreground/60">
        <a href="#sobre-el-evento" aria-label="Ir a sección Sobre el evento">
          <CaretDown size={24} weight="bold" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
