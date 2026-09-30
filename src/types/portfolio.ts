export interface Project {
  id: string;
  title: string;
  category: 'VIDEO EDITING' | 'MOTION GRAPHICS' | 'GRAPHIC DESIGN' | 'THUMBNAILS' | 'AI CREATIVE';
  year: string;
  subtitle: string;
  summary: string;
  description: string;
  tools: string[];
  aspectRatio?: '16:9' | '4:3' | '21:9';
  layoutRatio: 'large' | 'offset';
  visualTheme: 'nocturne' | 'kinetic' | 'documentary' | 'editorial' | 'thumbnail';
  clientOrContext?: string;
  colorGrade?: {
    lut: string;
    temperature: string;
    highlights: string;
    shadows: string;
  };
  frames: {
    title: string;
    timecode: string;
    description: string;
  }[];
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  visualPreviewTheme: 'nocturne' | 'kinetic' | 'editorial' | 'thumbnail' | 'ai';
}

export interface CreatorProfile {
  name: string;
  brandDescriptor: string;
  roles: string[];
  tagline: string;
  availability: string;
  bioHeading: string;
  bioQuote: string;
  bioParagraphs: string[];
  corePillars: {
    title: string;
    description: string;
  }[];
  contact: {
    email: string;
    whatsapp: string;
    instagram: string;
    locationNote?: string;
  };
}
