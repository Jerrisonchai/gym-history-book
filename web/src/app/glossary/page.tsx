import { loadGlossary } from '@/lib/load-content';
import { Nav } from '@/components/nav';
import { Footer } from '@/components/footer';
import { notFound } from 'next/navigation';

export default async function GlossaryPage() {
  const data = await loadGlossary();
  if (!data) notFound();

  return (
    <>
      <Nav />
      <main className="min-h-screen pt-24 pb-24">
        <div className="max-w-[900px] mx-auto px-6">
          <h1 className="text-4xl font-serif text-gold-500 mb-4">📖 Glossary / 词汇表</h1>
          <p className="text-cream-100/50 mb-2">Philosophical &amp; Performance Terms — 哲学与表演术语</p>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-500 to-teal-400 mb-10 rounded-full" />

          <div
            className="[&_table]:w-full [&_table]:border-collapse [&_table]:rounded-lg [&_table]:overflow-hidden
              [&_th]:px-3 [&_th]:py-2.5 [&_th]:text-left [&_th]:text-xs [&_th]:font-semibold [&_th]:uppercase [&_th]:tracking-wider
              [&_td]:px-3 [&_td]:py-2 [&_td]:text-sm [&_td]:align-top [&_td]:leading-relaxed
              prose prose-invert max-w-none
              prose-headings:font-serif prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:text-gold-400
              prose-p:text-cream-100/70 prose-p:leading-relaxed
              prose-li:text-cream-100/70 prose-li:my-1
              [&_th]:bg-navy-800 [&_th]:text-gold-300 [&_th]:border-b [&_th]:border-gold-500/30
              [&_td]:border-b [&_td]:border-navy-800 [&_tr:hover_td]:bg-navy-800/50"
            dangerouslySetInnerHTML={{ __html: data.html }}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
