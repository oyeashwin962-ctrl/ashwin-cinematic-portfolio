import { CreatorProfile, Project, ServiceItem } from '../types/portfolio';

export const creatorProfile: CreatorProfile = {
  name: 'ASHWIN',
  brandDescriptor: 'CREATIVE STUDIO',
  roles: [
    'VIDEO EDITOR',
    'MOTION DESIGNER',
    'GRAPHIC DESIGNER',
    'THUMBNAIL DESIGNER',
    'AI CREATIVE',
  ],
  tagline: 'Visual storytelling through editing, motion and design.',
  availability: 'Available for commissions & collaborations',
  bioHeading: 'EDITING IS THE ARCHITECTURE OF TIME.',
  bioQuote: 'Every frame either accelerates emotion or diminishes it. Great editing is not invisible—it is palpable rhythm.',
  bioParagraphs: [
    'I operate at the intersection of cinematic video editing, kinetic motion typography, and rigorous visual design. Rather than treating visual disciplines as separate silos, my workflow synthesizes pacing, graphic precision, and sound into unified visual narratives.',
    'Whether constructing high-tension narrative film cuts, designing fluid 3D motion graphics, crafting graphic design systems, or engineering high-CTR thumbnail compositions, the objective remains singular: capture attention and command emotional resonance.',
    'In modern creative production, I integrate AI-assisted generative workflows to accelerate pre-visualization, concept iteration, and asset exploration—amplifying human creative intent without sacrificing craft.',
  ],
  corePillars: [
    {
      title: 'Rhythmic Pacing & Cut Architecture',
      description: 'Sculpting time with frame-accurate musicality, syncopated cuts, and deliberate breath in the timeline.',
    },
    {
      title: 'Kinetic & Spatial Typography',
      description: 'Transforming letters and titles into dynamic choreography that communicates energy and hierarchy.',
    },
    {
      title: 'Tonal Color Grading & Atmosphere',
      description: 'Deep contrast curves, filmic grain palettes, and deliberate chromatic separation.',
    },
    {
      title: 'AI-Enhanced Previsualization',
      description: 'Leveraging generative vision tools for rapid moodboarding, styleframes, and asset ideation.',
    },
  ],
  contact: {
    email: 'contact@ashwincreative.com',
    whatsapp: '+1 (555) 019-2831',
    instagram: '@ashwin.creative',
    locationNote: 'Working worldwide / Remote studio',
  },
};

export const projectsData: Project[] = [
  {
    id: 'nocturne-chronicles',
    title: 'NOCTURNE CHRONICLES',
    category: 'VIDEO EDITING',
    year: '2026',
    subtitle: 'Cinematic Narrative & Rhythmic Sound Cut',
    summary: 'A high-tension editorial cut pairing syncopated sound design with deliberate cinematic pacing.',
    description: 'Crafted with frame-accurate precision, this project explores pace, psychological tension, and micro-expressions through non-linear editing. Every audio beat and atmospheric sub-bass rumble was mapped to accentuate the camera’s kinetic movements, drawing the viewer deeper into the nocturnal landscape.',
    tools: ['Premiere Pro', 'DaVinci Resolve', 'After Effects', 'iZotope RX'],
    aspectRatio: '21:9',
    layoutRatio: 'large',
    visualTheme: 'nocturne',
    colorGrade: {
      lut: 'Kodak 2383 Filmic Print D55',
      temperature: '5200K (Moody Cool)',
      highlights: 'Soft Amber Halation',
      shadows: 'Deep Teal Roll-off',
    },
    frames: [
      {
        title: 'Opening Tension Sequence',
        timecode: '00:00:14:02',
        description: 'Establishing wide shot with lingering tension before the rapid rhythmic montage begins.',
      },
      {
        title: 'Syncopated Montage Peak',
        timecode: '00:01:42:19',
        description: 'Sub-frame match cuts between dynamic character glances and industrial light sweeps.',
      },
      {
        title: 'Atmospheric Climax & Deceleration',
        timecode: '00:02:58:11',
        description: 'Sudden cut to negative soundscape with slow anamorphic push-in on protagonist.',
      },
    ],
  },
  {
    id: 'kinetic-dimensions',
    title: 'KINETIC DIMENSIONS',
    category: 'MOTION GRAPHICS',
    year: '2026',
    subtitle: '3D Kinetic Identity & Experimental Type',
    summary: 'Spatial typographic choreography exploring physics-based motion and architectural lighting.',
    description: 'An exploration of modular typographic systems moving through dimensional space. Letterforms react dynamically to virtual gravity shifts, lighting angles, and camera sweeps, creating an arresting visual cadence designed for modern brand identities.',
    tools: ['After Effects', 'Cinema 4D', 'Blender', 'Illustrator'],
    aspectRatio: '16:9',
    layoutRatio: 'offset',
    visualTheme: 'kinetic',
    colorGrade: {
      lut: 'Monochrome High-Key Charcoal',
      temperature: 'Neutral 5600K',
      highlights: 'Brushed Gold Refraction',
      shadows: 'Matte Obsidian Black',
    },
    frames: [
      {
        title: 'Typographic Collision System',
        timecode: '00:00:06:14',
        description: 'Dynamic letters assembling through parametric particle paths into solid geometric glyphs.',
      },
      {
        title: 'Orbital Perspective Pass',
        timecode: '00:00:19:08',
        description: 'Sweeping 85mm virtual lens transition exposing the internal volumetric wireframes.',
      },
      {
        title: 'Lockup Final Settlement',
        timecode: '00:00:32:22',
        description: 'Smooth kinetic dampening into crisp, high-contrast editorial hierarchy.',
      },
    ],
  },
  {
    id: 'solitude-in-transit',
    title: 'SOLITUDE IN TRANSIT',
    category: 'VIDEO EDITING',
    year: '2025',
    subtitle: 'Atmospheric Documentary & Color Architecture',
    summary: 'Long-form editorial piece focused on stillness, environmental audio, and muted tonal color grading.',
    description: 'A study in restrained documentary pacing. Rather than relying on hyperactive cuts, the edit relies on spatial continuity, natural light falloff, and field-recorded environmental audio to build an authentic sense of quiet transit through metropolitan corridors.',
    tools: ['DaVinci Resolve', 'Premiere Pro', 'Adobe Audition'],
    aspectRatio: '16:9',
    layoutRatio: 'large',
    visualTheme: 'documentary',
    colorGrade: {
      lut: 'Fuji Eterna 35mm Natural',
      temperature: '4800K',
      highlights: 'Diffused Overcast Bleed',
      shadows: 'Neutral Low-Density Black',
    },
    frames: [
      {
        title: 'Commuter Dawn Stillness',
        timecode: '00:00:48:10',
        description: 'Minimal cuts prioritizing the organic rhythms of early morning rail lines and station architecture.',
      },
      {
        title: 'Reflective Window Silhouette',
        timecode: '00:03:15:04',
        description: 'Layered visual exposure balancing rainy carriage glass with interior reflections.',
      },
      {
        title: 'Dusk Departure Fade',
        timecode: '00:07:22:18',
        description: 'Gentle dissolve into the receding city lights with natural ambient audio fade.',
      },
    ],
  },
  {
    id: 'apex-system-identity',
    title: 'APEX SYSTEM IDENTITY',
    category: 'GRAPHIC DESIGN',
    year: '2025',
    subtitle: 'Minimalist Editorial Layout & Type Specimen',
    summary: 'Swiss-inspired editorial grid system for an experimental design publication.',
    description: 'An unyielding typographic grid offset by asymmetrical editorial anchors. Created as a comprehensive design system featuring custom grid proportions, stark contrast between heavy grotesque headers and delicate italic serifs, and disciplined negative space.',
    tools: ['Figma', 'Illustrator', 'InDesign', 'Photoshop'],
    aspectRatio: '4:3',
    layoutRatio: 'offset',
    visualTheme: 'editorial',
    colorGrade: {
      lut: 'Monochrome Warm Paper Profile',
      temperature: '3200K (Warm Ivory)',
      highlights: 'Paper White (#F3EEE5)',
      shadows: 'Deep Carbon (#0D0D0D)',
    },
    frames: [
      {
        title: 'Master Typographic Grid',
        timecode: '00:00:00:01',
        description: '12-column dynamic framework governing headline scale, micro-notes, and negative margins.',
      },
      {
        title: 'Editorial Poster Spread',
        timecode: '00:00:01:00',
        description: 'Asymmetric text blocks juxtaposed with macro detail crops and hairline registration marks.',
      },
      {
        title: 'Specimen Foldout Architecture',
        timecode: '00:00:02:00',
        description: 'Physical fold interaction translated to web-native dimensional transitions.',
      },
    ],
  },
  {
    id: 'hyper-retention-craft',
    title: 'HYPER-RETENTION CRAFT',
    category: 'THUMBNAILS',
    year: '2026',
    subtitle: 'Visual Storytelling & High-CTR Frame Design',
    summary: 'Thumbnails engineered for instant story clarity, depth grading, and visual focal dominance.',
    description: 'In modern content ecosystems, the thumbnail is not merely an illustration—it is the first frame of video storytelling. This project showcases layered light painting, subject edge separation, and color hierarchy designed to convey high emotional curiosity in under 400 milliseconds.',
    tools: ['Photoshop', 'Midjourney AI', 'Lightroom', 'Camera Raw'],
    aspectRatio: '16:9',
    layoutRatio: 'large',
    visualTheme: 'thumbnail',
    colorGrade: {
      lut: 'High-Retention Dynamic Gamma',
      temperature: 'Split Warm/Cool',
      highlights: 'Golden Amber Accent Glow',
      shadows: 'Clean Compressed Dark',
    },
    frames: [
      {
        title: 'Focal Hierarchy Mapping',
        timecode: '00:00:00:01',
        description: 'Primary subject isolation with depth-of-field separation and complementary rim lighting.',
      },
      {
        title: 'Curiosity Engine Composition',
        timecode: '00:00:01:00',
        description: 'Visual tension between foreground subject and mysterious background lighting anomaly.',
      },
      {
        title: 'Multi-Device Scaling Verification',
        timecode: '00:00:02:00',
        description: 'Testing silhouette clarity down to 80px mobile feeds to ensure instant legibility.',
      },
    ],
  },
];

export const servicesData: ServiceItem[] = [
  {
    id: 'video-editing',
    number: '01',
    title: 'VIDEO EDITING',
    tagline: 'Pacing, narrative rhythm & precision cut architecture',
    description:
      'From cinematic brand narratives and documentaries to fast-paced creator content. Every cut is engineered with musicality, timing, and deep emotional resonance.',
    deliverables: [
      'Narrative & Commercial Assembly',
      'Pacing & Rhythmic Cut Refinement',
      'Sound Design & Multi-Track Mixing',
      'Filmic Color Grading (DaVinci Resolve)',
      'Multi-Format Deliverables (16:9, 9:16, 4:5)',
    ],
    visualPreviewTheme: 'nocturne',
  },
  {
    id: 'motion-graphics',
    number: '02',
    title: 'MOTION GRAPHICS',
    tagline: 'Kinetic typography, 2D/3D title sequences & spatial choreography',
    description:
      'Translating static identity into compelling movement. Kinetic typography, 3D abstract visualizers, and seamless UI/media transitions that elevate production value.',
    deliverables: [
      'Kinetic Title Sequences & Lower Thirds',
      '2D/3D Product & Identity Motion',
      'Explainer & Information Choreography',
      'Logo Animation & Brand Design Systems',
      'Interactive Web/Video Asset Packs',
    ],
    visualPreviewTheme: 'kinetic',
  },
  {
    id: 'graphic-design',
    number: '03',
    title: 'GRAPHIC DESIGN',
    tagline: 'Editorial layout, poster design & uncompromising typographic systems',
    description:
      'Disciplined Swiss and contemporary brutalist aesthetics. Print, digital key art, cover design, and brand identity that command respect through negative space and type hierarchy.',
    deliverables: [
      'Editorial & Magazine Layouts',
      'Cinematic Key Art & Posters',
      'Brand Identity Guidelines & Assets',
      'Typography Selection & Hierarchies',
      'Digital Deck & Presentation Design',
    ],
    visualPreviewTheme: 'editorial',
  },
  {
    id: 'thumbnails',
    number: '04',
    title: 'THUMBNAIL DESIGN',
    tagline: 'High-CTR storytelling frames & subject light painting',
    description:
      'Thumbnails built like movie posters. Meticulous subject isolation, dramatic lighting, psychological color contrast, and instant visual hooks that maximize organic click-through.',
    deliverables: [
      'High-CTR Concept Ideation & Framing',
      'Precision Subject Cutouts & Lighting',
      'Depth Grading & Background Atmosphere',
      'High-Contrast Text Hierarchy',
      'A/B Variation Testing Sets',
    ],
    visualPreviewTheme: 'thumbnail',
  },
  {
    id: 'ai-creative',
    number: '05',
    title: 'AI CREATIVE',
    tagline: 'Generative asset synthesis & modern visual previsualization',
    description:
      'Integrating cutting-edge generative tools into production pipelines. Rapid styleframe generation, synthetic environment design, and prompt-driven conceptualization that expands creative possibilities.',
    deliverables: [
      'Generative Styleframe Exploration',
      'Custom Background & Texture Synthesis',
      'AI-Assisted Storyboard Rapid Prototyping',
      'Creative Direction & Prompt Architecture',
      'Hybrid AI + Manual Compositing',
    ],
    visualPreviewTheme: 'ai',
  },
];
