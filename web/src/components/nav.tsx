'use client';

import { useState, useEffect } from 'react';
import { useLang } from '@/contexts/language-context';

export function Nav() {
  const { lang, setLang, t } = useLang();
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    setDark(saved !== 'light');
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    const theme = next ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.classList.toggle('dark', next);
  };

  const links = [
    { href: '/chapters', zh: '章节', en: 'Chapters' },
    { href: '/compare', zh: '对比', en: 'Compare' },
    { href: '/values', zh: '价值', en: 'Values' },
    { href: '/glossary', zh: '词汇', en: 'Glossary' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-950/80 backdrop-blur-md border-b border-gold-500/20">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 text-gold-500 font-serif text-lg font-bold tracking-wider">
          ☀️ {t('朝阳', 'Chaoyang')}
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-4">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-gold-400 hover:text-gold-300 transition-colors text-sm">
              {t(l.zh, l.en)}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className="w-8 h-8 rounded-full border border-gold-500/40 flex items-center justify-center text-gold-400 hover:bg-gold-500/10 transition-colors text-sm"
            title={dark ? t('切换亮色模式', 'Switch to light mode') : t('切换暗色模式', 'Switch to dark mode')}
          >
            {dark ? '🌙' : '☀️'}
          </button>
          <button
            onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
            className="px-3 py-1 rounded-full border border-gold-500/40 text-gold-400 text-sm hover:bg-gold-500/10 transition-colors"
          >
            {lang === 'zh' ? 'EN' : '中'}
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            className="w-8 h-8 rounded-full border border-gold-500/40 flex items-center justify-center text-gold-400 text-sm"
          >
            {dark ? '🌙' : '☀️'}
          </button>
          <button
            onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
            className="px-2 py-1 rounded-full border border-gold-500/40 text-gold-400 text-xs"
          >
            {lang === 'zh' ? 'EN' : '中'}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-8 h-8 flex items-center justify-center text-gold-400 border border-gold-500/40 rounded"
            aria-label="Menu"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gold-500/20 bg-navy-950/95 backdrop-blur-md">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block px-6 py-3 text-gold-400 hover:bg-gold-500/10 transition-colors text-sm"
            >
              {t(l.zh, l.en)}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
