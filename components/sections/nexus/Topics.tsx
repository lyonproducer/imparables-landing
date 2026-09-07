"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { SectionHeading } from "@/components/ui/shared/SectionHeading";
import { ArrowUpRight, Sparkle } from "@phosphor-icons/react";
import { staggerContainer, fadeUpVariant } from "@/lib/motion/motion-variants";

interface TextTopic {
  type: "text";
  id: string;
  category: string;
  title: string;
  tagline: string;
  description: string;
  topics: { label: string }[];
  ctaText: string;
  ctaHref: string;
}

interface ImageTopic {
  type: "image";
  id: string;
  title: string;
  caption: string;
  imageSrc: string;
}

type TopicGridItem = TextTopic | ImageTopic;

const topicItems: TopicGridItem[] = [
  // ================= ROW 1 (Checkerboard: Text, Image, Text, Image) =================
  {
    type: "text",
    id: "ia-automatizacion",
    category: "Inteligencia Artificial",
    title: "Inteligencia Artificial & Automatización",
    tagline: "Modelos, agentes y pipelines operativos",
    description:
      "Modelos generativos, agentes autónomos y optimización de flujos operativos para multiplicar la productividad empresarial real sin fricción técnica.",
    topics: [
      { label: "Inteligencia Artificial" },
      { label: "Automatización de procesos" },
    ],
    ctaText: "Ver temas en agenda",
    ctaHref: "#agenda",
  },
  {
    type: "image",
    id: "img-ia-neural",
    title: "Artefacto Neural & Algoritmos",
    caption: "Redes neuronales y agentes",
    imageSrc: "/topics/topic-ai-neural.webp",
  },
  {
    type: "text",
    id: "sistemas-cloud",
    category: "Infraestructura Cloud",
    title: "Sistemas Cloud & Aplicaciones",
    tagline: "Infraestructuras resilientes y producto digital",
    description:
      "Arquitecturas escalables de software, computación distribuida y desarrollo moderno de aplicaciones web, mobile y multiplataforma para tracción.",
    topics: [
      { label: "Sistemas y plataformas" },
      { label: "Aplicaciones modernas" },
    ],
    ctaText: "Ver temas en agenda",
    ctaHref: "#agenda",
  },
  {
    type: "image",
    id: "img-cloud-polyhedral",
    title: "Escultura de Datos & Estructuras Resilientes",
    caption: "Arquitecturas cloud y software",
    imageSrc: "/topics/topic-cloud-systems.webp",
  },

  // ================= ROW 2 (Checkerboard: Image, Text, Image, Text) =================
  {
    type: "image",
    id: "img-remote-legal",
    title: "Editorial Digital & Sistemas Normativos",
    caption: "Trabajo global y marco legal",
    imageSrc: "/topics/topic-remote-legal.webp",
  },
  {
    type: "text",
    id: "remoto-legal",
    category: "Talento & Legalidad",
    title: "Trabajo Remoto & Marco Legal Digital",
    tagline: "Talento sin fronteras y blindaje de propiedad",
    description:
      "Cultura distribuida exportando valor a escala internacional, contratos de propiedad intelectual, gobernanza y marco regulatorio en la era de la IA.",
    topics: [
      { label: "Trabajo remoto global" },
      { label: "Aspectos legales y gobernanza" },
    ],
    ctaText: "Ver temas en agenda",
    ctaHref: "#agenda",
  },
  {
    type: "image",
    id: "img-gaming-leaf",
    title: "Micro-circuitos & Innovación Orgánica",
    caption: "Gaming y nuevas industrias",
    imageSrc: "/topics/topic-gaming-innovation.webp",
  },
  {
    type: "text",
    id: "gaming-innovacion",
    category: "Nuevas Economías",
    title: "Nuevas Industrias & Crecimiento",
    tagline: "Videojuegos, monetización y expansión",
    description:
      "Economías creativas, experiencias interactivas inmersivas, validación de producto y estrategias de tracción comercial y modelos de negocio de futuro.",
    topics: [
      { label: "Videojuegos e industrias 3D" },
      { label: "Innovación y crecimiento" },
    ],
    ctaText: "Ver temas en agenda",
    ctaHref: "#agenda",
  },
];

export const Topics: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="temas"
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-[#06090f] border-t border-white/10 overflow-hidden"
    >
      {/* Rich multi-layer ambient background */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#004F9E]/28 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-[#0066CC]/18 blur-[160px] rounded-full" />
        <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[300px] bg-[#FFB100]/15 blur-[140px] rounded-full" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[300px] bg-[#1a3a6b]/30 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#001a3d]/18 via-transparent to-[#FFB100]/5" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:28px_28px] opacity-60" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#06090f] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#06090f] to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <SectionHeading
          kicker="EJES TEMÁTICOS"
          title="Lo que abordaremos en Imparables Nexus"
          subtitle="Una mirada práctica a las tecnologías, herramientas y enfoques estratégicos que están redefiniendo el ecosistema productivo."
          align="center"
          className="mb-12 md:mb-16"
        />

        {/* 2x4 Alternating Checkerboard Grid */}
        <motion.div
          variants={staggerContainer}
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {topicItems.map((item) => {
            if (item.type === "text") {
              return (
                <motion.div
                  key={item.id}
                  variants={fadeUpVariant}
                  whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                  className="group relative flex flex-col justify-between p-4 rounded-2xl md:rounded-3xl bg-white/[0.04] backdrop-blur-3xl backdrop-saturate-200 border border-white/[0.12] hover:border-[#004F9E]/60 transition-all duration-300 shadow-[0_8px_32px_0_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.04)_inset] hover:shadow-[0_12px_48px_0_rgba(0,79,158,0.25)] aspect-square overflow-hidden"
                >
                  {/* Glassmorphism inner layers */}
                  <div className="absolute inset-0 rounded-2xl md:rounded-3xl overflow-hidden pointer-events-none">
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                    <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-white/20 via-white/5 to-transparent" />
                    <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-[#004F9E]/10 to-transparent" />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,rgba(255,255,255,0.05)_0%,transparent_65%)]" />
                    <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#FFB100]/25 to-transparent" />
                  </div>

                  {/* Top Content */}
                  <div>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-white group-hover:text-cyan-200 transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-400 mt-2 leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom Content: Subtopics & CTA */}
                  <div className="mt-3 pt-3 border-t border-white/10 flex flex-col gap-2.5">
                    <div className="flex flex-wrap gap-1.5">
                      {item.topics.map((t) => (
                        <span
                          key={t.label}
                          className="text-xs font-sans font-medium text-neutral-300 bg-white/[0.06] border border-white/10 px-2.5 py-1 rounded-lg backdrop-blur-md"
                        >
                          {t.label}
                        </span>
                      ))}
                    </div>

                    <a
                      href={item.ctaHref}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-white group-hover:text-[#FFB100] transition-colors pt-0.5"
                    >
                      <span>{item.ctaText}</span>
                      <ArrowUpRight
                        size={14}
                        weight="bold"
                        className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                      />
                    </a>
                  </div>
                </motion.div>
              );
            }

            // Image Item
            return (
              <motion.div
                key={item.id}
                variants={fadeUpVariant}
                whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                className="group relative aspect-square rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 hover:border-[#004F9E]/70 transition-all duration-500 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] hover:shadow-[0_0_35px_rgba(0,79,158,0.25)] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:z-20"
              >
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-75 group-hover:opacity-90 transition-opacity duration-300 flex items-end p-4 sm:p-5 z-10">
                  <span className="text-xs font-sans font-medium text-white/90 bg-black/40 backdrop-blur-xl px-3.5 py-1.5 rounded-full border border-white/15 shadow-sm">
                    {item.caption}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
