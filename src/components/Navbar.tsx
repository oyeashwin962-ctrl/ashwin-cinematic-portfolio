import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { siteConfig, creatorProfile } from '../data/portfolio';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection?: string;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onNavigate,
  activeSection = 'hero',
  onOpenContact,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = siteConfig.navigation;

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#080808]/90 backdrop-blur-md py-4 border-b border-[rgba(243,238,229,0.08)] shadow-[0_4px_30px_rgba(0,0,0,0.6)]'
          : 'bg-transparent py-6 md:py-8'
      }`}
    >
      <div className="max-w-[1520px] mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Zone 1: Brand Wordmark */}
        <button
          onClick={() => handleLinkClick('hero')}
          className="text-left group focus:outline-none"
          data-cursor="arrow"
        >
          <div className="flex items-baseline gap-2">
            <span className="font-sans font-extrabold text-xl md:text-2xl tracking-tighter text-[#F3EEE5] group-hover:text-[#D6A84F] transition-colors">
              {creatorProfile.name}
            </span>
            <span className="text-[10px] tracking-widest uppercase font-mono text-[#9D9991] hidden sm:inline-block">
              {creatorProfile.studioName}
            </span>
          </div>
        </button>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10 text-xs font-mono tracking-widest text-[#9D9991]">
          {navLinks.map((link) => (
            <button
              key={link.sectionId}
              onClick={() => handleLinkClick(link.sectionId)}
              className={`transition-colors duration-200 py-1 relative hover:text-[#F3EEE5] ${
                activeSection === link.sectionId ? 'text-[#F3EEE5]' : ''
              }`}
              data-cursor="arrow"
            >
              {link.label}
              {activeSection === link.sectionId && (
                <span className="absolute bottom-0 left-0 right-0 h-px bg-[#D6A84F]" />
              )}
            </button>
          ))}
        </nav>

        {/* Zone 3: Primary Action & Mobile Menu Toggle */}
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenContact}
            data-cursor="arrow"
            className="group hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-mono uppercase tracking-[0.2em] text-[#080808] bg-[#F3EEE5] hover:bg-[#D6A84F] transition-all duration-200 rounded-sm font-bold active:scale-[0.98]"
          >
            <span>LET&apos;S WORK</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#F3EEE5] p-2 hover:text-[#D6A84F] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[69px] bg-[#0c0c0c]/98 backdrop-blur-2xl border-b border-[rgba(243,238,229,0.1)] px-6 py-8 flex flex-col gap-6 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-4 text-base font-mono tracking-widest text-[#9D9991]">
            {navLinks.map((link, idx) => (
              <button
                key={link.sectionId}
                onClick={() => handleLinkClick(link.sectionId)}
                className="text-left py-2 border-b border-[rgba(243,238,229,0.06)] hover:text-[#D6A84F] text-[#F3EEE5] flex items-center justify-between"
              >
                <span>0{idx + 1} — {link.label}</span>
                <span className="text-[#D6A84F]">↗</span>
              </button>
            ))}
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenContact();
            }}
            className="w-full py-3.5 text-center text-xs font-mono uppercase tracking-widest bg-[#F3EEE5] text-[#080808] font-bold rounded-sm hover:bg-[#D6A84F] transition-colors"
          >
            LET&apos;S WORK →
          </button>
        </div>
      )}
    </header>
  );
};
