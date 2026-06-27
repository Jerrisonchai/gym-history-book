import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';
import { marked } from 'marked';

type Language = 'zh' | 'en';

interface ChapterMeta {
  slug: string;
  num: string;
  zhTitle: string;
  enTitle: string;
  zhDesc: string;
  enDesc: string;
}

const contentDir = join(process.cwd(), '..', 'content-department');

// Chapter metadata
export const chapters: ChapterMeta[] = [
  { slug: '00-preface', num: '00', zhTitle: '前言', enTitle: 'Preface', zhDesc: '为什么要写这本书', enDesc: 'Why this book exists' },
  { slug: '01-act-founding', num: 'I', zhTitle: '成立 (1976–1990)', enTitle: 'Founding', zhDesc: '从二十位先驱到全国组织', enDesc: 'From 20 pioneers to national organization' },
  { slug: '02-act-foundation', num: 'II', zhTitle: '全国基础 (1990s–2000s)', enTitle: 'National Foundation', zhDesc: 'Softgym革命与全国比赛时代', enDesc: 'Softgym revolution and the competition era' },
  { slug: 'castells-interlude', num: '🌉', zhTitle: '东方遇见西方', enTitle: 'East Meets West', zhDesc: 'Castells与朝阳的对比', enDesc: 'Castells vs Chaoyang comparison' },
  { slug: '03-act-modern', num: 'III', zhTitle: '现代发展 (2000s–现在)', enTitle: 'Modern Era', zhDesc: '被命名的时代与影像记录', enDesc: 'The naming and video era' },
  { slug: '04-act-philosophy', num: 'IV', zhTitle: '精神与哲学', enTitle: 'Spirit & Philosophy', zhDesc: '三大支柱与师弟精神', enDesc: 'Three pillars and master-disciple spirit' },
  { slug: '05-act-future', num: 'V', zhTitle: '展望未来', enTitle: 'Future Vision', zhDesc: '前辈指导与下一代的承诺', enDesc: 'Senior guidance and promises to the next generation' },
];

// Load markdown content for a specific chapter and language
export async function loadChapter(slug: string, lang: Language): Promise<{ html: string; title: string } | null> {
  try {
    const filePath = join(contentDir, lang, `${slug}.md`);
    const raw = readFileSync(filePath, 'utf-8');
    const lines = raw.split('\n');
    const title = lines[0]?.replace(/^#\s+/, '') || slug;
    const html = await marked.parse(raw);
    return { html, title };
  } catch {
    return null;
  }
}

// Load glossary
export async function loadGlossary(): Promise<{ html: string } | null> {
  try {
    const filePath = join(contentDir, 'glossary.md');
    const raw = readFileSync(filePath, 'utf-8');
    const html = await marked.parse(raw);
    return { html };
  } catch {
    return null;
  }
}

// Load appendices
export async function loadAppendices(): Promise<{ html: string } | null> {
  try {
    const filePath = join(contentDir, 'appendices.md');
    const raw = readFileSync(filePath, 'utf-8');
    const html = await marked.parse(raw);
    return { html };
  } catch {
    return null;
  }
}

// Load values/principles
export async function loadValues(): Promise<{ html: string } | null> {
  try {
    const filePath = join(contentDir, 'core-values-framework.md');
    const raw = readFileSync(filePath, 'utf-8');
    const html = await marked.parse(raw);
    return { html };
  } catch {
    return null;
  }
}
