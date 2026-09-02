"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ImparablesInterlock } from "@/components/ui/imparables";
import { Handshake, CheckCircle, ArrowUpRight } from "@phosphor-icons/react";
import { fadeUpVariant, staggerContainer } from "@/lib/motion/motion-variants";

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
      className="relative py-24 md:py-32 bg-background border-t border-white/10 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none select-none bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <SectionHeading
          kicker="ALIANZAS & EMPRESAS"
          title="Creemos en lo que podemos construir juntos"
          subtitle="Cada alianza es una forma de decir: creemos en lo que están construyendo y en el talento de nuestra gente."
          align="center"
          className="mb-16"
        />

        {/* Featured Institutional Partners */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16">
          <motion.div
            variants={fadeUpVariant}
            whileHover={shouldReduceMotion ? undefined : { y: -4 }}
            className="flex flex-col items-center text-center p-8 rounded-3xl bg-[#0E1015]/90 border border-white/15 shadow-2xl backdrop-blur-xl imparables-corner-accent transition-all duration-300"
          >
            <div className="relative h-16 w-44 mb-4 filter contrast-125">
              <Image
                src="/partners/expo-camcaroni.png"
                alt="Cámara de Comercio del Municipio Caroní"
                fill
                className="object-contain"
              />
            </div>
            <h4 className="font-display font-extrabold text-lg text-foreground mb-1">
              Camcaroní
            </h4>
            <p className="text-xs text-muted-foreground max-w-xs leading-relaxed">
              Aliado institucional histórico que acompaña el desarrollo e impacto de las iniciativas Imparables.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUpVariant}
            whileHover={shouldReduceMotion ? undefined : { y: -4 }}
            className="flex flex-col items-center text-center p-8 rounded-3xl bg-gradient-to-br from-[#003875] to-[#001833] border border-blue-400/20 shadow-2xl shadow-blue-950/40 imparables-corner-accent transition-all duration-300"
          >
            <div className="h-16 w-44 flex items-center justify-center mb-4 text-[#FFB100] font-display font-black text-2xl tracking-tight">
              SEGUROS CARACAS
            </div>
            <h4 className="font-display font-extrabold text-lg text-white mb-1">
              Seguros Caracas
            </h4>
            <p className="text-xs text-blue-100/80 max-w-xs leading-relaxed">
              Una de las aseguradoras líderes de Venezuela y patrocinante oficial del programa Voces Imparables.
            </p>
          </motion.div>
        </div>

        {/* Imparables para marcas y empresas Banner */}
        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUpVariant}
          className="p-8 sm:p-12 rounded-3xl bg-[#0E1015]/95 border border-white/15 max-w-4xl mx-auto shadow-2xl imparables-corner-accent relative overflow-hidden"
        >
          {/* Ambient subtle glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

          <div className="text-center max-w-2xl mx-auto mb-8 relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-accent/20 border border-accent/30 text-accent flex items-center justify-center mx-auto mb-4 shadow-lg shadow-accent/10">
              <Handshake size={28} weight="duotone" />
            </div>
            <div className="flex items-center justify-center gap-2 mb-2">
              <ImparablesInterlock size="sm" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent">
                Propuesta de Valor
              </span>
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-extrabold text-foreground mb-3">
              Tu marca también puede ser parte de la experiencia
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              No buscamos simplemente colocar un logo en un banner. Buscamos crear escenarios donde las marcas tengan una voz genuina y algo real que aportar.
            </p>
          </div>

          {/* Checklist of opportunities */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-w-2xl mx-auto mb-8 relative z-10"
          >
            {opportunities.map((item) => (
              <div key={item} className="flex items-center gap-2.5 text-xs sm:text-sm text-foreground/90 bg-white/[0.03] px-3.5 py-2.5 rounded-xl border border-white/5">
                <CheckCircle size={18} weight="fill" className="text-accent shrink-0" />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </motion.div>

          <div className="flex justify-center relative z-10">
            <a href="mailto:alianzas@imparables.com?subject=Alianzas%20y%20Marcas%20Imparables">
              <Button
                variant="primary"
                size="md"
                icon={<ArrowUpRight size={16} weight="bold" />}
                className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg shadow-accent/20 cursor-pointer"
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
