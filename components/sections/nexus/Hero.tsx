"use client";

import React, { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { GlassCard } from "@/components/ui/shared/GlassCard";
import { Button } from "@/components/ui/shared/Button";
import { Calendar, MapPin, ArrowUpRight, CaretDown } from "@phosphor-icons/react";
import { eventConfig } from "@/lib/content/event.config";
import { fadeUpVariant, staggerContainer } from "@/lib/motion/motion-variants";

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-[100svh] flex flex-col justify-center items-center px-6 md:px-10 pt-28 pb-16 overflow-hidden"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-accent/15 blur-[160px] rounded-full" />
        <div className="absolute bottom-10 left-1/3 w-[500px] h-[300px] bg-primary/20 blur-[140px] rounded-full" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
      </div>

      {/* Floating Centered Glass Card with Framer Motion entrance */}
      <motion.div
        initial={shouldReduceMotion ? false : "hidden"}
        animate="visible"
        variants={staggerContainer}
        className="relative z-10 w-full max-w-4xl mx-auto my-auto"
      >
        <GlassCard className="text-center flex flex-col items-center gap-6">
          {/* Kicker Pill */}
          <motion.div
            variants={fadeUpVariant}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/15 border border-accent/30 text-accent font-display font-bold text-xs tracking-[0.25em] uppercase"
          >
            <span>{eventConfig.kicker}</span>
          </motion.div>

          {/* H1 Main Headline */}
          <motion.h1
            variants={fadeUpVariant}
            className="font-display font-bold text-3xl sm:text-5xl md:text-6xl text-foreground leading-[1.12] tracking-tight max-w-3xl"
          >
            {eventConfig.headline}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUpVariant}
            className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl font-normal"
          >
            {eventConfig.subheadline}
          </motion.p>

          {/* Event Meta Information Row */}
          <motion.div
            variants={fadeUpVariant}
            className="flex flex-wrap items-center justify-center gap-3 md:gap-6 pt-2 text-xs sm:text-sm text-foreground/90"
          >
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/20 border border-white/10 backdrop-blur-xs">
              <Calendar size={18} weight="duotone" className="text-accent shrink-0" aria-hidden="true" />
              <span className="font-medium">{eventConfig.dateLabel}</span>
            </div>

            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/20 border border-white/10 backdrop-blur-xs">
              <MapPin size={18} weight="duotone" className="text-accent shrink-0" aria-hidden="true" />
              <span className="font-medium">{eventConfig.venueLabel}</span>
            </div>
          </motion.div>

          {/* Call To Action Buttons */}
          <motion.div
            variants={fadeUpVariant}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full sm:w-auto"
          >
            <a href="#registro" className="w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                icon={<ArrowUpRight size={18} weight="bold" />}
                className="w-full sm:w-auto"
              >
                Quiero asistir
              </Button>
            </a>

            <a href="#temas" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                icon={<CaretDown size={18} weight="bold" />}
                className="w-full sm:w-auto"
              >
                Conoce los temas
              </Button>
            </a>
          </motion.div>
        </GlassCard>
      </motion.div>

      {/* Subtle indicator to scroll */}
      <div className="relative z-10 pt-8 flex justify-center text-muted-foreground/60 animate-bounce">
        <a href="#sobre-el-evento" aria-label="Ir a sección Sobre el evento">
          <CaretDown size={24} weight="bold" />
        </a>
      </div>
    </section>
  );
};
