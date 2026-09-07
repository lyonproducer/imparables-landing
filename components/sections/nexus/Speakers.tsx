"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { SpeakerCard } from "@/components/ui/nexus/SpeakerCard";
import { eventConfig } from "@/lib/content/event.config";
import {
  CaretLeft,
  CaretRight,
  ArrowUpRight,
} from "@phosphor-icons/react";
import { fadeUpVariant } from "@/lib/motion/motion-variants";

export const Speakers: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const speakers = eventConfig.speakers;
  const isSlider = speakers.length > 4;

  const updateScrollState = useCallback(() => {
    if (!sliderRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    setCanScrollPrev(scrollLeft > 10);
    setCanScrollNext(scrollLeft < scrollWidth - clientWidth - 10);

    const firstCard = sliderRef.current.firstElementChild as HTMLElement | null;
    const cardWidth = (firstCard?.offsetWidth || 300) + 24; // width + gap-6
    const calculatedIndex = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.min(Math.max(calculatedIndex, 0), speakers.length - 1));
  }, [speakers.length]);

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  const scroll = (direction: "prev" | "next") => {
    if (!sliderRef.current) return;
    const firstCard = sliderRef.current.firstElementChild as HTMLElement | null;
    const cardWidth = (firstCard?.offsetWidth || 300) + 24;
    const scrollAmount = cardWidth * (direction === "prev" ? -1 : 1);
    sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const scrollToIndex = (index: number) => {
    if (!sliderRef.current) return;
    const firstCard = sliderRef.current.firstElementChild as HTMLElement | null;
    const cardWidth = (firstCard?.offsetWidth || 300) + 24;
    sliderRef.current.scrollTo({ left: index * cardWidth, behavior: "smooth" });
  };

  return (
    <section
      id="expertos"
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-[#06090f] border-t border-white/10 overflow-hidden"
    >
      {/* Anchor alias */}
      <div id="ponentes" className="absolute -top-24" />

      {/* Rich multi-layer ambient background */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#004F9E]/28 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-[#0066CC]/18 blur-[160px] rounded-full" />
        <div className="absolute top-1/2 left-0 w-[500px] h-[300px] bg-[#FFB100]/15 blur-[140px] rounded-full" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[300px] bg-[#1a3a6b]/30 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#001a3d]/18 via-transparent to-[#FFB100]/5" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:28px_28px] opacity-60" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#06090f] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#06090f] to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Header with High-Impact Typography & Slider Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-14">
          <div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05]">
              Panelistas <span className="text-[#A3CEF1]">Principales</span>
            </h2>
            <p className="text-base sm:text-lg text-neutral-400 mt-3 max-w-2xl leading-relaxed">
              Líderes y especialistas con trayectoria comprobada en software,
              inteligencia artificial, producto y nuevos modelos empresariales.
            </p>
          </div>

          {/* Slider Controls (When items > 4) */}
          {isSlider && (
            <div className="flex items-center gap-3 shrink-0 self-start md:self-end">
              <span className="text-xs font-sans font-medium text-neutral-400 mr-2 hidden sm:inline-block">
                {activeIndex + 1} de {speakers.length}
              </span>
              <button
                type="button"
                onClick={() => scroll("prev")}
                disabled={!canScrollPrev}
                aria-label="Panelista anterior"
                className="w-11 h-11 rounded-full border border-white/10 bg-white/[0.06] backdrop-blur-xl hover:bg-[#004F9E]/30 hover:border-[#004F9E]/60 text-white flex items-center justify-center transition-all disabled:opacity-20 disabled:cursor-not-allowed cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#004F9E] shadow-sm"
              >
                <CaretLeft size={20} weight="bold" />
              </button>
              <button
                type="button"
                onClick={() => scroll("next")}
                disabled={!canScrollNext}
                aria-label="Siguiente panelista"
                className="w-11 h-11 rounded-full border border-white/10 bg-white/[0.06] backdrop-blur-xl hover:bg-[#004F9E]/30 hover:border-[#004F9E]/60 text-white flex items-center justify-center transition-all disabled:opacity-20 disabled:cursor-not-allowed cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#004F9E] shadow-sm"
              >
                <CaretRight size={20} weight="bold" />
              </button>
            </div>
          )}
        </div>

        {/* Carousel Container (Snap-scroll with 4 visible cards on desktop) */}
        <div className="relative">
          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory py-2 pb-6 -mx-6 px-6 md:-mx-10 md:px-10 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {speakers.map((speaker, index) => (
              <div
                key={speaker.id || index}
                className="w-[82vw] sm:w-[300px] md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] shrink-0 snap-start"
              >
                <SpeakerCard speaker={speaker} index={index} />
              </div>
            ))}
          </div>

          {/* Dots / Position Indicators */}
          {isSlider && (
            <div className="flex items-center justify-center gap-2 mt-4">
              {speakers.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => scrollToIndex(idx)}
                  aria-label={`Ir a panelista ${idx + 1}`}
                  className={`h-1.5 transition-all duration-300 rounded-full ${
                    idx === activeIndex
                      ? "w-8 bg-[#004F9E]"
                      : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Host Highlight Card: Andersong Trocel */}
        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUpVariant}
          className="mt-14 p-6 sm:p-8 rounded-2xl md:rounded-3xl bg-white/[0.04] backdrop-blur-3xl backdrop-saturate-200 border border-white/[0.12] hover:border-[#004F9E]/60 shadow-[0_8px_32px_0_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.04)_inset] hover:shadow-[0_12px_48px_0_rgba(0,79,158,0.25)] flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 relative overflow-hidden transition-all duration-300"
        >
          {/* Glassmorphism inner layers */}
          <div className="absolute inset-0 rounded-2xl md:rounded-3xl overflow-hidden pointer-events-none">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-white/20 via-white/5 to-transparent" />
            <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-[#004F9E]/10 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,rgba(255,255,255,0.05)_0%,transparent_65%)]" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#FFB100]/25 to-transparent" />
          </div>
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-[#FFB100]/40 bg-gradient-to-b from-[#14233F] to-[#080808] shrink-0 shadow-lg shadow-[#FFB100]/15">
              <Image
                src="/team/andersong-hero-cutout.webp"
                alt={eventConfig.host.name}
                fill
                sizes="100px"
                className="object-cover object-top"
              />
            </div>

            <div>
              <span className="text-xs font-sans font-semibold uppercase tracking-wider text-[#FFB100]">
                Anfitrión & Conductor Oficial
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white mt-0.5">
                {eventConfig.host.name}
              </h3>
              <p className="text-sm text-neutral-400 mt-1 max-w-2xl leading-relaxed">
                {eventConfig.host.bio}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 shrink-0 w-full sm:w-auto">
            <span className="hidden lg:inline-block text-xs font-sans font-medium px-3.5 py-1.5 rounded-full bg-white/[0.06] backdrop-blur-md border border-white/10 text-neutral-300">
              {eventConfig.host.role}
            </span>
            <a href="#entradas" className="w-full sm:w-auto">
              <button
                type="button"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white text-neutral-950 font-semibold text-sm hover:bg-[#E8F1FA] transition-all cursor-pointer shadow-md"
              >
                Asegurar mi cupo
                <ArrowUpRight size={16} weight="bold" />
              </button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
