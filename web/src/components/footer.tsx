'use client';

import { useLang } from '@/contexts/language-context';

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="bg-navy-950 border-t border-gold-500/20 py-12 px-6 text-center">
      <p className="text-gold-500 font-serif text-2xl mb-2">{t('异体同心', 'Different Bodies, One Heart')}</p>
      <p className="text-cream-100/50 text-sm">
        SGM {t('朝阳体操队', 'Chaoyang Gymnastics Team')} · 1976–Present
      </p>
      <p className="text-cream-100/30 text-xs mt-4">
        © {new Date().getFullYear()} — {t('马来西亚创价学会', 'Soka Gakkai Malaysia')}
      </p>
    </footer>
  );
}
