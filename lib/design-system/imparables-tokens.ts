/**
 * Imparables Design System Tokens
 * Source of truth for color palette, geometric rules, typography and patterns.
 */

export const imparablesTokens = {
  colors: {
    canvas: {
      primary: "#0066b0", // Brand primary canvas / main app background
      elevated: "#081D33", // Elevated section backdrop
      deep: "#001833", // Deep navy base
    },
    blue: {
      canvas: "#0066b0", // Primary application background
      container: "#005193", // Card / format container background
      core: "#004F9E",
      dark: "#002B5B",
      deep: "#001833",
      light: "#3378BE",
      gradient: "from-[#003875] via-[#002855] to-[#001733]",
    },
    amber: {
      core: "#FFB100",
      hover: "#E09800",
      light: "#FFC640",
      dark: "#B37A00",
      gradient: "from-[#FFB100] via-[#E89E00] to-[#C78500]",
    },
    neutral: {
      light: "#F4F4F6",
      lightMuted: "#E2E2E8",
      dark: "#0E1015",
      darkCard: "#14171F",
      darkElevated: "#1B202A",
    },
    semantic: {
      background: "#0066b0",
      backgroundElevated: "#081D33",
      foreground: "#F4F8FC",
      mutedForeground: "#9FB4C9",
    },
  },
  typography: {
    fontDisplay: "var(--font-display)",
    fontBody: "var(--font-body)",
    fontMono: "var(--font-mono, monospace)",
  },
  geometry: {
    rounded: {
      box: "rounded-2xl",
      card: "rounded-3xl",
      pill: "rounded-full",
      squareBadge: "rounded-lg",
    },
    patterns: {
      linesUrl: "/backgrounds/nexus-lines-pattern.webp",
    },
  },
  layout: {
    platformGrid: {
      mobile: "grid-cols-2",
      desktop: "lg:grid-cols-4",
      gap: "gap-2.5 sm:gap-4 md:gap-5 lg:gap-6",
    },
    footerPaddingBottom: "pb-36 md:pb-44 lg:pb-48",
  },
  motion: {
    marqueeDuration: 75,
    springHover: { type: "spring", stiffness: 350, damping: 22 },
    scrollExpand: {
      distanceMultiplier: 3.2,
      expansionThreshold: 0.35,
    },
  },
} as const;

export type ImparablesColorTheme = "blue" | "amber" | "light" | "dark" | "lines";
