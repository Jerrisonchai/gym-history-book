'use client';

import { motion } from 'framer-motion';
import { Nav } from '@/components/nav';
import { Footer } from '@/components/footer';
import { useLang } from '@/contexts/language-context';

const events = [
  { year: '1976', zh: '二十多位先驱创立健身操', en: '20+ pioneers found the troupe', era: 'founding' },
  { year: '1982', zh: '第一届文化节 — 300人，首次成功建立五层塔', en: '1st Cultural Festival — first 5-level tower, 300 men', era: 'founding', major: true },
  { year: '1983', zh: '日本教练来马传授技术', en: 'Japanese instructors transferred techniques', era: 'founding' },
  { year: '1985', zh: '第二届文化节 — 1,500人，五层塔再次成功', en: '2nd Cultural Festival — 1,500 members, tower repeated', era: 'founding', major: true },
  { year: '1986', zh: '第一届青年和平文化节（槟城）', en: '1st Youth Peace Festival (Penang)', era: 'founding' },
  { year: '1987', zh: '马大武术之夜 — 180人表演', en: 'UM Martial Arts Night — 180 performers', era: 'founding' },
  { year: '1988.2', zh: '池田先生首次访问马来西亚', en: 'Ikeda Sensei visits Malaysia for first time', era: 'founding', highlight: true },
  { year: '1988.7', zh: '第二届青年和平文化节（怡保）', en: '2nd Youth Peace Festival (Ipoh)', era: 'founding' },
  { year: '1989.7', zh: '第三届青年和平文化节（柔佛，雨中表演）— 500人', en: '3rd Youth Peace Festival (Johor, rain) — 500 men', era: 'founding', major: true },
  { year: '1989.8.20', zh: '东运会开幕 — 2,200人，19座四层塔！', en: 'SEA Games — 2,200 men, 19 towers!', era: 'founding', peak: true },
  { year: '1989.11', zh: 'Q计划推介礼 — 350人', en: 'Q Project launch — 350 performers', era: 'founding' },
  { year: '1990.5', zh: '第四届青年和平文化节（关丹）— 1,200人', en: '4th Youth Peace Festival (Kuantan) — 1,200 youth', era: 'founding' },
  { year: '1990.8.20', zh: '健身操正式成立全国组织', en: 'National organization formally established', era: 'foundation', major: true },
  { year: '1992', zh: 'Softgym正式成立', en: 'Softgym formally established', era: 'foundation' },
  { year: '1994', zh: '首办全国性比赛', en: 'First national competition', era: 'foundation', major: true },
  { year: '1994–2008', zh: '年度体操比赛时期', en: 'Annual competition era', era: 'foundation' },
  { year: '2004', zh: '池田先生命名为「朝阳体操队」', en: 'Named "Chaoyang Gymnastics Team" by Ikeda Sensei', era: 'modern', peak: true },
];

export default function TimelinePage() {
  const { t } = useLang();

  return (
    <>
      <Nav />
      <main className="min-h-screen pt-24 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl font-serif text-gold-500 text-center mb-4">{t('历史时间线', 'Historical Timeline')}</h1>
          <p className="text-center text-cream-100/40 mb-12">{t('1976–2004 · 朝阳体操队的关键里程碑', '1976–2004 · Key milestones of Chaoyang')}</p>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gold-500/30" />

            {events.map((ev, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="relative pl-16 pb-8"
              >
                {/* Dot */}
                <div
                  className={`absolute left-[18px] top-1 w-3 h-3 rounded-full border-2 ${
                    ev.peak ? 'bg-coral-500 border-coral-400 shadow-lg shadow-coral-500/30' :
                    ev.major ? 'bg-gold-500 border-gold-300' :
                    ev.highlight ? 'bg-sunrise-500 border-sunrise-300' :
                    'bg-navy-800 border-gold-500/50'
                  }`}
                />

                {/* Era label */}
                {ev.era === 'foundation' && events[i - 1]?.era === 'founding' && (
                  <div className="mb-4 -ml-16 pl-16 pt-2 border-t border-gold-500/20">
                    <span className="text-xs text-sunrise-400 font-mono uppercase tracking-wider">
                      {t('第二幕：全国基础', 'Act II: National Foundation')}
                    </span>
                  </div>
                )}
                {ev.era === 'modern' && events[i - 1]?.era === 'foundation' && (
                  <div className="mb-4 -ml-16 pl-16 pt-2 border-t border-gold-500/20">
                    <span className="text-xs text-gold-300 font-mono uppercase tracking-wider">
                      {t('第三幕：现代发展', 'Act III: Modern Era')}
                    </span>
                  </div>
                )}

                <span className={`font-mono text-sm ${ev.peak ? 'text-coral-400 font-bold' : ev.major ? 'text-gold-400 font-bold' : 'text-gold-500'}`}>
                  {ev.year}
                </span>
                <p className={`text-sm mt-1 ${ev.peak ? 'text-cream-100 font-semibold' : 'text-cream-100/70'}`}>
                  {t(ev.zh, ev.en)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
