"use client";

import React, { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImparablesLinesBackground, ImparablesInterlock } from "@/components/ui/imparables";
import { MicrophoneStage, Compass, Lightbulb, Target, UsersThree, RocketLaunch, Quotes } from "@phosphor-icons/react";
import { fadeUpVariant, staggerContainer, scaleUpVariant } from "@/lib/motion/motion-variants";

const methodSteps = [
  {
    num: "01",
    name: "Descubre",
    desc: "Identifica aquello que quieres desarrollar, comunicar o transformar.",
    icon: Compass,
  },
  {
    num: "02",
    name: "Aprende",
    desc: "Obtén herramientas prácticas, conocimientos y nuevas perspectivas.",
    icon: Lightbulb,
  },
  {
    num: "03",
    name: "Practica",
    desc: "Lleva lo aprendido a situaciones reales, dinámicas y retos concretos.",
    icon: Target,
  },
  {
    num: "04",
    name: "Comparte",
    desc: "Encuentra personas con historias, ideas y objetivos diferentes para potenciarte.",
    icon: UsersThree,
  },
  {
    num: "05",
    name: "Atrévete",
    desc: "Da el paso decisivo que antes parecía demasiado grande o lejano.",
    icon: RocketLaunch,
  },
];

export const ImparablesAbout: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="nosotros"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-background border-t border-white/10 overflow-hidden"
    >
      <ImparablesLinesBackground opacity={0.25} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <SectionHeading
          kicker="UNA MARCA QUE NACIÓ PARA IMPULSAR"
          title="Una idea que sigue creciendo"
          subtitle="Imparables nació en 2024 con una convicción clara: recordarle a las personas que siempre existe una posibilidad real de avanzar y transformar su entorno."
          align="center"
          className="mb-16"
        />

        {/* Founder Spotlight: Andersong Trocel */}
        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUpVariant}
          className="mb-20"
        >
          <div className="relative p-8 md:p-12 rounded-3xl bg-[#0E1015]/90 border border-white/15 shadow-2xl backdrop-blur-xl imparables-corner-accent overflow-hidden">
            {/* Ambient subtle glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#004F9E]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="w-20 h-20 rounded-2xl bg-accent/20 border border-accent/30 text-accent flex items-center justify-center mb-5 shadow-lg shadow-accent/10">
                  <MicrophoneStage size={40} weight="duotone" aria-hidden="true" />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <ImparablesInterlock size="sm" />
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent">
                    Creador & Director General
                  </span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-extrabold text-foreground">
                  Andersong Trocel
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Comunicador, locutor y director creativo con más de 15 años de trayectoria.
                </p>
              </div>

              <div className="lg:col-span-8 flex flex-col gap-5 text-muted-foreground text-sm sm:text-base leading-relaxed border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-8">
                <p>
                  Después de años trabajando frente a micrófonos, escenarios, marcas y audiencias, nació la necesidad de crear un espacio donde la comunicación pudiera convertirse en algo más: una herramienta viva para conectar personas, contar historias y abrir oportunidades.
                </p>
                <p>
                  Su experiencia frente a diferentes audiencias lo llevó a entender que comunicar no significa únicamente hablar: <strong className="text-foreground font-semibold">comunicar es conectar</strong>. Desde esa visión nació Imparables: una plataforma donde las personas encuentran escenarios para aprender, compartir y atreverse.
                </p>

                {/* Quote Box */}
                <div className="relative mt-2 p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-start gap-3.5">
                  <Quotes size={24} weight="fill" className="text-accent shrink-0 mt-1" />
                  <blockquote className="text-foreground font-medium italic text-sm md:text-base">
                    “No queremos decirle a las personas que todo será fácil. Queremos recordarles que siempre pueden hacer algo.”
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* El Método Imparable */}
        <div className="mb-16 text-center">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent block mb-2">
            NUESTRA METODOLOGÍA
          </span>
          <h3 className="font-display text-2xl md:text-4xl font-extrabold text-foreground mb-4">
            El Método Imparable
          </h3>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
            Aprender. Practicar. Exponer. Transformar. Las habilidades no se desarrollan únicamente escuchando; nuestras experiencias llevan de la inspiración a la acción.
          </p>
        </div>

        {/* 5 Steps Grid */}
        <motion.div
          variants={staggerContainer}
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5"
        >
          {methodSteps.map((step) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                variants={scaleUpVariant}
                whileHover={shouldReduceMotion ? undefined : { y: -6 }}
                className="flex flex-col p-6 rounded-2xl bg-[#0E1015]/90 border border-white/10 hover:border-accent/40 shadow-xl transition-all duration-300 imparables-corner-accent"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/15 text-accent flex items-center justify-center">
                    <Icon size={22} weight="duotone" />
                  </div>
                  <span className="font-mono text-xs font-bold text-accent">
                    {step.num}
                  </span>
                </div>
                <h4 className="font-display text-lg font-bold text-foreground mb-2">
                  {step.name}
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
