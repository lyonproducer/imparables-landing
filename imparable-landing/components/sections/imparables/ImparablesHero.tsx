"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { Sparkle, ArrowUpRight, CaretDown, Lightning } from "@phosphor-icons/react";
import { fadeUpVariant, staggerContainer } from "@/lib/motion/motion-variants";

export const ImparablesHero: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="inicio"
      ref={containerRef}
      className="relative min-h-[100svh] flex flex-col justify-center items-center px-6 md:px-10 pt-28 pb-16 overflow-hidden bg-background"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-accent/15 blur-[160px] rounded-full" />
        <div className="absolute bottom-10 left-1/3 w-[500px] h-[300px] bg-primary/20 blur-[140px] rounded-full" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
      </div>

      {/* Floating Centered Glass Card */}
      <motion.div
        initial={shouldReduceMotion ? false : "hidden"}
        animate="visible"
        variants={staggerContainer}
        className="relative z-10 w-full max-w-4xl mx-auto my-auto"
      >
        <GlassCard className="text-center flex flex-col items-center gap-6 p-8 sm:p-12 border-accent/20">
          {/* Official Logo Banner */}
          <motion.div variants={fadeUpVariant} className="flex flex-col items-center gap-2">
            <div className="relative w-64 sm:w-80 h-16 sm:h-20">
              <Image
                src="/logo/imparables-summit-logo.png"
                alt="Imparables Business Summit"
                fill
                priority
                className="object-contain"
              />
            </div>
            <span className="text-xs font-mono font-medium text-accent tracking-[0.2em] uppercase">
              Plataforma oficial de experiencias y formación
            </span>
          </motion.div>

          {/* H1 Main Quote Headline */}
          <motion.h1
            variants={fadeUpVariant}
            className="font-display font-extrabold text-3xl sm:text-5xl md:text-5xl text-foreground leading-[1.18] tracking-tight max-w-3xl"
          >
            No importa dónde comienza tu historia.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-amber-300 to-accent">
              Importa lo que decides hacer con ella.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUpVariant}
            className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl font-normal"
          >
            Una plataforma de experiencias, formación y encuentros que conecta personas,
            ideas y oportunidades para impulsar el crecimiento personal y empresarial.
          </motion.p>

          {/* Pillars highlight row */}
          <motion.div
            variants={fadeUpVariant}
            className="flex flex-wrap items-center justify-center gap-2.5 pt-1 text-xs text-foreground/80 font-medium"
          >
            {["Inspirar", "Conectar", "Formar", "Experimentar"].map((pillar) => (
              <span
                key={pillar}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10"
              >
                <Lightning size={14} weight="fill" className="text-accent" />
                {pillar}
              </span>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            variants={fadeUpVariant}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full sm:w-auto"
          >
            <a href="#nosotros" className="w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                icon={<CaretDown size={18} weight="bold" />}
                className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90"
              >
                Conoce Imparables
              </Button>
            </a>

            <a href="#eventos" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                icon={<ArrowUpRight size={18} weight="bold" />}
                className="w-full sm:w-auto"
              >
                Nuestros formatos
              </Button>
            </a>

            {/* Direct Portal to Nexus World */}
            <Link href="/nexus" className="w-full sm:w-auto">
              <Button
                variant="ghost"
                size="lg"
                icon={<Sparkle size={18} weight="fill" className="text-accent" />}
                className="w-full sm:w-auto border border-primary/40 bg-primary/10 text-foreground hover:bg-primary/20"
              >
                Ver evento Nexus
              </Button>
            </Link>
          </motion.div>
        </GlassCard>
      </motion.div>

      {/* Subtle indicator to scroll */}
      <div className="relative z-10 pt-8 flex justify-center text-muted-foreground/60 animate-bounce">
        <a href="#nosotros" aria-label="Ir a sección Nosotros">
          <CaretDown size={24} weight="bold" />
        </a>
      </div>
    </section>
  );
};
