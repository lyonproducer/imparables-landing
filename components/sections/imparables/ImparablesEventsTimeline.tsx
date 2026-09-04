"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ImparablesInterlock } from "@/components/ui/imparables";
import {
  CaretDown,
  ArrowUpRight,
  Calendar,
  CheckCircle,
  X,
  ArrowsOutSimple,
} from "@phosphor-icons/react";

interface GalleryPhoto {
  index: string;
  src: string;
  title: string;
  category: string;
  aspect: "landscape" | "portrait";
}

interface TimelinePart {
  id: string;
  badge: string;
  title: string;
  description: string;
  gallery: GalleryPhoto[];
}

interface TimelineEvent {
  id: string;
  number: string;
  year: string;
  tag: string;
  headline: string;
  shortSummary: string;
  rotation: string;
  accentColor: string;
  parts?: TimelinePart[];
  fullDescription?: string;
  highlights?: string[];
  generations?: {
    age: string;
    description: string;
  }[];
  nexusInfo?: {
    topics: string[];
    date: string;
    link: string;
  };
  flyerSrc?: string;
  gallery?: GalleryPhoto[];
}

const timelineData: TimelineEvent[] = [
  {
    id: "2024-el-comienzo",
    number: "01",
    year: "2024",
    tag: "EL COMIENZO",
    headline: "“AUNQUE NADA CAMBIE, SI YO CAMBIO, TODO CAMBIA.”",
    shortSummary:
      "En 2024 comenzó esta historia con dos fechas memorables. Una invitación a mirar hacia adentro y descubrir que el primer cambio que necesitamos no está afuera.",
    rotation: "rotate-[-0.8deg]",
    accentColor: "#004F9E",
    flyerSrc: "/flyers/464917687_18459870139059362_6820635933111071404_n.webp",
    parts: [
      {
        id: "2024-parte-1",
        badge: "PARTE 1 · PRIMERA FECHA",
        title: "La primera fecha: El despertar de una convicción",
        description:
          "En 2024 comenzó esta historia. Creamos dos fechas de una conferencia que nació con una intención clara: recordarnos que no siempre podemos controlar lo que ocurre a nuestro alrededor, pero sí podemos decidir qué hacemos con aquello que nos sucede.\n\n'Aunque nada cambie, si yo cambio, todo cambia' fue una invitación a mirar hacia adentro y descubrir que muchas veces el primer cambio que necesitamos no está afuera.",
        gallery: [
          {
            index: "01",
            src: "/events/imparables-1/IMG_9903.webp",
            title: "El primer escenario",
            category: "CONFERENCIA PARTE 1",
            aspect: "landscape",
          },
          {
            index: "02",
            src: "/events/imparables-1/ig-01.webp",
            title: "Comunidad conectada",
            category: "HISTORIAS QUE INSPIRAN",
            aspect: "portrait",
          },
          {
            index: "03",
            src: "/events/imparables-1/IMG_9870.webp",
            title: "Voces y propósito",
            category: "APERTURA 2024",
            aspect: "landscape",
          },
          {
            index: "04",
            src: "/events/imparables-1/IMG_9908.webp",
            title: "Energía compartida",
            category: "EXPERIENCIA EN VIVO",
            aspect: "landscape",
          },
        ],
      },
      {
        id: "2024-parte-2",
        badge: "PARTE 2 · SEGUNDA FECHA",
        title: "La segunda fecha: Conexión sin fronteras",
        description:
          "Para estas experiencias contamos con invitados especiales desde Colombia y Estados Unidos, quienes compartieron pequeños mensajes contando sus historias, sus procesos y cómo lograron construir el camino que hoy los llevó a convertirse en dos venezolanos que nos llenan de orgullo.\n\nPorque a veces una historia puede convertirse en el empujón que alguien necesitaba.",
        gallery: [
          {
            index: "01",
            src: "/events/imparables-2/IMG_5336.webp",
            title: "Encuentro en Barra 3",
            category: "CONFERENCIA PARTE 2",
            aspect: "landscape",
          },
          {
            index: "02",
            src: "/events/imparables-2/IMG_5401.webp",
            title: "Invitados y cercanía",
            category: "CONEXIÓN INTERNACIONAL",
            aspect: "portrait",
          },
          {
            index: "03",
            src: "/events/imparables-2/imparables-about-1.webp",
            title: "Andersong Trocel en vivo",
            category: "TRANSFORMACIÓN",
            aspect: "landscape",
          },
          {
            index: "04",
            src: "/events/imparables-2/IMG_5439.webp",
            title: "Comunidad en movimiento",
            category: "CIERRE DE JORNADA",
            aspect: "landscape",
          },
        ],
      },
    ],
  },
  {
    id: "2025-business-summit",
    number: "02",
    year: "2025",
    tag: "BUSINESS SUMMIT",
    headline: "“DETRÁS DE CADA MARCA HAY UNA HISTORIA.”",
    shortSummary:
      "Una experiencia inspirada en grandes charlas de ideas, donde más de 20 marcas subieron al escenario a compartir la historia de las personas detrás de ellas.",
    rotation: "rotate-[0.9deg]",
    accentColor: "#FFB100",
    flyerSrc: "/flyers/495451317_18496194547059362_1041185602152418121_n.webp",
    fullDescription:
      "En 2025 nació una nueva edición de Imparables: IMPARABLES BUSINESS SUMMIT. Una experiencia inspirada en el espíritu de las grandes charlas de ideas, donde más de 20 marcas tuvieron la oportunidad de subir al escenario para hablar de algo que normalmente no vemos: la historia detrás de la marca.\n\nDurante el evento, cada participante conversó con Andersong Trocel sobre ese primer sueño, aquella idea que alguna vez parecía imposible y el camino que tuvieron que recorrer para convertirla en una empresa. Porque una marca no comienza con un logo. Comienza con una persona que decidió creer.\n\nTambién abrimos el escenario para proyectos emergentes, personas que estaban comenzando a construir sus propias historias y que tuvieron la oportunidad de compartirlas en vivo.\n\nMÁS QUE HABLAR DE EMPRESAS, HABLAMOS DE LAS PERSONAS QUE DECIDIERON CONSTRUIRLAS.",
    gallery: [
      {
        index: "01",
        src: "/events/business-submit/ig-07.webp",
        title: "El Escenario de las Marcas",
        category: "BUSINESS SUMMIT 2025",
        aspect: "landscape",
      },
      {
        index: "02",
        src: "/events/business-submit/IMG_20250618_201532_602.webp",
        title: "Conversación con Fundadores",
        category: "HISTORIAS REALES",
        aspect: "portrait",
      },
      {
        index: "03",
        src: "/events/business-submit/ig-05.webp",
        title: "Proyectos Emergentes",
        category: "INNOVACIÓN LOCAL",
        aspect: "landscape",
      },
      {
        index: "04",
        src: "/events/business-submit/IMG_20250618_201539_695.webp",
        title: "Networking & Comunidad",
        category: "CONEXIÓN EMPRESARIAL",
        aspect: "landscape",
      },
    ],
  },
  {
    id: "2026-liderazgo-360",
    number: "03",
    year: "2026",
    tag: "LIDERAZGO 360",
    headline: "“EL ÉXITO REAL EMPIEZA DESDE NOSOTROS MISMOS.”",
    shortSummary:
      "1era edición de Liderazgo 360°. Un conversatorio estratégico enfocado en preparación, visión y herramientas prácticas para empresarios y líderes emergentes.",
    rotation: "rotate-[-0.6deg]",
    accentColor: "#004F9E",
    flyerSrc: "/flyers/649236992_18561148135059362_3506792468321341082_n.webp",
    fullDescription:
      "1era edición de Liderazgo 360*: un espacio de crecimiento y conocimiento. Después de esta experiencia, no cabe duda de que el éxito es seguir aprendiendo porque el cambio real empieza desde nosotros mismos.\n\nEl éxito que queremos construir no nace de la casualidad, nace de la preparación, de la visión y del compromiso de hacer las cosas bien. En Liderazgo 360 quisimos reunir voces que creen en el trabajo bien hecho, en el crecimiento constante y en la idea de que los grandes resultados siempre comienzan con personas dispuestas a dar lo mejor de sí. Porque el verdadero éxito no es llegar primero… es construir el camino correcto para que otros también puedan avanzar. Seguimos apostando por la Venezuela que queremos lograr.\n\nLos tiempos cambian… y los líderes también deben hacerlo. Si eres empresario o emprendedor y quieres fortalecer tu forma de comunicar, vender y liderar, este espacio es para ti.",
    highlights: [
      "Oratoria y comunicación efectiva",
      "Servicio y atención al cliente",
      "Estrategias de venta de alto rendimiento",
      "Criptoactivos y billeteras virtuales",
    ],
    gallery: [
      {
        index: "01",
        src: "/events/liderazgo/IMG_2408.webp",
        title: "Panel de Expertos",
        category: "LIDERAZGO 360°",
        aspect: "landscape",
      },
      {
        index: "02",
        src: "/events/liderazgo/IMG_2432.webp",
        title: "Estrategias en Vivo",
        category: "FORMACIÓN PRÁCTICA",
        aspect: "portrait",
      },
      {
        index: "03",
        src: "/events/liderazgo/IMG_2436.webp",
        title: "Audiencia & Preguntas",
        category: "INTERACCIÓN",
        aspect: "landscape",
      },
      {
        index: "04",
        src: "/events/liderazgo/IMG_2438.webp",
        title: "Visión Transformadora",
        category: "COMPROMISO 360°",
        aspect: "landscape",
      },
    ],
  },
  {
    id: "2026-voces-imparables",
    number: "04",
    year: "2026",
    tag: "VOCES IMPARABLES",
    headline: "“ENCUENTRA TU VOZ. CONECTA. INSPIRA.”",
    shortSummary:
      "Nuestro programa de formación integral en oratoria, storytelling y expresión personal, estructurado en dos generaciones con una misma voz.",
    rotation: "rotate-[0.7deg]",
    accentColor: "#FFB100",
    fullDescription:
      "En 2026 nace una nueva dimensión de Imparables: VOCES IMPARABLES. Nuestro programa de formación en comunicación, crecimiento y liderazgo. Una experiencia práctica creada para ayudar a cada participante a descubrir su propia voz y convertirla en una herramienta para conectar con los demás.\n\nPero el objetivo va mucho más allá de aprender a hablar frente a un público: QUEREMOS QUE APRENDAS A CONTAR LO QUE TIENES PARA DECIR.",
    highlights: [
      "Oratoria y manejo de escenarios",
      "Comunicación efectiva y asertiva",
      "Storytelling aplicado a negocios y marcas",
      "Estructura de presentaciones memorables",
      "Confianza, postura y expresión auténtica",
      "Liderazgo a través de la palabra",
    ],
    generations: [
      {
        age: "12 a 17 años",
        description:
          "Un espacio para que adolescentes desarrollen confianza, comunicación, expresión y herramientas sólidas para desenvolverse con soltura frente a otros.",
      },
      {
        age: "18 años en adelante",
        description:
          "Una formación orientada a personas que quieren fortalecer su comunicación, liderazgo y capacidad para presentar sus ideas, historias, proyectos o marcas.",
      },
    ],
    flyerSrc: "/flyers/748161065_18598341691059362_4810160585673327155_n.webp",
  },
  {
    id: "2026-imparables-nexus",
    number: "05",
    year: "2026",
    tag: "IMPARABLES NEXUS",
    headline: "“EL FUTURO DE LAS EMPRESAS YA ESTÁ PASANDO.”",
    shortSummary:
      "El gran encuentro tecnológico de Puerto Ordaz. Inteligencia Artificial, automatización y herramientas digitales explicadas para dueños de negocios y líderes.",
    rotation: "rotate-[-0.5deg]",
    accentColor: "#004F9E",
    flyerSrc: "/og/imparables-nexus-og.jpg",
    fullDescription:
      "La tecnología dejó de ser una opción para convertirse en parte esencial del crecimiento de cualquier empresa. Por eso en 2026 nace: IMPARABLES NEXUS. Una experiencia dedicada a explorar cómo la tecnología está transformando el mundo empresarial.\n\nNexus reunirá profesionales locales que han trabajado con empresas internacionales, desarrolladores, creadores de plataformas, especialistas y personas que están construyendo soluciones desde nuestra propia región para el mundo.\n\nPORQUE PARA CRECER EN EL NUEVO MUNDO EMPRESARIAL, TAMBIÉN TENEMOS QUE APRENDER A ENTENDER EL MUNDO DIGITAL.",
    nexusInfo: {
      topics: [
        "Inteligencia Artificial aplicada a negocios",
        "Automatización de procesos operativos",
        "Sistemas, plataformas y desarrollo web moderno",
        "Aplicaciones móviles y arquitecturas escalables",
        "Trabajo remoto y contratación global",
        "Aspectos legales y propiedad intelectual digital",
        "Videojuegos y nuevas industrias digitales",
        "Estrategia de crecimiento tecnológico",
      ],
      date: "Primeros días de noviembre 2026 · Puerto Ordaz",
      link: "/nexus",
    },
  },
];

interface EditorialGalleryGridProps {
  photos: GalleryPhoto[];
  onPhotoClick: (photo: GalleryPhoto) => void;
  kicker?: string;
  title?: string;
  description?: string;
}

const EditorialGalleryGrid: React.FC<EditorialGalleryGridProps> = ({
  photos,
  onPhotoClick,
  kicker = "Galería de momentos",
  title = "Momentos Imparables",
  description = "Registro fotográfico curado de las experiencias y conversaciones en vivo.",
}) => {
  if (!photos || photos.length === 0) return null;

  return (
    <div className="pt-6 sm:pt-8 border-t border-white/10">
      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-6 sm:mb-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <ImparablesInterlock size="sm" />
            <span className="text-xs font-sans font-bold uppercase tracking-[0.08em] text-[#FFB100]">
              {kicker}
            </span>
          </div>
          <h4 className="font-display font-extrabold text-xl sm:text-2xl md:text-3xl text-white tracking-tight">
            {title}
          </h4>
          {description && (
            <p className="text-muted-foreground text-xs sm:text-sm mt-1 font-normal font-sans">
              {description}
            </p>
          )}
        </div>
      </div>

      {/* Asymmetric 2-Column Grid (Reference 2 replica) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start">
        {/* Left Column (Span 7) */}
        <div className="md:col-span-7 flex flex-col gap-6 sm:gap-8">
          {photos[0] && (
            <div
              onClick={() => onPhotoClick(photos[0])}
              className="group cursor-pointer flex flex-col gap-2.5"
            >
              <div className="relative aspect-16/10 rounded-2xl sm:rounded-3xl overflow-hidden bg-neutral-900 border border-white/10 shadow-lg group-hover:border-[#FFB100]/40 group-hover:shadow-[0_15px_35px_rgba(0,0,0,0.6)] transition-all duration-500">
                <Image
                  src={photos[0].src}
                  alt={photos[0].title}
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-black/50 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                  <ArrowsOutSimple size={15} weight="bold" />
                </div>
              </div>
              <div className="flex items-baseline gap-2 pt-1">
                <span className="font-sans font-bold text-xs text-[#FFB100]">
                  [{photos[0].index}]
                </span>
                <h5 className="font-display font-bold text-sm sm:text-base text-white group-hover:text-accent transition-colors">
                  {photos[0].title}
                </h5>
                <span className="text-[10px] font-sans font-bold uppercase tracking-[0.08em] text-muted-foreground ml-auto">
                  {photos[0].category}
                </span>
              </div>
            </div>
          )}

          {photos[2] && (
            <div
              onClick={() => onPhotoClick(photos[2])}
              className="group cursor-pointer flex flex-col gap-2.5"
            >
              <div className="relative aspect-4/3 rounded-2xl sm:rounded-3xl overflow-hidden bg-neutral-900 border border-white/10 shadow-lg group-hover:border-[#FFB100]/40 group-hover:shadow-[0_15px_35px_rgba(0,0,0,0.6)] transition-all duration-500">
                <Image
                  src={photos[2].src}
                  alt={photos[2].title}
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-black/50 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                  <ArrowsOutSimple size={15} weight="bold" />
                </div>
              </div>
              <div className="flex items-baseline gap-2 pt-1">
                <span className="font-sans font-bold text-xs text-[#FFB100]">
                  [{photos[2].index}]
                </span>
                <h5 className="font-display font-bold text-sm sm:text-base text-white group-hover:text-accent transition-colors">
                  {photos[2].title}
                </h5>
                <span className="text-[10px] font-sans font-bold uppercase tracking-[0.08em] text-muted-foreground ml-auto">
                  {photos[2].category}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Right Column (Span 5) */}
        <div className="md:col-span-5 flex flex-col gap-6 sm:gap-8 md:pt-12">
          {photos[1] && (
            <div
              onClick={() => onPhotoClick(photos[1])}
              className="group cursor-pointer flex flex-col gap-2.5"
            >
              <div className="relative aspect-4/3 sm:aspect-4/5 rounded-2xl sm:rounded-3xl overflow-hidden bg-neutral-900 border border-white/10 shadow-lg group-hover:border-[#FFB100]/40 group-hover:shadow-[0_15px_35px_rgba(0,0,0,0.6)] transition-all duration-500">
                <Image
                  src={photos[1].src}
                  alt={photos[1].title}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-black/50 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                  <ArrowsOutSimple size={15} weight="bold" />
                </div>
              </div>
              <div className="flex items-baseline gap-2 pt-1">
                <span className="font-sans font-bold text-xs text-[#FFB100]">
                  [{photos[1].index}]
                </span>
                <h5 className="font-display font-bold text-sm sm:text-base text-white group-hover:text-accent transition-colors">
                  {photos[1].title}
                </h5>
                <span className="text-[10px] font-sans font-bold uppercase tracking-[0.08em] text-muted-foreground ml-auto">
                  {photos[1].category}
                </span>
              </div>
            </div>
          )}

          {photos[3] && (
            <div
              onClick={() => onPhotoClick(photos[3])}
              className="group cursor-pointer flex flex-col gap-2.5"
            >
              <div className="relative aspect-16/10 rounded-2xl sm:rounded-3xl overflow-hidden bg-neutral-900 border border-white/10 shadow-lg group-hover:border-[#FFB100]/40 group-hover:shadow-[0_15px_35px_rgba(0,0,0,0.6)] transition-all duration-500">
                <Image
                  src={photos[3].src}
                  alt={photos[3].title}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-black/50 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                  <ArrowsOutSimple size={15} weight="bold" />
                </div>
              </div>
              <div className="flex items-baseline gap-2 pt-1">
                <span className="font-sans font-bold text-xs text-[#FFB100]">
                  [{photos[3].index}]
                </span>
                <h5 className="font-display font-bold text-sm sm:text-base text-white group-hover:text-accent transition-colors">
                  {photos[3].title}
                </h5>
                <span className="text-[10px] font-sans font-bold uppercase tracking-[0.08em] text-muted-foreground ml-auto">
                  {photos[3].category}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

interface ImparablesEventsTimelineProps {
  activeId?: string | null;
  onToggle?: (id: string | null) => void;
}

export const ImparablesEventsTimeline: React.FC<ImparablesEventsTimelineProps> = ({
  activeId,
  onToggle,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const [internalExpandedId, setInternalExpandedId] = useState<string | null>("2024-el-comienzo");
  const [expandedSubParts, setExpandedSubParts] = useState<Record<string, boolean>>({
    "2024-parte-1": true,
    "2024-parte-2": false,
  });
  const [modalPhoto, setModalPhoto] = useState<GalleryPhoto | null>(null);

  const currentExpandedId = activeId !== undefined ? activeId : internalExpandedId;

  const toggleEvent = (id: string) => {
    const next = currentExpandedId === id ? null : id;
    if (onToggle) {
      onToggle(next);
    } else {
      setInternalExpandedId(next);
    }
  };

  const toggleSubPart = (partId: string) => {
    setExpandedSubParts((prev) => ({
      ...prev,
      [partId]: !prev[partId],
    }));
  };

  return (
    <section className="relative w-full py-28 sm:py-36 md:py-40 bg-[#0066b0] text-foreground overflow-hidden border-t border-white/10 imparables-lines-texture">
      {/* Dynamic Ambient Glows (Imparables Design System Palette) */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[650px] h-[450px] bg-[#004F9E]/15 blur-[180px] rounded-full" />
        <div className="absolute bottom-1/3 right-1/4 w-[550px] h-[400px] bg-[#FFB100]/10 blur-[180px] rounded-full" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff06_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 md:px-12">
        {/* =========================================================================
            HEADER SECTION (STRICT ANTI-AI-SLOP: UNBOXED KICKER + IMPARABLES INTERLOCK)
           ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="flex items-center justify-center gap-2 mb-4">
            <ImparablesInterlock size="sm" />
            <span className="text-xs font-sans font-bold tracking-[0.08em] text-[#FFB100] uppercase">
              MUNDO IMPARABLES · TRAYECTORIA
            </span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.08] mb-5">
            Diferentes escenarios.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-amber-300 to-amber-500">
              Una misma esencia.
            </span>
          </h2>

          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal font-sans">
            Desde aquel primer encuentro en 2024 hasta las cumbres empresariales y programas de
            formación. Haz clic en cada tarjeta para explorar su historia y galería fotográfica.
          </p>
        </div>

        {/* =========================================================================
            CENTRAL DASHED TIMELINE: THE CONNECTING GOLDEN THREAD (#FFB100)
           ========================================================================= */}
        <div className="relative">
          {/* Vertical central golden dashed thread */}
          <div
            className="absolute left-1/2 -translate-x-1/2 top-4 bottom-12 w-0.5 border-l-2 border-dashed border-[#FFB100]/35 pointer-events-none z-0"
            aria-hidden="true"
          />

          {/* Timeline Origin Anchor Node */}
          <div className="flex flex-col items-center mb-12 relative z-10">
            <div className="w-8 h-8 rounded-full border-2 border-[#FFB100] bg-[#0066b0] flex items-center justify-center shadow-[0_0_20px_rgba(255,177,0,0.5)]">
              <div className="w-2.5 h-2.5 rounded-full bg-[#FFB100]" />
            </div>
            <span className="mt-2 text-[10px] font-sans font-bold uppercase tracking-[0.1em] text-[#FFB100]/80">
              Línea de tiempo · 2024 — 2026
            </span>
          </div>

          <div className="flex flex-col gap-10 sm:gap-14 relative z-10">
            {timelineData.map((item) => {
              const isOpen = currentExpandedId === item.id;

              return (
                <div
                  key={item.id}
                  id={`timeline-${item.id}`}
                  className="relative flex flex-col items-center w-full scroll-mt-28 sm:scroll-mt-36"
                >
                  {/* Timeline Connection Node Circle (Golden ring from Master Design System) */}
                  <div
                    className={`w-7 h-7 rounded-full border-2 bg-[#0066b0] shadow-lg flex items-center justify-center transition-all duration-300 mb-4 z-20 ${
                      isOpen
                        ? "border-[#FFB100] ring-4 ring-[#FFB100]/30 shadow-[0_0_20px_rgba(255,177,0,0.5)] scale-110"
                        : "border-white/30 hover:border-[#FFB100]"
                    }`}
                  >
                    <div
                      className={`w-2.5 h-2.5 rounded-full transition-colors ${
                        isOpen ? "bg-[#FFB100]" : "bg-white/40"
                      }`}
                    />
                  </div>

                  {/* Main Collapsible Obsidian Card */}
                  <motion.div
                    layout
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className={`w-full bg-[#0E1015]/95 backdrop-blur-xl rounded-3xl sm:rounded-[2rem] border transition-all duration-300 overflow-hidden imparables-corner-accent ${
                      isOpen
                        ? "border-[#FFB100]/50 shadow-[0_25px_60px_rgba(0,0,0,0.85)] ring-1 ring-[#FFB100]/25 rotate-0"
                        : `border-white/12 shadow-[0_15px_40px_rgba(0,0,0,0.5)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.7)] hover:border-[#FFB100]/40 ${
                            shouldReduceMotion ? "" : item.rotation
                          } hover:rotate-0`
                    }`}
                  >
                    {/* Card Summary Header: Always visible & Clickable */}
                    <button
                      type="button"
                      onClick={() => toggleEvent(item.id)}
                      className="w-full text-left p-6 sm:p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8 cursor-pointer focus:outline-none group"
                    >
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6 md:gap-7 flex-1 w-full min-w-0">
                        {/* Left Flyer Thumbnail Artwork */}
                        {item.flyerSrc && (
                          <div className="relative w-24 sm:w-28 md:w-32 lg:w-36 aspect-4/5 rounded-2xl overflow-hidden shrink-0 border border-white/15 bg-neutral-900 shadow-lg group-hover:border-[#FFB100]/50 group-hover:scale-105 transition-all duration-500 ease-out">
                            <Image
                              src={item.flyerSrc}
                              alt={item.headline}
                              fill
                              sizes="(max-width: 640px) 96px, 144px"
                              className="object-cover object-center"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-10 transition-opacity" />
                          </div>
                        )}

                        {/* Center Details */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-3 mb-2.5">
                            <span className="font-display font-extrabold text-3xl sm:text-5xl text-white/25 group-hover:text-accent transition-colors leading-none">
                              {item.number}
                            </span>
                            <span className="px-2.5 py-1 rounded-md text-xs font-sans font-bold tracking-[0.08em] uppercase text-[#FFB100]">
                              {item.year} · {item.tag}
                            </span>
                          </div>

                          <h3 className="font-display font-extrabold text-xl sm:text-2xl md:text-3xl text-white leading-snug mb-2 group-hover:text-amber-100 transition-colors">
                            {item.headline}
                          </h3>

                          {/* Signature Expanding Line from Imparables Design System */}
                          <div
                            className={`w-10 h-1 mb-3.5 rounded-full transition-all duration-300 ${
                              isOpen
                                ? "w-20 bg-[#FFB100]"
                                : "bg-white/20 group-hover:w-16 group-hover:bg-[#FFB100]"
                            }`}
                          />

                          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-2xl font-normal font-sans">
                            {item.shortSummary}
                          </p>
                        </div>
                      </div>

                      {/* Expand/Collapse Toggle Pill Button */}
                      <div
                        className={`shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all duration-300 border shadow-sm ${
                          isOpen
                            ? "bg-[#FFB100] text-neutral-950 border-[#FFB100] shadow-[0_0_15px_rgba(255,177,0,0.35)]"
                            : "bg-white/5 text-white border-white/15 hover:bg-[#FFB100] hover:text-neutral-950 hover:border-[#FFB100]"
                        }`}
                      >
                        <span>{isOpen ? "Cerrar historia" : "Ver historia & fotos"}</span>
                        <CaretDown
                          size={16}
                          weight="bold"
                          className={`transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                    </button>

                    {/* =========================================================================
                        EXPANDED COLLAPSIBLE BODY (MATCHING REFERENCE 2 WITH OBSIDIAN TOKENS)
                       ========================================================================= */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                          className="border-t border-white/10 bg-[#030f1c]/70"
                        >
                          <div className="p-6 sm:p-8 md:p-12 space-y-10">
                            {/* Narrative Section */}
                            <div>
                              {item.parts ? (
                                <div className="space-y-6">
                                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-3 border-b border-white/10">
                                    <div className="flex items-center gap-2">
                                      <ImparablesInterlock size="sm" />
                                      <span className="text-xs font-sans font-bold uppercase tracking-[0.08em] text-[#FFB100]">
                                        DOS FECHAS · UNA HISTORIA COMPARTIDA
                                      </span>
                                    </div>
                                    <span className="text-xs font-sans text-white/50">
                                      Ambas fechas expandibles de forma independiente
                                    </span>
                                  </div>

                                  <div className="flex flex-col gap-6">
                                    {item.parts.map((part) => {
                                      const isPartOpen = expandedSubParts[part.id] ?? false;

                                      return (
                                        <div
                                          key={part.id}
                                          className={`rounded-2xl sm:rounded-3xl border transition-all duration-300 overflow-hidden bg-[#14171F] imparables-corner-accent ${
                                            isPartOpen
                                              ? "border-[#FFB100]/40 shadow-[0_20px_45px_rgba(0,0,0,0.7)] ring-1 ring-[#FFB100]/20"
                                              : "border-white/10 hover:border-[#FFB100]/30 shadow-md"
                                          }`}
                                        >
                                          {/* Sub-card Header / Toggle Button */}
                                          <button
                                            type="button"
                                            onClick={() => toggleSubPart(part.id)}
                                            className="w-full text-left p-5 sm:p-7 md:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 cursor-pointer focus:outline-none group"
                                          >
                                            <div className="flex-1 min-w-0">
                                              <div className="flex items-center gap-2.5 mb-2">
                                                <span className="px-2.5 py-0.5 rounded-md text-[11px] font-sans font-bold tracking-[0.08em] uppercase text-[#FFB100]">
                                                  {part.badge}
                                                </span>
                                              </div>
                                              <h4 className="font-display font-extrabold text-lg sm:text-xl md:text-2xl text-white group-hover:text-amber-100 transition-colors">
                                                {part.title}
                                              </h4>
                                              {!isPartOpen && (
                                                <p className="text-muted-foreground text-xs sm:text-sm mt-1.5 line-clamp-2 font-normal font-sans">
                                                  {part.description}
                                                </p>
                                              )}
                                            </div>

                                            <div
                                              className={`shrink-0 flex items-center gap-2 px-4 py-2 rounded-full font-bold text-xs transition-all duration-300 border ${
                                                isPartOpen
                                                  ? "bg-[#FFB100] text-neutral-950 border-[#FFB100] shadow-[0_0_12px_rgba(255,177,0,0.3)]"
                                                  : "bg-white/5 text-white border-white/15 group-hover:bg-[#FFB100] group-hover:text-neutral-950 group-hover:border-[#FFB100]"
                                              }`}
                                            >
                                              <span>{isPartOpen ? "Cerrar fecha" : "Ver fecha & fotos"}</span>
                                              <CaretDown
                                                size={14}
                                                weight="bold"
                                                className={`transition-transform duration-300 ${
                                                  isPartOpen ? "rotate-180" : ""
                                                }`}
                                              />
                                            </div>
                                          </button>

                                          {/* Sub-card Collapsible Body */}
                                          <AnimatePresence initial={false}>
                                            {isPartOpen && (
                                              <motion.div
                                                key={`content-${part.id}`}
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                                                className="border-t border-white/10 bg-[#0B0D12]/80 p-5 sm:p-7 md:p-8 space-y-8"
                                              >
                                                <div className="max-w-3xl">
                                                  <p className="text-white/85 text-sm sm:text-base leading-relaxed whitespace-pre-line font-normal font-sans">
                                                    {part.description}
                                                  </p>
                                                </div>

                                                <EditorialGalleryGrid
                                                  photos={part.gallery}
                                                  onPhotoClick={setModalPhoto}
                                                  kicker={part.badge}
                                                  title={`Momentos · ${part.badge.includes("PARTE 1") ? "Primera Fecha" : "Segunda Fecha"}`}
                                                  description={`Registro fotográfico de ${part.badge.includes("PARTE 1") ? "la primera fecha de la conferencia" : "la segunda fecha y ponencias internacionales"}.`}
                                                />
                                              </motion.div>
                                            )}
                                          </AnimatePresence>
                                        </div>
                                      );
                                    })}
                                  </div>
                                </div>
                              ) : item.fullDescription ? (
                                <div className="py-6 sm:py-8 shadow-lg">
                                  <p className="text-white/85 text-sm sm:text-base leading-relaxed whitespace-pre-line font-normal">
                                    {item.fullDescription}
                                  </p>
                                </div>
                              ) : null}

                              {/* Highlights Pill Grid (For Liderazgo 360 & Voces Imparables) */}
                              {item.highlights && (
                                <div className="mt-8">
                                  <h4 className="font-sans font-bold text-xs uppercase tracking-[0.08em] text-[#FFB100] mb-3">
                                    Ejes temáticos y herramientas clave:
                                  </h4>
                                  <div className="flex flex-wrap gap-2.5">
                                    {item.highlights.map((hl, hIdx) => (
                                      <span
                                        key={hIdx}
                                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/12 text-white text-xs sm:text-sm font-medium shadow-xs"
                                      >
                                        <CheckCircle size={16} weight="fill" className="text-accent shrink-0" />
                                        <span>{hl}</span>
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {/* Generations Cards (For Voces Imparables) */}
                              {item.generations && (
                                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                                  {item.generations.map((gen, gIdx) => (
                                    <div
                                      key={gIdx}
                                      className="p-6 rounded-2xl bg-[#14171F] border border-white/10 shadow-lg flex flex-col justify-between"
                                    >
                                      <div>
                                        <span className="px-3 py-1 rounded-full text-[11px] font-sans font-bold uppercase tracking-[0.08em] bg-accent/15 text-accent border border-accent/30 inline-block mb-3">
                                          {gen.age}
                                        </span>
                                        <h4 className="font-display font-bold text-lg text-white mb-2">
                                          {gIdx === 0 ? "Adolescentes con propósito" : "Adultos y líderes de impacto"}
                                        </h4>
                                        <p className="text-white/75 text-sm leading-relaxed font-normal">
                                          {gen.description}
                                        </p>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              )}

                              {/* Nexus Info Spotlight (For Imparables Nexus - Signature Blue Gradient from MASTER.md) */}
                              {item.nexusInfo && (
                                <div className="mt-8 rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-[#003875] via-[#002855] to-[#001733] text-white border border-blue-400/30 shadow-2xl relative overflow-hidden imparables-corner-accent">
                                  <div className="absolute top-0 right-0 w-80 h-80 bg-accent/15 blur-3xl rounded-full pointer-events-none" />

                                  <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                                    <div className="space-y-2 max-w-xl">
                                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-accent font-sans text-xs font-bold uppercase tracking-[0.08em]">
                                        <Calendar size={14} weight="bold" />
                                        <span>{item.nexusInfo.date}</span>
                                      </div>
                                      <h4 className="font-display font-extrabold text-2xl text-white">
                                        Imparables Nexus: El futuro de las empresas
                                      </h4>
                                      <p className="text-blue-100/85 text-sm leading-relaxed font-normal font-sans">
                                        Explora la Inteligencia Artificial, automatización de procesos y plataformas digitales de la mano de desarrolladores y líderes regionales.
                                      </p>
                                    </div>

                                    <Link
                                      href={item.nexusInfo.link}
                                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-accent text-neutral-950 font-bold text-sm hover:bg-accent/90 transition-all shadow-lg shadow-blue-500/25 shrink-0 cursor-pointer"
                                    >
                                      <span>Ir a la web de Nexus</span>
                                      <ArrowUpRight size={16} weight="bold" />
                                    </Link>
                                  </div>
                                </div>
                              )}

                            </div>

                            {/* Generic Event Gallery (For events with top-level gallery) */}
                            {item.gallery && item.gallery.length > 0 && (
                              <EditorialGalleryGrid
                                photos={item.gallery}
                                onPhotoClick={setModalPhoto}
                                kicker="Galería de momentos"
                                title="Momentos Imparables"
                                description="Registro fotográfico curado de las experiencias y conversaciones en vivo."
                              />
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* =========================================================================
            BOTTOM BRIDGE TO CONTACT / COMMUNITY (ARCHITECTURAL KICKER)
           ========================================================================= */}
        <div className="mt-24 p-8 sm:p-12 rounded-3xl bg-[#0E1015] text-white border border-white/15 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl imparables-corner-accent">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <ImparablesInterlock size="sm" />
              <span className="text-xs font-sans font-bold uppercase tracking-[0.08em] text-[#FFB100]">
                Tu marca o historia en el próximo formato
              </span>
            </div>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white mb-2">
              ¿Listo para subir al escenario de Imparables?
            </h3>
            <p className="text-muted-foreground text-sm max-w-xl leading-relaxed">
              Descubre las convocatorias de conferencistas, alianzas de patrocinio y programas corporativos para este año.
            </p>
          </div>

          <Link
            href="/contacto"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#FFB100] text-neutral-950 font-bold text-sm hover:bg-[#FFB100]/90 transition-colors w-full md:w-auto shrink-0 cursor-pointer shadow-lg shadow-[#FFB100]/25"
          >
            <span>Conectar con el equipo</span>
            <ArrowUpRight size={16} weight="bold" />
          </Link>
        </div>
      </div>

      {/* =========================================================================
          LIGHTBOX MODAL FOR INDIVIDUAL GALLERY PHOTO INSPECTION
         ========================================================================= */}
      <AnimatePresence>
        {modalPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md"
            onClick={() => setModalPhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] w-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setModalPhoto(null)}
                className="absolute -top-12 right-0 sm:top-4 sm:right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer z-30"
                aria-label="Cerrar vista"
              >
                <X size={20} weight="bold" />
              </button>

              <div className="relative w-full aspect-16/10 rounded-2xl overflow-hidden shadow-2xl bg-neutral-950 border border-white/15">
                <Image
                  src={modalPhoto.src}
                  alt={modalPhoto.title}
                  fill
                  sizes="90vw"
                  className="object-contain"
                  priority
                />
              </div>

              <div className="mt-4 text-center text-white">
                <span className="text-xs font-sans font-bold text-[#FFB100]">[{modalPhoto.index}]</span>
                <h4 className="font-display font-bold text-lg">{modalPhoto.title}</h4>
                <p className="text-xs text-muted-foreground uppercase tracking-[0.08em]">{modalPhoto.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ImparablesEventsTimeline;
