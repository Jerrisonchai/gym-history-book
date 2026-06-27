'use client';

import { motion } from 'framer-motion';
import { Nav } from '@/components/nav';
import { Hero } from '@/components/hero';
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

export default function HomePage() {
  const { t } = useLang();

  return (
    <>
      <Nav />
      <Hero />

      {/* Intro section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-[800px] mx-auto px-6 py-24 text-center"
      >
        <p className="text-gold-500 text-2xl md:text-3xl font-serif leading-relaxed mb-8">
          &ldquo;{t(
            '马来西亚华裔青年，以血肉之躯搭建人体塔的故事',
            'The story of Malaysian-Chinese youth building human towers with their own bodies'
          )}&rdquo;
        </p>
        <p className="text-cream-100/60 text-lg leading-relaxed">
          {t(
            '从1976年二十多位先驱，到1989年两千两百位男儿完成十九座塔的壮举——这不是竞技体育，而是一场以信念、团结和师弟精神驱动的灵性实践。',
            'From twenty-plus pioneers in 1976 to 2,200 men completing nineteen towers in 1989 — this is not competitive athletics, but a spiritual practice driven by faith, unity, and the master-disciple bond.'
          )}
        </p>
      </motion.section>

      {/* Chapters */}
      <section className="max-w-4xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-serif text-gold-500 text-center mb-12">
          {t('章节', 'Chapters')}
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {chapters.map((ch, i) => (
            <motion.div
              key={ch.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <ChapterCard {...ch} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-navy-900/50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-serif text-gold-500 text-center mb-8">{t('关键时间线', 'Key Timeline')}</h2>
          <TimelineItems t={t} />
        </div>
      </section>

      {/* Music section */}
      <section className="max-w-3xl mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl font-serif text-gold-500 mb-6">🎵 {t('灵性音乐', 'Spirit Music')}</h2>
        <p className="text-cream-100/50 mb-4 text-sm">
          {t('点击底部 🎵 音乐 播放来自我们传统的歌曲', 'Tap 🎵 Music in the bottom bar to play songs from our tradition')}
        </p>
        <div className="flex justify-center gap-4 text-cream-100/40 text-xs">
          <span>紅のうた Crimson Song</span>
          <span>·</span>
          <span>大楠公の歌 Dainanko</span>
          <span>·</span>
          <span>滝の詩 Waterfall</span>
        </div>
      </section>

      <Footer />
    </>
  );
}

function TimelineItems({ t }: { t: (zh: string, en: string) => string }) {
  const events = [
    { year: '1976', zh: '二十多位先驱创立健身操', en: '20+ pioneers found the troupe' },
    { year: '1982', zh: '第一届文化节 — 首次五层塔', en: '1st Cultural Festival — first 5-level tower' },
    { year: '1985', zh: '第二届文化节 — 1,500人', en: '2nd Cultural Festival — 1,500 members' },
    { year: '1989', zh: '东运会 — 19座四层塔', en: 'SEA Games — 19 four-level towers', highlight: true },
    { year: '1990', zh: '正式成立全国组织', en: 'National organization formed' },
    { year: '1994', zh: '首办全国比赛', en: 'First national competition' },
    { year: '2004', zh: '池田先生命名"朝阳体操队"', en: 'Named by Ikeda Sensei', highlight: true },
  ];

  return (
    <div className="relative">
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gold-500/30" />
      {events.map((ev, i) => (
        <div key={i} className={`relative flex items-start mb-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
          <div className="flex-1 md:w-1/2" />
          <div className={`absolute left-2 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 ${ev.highlight ? 'bg-coral-500 border-coral-400' : 'bg-gold-500 border-gold-400'}`} />
          <div className="flex-1 md:w-1/2 md:px-8 pl-8">
            <span className={`text-sm font-bold ${ev.highlight ? 'text-coral-400' : 'text-gold-400'}`}>{ev.year}</span>
            <p className="text-cream-100/70 text-sm mt-1">{t(ev.zh, ev.en)}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
