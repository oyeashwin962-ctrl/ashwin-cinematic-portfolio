import React, { useState, useEffect, useRef } from 'react';
import { Play, ArrowDownRight, Film, Radio, Sparkles } from 'lucide-react';
import { creatorProfile, siteConfig } from '../data/portfolio';

interface HeroProps {
  onOpenShowreel: () => void;
  onExploreWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenShowreel, onExploreWork }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHoveringReel, setIsHoveringReel] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const mediaRef = useRef<HTMLDivElement>(null);

  // Detect prefers-reduced-motion and scroll position for subtle parallax
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    mediaQuery.addEventListener('change', handleMediaChange);

    const handleScroll = () => {
      if (!mediaQuery.matches) {
        setScrollY(window.scrollY);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Desktop pointer depth interaction
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !mediaRef.current) return;
    if (typeof window !== 'undefined' && !window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      return;
    }

    const rect = mediaRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 6; // subtle 3D tilt
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -6;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHoveringReel(false);
  };

  // Subtle parallax factor calculated safely
  const parallaxOffset = prefersReducedMotion ? 0 : Math.min(scrollY * 0.12, 60);

  return (
    <section
      id="hero"
      className="relative min-h-[96vh] lg:min-h-screen w-full flex flex-col justify-between pt-24 md:pt-32 pb-10 px-6 md:px-12 max-w-[1540px] mx-auto overflow-hidden select-none"
    >
      {/* 1. Atmospheric Ambient Lighting & Editorial Coordinates */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        {/* Anamorphic warm amber light and deep cool slate glow */}
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-[#D6A84F]/06 blur-[130px] opacity-70 pointer-events-none" />
        <div className="absolute bottom-1/5 left-1/10 w-[450px] h-[450px] rounded-full bg-[#1b2b3a]/25 blur-[110px] opacity-50 pointer-events-none" />
        
        {/* Editorial Registration Crosshairs & Telemetry */}
        <div className="absolute top-28 right-12 font-mono text-[9px] text-[#9D9991]/30 tracking-widest hidden lg:block">
          REF: EDITORIAL_TIMELINE_V2.8 // REEL_RATIO: 16:9 // COLOR_PROFILE: KODAK 2383
        </div>
      </div>

      {/* 2. Top Meta Row: Availability & Studio Edition */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-[rgba(243,238,229,0.08)] pb-4 text-xs font-mono text-[#9D9991]">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D6A84F] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D6A84F]" />
          </span>
          <span className="text-[#F3EEE5] tracking-wider uppercase font-medium">
            {creatorProfile.availability}
          </span>
        </div>

        <div className="flex items-center gap-4 text-[11px] tracking-widest uppercase">
          <span className="hidden sm:inline text-[#9D9991]">STUDIO ARCHIVE</span>
          <span className="hidden sm:inline text-[#9D9991]/40">/</span>
          <span className="text-[#D6A84F] flex items-center gap-1.5 font-medium">
            <Radio className="w-3 h-3 animate-pulse" />
            LIVE EDITORIAL
          </span>
        </div>
      </div>

      {/* 3. Main Composition: Layered Editorial Typography & Cinematic Media */}
      <div className="relative z-10 my-auto py-6 lg:py-8">
        
        {/* Studio Prefix Tagline */}
        <div className="flex items-center gap-3 mb-2 font-mono text-xs uppercase tracking-[0.25em] text-[#D6A84F]">
          <Film className="w-3.5 h-3.5" />
          <span>{creatorProfile.brandDescriptor}</span>
          <span className="text-[#9D9991]/50">//</span>
          <span className="text-[#F3EEE5]">PORTFOLIO EDITION</span>
        </div>

        {/* Oversized ASHWIN Typography Stack with Media Interplay */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-end">
          
          {/* Left / Center: Dominant Name & Roles */}
          <div className="lg:col-span-8 flex flex-col justify-end z-10">
            {/* Monumental Headline */}
            <div className="relative overflow-visible">
              <h1
                className="font-sans font-black tracking-[-0.05em] text-[#F3EEE5] leading-[0.82] uppercase select-none transition-transform duration-700 ease-out"
                style={{ fontSize: 'clamp(68px, 14.5vw, 218px)' }}
              >
                ASHWIN
              </h1>

              {/* Ghost Outline Layer for Dimensional Depth */}
              <div
                className="absolute -top-1 left-1.5 select-none pointer-events-none opacity-[0.035] font-sans font-black tracking-[-0.05em] text-white leading-[0.82] uppercase hidden md:block"
                style={{ fontSize: 'clamp(68px, 14.5vw, 218px)' }}
                aria-hidden="true"
              >
                ASHWIN
              </div>
            </div>

            {/* Creative Role Line: Clearly Communicating Ashwin's Multi-Disciplinary Focus */}
            <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs md:text-sm font-mono tracking-widest text-[#9D9991]">
              {creatorProfile.roles.map((role, idx) => (
                <React.Fragment key={role}>
                  <span className="text-[#F3EEE5] hover:text-[#D6A84F] transition-colors font-medium">
                    {role}
                  </span>
                  {idx < creatorProfile.roles.length - 1 && (
                    <span className="text-[#D6A84F] opacity-60">/</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Positioning Statement & Explore Work Action */}
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

          {/* Right / Overlapping: Replaceable Cinematic Showreel Media Container */}
          <div
            ref={mediaRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHoveringReel(true)}
            onMouseLeave={handleMouseLeave}
            className="lg:col-span-4 relative z-20 lg:-ml-16 xl:-ml-24 mt-4 lg:mt-0"
            style={{
              transform: prefersReducedMotion
                ? undefined
                : `translateY(${-parallaxOffset * 0.4}px) perspective(1000px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
              transition: isHoveringReel ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
            }}
          >
            {/* Cinematic Showreel Media Viewport Container */}
            <div
              onClick={onOpenShowreel}
              data-cursor="play"
              className="group relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-sm overflow-hidden bg-[#0c0c0c] border border-[rgba(243,238,229,0.18)] shadow-[0_24px_60px_rgba(0,0,0,0.85)] cursor-pointer transition-all duration-500 hover:border-[#D6A84F]/80 hover:shadow-[0_24px_70px_rgba(214,168,79,0.18)] will-change-transform"
            >
              {/* Media Layer: Supports real video or image asset if supplied in siteConfig.showreel, or editorial film frame */}
              {siteConfig.showreel.videoUrl ? (
                <div className="absolute inset-0 bg-black">
                  <video
                    src={siteConfig.showreel.videoUrl}
                    poster={siteConfig.showreel.posterImage}
                    muted
                    loop
                    autoPlay
                    playsInline
                    className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              ) : (
                /* Editorial Cinematic Film Texture & Frame Geometry (Replaceable Showreel Slot) */
                <div className="absolute inset-0 bg-gradient-to-tr from-[#050608] via-[#0b141e] to-[#121c28] transition-transform duration-700 group-hover:scale-105">
                  <svg className="w-full h-full object-cover opacity-85" viewBox="0 0 800 500" fill="none">
                    <defs>
                      <radialGradient id="hero-anamorphic-core" cx="48%" cy="46%" r="50%">
                        <stop offset="0%" stopColor="#D6A84F" stopOpacity="0.55" />
                        <stop offset="35%" stopColor="#2563eb" stopOpacity="0.22" />
                        <stop offset="100%" stopColor="#050608" stopOpacity="0" />
                      </radialGradient>
                    </defs>

                    {/* Perspective Horizon and Horizon Hairlines */}
                    <line x1="0" y1="250" x2="800" y2="250" stroke="#D6A84F" strokeWidth="1.2" strokeOpacity="0.4" />
                    <line x1="60" y1="250" x2="740" y2="250" stroke="#F3EEE5" strokeWidth="2" strokeOpacity="0.6" />
                    
                    {/* Center Volumetric Core */}
                    <circle cx="390" cy="250" r="160" fill="url(#hero-anamorphic-core)" />
                    <circle cx="390" cy="250" r="52" stroke="#D6A84F" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.7" />
                    
                    {/* Viewfinder Crosshair */}
                    <line x1="390" y1="185" x2="390" y2="315" stroke="#D6A84F" strokeWidth="0.8" opacity="0.6" />
                    <line x1="325" y1="250" x2="455" y2="250" stroke="#D6A84F" strokeWidth="0.8" opacity="0.6" />

                    {/* Viewfinder Scope Corners */}
                    <path d="M 35 35 L 35 65 M 35 35 L 65 35" stroke="#F3EEE5" strokeWidth="1.5" strokeOpacity="0.6" />
                    <path d="M 765 35 L 765 65 M 765 35 L 735 35" stroke="#F3EEE5" strokeWidth="1.5" strokeOpacity="0.6" />
                    <path d="M 35 465 L 35 435 M 35 465 L 65 465" stroke="#F3EEE5" strokeWidth="1.5" strokeOpacity="0.6" />
                    <path d="M 765 465 L 765 435 M 765 465 L 735 465" stroke="#F3EEE5" strokeWidth="1.5" strokeOpacity="0.6" />
                  </svg>
                </div>
              )}

              {/* Subtle Film Grain Overlay */}
              <div className="absolute inset-0 film-grain opacity-40 pointer-events-none" />

              {/* Cinema Anamorphic Letterbox Bars */}
              <div className="absolute top-0 inset-x-0 h-2 bg-black/85 pointer-events-none" />
              <div className="absolute bottom-0 inset-x-0 h-2 bg-black/85 pointer-events-none" />

              {/* In-Frame Editorial UI Overlay */}
              <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-between pointer-events-none">
                
                {/* Top Viewfinder Metadata */}
                <div className="flex items-center justify-between text-[10px] font-mono tracking-widest text-[#9D9991]">
                  <span className="text-[#F3EEE5] uppercase flex items-center gap-1.5 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D6A84F] animate-ping" />
                    SHOWREEL
                  </span>
                  <span className="text-[#D6A84F] font-mono">{siteConfig.showreel.duration}</span>
                </div>

                {/* Centered Play Button & Label */}
                <div className="self-center flex flex-col items-center gap-2">
                  <div className="w-13 h-13 sm:w-15 sm:h-15 rounded-full bg-[#F3EEE5] text-[#080808] flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-[#D6A84F] shadow-2xl">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                  <span className="text-[10px] font-mono tracking-[0.2em] text-[#F3EEE5] uppercase transition-colors group-hover:text-[#D6A84F] font-medium">
                    PLAY REEL
                  </span>
                </div>

                {/* Bottom Frame Film Telemetry */}
                <div className="flex items-end justify-between text-[9px] font-mono tracking-wider text-[#9D9991] border-t border-[rgba(243,238,229,0.1)] pt-2">
                  <div className="truncate max-w-[220px]">
                    <span className="text-[#F3EEE5] block truncate font-medium">{siteConfig.showreel.title}</span>
                    <span className="text-[#9D9991] text-[8px] uppercase">Rhythm &amp; Motion Choreography</span>
                  </div>
                  <span className="text-[#D6A84F] font-mono">24 FPS // 4K</span>
                </div>
              </div>
            </div>

            {/* Under-Media Annotation Caption */}
            <div className="mt-3 flex items-center justify-between text-[10px] font-mono text-[#9D9991] px-1">
              <span className="uppercase text-[#9D9991]/75 flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-[#D6A84F]" />
                REPLACEABLE SHOWREEL ASSET
              </span>
              <span className="text-[#D6A84F] font-medium">[ CLICK TO EXPAND ]</span>
            </div>
          </div>

        </div>

      </div>

      {/* 4. Bottom Editorial Philosophy Ticker */}
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
