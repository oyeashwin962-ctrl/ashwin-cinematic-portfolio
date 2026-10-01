import React, { useState } from 'react';

interface ProjectVisualProps {
  theme?: 'nocturne' | 'kinetic' | 'documentary' | 'editorial' | 'thumbnail' | 'ai' | string;
  title?: string;
  category?: string;
  year?: string;
  aspectRatio?: '16:9' | '4:3' | '21:9' | '9:16' | string;
  thumbnail?: string;
  showOverlayUI?: boolean;
  className?: string;
  isInteractive?: boolean;
}

export const ProjectVisual: React.FC<ProjectVisualProps> = ({
  theme = 'nocturne',
  title,
  category,
  year,
  aspectRatio = '16:9',
  thumbnail,
  showOverlayUI = true,
  className = '',
  isInteractive = true,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imgFailed, setImgFailed] = useState(false);

  const getAspectClass = () => {
    switch (aspectRatio) {
      case '21:9':
        return 'aspect-[21/9]';
      case '4:3':
        return 'aspect-[4/3]';
      case '9:16':
        return 'aspect-[9/16]';
      case '16:9':
      default:
        return 'aspect-[16/9]';
    }
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative w-full overflow-hidden bg-[#0d0d0d] rounded-sm border border-[rgba(243,238,229,0.1)] group transition-all duration-700 ${getAspectClass()} ${className}`}
    >
      {/* Background Visual Art Composition: Procedural Vector Fallback or Image */}
      <div className={`absolute inset-0 transition-transform duration-700 ease-out ${isHovered && isInteractive ? 'scale-[1.03]' : 'scale-100'}`}>
        
        {/* Real Thumbnail Image with Lazy Loading & Graceful Fallback */}
        {thumbnail && !imgFailed && (
          <img
            src={thumbnail}
            alt={title || 'Project Visual'}
            loading="lazy"
            onError={() => setImgFailed(true)}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
          />
        )}

        {/* Procedural Vector Media Fallback (always ready, displays if image is absent or fails) */}
        {(!thumbnail || imgFailed) && (
          <>
            {theme === 'nocturne' && (
              <div className="absolute inset-0 bg-gradient-to-tr from-[#050608] via-[#091016] to-[#0c1822]">
                <svg className="w-full h-full object-cover opacity-85" viewBox="0 0 1200 675" preserveAspectRatio="none" fill="none">
                  <defs>
                    <linearGradient id="grad-nocturne-beam" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#d6a84f" stopOpacity="0.4" />
                      <stop offset="40%" stopColor="#2563eb" stopOpacity="0.15" />
                      <stop offset="100%" stopColor="#050608" stopOpacity="0" />
                    </linearGradient>
                    <radialGradient id="grad-flare" cx="42%" cy="46%" r="50%">
                      <stop offset="0%" stopColor="#F3EEE5" stopOpacity="0.7" />
                      <stop offset="25%" stopColor="#d6a84f" stopOpacity="0.35" />
                      <stop offset="60%" stopColor="#1e3a5f" stopOpacity="0.1" />
                      <stop offset="100%" stopColor="#000" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  <polygon points="120,675 380,240 520,240 680,675" fill="#040608" />
                  <polygon points="780,675 940,310 1020,310 1140,675" fill="#06090d" />
                  <line x1="0" y1="320" x2="1200" y2="320" stroke="#d6a84f" strokeWidth="1.5" strokeOpacity="0.4" />
                  <line x1="180" y1="320" x2="980" y2="320" stroke="#F3EEE5" strokeWidth="2.5" strokeOpacity="0.6" filter="blur(1px)" />
                  <line x1="300" y1="320" x2="750" y2="320" stroke="#ffffff" strokeWidth="4" strokeOpacity="0.8" />
                  <polygon points="460,320 0,675 320,675" fill="url(#grad-nocturne-beam)" />
                  <polygon points="460,320 740,675 1200,675" fill="url(#grad-nocturne-beam)" opacity="0.6" />
                  <circle cx="460" cy="320" r="160" fill="url(#grad-flare)" />
                  <circle cx="460" cy="320" r="6" fill="#F3EEE5" />
                  <circle cx="460" cy="320" r="28" stroke="#d6a84f" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.7" />
                </svg>
              </div>
            )}

            {theme === 'kinetic' && (
              <div className="absolute inset-0 bg-[#09090b] overflow-hidden">
                <svg className="w-full h-full" viewBox="0 0 1200 675" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="gold-flow" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#1a1a1a" />
                      <stop offset="45%" stopColor="#d6a84f" stopOpacity="0.85" />
                      <stop offset="70%" stopColor="#F3EEE5" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#1a1a1a" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M -100,500 C 300,600 400,100 800,250 C 1050,350 1150,150 1300,200 L 1300,380 C 1050,280 900,550 500,420 C 250,340 100,620 -100,620 Z"
                    fill="url(#gold-flow)"
                    opacity="0.85"
                  />
                  <path
                    d="M -100,250 C 200,100 450,450 750,200 C 950,50 1100,300 1300,150"
                    fill="none"
                    stroke="#d6a84f"
                    strokeWidth="1.5"
                    strokeDasharray="8 6"
                    opacity="0.6"
                  />
                  <text x="50" y="240" fill="#222" fontSize="160" fontWeight="900" fontFamily="sans-serif" letterSpacing="0.05em">
                    KINETIC
                  </text>
                  <text x="520" y="420" fill="none" stroke="#d6a84f" strokeWidth="1" fontSize="130" fontWeight="800" opacity="0.4">
                    DIMENSION
                  </text>
                </svg>
              </div>
            )}

            {theme === 'documentary' && (
              <div className="absolute inset-0 bg-gradient-to-b from-[#0c0d0f] via-[#101317] to-[#070809]">
                <svg className="w-full h-full" viewBox="0 0 1200 675" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="docu-window" x1="0%" y1="0%" x2="100%" y2="80%">
                      <stop offset="0%" stopColor="#475569" stopOpacity="0.4" />
                      <stop offset="50%" stopColor="#1e293b" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#080808" stopOpacity="0.9" />
                    </linearGradient>
                  </defs>
                  <rect x="180" y="80" width="340" height="420" fill="url(#docu-window)" />
                  <rect x="560" y="80" width="340" height="420" fill="url(#docu-window)" />
                  <line x1="80" y1="500" x2="1120" y2="500" stroke="#334155" strokeWidth="1.5" opacity="0.4" />
                </svg>
              </div>
            )}

            {theme === 'editorial' && (
              <div className="absolute inset-0 bg-[#0e0e0e] overflow-hidden">
                <svg className="w-full h-full" viewBox="0 0 1200 675" preserveAspectRatio="none">
                  <line x1="200" y1="0" x2="200" y2="675" stroke="#F3EEE5" strokeWidth="0.5" strokeOpacity="0.15" />
                  <line x1="600" y1="0" x2="600" y2="675" stroke="#F3EEE5" strokeWidth="0.5" strokeOpacity="0.15" />
                  <line x1="1000" y1="0" x2="1000" y2="675" stroke="#F3EEE5" strokeWidth="0.5" strokeOpacity="0.15" />
                  <text x="230" y="320" fill="#F3EEE5" fontSize="140" fontWeight="900" letterSpacing="-0.03em">
                    APEX
                  </text>
                  <text x="230" y="440" fill="#D6A84F" fontSize="32" fontFamily="monospace" letterSpacing="0.3em">
                    SYSTEM // GRID
                  </text>
                </svg>
              </div>
            )}

            {theme === 'thumbnail' && (
              <div className="absolute inset-0 bg-[#0a0705] overflow-hidden">
                <svg className="w-full h-full" viewBox="0 0 1200 675" preserveAspectRatio="none">
                  <radialGradient id="thumb-glow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#d6a84f" stopOpacity="0.6" />
                    <stop offset="60%" stopColor="#ea580c" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#0a0705" stopOpacity="0" />
                  </radialGradient>
                  <circle cx="600" cy="337" r="300" fill="url(#thumb-glow)" />
                  <circle cx="600" cy="337" r="140" fill="#0a0705" stroke="#d6a84f" strokeWidth="2" />
                  <text x="600" y="350" textAnchor="middle" fill="#F3EEE5" fontSize="48" fontWeight="800">
                    RETENTION
                  </text>
                </svg>
              </div>
            )}

            {theme === 'ai' && (
              <div className="absolute inset-0 bg-[#090c10] overflow-hidden">
                <svg className="w-full h-full" viewBox="0 0 1200 675" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="ai-spectral" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.4" />
                      <stop offset="50%" stopColor="#d6a84f" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#a855f7" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>
                  <circle cx="600" cy="337" r="180" fill="none" stroke="url(#ai-spectral)" strokeWidth="1.5" />
                  <circle cx="600" cy="337" r="260" fill="none" stroke="#d6a84f" strokeWidth="0.8" strokeDasharray="4 8" opacity="0.5" />
                  <circle cx="600" cy="337" r="90" fill="none" stroke="#F3EEE5" strokeWidth="1" opacity="0.7" />
                  <text x="615" y="325" fill="#d6a84f" fontSize="12" fontFamily="monospace">LATENT_SEED: 0x88F</text>
                </svg>
              </div>
            )}
          </>
        )}
      </div>

      {/* Film Grain Texture layer */}
      <div className="absolute inset-0 film-grain pointer-events-none opacity-40" />

      {/* Subtle Vignette & Contrast Scrim */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/90 via-transparent to-[rgba(8,8,8,0.25)] pointer-events-none" />

      {/* Minimal HUD & Production Metadata Overlay */}
      {showOverlayUI && (
        <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-between pointer-events-none z-10">
          <div className="flex items-center justify-between text-[11px] font-mono tracking-wider text-[#9D9991]">
            <div className="flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#d6a84f] animate-pulse" />
              <span className="text-[#F3EEE5] uppercase">{category || 'CINEMATIC WORK'}</span>
            </div>
            <div className="flex items-center gap-3">
              <span>{year || '2026'}</span>
              <span>·</span>
              <span className="hidden sm:inline">REC 709</span>
            </div>
          </div>

          <div className="flex items-end justify-between">
            {title && (
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#9D9991] font-mono block mb-1">
                  CASE STUDY
                </span>
                <h3 className="text-xl md:text-3xl font-sans font-bold tracking-tight text-[#F3EEE5]">
                  {title}
                </h3>
              </div>
            )}

            <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded bg-[rgba(8,8,8,0.7)] backdrop-blur-md border border-[rgba(243,238,229,0.12)] text-[10px] font-mono text-[#F3EEE5]">
              <span className="text-[#d6a84f]">FPS</span> 24.00
              <span className="mx-1 text-[#9D9991]">|</span>
              <span className="text-[#d6a84f]">4K</span> DCI
            </div>
          </div>
        </div>
      )}

      {/* Hover State Play/Inspect Indicator */}
      {isInteractive && (
        <div
          className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="w-16 h-16 rounded-full bg-[#F3EEE5] text-[#080808] flex items-center justify-center font-sans font-semibold text-xs tracking-wider shadow-2xl transition-transform duration-300 scale-95 group-hover:scale-100">
            VIEW
          </div>
        </div>
      )}
    </div>
  );
};
