"use client";

import React, { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Buildings, Code, Handshake } from "@phosphor-icons/react";
import { staggerContainer, fadeUpVariant } from "@/lib/motion/motion-variants";

export const Audience: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28 bg-background border-t border-border overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeading
          kicker="¿A QUIÉN ESTÁ DIRIGIDO?"
          title="Un punto de encuentro para quienes deciden avanzar"
          subtitle="No es un evento exclusivo para programadores: es un espacio pensado para conectar la visión empresarial con las posibilidades del software moderno."
          align="center"
          className="mb-12 md:mb-16"
        />

        <motion.div
          variants={staggerContainer}
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {/* Tarjeta 1: Empresarios y líderes */}
          <motion.div
            variants={fadeUpVariant}
            whileHover={shouldReduceMotion ? undefined : { y: -4 }}
            className="flex flex-col p-8 rounded-card bg-background-elevated/70 border border-border hover:border-primary/40 transition-colors duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-accent/15 text-accent border border-accent/25 flex items-center justify-center mb-6">
              <Buildings size={26} weight="duotone" aria-hidden="true" />
            </div>
            <h3 className="font-display text-xl font-bold text-foreground mb-3">
              Empresarios y Directores
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Líderes de negocios tradicionales o emergentes que buscan entender
              dónde aplicar Inteligencia Artificial para reducir costos,
              automatizar procesos y tomar mejores decisiones sin tecnicismos
              innecesarios.
            </p>
          </motion.div>

          {/* Tarjeta 2: Profesionales y Desarrolladores */}
          <motion.div
            variants={fadeUpVariant}
            whileHover={shouldReduceMotion ? undefined : { y: -4 }}
            className="flex flex-col p-8 rounded-card bg-background-elevated/70 border border-border hover:border-primary/40 transition-colors duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/25 text-primary-foreground border border-primary/40 flex items-center justify-center mb-6">
              <Code size={26} weight="duotone" aria-hidden="true" />
            </div>
            <h3 className="font-display text-xl font-bold text-foreground mb-3">
              Desarrolladores y Especialistas
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Programadores, diseñadores de producto y creadores de software que
              trabajan en la región o en remoto para mercados globales, deseando
              conectar con pares y proyectar su talento localmente.
            </p>
          </motion.div>

          {/* Tarjeta 3: Aliados y Patrocinantes */}
          <motion.div
            variants={fadeUpVariant}
            whileHover={shouldReduceMotion ? undefined : { y: -4 }}
            className="flex flex-col p-8 rounded-card bg-background-elevated/70 border border-border hover:border-primary/40 transition-colors duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-white/10 text-foreground border border-white/15 flex items-center justify-center mb-6">
              <Handshake size={26} weight="duotone" aria-hidden="true" />
            </div>
            <h3 className="font-display text-xl font-bold text-foreground mb-3">
              Marcas y Ecosistema
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Organizaciones e instituciones que comprenden que el desarrollo
              económico de nuestra región pasa por impulsar la innovación, la
              capacitación tecnológica y el networking de alto nivel.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
