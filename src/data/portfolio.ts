import { CreatorProfile, PortfolioConfig, Profile } from '../types/portfolio';
import { siteConfig } from './site';
import { socialLinks } from './social';
import { contactInfo } from './contact';
import { servicesData } from './services';
import {
  projectsData,
  getPublishedProjects,
  getFeaturedProjects,
  getProjectsByCategory,
  getProjectBySlug,
  getAdjacentProjects,
} from './projects';

export const creatorProfile: CreatorProfile = {
  name: 'ASHWIN',
  studioName: 'ASHWIN CREATIVE STUDIO',
  brandDescriptor: 'VIDEO EDITOR & MOTION DESIGNER',
  roles: [
    'VIDEO EDITOR',
    'MOTION DESIGNER',
    'GRAPHIC DESIGNER',
    'THUMBNAIL DESIGNER',
    'AI CREATIVE',
  ],
  headline: 'VISUAL STORYTELLING THROUGH EDITING, MOTION & DESIGN',
  positioning: 'Cinematic rhythm, kinetic typography and uncompromising graphic systems.',
  tagline: 'Visual storytelling through editing, motion and design.',
  availability: 'Available for commissions & collaborations',
  bioHeading: 'EDITING IS THE ARCHITECTURE OF TIME.',
  bioQuote:
    'Every frame either accelerates emotion or diminishes it. Great editing is not invisible—it is palpable rhythm.',
  bioParagraphs: [
    'I operate at the intersection of cinematic video editing, kinetic motion typography, and rigorous visual design. Rather than treating visual disciplines as separate silos, my workflow synthesizes pacing, graphic precision, and sound into unified visual narratives.',
    'Whether constructing high-tension narrative film cuts, designing fluid 3D motion graphics, crafting graphic design systems, or engineering high-CTR thumbnail compositions, the objective remains singular: capture attention and command emotional resonance.',
    'In modern creative production, I integrate AI-assisted generative workflows to accelerate pre-visualization, concept iteration, and asset exploration—amplifying human creative intent without sacrificing craft.',
  ],
  corePillars: [
    {
      title: 'Rhythmic Pacing & Cut Architecture',
      description:
        'Sculpting time with frame-accurate musicality, syncopated cuts, and deliberate breath in the timeline.',
    },
    {
      title: 'Kinetic & Spatial Typography',
      description:
        'Transforming letters and titles into dynamic choreography that communicates energy and hierarchy.',
    },
    {
      title: 'Tonal Color Grading & Atmosphere',
      description:
        'Deep contrast curves, filmic grain palettes, and deliberate chromatic separation.',
    },
    {
      title: 'AI-Enhanced Previsualization',
      description:
        'Leveraging generative vision tools for rapid moodboarding, styleframes, and asset ideation.',
    },
  ],
  contact: {
    email: contactInfo.email,
    whatsapp: contactInfo.whatsapp,
    instagram: contactInfo.instagram,
    locationNote: contactInfo.locationNote,
  },
};

export const portfolioConfig: PortfolioConfig = {
  site: siteConfig,
  profile: creatorProfile,
  contact: contactInfo,
  social: socialLinks,
  services: servicesData,
  projects: projectsData,
};

// Re-export all modular datasets and helpers
export {
  siteConfig,
  socialLinks,
  contactInfo,
  servicesData,
  projectsData,
  getPublishedProjects,
  getFeaturedProjects,
  getProjectsByCategory,
  getProjectBySlug,
  getAdjacentProjects,
};
