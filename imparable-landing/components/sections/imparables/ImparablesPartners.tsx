"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Handshake, CheckCircle, ArrowUpRight } from "@phosphor-icons/react";
import { fadeUpVariant, staggerContainer, scaleUpVariant } from "@/lib/motion/motion-variants";

const opportunities = [
  "Patrocinio y presencia estratégica",
  "Alianzas institucionales y gremiales",
  "Activaciones de marca en vivo",
  "Networking empresarial de alto nivel",
  "Experiencias corporativas a medida",
  "Formación en comunicación para equipos",
  "Integración de historias de marca",
];

export const ImparablesPartners: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="aliados"
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-background border-t border-border overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeading
          kicker="ALIANZAS & EMPRESAS"
          title="Creemos en lo que podemos construir juntos"
          subtitle="Cada alianza es una forma de decir: creemos en lo que están construyendo y en el talento de nuestra gente."
          align="center"
          className="mb-16"
        />

        {/* Featured Institutional Partners */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16">
          <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-background-elevated/70 border border-border">
            <div className="relative h-16 w-44 mb-4 filter contrast-125">
              <Image
                src="/partners/expo-camcaroni.png"
                alt="Cámara de Comercio del Municipio Caroní"
                fill
                className="object-contain"
              />
            </div>
            <h4 className="font-display font-bold text-base text-foreground mb-1">
              Camcaroní
            </h4>
            <p className="text-xs text-muted-foreground">
              Aliado institucional histórico que acompaña el desarrollo e impacto de las iniciativas Imparables.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-background-elevated/70 border border-border">
            <div className="h-16 w-44 flex items-center justify-center mb-4 text-accent font-display font-black text-xl tracking-tight">
              SEGUROS CARACAS
            </div>
            <h4 className="font-display font-bold text-base text-foreground mb-1">
              Seguros Caracas
            </h4>
            <p className="text-xs text-muted-foreground">
              Una de las aseguradoras líderes de Venezuela y patrocinante oficial del programa Voces Imparables.
            </p>
          </div>
        </div>

        {/* Imparables para marcas y empresas Banner */}
        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUpVariant}
          className="p-8 sm:p-12 rounded-3xl bg-white/[0.02] border border-white/10 max-w-4xl mx-auto"
        >
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="w-12 h-12 rounded-full bg-accent/15 text-accent flex items-center justify-center mx-auto mb-4">
              <Handshake size={24} weight="duotone" />
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
              Tu marca también puede ser parte de la experiencia
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              No buscamos simplemente colocar un logo en un banner. Buscamos crear escenarios donde las marcas tengan una voz genuina y algo real que aportar.
            </p>
          </div>

          {/* Checklist of opportunities */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-w-2xl mx-auto mb-8"
          >
            {opportunities.map((item) => (
              <div key={item} className="flex items-center gap-2.5 text-xs sm:text-sm text-foreground/90">
                <CheckCircle size={18} weight="fill" className="text-accent shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </motion.div>

          <div className="flex justify-center">
            <a href="mailto:alianzas@imparables.com?subject=Alianzas%20y%20Marcas%20Imparables">
              <Button
                variant="primary"
                size="md"
                icon={<ArrowUpRight size={16} weight="bold" />}
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                Quiero ser aliado o patrocinante
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
