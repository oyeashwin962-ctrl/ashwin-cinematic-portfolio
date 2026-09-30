import React, { useState, useEffect } from 'react';

export const MotionShowcase: React.FC = () => {
  const [playhead, setPlayhead] = useState(38); // 0 to 100
  const [selectedEasing, setSelectedEasing] = useState<'exponential' | 'spring' | 'cubic'>('exponential');
  const [isAutoCycling, setIsAutoCycling] = useState(true);

  // Auto animation cycle for ambient kinetic movement
  useEffect(() => {
    if (!isAutoCycling) return;
    const interval = setInterval(() => {
      setPlayhead((prev) => (prev >= 100 ? 0 : prev + 0.45));
    }, 40);

    return () => clearInterval(interval);
  }, [isAutoCycling]);

  // Calculate kinetic transformation factors
  const phase = (playhead / 100) * Math.PI * 2;
  const sinFactor = Math.sin(phase);
  const cosFactor = Math.cos(phase);

  return (
    <section
      id="motion"
      className="py-24 md:py-36 px-6 md:px-12 max-w-[1440px] mx-auto border-t border-[rgba(243,238,229,0.08)]"
    >
      {/* Section Subtitle */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#d6a84f] block mb-2">
            03 / MOTION &amp; GRAPHICS LAB
          </span>
          <h2
            className="font-sans font-black tracking-tight text-[#F3EEE5] uppercase leading-[0.9]"
            style={{ fontSize: 'clamp(44px, 7vw, 96px)' }}
          >
            MOTION /
            <br />
            CHOREOGRAPHY
          </h2>
        </div>

        <p className="text-sm md:text-base font-sans text-[#9D9991] max-w-md">
          Motion design is the tension between stillness and velocity. Interactive real-time timeline simulation showing curve deceleration and typographic displacement.
        </p>
      </div>

      {/* Kinetic Interactive Canvas Container with Explore Cursor */}
      <div
        data-cursor="explore"
        className="relative w-full rounded-sm bg-[#090909] border border-[rgba(243,238,229,0.12)] p-6 md:p-12 overflow-hidden shadow-2xl group transition-colors duration-500 hover:border-[#d6a84f]/40"
      >
        {/* Subtle Motion Grid Lines & Registration Marks */}
        <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 pointer-events-none opacity-20">
          {Array.from({ length: 24 }).map((_, i) => (
            <div key={i} className="border-r border-b border-[rgba(243,238,229,0.12)]" />
          ))}
        </div>

        {/* Large kinetic typography stage */}
        <div className="relative min-h-[320px] md:min-h-[460px] flex flex-col justify-center items-center overflow-hidden">
          {/* Main Giant Kinetic Word: MOTION */}
          <div
            className="font-sans font-black text-[#F3EEE5] uppercase tracking-tighter select-none leading-none text-center transition-transform duration-75"
            style={{
              fontSize: 'clamp(64px, 15vw, 190px)',
              letterSpacing: `${(sinFactor * 0.12 + 0.08).toFixed(2)}em`,
              transform: `scale(${1 + sinFactor * 0.035}) skewX(${(-sinFactor * 3.5).toFixed(1)}deg)`,
            }}
          >
            MOTION
          </div>

          {/* Secondary Kinetic Echo Layer with Amber Outline */}
          <div
            aria-hidden="true"
            className="font-sans font-black uppercase tracking-tighter select-none leading-none text-center absolute pointer-events-none opacity-35 transition-transform duration-100"
            style={{
              fontSize: 'clamp(64px, 15vw, 190px)',
              WebkitTextStroke: '1px #d6a84f',
              color: 'transparent',
              letterSpacing: `${(sinFactor * 0.12 + 0.08).toFixed(2)}em`,
              transform: `translateY(${(-cosFactor * 24).toFixed(1)}px) translateX(${(sinFactor * 28).toFixed(1)}px)`,
            }}
          >
            MOTION
          </div>

          {/* Abstract Motion Graphics Geometry (Thin Lines, Circles, Rectangles) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 400">
            {/* Dynamic Horizon Line */}
            <line
              x1="60"
              y1={200 + sinFactor * 50}
              x2="940"
              y2={200 - sinFactor * 50}
              stroke="#d6a84f"
              strokeWidth="1.2"
              strokeDasharray="6 6"
              opacity="0.6"
            />
            {/* Focal Target Crosshairs */}
            <circle
              cx={500 + sinFactor * 260}
              cy={200 + cosFactor * 50}
              r="6"
              fill="#F3EEE5"
            />
            <circle
              cx={500 + sinFactor * 260}
              cy={200 + cosFactor * 50}
              r="22"
              stroke="#d6a84f"
              strokeWidth="1"
              strokeDasharray="3 3"
              fill="none"
              opacity="0.7"
            />
            {/* Left Balance Circle */}
            <circle
              cx={500 - sinFactor * 260}
              cy={200 - cosFactor * 50}
              r="14"
              stroke="#d6a84f"
              strokeWidth="1.2"
              fill="none"
              opacity="0.8"
            />
            {/* Abstract Floating Rectangles */}
            <rect
              x={220 + sinFactor * 40}
              y={80 + cosFactor * 20}
              width="45"
              height="45"
              fill="none"
              stroke="#F3EEE5"
              strokeWidth="0.8"
              opacity="0.25"
            />
            <rect
              x={740 - sinFactor * 40}
              y={270 - cosFactor * 20}
              width="60"
              height="30"
              fill="none"
              stroke="#d6a84f"
              strokeWidth="0.8"
              opacity="0.3"
            />
          </svg>

          {/* Coordinate Readout telemetry */}
          <div className="absolute top-4 left-4 font-mono text-[10px] text-[#9D9991] tracking-widest">
            <span className="text-[#d6a84f]">VECTOR_X:</span> {(sinFactor * 100).toFixed(1)}px
            <span className="mx-2">|</span>
            <span className="text-[#d6a84f]">VELOCITY:</span> {Math.abs(cosFactor * 60).toFixed(0)} FPS
          </div>

          <div className="absolute top-4 right-4 font-mono text-[10px] text-[#9D9991] tracking-widest hidden sm:block">
            BEZIER: CUBIC-BEZIER(0.16, 1, 0.3, 1)
          </div>
        </div>

        {/* Interactive Scrubbing Timeline Controller */}
        <div className="mt-8 pt-6 border-t border-[rgba(243,238,229,0.12)] flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#d6a84f]" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#F3EEE5]">
                TIMELINE SCRUBBER
              </span>
              <button
                onClick={() => setIsAutoCycling(!isAutoCycling)}
                className={`text-[11px] font-mono px-2.5 py-1 rounded transition-colors ${
                  isAutoCycling
                    ? 'bg-[#d6a84f] text-[#080808] font-bold'
                    : 'bg-[#181818] text-[#9D9991] hover:text-[#F3EEE5]'
                }`}
              >
                {isAutoCycling ? 'AUTOPLAY ACTIVE' : 'PAUSED'}
              </button>
            </div>

            {/* Easing curve selectors */}
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono text-[#9D9991] mr-1 hidden sm:inline">CURVE:</span>
              {(['exponential', 'spring', 'cubic'] as const).map((mode) => (
                <button
                  key={mode}
                  onClick={() => setSelectedEasing(mode)}
                  className={`text-[10px] font-mono uppercase px-2.5 py-1 rounded transition-colors ${
                    selectedEasing === mode
                      ? 'bg-[#F3EEE5] text-[#080808] font-bold'
                      : 'bg-[#141414] text-[#9D9991] hover:text-[#F3EEE5]'
                  }`}
                >
                  {mode}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Scrub Track */}
          <div className="relative w-full">
            <input
              type="range"
              min="0"
              max="100"
              step="0.1"
              value={playhead}
              onChange={(e) => {
                setIsAutoCycling(false);
                setPlayhead(parseFloat(e.target.value));
              }}
              className="w-full h-2 bg-[#1a1a1a] rounded appearance-none cursor-pointer accent-[#d6a84f]"
              aria-label="Timeline position"
            />

            {/* Frame ticks markers */}
            <div className="flex justify-between text-[10px] font-mono text-[#9D9991] mt-2">
              <span>00:00:00 [IN]</span>
              <span className="text-[#d6a84f]">FRAME {Math.floor((playhead / 100) * 120)} / 120</span>
              <span>00:05:00 [OUT]</span>
            </div>
          </div>
        </div>
      </div>

      {/* Motion Disciplines 3-Column Note */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-[rgba(243,238,229,0.06)] text-xs font-mono text-[#9D9991]">
        <div>
          <span className="text-[#F3EEE5] block mb-1 text-sm font-sans font-semibold">
            01 / Spatial Pacing
          </span>
          <p>Interpolation curves engineered with organic deceleration, avoiding linear robotic motion.</p>
        </div>
        <div>
          <span className="text-[#F3EEE5] block mb-1 text-sm font-sans font-semibold">
            02 / Typographic Tension
          </span>
          <p>Letters that react to physics, camera focal passes, and acoustic peaks with micro-rebound.</p>
        </div>
        <div>
          <span className="text-[#F3EEE5] block mb-1 text-sm font-sans font-semibold">
            03 / Audio-Driven Cuts
          </span>
          <p>Sub-frame alignment between visual impulses and multi-stem audio tracks for tactile punch.</p>
        </div>
      </div>
    </section>
  );
};
