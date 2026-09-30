import React, { useEffect } from 'react';
import { ArrowLeft, ArrowUpRight, ChevronLeft, ChevronRight, Sliders, Layers } from 'lucide-react';
import { Project } from '../types/portfolio';
import { projectsData } from '../data/portfolioData';
import { ProjectVisual } from './ProjectVisual';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
  onNavigateProject: (project: Project) => void;
  onContactClick: () => void;
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({
  project,
  onBack,
  onNavigateProject,
  onContactClick,
}) => {
  // Scroll to top when project changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [project.id]);

  const currentIndex = projectsData.findIndex((p) => p.id === project.id);
  const prevProject =
    currentIndex > 0 ? projectsData[currentIndex - 1] : projectsData[projectsData.length - 1];
  const nextProject =
    currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : projectsData[0];

  return (
    <article className="min-h-screen pt-28 md:pt-36 pb-24 px-6 md:px-12 max-w-[1440px] mx-auto animate-in fade-in duration-500">
      {/* Back Button & Breadcrumbs */}
      <div className="flex items-center justify-between pb-8 border-b border-[rgba(243,238,229,0.1)]">
        <button
          onClick={onBack}
          data-cursor="arrow"
          className="group inline-flex items-center gap-2.5 text-xs font-mono uppercase tracking-widest text-[#9D9991] hover:text-[#F3EEE5] transition-colors"
        >
          <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1 text-[#d6a84f]" />
          <span>BACK TO WORK</span>
        </button>

        <div className="text-xs font-mono text-[#9D9991] tracking-widest uppercase">
          <span>0{currentIndex + 1}</span>
          <span className="mx-2 text-[#d6a84f]">/</span>
          <span>0{projectsData.length}</span>
        </div>
      </div>

      {/* Hero Meta Header */}
      <div className="pt-12 pb-8">
        <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#d6a84f] mb-3">
          <span>{project.category}</span>
          <span>·</span>
          <span className="text-[#9D9991]">{project.year}</span>
        </div>

        <h1
          className="font-sans font-black tracking-tight text-[#F3EEE5] uppercase leading-[0.9] max-w-5xl"
          style={{ fontSize: 'clamp(40px, 7vw, 92px)' }}
        >
          {project.title}
        </h1>

        <p className="font-serif italic text-xl md:text-2xl text-[#9D9991] mt-4 max-w-3xl">
          {project.subtitle}
        </p>
      </div>

      {/* Dominant Hero Media Area */}
      <div className="my-8 md:my-12">
        <ProjectVisual
          theme={project.visualTheme}
          title={project.title}
          category={project.category}
          year={project.year}
          aspectRatio="21:9"
          showOverlayUI={true}
          isInteractive={false}
          className="shadow-2xl border-[rgba(243,238,229,0.18)]"
        />
      </div>

      {/* Narrative & Specification Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 py-12 border-y border-[rgba(243,238,229,0.1)]">
        {/* Left Column: Deep Narrative Description */}
        <div className="lg:col-span-8 space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-[#d6a84f] block">
            ABOUT THE PROJECT
          </span>

          <p className="text-lg md:text-2xl font-sans font-medium text-[#F3EEE5] leading-relaxed">
            {project.summary}
          </p>

          <p className="text-base font-sans text-[#9D9991] leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Right Column: Tools & Technical Architecture */}
        <div className="lg:col-span-4 space-y-8 lg:border-l lg:border-[rgba(243,238,229,0.08)] lg:pl-12">
          {/* Tools Used (Clean unboxed tags) */}
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#9D9991] block mb-3">
              PRODUCTION TOOLS
            </span>
            <div className="flex flex-wrap gap-2 text-xs font-mono text-[#F3EEE5]">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1 bg-[#121212] border border-[rgba(243,238,229,0.12)] rounded-sm"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Color Grade Architecture if available */}
          {project.colorGrade && (
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#d6a84f] block mb-3 flex items-center gap-2">
                <Sliders className="w-3.5 h-3.5" />
                <span>COLOR PROFILE</span>
              </span>
              <div className="space-y-2 text-xs font-mono text-[#9D9991]">
                <div className="flex justify-between py-1 border-b border-[rgba(243,238,229,0.06)]">
                  <span>PRINT LUT:</span>
                  <span className="text-[#F3EEE5]">{project.colorGrade.lut}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[rgba(243,238,229,0.06)]">
                  <span>COLOR TEMP:</span>
                  <span className="text-[#F3EEE5]">{project.colorGrade.temperature}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[rgba(243,238,229,0.06)]">
                  <span>HIGHLIGHTS:</span>
                  <span className="text-[#F3EEE5]">{project.colorGrade.highlights}</span>
                </div>
              </div>
            </div>
          )}

          {/* Inquire CTA */}
          <div className="pt-4">
            <button
              onClick={onContactClick}
              data-cursor="arrow"
              className="w-full py-3 bg-[#F3EEE5] text-[#080808] hover:bg-[#d6a84f] font-mono font-semibold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-colors rounded-sm"
            >
              <span>INQUIRE SIMILAR PROJECT</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Frame Gallery / Breakdown Section */}
      <div className="py-16 md:py-24">
        <div className="flex items-center justify-between mb-12">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#d6a84f] block mb-2">
              TIMELINE BREAKDOWN
            </span>
            <h3 className="text-2xl md:text-4xl font-sans font-bold uppercase text-[#F3EEE5]">
              KEY SEQUENCES &amp; FRAMES
            </h3>
          </div>
          <span className="font-mono text-xs text-[#9D9991]">3 MOMENTS INSPECTED</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {project.frames.map((frame, idx) => (
            <div
              key={idx}
              className="bg-[#0b0b0b] border border-[rgba(243,238,229,0.1)] p-6 flex flex-col justify-between rounded-sm"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#d6a84f] mb-3">
                  <span>FRAME 0{idx + 1}</span>
                  <span className="text-[#9D9991]">{frame.timecode}</span>
                </div>
                <h4 className="text-base font-sans font-bold text-[#F3EEE5] mb-2">
                  {frame.title}
                </h4>
                <p className="text-xs md:text-sm font-sans text-[#9D9991] leading-relaxed">
                  {frame.description}
                </p>
              </div>

              {/* Visual simulated strip */}
              <div className="mt-6 pt-4 border-t border-[rgba(243,238,229,0.06)] flex items-center justify-between text-[10px] font-mono text-[#9D9991]">
                <span>24 FPS LOCK</span>
                <span className="text-[#d6a84f]">APPROVED CUT</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Previous / Next Project Navigation Footer */}
      <div className="pt-16 border-t border-[rgba(243,238,229,0.14)] grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Previous Project */}
        <button
          onClick={() => onNavigateProject(prevProject)}
          data-cursor="arrow"
          className="text-left p-6 md:p-8 bg-[#0a0a0a] hover:bg-[#111] border border-[rgba(243,238,229,0.08)] hover:border-[#d6a84f] transition-all group"
        >
          <div className="flex items-center gap-2 text-xs font-mono text-[#9D9991] mb-2">
            <ChevronLeft className="w-4 h-4 text-[#d6a84f] group-hover:-translate-x-1 transition-transform" />
            <span>PREVIOUS PROJECT</span>
          </div>
          <span className="text-xl md:text-2xl font-sans font-bold text-[#F3EEE5] group-hover:text-[#d6a84f] transition-colors block">
            {prevProject.title}
          </span>
          <span className="text-xs font-mono text-[#9D9991] uppercase mt-1 block">
            {prevProject.category} · {prevProject.year}
          </span>
        </button>

        {/* Next Project */}
        <button
          onClick={() => onNavigateProject(nextProject)}
          data-cursor="arrow"
          className="text-right p-6 md:p-8 bg-[#0a0a0a] hover:bg-[#111] border border-[rgba(243,238,229,0.08)] hover:border-[#d6a84f] transition-all group"
        >
          <div className="flex items-center justify-end gap-2 text-xs font-mono text-[#9D9991] mb-2">
            <span>NEXT PROJECT</span>
            <ChevronRight className="w-4 h-4 text-[#d6a84f] group-hover:translate-x-1 transition-transform" />
          </div>
          <span className="text-xl md:text-2xl font-sans font-bold text-[#F3EEE5] group-hover:text-[#d6a84f] transition-colors block">
            {nextProject.title}
          </span>
          <span className="text-xs font-mono text-[#9D9991] uppercase mt-1 block">
            {nextProject.category} · {nextProject.year}
          </span>
        </button>
      </div>
    </article>
  );
};
