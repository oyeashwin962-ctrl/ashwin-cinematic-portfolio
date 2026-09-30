import React from 'react';
import { creatorProfile } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-36 px-6 md:px-12 max-w-[1440px] mx-auto border-t border-[rgba(243,238,229,0.08)]">
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-6 pb-12 border-b border-[rgba(243,238,229,0.12)]">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#d6a84f] block mb-2">
            05 / CREATIVE PHILOSOPHY
          </span>
          <h2
            className="font-sans font-black tracking-tight text-[#F3EEE5] uppercase leading-[0.9]"
            style={{ fontSize: 'clamp(44px, 8vw, 100px)' }}
          >
            ABOUT
            <br />
            ASHWIN
          </h2>
        </div>

        <div className="font-mono text-xs text-[#9D9991] tracking-widest uppercase">
          <span>DISCIPLINE ARCHITECTURE</span>
          <span className="mx-2">·</span>
          <span>EST. PRACTICE</span>
        </div>
      </div>

      {/* Heroic Editorial Statement */}
      <div className="py-16 md:py-24 border-b border-[rgba(243,238,229,0.1)]">
        <blockquote className="max-w-4xl font-serif italic text-2xl md:text-5xl text-[#F3EEE5] leading-tight font-normal">
          &ldquo;{creatorProfile.bioQuote}&rdquo;
        </blockquote>
      </div>

      {/* Asymmetric Content Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-16">
        {/* Left Column: Authentic Craft Narrative */}
        <div className="lg:col-span-7 space-y-6 text-base md:text-lg text-[#9D9991] font-sans leading-relaxed">
          {creatorProfile.bioParagraphs.map((para, idx) => (
            <p key={idx} className={idx === 0 ? 'text-[#F3EEE5] font-medium text-lg md:text-xl' : ''}>
              {para}
            </p>
          ))}
        </div>

        {/* Right Column: Disciplined Pillars of Practice */}
        <div className="lg:col-span-5 space-y-8">
          <span className="text-xs font-mono uppercase tracking-widest text-[#d6a84f] block">
            CORE PRINCIPLES
          </span>

          <div className="space-y-6">
            {creatorProfile.corePillars.map((pillar, idx) => (
              <div key={idx} className="border-l-2 border-[#d6a84f] pl-4 py-1">
                <h4 className="text-sm font-sans font-bold tracking-tight text-[#F3EEE5] uppercase">
                  {pillar.title}
                </h4>
                <p className="mt-1 text-xs md:text-sm text-[#9D9991] leading-normal font-sans">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

          {/* Workflow Hardware & Tooling Environment */}
          <div className="pt-6 border-t border-[rgba(243,238,229,0.08)]">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#9D9991] block mb-3">
              PRODUCTION SUITE
            </span>
            <div className="flex flex-wrap gap-2 text-xs font-mono text-[#F3EEE5]">
              {['Premiere Pro', 'DaVinci Resolve Studio', 'After Effects', 'Cinema 4D', 'Photoshop', 'Illustrator', 'Midjourney', 'Topaz Video AI'].map((tool) => (
                <span key={tool} className="px-2.5 py-1 bg-[#121212] border border-[rgba(243,238,229,0.1)] rounded-sm">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
