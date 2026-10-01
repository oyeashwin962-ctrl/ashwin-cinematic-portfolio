import React, { useState, useEffect, useRef } from 'react';
import { ArrowDownRight, Film, Radio } from 'lucide-react';
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
  const [videoFailed, setVideoFailed] = useState(false);
  const mediaRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

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

  // Guarantee silent autoplay and manage performance with IntersectionObserver
  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    // Direct DOM property enforcement for cross-browser autoplay compliance
    videoEl.defaultMuted = true;
    videoEl.muted = true;
    videoEl.playsInline = true;

    const playPromise = videoEl.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Silently caught if deferred by browser autoplay restrictions
      });
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!videoRef.current) return;
          if (entry.isIntersecting) {
            videoRef.current.play().catch(() => {});
          } else {
            videoRef.current.pause();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(videoEl);
    return () => observer.disconnect();
  }, [siteConfig.showreel.videoUrl]);

  // Subtle desktop pointer depth interaction
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !mediaRef.current) return;
    if (typeof window !== 'undefined' && !window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      return;
    }

    const rect = mediaRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 4;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -4;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHoveringReel(false);
  };

  // Subtle parallax factor
  const parallaxOffset = prefersReducedMotion ? 0 : Math.min(scrollY * 0.1, 40);

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] lg:min-h-screen w-full flex flex-col justify-between pt-20 sm:pt-24 lg:pt-28 pb-8 px-6 md:px-12 max-w-[1540px] mx-auto select-none"
    >
      {/* 1. Atmospheric Ambient Lighting & Editorial Coordinates */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[#D6A84F]/05 blur-[120px] opacity-60 pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/10 w-[400px] h-[400px] rounded-full bg-[#1b2b3a]/20 blur-[100px] opacity-40 pointer-events-none" />
        
        {/* Subtle Editorial Coordinates */}
        <div className="absolute top-24 right-12 font-mono text-[9px] text-[#9D9991]/30 tracking-widest hidden lg:block">
          REF: EDITORIAL_TIMELINE_V2.8 // ASHWIN_STUDIO
        </div>
      </div>

      {/* 2. Top Meta Row: Availability & Studio Edition */}
      <div className="relative z-20 flex flex-wrap items-center justify-between gap-4 border-b border-[rgba(243,238,229,0.08)] pb-4 text-xs font-mono text-[#9D9991]">
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

      {/* 3. Main Composition: Typography + Supporting Cinematic Video Media Layer */}
      <div className="relative z-10 my-auto py-6 sm:py-8 lg:py-10">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-8 items-center w-full">
          
          {/* Typographic Core: Primary Headline & Secondary Roles (Order 1 on mobile, 7 cols on desktop) */}
          <div className="order-1 lg:col-span-7 z-20 flex flex-col justify-center w-full">
            {/* Studio Prefix Tag */}
            <div className="flex items-center gap-2.5 mb-2 sm:mb-3 font-mono text-xs uppercase tracking-[0.2em] text-[#D6A84F]">
              <Film className="w-3.5 h-3.5" />
              <span>{creatorProfile.brandDescriptor}</span>
              <span className="text-[#9D9991]/40 hidden sm:inline">//</span>
              <span className="text-[#F3EEE5] hidden sm:inline">PORTFOLIO EDITION</span>
            </div>

            {/* Primary Dominant Headline: ASHWIN */}
            <div className="relative overflow-visible">
              <h1
                className="font-sans font-black tracking-[-0.04em] text-[#F3EEE5] uppercase leading-[0.88] select-none text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] xl:text-[9.5rem] drop-shadow-[0_8px_32px_rgba(0,0,0,0.95)]"
              >
                ASHWIN
              </h1>
              {/* Dimensional Ghost Outline Layer */}
              <div
                className="absolute -top-1 left-1.5 select-none pointer-events-none opacity-[0.035] font-sans font-black tracking-[-0.04em] text-white uppercase leading-[0.88] text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] xl:text-[9.5rem] hidden md:block"
                aria-hidden="true"
              >
                ASHWIN
              </div>
            </div>

            {/* Secondary: Creative Roles */}
            <div className="mt-3 sm:mt-4 flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-xs md:text-sm font-mono tracking-widest text-[#9D9991]">
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

            {/* Tertiary (Desktop): Positioning Statement & CTA */}
            <div className="hidden lg:block mt-6 pt-5 border-t border-[rgba(243,238,229,0.12)] max-w-xl">
              <p className="text-base lg:text-lg font-sans text-[#9D9991] leading-relaxed">
                <span className="text-[#F3EEE5] font-medium">{creatorProfile.tagline}</span>
              </p>

              <button
                onClick={onExploreWork}
                data-cursor="arrow"
                className="group mt-5 inline-flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-[#F3EEE5] hover:text-[#D6A84F] transition-colors"
              >
                <span>EXPLORE SELECTED WORK</span>
                <ArrowDownRight className="w-4 h-4 text-[#D6A84F] transition-transform duration-300 group-hover:translate-y-1 group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Mobile Tertiary: Positioning Statement (Order 2 on mobile, hidden on lg) */}
          <div className="order-2 lg:hidden w-full pt-1">
            <p className="text-sm font-sans text-[#9D9991] leading-relaxed">
              <span className="text-[#F3EEE5] font-medium">{creatorProfile.tagline}</span>
            </p>
          </div>

          {/* Major Visual Layer: The Uploaded 8-Second MP4 (Order 3 on mobile, 5 cols on desktop with controlled overlap) */}
          <div
            ref={mediaRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHoveringReel(true)}
            onMouseLeave={handleMouseLeave}
            className="order-3 lg:col-span-5 relative z-10 w-full lg:-ml-12 xl:-ml-16"
            style={{
              transform: prefersReducedMotion
                ? undefined
                : `translateY(${-parallaxOffset * 0.25}px) perspective(1000px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
              transition: isHoveringReel ? 'transform 0.1s ease-out' : 'transform 0.4s ease-out',
            }}
          >
            {/* Pure Cinematic Video Layer: Borderless / Seamless Editorial Integration */}
            <div
              onClick={onOpenShowreel}
              data-cursor="play"
              className="relative aspect-[16/9] w-full rounded-sm overflow-hidden bg-[#070707] border border-[rgba(243,238,229,0.1)] shadow-[0_20px_60px_rgba(0,0,0,0.9)] cursor-pointer will-change-transform group"
            >
              {/* Autoplaying, Muted, Looping Uploaded MP4 */}
              {siteConfig.showreel.videoUrl && !videoFailed && (
                <video
                  ref={videoRef}
                  poster={siteConfig.showreel.posterImage}
                  muted
                  loop
                  autoPlay
                  playsInline
                  controls={false}
                  preload="auto"
                  onError={() => setVideoFailed(true)}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02] opacity-95"
                >
                  <source src={siteConfig.showreel.videoUrl} type="video/mp4" />
                </video>
              )}

              {/* Fallback Image */}
              {videoFailed && (
                <img
                  src={siteConfig.showreel.posterImage}
                  alt={siteConfig.showreel.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}

              {/* Controlled Soft Edge Blending for Typography Overlap */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/50 via-transparent to-transparent pointer-events-none hidden lg:block" />
              <div className="absolute inset-0 film-grain opacity-20 pointer-events-none" />
            </div>
          </div>

          {/* Mobile Supporting CTA (Order 4 on mobile, hidden on lg) */}
          <div className="order-4 lg:hidden w-full pt-1">
            <button
              onClick={onExploreWork}
              data-cursor="arrow"
              className="group inline-flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-[#F3EEE5] hover:text-[#D6A84F] transition-colors"
            >
              <span>EXPLORE SELECTED WORK</span>
              <ArrowDownRight className="w-4 h-4 text-[#D6A84F] transition-transform duration-300 group-hover:translate-y-1 group-hover:translate-x-1" />
            </button>
          </div>

        </div>
      </div>

      {/* 4. Bottom Editorial Philosophy Ticker */}
      <div className="relative z-20 pt-4 border-t border-[rgba(243,238,229,0.08)] flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs font-mono text-[#9D9991]">
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
