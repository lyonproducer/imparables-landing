"use client";

import React, { useRef } from "react";
import { SectionHeading } from "@/components/ui/shared/SectionHeading";
import { eventConfig } from "@/lib/content/event.config";
import { useSectionReveal } from "@/lib/motion/gsap-hooks";
import { GlobeHemisphereWest, UsersThree, Lightbulb } from "@phosphor-icons/react";
import { Globe } from "@/components/ui/globe";

export const AboutEvent: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useSectionReveal(sectionRef);

  return (
    <section
      id="sobre-el-evento"
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-background overflow-hidden border-t border-white/5"
    >
      {/* Ambient decor — inverted from the obsidian sections for the #0066b0 canvas */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-32 right-1/4 w-[760px] h-[440px] bg-[#7CC9FF]/28 blur-[150px] rounded-full" />
        <div className="absolute -bottom-24 -left-24 w-[640px] h-[400px] bg-[#002b5b]/50 blur-[150px] rounded-full" />
        <div className="absolute top-1/4 right-[-8%] w-[500px] h-[320px] bg-accent/12 blur-[150px] rounded-full" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff22_1px,transparent_1px)] [background-size:28px_28px] opacity-70" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Context Copy */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <SectionHeading
              kicker="SOBRE EL ENCUENTRO"
              title="Para crecer en el nuevo mundo empresarial, debemos entender el mundo digital."
              align="left"
            />

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              {eventConfig.aboutEvent.highlight}
            </p>

            {/* Pull Quote */}
            <div className="relative p-6 rounded-2xl bg-[#0D1626]/45 backdrop-blur-2xl backdrop-saturate-200 border-l-4 border-accent border-y border-r border-white/15 my-2 shadow-lg">
              <p className="font-display font-medium text-lg md:text-xl text-foreground italic">
                “{eventConfig.aboutEvent.quote}”
              </p>
            </div>

            {/* 3 Pillar highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="flex flex-col gap-2 p-5 rounded-2xl bg-[#0D1626]/40 backdrop-blur-2xl backdrop-saturate-200 border border-white/15 hover:border-[#004F9E]/50 transition-all duration-300 shadow-md">
                <GlobeHemisphereWest size={24} weight="duotone" className="text-accent" />
                <span className="font-display font-semibold text-sm text-foreground">
                  Alcance Global
                </span>
                <span className="text-xs text-muted-foreground">
                  Casos de venezolanos trabajando para mercados internacionales.
                </span>
              </div>

              <div className="flex flex-col gap-2 p-5 rounded-2xl bg-[#0D1626]/40 backdrop-blur-2xl backdrop-saturate-200 border border-white/15 hover:border-[#004F9E]/50 transition-all duration-300 shadow-md">
                <UsersThree size={24} weight="duotone" className="text-accent" />
                <span className="font-display font-semibold text-sm text-foreground">
                  Talento Regional
                </span>
                <span className="text-xs text-muted-foreground">
                  Desarrolladores, creadores y especialistas de nuestra propia región.
                </span>
              </div>

              <div className="flex flex-col gap-2 p-5 rounded-2xl bg-[#0D1626]/40 backdrop-blur-2xl backdrop-saturate-200 border border-white/15 hover:border-[#004F9E]/50 transition-all duration-300 shadow-md">
                <Lightbulb size={24} weight="duotone" className="text-accent" />
                <span className="font-display font-semibold text-sm text-foreground">
                  Aplicación Real
                </span>
                <span className="text-xs text-muted-foreground">
                  IA y automatización orientada a rentabilidad de empresas de hoy.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive 3D Streaming Globe */}
          <div className="lg:col-span-5 relative flex flex-col items-center">
            {/* Ambient Backlight Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(0,79,158,0.3)_0%,_transparent_70%)] pointer-events-none -z-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] bg-[#FFB100]/10 rounded-full blur-[100px] pointer-events-none -z-10" />

            <div className="relative w-full aspect-square max-w-[480px] rounded-3xl bg-[#0D1626]/45 backdrop-blur-2xl backdrop-saturate-200 border border-white/15 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] overflow-hidden flex items-center justify-center p-2 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent">
              {/* Floating Top Pill: Live Streaming Badge */}
              <div className="absolute top-4 left-4 z-20 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#081220]/80 backdrop-blur-md border border-white/15 text-xs font-sans font-semibold text-white shadow-lg">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span className="tracking-wider uppercase text-[11px] text-neutral-200">
                  Streaming Global en Vivo
                </span>
              </div>

              {/* Central 3D Interactive WebGL Globe with Connections */}
              <Globe className="w-full h-full max-w-[440px]" />

              {/* Bottom Floating Card: Hub & Global Reach Note */}
              <div className="absolute bottom-4 inset-x-4 z-20 p-3.5 rounded-2xl bg-[#081220]/85 backdrop-blur-xl border border-white/10 flex items-center justify-between gap-3 shadow-xl">
                <div className="flex flex-col">
                  <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#FFB100]">
                    Hub Central · Puerto Ordaz
                  </span>
                  <span className="text-xs text-neutral-300 leading-snug">
                    Transmisión en alta fidelidad para toda Latinoamérica y el mundo
                  </span>
                </div>
                <div className="shrink-0 px-2.5 py-1 rounded-full bg-white/10 text-[10px] font-medium text-white/80 border border-white/10">
                  Global
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
