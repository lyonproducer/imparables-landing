"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { LinesBackground } from "@/components/ui/LinesBackground";
import { ImparablesColorTheme } from "@/lib/design-system/imparables-tokens";

interface ImparablesCardProps {
  theme?: ImparablesColorTheme;
  tag?: string;
  title?: string;
  subtitle?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  hasLinesTexture?: boolean;
  withCornerAccent?: boolean;
}

export const ImparablesCard: React.FC<ImparablesCardProps> = ({
  theme = "dark",
  tag,
  title,
  subtitle,
  icon,
  children,
  className = "",
  hasLinesTexture = false,
  withCornerAccent = true,
}) => {
  const shouldReduceMotion = useReducedMotion();

  const themeClasses: Record<ImparablesColorTheme, string> = {
    blue: "bg-gradient-to-br from-[#003875] via-[#002855] to-[#001733] border-blue-400/20 text-white shadow-blue-950/50",
    amber: "bg-gradient-to-br from-[#FFB100] via-[#E89E00] to-[#C78500] border-amber-300/30 text-neutral-950 shadow-amber-950/30",
    light: "bg-[#F4F4F6] border-white/80 text-neutral-900 shadow-black/15",
    dark: "bg-[#0E1015] border-white/15 text-foreground shadow-black/60",
    lines: "bg-background-elevated/90 border-white/20 text-foreground shadow-black/40",
  };

  const accentLineColors: Record<ImparablesColorTheme, string> = {
    blue: "bg-[#FFB100]",
    amber: "bg-neutral-950",
    light: "bg-[#004F9E]",
    dark: "bg-[#FFB100]",
    lines: "bg-[#FFB100]",
  };

  return (
    <motion.div
      whileHover={shouldReduceMotion ? undefined : { y: -6 }}
      transition={{ duration: 0.3 }}
      className={`group relative flex flex-col justify-between p-8 rounded-3xl border shadow-2xl overflow-hidden transition-all duration-300 cursor-pointer ${
        themeClasses[theme]
      } ${withCornerAccent ? "imparables-corner-accent" : ""} ${className}`}
    >
      {/* Optional Vector SVG Lines Texture Background */}
      {(hasLinesTexture || theme === "lines") && (
        <div className="absolute inset-0 pointer-events-none select-none opacity-20 z-0">
          <LinesBackground />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E1015] via-transparent to-transparent opacity-70" />
        </div>
      )}

      {/* Top Header Row */}
      {(tag || icon) && (
        <div className="relative z-10 flex items-center justify-between gap-4 mb-6">
          {tag && (
            <span
              className={`text-xs font-sans font-bold tracking-[0.08em] uppercase px-2.5 py-1 rounded-md ${
                theme === "amber"
                  ? "bg-neutral-950/10 text-neutral-950"
                  : theme === "light"
                  ? "bg-neutral-200 text-neutral-600"
                  : theme === "blue"
                  ? "bg-white/10 text-blue-200"
                  : "bg-white/5 border border-white/10 text-muted-foreground"
              }`}
            >
              {tag}
            </span>
          )}
          {icon && (
            <div
              className={`w-9 h-9 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform ${
                theme === "amber"
                  ? "bg-neutral-950/10 text-neutral-950"
                  : theme === "light"
                  ? "bg-neutral-200 text-[#004F9E]"
                  : theme === "blue"
                  ? "bg-white/10 text-[#FFB100]"
                  : "bg-white/5 border border-white/10 text-accent"
              }`}
            >
              {icon}
            </div>
          )}
        </div>
      )}

      {/* Middle Content */}
      <div className="relative z-10 my-auto py-2">
        {title && (
          <h3 className="font-display font-extrabold text-2xl sm:text-3xl tracking-tight leading-snug">
            {title}
          </h3>
        )}
        {title && (
          <div
            className={`w-10 h-1 mt-3 rounded-full group-hover:w-16 transition-all duration-300 ${accentLineColors[theme]}`}
          />
        )}
        {subtitle && (
          <p
            className={`mt-4 text-sm sm:text-base leading-relaxed ${
              theme === "amber"
                ? "text-neutral-950 font-medium"
                : theme === "light"
                ? "text-neutral-700 font-normal"
                : theme === "blue"
                ? "text-blue-100/90 font-normal"
                : "text-muted-foreground font-normal"
            }`}
          >
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </motion.div>
  );
};
