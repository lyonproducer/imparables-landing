# Imparables Design System Master (UI/UX Pro Max)

> **SOURCE OF TRUTH:** This document defines the design tokens, component architecture, spatial system, and strict Anti-AI-Slop guidelines for **Mundo Imparables**.
> Page-specific overrides belong in `design-system/imparables-platform/pages/[page-name].md`.

---

**Brand Identity:** Imparables — Plataforma de Experiencias, Formación y Encuentros  
**Philosophy:** Exaggerated Minimalism & Architectural Geometry (High contrast, bold editorial typography, structured square grid, purposeful line tracks).  
**Elimination of AI Slop:** No generic rainbow glow soup, no purple-pink radial gradients, no layout shifts, no emojis as UI icons, no unconstrained card borders.

---

## 1. Color Palette & Semantic Tokens

| Role | Token | Hex / Gradient | Description & Contrast |
|------|-------|----------------|------------------------|
| **Core Blue** | `--color-imparables-blue` | `#004F9E` | Primary brand authority color |
| **Deep Blue** | `--color-imparables-blue-dark` | `#002855` / `from-[#003875] to-[#001733]` | Card gradient background (WCAG AA > 7:1) |
| **Golden Amber** | `--color-imparables-amber` | `#FFB100` | High-energy accent & micro-focus |
| **Amber Dark** | `--color-imparables-amber-dark`| `#C78500` / `from-[#FFB100] to-[#C78500]` | High-contrast energetic card surface |
| **Neutral Light** | `--color-imparables-light` | `#F4F4F6` | Off-white structural surface |
| **Obsidian Dark** | `--color-imparables-dark` | `#0E1015` / `#14171F` | Deep dark slate for glass surfaces |
| **Background** | `--color-background` | `#030F1C` | Rich obsidian navy canvas |
| **Muted Text** | `--color-muted-foreground` | `#9FB4C9` | High legibility secondary copy |

---

## 2. Typography Hierarchy

- **Display & Headings:** `Space Grotesk` (weights: 700 bold, 800 extrabold, 900 black) — tight tracking (`tracking-tight` / `-0.03em`), line-height: 1.08 - 1.15.
- **Body & Subtitles:** `DM Sans` (weights: 400 normal, 500 medium, 600 semibold) — line-height: 1.625 (`leading-relaxed`), max-width 65-75ch (`max-w-prose` / `max-w-2xl`).
- **Technical & Tags:** `Font Mono` (uppercase, tracking `[0.2em] - [0.25em]`, size: `text-xs` / `10px - 12px`).

---

## 3. Component Architecture & Geometry

### Card Architecture (`ImparablesCard`)
- **Structure:** Squared & structured rounded geometry (`rounded-2xl` / `rounded-3xl`).
- **Corner Notches:** Architectural corner brackets (`.imparables-corner-accent`) inspired by brand interlocking squares.
- **4 Quadrant Variants:**
  1. `blue`: Deep royal blue surface with amber micro-accents.
  2. `amber`: Vibrant golden surface with dark navy typography.
  3. `light`: Clean off-white surface with dark slate contrast.
  4. `dark`: Obsidian dark slate with amber focus line.

### Background System (`ImparablesLinesBackground`)
- **Pattern:** Concentric track line curvature (`/backgrounds/nexus-lines-pattern.jpg`) with opacity controlled at 25-45%.
- **Lighting:** Directional dual-glows (Blue top-left `#004F9E`, Amber bottom-right `#FFB100`) with depth vignettes.

---

## 4. Strict Anti-AI-Slop & Professional UI Rules

| Category | ❌ FORBIDDEN (AI Slop) | ✅ REQUIRED (UI/UX Pro Max) |
|----------|------------------------|-----------------------------|
| **Icons** | Emojis (`🚀`, `✨`, `💡`) as interface icons | Consistent Phosphor Icons (`size={18-24}`, duotone/fill) |
| **Colors** | Random pink/purple/violet gradient blobs | Strict 4-color brand tokens (Navy `#004F9E`, Gold `#FFB100`, Light `#F4F4F6`, Dark `#0E1015`) |
| **Cursor** | Default arrow on clickable/hoverable cards | Explicit `cursor-pointer` on all interactive elements |
| **Hover** | Layout-shifting scale transforms that jitter neighbors | Transform `translate-y-[-6px]` / opacity transitions (200-300ms) with `will-change-transform` |
| **Contrast** | Low-contrast light gray on white or dark gray on black | Minimum 4.5:1 WCAG AA contrast for body, 7:1 for headers |
| **Animation** | Gratuitous infinite bouncing decorative icons | Subtle one-time entrance transitions + reduced-motion fallback |
| **Typography** | Full-width wall of unformatted text | Controlled line length (65-75 characters) + editorial rhythm |

---

## 5. Pre-Delivery Verification Checklist

- [x] No emoji icons anywhere in UI components.
- [x] All clickable cards and buttons have `cursor-pointer`.
- [x] Smooth 200-300ms transitions without layout shift.
- [x] Respects `prefers-reduced-motion`.
- [x] Clean responsive layout tested across 375px, 768px, 1024px, 1440px.
- [x] Direct brand-aligned copy without placeholder slop.
