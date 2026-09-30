import { Service } from '../types/portfolio';

export const servicesData: Service[] = [
  {
    id: 'video-editing',
    slug: 'video-editing',
    number: '01',
    title: 'Video Editing',
    tagline: 'Pacing, narrative rhythm & precision cut architecture',
    description:
      'From cinematic brand narratives and documentary shorts to fast-paced high-retention creator cuts. Every frame is calibrated for musicality, dramatic tension, and emotional resonance.',
    deliverables: [
      'Narrative Assembly & Assembly Cuts',
      'Frame-Accurate Pacing & Rhythm Refinement',
      'Diegetic & Atmospheric Sound Design',
      'Filmic Color Grading & LUT Calibration',
      'Multi-Format Exports (16:9, 9:16, 4:5)',
    ],
    visualPreviewTheme: 'nocturne',
    tools: ['Premiere Pro', 'DaVinci Resolve', 'iZotope RX', 'Audition'],
  },
  {
    id: 'motion-graphics',
    slug: 'motion-graphics',
    number: '02',
    title: 'Motion Graphics',
    tagline: 'Kinetic typography, title sequences & spatial choreography',
    description:
      'Translating static identity and ideas into expressive movement. Kinetic typography, 2D/3D title sequences, and graphic UI transitions engineered with physics-inspired easing.',
    deliverables: [
      'Kinetic Title Sequences & Lower Thirds',
      '2D/3D Brand Motion & Logo Choreography',
      'Explainer Visuals & Infographic Systems',
      'Motion Design Guidelines & Reusable Templates',
      'Looping Video & Social Visual Assets',
    ],
    visualPreviewTheme: 'kinetic',
    tools: ['After Effects', 'Cinema 4D', 'Blender', 'Illustrator'],
  },
  {
    id: 'graphic-design',
    slug: 'graphic-design',
    number: '03',
    title: 'Graphic Design',
    tagline: 'Editorial layout, poster art & uncompromising typography',
    description:
      'Disciplined Swiss and contemporary brutalist design aesthetics. High-contrast typography systems, exhibition posters, key art, and print/digital brand collaterals that command presence.',
    deliverables: [
      'Editorial Publications & Digital Decks',
      'Cinematic Key Art & Promotional Posters',
      'Comprehensive Visual Identity Systems',
      'Typographic Pairing & Hierarchy Rules',
      'Brand Asset Packages & Vector Specs',
    ],
    visualPreviewTheme: 'editorial',
    tools: ['Figma', 'Illustrator', 'InDesign', 'Photoshop'],
  },
  {
    id: 'thumbnails',
    slug: 'thumbnails',
    number: '04',
    title: 'Thumbnails',
    tagline: 'High-CTR storytelling frames & subject light sculpting',
    description:
      'Thumbnails treated like cinematic one-sheet posters. Meticulous subject isolation, edge lighting, psychological color separation, and focal clarity engineered to win the critical first 400ms.',
    deliverables: [
      'Instant Narrative Hook & Curiosity Framing',
      'Precision Foreground Isolation & Rim Lighting',
      'Depth Grading & Atmospheric Layer Separation',
      'High-Legibility Typographic Treatment',
      'Split A/B Testing Compositions',
    ],
    visualPreviewTheme: 'thumbnail',
    tools: ['Photoshop', 'Camera Raw', 'Lightroom', 'Midjourney AI'],
  },
  {
    id: 'ai-creative',
    slug: 'ai-creative',
    number: '05',
    title: 'AI Creative',
    tagline: 'Generative asset synthesis & modern visual previsualization',
    description:
      'Integrating modern generative models into high-craft production pipelines. Rapid styleframe generation, synthetic environment painting, and prompt-directed conceptual exploration.',
    deliverables: [
      'Generative Concept Moodboarding',
      'Synthetic Texture & Background Generation',
      'Rapid Storyboard Previsualization',
      'AI Prompt Engineering & Style Direction',
      'Hybrid AI + Hand-Crafted Compositing',
    ],
    visualPreviewTheme: 'ai',
    tools: ['Midjourney', 'Stable Diffusion', 'Photoshop AI', 'Runway'],
  },
];
