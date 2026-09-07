"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { SectionHeading } from "@/components/ui/shared/SectionHeading";
import { staggerContainer, fadeUpVariant } from "@/lib/motion/motion-variants";

interface AudienceProfile {
  id: string;
  category: string;
  title: string;
  description: string;
  imageSrc: string;
  tagline: string;
  highlights: string[];
}

const AUDIENCE_PROFILES: AudienceProfile[] = [
  {
    id: "empresarios",
    category: "Liderazgo & Dirección",
    title: "Empresarios y Directores",
    tagline: "Estrategia aplicada y retorno de inversión",
    description:
      "Líderes de negocios tradicionales y emergentes que buscan entender dónde aplicar Inteligencia Artificial para reducir costos operativos, automatizar flujos clave y tomar decisiones estratégicas sin tecnicismos innecesarios.",
    imageSrc: "/audience/audience-business-leaders.webp",
    highlights: ["Reducción de costos", "Modelos de IA", "Visión ejecutiva"],
  },
  {
    id: "desarrolladores",
    category: "Ingeniería & Producto",
    title: "Desarrolladores y Especialistas",
    tagline: "Arquitectura moderna y software global",
    description:
      "Programadores, arquitectos de software y diseñadores de producto que trabajan en remoto o para mercados internacionales, conectando con pares de alto nivel y proyectando el talento tecnológico regional.",
    imageSrc: "/audience/audience-developers.webp",
    highlights: ["Sistemas cloud", "Agentes autónomos", "Talento remoto"],
  },
  {
    id: "marcas",
    category: "Alianzas & Ecosistema",
    title: "Marcas y Patrocinantes",
    tagline: "Networking de alto impacto y posicionamiento",
    description:
      "Organizaciones, marcas e instituciones que entienden que el futuro del ecosistema productivo pasa por la innovación activa, la vinculación comercial directa y la presencia en el evento tecnológico más importante del año.",
    imageSrc: "/audience/audience-brands-ecosystem.webp",
    highlights: ["Presencia de marca", "Alianzas B2B", "Networking VIP"],
  },
];

export const Audience: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="audiencia"
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-[#06090f] border-t border-white/10 overflow-hidden"
    >
      {/* Rich multi-layer ambient background */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#004F9E]/28 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-[#0066CC]/18 blur-[160px] rounded-full" />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[300px] bg-[#FFB100]/15 blur-[140px] rounded-full" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[300px] bg-[#1a3a6b]/30 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#001a3d]/18 via-transparent to-[#FFB100]/5" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:28px_28px] opacity-60" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#06090f] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#06090f] to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <SectionHeading
          kicker="PERFIL DE ASISTENTES"
          title="Un punto de encuentro para quienes deciden avanzar"
          subtitle="No es un evento exclusivo para programadores: es un espacio diseñado para conectar la visión empresarial con las posibilidades del software moderno."
          align="center"
          className="mb-12 md:mb-16"
        />

        {/* Editorial Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {AUDIENCE_PROFILES.map((profile) => (
            <motion.div
              key={profile.id}
              variants={fadeUpVariant}
              className="flex flex-col"
            >
              {/* Image Card */}
              <div className="group relative aspect-[3/4] w-full rounded-2xl md:rounded-3xl overflow-hidden bg-[#0D1626]/60 border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
                <Image
                  src={profile.imageSrc}
                  alt={profile.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Gradient Vignette — deepens on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#060C16] via-[#060C16]/25 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300 pointer-events-none z-10" />

                {/* Bottom content */}
                <div className="absolute bottom-4 inset-x-4 z-20 flex flex-wrap gap-1.5 pointer-events-none">
                  {/* Category — hidden by default, revealed on hover */}
                  <div className="w-full opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <span className="text-[11px] font-sans font-bold text-[#FFB100] uppercase tracking-wider">
                      {profile.category}
                    </span>
                  </div>

                  {/* Tags — hidden by default, revealed on hover */}
                  {profile.highlights.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-sans font-medium text-white/85 bg-black/50 backdrop-blur-md px-2.5 py-0.5 rounded-md border border-white/10 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Typography Below Card */}
              <div className="mt-4 px-1 flex flex-col">
                <h3 className="font-display text-lg sm:text-xl font-bold text-white tracking-tight">
                  {profile.title}
                </h3>
                <span className="text-xs font-sans font-medium text-[#FFB100] mt-0.5">
                  {profile.tagline}
                </span>
                <p className="text-xs sm:text-sm text-neutral-400 mt-2 leading-relaxed">
                  {profile.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Audience;
