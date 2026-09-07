# Nexus Design System Master (UI/UX Pro Max)

> **SOURCE OF TRUTH:** This document defines the design tokens, component architecture, spatial system, motion physics, and visual guidelines for **Mundo Nexus (`/nexus`)**.
> For the cultural & inspirational world, see `design-system/imparables-platform/MASTER.md`.

---

## 1. Brand Identity & Design Philosophy

- **Platform:** Imparables Nexus 2026 — El futuro de las empresas ya está pasando
- **Core Narrative:** *"La tecnología dejó de ser una opción para convertirse en parte esencial del crecimiento de cualquier empresa."*
- **Aesthetic Philosophy:** **Cyber-Architectural Futurism & High-Contrast Editorial Polish**.
  - Merges cutting-edge WebGL graphics (CRT raster scanners, glass refraction fluid shaders, 3D tickets) with clean, Swiss-inspired typography.
  - Rejects generic AI clichés (no random glowing bubbles, no purple-on-purple gradient blobs, no ungrounded cards).
  - Every glow has an architectural source (the ceiling lamp, the ticket halo, the scanner electron sweep).
- **Primary Canvas Rule:** Deep Obsidian Space (`#080808` / `#0B132B`).
  - Unlike Mundo Imparables (anchored on Royal Blue `#0066b0`), Mundo Nexus operates in a deep, nocturnal cyber canvas (`#080808`), layered with Electric Blue (`#004F9E`, `#0284C7`), Amber Gold (`#FFB100`), and Ice White (`#FFFFFF`).

---

## 2. Color Palette & Semantic Token Architecture

### 2.1 Primitive & Semantic Tokens

| Token | CSS Variable / Class | Hex / Value | Purpose & Contrast |
|---|---|---|---|
| **Nexus Canvas** | `bg-[#080808]` | `#080808` | Primary nocturnal canvas across all Nexus sections |
| **Elevated Navy** | `bg-[#0B1528]` | `#0B1528` | Elevated card & container backdrop |
| **Obsidian Glass** | `bg-[#0D1626]/80` | `#0D1626` | Translucent glassmorphic card base with `backdrop-blur-xl` |
| **Electric Blue** | `--color-primary` | `#004F9E` | Primary brand technological authority & active states |
| **Cyan Glow** | `bg-[#0284C7]` | `#0284C7` | Diffuse ambient light & secondary lamp aura |
| **Golden Amber** | `--color-accent` | `#FFB100` | High-energy focal accents, countdown highlights, 'X' logo letter |
| **Ice White** | `text-white` | `#FFFFFF` | Primary headlines, bright signal peaks, high-contrast text |
| **Illuminated Card**| `bg-[#E8F1FA]` | `#E8F1FA` | High-contrast featured pricing surface (WCAG AAA with `#081528` text) |
| **Muted Slate** | `text-muted-foreground` | `#94A3B8` | Explanatory copy, secondary metadata |
| **Glass Border** | `border-white/12` | `rgba(255,255,255,0.12)` | Subtle frosted glass outline |

---

## 3. Typography Hierarchy & Anti-AI-Slop

- **Display Headings (`--font-display`):** `Space Grotesk` (Weights: 700 bold, 800 extrabold, 900/950 black).
  - Tracking: `tracking-tight` (`-0.03em`).
  - Leading: `leading-[1.1]` to `leading-[1.15]`.
- **Editorial Body & UI (`--font-body`, `--font-sans`):** `DM Sans` (Weights: 400 normal, 500 medium, 700 bold).
  - Line height: `leading-relaxed` (`1.625`).
- **Anti-AI-Slop Directives:**
  - **No Monospace Badges:** Never use `font-mono` for metadata, tags, or pills. All technical accents use `font-sans font-bold uppercase tracking-wider`.
  - **No Redundant Pill Badges:** Removed generic pill bubbles (`IMPARABLES PRESENTA...`, `Pase oficial 3D...`). Let the typography and 3D artifacts breathe.
  - **Unboxed Typographic Overlines:** Subheaders and countdown titles float cleanly without frosted pill boxes.

---

## 4. Architectural & WebGL Component Stack

### 4.1 WebGL Background Scanner (`<Scanner />`)
- **Technology:** WebGL 2 shader built with `ogl`.
- **Shader Pipeline:** Ray-marched CRT raster scanlines, noise wave field (`fbm`), chromatic separation (`uColorSpread: 0.65`), and subtle camera grain.
- **Palette Mapping:**
  - `uColor1`: `#004F9E` (Deep electric blue base)
  - `uColor2`: `#FFB100` (Amber gold interference bands)
  - `uColor3`: `#FFFFFF` (Bright signal peaks)
- **Vignette Layering:** Blended through dual linear and radial vignette masks so text and 3D models stand out with pristine legibility.

### 4.2 Ceiling Conic Lamp Effect (`<LampEffect />`)
- **Architecture:** Positioned at `absolute -top-12 sm:-top-6 inset-x-0 z-0`.
- **Z-Index Layering:** Hangs **behind the `FloatingDualNav` (z-50)** and shines **downward over the `WarpText` logo**.
- **Conic Beams:**
  - Left conic: `conic-gradient(from 70deg at 50% 0%, #004F9E, transparent 60%)`
  - Right conic: `conic-gradient(from 290deg at 50% 0%, transparent 40%, #004F9E 100%)`
  - Filament bar: Amber incandescent beam `bg-gradient-to-r from-transparent via-[#FFB100] to-transparent` with golden bloom.

### 4.3 Refraction Fluid Logo (`<WarpText />`)
- **Technology:** WebGL glass refraction shader with mouse fluid displacement.
- **Special Branding Rule:** The letter **"X"** in "NEXUS" is rendered in **Amber Gold (`#FFB100`)**, while "N", "E", "U", "S" render in pure white, exactly matching the vector logo `nexus-logo.webp`.
- **Enhanced Physics:**
  - `fontWeight: 950` with `strokeWidth: 3.5` for ultra-bold presence.
  - `pointerStrength: 0.65` for reactive, dynamic cursor distortion.

### 4.4 3D Interactive Ticket (`<AdmitOneTicket />`)
- **Interactive Physics:** Interactive WebGL 3D card with dual-axis mouse tilt, parallax layering, holographic reflection, and realistic drop shadow.
- **Data Attributes:** "EL FUTURO DE LAS EMPRESAS", "7 NOVIEMBRE 2026", "PUERTO ORDAZ, VZLA".

### 4.5 Countdown Timer (`<EventCountdown />`)
- **Philosophy:** Clean, unboxed typography. Removed frosty background pills.
- **Display:** Individual glass digit cards (`bg-[#03152B]/85 border border-white/15`) with amber accent on days (`#FFB100`), driven by a real-time interval targeting November 7, 2026.

### 4.6 3-Tier Pricing Structure (`<Pricing />`)
- **Layout:** 3-column responsive grid adapted from modern enterprise pricing architecture.
- **Fase 1 — Primera Preventa (Featured / Illuminated):**
  - Surface: Crisp light glass card (`bg-[#E8F1FA] text-[#081528]`) with deep navy button.
  - Price: **30 USDT / 45 BCV (Tasa Oficial)**.
  - Features: Preferential early access, guided networking, full summit access.
- **Fase 2 — Segunda Preventa (Regular):**
  - Surface: Obsidian dark glass card (`bg-[#0D1626]/80 border border-white/12`).
  - Price: **45 USDT / 65 BCV (Tasa Oficial)**.
  - Features: General access, networking, welcome kit, digital certificate.
- **Fase 3 — Acceso Streaming (Global Digital):**
  - Surface: Obsidian dark glass card.
  - Price: **30 USDT / 45 BCV (Tasa Oficial)**.
  - Features: 1080p HD live stream, interactive Q&A, 30-day recordings access.
### 4.7 4-Tier Corporate Sponsorship Architecture (`<Sponsorship />`)
- **Layout:** 4-column responsive grid adapted from the gold-accented enterprise plan architecture (Image 2).
- **Featured Golden Card (Titanium / Presentador):**
  - Surface: Radiant golden amber (`bg-[#FFB100] text-neutral-950 border-2 border-amber-300 shadow-2xl shadow-amber-500/30`).
  - Header: Crown icon with floating pill badge `MÁXIMA EXPOSICIÓN · EXCLUSIVO`.
  - Price: **$500 USD / 575 BCV**.
  - CTA Button: Deep black pill button (`bg-[#111111] hover:bg-black text-white rounded-full py-3`).
  - Benefits: Exclusividad de categoría ("Presentado por [Tu Marca]"), vocería de 5 min en apertura/cierre, presencia prioritaria en campaña (Meta Ads, radio, prensa), overlay en streaming, stand VIP, 5 entradas VIP + 5 accesos streaming.
- **Regular Sponsorship Cards (Bronce, Plata, Oro):**
  - Surface: Obsidian dark glass card (`bg-[#0D1626]/85 backdrop-blur-xl border border-white/12 text-white`).
  - Tiers:
    * **Bronce:** **$200 USD / 215 BCV** (Logo en pendones generales, mención en streaming, 2 entradas generales).
    * **Plata:** **$300 USD / 345 BCV** (Stand en hall presencial, comercial previo en streaming, logo en material, 2 presenciales + 2 streaming).
    * **Oro:** **$400 USD / 460 BCV** (Presencia protagónica en backdrop, banner en streaming, spot publicitario en pausas, espacio VIP, 3 VIP + 3 streaming).
  - CTA Button: Translucent outline pill button (`bg-white/5 hover:bg-white/10 border border-white/15 text-white rounded-full py-3`).
- **Currency Switcher:** Dual interactive selector `[ Aporte en USD ]` / `[ Costo Est. BCV ]`.

---

## 5. Summary of Hero Cleanups

1. **Tag Eliminated:** Removed `IMPARABLES PRESENTA · EL FUTURO DE LAS EMPRESAS` kicker pill.
2. **Description Eliminated:** Removed long paragraph under NEXUS.
3. **Helper Badge Eliminated:** Removed `Pase oficial 3D · Mueve el cursor para interactuar`.
4. **Date & Venue Badges Eliminated:** Removed duplicate badges above the CTAs.
5. **Countdown Background Eliminated:** Removed frosted backdrop pill behind `CUENTA REGRESIVA · 7 DE NOVIEMBRE 2026`.
6. **Result:** A cinematic, minimalist hero section focused purely on the illuminated Lamp, the bold WarpText NEXUS, the 3D Ticket, the Countdown, and the CTAs.
