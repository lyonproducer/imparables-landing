"use client";

import React, { useRef } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpeakerCard } from "@/components/ui/SpeakerCard";
import { Button } from "@/components/ui/Button";
import { eventConfig } from "@/lib/content/event.config";
import { useSectionReveal } from "@/lib/motion/gsap-hooks";
import { MicrophoneStage, ArrowUpRight, BellRinging } from "@phosphor-icons/react";

export const Speakers: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useSectionReveal(sectionRef);

  return (
    <section
      id="ponentes"
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-background-elevated/30 border-t border-border overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeading
          kicker="PANELISTAS & PONENTES"
          title="Voces con experiencia real en el terreno"
          subtitle="Profesionales destacados en software, inteligencia artificial, modelos de negocio y operaciones empresariales."
          align="center"
          className="mb-12 md:mb-16"
        />

        {/* Host Highlight Card: Andersong Trocel */}
        <div className="mb-12 p-6 md:p-8 rounded-[var(--radius-card)] bg-gradient-to-r from-primary/20 via-background-elevated to-background-elevated border border-primary/30 flex flex-col md:flex-row items-center gap-6 md:gap-8">
          <div className="w-16 h-16 rounded-2xl bg-accent text-accent-foreground flex items-center justify-center shrink-0 shadow-lg shadow-accent/20">
            <MicrophoneStage size={32} weight="fill" aria-hidden="true" />
          </div>

          <div className="flex-1 text-center md:text-left">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-accent">
              Anfitrión & Moderador
            </span>
            <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mt-0.5">
              {eventConfig.host.name}
            </h3>
            <p className="text-sm text-muted-foreground mt-1 max-w-2xl leading-relaxed">
              {eventConfig.host.bio}
            </p>
          </div>

          <span className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 border border-white/10 text-muted-foreground shrink-0">
            Director General Imparables
          </span>
        </div>

        {/* Lineup Grid (Adaptable 1 to N speakers) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {eventConfig.speakers.map((speaker, index) => (
            <SpeakerCard key={index} speaker={speaker} index={index} />
          ))}
        </div>

        {/* Placeholder Announcement Banner with CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-accent/15 text-accent flex items-center justify-center shrink-0">
              <BellRinging size={24} weight="duotone" aria-hidden="true" />
            </div>
            <div>
              <h4 className="font-display font-bold text-base md:text-lg text-foreground">
                Lineup oficial por anunciar
              </h4>
              <p className="text-sm text-muted-foreground mt-0.5">
                {eventConfig.speakersPlaceholderText}
              </p>
            </div>
          </div>

          <a href="#registro" className="shrink-0 w-full sm:w-auto">
            <Button
              variant="outline"
              size="md"
              icon={<ArrowUpRight size={16} weight="bold" />}
              className="w-full sm:w-auto"
            >
              Enterarme primero
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
