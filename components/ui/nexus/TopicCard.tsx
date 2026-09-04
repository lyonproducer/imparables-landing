"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Sparkle,
  Gear,
  Stack,
  DeviceMobile,
  HouseLine,
  Scales,
  GameController,
  TrendUp,
  type IconProps,
} from "@phosphor-icons/react";
import type { TopicItem } from "@/lib/content/event.config";
import { scaleUpVariant } from "@/lib/motion/motion-variants";

const iconMap: Record<TopicItem["iconName"], React.ComponentType<IconProps>> = {
  Sparkle,
  Gear,
  Stack,
  DeviceMobile,
  HouseLine,
  Scales,
  GameController,
  TrendUp,
};

export interface TopicCardProps {
  topic: TopicItem;
  index: number;
}

export const TopicCard: React.FC<TopicCardProps> = ({ topic, index }) => {
  const IconComponent = iconMap[topic.iconName] || Sparkle;
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={scaleUpVariant}
      whileHover={shouldReduceMotion ? undefined : { y: -4 }}
      tabIndex={0}
      className="topic-card group relative flex flex-col p-6 rounded-card bg-background-elevated/80 border border-border hover:border-accent/40 transition-colors duration-300 hover:shadow-xl hover:shadow-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      {/* Indicador numérico sutil */}
      <span className="absolute top-5 right-6 text-xs font-mono font-semibold text-muted-foreground/40 group-hover:text-accent transition-colors">
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Contenedor del ícono */}
      <div className="w-12 h-12 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center text-accent mb-4 group-hover:scale-110 group-hover:bg-primary/30 group-hover:border-accent/40 transition-all duration-300 shrink-0">
        <IconComponent size={24} weight="regular" aria-hidden="true" />
      </div>

      {/* Título del tema */}
      <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-accent transition-colors mb-2 leading-snug">
        {topic.label}
      </h3>

      {/* Descripción complementaria */}
      <p className="text-sm text-muted-foreground leading-relaxed mt-auto">
        {topic.description}
      </p>
    </motion.div>
  );
};
