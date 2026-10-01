/**
 * Central Content & Portfolio Types for Ashwin's Cinematic Portfolio
 * Decouples the portfolio engine from portfolio content.
 * Admin-ready data model.
 */

export type SupportedCategory =
  | 'Video Editing'
  | 'Motion Graphics'
  | 'Graphic Design'
  | 'Thumbnails'
  | 'AI Creative';

export type CategorySlug =
  | 'all'
  | 'video-editing'
  | 'motion-graphics'
  | 'graphic-design'
  | 'thumbnails'
  | 'ai-creative';

export type ProjectCategory = CategorySlug;
export type CategoryDisplay =
  | 'VIDEO EDITING'
  | 'MOTION GRAPHICS'
  | 'GRAPHIC DESIGN'
  | 'THUMBNAILS'
  | 'AI CREATIVE';

export interface Tool {
  name: string;
  category?: string;
  icon?: string;
}

export interface Asset {
  id: string;
  type: 'image' | 'video' | 'qr' | 'thumbnail';
  url: string;
  alt: string;
  aspectRatio?: string;
  poster?: string;
}

export interface ProjectFrame {
  title: string;
  timecode: string;
  description: string;
  image?: string;
}

export interface ColorGradeSpec {
  lut: string;
  temperature: string;
  highlights: string;
  shadows: string;
}

/**
 * Standard Centralized Project Data Model
 */
export interface Project {
  id: string;
  slug: string;
  title: string;
  category: SupportedCategory | string;
  categorySlug?: CategorySlug;
  year: string;
  description: string;
  shortDescription: string;
  role: string;
  tools: string[];
  thumbnail: string;
  video?: string;
  gallery: string[];
  projectType: string;
  featured: boolean;
  published: boolean;
  order: number;
  duration?: string;
  aspectRatio?: string;
  layout?: 'large' | 'offset' | 'wide' | 'tall';
  layoutRatio?: 'large' | 'offset'; // backward compatibility
  visualTheme?: 'nocturne' | 'kinetic' | 'documentary' | 'editorial' | 'thumbnail' | 'ai' | string;
  
  // Optional enrichment fields for deep case study presentation
  subtitle?: string;
  summary?: string;
  tags?: string[];
  accent?: string;
  externalUrl?: string;
  clientOrContext?: string;
  colorGrade?: ColorGradeSpec;
  frames?: ProjectFrame[];
}

export interface Service {
  id: string;
  slug: ProjectCategory;
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  visualPreviewTheme: 'nocturne' | 'kinetic' | 'editorial' | 'thumbnail' | 'ai';
  tools?: string[];
}

export interface SocialLink {
  platform: 'instagram' | 'whatsapp' | 'email' | 'youtube' | 'x' | 'vimeo' | 'linkedin';
  label: string;
  handle: string;
  url: string;
  isPrimary?: boolean;
}

export interface InstagramQRConfig {
  accountHandle: string;
  profileUrl: string;
  label: string;
  caption: string;
  qrAssetUrl?: string;
}

export interface ContactInfo {
  email: string;
  whatsapp: string;
  whatsappUrl: string;
  instagram: string;
  instagramUrl: string;
  locationNote: string;
  responseTimeNote: string;
  instagramQR: InstagramQRConfig;
}

export interface Profile {
  name: string;
  studioName: string;
  brandDescriptor: string;
  roles: string[];
  headline: string;
  positioning: string;
  tagline: string;
  availability: string;
  bioHeading: string;
  bioQuote: string;
  bioParagraphs: string[];
  corePillars: {
    title: string;
    description: string;
  }[];
}

export interface ShowreelConfig {
  title: string;
  tagline: string;
  duration: string;
  aspectRatio: string;
  videoUrl?: string;
  posterImage: string;
  description: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  author: string;
  theme: {
    bgPrimary: string;
    bgSecondary: string;
    textPrimary: string;
    textMuted: string;
    accentAmber: string;
  };
  navigation: {
    label: string;
    sectionId: string;
  }[];
  showreel: ShowreelConfig;
}

export interface PortfolioConfig {
  site: SiteConfig;
  profile: Profile;
  contact: ContactInfo;
  social: SocialLink[];
  services: Service[];
  projects: Project[];
}

// Backward-compatibility aliases for existing components
export type ServiceItem = Service;
export type CreatorProfile = Profile & {
  contact: {
    email: string;
    whatsapp: string;
    instagram: string;
    locationNote?: string;
  };
};
