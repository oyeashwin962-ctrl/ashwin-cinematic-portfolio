import React from 'react';
import { Play, ArrowDownRight, Sparkles } from 'lucide-react';
import { creatorProfile } from '../data/portfolioData';

interface HeroProps {
  onOpenShowreel: () => void;
  onExploreWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenShowreel, onExploreWork }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[95vh] md:min-h-screen w-full flex flex-col justify-between pt-28 md:pt-36 pb-12 px-6 md:px-12 max-w-[1440px] mx-auto overflow-hidden animate-in fade-in duration-700"
    >
      {/* Background Atmosphere Layer */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] rounded-full bg-[#d6a84f]/08 blur-3xl opacity-60" />
        <div className="absolute bottom-1/3 left-10 w-[350px] h-[350px] rounded-full bg-[#2563eb]/05 blur-3xl opacity-50" />
      </div>

      {/* Top Meta Line: Availability & Studio Discipline */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-[rgba(243,238,229,0.08)] pb-4 text-xs font-mono text-[#9D9991]">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d6a84f] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#d6a84f]" />
          </span>
          <span className="text-[#F3EEE5] tracking-wider uppercase">
            {creatorProfile.availability}
          </span>
        </div>

        <div className="flex items-center gap-4 text-[11px] tracking-widest uppercase">
          <span>PORTFOLIO 2026</span>
          <span>·</span>
          <span>EST. EDITION</span>
        </div>
      </div>

      {/* Main Asymmetric Grid Body */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end my-auto py-8">
        {/* Left Column: Foreground Typography & Positioning */}
        <div className="lg:col-span-7 flex flex-col justify-end">
          {/* Huge ASHWIN Display Title */}
          <div className="overflow-hidden">
            <h1
              className="font-sans font-black tracking-tighter text-[#F3EEE5] leading-[0.88] uppercase select-none transition-transform duration-500"
              style={{ fontSize: 'clamp(64px, 13vw, 192px)' }}
            >
              ASHWIN
            </h1>
          </div>

          {/* Roles Stagger List */}
          <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs md:text-sm font-mono tracking-widest text-[#9D9991]">
            {creatorProfile.roles.map((role, idx) => (
              <React.Fragment key={role}>
                <span className="text-[#F3EEE5] hover:text-[#d6a84f] transition-colors">
                  {role}
                </span>
                {idx < creatorProfile.roles.length - 1 && (
                  <span className="text-[#d6a84f] opacity-60">/</span>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Short Positioning Statement & CTA */}
          <div className="mt-8 md:mt-12 flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-[rgba(243,238,229,0.12)]">
            <p className="text-base md:text-xl font-sans text-[#9D9991] max-w-md leading-relaxed">
              <span className="text-[#F3EEE5] font-medium">Visual storytelling</span> through editing, motion and design.
            </p>

            <button
              onClick={onExploreWork}
              data-cursor="arrow"
              className="group inline-flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#F3EEE5] hover:text-[#d6a84f] transition-colors"
            >
              <span>EXPLORE WORK</span>
              <ArrowDownRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-y-0.5 group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>

        {/* Right Column: Middle Media (Showreel Feature) */}
        <div className="lg:col-span-5 relative mt-6 lg:mt-0">
          {/* Large Cinematic Showreel Feature */}
          <div
            onClick={onOpenShowreel}
            data-cursor="play"
            className="group relative aspect-[16/9] w-full rounded-sm overflow-hidden bg-[#0c0c0c] border border-[rgba(243,238,229,0.16)] shadow-2xl cursor-pointer transition-all duration-500 hover:border-[#d6a84f]/70 will-change-transform z-10 hover:scale-[1.01]"
          >
            {/* Cinematic Background Film Frame */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#06080b] via-[#0d1620] to-[#121c27] transition-transform duration-700 group-hover:scale-105">
              <svg className="w-full h-full object-cover opacity-80" viewBox="0 0 800 450" fill="none">
                <defs>
                  <radialGradient id="hero-cinematic-glow" cx="45%" cy="40%" r="55%">
                    <stop offset="0%" stopColor="#d6a84f" stopOpacity="0.45" />
                    <stop offset="35%" stopColor="#2563eb" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#06080b" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <line x1="0" y1="210" x2="800" y2="210" stroke="#d6a84f" strokeWidth="1.5" strokeOpacity="0.5" />
                <line x1="100" y1="210" x2="700" y2="210" stroke="#F3EEE5" strokeWidth="2.5" strokeOpacity="0.7" />
                <circle cx="360" cy="210" r="140" fill="url(#hero-cinematic-glow)" />
                <circle cx="360" cy="210" r="40" stroke="#d6a84f" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.6" />
                <line x1="360" y1="160" x2="360" y2="260" stroke="#d6a84f" strokeWidth="0.8" opacity="0.5" />
                <line x1="310" y1="210" x2="410" y2="210" stroke="#d6a84f" strokeWidth="0.8" opacity="0.5" />
              </svg>
            </div>

            {/* Subtle Film Grain */}
            <div className="absolute inset-0 film-grain opacity-50 pointer-events-none" />

            {/* Cinema Letterbox Bars */}
            <div className="absolute top-0 inset-x-0 h-3 bg-black pointer-events-none" />
            <div className="absolute bottom-0 inset-x-0 h-3 bg-black pointer-events-none" />

            {/* Floating Showreel Badge & Metadata */}
            <div className="absolute inset-0 p-5 flex flex-col justify-between pointer-events-none">
              <div className="flex items-center justify-between text-[10px] font-mono tracking-widest text-[#9D9991]">
                <span className="text-[#F3EEE5] uppercase flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d6a84f]" />
                  SHOWREEL
                </span>
                <span className="text-[#d6a84f]">2026 EDITION</span>
              </div>

              {/* Centered Play Trigger */}
              <div className="self-center flex flex-col items-center gap-2">
                <div className="w-14 h-14 rounded-full bg-[#F3EEE5] text-[#080808] flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-[#d6a84f] shadow-2xl">
                  <Play className="w-5 h-5 fill-current ml-0.5" />
                </div>
                <span className="text-[10px] font-mono tracking-widest text-[#F3EEE5] uppercase">
                  PLAY REEL
                </span>
              </div>

              {/* Bottom Scrim Info */}
              <div className="flex items-center justify-between text-[10px] font-mono text-[#9D9991]">
                <span>2M 30S CUT</span>
                <span>4K DCI · 2.39:1</span>
              </div>
            </div>
          </div>

          <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-[#9D9991]">
            <span>CLICK TO LAUNCH CINEMATIC VIEWER</span>
            <span className="text-[#d6a84f]">PREVIEW</span>
          </div>
        </div>
      </div>

      {/* Hero Footnote / Scroll Indicator */}
      <div className="relative z-10 flex items-center justify-between pt-6 border-t border-[rgba(243,238,229,0.08)] text-[11px] font-mono text-[#9D9991]">
        <div className="flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-[#d6a84f]" />
          <span>EDITORIAL ARCHITECTURE</span>
        </div>
        <div className="hidden sm:flex items-center gap-4">
          <span>SCROLL TO DISCOVER</span>
          <span className="text-[#d6a84f]">↓</span>
        </div>
      </div>
    </section>
  );
};
