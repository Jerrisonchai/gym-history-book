'use client';

import { motion } from 'framer-motion';
import { useLang } from '@/contexts/language-context';

export function Hero() {
  const { t } = useLang();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900/80 to-navy-950" />
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, #f0d878 0%, #d4a843 30%, transparent 70%)',
        }}
      />

      {/* Tower SVG */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
        className="relative z-10 mb-8"
      >
        <TowerSVG />
      </motion.div>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-center z-10"
      >
        <h1 className="text-5xl md:text-7xl font-serif text-gold-500 tracking-wider">
          {t('朝阳体操队', 'Chaoyang')}
        </h1>
        <p className="text-lg md:text-xl text-gold-300/80 mt-3 font-serif">
          {t('马来西亚人体塔传统', 'The Human Tower Tradition of Malaysia')}
        </p>
        <p className="text-cream-100/40 text-sm mt-6">1976–Present</p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 z-10 text-center"
      >
        <p className="text-cream-100/30 text-xs mb-2">{t('向下滚动', 'Scroll to begin')}</p>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-gold-500/50 text-2xl"
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  );
}

function TowerSVG() {
  return (
    <svg width="120" height="280" viewBox="0 0 200 500" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Level 1 — Base */}
      <ellipse cx="55" cy="460" rx="16" ry="20" fill="#e85d5d" opacity="0.6" stroke="#d4a843" strokeWidth="1.5" />
      <ellipse cx="100" cy="455" rx="16" ry="20" fill="#e85d5d" opacity="0.6" stroke="#d4a843" strokeWidth="1.5" />
      <ellipse cx="145" cy="460" rx="16" ry="20" fill="#e85d5d" opacity="0.6" stroke="#d4a843" strokeWidth="1.5" />
      <rect x="47" y="425" width="16" height="38" rx="4" fill="#e85d5d" opacity="0.6" />
      <rect x="92" y="420" width="16" height="38" rx="4" fill="#e85d5d" opacity="0.6" />
      <rect x="137" y="425" width="16" height="38" rx="4" fill="#e85d5d" opacity="0.6" />
      <circle cx="55" cy="415" r="10" fill="#e85d5d" opacity="0.6" stroke="#d4a843" strokeWidth="1" />
      <circle cx="100" cy="410" r="10" fill="#e85d5d" opacity="0.6" stroke="#d4a843" strokeWidth="1" />
      <circle cx="145" cy="415" r="10" fill="#e85d5d" opacity="0.6" stroke="#d4a843" strokeWidth="1" />
      {/* Level 2 */}
      <ellipse cx="78" cy="380" rx="12" ry="16" fill="#d4a843" opacity="0.5" stroke="#f0d878" strokeWidth="1" />
      <ellipse cx="122" cy="380" rx="12" ry="16" fill="#d4a843" opacity="0.5" stroke="#f0d878" strokeWidth="1" />
      <rect x="71" y="350" width="14" height="32" rx="3" fill="#d4a843" opacity="0.5" />
      <rect x="115" y="350" width="14" height="32" rx="3" fill="#d4a843" opacity="0.5" />
      <circle cx="78" cy="342" r="8" fill="#d4a843" opacity="0.5" />
      <circle cx="122" cy="342" r="8" fill="#d4a843" opacity="0.5" />
      {/* Level 3 */}
      <ellipse cx="100" cy="315" rx="10" ry="14" fill="#e8c456" opacity="0.5" stroke="#f0d878" strokeWidth="1" />
      <rect x="94" y="290" width="12" height="26" rx="3" fill="#e8c456" opacity="0.5" />
      <circle cx="100" cy="284" r="7" fill="#e8c456" opacity="0.5" />
      {/* Level 4 — Top */}
      <ellipse cx="100" cy="265" rx="8" ry="10" fill="#f0d878" opacity="0.7" stroke="#fff" strokeWidth="0.5" />
      <rect x="96" y="245" width="8" height="20" rx="2" fill="#f0d878" opacity="0.7" />
      <circle cx="100" cy="240" r="5" fill="#f0d878" />
      {/* Crown rays */}
      <line x1="98" y1="235" x2="92" y2="225" stroke="#d4a843" strokeWidth="0.8" opacity="0.5" />
      <line x1="100" y1="233" x2="100" y2="222" stroke="#d4a843" strokeWidth="1" opacity="0.7" />
      <line x1="102" y1="235" x2="108" y2="225" stroke="#d4a843" strokeWidth="0.8" opacity="0.5" />
      {/* Ground line */}
      <line x1="30" y1="480" x2="170" y2="480" stroke="#d4a843" strokeWidth="1" opacity="0.3" />
    </svg>
  );
}
