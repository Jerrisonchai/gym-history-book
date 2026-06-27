'use client';

import { motion } from 'framer-motion';
import { useLang } from '@/contexts/language-context';

interface ChapterContentProps {
  slug: string;
  num: string;
  zhHtml: string;
  enHtml: string;
  zhTitle: string;
  enTitle: string;
  prev: { slug: string; num: string; zhTitle: string; enTitle: string } | null;
  next: { slug: string; num: string; zhTitle: string; enTitle: string } | null;
}

export function ChapterContent({ slug, num, zhHtml, enHtml, zhTitle, enTitle, prev, next }: ChapterContentProps) {
  const { t } = useLang();
  const html = t(zhHtml, enHtml);
  const title = t(zhTitle, enTitle);

  return (
    <article className="max-w-[800px] mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-gold-400 text-sm font-mono mb-3 block">{num}</span>
        <h1 className="text-4xl md:text-5xl font-serif text-gold-500 mb-10">{title}</h1>
        <div
          className="prose prose-invert max-w-none prose-headings:font-serif prose-h2:text-gold-400 prose-h2:text-2xl prose-h3:text-gold-300 prose-p:text-cream-100/80 prose-p:leading-relaxed prose-li:text-cream-100/70 prose-strong:text-gold-300 prose-table:text-cream-100/80 prose-th:text-gold-400 prose-td:border-navy-800"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </motion.div>

      {/* Nav */}
      <nav className="flex justify-between mt-16 pt-8 border-t border-gold-500/20">
        {prev ? (
          <a href={`/chapter/${prev.slug}`} className="text-gold-400 hover:text-gold-300 text-sm">
            ← {t(prev.zhTitle, prev.enTitle)}
          </a>
        ) : <div />}
        {next ? (
          <a href={`/chapter/${next.slug}`} className="text-gold-400 hover:text-gold-300 text-sm text-right">
            {t(next.zhTitle, next.enTitle)} →
          </a>
        ) : <div />}
      </nav>
    </article>
  );
}
