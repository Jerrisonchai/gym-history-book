# PRD — 朝阳体操队 Documentary Book

> **Project:** Gym History Book — Official Documentary of the SGM Chaoyang Gymnastics Team
> **Version:** v0.2 — Design Phase
> **Language:** Bilingual (Chinese 中文 + English)
> **Status:** DESIGN.md approved → entering Content Phase

---

## 1. Project Overview

### 1.1 What Is This?

An official documentary book chronicling the 50-year history of the **Soka Gakkai Malaysia (SGM) 朝阳体操队** (Chaoyang Gymnastics Team), a cultural group that performs human towers (人体塔) on stage as part of SGM's peace and cultural mission.

### 1.2 Target Audience

| Audience | Why they read |
|----------|---------------|
| **Alumni members** | Nostalgia, pride, record of their youth |
| **Current members** | Inspiration, understanding tradition |
| **SGM community** | Cultural heritage documentation |
| **General public** | Discovery of a unique Malaysian cultural tradition |
| **Cultural researchers** | Comparative study with Castells (Catalan human towers) |

### 1.3 Core Message

> The 朝阳体操队 is Malaysia's answer to the Catalan Castells — a human tower tradition with a spiritual soul. Built on the philosophy of 异体同心 (different bodies, one heart) and 师弟不二 (master-disciple bond), it transforms young men through discipline, courage, and collective achievement.

### 1.4 Language Strategy

| Component | Languages |
|-----------|-----------|
| Main narrative | Chinese (primary) + English (translation) |
| Key philosophical terms | Original Chinese + English explanation |
| Quotes | Original language + translation |
| UI/UX (web version) | Language toggle (中/EN) |
| Print edition | Side-by-side or facing-page bilingual layout |

**Philosophical glossary to translate carefully:**
- 异体同心 → "Different Bodies, One Heart/Mind"
- 师弟不二 → "Master and Disciple, Inseparable"
- 广宣流布 → "Kosen-rufu" (world peace through individual happiness)
- 御本尊 → "Gohonzon" (object of devotion)
- 题目 → "Daimoku" (chanting Nam-myoho-renge-kyo)

---

## 2. Department Structure

```
projects/gym-history-book/
├── PRD.md                          ← This file
├── DESIGN.md                       ← Design system (next)
├── content-department/             ← Raw text + translated content
│   ├── zh/                         ← Chinese source content
│   ├── en/                         ← English translations
│   └── glossary.md                 ← Philosophical term glossary
├── book-design-department/         ← Layout, typography, visual system
│   ├── layouts/                    ← Page layouts, templates
│   ├── typography/                 ← Font choices, hierarchy
│   └── design-spec.md              ← Full design specification
├── media-department/               ← 3D models, illustrations, photos
│   ├── prompts/                    ← 3D/illustration generation prompts
│   ├── 3d-models/                  ← Generated 3D tower models
│   ├── illustrations/              ← SVG/vector graphics
│   └── photos/                     ← Archival photographs
├── research/                       ← External research materials
│   └── castells-research.md        ← Castells comparison study
└── data/                           ← Raw historical data
    └── raw-history-zh.md           ← Original Chinese manuscript
```

---

## 3. Book Architecture

### 3.1 Full Structure

| # | Section (中文) | Section (English) | Type |
|---|---------------|-------------------|------|
| — | 前言 | Preface: "Why This Book" | Narrative |
| 1 | 第一幕：成立（1976–1990） | Act I: Founding | Historical narrative |
| 2 | 第二幕：全国基础（1990s–2000s） | Act II: National Foundation | Historical narrative |
| 🌉 | 插曲：东方遇见西方 | Interlude: East Meets West — Castells vs 朝阳 | Comparative analysis |
| 3 | 第三幕：现代发展（2000s–现在） | Act III: Modern Era | Historical narrative |
| 4 | 第四幕：精神与哲学 | Act IV: Spirit & Philosophy | Philosophical treatise |
| 5 | 第五幕：展望未来 | Act V: Future Vision | Senior guidance |
| — | 附录 | Appendices | Reference |

### 3.2 Act Breakdown

#### Act I: Founding (1976–1990)
- 1976 origins: 20+ pioneers
- 1982: First Cultural Festival, first 五层塔 (5-level tower), 300 participants
- 1983: Japanese instructors transfer knowledge
- 1985: Second Cultural Festival, 1,500 participants, 五层塔 success
- 1986: First Youth Peace Culture Festival (Penang)
- 1987: UM "Martial Arts Night"
- 1988: Second Youth Peace Culture Festival (Ipoh), Ikeda Sensei visits Malaysia
- 1989: Third Youth Peace Culture Festival (Johor, in the rain), SEA Games — 2,200 nationwide, 19 towers!
- 1989: Q Project
- 1990: Fourth Youth Peace Culture Festival (Kuantan), Official national organization formed (Aug 20)

#### Act II: National Foundation (1990s–2000s)
- Softgym innovation (1989–1992)
- National competitions era (1994–2008)
- Music integration (second turning point)
- State-by-state expansion
- Knowledge transmission: VHS recordings, senior-to-junior mentorship

#### Castells Interlude: East Meets West
- Side-by-side structural comparison (illustrated)
- Values comparison table
- "What 朝阳 shares with Castells" vs "What makes 朝阳 unique"
- The spiritual dimension Castells lacks

#### Act III: Modern Era (2000s–Present)
- 2004: Named "朝阳体操队" by Ikeda Sensei
- Video documentation era
- Continued performances and government invitations

#### Act IV: Spirit & Philosophy
- Pillar 1: 师弟不二 (Master-Disciple Bond)
- Pillar 2: 异体同心 (Different Bodies, One Heart)
- Pillar 3: Tower as Life's Treasure Tower (虚空会的宝塔)
- What members gain: character transformation, leadership, resilience

#### Act V: Future Vision
- Senior guidance for successors
- "Continue training with faith as foundation"
- The tower as a symbol across generations

#### Appendices
- Complete historical timeline
- State chapter directory
- Photo/video archive index
- Glossary of philosophical terms
- Bibliography/references (青年训, 新人间革命, 常胜)

---

## 4. Media & Visual Plan

### 4.1 3D Tower Models (Media Department)

**Asset #001:** Iterative Human Tower Simulation
- Phase 1: Single stylized 3D mannequin figure
- Phase 2: 2-level tower (3-base circle + 2 on top)
- Phase 3: Progressive 3→4→5→6 level tower sequence
- *Prompt saved in media-department/prompts/media-001-*

### 4.2 Planned Illustrations

| Illustration | Type | Purpose |
|-------------|------|---------|
| Tower anatomy diagram | SVG vector | Label parts: base, levels, top climber |
| Progression sequence | 3D animation frames | Show tower growth from 2→6 levels |
| Castells vs 朝阳 comparison | Infographic | Side-by-side structure + values |
| Malaysia state map | Map graphic | Chapter locations, member counts |
| Historical timeline | Timeline graphic | 1976–present key events |
| Spirit pillars diagram | Conceptual | Three pillars of 朝阳 philosophy |
| Tower = Life's Treasure Tower | Symbolic | Visual metaphor |

### 4.3 Photo Requirements (from Jerrison/alumni)

- Performance photos from each major event
- Formation/造型 diagram scans
- Team group photos by year
- Behind-the-scenes training photos
- Ikeda Sensei related images (if available)

---

## 5. Technical Approach

### 5.1 Output Formats

| Format | Priority | Tech |
|--------|----------|------|
| **Interactive Website** | Primary | Next.js + framer-motion |
| **Printable PDF** | Secondary | HTML → PDF (Puppeteer) |
| **eBook (EPUB)** | Tertiary | Pandoc/Calibre |

### 5.2 Bilingual Implementation

| Approach | Description |
|----------|-------------|
| Web: Language toggle | 中/EN button switches content via i18n |
| Web: Side-by-side | Option to view both languages simultaneously |
| Print: Facing pages | Left page = 中文, Right page = English |
| Content: Markdown | Each act has `zh.md` and `en.md` |

### 5.3 Design System (preview — full DESIGN.md to follow)

| Element | Direction |
|---------|-----------|
| Primary font (Chinese) | Noto Serif SC or similar literary serif |
| Primary font (English) | Inter or Georgia for body |
| Color palette | 朝阳 (Morning Sun) theme: warm gold, sunrise orange, deep navy |
| Motif | Rising sun, tower silhouette, lotus (Buddhist symbolism) |
| Animation | Scroll-triggered tower erection, parallax photos |

---

## 6. 10-Phase Execution Plan

| # | Phase | Deliverable | Dependencies |
|---|-------|-------------|--------------|
| **1** | 📋 Foundation | Project scaffold, departments, raw data collected | — |
| **2** | 🎨 Design System | DESIGN.md, color tokens, typography, visual language | Phase 1 |
| **3** | ✍️ Content | ZH→EN translation, chapter structuring (5 Acts + Interlude) | Phase 2 |
| **4** | 🎬 Media Production | 3D tower models, SVG illustrations, infographics | Phase 2 |
| **5** | 🖥️ Web Development | Next.js setup, bilingual i18n, all components, responsive | Phase 3, 4 |
| **6** | 🎵 Interactive Features | Music playlist (3 songs), timeline, tower animation, map | Phase 5 |
| **7** | 📄 Print Layout | Print CSS, facing-page bilingual, PDF generation | Phase 3 |
| **8** | 🧪 QA & Polish | Cross-browser, accessibility audit, mobile testing, copyedit | Phase 5, 6 |
| **9** | 📦 Print Production | High-quality PDF + EPUB export for self-publishing | Phase 7, 8 |
| **10** | 🚀 Launch | Deploy website, final delivery, announcement | All |

### Current Progress

| Phase | Status | Pct |
|-------|--------|-----|
| 1. Foundation | ✅ Done | 100% |
| 2. Design System | ✅ Done | 100% |
| 3. Content | ⏳ Next | 0% |
| 4. Media Production | 🔜 Pending | 5% (prompt written) |
| 5–10 | 🔒 Blocked | 0% |

### ✅ Phase 1 Complete — Foundation
- [x] Project folder scaffolded with 6 departments
- [x] Raw Chinese manuscript saved (`data/raw-history-zh.md`)
- [x] Castells research done (`research/castells-research.md`)
- [x] 3D media prompt written (`media-department/prompts/media-001`)
- [x] Core Values Framework saved — 46 principles, 3 levels (`content-department/core-values-framework.md`)
- [x] Spirit songs collected — **3 tracks** (`media-department/audio/`):
  - `waterfall-takinouta.mp3` — 滝の詩 Waterfall 瀑布之詩 (2.0 MB)
  - `dainanko.mp3` — 大楠公の歌 Dainanko (2.2 MB)
  - `kurenai-no-uta.mp3` — 紅のうた Crimson Song (2.8 MB)

### ✅ Phase 2 Complete — Design System
- [x] **DESIGN.md v1.0** — Full design system documented:
  - 3 visual pillars (师弟不二 / 异体同心 / Tower as Treasure Tower)
  - Chaoyang Palette (navy + gold + sunrise + coral + cream)
  - Bilingual font pairing (LXGW WenKai + Playfair Display / Noto Serif SC + Crimson Text)
  - Print spec (210×270mm, facing-page bilingual)
  - 12 design deliverables mapped out

### ⏳ Phase 3 — Content (90% Complete)
- [x] Translate raw manuscript ZH → EN
- [x] Structure into 5 Acts + Castells Interlude
- [x] Write chapter intros/outros
- [x] Compile philosophical glossary (26 terms)
- [x] Extract manuscript quotes (12 quotes)
- [x] Create data collection templates for state chapters, photos, videos
- [ ] Collect alumni quotes from Jerrison & alumni
- [ ] Fill state chapter directory
- [ ] Photo/video submissions from members

### 🔜 Phases 4–10 — Blocked Until Phase 3 Starts

---

**EOF — No code execution until DESIGN.md approved. ✅ DESIGN.md approved 2026-06-27.**
