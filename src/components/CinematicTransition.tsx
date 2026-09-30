import React from 'react';

interface CinematicTransitionProps {
  isTransitioning: boolean;
  label?: string;
}

export const CinematicTransition: React.FC<CinematicTransitionProps> = ({
  isTransitioning,
  label = 'PROJECT REVEAL',
}) => {
  if (!isTransitioning) return null;

  return (
    <div
      className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center bg-[#080808]/90 backdrop-blur-md animate-in fade-in duration-300"
    >
      {/* Cinematic Shutter Lines */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#d6a84f] to-transparent animate-pulse" />

      <div className="absolute flex flex-col items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-[#d6a84f] animate-ping" />
        <span className="text-[10px] font-mono tracking-widest uppercase text-[#F3EEE5]">
          {label}
        </span>
      </div>
    </div>
  );
};
