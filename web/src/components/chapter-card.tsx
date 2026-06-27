'use client';

import { useLang } from '@/contexts/language-context';

interface ChapterCardProps {
  slug: string;
  num: string;
  zhTitle: string;
  enTitle: string;
}

export function ChapterCard({ slug, num, zhTitle, enTitle }: ChapterCardProps) {
  const { t } = useLang();
  return (
    <a
      href={`/chapter/${slug}`}
      className="block p-6 rounded-xl bg-navy-900 border border-gold-500/20 hover:border-gold-500/50 hover:bg-navy-800/50 transition-all group"
    >
      <span className="text-gold-400 text-xs font-mono mb-2 block">{num}</span>
      <h3 className="text-gold-500 font-serif text-lg group-hover:text-gold-400 transition-colors">
        {t(zhTitle, enTitle)}
      </h3>
    </a>
  );
}
