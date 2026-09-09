# Page Specification: Mundo Nexus (`/nexus`)

> **Location:** `app/(nexus)/nexus/page.tsx`  
> **Route:** `/nexus`  
> **World:** Nexus (Tecnología, Inteligencia Artificial, Negocios y Futuro Empresarial)

---

## 1. Page Flow & Section Map

| Order | Section Component | Anchor ID | Background Surface | Key Purpose |
|---|---|---|---|---|
| **01** | `Hero` | `#hero` | Nocturnal `#080808` + WebGL `<Scanner />` | Cinematic arrival, 3D Admit One Ticket, Countdown |
| **02** | `AboutEvent` | `#sobre-el-evento` | Elevated Navy `#0B1528` | Purpose and thesis of the event |
| **03** | `Topics` | `#temas` | Dark Canvas `#080808` | 2x4 Alternating Checkerboard: 4 thematic pillar cards + 4 3D artworks |
| **04** | `Audience` | `#perfil` | Deep Navy `#0B132B` | Who this event is designed for |
| **05** | `Speakers` | `#expertos` | Dark Canvas `#080808` | Panelists, speakers slider carousel, and founder keynote |
| **06** | `Agenda` | `#agenda` | Elevated Navy `#0B1528` | Chronological schedule of panels and breaks |
| **07** | `Pricing` | `#entradas` | Dark Canvas `#080808` + Atmospheric Glows | 3-tier ticketing cards with dual USDT / BCV currency |
| **08** | `Sponsorship` | `#patrocinios` | Nocturnal `#080808` + Golden Accents | 4-tier corporate sponsorship plans with live USD / BCV toggle |
| **09** | `Partners` | `#aliados` | Elevated Navy `#0B1528` | Symmetric 6-partner strategic alliance grid |
| **10** | `RegisterCTA` | `#registro` | Electric Gradient + Glass Card | Registration form and checkout conversion |

---

## 2. Section Details

### 2.1 Hero (`#hero`)
- **Visual Centerpiece:**
  1. Core: High-impact `WarpText` with "NEXUS" in ultra-bold weight (950 + 3.5px stroke) and amber 'X'.
  2. Interactive 3D WebGL Admit One Ticket (`<AdmitOneTicket />`) with realistic tilt and holographic sheen.
  3. Real-time countdown timer (`<EventCountdown />`) to November 7, 2026 without blurry pill background.
  4. Direct CTA buttons (*Quiero asistir*, *Conoce los temas*).
- **Background:** WebGL `<Scanner />` with electric blue (`#004F9E`), amber (`#FFB100`), and white peaks over `#080808`.

### 2.2 Pricing & Preventa (`#entradas`)
- **Visual Design:** Adapted from high-converting SaaS & conference pricing patterns with scarcity and price-anchor urgency.
- **Tiers:**
  1. **Reservación General · Preventa (Featured / Illuminated):**
     - Price: 40 USDT / 52 BCV (Tasa Oficial) — Strikethrough regular: 50 USDT / 65 BCV (-20% OFF).
     - Surface: High-contrast light card (`bg-[#E8F1FA]`), deep navy CTA button.
     - Details: Entrada presencial preferencial anticipada con 20% de ahorro, cupos asignados limitados por fase.
  2. **Reservación General · Regular:**
     - Price: 50 USDT / 65 BCV (Tasa Oficial).
     - Surface: Obsidian dark glass card (`bg-white/[0.04]`).
     - Details: Tarifa general para la jornada completa al culminar la etapa de preventa.
  3. **Acceso Streaming · Preventa:**
     - Price: 24 USDT / 36 BCV (Tasa Oficial) — Strikethrough regular: 30 USDT / 45 BCV (-20% OFF).
     - Surface: Obsidian dark glass card (`bg-white/[0.04]`).
     - Details: Transmisión en vivo 1080p online con grabaciones por 30 días y tarifa especial de preventa.
- **Urgency Mechanism:** Price-anchoring with strike-through regular amounts, `-20% OFF` tag, and limited-seat warning without exposing calendar cutoff dates.
- **Currency Switcher:** Interactive toggle between Dólares / USDT (físico/cripto) and Bolívares (Tasa BCV).

### 2.3 Planes de Patrocinio (`#patrocinios`)
- **Visual Design:** High-impact 4-column corporate grid with dedicated currency toggle (USD vs BCV).
- **Tiers:**
  1. **Bronce:** 200 USD / 215 BCV — Logo en material digital y pantallas laterales, 2 pases VIP.
  2. **Plata:** 300 USD / 345 BCV — Mención por presentador, logo destacado en streaming y web, 4 pases VIP.
  3. **Oro:** 400 USD / 460 BCV — Stand de exhibición, proyección de reel publicitario (30s), 6 pases VIP.
  4. **Titanium / Presentador (Featured):** 500 USD / 575 BCV —
     - Surface: Vibrant solid golden amber (`bg-[#FFB100] text-neutral-950`).
     - Button: Obsidian black pill (`bg-[#111111] text-white`).
     - Details: "Presentado por [Tu Marca]", keynote spot de 5 min, stand preferencial A1, 10 pases VIP.

### 2.4 Panelistas Principales (`#expertos`)
- **Visual Design:** Inspired by high-end modern team showcases (large headline typography + 4:5 rounded portrait cards + external subtitle hierarchy).
- **Interactive Slide Carousel:**
  - Active when panelists > 4 (currently 5 confirmed leaders).
  - Desktop: 4 cards visible side-by-side (`lg:w-[calc(25%-18px)]`), smooth snap-scroll to reveal subsequent speakers.
  - Navigation: Pill glass controls (`CaretLeft`, `CaretRight`) on top right + real-time counter (`01 / 05`) + dynamic dot progress bar.
- **Card Geometry & Lighting:**
  - Ratio: `aspect-[4/5]`, rounded corners (`rounded-3xl`).
  - Surface: Nocturnal gradient (`from-[#14233F]/75 via-[#0A1324]/90 to-[#060B14]`) with top radial blue spotlight glow (`rgba(0,79,158,0.3)`).
  - Image: Transparent cutout WebP (`leonardo.webp`, `ezequiel.webp`, `rene.webp`, `josmel.webp`, `victor.webp`) with hover scale transition.
  - Typography: Name in bold white font (`font-display text-xl`) with role and company tags positioned cleanly directly beneath the photo container.
- **Host Spotlight:** Andersong Trocel highlighted as official moderator & founder of Imparables with microphone badge in amber `#FFB100`.

### 2.5 Partners (`#aliados`)
- **Grid Layout:** Balanced 6-partner grid (`grid-cols-1 sm:grid-cols-3`):
  1. Camcaroní (Aliado Institucional)
  2. Eprisma (Aliado Tecnológico)
  3. Rumbapp (Aliado de Innovación)
  4. Mel Visual Designer (Aliado de Diseño)
  5. Mundo Streaming (Aliado de Streaming)
  6. JMI International (Aliado de Moda & Talento)
