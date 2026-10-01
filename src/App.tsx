/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { CustomCursor } from './components/CustomCursor';
import { Hero } from './components/Hero';
import { SelectedWork } from './components/SelectedWork';
import { MotionShowcase } from './components/MotionShowcase';
import { Services } from './components/Services';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { ProjectDetail } from './components/ProjectDetail';
import { ShowreelModal } from './components/ShowreelModal';
import { CinematicTransition } from './components/CinematicTransition';
import { Footer } from './components/Footer';
import { Project } from './types/portfolio';
import { getProjectBySlug } from './data/projects';

export default function App() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [showreelOpen, setShowreelOpen] = useState(false);
  const [contactService, setContactService] = useState<string>('');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionLabel, setTransitionLabel] = useState('PROJECT REVEAL');

  // Synchronize routing with URL slug (/work/slug or #/work/slug)
  useEffect(() => {
    const handleUrlChange = () => {
      if (typeof window === 'undefined') return;
      const hash = window.location.hash;
      const pathname = window.location.pathname;

      let slug = '';
      if (hash.startsWith('#/work/')) {
        slug = hash.replace('#/work/', '').replace(/\/$/, '');
      } else if (pathname.startsWith('/work/')) {
        slug = pathname.replace('/work/', '').replace(/\/$/, '');
      }

      if (slug) {
        const found = getProjectBySlug(slug);
        if (found) {
          setActiveProject(found);
          return;
        }
      }
    };

    handleUrlChange();
    window.addEventListener('hashchange', handleUrlChange);
    window.addEventListener('popstate', handleUrlChange);
    return () => {
      window.removeEventListener('hashchange', handleUrlChange);
      window.removeEventListener('popstate', handleUrlChange);
    };
  }, []);

  const handleSelectProject = (project: Project) => {
    setTransitionLabel(project.title);
    setIsTransitioning(true);

    if (typeof window !== 'undefined') {
      window.location.hash = `#/work/${project.slug}`;
    }

    setTimeout(() => {
      setActiveProject(project);
      window.scrollTo({ top: 0 });
      setTimeout(() => {
        setIsTransitioning(false);
      }, 350);
    }, 200);
  };

  const handleBackToWork = () => {
    setTransitionLabel('PORTFOLIO ARCHIVE');
    setIsTransitioning(true);

    if (typeof window !== 'undefined' && window.location.hash.startsWith('#/work/')) {
      window.location.hash = '';
    }

    setTimeout(() => {
      setActiveProject(null);
      setTimeout(() => {
        setIsTransitioning(false);
        const el = document.getElementById('work');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 350);
    }, 200);
  };

  const handleNavigateProject = (project: Project) => {
    setTransitionLabel(project.title);
    setIsTransitioning(true);

    if (typeof window !== 'undefined') {
      window.location.hash = `#/work/${project.slug}`;
    }

    setTimeout(() => {
      setActiveProject(project);
      window.scrollTo({ top: 0 });
      setTimeout(() => {
        setIsTransitioning(false);
      }, 350);
    }, 200);
  };

  const handleNavigate = (sectionId: string) => {
    if (activeProject) {
      handleBackToWork();
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 600);
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenContact = () => {
    if (activeProject) {
      setActiveProject(null);
    }
    setTimeout(() => {
      const el = document.getElementById('contact');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleSelectServiceForInquiry = (serviceTitle: string) => {
    setContactService(serviceTitle);
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#080808] text-[#F3EEE5] selection:bg-[#d6a84f] selection:text-[#080808] relative font-sans">
      {/* Desktop Custom Cursor */}
      <CustomCursor />

      {/* Cinematic Curtain Page Transition */}
      <CinematicTransition
        isTransitioning={isTransitioning}
        label={transitionLabel}
      />

      {/* Persistent Top Navigation Bar */}
      <Navbar
        onNavigate={handleNavigate}
        onOpenContact={handleOpenContact}
      />

      {/* Main Content Router */}
      <main>
        {activeProject ? (
          /* Dedicated Project Detail Route */
          <ProjectDetail
            project={activeProject}
            onBack={handleBackToWork}
            onNavigateProject={handleNavigateProject}
            onContactClick={handleOpenContact}
          />
        ) : (
          /* Editorial Homepage Composition */
          <>
            <Hero
              onOpenShowreel={() => setShowreelOpen(true)}
              onExploreWork={() => handleNavigate('work')}
            />

            <SelectedWork
              onSelectProject={handleSelectProject}
            />

            <MotionShowcase />

            <Services
              onSelectServiceForInquiry={handleSelectServiceForInquiry}
            />

            <About />

            <Contact initialService={contactService} />
          </>
        )}
      </main>

      {/* Editorial Footer */}
      <Footer />

      {/* Interactive Cinematic Showreel Modal */}
      <ShowreelModal
        isOpen={showreelOpen}
        onClose={() => setShowreelOpen(false)}
      />
    </div>
  );
}
