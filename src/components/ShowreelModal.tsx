import React, { useState, useEffect } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Maximize2, RotateCcw } from 'lucide-react';
import { siteConfig } from '../data/portfolio';

interface ShowreelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShowreelModal: React.FC<ShowreelModalProps> = ({ isOpen, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(28); // 0 to 100%
  const [activeChapter, setActiveChapter] = useState(0);

  const chapters = [
    { title: '01 / Rhythmic Narrative Cut', time: '00:00 - 00:34', theme: 'nocturne' },
    { title: '02 / Kinetic 3D Typographic Passes', time: '00:35 - 01:12', theme: 'kinetic' },
    { title: '03 / Film Color Architecture', time: '01:13 - 01:54', theme: 'documentary' },
    { title: '04 / High-Retention Hooks', time: '01:55 - 02:30', theme: 'thumbnail' },
  ];

  // Simulated video playback timer
  useEffect(() => {
    if (!isOpen || !isPlaying) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + 0.5;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [isOpen, isPlaying]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Format progress into timecode
  const totalSeconds = 150; // 2:30
  const currentSeconds = Math.floor((progress / 100) * totalSeconds);
  const mins = Math.floor(currentSeconds / 60).toString().padStart(2, '0');
  const secs = (currentSeconds % 60).toString().padStart(2, '0');
  const frames = Math.floor(((progress * 10) % 24)).toString().padStart(2, '0');
  const timecodeString = `00:${mins}:${secs}:${frames}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-8 animate-in fade-in duration-300">
      <div className="relative w-full max-w-6xl bg-[#0a0a0a] rounded-sm border border-[rgba(243,238,229,0.16)] shadow-2xl overflow-hidden flex flex-col">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[rgba(243,238,229,0.1)] bg-[#0e0e0e]">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#d6a84f] animate-pulse" />
            <span className="text-xs font-mono tracking-widest text-[#F3EEE5] uppercase">
              {siteConfig.showreel.title}
            </span>
            <span className="text-[11px] font-mono text-[#9D9991] hidden sm:inline">
              · 4K DCI · 24.00 FPS · {siteConfig.showreel.duration}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#9D9991] hover:text-[#F3EEE5] hover:bg-[#1a1a1a] rounded transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Canvas / Film Screen Viewport */}
        <div className="relative aspect-[21/9] md:aspect-[16/9] w-full bg-[#050505] overflow-hidden flex items-center justify-center">
          {/* Animated visual rendering according to progress */}
          <div className="absolute inset-0 flex items-center justify-center">
            {progress < 25 && (
              <div className="relative w-full h-full bg-gradient-to-tr from-[#05080c] via-[#091522] to-[#040608] flex items-center justify-center">
                <svg className="w-full h-full opacity-70" viewBox="0 0 1000 500">
                  <line x1="0" y1="250" x2="1000" y2="250" stroke="#d6a84f" strokeWidth="2" strokeOpacity="0.8" />
                  <circle cx={200 + progress * 20} cy="250" r="120" fill="url(#reel-glow)" />
                  <defs>
                    <radialGradient id="reel-glow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#d6a84f" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#000" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                  <span className="text-xs font-mono tracking-widest text-[#d6a84f] uppercase mb-2">
                    SEQUENCE 01 — CINEMATIC PACING
                  </span>
                  <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tight text-[#F3EEE5]">
                    RHYTHMIC NARRATIVE CUT
                  </h2>
                </div>
              </div>
            )}

            {progress >= 25 && progress < 50 && (
              <div className="relative w-full h-full bg-[#070707] flex items-center justify-center">
                <svg className="w-full h-full" viewBox="0 0 1000 500">
                  <path
                    d={`M 100,400 Q ${300 + (progress % 10) * 15},${100 - (progress % 10) * 5} 800,300`}
                    fill="none"
                    stroke="#d6a84f"
                    strokeWidth="3"
                  />
                  <text x="120" y="270" fill="#F3EEE5" fontSize="64" fontWeight="800" fontFamily="sans-serif">
                    KINETIC MOTION
                  </text>
                </svg>
                <div className="absolute bottom-10 left-10">
                  <span className="text-xs font-mono text-[#d6a84f] uppercase">
                    3D PROCEDURAL TYPOGRAPHY · 60 FPS
                  </span>
                </div>
              </div>
            )}

            {progress >= 50 && progress < 75 && (
              <div className="relative w-full h-full bg-[#080a0c] flex items-center justify-center p-8">
                <div className="grid grid-cols-2 gap-4 w-full max-w-2xl border border-[rgba(243,238,229,0.1)] p-4">
                  <div className="p-4 border-r border-[rgba(243,238,229,0.1)]">
                    <span className="text-[10px] font-mono text-[#9D9991]">LOG PROFILE (RAW)</span>
                    <div className="h-24 bg-[#26282b] mt-2 rounded flex items-center justify-center text-xs text-[#9D9991]">
                      FLAT DYNAMIC RANGE
                    </div>
                  </div>
                  <div className="p-4 bg-gradient-to-tr from-[#0f172a] to-[#1e1b18]">
                    <span className="text-[10px] font-mono text-[#d6a84f]">FINAL GRADE (DAVINCI)</span>
                    <div className="h-24 bg-gradient-to-r from-[#09182a] to-[#2a1b0c] mt-2 rounded flex items-center justify-center text-xs text-[#F3EEE5] font-semibold">
                      KODAK 2383 D55
                    </div>
                  </div>
                </div>
              </div>
            )}

            {progress >= 75 && (
              <div className="relative w-full h-full bg-gradient-to-tr from-[#120803] via-[#090807] to-[#040404] flex items-center justify-center">
                <div className="text-center">
                  <span className="text-xs font-mono text-[#d6a84f] uppercase tracking-widest block mb-2">
                    VISUAL IMPACT HOOK
                  </span>
                  <h3 className="text-4xl md:text-6xl font-bold font-sans tracking-tight text-[#F3EEE5]">
                    HIGH-RETENTION COMPOSITION
                  </h3>
                </div>
              </div>
            )}
          </div>

          {/* Letterbox Cinema Bars */}
          <div className="absolute top-0 inset-x-0 h-4 md:h-6 bg-black pointer-events-none" />
          <div className="absolute bottom-0 inset-x-0 h-4 md:h-6 bg-black pointer-events-none" />

          {/* Audio Visualizer Waves at bottom right of video */}
          <div className="absolute bottom-8 right-8 flex items-end gap-1 pointer-events-none opacity-80">
            {[40, 75, 30, 95, 60, 45, 80, 20, 90, 50, 70, 35].map((h, i) => (
              <div
                key={i}
                className="w-1 bg-[#d6a84f] transition-all duration-150"
                style={{
                  height: isPlaying ? `${(h * ((progress % 20) + 10)) / 25}px` : '4px',
                }}
              />
            ))}
          </div>

          {/* Live Timecode Overlay */}
          <div className="absolute top-8 left-8 bg-[#080808]/80 backdrop-blur-md px-3 py-1.5 rounded border border-[rgba(243,238,229,0.12)] font-mono text-xs tracking-wider text-[#F3EEE5]">
            <span className="text-[#d6a84f] mr-2">TC:</span>
            {timecodeString}
          </div>
        </div>

        {/* Video Scrubber & Playhead Controls */}
        <div className="p-4 md:p-6 bg-[#0c0c0c] border-t border-[rgba(243,238,229,0.1)] flex flex-col gap-4">
          {/* Timeline Bar */}
          <div className="relative w-full">
            <div
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const clickX = e.clientX - rect.left;
                const newProgress = Math.max(0, Math.min(100, (clickX / rect.width) * 100));
                setProgress(newProgress);
              }}
              className="relative w-full h-2 bg-[#1a1a1a] rounded cursor-pointer group"
            >
              {/* Played progress */}
              <div
                className="h-full bg-[#d6a84f] rounded relative"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-[#F3EEE5] shadow-lg scale-0 group-hover:scale-100 transition-transform" />
              </div>

              {/* Chapter ticks */}
              <div className="absolute inset-0 flex justify-between pointer-events-none">
                <span className="w-0.5 h-full bg-[#333]" />
                <span className="w-0.5 h-full bg-[#333]" />
                <span className="w-0.5 h-full bg-[#333]" />
                <span className="w-0.5 h-full bg-[#333]" />
              </div>
            </div>
          </div>

          {/* Control Buttons */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-10 h-10 rounded-full bg-[#F3EEE5] text-[#080808] flex items-center justify-center hover:bg-[#d6a84f] transition-colors"
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
              </button>

              <button
                onClick={() => setProgress(0)}
                className="p-2 text-[#9D9991] hover:text-[#F3EEE5] transition-colors"
                aria-label="Restart"
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              <button
                onClick={() => setIsMuted(!isMuted)}
                className="p-2 text-[#9D9991] hover:text-[#F3EEE5] transition-colors"
                aria-label={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>

              <div className="text-xs font-mono text-[#9D9991] ml-2">
                <span className="text-[#F3EEE5]">{mins}:{secs}</span> / 02:30
              </div>
            </div>

            {/* Chapter Selection Shortcuts */}
            <div className="hidden lg:flex items-center gap-2">
              {chapters.map((ch, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setActiveChapter(idx);
                    setProgress(idx * 25);
                  }}
                  className={`text-[11px] font-mono px-2.5 py-1 rounded transition-colors ${
                    activeChapter === idx
                      ? 'bg-[#d6a84f] text-[#080808] font-bold'
                      : 'text-[#9D9991] hover:text-[#F3EEE5] bg-[#141414]'
                  }`}
                >
                  {ch.title}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-[#9D9991]">
              <span className="px-2 py-0.5 rounded bg-[#161616] text-[#F3EEE5]">PRORES 4444</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
