import type { Metadata } from 'next';
import { LanguageProvider } from '@/contexts/language-context';
import { MusicPlayer } from '@/components/music-player';
import { ThemeScript } from '@/components/theme-script';
import './globals.css';

export const metadata: Metadata = {
  title: '朝阳体操队 — Chaoyang Gymnastics Team',
  description: 'The official documentary book of the SGM Chaoyang Gymnastics Team — Malaysia\'s human tower tradition since 1976.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh" suppressHydrationWarning>
      <head>
        <ThemeScript />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;600;700&family=Crimson+Text:ital,wght@0,400;0,600;1,400&family=Playfair+Display:wght@600;700&family=Inter:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen antialiased">
        <LanguageProvider>
          {children}
          <MusicPlayer />
        </LanguageProvider>
      </body>
    </html>
  );
}
