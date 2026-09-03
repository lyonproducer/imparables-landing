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

## 3. Typography Hierarchy & Anti-AI-Slop

- **Display Headings (`--font-display`):** `Space Grotesk` (Weights: 700 bold, 800 extrabold, 900 black).
  - Tracking: `tracking-tight` (`-0.03em`).
  - Leading: `leading-[1.08]` to `leading-[1.15]`.
- **Editorial Body & UI (`--font-body`, `--font-sans`):** `DM Sans` (Weights: 400 normal, 500 medium, 700 bold).
  - Leading: `leading-relaxed` (`1.625`).
  - Max line length: 60–75 characters (`max-w-prose` / `max-w-2xl`).
- **Kickers, Badges & Metadata (Swiss Modernist `DM Sans`):**
  - **NO `font-mono`:** Monospace fonts are strictly banned for badges, kickers, and metadata to avoid developer "AI-slop" aesthetics.
  - Standard: `font-sans font-bold uppercase`.
  - Kicker Badges & Category Tags: `text-[10px]` to `text-xs`, `tracking-[0.08em]`.
  - Secondary Metadata & Dates: `text-xs`, `tracking-[0.06em]`.

---

## 4. Component Design Specifications

### 4.1 `FloatingDualNav` (Smart Scroll Navigation Capsule)
- **Geometry:** Centered pill capsule (`rounded-full`), floating `fixed top-0` at `z-50`.
- **Dual Selector:** Split pills between "Mundo Imparables" and "Mundo Nexus" separated by a `w-px h-5 bg-white/15` vertical divider.
- **Smart Scroll Hide/Reveal:**
  - Hides smoothly on scroll down (`deltaY > 8` and `scrollY > 60`) using Impeccable motion exit easing `[0.32, 0, 0.67, 0]`.
  - Reappears instantly on scroll up (`deltaY < -8`) using entrance easing `[0.16, 1, 0.3, 1]`.
  - Locked visible at the top (`scrollY <= 60`) and whenever the mobile menu is open.
- **Backdrop:** Adaptive blur (`backdrop-blur-xl bg-background/85 border-white/15 shadow-2xl`).

### 4.2 `ImparablesPlatform` (Interlocking Architectural Pillars)
- **Concept:** 4 foundational brand pillars (Inspiración, Negocios, Oratoria, Tecnología).
- **Geometry:** Sharp 90-degree square tiles (`aspect-square border shadow-2xl overflow-hidden`, zero rounded corners).
- **Interlocking Keys:** Desktop square tabs (`leftKeyColor`, `rightKeyColor` tabs) creating an interlocking puzzle chain across columns.
- **Responsive Layout:**
  - **Desktop (`lg:`):** Single horizontal full-bleed 4-column row (`grid-cols-4`).
  - **Mobile:** Strict **2x2 grid (`grid-cols-2`)** with scaled typography (`text-base` headers, `text-xs` descriptions) and compact padding.

### 4.3 `ImparablesPartners` (Single-Row Autoplay Marquee)
- **Layout Architecture:** Single continuous horizontal autoplay marquee row (`animate-partner-marquee`) instead of multi-row static grids.
- **Motion Physics:** 60/120fps GPU accelerated continuous sliding (`translate3d(-50%, 0, 0)`).
- **Pause on Hover:** Automatically pauses motion (`hover:[animation-play-state:paused]`) when hovered so users can inspect, click, or see logo transitions without chasing the card.
- **Card Geometry:** Sharp architectural geometric square tiles (`w-[270px] sm:w-[310px] aspect-square shrink-0`, no rounded-3xl).
- **Internal Card Hierarchy:**
  1. Top header: Category tag (left) + index number with arrow `01 ↗` (right) in `font-sans font-bold tracking-widest uppercase`.
  2. Center: Brand logo with smooth hover cross-fade (color/white/gold).
  3. Bottom: Title in `font-display font-extrabold`, expanding accent line (`group-hover:w-16`), and role/description text.
- **Edge Vignette Masks:** Soft gradient masks on left/right edges (`w-16 sm:w-36 bg-gradient-to-r/l`) for seamless enter/exit.
- **Background Texture:** `nexus-lines-pattern.jpg` with `opacity-35` and dual gradient vignettes.

### 4.4 Section Kickers & Brand Overlines (No Pill Badges)
- **Design Decision:** Pill capsules and badge bubbles (`rounded-full border backdrop-blur-xl`) are completely eliminated.
- **Architectural Standard:** Sections use clean, unboxed typographic kickers paired with the brand geometric glyph (`ImparablesInterlock size="sm"`):
  - Typography: `font-sans font-bold text-xs tracking-[0.08em] uppercase`.
  - Colors: `#004F9E` on light surfaces; `#FFB100` on dark obsidian surfaces.
  - Structure: `<div className="flex items-center gap-2 mb-4"><ImparablesInterlock size="sm" /><span>...</span></div>`.
- **Banned Elements:** Never use sparkle, star, or asterisk icons.

### 4.5 `ImparablesTrackDivider` (Connecting Golden Thread)
- **Role:** Visual seam transition between sections.
- **Canvas:** `#F0F2F6` off-white band (default height: 56px).
- **Motif:** Smooth curved dashed golden path (`#FFB100`, `strokeDasharray="10 10"`, `strokeWidth="3"`) with a blurred ambient glow underlay and dual connection node circles (`cx="360"`, `cx="1080"`).

### 4.6 `ScrollExpand` & `ImparablesCommunity` (Scroll-Driven Interactive Portal)
- **Behavior:** Scroll-linked sticky expansion wrapper.
- **Phase 1 (0 -> 0.35 scroll progress):** Unexpanded centered card with background image and decorative track curves.
- **Phase 2 (0.35+ scroll progress):** Card expands to full-bleed (`100vw` x `100vh`, radius `0px`). Scrim locks at `0.75`. Form locks at `100%` opacity throughout the sticky scroll duration (`scrollDistance={3.2}`).
- **Exit:** Unpins naturally into normal document flow toward the Instagram feed and footer.

### 4.7 `ImparablesInstagramFeed` (Infinite Marquee)
- **Track:** Continuous infinite linear marquee loop (`repeatType: "loop"`, `ease: "linear"`).
- **Speed Token:** `duration: 75` seconds for smooth, slow, elegant motion.
- **Card Geometry:** Portrait ratio (`h-72 sm:h-80 md:h-[360px] lg:h-[420px]` with widths `w-48` to `w-72`).
- **Badge:** Central floating circular Instagram badge with interactive gradient ring blur (`group-hover:scale-110`).

### 4.8 `ProgressiveBlur` & `ImparablesFooter`
- **Progressive Blur:** Multi-stop CSS gradient backdrop blur pinned at bottom viewport (`pointer-events-none`).
- **Footer Spacing:** Extended bottom padding (`pb-36 md:pb-44 lg:pb-48`) ensuring footer content and links are never obstructed by the progressive blur or floating navigation capsule.

---

## 5. Motion & Physics Tokens

- **Spring Transitions:** `stiffness: 350, damping: 22` (interactive hover cards).
- **Card Hover Elevation:** `y: -6px` (standard card) to `y: -12px, scale: 1.025` (platform pillar).
- **Fade Up Transition:** `duration: 0.5s, ease: [0.22, 1, 0.36, 1]`.
- **Smart Scroll Navigation:** `duration: 0.3s, ease: [0.16, 1, 0.3, 1]` (entrance), `duration: 0.25s, ease: [0.32, 0, 0.67, 0]` (exit).
- **Accessibility:** Full `useReducedMotion` fallback on all animated containers (`shouldReduceMotion ? undefined : ...`).

---

## 6. Component Anti-Patterns & Clean UI Rules

1. **NO `font-mono` on Badges/Tags/Kickers:**
   - Do not use monospace fonts for kickers, badges, or dates. Standardize on `font-sans` (`DM Sans`) with calibrated uppercase tracking (`tracking-[0.08em]`).
2. **NO Sparkle / Asterisk Icons in Badges:**
   - Eliminate all "AI-style" spark icons, asterisks, or gemini stars inside badges. Badges must be clean, architectural typographic capsules.
3. **NO Floating Pill Badges on Imagery:**
   - Do not place repetitive pill badges (`rounded-full bg-black/70 ...`) over flyer artwork, posters, or card visual assets. Artwork must remain clean, uncluttered, and editorial. All categorizations and metadata belong in the clean typography area below the image.
4. **NO Rounded-3xl on Brand/Partner Cards:**
   - Do not use generic bubbly rounded corners (`rounded-3xl`) for partner cards. Use sharp 90-degree architectural geometric square tiles (`aspect-square border shadow-2xl overflow-hidden`).
5. **NO Multi-Row Static Brand Walls:**
   - Do not build crowded multi-row grids for partner logos. Use a single-row infinite autoplay marquee with pause-on-hover and edge gradient vignettes.
