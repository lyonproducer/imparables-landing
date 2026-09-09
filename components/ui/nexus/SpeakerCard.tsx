"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { User, Sparkle } from "@phosphor-icons/react";
import type { SpeakerItem } from "@/lib/content/event.config";

export interface SpeakerCardProps {
  speaker: SpeakerItem;
  index: number;
}

export const SpeakerCard: React.FC<SpeakerCardProps> = ({ speaker, index }) => {
  const isConfirmed = speaker.isConfirmed && Boolean(speaker.name);
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={shouldReduceMotion ? undefined : { y: -6 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="speaker-card group relative flex flex-col cursor-pointer select-none"
    >
      {/* Portrait Photo Container */}
      <div className="relative aspect-[4/5] w-full rounded-2xl md:rounded-3xl overflow-hidden bg-[#0D1626]/50 backdrop-blur-2xl backdrop-saturate-150 border border-white/10 group-hover:border-[#004F9E]/70 transition-all duration-500 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] group-hover:shadow-[0_0_35px_rgba(0,79,158,0.3)] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/25 before:to-transparent before:z-30">
        {/* Studio Spotlight Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,_rgba(0,79,158,0.3)_0%,_transparent_65%)] pointer-events-none z-0" />

        {/* Diagonal Sheen Effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-white/[0.05] pointer-events-none z-10" />

        {/* Confirmed Speaker Photo */}
        {isConfirmed && speaker.photoUrl ? (
          <>
            <Image
              src={speaker.photoUrl}
              alt={speaker.name || "Panelista de Nexus"}
              fill
              sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 25vw"
              className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105 z-10"
              priority={index < 2}
            />
            {/* Soft Ambient Fade at base */}
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#060B14] via-[#060B14]/40 to-transparent pointer-events-none z-20" />
          </>
        ) : (
          <div className="relative w-full h-full flex flex-col items-center justify-center p-6 text-center z-10">
            <div className="w-24 h-24 rounded-full bg-primary/20 border border-white/10 flex items-center justify-center text-muted-foreground/60 backdrop-blur-xs mb-3 group-hover:scale-110 group-hover:text-accent transition-all duration-300">
              <User size={44} weight="light" aria-hidden="true" />
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-accent/15 text-accent border border-accent/25">
              <Sparkle size={12} weight="fill" aria-hidden="true" />
              Por anunciar
            </span>
          </div>
        )}
      </div>

      {/* External Typography (Directly below card as in reference design) */}
      <div className="mt-3.5 px-1 flex flex-col">
        <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-1">
          <h3 className="font-display text-base sm:text-lg md:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors tracking-tight">
            {isConfirmed ? speaker.name : "Panelista Invitado"}
          </h3>
          {(speaker.badge || speaker.company) && (
            <span className="text-[10px] sm:text-xs font-sans font-semibold uppercase tracking-wider px-2 sm:px-2.5 py-0.5 rounded-md bg-[#FFB100]/10 border border-[#FFB100]/30 text-[#FFB100] shrink-0 whitespace-nowrap">
              {speaker.badge || speaker.company}
            </span>
          )}
        </div>
        <p className="text-xs sm:text-sm text-neutral-400 mt-1 leading-snug line-clamp-2">
          {speaker.role || "Especialista invitado"}
        </p>
      </div>
    </motion.div>
  );
};
