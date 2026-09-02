import React from "react";

export function LinesBackground({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`w-full h-full pointer-events-none select-none ${className}`}
      viewBox="0 0 800 600"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="linesBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.4" />
          <stop offset="100%" stopColor="var(--color-primary-hover)" stopOpacity="0.05" />
        </linearGradient>
        <linearGradient id="accentGlowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.1" />
          <stop offset="50%" stopColor="var(--color-accent)" stopOpacity="0.7" />
          <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0.1" />
        </linearGradient>
      </defs>

      {/* Arcos concéntricos inspirados en las líneas de pista de Imparables */}
      {[...Array(7)].map((_, i) => (
        <path
          key={i}
          d={`M -80 ${80 + i * 65} Q 280 ${-60 + i * 65} 620 ${140 + i * 65} T 900 ${280 + i * 65}`}
          stroke="url(#linesBlueGrad)"
          strokeOpacity={0.25 + i * 0.04}
          strokeWidth="32"
          fill="none"
        />
      ))}

      {/* Línea fluida con curva de lazo sutil acentuada en color de marca */}
      <path
        d="M -100 480 C 120 380, 220 590, 360 460 S 650 260, 920 320"
        stroke="url(#accentGlowGrad)"
        strokeWidth="2.5"
        strokeDasharray="6 3"
        fill="none"
      />

      {/* Detalle de curva en lazo sutil */}
      <circle
        cx="360"
        cy="460"
        r="4"
        fill="var(--color-accent)"
        className="opacity-70"
      />
    </svg>
  );
}
