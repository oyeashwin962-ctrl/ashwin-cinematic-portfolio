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
    title: 'FACELESS EDITOR WORKFLOW REEL',
    tagline: 'Visual Rhythm, Multi-Track Editing & Graphic Systems',
    duration: '00:08',
    aspectRatio: '16:9',
    posterImage: '/assets/editor-reel-poster.svg',
    videoUrl: '/assets/Faceless_video_editor_hero_video_20260930180652.mp4',
    description:
      '8-second faceless editor workflow reel showcasing cutting timeline, rhythmic montage, keyframe choreography, and thumbnail grading.',
  },
};
