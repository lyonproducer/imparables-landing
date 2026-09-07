"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Clock } from "@phosphor-icons/react";
import type { AgendaItemType } from "@/lib/content/event.config";
import { fadeUpVariant } from "@/lib/motion/motion-variants";

export interface AgendaItemProps {
  item: AgendaItemType;
  index: number;
}

export const AgendaItem: React.FC<AgendaItemProps> = ({ item }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={fadeUpVariant}
      whileHover={shouldReduceMotion ? undefined : { x: 4 }}
      className="agenda-item group relative flex flex-col md:flex-row md:items-center gap-4 md:gap-8 p-5 md:p-6 rounded-2xl bg-[#0D1626]/45 backdrop-blur-2xl backdrop-saturate-200 border border-white/15 hover:border-[#004F9E]/50 shadow-lg transition-all duration-300 overflow-hidden before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/15 before:to-transparent"
    >
      {/* Badge de Horario */}
      <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#004F9E]/20 border border-[#004F9E]/35 text-accent font-sans text-xs md:text-sm font-semibold shrink-0 self-start md:self-center backdrop-blur-md">
        <Clock size={16} weight="regular" aria-hidden="true" />
        <span>{item.time}</span>
      </div>

      {/* Título y descripción */}
      <div className="flex-1 flex flex-col gap-1">
        <div className="flex flex-wrap items-center gap-2.5">
          <h3 className="font-display text-base md:text-lg font-bold text-foreground group-hover:text-accent transition-colors">
            {item.title}
          </h3>
          {item.isPlaceholder && (
            <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-white/5 text-muted-foreground border border-white/10">
              Sujeto a confirmación
            </span>
          )}
        </div>
        {item.description && (
          <p className="text-sm text-muted-foreground leading-relaxed">
            {item.description}
          </p>
        )}
      </div>
    </motion.div>
  );
};
