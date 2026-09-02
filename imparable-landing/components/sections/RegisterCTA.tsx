"use client";

import React, { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { RegisterForm } from "@/components/ui/RegisterForm";
import { LinesBackground } from "@/components/ui/LinesBackground";
import { Sparkle, ShieldCheck, Ticket } from "@phosphor-icons/react";
import { fadeUpVariant } from "@/lib/motion/motion-variants";

export const RegisterCTA: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="registro"
      ref={sectionRef}
      className="relative py-24 md:py-36 bg-background-elevated/50 border-t border-border overflow-hidden"
    >
      {/* Background abstract lines and glowing orbs */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-40">
        <LinesBackground className="w-full h-full" />
      </div>

      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/20 blur-[140px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-10">
        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUpVariant}
          className="text-center mb-10 flex flex-col items-center gap-3"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/15 border border-accent/30 text-accent font-mono text-xs font-semibold uppercase tracking-wider">
            <Sparkle size={14} weight="fill" aria-hidden="true" />
            <span>LISTA DE ESPERA EXCLUSIVA</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            El escenario también te está esperando.
          </h2>

          <p className="text-muted-foreground text-base sm:text-lg max-w-xl">
            Déjanos tus datos y te avisaremos de primero cuando revelemos la sede oficial,
            las fechas exactas y abramos los cupos para el evento.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 pt-2 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Ticket size={16} weight="duotone" className="text-accent" />
              Pre-registro sin costo
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck size={16} weight="duotone" className="text-accent" />
              Cupos prioritarios garantizados
            </span>
          </div>
        </motion.div>

        {/* The GlassCard containing the RegisterForm */}
        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={fadeUpVariant}
        >
          <GlassCard className="shadow-2xl border-white/20">
            <RegisterForm />
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};
