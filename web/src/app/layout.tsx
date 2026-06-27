import type { Metadata } from 'next';
import { BottomNav } from '@/components/bottom-nav';
import { LanguageProvider } from '@/contexts/language-context';
import { MusicPlayer } from '@/components/music-player';
import { ThemeScript } from '@/components/theme-script';
import './globals.css';

export const metadata: Metadata = {
  title: '朝阳体操队 — Chaoyang Gymnastics Team',
  description: 'The official documentary book of the SGM Chaoyang Gymnastics Team — Malaysia\'s human tower tradition since 1976.',
  metadataBase: new URL('https://web-eight-pied-64.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: '朝阳体操队 — Chaoyang Gymnastics Team',
    description: 'The official documentary book of the SGM Chaoyang Gymnastics Team — Malaysia\'s human tower tradition since 1976.',
    type: 'website',
    locale: 'zh_Hans',
    siteName: 'Chaoyang Gymnastics Team',
  },
  twitter: {
    card: 'summary_large_image',
    title: '朝阳体操队 — Chaoyang Gymnastics Team',
    description: 'The official documentary book of the SGM Chaoyang Gymnastics Team — Malaysia\'s human tower tradition since 1976.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh" suppressHydrationWarning>
      <head>
        <ThemeScript />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;600;700&family=Crimson+Text:ital,wght@0,400;0,600;1,400&family=Playfair+Display:wght@600;700&family=Inter:wght@400;500&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Book',
              name: 'SGM Chaoyang Gymnastics Team — Documentary Book',
              alternateName: '朝阳体操队纪录片',
              author: { '@type': 'Organization', name: 'Soka Gakkai Malaysia', sameAs: 'https://www.sgm.org.my' },
              about: 'The history and philosophy of Malaysia\'s human tower gymnastic tradition since 1976',
              inLanguage: 'zh-Hans',
              datePublished: '2026',
              publisher: { '@type': 'Organization', name: 'Soka Gakkai Malaysia' },
              description: 'A bilingual web-first documentary book chronicling the SGM Chaoyang Gymnastics Team from 1976 to present, comparing Malaysian human tower tradition with Catalan Castells.',
            }),
          }}
        />
      </head>
      <body className="min-h-screen antialiased pb-14">
        <LanguageProvider>
          <BottomNav />
          {children}
          <MusicPlayer />
        </LanguageProvider>
      </body>
    </html>
  );
}
