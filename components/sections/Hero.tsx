"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { Calendar, MapPin, ArrowUpRight, CaretDown } from "@phosphor-icons/react";
import { eventConfig } from "@/lib/content/event.config";

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-[100svh] flex flex-col justify-center items-center px-6 md:px-10 pt-28 pb-16 overflow-hidden"
    >
      {/* Background Image: Imparables concentric tracks with high priority */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <Image
          src="/backgrounds/nexus-lines-pattern.jpg"
          alt="Líneas abstractas de Imparables Nexus"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-70"
        />
        {/* Subtle radial gradient overlay to emphasize centered floating card */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      </div>

      {/* Floating Centered Glass Card (The single glassmorphism card in Hero viewport) */}
      <div className="relative z-10 w-full max-w-4xl mx-auto my-auto animate-fadeIn">
        <GlassCard className="text-center flex flex-col items-center gap-6">
          {/* Kicker Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/15 border border-accent/30 text-accent font-display font-bold text-xs tracking-[0.25em] uppercase">
            <span>{eventConfig.kicker}</span>
          </div>

          {/* H1 Main Headline */}
          <h1 className="font-display font-bold text-3xl sm:text-5xl md:text-6xl text-foreground leading-[1.12] tracking-tight max-w-3xl">
            {eventConfig.headline}
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl font-normal">
            {eventConfig.subheadline}
          </p>

          {/* Event Meta Information Row */}
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 pt-2 text-xs sm:text-sm text-foreground/90">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/20 border border-white/10 backdrop-blur-xs">
              <Calendar size={18} weight="duotone" className="text-accent shrink-0" aria-hidden="true" />
              <span className="font-medium">{eventConfig.dateLabel}</span>
            </div>

            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/20 border border-white/10 backdrop-blur-xs">
              <MapPin size={18} weight="duotone" className="text-accent shrink-0" aria-hidden="true" />
              <span className="font-medium">{eventConfig.venueLabel}</span>
            </div>
          </div>

          {/* Call To Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full sm:w-auto">
            <a href="#registro" className="w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                icon={<ArrowUpRight size={18} weight="bold" />}
                className="w-full sm:w-auto"
              >
                Quiero asistir
              </Button>
            </a>

            <a href="#temas" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                icon={<CaretDown size={18} weight="bold" />}
                className="w-full sm:w-auto"
              >
                Conoce los temas
              </Button>
            </a>
          </div>
        </GlassCard>
      </div>

      {/* Subtle indicator to scroll */}
      <div className="relative z-10 pt-8 flex justify-center text-muted-foreground/60 animate-bounce">
        <a href="#sobre-el-evento" aria-label="Ir a sección Sobre el evento">
          <CaretDown size={24} weight="bold" />
        </a>
      </div>
    </section>
  );
};
