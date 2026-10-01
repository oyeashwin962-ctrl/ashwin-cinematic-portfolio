import React, { useState } from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { Project } from '../types/portfolio';
import { getPublishedProjects, getProjectsByCategory } from '../data/projects';
import { ProjectVisual } from './ProjectVisual';

interface SelectedWorkProps {
  onSelectProject: (project: Project) => void;
}

const CATEGORY_FILTERS: { label: string; value: string }[] = [
  { label: 'ALL', value: 'all' },
  { label: 'VIDEO EDITING', value: 'Video Editing' },
  { label: 'MOTION GRAPHICS', value: 'Motion Graphics' },
  { label: 'GRAPHIC DESIGN', value: 'Graphic Design' },
  { label: 'THUMBNAILS', value: 'Thumbnails' },
  { label: 'AI CREATIVE', value: 'AI Creative' },
];

export const SelectedWork: React.FC<SelectedWorkProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  // Centralized query from project data engine: published === true, sorted by order ascending
  const displayedProjects = getProjectsByCategory(activeFilter);
  const totalPublishedCount = getPublishedProjects().length;

  return (
    <section id="work" className="py-24 md:py-36 px-6 md:px-12 max-w-[1520px] mx-auto select-none">
      
      {/* 1. Section Header: Editorial & Minimalist */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-10 border-b border-[rgba(243,238,229,0.12)]">
        <div>
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#D6A84F] block mb-3">
            02 / SELECTED WORK
          </span>
          <h2
            className="font-sans font-black tracking-tight text-[#F3EEE5] uppercase leading-[0.88]"
            style={{ fontSize: 'clamp(44px, 8.5vw, 105px)' }}
          >
            SELECTED
            <br />
            WORK
          </h2>
        </div>

        <div className="max-w-md">
          <p className="text-base md:text-lg font-sans text-[#9D9991] leading-relaxed">
            Asymmetric editorial showcase exploring rhythmic cutting, spatial motion typography, and high-impact visual systems.
          </p>
          <div className="mt-4 flex items-center gap-2 text-xs font-mono text-[#D6A84F]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>
              {displayedProjects.length} OF {totalPublishedCount} PUBLISHED STUDIES
            </span>
          </div>
        </div>
      </div>

      {/* 2. Dynamic Category Filter Tabs: Operating from Centralized Model */}
      <div className="mt-8 pb-4 border-b border-[rgba(243,238,229,0.06)] overflow-x-auto scrollbar-none">
        <div className="flex items-center gap-2 md:gap-4 min-w-max">
          {CATEGORY_FILTERS.map((filter) => {
            const isActive = activeFilter.toLowerCase() === filter.value.toLowerCase();
            return (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`text-xs font-mono tracking-widest uppercase px-3.5 py-2 transition-colors duration-200 border ${
                  isActive
                    ? 'border-[#D6A84F] text-[#D6A84F] bg-[#D6A84F]/10'
                    : 'border-transparent text-[#9D9991] hover:text-[#F3EEE5] hover:border-[rgba(243,238,229,0.12)]'
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Asymmetric Editorial Composition: Varied Proportions & Generous Negative Space */}
      <div className="mt-16 md:mt-24 space-y-24 md:space-y-36">
        {displayedProjects.length === 0 ? (
          <div className="py-20 text-center font-mono text-sm text-[#9D9991] border border-dashed border-[rgba(243,238,229,0.1)]">
            NO PUBLISHED STUDIES CURRENTLY IN THIS CATEGORY
          </div>
        ) : (
          displayedProjects.map((project, index) => {
            // Editorial rhythm rules:
            // 1st project = large visual (94% width)
            // 2nd project = offset right (68% width, ml-auto)
            // 3rd project = different scale / offset left (74% width, mr-auto)
            // 4th+ = alternating rhythm with varied aspect ratios
            const isFirst = index === 0;
            const isOffsetRight = index % 2 === 1;
            const isDominant = isFirst || project.layout === 'large' || index % 3 === 0;

            const containerWidthClass = isFirst
              ? 'w-full lg:w-[94%] mx-auto'
              : isDominant
              ? 'w-full lg:w-[88%] mx-auto'
              : isOffsetRight
              ? 'w-full lg:w-[68%] ml-auto'
              : 'w-full lg:w-[72%] mr-auto';

            return (
              <article
                key={project.id}
                className={`w-full flex flex-col transition-all duration-500 ${containerWidthClass}`}
              >
                <div
                  onClick={() => onSelectProject(project)}
                  data-cursor="view"
                  className="w-full group cursor-pointer"
                >
                  {/* Visual Media Layer: Dominant Element */}
                  <div className="relative overflow-hidden transition-all duration-500 rounded-sm group-hover:-translate-y-1 shadow-[0_16px_50px_rgba(0,0,0,0.7)]">
                    <ProjectVisual
                      theme={project.visualTheme || 'nocturne'}
                      title={project.title}
                      category={project.category}
                      year={project.year}
                      aspectRatio={project.aspectRatio || (isDominant ? '21:9' : '16:9')}
                      thumbnail={project.thumbnail}
                      isInteractive={true}
                      className="group-hover:border-[#D6A84F]/40"
                    />

                    {/* Minimal Media Badge */}
                    <div className="absolute top-4 right-4 z-20 pointer-events-none">
                      <span className="text-[10px] font-mono tracking-widest text-[#F3EEE5] uppercase bg-[#080808]/80 backdrop-blur-md px-2.5 py-1 border border-[rgba(243,238,229,0.12)]">
                        {project.year} // 0{project.order}
                      </span>
                    </div>
                  </div>

                  {/* Metadata Hierarchy: Category, Year, Title, Short Description, View Project */}
                  <div className="mt-6 flex flex-col sm:flex-row sm:items-baseline justify-between gap-6 border-t border-[rgba(243,238,229,0.08)] pt-4 transition-transform duration-300 group-hover:translate-x-1">
                    <div className="max-w-3xl">
                      {/* CATEGORY & YEAR */}
                      <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-[#9D9991] mb-2">
                        <span className="text-[#D6A84F] uppercase font-medium">{project.category}</span>
                        <span>·</span>
                        <span className="text-[#F3EEE5]">{project.year}</span>
                        {project.role && (
                          <>
                            <span className="hidden sm:inline">·</span>
                            <span className="hidden sm:inline text-[#9D9991]">{project.role}</span>
                          </>
                        )}
                      </div>

                      {/* TITLE */}
                      <h3
                        className="font-sans font-bold tracking-tight text-[#F3EEE5] group-hover:text-[#D6A84F] transition-colors leading-[0.92]"
                        style={{
                          fontSize: isFirst
                            ? 'clamp(34px, 5vw, 68px)'
                            : isDominant
                            ? 'clamp(30px, 4vw, 56px)'
                            : 'clamp(26px, 3.2vw, 44px)',
                        }}
                      >
                        {project.title}
                      </h3>

                      {/* SHORT DESCRIPTION */}
                      <p className="mt-2.5 text-sm md:text-base font-sans text-[#9D9991] leading-relaxed max-w-2xl">
                        {project.shortDescription || project.description}
                      </p>

                      {/* Production Tools Pipeline */}
                      {project.tools && project.tools.length > 0 && (
                        <div className="mt-3.5 flex flex-wrap items-center gap-2">
                          {project.tools.slice(0, 4).map((tool) => (
                            <span
                              key={tool}
                              className="text-[10px] font-mono text-[#9D9991]/75 tracking-wider uppercase border border-[rgba(243,238,229,0.06)] px-2 py-0.5"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* VIEW PROJECT CTA */}
                    <div className="shrink-0 pt-2 sm:pt-0">
                      <div className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.2em] uppercase text-[#F3EEE5] group-hover:text-[#D6A84F] transition-colors pb-1 border-b border-[rgba(243,238,229,0.2)] group-hover:border-[#D6A84F]">
                        <span>VIEW PROJECT</span>
                        <ArrowUpRight className="w-4 h-4 text-[#D6A84F] transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </div>
                    </div>
                  </div>

                </div>
              </article>
            );
          })
        )}
      </div>

    </section>
  );
};
