import React, { useState } from 'react';
import { ArrowUpRight, Plus, Minus } from 'lucide-react';
import { servicesData } from '../data/portfolio';
import { Service } from '../types/portfolio';
import { ProjectVisual } from './ProjectVisual';

interface ServicesProps {
  onSelectServiceForInquiry?: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForInquiry }) => {
  const [activeRow, setActiveRow] = useState<string | null>(null);
  const [hoveredService, setHoveredService] = useState<Service | null>(null);

  const toggleRow = (id: string) => {
    setActiveRow((prev) => (prev === id ? null : id));
  };

  return (
    <section id="services" className="py-24 md:py-36 px-6 md:px-12 max-w-[1520px] mx-auto border-t border-[rgba(243,238,229,0.08)] relative select-none">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-16 border-b border-[rgba(243,238,229,0.12)]">
        <div>
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#D6A84F] block mb-3">
            04 / DISCIPLINES
          </span>
          <h2
            className="font-sans font-black tracking-tight text-[#F3EEE5] uppercase leading-[0.88]"
            style={{ fontSize: 'clamp(44px, 8vw, 100px)' }}
          >
            SERVICES &amp;
            <br />
            CAPABILITIES
          </h2>
        </div>

        <p className="text-base md:text-xl font-sans text-[#9D9991] max-w-md leading-relaxed">
          Integrated visual disciplines delivering cinematic impact across timeline, spatial typography, and visual systems.
        </p>
      </div>

      {/* Floating Hover Visual Preview Plate (Desktop Only) */}
      {hoveredService && (
        <div className="hidden xl:block pointer-events-none absolute right-16 top-48 w-80 z-20 transition-all duration-300 animate-in fade-in slide-in-from-bottom-2">
          <div className="rounded-sm overflow-hidden border border-[#D6A84F]/40 shadow-2xl bg-[#0c0c0c] p-2">
            <div className="aspect-[16/9] w-full overflow-hidden rounded-xs">
              <ProjectVisual
                theme={hoveredService.visualPreviewTheme}
                title={hoveredService.title}
                aspectRatio="16:9"
                showOverlayUI={false}
                isInteractive={false}
              />
            </div>
            <div className="pt-2 px-1 flex justify-between items-center text-[10px] font-mono text-[#9D9991]">
              <span className="text-[#F3EEE5] uppercase">{hoveredService.title}</span>
              <span className="text-[#D6A84F]">{hoveredService.number}</span>
            </div>
          </div>
        </div>
      )}

      {/* Editorial Numbered List */}
      <div className="mt-8 divide-y divide-[rgba(243,238,229,0.1)]">
        {servicesData.map((service) => {
          const isOpen = activeRow === service.id;

          return (
            <div
              key={service.id}
              onMouseEnter={() => setHoveredService(service)}
              onMouseLeave={() => setHoveredService(null)}
              className="py-8 md:py-12 transition-all duration-300 group cursor-pointer"
              onClick={() => toggleRow(service.id)}
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 transition-transform duration-300 group-hover:translate-x-1">
                {/* Number & Service Title */}
                <div className="flex items-baseline gap-6 md:gap-12">
                  <span className="font-mono text-sm md:text-base text-[#D6A84F] shrink-0 font-medium">
                    {service.number}
                  </span>

                  <div>
                    <h3
                      className="font-sans font-extrabold tracking-tight text-[#F3EEE5] uppercase transition-colors group-hover:text-[#D6A84F]"
                      style={{ fontSize: 'clamp(28px, 4vw, 56px)' }}
                    >
                      {service.title}
                    </h3>
                    <p className="text-sm font-sans text-[#9D9991] mt-1">
                      {service.tagline}
                    </p>
                  </div>
                </div>

                {/* Right Area: Arrow / Expand Trigger */}
                <div className="flex items-center gap-6 justify-between lg:justify-end">
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#9D9991] hidden sm:inline">
                    {isOpen ? 'COLLAPSE' : 'DETAILS'}
                  </span>

                  <div className="w-10 h-10 rounded-full border border-[rgba(243,238,229,0.2)] flex items-center justify-center text-[#F3EEE5] group-hover:border-[#D6A84F] group-hover:bg-[#D6A84F] group-hover:text-[#080808] transition-all duration-200">
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    )}
                  </div>
                </div>
              </div>

              {/* Expanded Details Drawer */}
              {isOpen && (
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="mt-8 pt-8 border-t border-[rgba(243,238,229,0.06)] grid grid-cols-1 lg:grid-cols-12 gap-8 animate-in fade-in duration-300"
                >
                  <div className="lg:col-span-6 space-y-4">
                    <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#D6A84F] block">
                      SCOPE OF CRAFT
                    </span>
                    <p className="text-base text-[#F3EEE5] leading-relaxed">
                      {service.description}
                    </p>

                    {onSelectServiceForInquiry && (
                      <button
                        onClick={() => onSelectServiceForInquiry(service.title)}
                        className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 text-xs font-mono uppercase tracking-[0.2em] bg-[#F3EEE5] text-[#080808] hover:bg-[#D6A84F] transition-colors rounded-sm font-bold"
                      >
                        <span>INQUIRE FOR {service.title}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>

                  <div className="lg:col-span-6">
                    <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#9D9991] block mb-3">
                      KEY DELIVERABLES &amp; TOOLS
                    </span>
                    <ul className="space-y-2 text-sm font-mono text-[#F3EEE5] mb-4">
                      {service.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D6A84F]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {service.tools && (
                      <div className="pt-2 flex flex-wrap gap-1.5">
                        {service.tools.map((tool) => (
                          <span
                            key={tool}
                            className="text-[10px] font-mono text-[#9D9991] border border-[rgba(243,238,229,0.08)] px-2 py-0.5"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
