'use client';

import { useLang } from '@/contexts/language-context';

export function Nav() {
  const { lang, setLang, t } = useLang();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-950/80 backdrop-blur-md border-b border-gold-500/20">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 text-gold-500 font-serif text-lg font-bold tracking-wider">
          ☀️ {t('朝阳', 'Chaoyang')}
        </a>

        <div className="flex items-center gap-6">
          <NavLinks t={t} />
          <button
            onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
            className="px-3 py-1 rounded-full border border-gold-500/40 text-gold-400 text-sm hover:bg-gold-500/10 transition-colors"
          >
            {lang === 'zh' ? 'EN' : '中'}
          </button>
        </div>
      </div>
    </nav>
  );
}

function NavLinks({ t }: { t: (zh: string, en: string) => string }) {
  const links = [
    { href: '/chapters', label: t('章节', 'Chapters') },
    { href: '/compare', label: t('对比', 'Compare') },
    { href: '/values', label: t('价值', 'Values') },
    { href: '/glossary', label: t('词汇', 'Glossary') },
  ];
  return (
    <div className="hidden md:flex items-center gap-5 text-sm">
      {links.map((l) => (
        <a key={l.href} href={l.href} className="text-gold-400 hover:text-gold-300 transition-colors">
          {l.label}
        </a>
      ))}
    </div>
  );
}
