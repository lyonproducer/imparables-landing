"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Calendar, ArrowUpRight, Sparkle, Trophy, Users, Megaphone, TrendUp } from "@phosphor-icons/react";
import { fadeUpVariant, staggerContainer, scaleUpVariant } from "@/lib/motion/motion-variants";

export const ImparablesEvents: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="eventos"
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-background-elevated/40 border-t border-border overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeading
          kicker="NUESTROS FORMATOS & TRAYECTORIA"
          title="Diferentes escenarios. Una misma esencia."
          subtitle="Desde 2024 creamos experiencias diseñadas para abordar conversaciones clave: inspiración, cultura de negocios, oratoria y tecnología."
          align="center"
          className="mb-16"
        />

        {/* Featured Spotlight Card: IMPARABLES NEXUS */}
        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUpVariant}
          className="mb-12 relative overflow-hidden rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-primary/30 via-background-elevated to-background-elevated border border-primary/40 shadow-2xl"
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 relative z-10">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent/15 border border-accent/30 text-accent font-mono text-xs font-bold uppercase mb-4 tracking-wider">
                <Sparkle size={14} weight="fill" />
                <span>NUEVO FORMATO · NOVIEMBRE 2026</span>
              </div>
              <h3 className="font-display font-extrabold text-2xl sm:text-4xl text-foreground mb-3">
                Imparables Nexus: El futuro ya está pasando
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-2xl mb-6">
                Un encuentro de alto nivel dedicado a la Inteligencia Artificial, automatización de procesos y plataformas digitales que están transformando la productividad de las empresas en Puerto Ordaz.
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm font-medium text-foreground/90">
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                  <Calendar size={16} weight="duotone" className="text-accent" />
                  Primeros días de noviembre 2026
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                  <Trophy size={16} weight="duotone" className="text-accent" />
                  Especialistas en IA, software & legaltech
                </span>
              </div>
            </div>

            <div className="shrink-0 w-full lg:w-auto">
              <Link href="/nexus">
                <Button
                  variant="primary"
                  size="lg"
                  icon={<ArrowUpRight size={18} weight="bold" />}
                  className="w-full lg:w-auto shadow-lg shadow-primary/25"
                >
                  Explorar mundo Nexus
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* 3 Formatos Columns */}
        <motion.div
          variants={staggerContainer}
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {/* Formato 1: Conferencias 2024 */}
          <motion.div
            variants={scaleUpVariant}
            whileHover={shouldReduceMotion ? undefined : { y: -4 }}
            className="flex flex-col p-8 rounded-[var(--radius-card)] bg-background-elevated/70 border border-border hover:border-accent/40 transition-colors duration-300"
          >
            <div className="flex items-center justify-between mb-5">
              <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-accent/15 text-accent border border-accent/20">
                2024 · EL COMIENZO
              </span>
              <Megaphone size={22} weight="duotone" className="text-accent" />
            </div>
            <h4 className="font-display text-xl font-bold text-foreground mb-2">
              Conferencias Imparables
            </h4>
            <p className="text-xs font-serif italic text-accent/90 mb-3">
              “Aunque nada cambie, si yo cambio, todo cambia.”
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Dos fechas que marcaron el inicio. Una invitación a mirar hacia adentro con ponentes e invitados especiales desde Colombia y Estados Unidos, compartiendo cómo la determinación abre caminos reales.
            </p>
          </motion.div>

          {/* Formato 2: Business Summit 2025 */}
          <motion.div
            variants={scaleUpVariant}
            whileHover={shouldReduceMotion ? undefined : { y: -4 }}
            className="flex flex-col p-8 rounded-[var(--radius-card)] bg-background-elevated/70 border border-border hover:border-accent/40 transition-colors duration-300"
          >
            <div className="flex items-center justify-between mb-5">
              <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-primary/25 text-foreground border border-primary/40">
                2025 · CULTURA DE NEGOCIOS
              </span>
              <TrendUp size={22} weight="duotone" className="text-accent" />
            </div>
            <h4 className="font-display text-xl font-bold text-foreground mb-2">
              Imparables Business Summit
            </h4>
            <p className="text-xs font-serif italic text-accent/90 mb-3">
              “Detrás de cada marca hay una historia.”
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Inspirado en grandes charlas de ideas. Más de 20 marcas subieron al escenario para conversar con Andersong Trocel sobre el sueño original, los obstáculos superados y el crecimiento de sus empresas.
            </p>
          </motion.div>

          {/* Formato 3: Voces Imparables 2026 */}
          <motion.div
            variants={scaleUpVariant}
            whileHover={shouldReduceMotion ? undefined : { y: -4 }}
            className="flex flex-col p-8 rounded-[var(--radius-card)] bg-background-elevated/70 border border-border hover:border-accent/40 transition-colors duration-300"
          >
            <div className="flex items-center justify-between mb-5">
              <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-accent/15 text-accent border border-accent/20">
                2026 · FORMACIÓN
              </span>
              <Users size={22} weight="duotone" className="text-accent" />
            </div>
            <h4 className="font-display text-xl font-bold text-foreground mb-2">
              Voces Imparables
            </h4>
            <p className="text-xs font-serif italic text-accent/90 mb-3">
              “Encuentra tu voz. Conecta. Inspira.”
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Programa intensivo de oratoria, storytelling y liderazgo. Dos cohortes: 12-17 años y 18+ años. El aprendizaje culmina en vivo frente al público en el escenario.
            </p>
            <div className="mt-auto pt-3 border-t border-white/10 text-xs font-semibold text-accent flex items-center justify-between">
              <span>Gran Cierre en Vivo:</span>
              <span className="font-mono">24 de Octubre</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
