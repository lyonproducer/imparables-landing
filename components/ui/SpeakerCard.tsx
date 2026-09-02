"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { User, Sparkle } from "@phosphor-icons/react";
import type { SpeakerItem } from "@/lib/content/event.config";
import { scaleUpVariant } from "@/lib/motion/motion-variants";

export interface SpeakerCardProps {
  speaker: SpeakerItem;
  index: number;
}

export const SpeakerCard: React.FC<SpeakerCardProps> = ({ speaker, index }) => {
  const isConfirmed = speaker.isConfirmed && Boolean(speaker.name);
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={scaleUpVariant}
      whileHover={shouldReduceMotion ? undefined : { y: -4 }}
      className="speaker-card group relative flex flex-col overflow-hidden rounded-[var(--radius-card)] bg-background-elevated/70 border border-border hover:border-primary/50 transition-colors duration-300"
    >
      {/* Contenedor de Imagen o Placeholder */}
      <div className="relative aspect-[4/5] w-full bg-gradient-to-b from-primary/30 to-background-elevated flex items-center justify-center overflow-hidden">
        {isConfirmed && speaker.photoUrl ? (
          <Image
            src={speaker.photoUrl}
            alt={speaker.name || "Ponente de Imparables Nexus"}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="relative w-full h-full flex flex-col items-center justify-center p-6 text-center">
            {/* Silueta abstracta difuminada */}
            <div className="w-24 h-24 rounded-full bg-primary/20 border border-white/10 flex items-center justify-center text-muted-foreground/60 backdrop-blur-xs mb-3 group-hover:scale-110 group-hover:text-accent transition-all duration-300">
              <User size={48} weight="light" aria-hidden="true" />
            </div>

            {/* Badge de estado próximo */}
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-accent/15 text-accent border border-accent/25">
              <Sparkle size={12} weight="fill" aria-hidden="true" />
              Por anunciar
            </span>
          </div>
        )}

        {/* Gradiente inferior para legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-t from-background-elevated via-transparent to-transparent opacity-80 pointer-events-none" />
      </div>

      {/* Información del ponente */}
      <div className="flex flex-col p-6 pt-4 grow">
        <span className="text-xs font-mono font-medium text-accent/80 uppercase tracking-wider mb-1">
          Panelista {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="font-display text-lg font-bold text-foreground group-hover:text-accent transition-colors">
          {isConfirmed ? speaker.name : "Ponente Destacado"}
        </h3>
        <p className="text-sm text-muted-foreground mt-1 leading-snug">
          {speaker.role || "Especialista invitado"}
        </p>
      </div>
    </motion.div>
  );
};
