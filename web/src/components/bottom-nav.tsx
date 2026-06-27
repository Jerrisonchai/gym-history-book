'use client';

import { usePathname } from 'next/navigation';
import { useLang } from '@/contexts/language-context';

const tabs = [
  { id: 'home',    href: '/',          zh: '首页',  en: 'Home',     icon: '🏠' },
  { id: 'chapters',href: '/chapters',  zh: '章节',  en: 'Chapters', icon: '📖' },
  { id: 'compare', href: '/compare',   zh: '对比',  en: 'Compare',  icon: '⚖️' },
  { id: 'values',  href: '/values',    zh: '价值',  en: 'Values',   icon: '🏛' },
];

export function BottomNav() {
  const pathname = usePathname();
  const { t } = useLang();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-navy-950/95 backdrop-blur-md border-t border-gold-500/20 safe-area-bottom">
      <div className="max-w-lg mx-auto flex items-center justify-around h-14">
        {tabs.map((tab) => {
          const isActive =
            pathname === tab.href ||
            (tab.id === 'chapters' && pathname.startsWith('/chapter'));
          return (
            <a
              key={tab.id}
              href={tab.href}
              className={`flex flex-col items-center justify-center gap-0.5 min-w-0 flex-1 h-full transition-colors ${
                isActive
                  ? 'text-gold-400'
                  : 'text-cream-100/40 hover:text-cream-100/60'
              }`}
            >
              <span className="text-lg leading-none">{tab.icon}</span>
              <span className="text-[10px] leading-none">{t(tab.zh, tab.en)}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
