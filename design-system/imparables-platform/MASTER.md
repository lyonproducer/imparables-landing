# Imparables Design System Master (UI/UX Pro Max)

> **SOURCE OF TRUTH:** This document defines the design tokens, component architecture, spatial system, motion physics, and Anti-AI-Slop guidelines for **Mundo Imparables**.
> Page-level architecture and section breakdowns belong in `design-system/imparables-platform/pages/[page-name].md`.

---

## 1. Brand Identity & Design Philosophy

- **Platform:** Imparables — Plataforma de Experiencias, Formación y Encuentros
- **Core Narrative:** *"No importa dónde comienza tu historia. Importa lo que decides hacer con ella."*
- **Aesthetic Philosophy:** **Exaggerated Editorial Minimalism & Architectural Geometry**. High-contrast typography, interlocking puzzle structures, directional track curvature lines, and obsidian-to-amber lighting.
- **Dual-World Architecture:**
  - **Mundo Imparables (`/`):** Cultural, inspirational, leadership, and entrepreneurship platform.
  - **Mundo Nexus (`/nexus`):** AI, automation, and technological enterprise summit.
  - Both worlds are bridged by the top `FloatingDualNav` capsule and unified design token primitives.

---

## 2. Color Palette & Semantic Token Architecture

### 2.1 Primitive & Semantic Tokens

| Token | CSS Variable / Class | Hex / Value | Purpose & Contrast |
|---|---|---|---|
| **Core Blue** | `--color-imparables-blue` | `#004F9E` | Primary brand authority color |
| **Dark Blue** | `--color-imparables-blue-dark` | `#002B5B` | Dark blue container background |
| **Deep Blue** | `--color-imparables-blue-deep` | `#001833` | Deep navy base |
| **Blue Gradient** | `bg-gradient-to-br` | `from-[#003875] via-[#002855] to-[#001733]` | Signature brand card gradient (WCAG > 7:1) |
| **Golden Amber** | `--color-imparables-amber` | `#FFB100` | High-energy focal accent, tags, CTAs, thread line |
| **Amber Hover** | `--color-imparables-amber-hover` | `#E09800` | Active/hover state on amber elements |
| **Amber Gradient**| `bg-gradient-to-br` | `from-[#FFB100] via-[#E89E00] to-[#C78500]` | High-contrast energetic card surface |
| **Neutral Light** | `--color-imparables-light` | `#F4F4F6` | Off-white structural card surface |
| **Light Muted** | `--color-imparables-light-muted` | `#E2E2E8` | Border and secondary light tone |
| **Divider Base** | `--color-divider-bg` | `#F0F2F6` | Track divider background seam |
| **Obsidian Dark** | `--color-imparables-dark` | `#0E1015` | Deep dark slate for glass surfaces & forms |
| **Card Surface** | `--color-imparables-dark-card` | `#14171F` | Elevated dark card container |
| **Canvas** | `--color-background` | `#030F1C` | Rich obsidian navy canvas |
| **Canvas Elevated**| `--color-background-elevated` | `#081D33` | Elevated section backdrop |
| **Foreground Text**| `--color-foreground` | `#F4F8FC` | High-contrast primary copy |
| **Muted Text** | `--color-muted-foreground` | `#9FB4C9` | Secondary copy and technical metadata |

---

## 3. Typography Hierarchy

- **Display Headings (`--font-display`):** `Space Grotesk` (Weights: 700 bold, 800 extrabold, 900 black).
  - Tracking: `tracking-tight` (`-0.03em`).
  - Leading: `leading-[1.08]` to `leading-[1.15]`.
- **Editorial Body (`--font-body`):** `DM Sans` (Weights: 400 normal, 500 medium, 600 semibold).
  - Leading: `leading-relaxed` (`1.625`).
  - Max line length: 60–75 characters (`max-w-prose` / `max-w-2xl`).
- **Technical Badges & Kicker Tags (`--font-mono`):** `Space Mono` / System Monospace.
  - Case: Uppercase.
  - Tracking: `tracking-widest` (`[0.18em]` to `[0.25em]`).
  - Font Size: `text-[10px]` to `text-xs`.

---

## 4. Component Design Specifications

### 4.1 `FloatingDualNav` (Global Capsule Navigation)
- **Geometry:** Centered pill capsule (`rounded-full`), floating `fixed top-0` at `z-50`.
- **Dual Selector:** Split pills between "Mundo Imparables" and "Mundo Nexus" separated by a `w-px h-5 bg-white/15` vertical divider.
- **Micro-interaction:** Hovering a world smoothly expands sub-navigation links via Framer Motion `AnimatePresence` (`width: 0 -> auto`, `opacity: 0 -> 1`, 280ms cubic-bezier).
- **Backdrop:** Adaptive blur (`backdrop-blur-xl bg-background/85 border-white/15 shadow-2xl`).

### 4.2 `ImparablesPlatform` (Interlocking Puzzle Pillars)
- **Concept:** 4 foundational brand pillars (Inspiración, Negocios, Oratoria, Tecnología).
- **Geometry:** Square aspect ratio (`aspect-square`), architectural interlocking tabs (`leftKeyColor`, `rightKeyColor` tabs creating physical puzzle look on desktop).
- **Responsive Layout:**
  - **Desktop (`lg:`):** Single horizontal full-bleed 4-column row (`grid-cols-4`).
  - **Mobile:** Strict **2x2 grid (`grid-cols-2`)** with scaled typography (`text-base` headers, `text-xs` descriptions) and compact padding (`p-4 sm:p-8`).

### 4.3 `ImparablesTrackDivider` (Connecting Golden Thread)
- **Role:** Visual seam transition between sections.
- **Canvas:** `#F0F2F6` off-white band (default height: 56px).
- **Motif:** Smooth curved dashed golden path (`#FFB100`, `strokeDasharray="10 10"`, `strokeWidth="3"`) with a blurred ambient glow underlay and dual connection node circles (`cx="360"`, `cx="1080"`).

### 4.4 `ScrollExpand` & `ImparablesCommunity` (Scroll-Driven Interactive Portal)
- **Behavior:** Scroll-linked sticky expansion wrapper.
- **Phase 1 (0 -> 0.35 scroll progress):**
  - Unexpanded card starts centered (`36vw` x `48vh` on desktop, `88vw` x `58vh` on mobile, radius `28px`).
  - Card features background image, dark scrim overlay, decorative concentric SVG track lines, and floating title badge with Imparables logo.
- **Phase 2 (0.35+ scroll progress):**
  - Card expands to full-bleed (`100vw` x `100vh`, radius `0px`).
  - Initial title badge and hint arrow fade out completely with `display: "none"`.
  - Scrim locks at `0.75`.
  - Contact & community form enters and **locks deterministically at 100% opacity (`opacity: 1`, `scale: 1`, `y: 0`)** throughout the sticky scroll duration (`scrollDistance={3.2}`).
- **Exit:** Unpins naturally into normal document flow toward the Instagram feed and footer.

### 4.5 `ImparablesInstagramFeed` (Infinite Marquee)
- **Track:** Continuous infinite linear marquee loop (`repeatType: "loop"`, `ease: "linear"`).
- **Speed Token:** `duration: 75` seconds for smooth, slow, elegant motion.
- **Card Geometry:** Portrait ratio (`h-72 sm:h-80 md:h-[360px] lg:h-[420px]` with widths `w-48` to `w-72`).
- **Badge:** Central floating circular Instagram badge with interactive gradient ring blur (`group-hover:scale-110`).

### 4.6 `ProgressiveBlur` & `ImparablesFooter`
- **Progressive Blur:** Multi-stop CSS gradient backdrop blur pinned at bottom viewport (`pointer-events-none`).
- **Footer Spacing:** Extended bottom padding (`pb-36 md:pb-44 lg:pb-48`) ensuring footer content and links are never obstructed by the progressive blur or floating navigation capsule.

---

## 5. Motion & Physics Tokens

- **Spring Transitions:** `stiffness: 350, damping: 22` (interactive hover cards).
- **Card Hover Elevation:** `y: -6px` (standard card) to `y: -12px, scale: 1.025` (platform pillar).
- **Fade Up Transition:** `duration: 0.5s, ease: [0.22, 1, 0.36, 1]`.
- **Accessibility:** Full `useReducedMotion` fallback on all animated containers (`shouldReduceMotion ? undefined : ...`).

---

## 6. Asset & Image Optimization Rule

- **Asset Serving:** Direct CDN static asset delivery (`next.config.ts`: `images: { unoptimized: true }`).
- **Formats:** Optimized `.webp`, `.png`, and `.jpeg` assets with explicit `sizes` and `priority` flags on above-the-fold heroes.

---

## 7. Component Anti-Patterns & Clean UI Rules

- **No Floating Pill Tags / Badges on Imagery:** Do not place repetitive pill badges (`rounded-full bg-black/70 font-mono uppercase ...`) over flyer artwork, posters, or card visual assets. Artwork must remain clean, uncluttered, and editorial. All categorizations and metadata belong in the clean typography area below the image.

