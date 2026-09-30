import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../types/portfolio';
import { projectsData } from '../data/portfolioData';
import { ProjectVisual } from './ProjectVisual';

interface SelectedWorkProps {
  onSelectProject: (project: Project) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ onSelectProject }) => {
  return (
    <section id="work" className="py-24 md:py-36 px-6 md:px-12 max-w-[1440px] mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-16 md:pb-24 border-b border-[rgba(243,238,229,0.12)]">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#d6a84f] block mb-3">
            02 / PORTFOLIO ARCHIVE
          </span>
          <h2
            className="font-sans font-black tracking-tight text-[#F3EEE5] uppercase leading-[0.9]"
            style={{ fontSize: 'clamp(48px, 9vw, 110px)' }}
          >
            SELECTED
            <br />
            WORK
          </h2>
        </div>

        <p className="text-base md:text-xl font-sans text-[#9D9991] max-w-md leading-relaxed">
          A curated selection of video editing, motion graphics and graphic design work.
        </p>
      </div>

      {/* Projects List — Editorial Asymmetric Rhythm */}
      <div className="mt-16 md:mt-24 space-y-28 md:space-y-40">
        {projectsData.map((project, index) => {
          const isOffset = project.layoutRatio === 'offset';
          const isEven = index % 2 === 0;

          return (
            <div
              key={project.id}
              className={`w-full flex flex-col transition-all duration-500 ${
                isOffset
                  ? isEven
                    ? 'items-start md:w-[60%] lg:w-[48%]'
                    : 'items-end ml-auto md:w-[60%] lg:w-[48%]'
                  : 'w-full lg:w-[85%] mx-auto'
              }`}
            >
              {/* Project Card Container */}
              <div
                onClick={() => onSelectProject(project)}
                data-cursor="view"
                className="w-full group cursor-pointer"
              >
                {/* Visual Media Frame with subtle scale & smooth translation on hover */}
                <div className="relative overflow-hidden transition-all duration-500 rounded-sm group-hover:-translate-y-1">
                  <ProjectVisual
                    theme={project.visualTheme}
                    title={project.title}
                    category={project.category}
                    year={project.year}
                    aspectRatio={project.aspectRatio}
                    isInteractive={true}
                    className="group-hover:border-[#d6a84f]/40"
                  />
                </div>

                {/* Editorial Metadata Block */}
                <div className="mt-6 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-t border-[rgba(243,238,229,0.08)] pt-4 transition-transform duration-300 group-hover:translate-x-1">
                  <div>
                    <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-[#9D9991] mb-1">
                      <span className="text-[#d6a84f]">0{index + 1}</span>
                      <span>·</span>
                      <span className="text-[#F3EEE5] uppercase">{project.category}</span>
                      <span>·</span>
                      <span>{project.year}</span>
                    </div>

                    <h3
                      className="font-sans font-bold tracking-tight text-[#F3EEE5] group-hover:text-[#d6a84f] transition-colors"
                      style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}
                    >
                      {project.title}
                    </h3>

                    <p className="mt-2 text-sm font-sans text-[#9D9991] max-w-xl">
                      {project.summary}
                    </p>
                  </div>

                  <div className="shrink-0 flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#9D9991] group-hover:text-[#F3EEE5] transition-colors">
                    <span className="hidden sm:inline">VIEW PROJECT</span>
                    <ArrowUpRight className="w-4 h-4 text-[#d6a84f] transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
