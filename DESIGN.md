# DESIGN.md — 朝阳体操队 Documentary Book

> **Project:** Gym History Book
> **Version:** v1.0
> **Status:** Draft — awaiting approval before execution
> **Last updated:** 2026-06-27

---

## 1. Design Philosophy

### 1.1 Core Design Concept: "The Rising Tower"

The entire visual language is built on a single metaphor:

> **A tower rises toward the morning sun.** From darkness (ignorance, struggle) through discipline (the tower's structure) toward illumination (wisdom, victory).

Every design choice — color, layout, animation, typography — traces this arc.

### 1.2 Three Visual Pillars

| Pillar | Visual Expression |
|--------|------------------|
| **师弟不二** (Master & Disciple) | Vertical axis — the tower connects earth to sky, disciple to master. Gold light flows top-down. |
| **异体同心** (Different Bodies, One Heart) | Horizontal axis — multiple figures forming one structure. Repeating circle motifs, interlocking patterns. |
| **Tower as Life's Treasure Tower** | The tower itself as the hero element. Every chapter opens with an ascending tower illustration. |

### 1.3 Emotional Arc Per Act

| Act | Emotion | Visual Treatment |
|-----|---------|-----------------|
| **Preface** | Curiosity | Dark background, single spotlight on a lone figure |
| **Act I: Founding** | Struggle & Triumph | Gritty textures, rain effects (1989 rain performance), warm breakthrough moments |
| **Act II: Foundation** | Growth & Expansion | Map motifs, multiplying figures, network lines connecting states |
| **Castells Interlude** | Discovery | Split-screen layout, side-by-side comparison, cool teal vs warm gold |
| **Act III: Modern** | Continuity | Clean, photographic, video-frame borders, modern typography |
| **Act IV: Philosophy** | Reverence | Minimalist, spacious, gold text on dark, scripture-like layout |
| **Act V: Future** | Hope | Bright, open, sunrise gradient, silhouettes looking forward |

---

## 2. Color System

### 2.1 Primary Palette

```
┌─────────────────────────────────────────────────────────────┐
│  CHAOYANG PALETTE                                           │
│                                                             │
│  navy-950    #0a0e1a   ████████   Deepest night (background)│
│  navy-900    #0f1b3d   ████████   Card backgrounds          │
│  navy-800    #162447   ████████   Section dividers          │
│                                                             │
│  gold-500    #d4a843   ████████   Primary accent (sun)      │
│  gold-400    #e8c456   ████████   Hover, highlights         │
│  gold-300    #f0d878   ████████   Subtle accents            │
│                                                             │
│  sunrise-500 #f07b3f   ████████   Dawn orange (hero moments)│
│  sunrise-400 #f5a15a   ████████   Warm gradients            │
│  sunrise-300 #f9c88b   ████████   Call-to-action            │
│                                                             │
│  coral-500   #e85d5d   ████████   Passion, energy, spirit   │
│  coral-400   #f07b7b   ████████   Tower figures (men's div) │
│                                                             │
│  cream-100   #fdf6e3   ████████   Text on dark (print)      │
│  cream-50    #fefcf5   ████████   Page background (print)   │
└─────────────────────────────────────────────────────────────┘
```

### 2.2 Color Roles

| Color | Role | Where |
|-------|------|-------|
| `navy-950` | Web background | Hero sections, footer |
| `navy-900` | Card surface | Chapter cards, info panels |
| `gold-500` | Primary accent | Headings, key terms, navigation active, Tower outline |
| `gold-400` | Hover state | Links, buttons, interactive elements |
| `sunrise-500` | Energy accent | Timeline markers, important dates, progress indicators |
| `coral-500` | Spirit accent | Quotes, member stories, philosophical terms |
| `cream-100` | Body text on dark | All body copy on navy backgrounds |
| `cream-50` | Print page | Full-page print background |

### 2.3 Semantic Color Aliases (CSS Variables)

```css
--color-bg:            var(--navy-950);
--color-bg-card:       var(--navy-900);
--color-bg-print:      var(--cream-50);
--color-accent:        var(--gold-500);
--color-accent-hover:  var(--gold-400);
--color-energy:        var(--sunrise-500);
--color-spirit:        var(--coral-500);
--color-text-primary:  var(--cream-100);
--color-text-print:    var(--navy-950);
--color-tower-figure:  var(--coral-400);
--color-tower-outline: var(--gold-500);
```

---

## 3. Typography

### 3.1 Font Stack

| Role | Font (Chinese) | Font (English) | Weight | Style |
|------|---------------|----------------|--------|-------|
| **Display** (h1, hero) | 霞鹜文楷 / LXGW WenKai | Playfair Display | 700 | Serif, dramatic |
| **Heading** (h2–h4) | Noto Serif SC | Lora | 600 | Literary serif |
| **Body** | Noto Serif SC | Crimson Text | 400 | Readable serif |
| **UI / Captions** | Noto Sans SC | Inter | 400/500 | Clean sans-serif |
| **Philosophical terms** | 楷体 / KaiTi | Lora Italic | 400 | Calligraphic |
| **Code / Data** | — | JetBrains Mono | 400 | Monospace |

### 3.2 Type Scale

```
Display:  clamp(2.5rem, 6vw, 5rem)        — Chapter titles
     h1:  clamp(2rem, 4vw, 3rem)          — Page titles
     h2:  clamp(1.5rem, 3vw, 2.25rem)     — Section headers
     h3:  clamp(1.25rem, 2vw, 1.75rem)    — Subsection
     h4:  clamp(1rem, 1.5vw, 1.25rem)     — Card titles
   body:  1rem / 16px                      — Body text
  small:  0.875rem                         — Captions, dates
    xs:  0.75rem                           — Meta, footnotes
```

### 3.3 Bilingual Pairing Rules

| Context | Chinese | English | Spacing |
|---------|---------|---------|---------|
| Headings | Primary, larger | Subtitle below, italic | 0.5× line-height gap |
| Body (print left page) | Full column | Right page | Facing pages |
| Body (web) | Stacked | Below with `lang="en"` | 1.5rem gap |
| Quotes | Original Chinese | English translation in `coral-500` italic | 0.25rem below |
| Key terms | `gold-500` highlight | Parenthetical in `cream-100` | Inline |

---

## 4. Layout System

### 4.1 Web Layout

```
┌──────────────────────────────────────────────────────┐
│  NAV BAR (fixed, transparent → navy on scroll)       │
│  [Logo] [中/EN toggle] [Chapters ▾] [Playlist ♫]     │
├──────────────────────────────────────────────────────┤
│                                                      │
│  HERO (full viewport)                                │
│  ┌────────────────────────────────────────────┐     │
│  │        [Tower Illustration — SVG/3D]        │     │
│  │                                            │     │
│  │    朝阳体操队                                │     │
│  │    The Morning Sun Gymnastics Team          │     │
│  │    1976–Present                             │     │
│  │                                            │     │
│  │         [↓ Scroll to Begin]                 │     │
│  └────────────────────────────────────────────┘     │
│                                                      │
│  CONTENT (max-width: 800px, centered)                │
│  ┌────────────────────────────────────────────┐     │
│  │  Chapter content with full-bleed           │     │
│  │  images breaking out to edges              │     │
│  └────────────────────────────────────────────┘     │
│                                                      │
│  TIMELINE (horizontal scroll)                        │
│  ┌────────────────────────────────────────────┐     │
│  │  1976 ──●── 1982 ──●── 1989 ──●── 2004 ──►│     │
│  └────────────────────────────────────────────┘     │
│                                                      │
│  MUSIC PLAYER (fixed bottom bar)                     │
│  ┌────────────────────────────────────────────┐     │
│  │ ♫ 滝の詩 — Waterfall  ▶  ||  [Playlist]    │     │
│  └────────────────────────────────────────────┘     │
│                                                      │
│  FOOTER (navy-950, gold text)                        │
│  ┌────────────────────────────────────────────┐     │
│  │  "异体同心" — SGM 朝阳体操队  |  Credits   │     │
│  └────────────────────────────────────────────┘     │
└──────────────────────────────────────────────────────┘
```

### 4.2 Print Layout (Facing Pages)

```
┌─────────────────────┬─────────────────────┐
│   LEFT PAGE (中文)    │   RIGHT PAGE (EN)    │
│                     │                     │
│   Page # | Chapter  │  Chapter | Page #   │
│                     │                     │
│   中文字体 (Noto     │  English text        │
│   Serif SC) running │  (Crimson Text)      │
│   vertically or     │  running left-       │
│   horizontally      │  aligned             │
│                     │                     │
│   [Photo/Illust.]   │  [Photo/Illust.]    │
│                     │                     │
│   中文引用            │  English quote       │
│                     │                     │
├─────────────────────┴─────────────────────┤
│           PAGE FOOTER (folio)              │
└───────────────────────────────────────────┘

Print specs:
- Size: 210×270mm (slightly taller than A4 for elegance)
- Margins: 20mm outer, 25mm inner (gutter), 30mm top, 25mm bottom
- Bleed: 3mm all sides for full-bleed images
- Paper: 120gsm matte coated (body), 170gsm (chapter openers)
```

### 4.3 Responsive Breakpoints

| Breakpoint | Target | Layout Changes |
|------------|--------|---------------|
| ≥1440px | Desktop large | Full horizontal timeline, side-by-side bilingual |
| 1024–1439px | Desktop | Standard 800px content column |
| 768–1023px | Tablet | Content 90vw, stacked bilingual, collapsed nav |
| <768px | Mobile | Single column, hamburger menu, accordion timeline |

---

## 5. Component Library

### 5.1 The Tower (Central Motif)

```
TOWER VISUAL SPEC:

  Level 5    ☺                    ← Top (enxaneta equivalent)
  Level 4   ☺☺                    ← Upper
  Level 3  ☺☺☺                    ← Middle
  Level 2 ☺☺☺☺                    ← Core
  Level 1 ☺☺☺☺☺                   ← Base
  ───────────────────               ← Stage line
```

**SVG treatment:** Each figure is a stylized silhouette in `coral-400`, outlined in `gold-500`. The tower is always shown in isometric or front-on perspective — never top-down. Figures face inward (同心).

**States:**
- **Resting:** Static tower illustration
- **Loading:** Tower builds incrementally from base upward
- **Hero:** Full animated build sequence
- **Chapter divider:** Single-level tower fragment repeating

### 5.2 Timeline Component

```
1976 ─────●───── 1982 ─────●───── 1989 ─────●───── 1990 ─────●───── 2004
           │                │                │                │
      First 五层塔     SEA Games        National Org     Named 朝阳
      300 participants  19 towers        Formed           by Sensei
```

- Horizontal scroll on desktop (drag/swipe)
- Vertical list on mobile
- Gold dots for major events, sunrise dots for performances
- Click/tap expands detail card

### 5.3 Quote Block

```
┌─────────────────────────────────────────┐
│  "                                    │
│   │  成功！成功！大成功！                │  ← coral-500 bar (4px, left)
│   │  胜利！胜利！大胜利！                │
│  "                                    │
│  — 理事长, SEA Games 1989              │  ← gold-400 attribution
└─────────────────────────────────────────┘
```

Two variants:
- **Standard:** coral bar, cream text on navy-900
- **Hero Quote:** centered, gold text on navy-950, no bar, larger type

### 5.4 Core Values Card (46 Principles)

```
┌──────────────────────────────────┐
│  ○ 1.1                           │  ← Level indicator ring
│  心为确要                          │  ← Chinese (gold-500, Noto Serif SC)
│  The heart is paramount           │  ← English (cream-100, Crimson)
│                                  │
│  [Basic]                         │  ← Level badge
└──────────────────────────────────┘
```

- Grid layout: 3 columns desktop, 2 tablet, 1 mobile
- Color-coded badges: Basic (sunrise), Intermediate (gold), Advanced (coral)
- Filterable by level
- Expandable to show full context

### 5.5 Castells Comparison Table

```
┌──────────────┬─────────────────┬─────────────────┐
│              │   Castells       │   朝阳体操队      │
│              │   Catalonia      │   Malaysia       │
├──────────────┼─────────────────┼─────────────────┤
│  Philosophy  │  Civic pride     │  师弟不二         │
│  Max Height  │  10 levels       │  6 levels        │
│  Music       │  Gralla (wind)   │  Integrated song │
│  ...         │  ...             │  ...             │
└──────────────┴─────────────────┴─────────────────┘
```

- Teal accent for Castells column (`#4ECDC4`)
- Gold accent for 朝阳 column
- Animated row reveals on scroll

### 5.6 Music Player

```
┌──────────────────────────────────────────────────────┐
│  ♫  滝の詩 — Waterfall 瀑布之诗                        │
│  ───●─────────────────────────────  3:42              │
│  ◁◁   ▶/⏸   ▷▷   🔊   [♫ Playlist]  [中/EN]          │
└──────────────────────────────────────────────────────┘
```

- Fixed to bottom of viewport on web
- Collapsible on mobile
- Playlist: Waterfall → Dainanko → (future additions)
- Auto-plays on user interaction (never autoplay without consent)

---

## 6. Visual Motifs & Graphics

### 6.1 Primary Motifs

| Motif | Symbolism | Usage |
|-------|-----------|-------|
| **Rising Sun** ☀️ | Master, illumination, hope | Chapter openers, hero sections |
| **Tower Silhouette** 🏗️ | Collective achievement, vertical aspiration | Page dividers, loading states |
| **Circle/同心圆** ⭕ | Unity, 异体同心 | Background patterns, badge shapes |
| **Lotus** 🪷 | Buddhist practice, purity from mud | Footer, decorative elements |
| **Water/Waves** 🌊 | Persistence (水的信心), waterfall spirit | Act I rain scenes, divider waves |
| **Eagle/老鹰** 🦅 | Lotus Sutra supremacy, GYMBOY conviction | Act IV & V, chapter close icons |

### 6.2 Tower Formation Graphics

**3D Tower Model Spec:**
- Stylized mannequin figures (not realistic humans)
- Warm material: terracotta/coral tone with gold edge lighting
- Camera: Isometric view, slight upward angle (heroic perspective)
- Lighting: Single key light from top-right (sun), ambient fill from bottom

**Formation Sequence Animation:**
1. Empty stage (navy void)
2. Base circle materializes (3 figures, inward-facing)
3. Level 2 assembles (2 figures stepping onto shoulders)
4. Level 3+ adds incrementally
5. Gold light intensifies as tower grows
6. Final frame: Full tower with "朝阳" title overlay

### 6.3 Malaysia Map Graphic

- Simplified topology (not political detail)
- State boundaries in gold-500 lines
- Chapter locations marked with tower icons
- Size of icon = relative member count
- Hover/tap shows state name + member range

---

## 7. Animation Strategy

### 7.1 Guiding Principles

- **Purpose-driven:** Animation always tells a story, never decoration
- **Tower rhythm:** Ascending motion (upward scrolls, rising reveals) mirrors tower construction
- **Respect content:** Philosophical sections use minimal motion
- **Performance:** All animations via `framer-motion`, GPU-accelerated transforms only

### 7.2 Key Animations

| Animation | Trigger | Effect |
|-----------|---------|--------|
| **Hero tower build** | Page load | Figures assemble from base upward, ~2s duration |
| **Section reveal** | Scroll into view | Content rises + fades in (`y: 40 → 0, opacity: 0 → 1`) |
| **Timeline progress** | Scroll position | Gold line extends along timeline axis |
| **Quote appearance** | Scroll into view | Quote block slides in from left, coral bar pulses once |
| **Core values grid** | Scroll into view | Cards stagger-reveal with increasing delay |
| **Comparison rows** | Scroll into view | Table rows reveal alternating left→right, right→left |
| **Language switch** | Toggle click | Content cross-fades between ZH and EN (0.3s) |
| **Music player** | Song change | Waveform pulse on album art area |

### 7.3 Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  * { animation-duration: 0.01ms !important; }
  /* Tower remains static, content fades instead of moves */
}
```

---

## 8. Image & Media Guidelines

### 8.1 Photo Treatment

| Context | Treatment |
|---------|-----------|
| **Hero / Full-bleed** | Slight warm overlay (gold-500 at 15% opacity) |
| **In-content** | Subtle vignette, 4px border-radius, gold-500 border (1px) |
| **Historical (pre-2000)** | Grain texture overlay, warm monochrome tint |
| **Modern (post-2000)** | Clean, natural color, slight contrast boost |
| **Gallery grid** | Masonry layout, uniform aspect ratio (4:3) |

### 8.2 Illustration Style

- Vector (SVG) for diagrams, timelines, maps
- 3D renders for tower models
- No stock photography — all visuals purpose-created for this book
- Illustration style: clean lines, flat colors from palette, minimal shading

### 8.3 Video Integration (Web)

- Embedded YouTube/Vimeo for performance videos
- Lazy-loaded with custom poster frame
- Tower-themed play button (circular, gold, pulsing ring)

---

## 9. Technical Implementation Notes

### 9.1 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Animation | framer-motion |
| Styling | Tailwind CSS + CSS custom properties |
| Content | MDX (Markdown + JSX components) |
| i18n | next-intl or custom solution (ZH/EN) |
| 3D Models | Spline / Three.js (embedded viewer) |
| PDF Generation | Puppeteer (HTML → PDF print layout) |
| Music | HTML5 Audio API, Web Audio for visualizer |

### 9.2 File Naming Convention

```
content/
  act-01-founding/
    zh.md                         ← Chinese narrative
    en.md                         ← English translation
    photos/                       ← Act-specific photos
    illustrations/                ← Act-specific SVGs
  act-02-foundation/
    ...
```

### 9.3 Print CSS Strategy

- Separate `print.css` with facing-page layout
- `@page` rules for size, margins, bleed
- `page-break-after: always` at chapter boundaries
- Bilingual columns via CSS Grid (`grid-template-columns: 1fr 1fr`)
- Gold accents print as spot color (if budget allows) or CMYK gold approximation

---

## 10. Accessibility

| Requirement | Implementation |
|-------------|---------------|
| Color contrast | All text meets WCAG AA (4.5:1 minimum) |
| Focus indicators | Gold ring on all interactive elements |
| Alt text | Descriptive alt for all photos/illustrations, bilingual |
| Keyboard nav | Full tab order, skip-to-content link |
| Screen reader | ARIA labels on tower diagrams, timeline, music player |
| Reduced motion | `prefers-reduced-motion` respected globally |
| Language markup | `lang="zh"` / `lang="en"` on all content blocks |

---

## 11. Design Tokens (exportable)

```css
:root {
  /* Colors */
  --color-bg: #0a0e1a;
  --color-bg-card: #0f1b3d;
  --color-bg-print: #fefcf5;
  --color-accent: #d4a843;
  --color-accent-hover: #e8c456;
  --color-energy: #f07b3f;
  --color-spirit: #e85d5d;
  --color-text: #fdf6e3;
  --color-text-print: #0a0e1a;
  
  /* Typography */
  --font-display-zh: 'LXGW WenKai', 'KaiTi', serif;
  --font-display-en: 'Playfair Display', serif;
  --font-heading-zh: 'Noto Serif SC', serif;
  --font-heading-en: 'Lora', serif;
  --font-body-zh: 'Noto Serif SC', serif;
  --font-body-en: 'Crimson Text', serif;
  --font-ui: 'Inter', 'Noto Sans SC', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  
  /* Spacing */
  --content-max: 800px;
  --content-wide: 1200px;
  --section-gap: clamp(4rem, 10vh, 8rem);
  
  /* Animation */
  --ease-tower: cubic-bezier(0.4, 0, 0.2, 1);
  --duration-reveal: 600ms;
  --duration-tower: 2000ms;
}
```

---

## 12. Design Deliverables Checklist

- [ ] **DESIGN.md** ← This file
- [ ] Color system tokens (CSS variables file)
- [ ] Typography specimen (bilingual pairing proof)
- [ ] Tower illustration (SVG, all 6 levels)
- [ ] Timeline component (interactive prototype)
- [ ] Chapter opener template (web + print)
- [ ] Quote block variants (standard + hero)
- [ ] Core values card grid (46 principles)
- [ ] Castells comparison infographic
- [ ] Malaysia map with chapter markers
- [ ] Music player UI
- [ ] Print layout template (InDesign or HTML)
- [ ] Hero animation storyboard

---

**Status:** Draft v1.0 — Awaiting Jerrison's review and approval before any code execution.

Next after approval: Create `book-design-department/design-spec.md` with detailed specifications, then begin Content Department work.
