import React from 'react';
import { ArrowUp } from 'lucide-react';
import { creatorProfile } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[rgba(243,238,229,0.1)] py-12 px-6 md:px-12 max-w-[1440px] mx-auto text-xs font-mono text-[#9D9991]">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand identity */}
        <div className="flex items-center gap-3">
          <span className="font-sans font-bold text-sm text-[#F3EEE5] uppercase tracking-wider">
            {creatorProfile.name}
          </span>
          <span className="text-[#d6a84f]">/</span>
          <span>{creatorProfile.brandDescriptor}</span>
          <span className="hidden sm:inline">· © 2026</span>
        </div>

        {/* Disciplines Recap */}
        <div className="hidden lg:flex items-center gap-4 text-[11px] uppercase tracking-widest text-[#9D9991]">
          <span>VIDEO EDITING</span>
          <span>·</span>
          <span>MOTION DESIGN</span>
          <span>·</span>
          <span>GRAPHIC DESIGN</span>
          <span>·</span>
          <span>AI CREATIVE</span>
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          data-cursor="arrow"
          className="flex items-center gap-2 hover:text-[#F3EEE5] transition-colors py-1 group"
        >
          <span>BACK TO TOP</span>
          <ArrowUp className="w-3.5 h-3.5 text-[#d6a84f] group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </footer>
  );
};
