'use client';

import { Nav } from '@/components/nav';
import { Footer } from '@/components/footer';
import { useLang } from '@/contexts/language-context';
import { motion } from 'framer-motion';

export default function ComparePage() {
  const { t } = useLang();

  return (
    <>
      <Nav />
      <main className="min-h-screen pt-24 pb-24">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl font-serif text-gold-500 text-center mb-4">
              {t('东方遇见西方', 'East Meets West')}
            </h1>
            <p className="text-center text-cream-100/50 mb-12 max-w-2xl mx-auto">
              {t('人体塔存在于世界的两个角落：加泰罗尼亚和马来西亚。一个是民族自豪的公民传统。另一个是信仰与师弟关系的灵性实践。', 'Human towers exist in two corners of the world. One is civic pride. The other is spiritual practice.')}
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Castells */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-xl bg-navy-900 border border-teal-400/40"
              >
                <h2 className="text-2xl font-serif text-teal-400 mb-6">🇪🇸 Castells · Catalonia</h2>
                <ComparisonRows items={[
                  ['📅 Origin', '18th Century'],
                  ['🏔 Max Height', '10 levels'],
                  ['🎵 Music', 'Gralla (woodwind)'],
                  ['🏛 Type', 'Civic tradition'],
                  ['👥 Base', 'Hundreds (pinya)'],
                  ['🎯 Driver', 'Competition'],
                  ['🏆 Recognition', 'UNESCO 2010'],
                ]} accent="teal" />
              </motion.div>

              {/* Chaoyang */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-xl bg-navy-900 border border-gold-500/40"
              >
                <h2 className="text-2xl font-serif text-gold-500 mb-6">🇲🇾 {t('朝阳体操队 · Malaysia', 'Chaoyang · Malaysia')}</h2>
                <ComparisonRows items={[
                  ['📅 Origin', '1976'],
                  ['🏔 Max Height', '6 levels'],
                  ['🎵 Music', 'Choreographed songs'],
                  ['🏛 Type', 'Spiritual tradition'],
                  ['👥 Base', '5-man circles'],
                  ['🎯 Driver', 'Faith & mission'],
                  ['🏆 Recognition', 'Government honored'],
                ]} accent="gold" />
              </motion.div>
            </div>

            {/* Shared */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 p-6 rounded-xl bg-navy-800/50 border border-gold-500/20 text-center"
            >
              <h3 className="text-gold-400 font-serif text-lg mb-3">🤝 {t('共同点', 'What They Share')}</h3>
              <p className="text-cream-100/60 text-sm">
                Trust · Discipline · Intergenerational Transfer · Community Identity · Human Achievement
              </p>
            </motion.div>

            {/* Unique */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 p-6 rounded-xl bg-navy-800/50 border border-coral-500/30"
            >
              <h3 className="text-coral-400 font-serif text-lg mb-3">🌟 {t('朝阳的独特之处', 'What Makes Chaoyang Unique')}</h3>
              <div className="text-cream-100/60 text-sm space-y-2">
                <p>1. {t('信仰为根基 — 训练以勤行开始；题目贯穿始终', 'Faith as foundation — training begins with gongyo')}</p>
                <p>2. {t('塔即御宝塔 — 塔象征着御本尊的宝塔', 'The tower as Treasure Tower of the Gohonzon')}</p>
                <p>3. {t('师弟关系 — 塔的垂直结构呼应师匠与弟子的纽带', 'Master-disciple bond — the tower mirrors vertical spiritual connection')}</p>
                <p>4. {t('人间革命 — 目的不仅是表演，而是个人品格转变', 'Human Revolution — purpose is character transformation')}</p>
                <p>5. {t('和平使命 — 演出服务于更大的和平使命', 'Peace mission — performances serve a larger peace purpose')}</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function ComparisonRows({ items, accent }: { items: [string, string][]; accent: 'gold' | 'teal' }) {
  const color = accent === 'gold' ? 'border-gold-500/20' : 'border-teal-400/20';
  const labelColor = accent === 'gold' ? 'text-gold-400' : 'text-teal-400';
  const valueColor = accent === 'gold' ? 'text-gold-300' : 'text-teal-300';
  return (
    <div className="space-y-3">
      {items.map(([label, value]) => (
        <div key={label} className={`flex justify-between pb-2 border-b ${color}`}>
          <span className={labelColor}>{label}</span>
          <span className={valueColor}>{value}</span>
        </div>
      ))}
    </div>
  );
}
