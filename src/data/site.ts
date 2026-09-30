import { SiteConfig } from '../types/portfolio';

export const siteConfig: SiteConfig = {
  name: 'ASHWIN',
  title: 'ASHWIN — Video Editor & Motion Designer',
  description:
    'Editorial studio portfolio of Ashwin — Video Editor, Motion Graphics Designer, Graphic Designer, Thumbnail Designer, and AI Creative.',
  url: 'https://ashwincreative.com',
  author: 'Ashwin',
  theme: {
    bgPrimary: '#080808',
    bgSecondary: '#111111',
    textPrimary: '#F3EEE5',
    textMuted: '#9D9991',
    accentAmber: '#D6A84F',
  },
  navigation: [
    { label: 'WORK', sectionId: 'work' },
    { label: 'MOTION', sectionId: 'motion' },
    { label: 'SERVICES', sectionId: 'services' },
    { label: 'ABOUT', sectionId: 'about' },
    { label: 'CONTACT', sectionId: 'contact' },
  ],
  showreel: {
    title: 'CINEMATIC SHOWREEL 2026',
    tagline: 'Visual Rhythm, Motion Choreography & Graphic Systems',
    duration: '01:45',
    aspectRatio: '16:9',
    posterImage: '/assets/showreel-poster.jpg',
    description:
      'A curated sequence of narrative film edits, dynamic motion typography, procedural title design, and high-impact visual storytelling.',
  },
};
