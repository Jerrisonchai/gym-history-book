import { loadValues } from '@/lib/load-content';
import { Nav } from '@/components/nav';
import { Footer } from '@/components/footer';
import { notFound } from 'next/navigation';

export default async function ValuesPage() {
  const data = await loadValues();
  if (!data) notFound();

  return (
    <>
      <Nav />
      <main className="min-h-screen pt-24 pb-24">
        <div className="max-w-[800px] mx-auto px-6">
          <h1 className="text-4xl font-serif text-gold-500 mb-4">🏛 Core Values / 核心价值</h1>
          <p className="text-cream-100/50 mb-10">46 principles across 3 levels — the GYMBOY spirit</p>
          <div
            className="prose prose-invert max-w-none prose-headings:font-serif prose-h2:text-gold-400 prose-h3:text-gold-300 prose-table:text-cream-100/80 prose-th:text-gold-400 prose-td:border-navy-800 prose-strong:text-gold-300"
            dangerouslySetInnerHTML={{ __html: data.html }}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
