/**
 * Nexus Design System Tokens
 * Source of truth for Mundo Nexus color palette, typography, WebGL shaders and pricing structures.
 */

export const nexusTokens = {
  colors: {
    canvas: {
      primary: "#080808", // Nocturnal dark canvas across all Nexus sections
      elevated: "#0B1528", // Elevated section container backdrop
      glass: "rgba(13, 22, 38, 0.8)", // Translucent obsidian glass card surface
      illuminated: "#E8F1FA", // High-contrast featured light card surface
    },
    blue: {
      core: "#004F9E", // Electric blue primary brand color
      glow: "#0284C7", // Cyan glow and secondary lighting
      dark: "#002855",
      deep: "#001733",
      gradient: "from-[#003875] via-[#002855] to-[#001733]",
    },
    amber: {
      core: "#FFB100", // Signature amber gold (countdown, 'X' logo, badge highlights)
      hover: "#E09800",
      light: "#FFC640",
      glow: "rgba(255, 177, 0, 0.35)",
    },
    neutral: {
      white: "#FFFFFF",
      muted: "#94A3B8",
      darkText: "#081528",
      borderGlass: "rgba(255, 255, 255, 0.12)",
      borderActive: "rgba(255, 177, 0, 0.5)",
    },
  },
  typography: {
    fontDisplay: "var(--font-display)",
    fontBody: "var(--font-body)",
    fontSans: "var(--font-sans)",
  },
  geometry: {
    rounded: {
      pill: "rounded-full",
      card: "rounded-[2rem]",
      container: "rounded-3xl",
      badge: "rounded-lg",
    },
  },
  webgl: {
    scanner: {
      color1: "#004F9E",
      color2: "#FFB100",
      color3: "#FFFFFF",
      opacity: 0.65,
    },
    lamp: {
      beamColor: "#004F9E",
      glowColor: "#0284C7",
      filamentColor: "#FFB100",
    },
    warpText: {
      fontWeight: 950,
      strokeWidth: 3.5,
      pointerStrength: 0.65,
      xLetterColor: "#FFB100",
    },
  },
} as const;

export type NexusColorTheme = "obsidian" | "illuminated" | "electric" | "amber";
