# Page Specification: Mundo Imparables (`/`)

> **Page Route:** `/`  
> **Source Component:** `app/(imparables)/page.tsx`  
> **Layout:** Dual-World Landing Architecture
> **Primary Canvas:** Royal Blue `#0066b0` (`--color-background`)

---

## 1. Page Section Sequence

```
1. Header (FloatingDualNav)
2. ImparablesHero (Primary Canvas #0066b0)
3. ImparablesPlatform (2x2 Mobile, 4x1 Desktop)
4. ImparablesTrackDivider (Golden thread seam #F0F2F6)
5. ImparablesFormats (Conferencias, Formaciones, Summit Spotlight)
6. ImparablesPartners (Continuous Marquee on #0066b0)
7. ImparablesImpact (Metrics & Testimonials)
8. ImparablesCommunity (ScrollExpand Sticky Form)
9. ImparablesInstagramFeed (Infinite Marquee 75s)
10. ImparablesFooter
11. ProgressiveBlur (Bottom Ambient Viewport)
```

---

## 2. Section Details & Token Mapping

### 2.1 Hero (`ImparablesHero`)
- **Background:** Primary Royal Blue canvas (`#0066b0`), concentric SVG track lines (`LinesBackground`), radial ambient glows (`#004F9E/20`, `#FFB100/15`).
- **Layout:** Asymmetric 12-column grid (`lg:grid-cols-12`).
  - Left (6 cols): Editorial H1 with gradient text span (`from-accent via-amber-300 to-amber-500`), descriptive lead paragraph, CTAs with primary button and link to `#comunidad`.
  - Right (6 cols): Dynamic flyer preview with interactive toggle between top and bottom cards.
- **Micro-components:** `TextLoop` for dynamic rotating badges.

### 2.2 Platform Pillars (`ImparablesPlatform`)
- **Grid Layout:**
  - **Mobile:** `grid-cols-2` (2 rows x 2 columns). Compact padding `p-4`, adjusted typography to prevent text clipping.
  - **Tablet:** `sm:grid-cols-2`.
  - **Desktop:** `lg:grid-cols-4` (Single unified row with simulated interlocking tabs).
- **Pillars Data:**
  1. *Inspiración* (Navy Blue `#003875` surface, golden accent)
  2. *Negocios* (Obsidian Dark `#0E1015` surface, blue accent)
  3. *Oratoria* (Off-White `#F4F4F6` surface, dark slate contrast)
  4. *Tecnología* (Golden Amber `#FFB100` surface, navy contrast)

### 2.3 Track Divider (`ImparablesTrackDivider`)
- **Container:** Full-width light seam (`#F0F2F6`, `height={56}`).
- **Vector Pattern:** Dashed yellow thread (`#FFB100`, `strokeDasharray="10 10"`) with dual white-bordered anchor dots.

### 2.4 Formats & Nexus Spotlight (`ImparablesFormats`)
- **Featured Card:** Imparables Nexus spotlight card with deep blue gradient (`from-[#003875] via-[#00224a] to-[#0E1015]`), date badges, and direct CTA to `/nexus`.
- **Format Cards Grid:** 3 high-contrast cards (`ImparablesCard` components) layered above the `#0066b0` canvas covering Conferencias, Formaciones, and Summit experiences.

### 2.5 Partners (`ImparablesPartners`)
- **Background:** Primary Royal Blue canvas (`#0066b0`) with top border `border-white/10` and edge vignette masks (`from-[#0066b0] to-transparent`).
- **Layout Architecture:** Single continuous horizontal autoplay marquee row (`animate-partner-marquee`) with GPU-accelerated motion and pause on hover.
- **Card Geometry:** Sharp architectural geometric square tiles (`aspect-square border shadow-2xl`).

### 2.6 Impact & Metrics (`ImparablesImpact`)
- **Metrics:** Impact numbers and transformational trajectory.
- **Surface:** Layered above the `#0066b0` canvas with subtle contrast divider accents.

### 2.7 Community & Contact (`ImparablesCommunity` + `ScrollExpand`)
- **Scroll Distance:** `3.2` (320vh scroll runway).
- **Entrance:** Starts as a compact card (`36vw` x `48vh` desktop, `88vw` x `58vh` mobile) with concentric track lines overlay (`z-[15]`) and central logo badge (`z-20`).
- **Expansion:** Card expands to `100vw` x `100vh` between progress `0` and `0.35`.
- **Form Persistence:** Form opacity locks to `1` at progress `>= 0.35` and stays strictly visible and interactive until smooth exit into footer.

### 2.8 Instagram Feed (`ImparablesInstagramFeed`)
- **Motion:** Framer Motion infinite linear marquee, `duration: 75s`.
- **Aspect Ratio:** Portrait cards (`h-72` mobile, `h-[420px]` desktop).
- **Center Node:** Floating circular Instagram trigger with glowing gradient pulse.

### 2.9 Footer (`ImparablesFooter`)
- **Background:** Deep obsidian navy (`#030f1c`) grounding the page with top border `border-white/10` and atmospheric glow.
- **Padding:** `pt-16 pb-36 md:pb-44 lg:pb-48` to avoid overlap with `ProgressiveBlur` and `FloatingDualNav`.
- **Content:** Logo, Puerto Ordaz location tag with `ImparablesInterlock`, dual-world directory links, and back-to-top scroll trigger.
