'use client';

import { motion } from 'framer-motion';
import { Nav } from '@/components/nav';
import { Footer } from '@/components/footer';
import { ChapterCard } from '@/components/chapter-card';
import { useLang } from '@/contexts/language-context';

const chapters = [
  { slug: '00-preface', num: '00', zhTitle: '前言', enTitle: 'Preface' },
  { slug: '01-act-founding', num: 'I', zhTitle: '成立 (1976–1990)', enTitle: 'Founding' },
  { slug: '02-act-foundation', num: 'II', zhTitle: '全国基础 (1990s–2000s)', enTitle: 'National Foundation' },
  { slug: 'castells-interlude', num: '🌉', zhTitle: '东方遇见西方', enTitle: 'East Meets West' },
  { slug: '03-act-modern', num: 'III', zhTitle: '现代发展 (2000s–现在)', enTitle: 'Modern Era' },
  { slug: '04-act-philosophy', num: 'IV', zhTitle: '精神与哲学', enTitle: 'Spirit & Philosophy' },
  { slug: '05-act-future', num: 'V', zhTitle: '展望未来', enTitle: 'Future Vision' },
];

export default function ChaptersPage() {
  const { t } = useLang();
  return (
    <>
      <Nav />
      <main className="min-h-screen pt-24 pb-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-serif text-gold-500 text-center mb-4">{t('全书章节', 'Book Chapters')}</h1>
          <p className="text-center text-cream-100/40 mb-12">{t('点击阅读每个章节', 'Click to read each chapter')}</p>
          <div className="grid md:grid-cols-2 gap-4">
            {chapters.map((ch, i) => (
              <motion.div key={ch.slug} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}>
                <ChapterCard {...ch} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
