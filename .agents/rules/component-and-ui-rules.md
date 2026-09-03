# Component and UI Design Rules (Mundo Imparables)

> **MANDATORY DIRECTIVES FOR UI COMPONENT CREATION & MODIFICATION**
> All agents working on this codebase MUST strictly follow these design decisions established for the Imparables Platform.

---

## 1. Typography & Anti-AI-Slop Rules

- **Strictly Banned: `font-mono` on Badges, Tags, and Kickers:**
  - Never use monospace fonts (`font-mono`) for badges, kicker tags, section labels, dates, or card metadata. It looks like generic "AI slop".
  - **Standard Font:** Use **`DM Sans` (`font-sans`)** for all kickers, labels, badges, and metadata tags.
  - **Calibrated Tracking:**
    - Kicker badges & tags: `font-sans font-bold text-[10px] sm:text-xs tracking-[0.08em] uppercase`.
    - Secondary metadata & dates: `font-sans font-medium text-xs tracking-[0.06em]`.
    - Headings: `font-display` (`Space Grotesk`) with `tracking-tight`.

---

## 2. Kickers & Overlines (No Pill Badges Standard)

- **Elimination of Pill Badges:** Never wrap kickers or section titles in pill containers or capsule bubbles (`rounded-full border backdrop-blur ...`). Badges add visual clutter and feel like generic templates.
- **Standard Kicker Architecture:** Use clean, architectural typographic overlines accompanied by the brand glyph (`ImparablesInterlock`):
  ```tsx
  <div className="flex items-center gap-2 mb-4">
    <ImparablesInterlock size="sm" />
    <span className="text-xs font-sans font-bold tracking-[0.08em] uppercase text-[#004F9E]">
      KICKER TEXT
    </span>
  </div>
  ```
- **Banned Icons:** Never insert sparkles, AI stars, asterisks, or gemini-style icons. Kickers must remain purely typographic and architectural.
- **No Floating Badges on Imagery:**
  - Do NOT place floating pill badges (`rounded-full bg-black/70 ...`) over flyer artwork, posters, or portraits.
  - Artwork must remain clean and uncluttered. All categorizations and metadata belong below the image in the clean typography area.

---

## 3. Brand & Partner Cards (Geometric Tile Architecture)

When designing partner, ally, sponsor, or platform pillar cards:

- **Sharp Architectural Geometry (Zero Radius):**
  - Do NOT use `rounded-3xl` or soft pill cards for brand/partner tiles.
  - Cards must be **sharp 90-degree geometric square tiles (`aspect-square overflow-hidden border shadow-2xl`)**.
- **Internal Card Hierarchy:**
  1. **Top Header Row:** Category tag on the left (`font-sans font-bold text-[10px] sm:text-xs tracking-widest uppercase`) and index number with arrow on the right (`01 ↗`, `02 ↗`).
  2. **Central Logo:** Centered brand logo with optional smooth hover cross-fade (e.g. monochrome-to-color or gold-to-white).
  3. **Bottom Meta Area:**
     - Title in `font-display font-extrabold text-base sm:text-lg tracking-tight`.
     - Expanding horizontal accent bar: `w-8 sm:w-10 h-0.5 sm:h-1 rounded-full group-hover:w-16 transition-all duration-300 ${partner.accentBar}`.
     - Role/description in `text-xs leading-relaxed truncate`.
- **Interlocking Geometric Puzzle Keys:**
  - On desktop (`hidden lg:block`), include square key tabs (`w-10 h-10 lg:w-11 lg:h-11 absolute top-1/2 -translate-y-1/2`) on left/right edges to visually connect adjacent tiles.
- **Dynamic Colored Hover Glow:**
  - Dynamic box-shadow on hover: `boxShadow: isHovered ? '0 25px 50px -12px ${partner.glowColor}' : '0 10px 30px -10px rgba(0,0,0,0.5)'`.

---

## 4. Brand Showcase Layout (Single-Row Autoplay Marquee)

- **Single Row Instead of Multi-row Grids:** For partner, sponsor, and brand showcases, use a **single continuous autoplay marquee row** instead of stacked grid rows.
- **Pause on Hover:** The marquee MUST pause automatically when the user hovers over any card (`animation-play-state: paused` / `hover:[animation-play-state:paused]`).
- **Edge Gradient Vignettes:** Always include soft gradient masks on both the left and right viewport edges (`w-16 sm:w-36 bg-gradient-to-r/l`) so cards fade seamlessly into the background.
- **Background Texture:** Use `nexus-lines-pattern.jpg` with calibrated opacity (`opacity-35`) and vertical/horizontal vignette overlays (`from-[#030F1C] via-[#030F1C]/60 to-[#030F1C]`).

---

## 5. Navigation Behavior (`FloatingDualNav`)

- **Smart Scroll Hide/Reveal:**
  - Navbar hides when scrolling down (`deltaY > 8` and `scrollY > 60`).
  - Navbar reappears smoothly when scrolling up.
  - Top of page (`scrollY <= 60`) and open mobile menu keep navbar locked visible.
  - Motion easing: `[0.32, 0, 0.67, 0]` exit, `[0.16, 1, 0.3, 1]` entrance. Respect `useReducedMotion()`.
