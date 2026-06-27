'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import { useLang } from '@/contexts/language-context';

interface Track {
  title: string;
  artist: string;
  src: string;
}

const tracks: Track[] = [
  { title: '滝の詩 Waterfall 瀑布之詩', artist: 'SGI', src: '/audio/waterfall-takinouta.mp3' },
  { title: '大楠公の歌 Dainanko', artist: 'SGI', src: '/audio/dainanko.mp3' },
  { title: '紅のうた Crimson Song', artist: 'SGI', src: '/audio/kurenai-no-uta.mp3' },
];

export function MusicPlayer() {
  const { t } = useLang();
  const [playing, setPlaying] = useState(false);
  const [trackIdx, setTrackIdx] = useState(0);
  const [show, setShow] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Listen for bottom nav music tap
  useEffect(() => {
    const handler = () => setShow((s) => !s);
    window.addEventListener('toggle-music', handler);
    return () => window.removeEventListener('toggle-music', handler);
  }, []);

  const toggle = useCallback(() => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play().catch(() => setPlaying(false));
      setPlaying(true);
    }
  }, [playing]);

  const next = useCallback(() => {
    const nextIdx = (trackIdx + 1) % tracks.length;
    setTrackIdx(nextIdx);
    setPlaying(false);
    setTimeout(() => audioRef.current?.play().then(() => setPlaying(true)), 100);
  }, [trackIdx]);

  const prev = useCallback(() => {
    const prevIdx = (trackIdx - 1 + tracks.length) % tracks.length;
    setTrackIdx(prevIdx);
    setPlaying(false);
    setTimeout(() => audioRef.current?.play().then(() => setPlaying(true)), 100);
  }, [trackIdx]);

  const track = tracks[trackIdx];

  if (!show) return null;

  return (
    <div className="fixed bottom-14 left-0 right-0 z-40 bg-navy-900/95 backdrop-blur-md border-t border-gold-500/30 px-4 py-2">
      <audio ref={audioRef} src={track.src} onEnded={next} />

      <div className="max-w-2xl mx-auto flex items-center gap-4">
        <div className="flex-1 min-w-0">
          <p className="text-gold-400 text-xs truncate">{track.title}</p>
          <p className="text-cream-100/30 text-[10px]">{track.artist}</p>
        </div>

        <div className="flex items-center gap-2">
          <button onClick={prev} className="text-gold-400/60 hover:text-gold-300 text-sm">⏮</button>
          <button
            onClick={toggle}
            className="w-8 h-8 rounded-full bg-gold-500/20 border border-gold-400/50 flex items-center justify-center text-gold-400 hover:bg-gold-500/30"
          >
            {playing ? '⏸' : '▶'}
          </button>
          <button onClick={next} className="text-gold-400/60 hover:text-gold-300 text-sm">⏭</button>
        </div>

        <button onClick={() => { setPlaying(false); setShow(false); }} className="text-cream-100/30 hover:text-cream-100/60 text-xs ml-2">✕</button>
      </div>
    </div>
  );
}
