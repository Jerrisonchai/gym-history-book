import { loadChapter, chapters } from '@/lib/load-content';
import { ChapterContent } from '@/components/chapter-content';
import { Nav } from '@/components/nav';
import { Footer } from '@/components/footer';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return chapters.map((ch) => ({ slug: ch.slug }));
}

export default function ChapterPage({ params }: { params: Promise<{ slug: string }> }) {
  // We need to handle params as a Promise for Next.js 16
  return <ChapterPageInner params={params} />;
}

async function ChapterPageInner({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const chMeta = chapters.find((c) => c.slug === slug);
  if (!chMeta) notFound();

  const zh = await loadChapter(slug, 'zh');
  const en = await loadChapter(slug, 'en');

  // Find prev/next
  const idx = chapters.findIndex((c) => c.slug === slug);
  const prev = idx > 0 ? chapters[idx - 1] : null;
  const next = idx < chapters.length - 1 ? chapters[idx + 1] : null;

  return (
    <>
      <Nav />
      <main className="min-h-screen pt-20 pb-24">
        <ChapterContent
          slug={slug}
          num={chMeta.num}
          zhHtml={zh?.html || ''}
          enHtml={en?.html || ''}
          zhTitle={chMeta.zhTitle}
          enTitle={chMeta.enTitle}
          prev={prev}
          next={next}
        />
      </main>
      <Footer />
    </>
  );
}
