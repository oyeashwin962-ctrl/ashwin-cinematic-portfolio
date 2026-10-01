import React, { useEffect, useState } from 'react';
import { ArrowLeft, ArrowUpRight, ChevronLeft, ChevronRight, Sliders, Play, Film, Image as ImageIcon } from 'lucide-react';
import { Project } from '../types/portfolio';
import { getAdjacentProjects } from '../data/projects';
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
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  // Scroll to top and reset player state when project changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsPlayingVideo(false);
  }, [project.id]);

  const { prev: prevProject, next: nextProject } = getAdjacentProjects(project.slug || project.id);

  return (
    <article className="min-h-screen pt-28 md:pt-36 pb-24 px-6 md:px-12 max-w-[1520px] mx-auto select-none">
      
      {/* 1. Back Button & Project Navigation Top Bar */}
      <div className="flex items-center justify-between pb-8 border-b border-[rgba(243,238,229,0.1)]">
        <button
          onClick={onBack}
          data-cursor="arrow"
          className="group inline-flex items-center gap-2.5 text-xs font-mono uppercase tracking-[0.2em] text-[#9D9991] hover:text-[#F3EEE5] transition-colors"
        >
          <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1 text-[#D6A84F]" />
          <span>BACK TO SELECTED WORK</span>
        </button>

        <div className="flex items-center gap-4 text-xs font-mono text-[#9D9991] tracking-widest uppercase">
          <span className="text-[#D6A84F]">0{project.order}</span>
          <span className="text-[#9D9991]/50">//</span>
          <span className="text-[#F3EEE5]">{project.projectType.toUpperCase()}</span>
        </div>
      </div>

      {/* 2. Hero Meta Header */}
      <div className="pt-12 pb-8">
        <div className="flex flex-wrap items-center gap-3 text-xs font-mono uppercase tracking-[0.25em] text-[#D6A84F] mb-3">
          <span className="font-medium">{project.category}</span>
          <span>·</span>
          <span className="text-[#9D9991]">{project.year}</span>
          {project.role && (
            <>
              <span>·</span>
              <span className="text-[#F3EEE5]">{project.role}</span>
            </>
          )}
        </div>

        <h1
          className="font-sans font-black tracking-tight text-[#F3EEE5] uppercase leading-[0.88] max-w-5xl"
          style={{ fontSize: 'clamp(38px, 6.5vw, 88px)' }}
        >
          {project.title}
        </h1>

        {project.subtitle && (
          <p className="font-serif italic text-xl md:text-2xl text-[#9D9991] mt-4 max-w-3xl">
            {project.subtitle}
          </p>
        )}
      </div>

      {/* 3. Dominant Hero Media Area: Video or High-Impact Visual Frame */}
      <div className="my-8 md:my-12 relative group rounded-sm overflow-hidden border border-[rgba(243,238,229,0.18)] shadow-[0_24px_80px_rgba(0,0,0,0.85)]">
        {project.video && isPlayingVideo ? (
          <div className="relative aspect-[21/9] w-full bg-black">
            <video
              src={project.video}
              autoPlay
              controls
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="relative">
            <ProjectVisual
              theme={project.visualTheme || 'nocturne'}
              title={project.title}
              category={project.category}
              year={project.year}
              aspectRatio={project.aspectRatio || '21:9'}
              thumbnail={project.thumbnail}
              showOverlayUI={true}
              isInteractive={false}
              className="w-full"
            />

            {project.video && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/35 backdrop-blur-[2px] transition-opacity group-hover:bg-black/20">
                <button
                  onClick={() => setIsPlayingVideo(true)}
                  className="flex items-center gap-3 px-6 py-3 rounded-full bg-[#F3EEE5] text-[#080808] hover:bg-[#D6A84F] transition-all duration-300 shadow-2xl scale-100 hover:scale-105"
                >
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                  <span className="text-xs font-mono font-bold tracking-widest uppercase">
                    PLAY VIDEO CUT
                  </span>
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* 4. Deep Narrative & Production Pipeline Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 py-12 border-y border-[rgba(243,238,229,0.1)]">
        
        {/* Left Column: Narrative & Overview */}
        <div className="lg:col-span-8 space-y-6">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#D6A84F] block">
            ABOUT THE STUDY
          </span>

          <p className="text-lg md:text-2xl font-sans font-medium text-[#F3EEE5] leading-relaxed">
            {project.shortDescription || project.summary}
          </p>

          <p className="text-base font-sans text-[#9D9991] leading-relaxed">
            {project.description}
          </p>

          {/* Tools Pipeline */}
          <div className="pt-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#9D9991] block mb-3">
              PRODUCTION TOOLS & PIPELINE
            </span>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="text-xs font-mono text-[#F3EEE5] bg-[#111111] border border-[rgba(243,238,229,0.14)] px-3.5 py-1.5 rounded-sm tracking-wider uppercase"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Studio Metrics & Specification */}
        <div className="lg:col-span-4 space-y-8 bg-[#0c0c0c] border border-[rgba(243,238,229,0.08)] p-6 md:p-8 rounded-sm">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#D6A84F] mb-4">
              <Sliders className="w-3.5 h-3.5" />
              <span>STUDIO METRICS</span>
            </div>

            <dl className="space-y-4 text-xs font-mono border-t border-[rgba(243,238,229,0.08)] pt-4">
              <div className="flex justify-between py-1 border-b border-[rgba(243,238,229,0.04)]">
                <dt className="text-[#9D9991]">DISCIPLINE</dt>
                <dd className="text-[#F3EEE5] text-right uppercase font-medium">{project.category}</dd>
              </div>
              <div className="flex justify-between py-1 border-b border-[rgba(243,238,229,0.04)]">
                <dt className="text-[#9D9991]">RELEASE YEAR</dt>
                <dd className="text-[#F3EEE5]">{project.year}</dd>
              </div>
              {project.duration && (
                <div className="flex justify-between py-1 border-b border-[rgba(243,238,229,0.04)]">
                  <dt className="text-[#9D9991]">DURATION</dt>
                  <dd className="text-[#D6A84F]">{project.duration}</dd>
                </div>
              )}
              {project.aspectRatio && (
                <div className="flex justify-between py-1 border-b border-[rgba(243,238,229,0.04)]">
                  <dt className="text-[#9D9991]">ASPECT RATIO</dt>
                  <dd className="text-[#F3EEE5]">{project.aspectRatio} CINEMA</dd>
                </div>
              )}
              <div className="flex justify-between py-1 border-b border-[rgba(243,238,229,0.04)]">
                <dt className="text-[#9D9991]">PROJECT TYPE</dt>
                <dd className="text-[#F3EEE5] uppercase">{project.projectType}</dd>
              </div>
            </dl>
          </div>

          {/* Color Grade Profile if defined */}
          {project.colorGrade && (
            <div className="border-t border-[rgba(243,238,229,0.08)] pt-5">
              <span className="text-[10px] font-mono tracking-widest text-[#9D9991] uppercase block mb-2">
                COLOR & TONAL PROFILE
              </span>
              <div className="space-y-2 text-xs font-mono">
                <div className="bg-[#141414] p-2.5 rounded-sm border border-[rgba(243,238,229,0.06)]">
                  <span className="text-[#9D9991] block text-[10px]">LUT PROFILE</span>
                  <span className="text-[#F3EEE5]">{project.colorGrade.lut}</span>
                </div>
                <div className="bg-[#141414] p-2.5 rounded-sm border border-[rgba(243,238,229,0.06)]">
                  <span className="text-[#9D9991] block text-[10px]">TEMPERATURE</span>
                  <span className="text-[#F3EEE5]">{project.colorGrade.temperature}</span>
                </div>
              </div>
            </div>
          )}

          {/* Inquiry Action */}
          <div className="pt-2">
            <button
              onClick={onContactClick}
              className="w-full py-3.5 bg-[#D6A84F] hover:bg-[#e0b764] text-[#080808] font-mono text-xs font-bold uppercase tracking-[0.2em] transition-colors rounded-sm flex items-center justify-center gap-2 shadow-lg"
            >
              <span>INQUIRE ABOUT THIS DISCIPLINE</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* 5. Production Gallery / Keyframe Breakdown */}
      {project.frames && project.frames.length > 0 && (
        <section className="py-16 md:py-24 border-b border-[rgba(243,238,229,0.1)]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#D6A84F] block mb-2">
                TIMELINE BREAKDOWN
              </span>
              <h2 className="font-sans font-black tracking-tight text-3xl md:text-5xl text-[#F3EEE5] uppercase">
                KEY MOMENTS
              </h2>
            </div>
            <span className="text-xs font-mono text-[#9D9991]">
              FRAME ACCURACY & CUT TRANSITIONS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {project.frames.map((frame, idx) => (
              <div
                key={frame.timecode}
                className="bg-[#0e0e0e] border border-[rgba(243,238,229,0.1)] p-6 rounded-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#D6A84F] mb-4">
                    <span>FRAME 0{idx + 1}</span>
                    <span className="text-[#9D9991]">{frame.timecode}</span>
                  </div>
                  <h3 className="font-sans font-bold text-lg text-[#F3EEE5] mb-2">
                    {frame.title}
                  </h3>
                  <p className="text-xs font-sans text-[#9D9991] leading-relaxed">
                    {frame.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 6. Previous / Next Project Navigation (Following Published Order) */}
      <footer className="pt-16 flex flex-col sm:flex-row items-center justify-between gap-8">
        {prevProject ? (
          <button
            onClick={() => onNavigateProject(prevProject)}
            className="group flex items-center gap-4 text-left transition-colors self-start sm:self-auto"
          >
            <div className="w-12 h-12 rounded-full border border-[rgba(243,238,229,0.16)] flex items-center justify-center text-[#F3EEE5] group-hover:border-[#D6A84F] group-hover:text-[#D6A84F] transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono tracking-widest text-[#9D9991] uppercase block">
                PREVIOUS STUDY
              </span>
              <span className="font-sans font-bold text-lg text-[#F3EEE5] group-hover:text-[#D6A84F] transition-colors">
                {prevProject.title}
              </span>
            </div>
          </button>
        ) : (
          <div />
        )}

        {nextProject && (
          <button
            onClick={() => onNavigateProject(nextProject)}
            className="group flex items-center gap-4 text-right transition-colors self-end sm:self-auto"
          >
            <div>
              <span className="text-[10px] font-mono tracking-widest text-[#9D9991] uppercase block">
                NEXT STUDY
              </span>
              <span className="font-sans font-bold text-lg text-[#F3EEE5] group-hover:text-[#D6A84F] transition-colors">
                {nextProject.title}
              </span>
            </div>
            <div className="w-12 h-12 rounded-full border border-[rgba(243,238,229,0.16)] flex items-center justify-center text-[#F3EEE5] group-hover:border-[#D6A84F] group-hover:text-[#D6A84F] transition-colors">
              <ChevronRight className="w-5 h-5" />
            </div>
          </button>
        )}
      </footer>

    </article>
  );
};
