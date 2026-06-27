'use client';

import { useState, useEffect } from 'react';
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
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const check = () => setDark(document.documentElement.getAttribute('data-theme') !== 'light');
    check();
    const obs = new MutationObserver(check);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => obs.disconnect();
  }, []);

  return (
    <article className="max-w-[800px] mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-gold-400 text-sm font-mono mb-3 block">{num}</span>
        <h1 className="text-4xl md:text-5xl font-serif text-gold-500 mb-10">{title}</h1>

        {/* Divider */}
        <div className="w-24 h-1 bg-gradient-to-r from-gold-500 to-sunrise-500 mb-10 rounded-full" />

        <div
          className={`max-w-none
            prose-headings:font-serif prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 
            prose-p:leading-relaxed prose-p:mb-4
            prose-li:my-1
            prose-strong:font-semibold
            prose-hr:my-12 prose-hr:border-gold-500/30
            prose-em:text-gold-400
            ${dark
              ? 'prose prose-invert prose-headings:text-gold-400 prose-h2:text-gold-400 prose-h3:text-gold-300 prose-p:text-cream-100/80 prose-li:text-cream-100/70 prose-strong:text-gold-300'
              : 'prose prose-headings:text-amber-700 prose-h2:text-amber-700 prose-h3:text-amber-600 prose-p:text-gray-700 prose-li:text-gray-600 prose-strong:text-amber-800 prose-a:text-amber-600'
            }`}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </motion.div>

      {/* Chapter navigation */}
      <nav className="flex justify-between mt-16 pt-8 border-t border-gold-500/20">
        {prev ? (
          <a href={`/chapter/${prev.slug}`} className="text-gold-400 hover:text-gold-300 text-sm transition-colors">
            ← {t(prev.zhTitle, prev.enTitle)}
          </a>
        ) : <div />}
        {next ? (
          <a href={`/chapter/${next.slug}`} className="text-gold-400 hover:text-gold-300 text-sm text-right transition-colors">
            {t(next.zhTitle, next.enTitle)} →
          </a>
        ) : <div />}
      </nav>
    </article>
  );
}
