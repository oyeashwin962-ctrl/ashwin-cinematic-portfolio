import React, { useState, useRef } from 'react';
import { Play, ArrowDownRight, Film, Radio } from 'lucide-react';
import { creatorProfile, siteConfig } from '../data/portfolio';

interface HeroProps {
  onOpenShowreel: () => void;
  onExploreWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenShowreel, onExploreWork }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHoveringReel, setIsHoveringReel] = useState(false);
  const mediaRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!mediaRef.current) return;
    const rect = mediaRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 8; // subtle tilt angle
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -8;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHoveringReel(false);
  };

  return (
    <section
      id="hero"
      className="relative min-h-[96vh] lg:min-h-screen w-full flex flex-col justify-between pt-24 md:pt-32 pb-12 px-6 md:px-12 max-w-[1520px] mx-auto overflow-hidden animate-in fade-in duration-700 select-none"
    >
      {/* Background Cinematic Atmosphere */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Anamorphic amber and moody slate glow */}
        <div className="absolute top-1/4 right-1/6 w-[550px] h-[550px] rounded-full bg-[#D6A84F]/06 blur-[120px] opacity-70 pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/12 w-[420px] h-[420px] rounded-full bg-[#1b2b3a]/25 blur-[100px] opacity-50 pointer-events-none" />
        {/* Subtle grid coordinates */}
        <div className="absolute top-28 right-12 font-mono text-[9px] text-[#9D9991]/30 tracking-widest hidden md:block">
          COORD: 28.6139° N / 77.2090° E // EDITORIAL_TIMELINE_V2.6
        </div>
      </div>

      {/* Top Meta Header: Status & Studio Descriptor */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-[rgba(243,238,229,0.08)] pb-4 text-xs font-mono text-[#9D9991]">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D6A84F] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D6A84F]" />
          </span>
          <span className="text-[#F3EEE5] tracking-wider uppercase">
            {creatorProfile.availability}
          </span>
        </div>

        <div className="flex items-center gap-4 text-[11px] tracking-widest uppercase">
          <span className="hidden sm:inline text-[#9D9991]">STUDIO ARCHIVE</span>
          <span className="hidden sm:inline">·</span>
          <span className="text-[#D6A84F] flex items-center gap-1.5">
            <Radio className="w-3 h-3 animate-pulse" />
            LIVE EDITORIAL
          </span>
        </div>
      </div>

      {/* Main Asymmetric Composition */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-end my-auto py-6 lg:py-10">
        
        {/* Left / Center Column: Typography Stack */}
        <div className="lg:col-span-8 flex flex-col justify-end z-20">
          
          {/* Studio Brand Prefix */}
          <div className="flex items-center gap-3 mb-2 font-mono text-xs uppercase tracking-[0.25em] text-[#D6A84F]">
            <Film className="w-3.5 h-3.5" />
            <span>{creatorProfile.brandDescriptor}</span>
          </div>

          {/* Huge ASHWIN Display Title */}
          <div className="relative">
            <h1
              className="font-sans font-black tracking-[-0.05em] text-[#F3EEE5] leading-[0.84] uppercase select-none"
              style={{ fontSize: 'clamp(68px, 14vw, 210px)' }}
            >
              ASHWIN
            </h1>
            
            {/* Subtle Ghost Underlay for Typographic Depth */}
            <div
              className="absolute -top-1 left-1 select-none pointer-events-none opacity-[0.03] font-sans font-black tracking-[-0.05em] text-white leading-[0.84] uppercase hidden md:block"
              style={{ fontSize: 'clamp(68px, 14vw, 210px)' }}
              aria-hidden="true"
            >
              ASHWIN
            </div>
          </div>

          {/* Role Badges Stagger List */}
          <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs md:text-sm font-mono tracking-widest text-[#9D9991]">
            {creatorProfile.roles.map((role, idx) => (
              <React.Fragment key={role}>
                <span className="text-[#F3EEE5] hover:text-[#D6A84F] transition-colors">
                  {role}
                </span>
                {idx < creatorProfile.roles.length - 1 && (
                  <span className="text-[#D6A84F] opacity-50">/</span>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Concise Positioning Statement & Explore CTA */}
          <div className="mt-8 md:mt-12 flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-[rgba(243,238,229,0.12)] max-w-3xl">
            <p className="text-base md:text-xl font-sans text-[#9D9991] max-w-md leading-relaxed">
              <span className="text-[#F3EEE5] font-medium">{creatorProfile.tagline}</span>
            </p>

            <button
              onClick={onExploreWork}
              data-cursor="arrow"
              className="group inline-flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-[#F3EEE5] hover:text-[#D6A84F] transition-colors self-start sm:self-auto"
            >
              <span>EXPLORE SELECTED WORK</span>
              <ArrowDownRight className="w-4 h-4 text-[#D6A84F] transition-transform duration-300 group-hover:translate-y-1 group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Right Column: Replaceable Showreel Media Composition Intersecting the Layout */}
        <div
          ref={mediaRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHoveringReel(true)}
          onMouseLeave={handleMouseLeave}
          className="lg:col-span-4 relative mt-6 lg:mt-0 z-30 lg:-ml-12 xl:-ml-16"
          style={{
            transform: `perspective(1000px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
            transition: isHoveringReel ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
          }}
        >
          {/* Real Replaceable Showreel Media Frame */}
          <div
            onClick={onOpenShowreel}
            data-cursor="play"
            className="group relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-sm overflow-hidden bg-[#0c0c0c] border border-[rgba(243,238,229,0.16)] shadow-[0_20px_50px_rgba(0,0,0,0.8)] cursor-pointer transition-all duration-500 hover:border-[#D6A84F]/80 hover:shadow-[0_20px_60px_rgba(214,168,79,0.15)] will-change-transform"
          >
            {/* Film Frame Visual Texture (Replaceable with real video/image asset via siteConfig.showreel) */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#050608] via-[#0c141d] to-[#141e2a] transition-transform duration-700 group-hover:scale-105">
              {/* Cinematic Art Illustration Pattern */}
              <svg className="w-full h-full object-cover opacity-85" viewBox="0 0 800 500" fill="none">
                <defs>
                  <radialGradient id="hero-anamorphic-core" cx="48%" cy="46%" r="50%">
                    <stop offset="0%" stopColor="#D6A84F" stopOpacity="0.55" />
                    <stop offset="30%" stopColor="#2563eb" stopOpacity="0.22" />
                    <stop offset="100%" stopColor="#050608" stopOpacity="0" />
                  </radialGradient>
                  <linearGradient id="hero-beam" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#D6A84F" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="#F3EEE5" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#080808" stopOpacity="0" />
                  </linearGradient>
                </defs>

                {/* Perspective Horizon and Alignment Lines */}
                <line x1="0" y1="250" x2="800" y2="250" stroke="#D6A84F" strokeWidth="1.2" strokeOpacity="0.4" />
                <line x1="60" y1="250" x2="740" y2="250" stroke="#F3EEE5" strokeWidth="2" strokeOpacity="0.6" />
                
                {/* Center Cinematic Orb */}
                <circle cx="390" cy="250" r="160" fill="url(#hero-anamorphic-core)" />
                <circle cx="390" cy="250" r="50" stroke="#D6A84F" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.7" />
                
                {/* Film Viewfinder Crosshair */}
                <line x1="390" y1="190" x2="390" y2="310" stroke="#D6A84F" strokeWidth="0.8" opacity="0.6" />
                <line x1="330" y1="250" x2="450" y2="250" stroke="#D6A84F" strokeWidth="0.8" opacity="0.6" />

                {/* Scope Corners */}
                <path d="M 40 40 L 40 70 M 40 40 L 70 40" stroke="#F3EEE5" strokeWidth="1.5" strokeOpacity="0.5" />
                <path d="M 760 40 L 760 70 M 760 40 L 730 40" stroke="#F3EEE5" strokeWidth="1.5" strokeOpacity="0.5" />
                <path d="M 40 460 L 40 430 M 40 460 L 70 460" stroke="#F3EEE5" strokeWidth="1.5" strokeOpacity="0.5" />
                <path d="M 760 460 L 760 430 M 760 460 L 730 460" stroke="#F3EEE5" strokeWidth="1.5" strokeOpacity="0.5" />
              </svg>
            </div>

            {/* Subtle Film Grain Overlay */}
            <div className="absolute inset-0 film-grain opacity-40 pointer-events-none" />

            {/* Letterbox Bars */}
            <div className="absolute top-0 inset-x-0 h-2.5 bg-black/80 pointer-events-none" />
            <div className="absolute bottom-0 inset-x-0 h-2.5 bg-black/80 pointer-events-none" />

            {/* In-Frame Editorial UI Overlay */}
            <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-between pointer-events-none">
              
              {/* Top Frame Meta */}
              <div className="flex items-center justify-between text-[10px] font-mono tracking-widest text-[#9D9991]">
                <span className="text-[#F3EEE5] uppercase flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D6A84F] animate-ping" />
                  SHOWREEL
                </span>
                <span className="text-[#D6A84F]">{siteConfig.showreel.duration}</span>
              </div>

              {/* Center Play Button Trigger */}
              <div className="self-center flex flex-col items-center gap-2">
                <div className="w-13 h-13 sm:w-15 sm:h-15 rounded-full bg-[#F3EEE5] text-[#080808] flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-[#D6A84F] shadow-2xl">
                  <Play className="w-5 h-5 fill-current ml-0.5" />
                </div>
                <span className="text-[10px] font-mono tracking-[0.2em] text-[#F3EEE5] uppercase transition-colors group-hover:text-[#D6A84F]">
                  WATCH REEL
                </span>
              </div>

              {/* Bottom Frame Meta */}
              <div className="flex items-end justify-between text-[9px] font-mono tracking-wider text-[#9D9991] border-t border-[rgba(243,238,229,0.1)] pt-2">
                <div className="truncate max-w-[200px]">
                  <span className="text-[#F3EEE5] block truncate font-medium">{siteConfig.showreel.title}</span>
                  <span className="text-[#9D9991] text-[8px] uppercase">Rhythm & Motion Choreography</span>
                </div>
                <span className="text-[#D6A84F] font-mono">24 FPS</span>
              </div>
            </div>
          </div>

          {/* Under-Media Annotation Caption */}
          <div className="mt-3 flex items-center justify-between text-[10px] font-mono text-[#9D9991] px-1">
            <span className="uppercase text-[#9D9991]/70">REPLACEABLE SHOWREEL ASSET</span>
            <span className="text-[#D6A84F]">[ CLICK TO EXPAND ]</span>
          </div>
        </div>

      </div>

      {/* Bottom Editorial Bar: Film Pacing Philosophy Ticker */}
      <div className="relative z-10 pt-4 border-t border-[rgba(243,238,229,0.08)] flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs font-mono text-[#9D9991]">
        <div className="flex items-center gap-3">
          <span className="text-[#D6A84F]">01 / PHILOSOPHY</span>
          <span className="text-[#F3EEE5] truncate">
            Rhythmic cuts, spatial typography and calculated emotional momentum.
          </span>
        </div>

        <div className="flex items-center gap-6 text-[11px] tracking-widest text-[#9D9991]">
          <span>DA-VINCI // AFTER EFFECTS // PREMIERE</span>
          <span className="hidden sm:inline text-[#D6A84F]">4K TIMELINE</span>
        </div>
      </div>
    </section>
  );
};
