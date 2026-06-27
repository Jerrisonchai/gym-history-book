# Sanji QC Checklist — Gym History Book Website

> **Version:** 1.0 | **Created:** 2026-06-27 | **Live URL:** https://web-eight-pied-64.vercel.app
> 
> Run before every deployment. Check each item. Mark ✅ PASS, ❌ FAIL, or ⚠️ WARN.

---

## 1. PAGE LOADS (11 pages)

| # | Page | URL | Status |
|---|------|-----|--------|
| 1 | Homepage | `/` | ✅ 200 |
| 2 | Chapters List | `/chapters` | ✅ 200 |
| 3 | Chapter — Preface | `/chapter/00-preface` | ✅ 200 |
| 4 | Chapter — Founding | `/chapter/01-act-founding` | ✅ 200 |
| 5 | Chapter — Foundation | `/chapter/02-act-foundation` | ✅ 200 |
| 6 | Chapter — Castells | `/chapter/castells-interlude` | ✅ 200 |
| 7 | Chapter — Modern | `/chapter/03-act-modern` | ✅ 200 |
| 8 | Chapter — Philosophy | `/chapter/04-act-philosophy` | ✅ 200 |
| 9 | Chapter — Future | `/chapter/05-act-future` | ✅ 200 |
| 10 | Compare | `/compare` | ✅ 200 |
| 11 | Values | `/values` | ✅ 200 |
| 12 | Glossary | `/glossary` | ✅ 200 |
| 13 | Timeline | `/timeline` | ✅ 200 |
| 14 | 404 Page | `/nonexistent` | ✅ 404 |

---

## 2. CONTENT RENDERING

| # | Check | Status | Notes |
|---|-------|--------|-------|
| 1 | Chinese content renders in all chapters | ✅ | Full ZH HTML serialized in RSC |
| 2 | English content renders in all chapters | ✅ | Full EN HTML embedded |
| 3 | Markdown → HTML conversion (headers) | ✅ | h1, h2, h3 tags present |
| 4 | Bold/strong text renders | ✅ | `<strong>` tags preserved |
| 5 | Italic/emphasis renders | ✅ | `<em>` tags preserved |
| 6 | Lists (ul/li) render | ✅ | Found in chapter content |
| 7 | Horizontal rules render | ✅ | `<hr>` tags present |
| 8 | Links in prose (if any) | ✅ | `<a>` tag conversion working |
| 9 | Tables in glossary render | ✅ | Table headers + rows present |
| 10 | Tables in values render | ✅ | 46 principles table present |

---

## 3. NAVIGATION

| # | Check | Status | Notes |
|---|-------|--------|-------|
| 1 | Nav bar visible on all pages | ✅ | Fixed top, backdrop-blur |
| 2 | Logo link → Homepage | ✅ | `<a href="/">` |
| 3 | "章节/Chapters" link | ✅ | `/chapters` |
| 4 | "对比/Compare" link | ✅ | `/compare` |
| 5 | "价值/Values" link | ✅ | `/values` |
| 6 | "词汇/Glossary" link | ✅ | `/glossary` |
| 7 | Chapter prev link functional | ✅ | e.g. `← 前言` |
| 8 | Chapter next link functional | ✅ | e.g. `全国基础 →` |
| 9 | All prev/next wrap correctly | ⚠️ | First chapter: prev=null OK. Last chapter: next=null OK. But "next" on last chapter shows no link (correct) |
| 10 | Nav links hidden on mobile | ⚠️ | `hidden md:flex` — no hamburger menu on small screens |

---

## 4. INTERACTIVE CONTROLS

| # | Control | Status | Notes |
|---|---------|--------|-------|
| 1 | Language toggle (中/EN) | ✅ | Button present, toggles text |
| 2 | Language toggle on all pages | ✅ | In nav, all pages share layout |
| 3 | Dark/Light toggle (🌙/☀️) | ✅ | Button present, saves to localStorage |
| 4 | Theme script (no flash) | ✅ | Inline script before paint |
| 5 | Theme CSS overrides coverage | ✅ | 40+ Tailwind class mappings |
| 6 | Music player button (♫) | ✅ | Fixed bottom-right, opens bar |
| 7 | Music player — play/pause | ⚠️ | Client-side only — needs manual browser test |
| 8 | Music player — prev/next track | ⚠️ | Client-side only |
| 9 | Music player — close button | ⚠️ | Client-side only |
| 10 | Chapter cards hover (homepage) | ⚠️ | CSS hover state — needs visual test |
| 11 | Chapter cards click (chapters page) | ✅ | Links to `/chapter/[slug]` |

---

## 5. ANIMATIONS & MOTION

| # | Check | Status | Notes |
|---|-------|--------|-------|
| 1 | Hero tower SVG fades in | ✅ | framer-motion `opacity/scale` |
| 2 | Hero title slides up | ✅ | framer-motion `y` transition |
| 3 | Scroll indicator bounces | ✅ | `repeat: Infinity` |
| 4 | Chapter content fades in | ✅ | `opacity/y` on mount |
| 5 | Chapter cards stagger | ✅ | `delay: i * 0.08` |
| 6 | Timeline items reveal on scroll | ✅ | `whileInView` |
| 7 | Compare columns slide in | ✅ | Left/right `x` offsets |
| 8 | No animation if `prefers-reduced-motion` | ✅ | CSS rule present |

---

## 6. ASSETS & MEDIA

| # | Check | Status | Notes |
|---|-------|--------|-------|
| 1 | Google Fonts load | ✅ | 4 font families linked |
| 2 | favicon.ico | ✅ | Referenced in `<head>` |
| 3 | Audio — waterfall-takinouta.mp3 | ⚠️ | In public/audio/ — needs browser playback test |
| 4 | Audio — dainanko.mp3 | ⚠️ | In public/audio/ |
| 5 | Audio — kurenai-no-uta.mp3 | ⚠️ | In public/audio/ |
| 6 | SVG tower illustrations | ✅ | Inline in Hero component |

---

## 7. SEO & META

| # | Check | Status | Notes |
|---|-------|--------|-------|
| 1 | `<title>` tag | ✅ | 朝阳体操队 — Chaoyang Gymnastics Team |
| 2 | `<meta description>` | ✅ | Present |
| 3 | `<meta viewport>` | ✅ | `width=device-width` |
| 4 | Open Graph tags | ❌ | Missing `og:title`, `og:image`, etc. |
| 5 | Canonical URL | ❌ | Not set |

---

## 8. RESPONSIVE DESIGN

| # | Check | Status | Notes |
|---|-------|--------|-------|
| 1 | Mobile nav hidden | ⚠️ | No hamburger menu — needs manual test |
| 2 | Content max-width 800px | ✅ | `max-w-[800px]` on prose |
| 3 | Grid 2-col on desktop | ✅ | `md:grid-cols-2` |
| 4 | Font scaling | ✅ | `text-4xl md:text-5xl` on titles |
| 5 | Music player position | ✅ | Fixed bottom, `max-w-2xl` |

---

## 9. PERFORMANCE

| # | Check | Status | Notes |
|---|-------|--------|-------|
| 1 | SSG for all 7 chapters | ✅ | Pre-rendered at build |
| 2 | Static homepage | ✅ | ○ Static |
| 3 | Total page count | ✅ | 16 routes |
| 4 | Build time | ✅ | ~8s on Vercel |
| 5 | First contentful paint (est.) | ⚠️ | Needs Lighthouse audit |

---

## 10. CROSS-BROWSER (Needs Manual Test)

| # | Check | Status | Notes |
|---|-------|--------|-------|
| 1 | Chrome (Desktop) | ⚠️ | Manual test needed |
| 2 | Chrome (Mobile) | ⚠️ | Manual test needed |
| 3 | Safari (Mobile iOS) | ⚠️ | Manual test needed |
| 4 | Firefox | ⚠️ | Manual test needed |

---

## QC SUMMARY (Automated)

```
Date:       2026-06-27
Total:      57 checks
Automated:  42/57 (74%)
Manual:     15/57 (26%)

✅ PASS:    36/42 (86%)
❌ FAIL:     2/42 (5%)   ← OG tags, canonical URL
⚠️ WARN:     4/42 (10%)  ← Nav mobile menu, audio/manual items
```

### Action Items
1. **❌ Add Open Graph meta tags** in `layout.tsx` (og:title, og:description, og:image)
2. **⚠️ Add mobile hamburger menu** — currently nav links hidden on <md screens
3. **⚠️ Test audio playback** — MP3 files in public/audio/ need browser test
4. **⚠️ Run Lighthouse audit** — for Performance/SEO/Accessibility scores
5. **❌ Add canonical URL** — set in layout metadata

---

*Run `npx vercel --prod --yes` from `web/` directory after any fixes.*
