import React, { useEffect, useState, useRef } from 'react';

export type CursorMode = 'default' | 'view' | 'play' | 'arrow' | 'explore';

export const CustomCursor: React.FC = () => {
  const [cursorMode, setCursorMode] = useState<CursorMode>('default');
  const [isVisible, setIsVisible] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Check prefers-reduced-motion
    try {
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reducedMotion) {
        setIsEnabled(false);
        return;
      }

      // Check fine pointer (mouse/trackpad, not touch)
      const finePointer = window.matchMedia('(pointer: fine)').matches;
      if (!finePointer) {
        setIsEnabled(false);
        return;
      }

      setIsEnabled(true);
    } catch {
      setIsEnabled(false);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!cursorRef.current) return;

      cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;

      setIsVisible(true);

      const target = e.target;
      if (!target) return;

      const element =
        target instanceof Element
          ? target
          : (target as Node)?.parentElement instanceof Element
          ? (target as Node).parentElement
          : null;

      if (!element || typeof element.closest !== 'function') return;

      const cursorTarget = element.closest('[data-cursor]');
      if (cursorTarget) {
        const mode = cursorTarget.getAttribute('data-cursor') as CursorMode;
        if (mode) {
          setCursorMode(mode);
          return;
        }
      }

      const isClickable = element.closest('button, a, input, textarea, select, [role="button"]');
      if (isClickable) {
        setCursorMode('arrow');
      } else {
        setCursorMode('default');
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  if (!isEnabled || !isVisible) {
    return null;
  }

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-50 transition-[transform] duration-75 ease-out will-change-transform"
      style={{
        transform: 'translate3d(-100px, -100px, 0) translate(-50%, -50%)',
      }}
    >
      {cursorMode === 'default' && (
        <div className="relative flex items-center justify-center">
          <div className="w-2.5 h-2.5 rounded-full bg-[#F3EEE5] shadow-[0_0_10px_rgba(243,238,229,0.7)]" />
          <div className="absolute w-7 h-7 rounded-full border border-[rgba(214,168,79,0.35)] animate-ping opacity-25" />
        </div>
      )}

      {cursorMode === 'view' && (
        <div className="w-16 h-16 rounded-full bg-[#F3EEE5] text-[#080808] flex items-center justify-center text-[11px] font-bold font-mono tracking-widest uppercase shadow-2xl transition-all duration-200">
          VIEW
        </div>
      )}

      {cursorMode === 'play' && (
        <div className="w-16 h-16 rounded-full bg-[#d6a84f] text-[#080808] flex items-center justify-center text-[11px] font-bold font-mono tracking-widest uppercase shadow-2xl transition-all duration-200">
          PLAY
        </div>
      )}

      {cursorMode === 'explore' && (
        <div className="w-20 h-20 rounded-full bg-[rgba(214,168,79,0.15)] backdrop-blur-md border border-[#d6a84f] text-[#d6a84f] flex items-center justify-center text-[10px] font-bold font-mono tracking-widest uppercase shadow-2xl transition-all duration-200">
          EXPLORE
        </div>
      )}

      {cursorMode === 'arrow' && (
        <div className="w-9 h-9 rounded-full bg-[rgba(243,238,229,0.12)] backdrop-blur-md border border-[rgba(243,238,229,0.3)] flex items-center justify-center text-[#F3EEE5] text-xs transition-all duration-200">
          <span className="text-[#d6a84f] font-mono">↗</span>
        </div>
      )}
    </div>
  );
};
