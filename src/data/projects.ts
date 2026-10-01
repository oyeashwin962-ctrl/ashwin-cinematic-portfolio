import { Project, ProjectCategory, SupportedCategory } from '../types/portfolio';

/**
 * Centralized Typed Portfolio Content Model
 * All portfolio project content lives in this single source of truth.
 * Admin-ready architecture: Easily replaceable, queryable, and CMS-compatible.
 */
export const projectsData: Project[] = [
  {
    id: 'nocturne-chronicles',
    slug: 'nocturne-chronicles',
    title: 'NOCTURNE CHRONICLES',
    category: 'Video Editing',
    categorySlug: 'video-editing',
    year: '2026',
    subtitle: 'Cinematic Narrative & Rhythmic Sound Cut',
    shortDescription: 'Frame-accurate rhythm, sub-bass syncopation and moody color grading in a nocturnal narrative.',
    summary: 'A high-tension editorial cut pairing syncopated sound design with deliberate cinematic pacing.',
    description:
      'Crafted with frame-accurate precision, this project explores pace, psychological tension, and micro-expressions through non-linear editing. Every audio beat and atmospheric sub-bass rumble was mapped to accentuate the camera’s kinetic movements, drawing the viewer deeper into the nocturnal landscape.',
    role: 'Lead Video Editor & Colorist',
    tools: ['Premiere Pro', 'DaVinci Resolve', 'After Effects', 'iZotope RX'],
    thumbnail: '/assets/projects/nocturne-thumb.jpg',
    video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    gallery: [
      '/assets/projects/nocturne-frame1.jpg',
      '/assets/projects/nocturne-frame2.jpg',
      '/assets/projects/nocturne-frame3.jpg',
    ],
    projectType: 'narrative',
    featured: true,
    published: true,
    order: 1,
    duration: '03:12',
    aspectRatio: '21:9',
    layout: 'large',
    layoutRatio: 'large',
    visualTheme: 'nocturne',
    accent: '#D6A84F',
    tags: ['Narrative', 'Sound Design', 'Film Cut', 'Color Grading'],
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
    slug: 'kinetic-dimensions',
    title: 'KINETIC DIMENSIONS',
    category: 'Motion Graphics',
    categorySlug: 'motion-graphics',
    year: '2026',
    subtitle: '3D Kinetic Identity & Experimental Type',
    shortDescription: 'Spatial typographic choreography with procedural lighting, dimensional physics and fluid easing.',
    summary: 'Spatial typographic choreography exploring physics-based motion and architectural lighting.',
    description:
      'An exploration of modular typographic systems moving through dimensional space. Letterforms react dynamically to virtual gravity shifts, lighting angles, and camera sweeps, creating an arresting visual cadence designed for modern brand identities.',
    role: 'Motion Designer & 3D Typographer',
    tools: ['After Effects', 'Cinema 4D', 'Blender', 'Illustrator'],
    thumbnail: '/assets/projects/kinetic-thumb.jpg',
    video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
    gallery: [
      '/assets/projects/kinetic-frame1.jpg',
      '/assets/projects/kinetic-frame2.jpg',
    ],
    projectType: 'experimental',
    featured: true,
    published: true,
    order: 2,
    duration: '00:45',
    aspectRatio: '16:9',
    layout: 'offset',
    layoutRatio: 'offset',
    visualTheme: 'kinetic',
    accent: '#E5C07B',
    tags: ['Kinetic Type', '3D Motion', 'Procedural', 'Title Design'],
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
    slug: 'solitude-in-transit',
    title: 'SOLITUDE IN TRANSIT',
    category: 'Video Editing',
    categorySlug: 'video-editing',
    year: '2025',
    subtitle: 'Atmospheric Documentary & Color Architecture',
    shortDescription: 'Quiet documentary pacing honoring spatial continuity and natural acoustic textures.',
    summary: 'Long-form editorial piece focused on stillness, environmental audio, and muted tonal color grading.',
    description:
      'A study in restrained documentary pacing. Rather than relying on hyperactive cuts, the edit relies on spatial continuity, natural light falloff, and field-recorded environmental audio to build an authentic sense of quiet transit through metropolitan corridors.',
    role: 'Editor & Sound Designer',
    tools: ['DaVinci Resolve', 'Premiere Pro', 'Adobe Audition'],
    thumbnail: '/assets/projects/solitude-thumb.jpg',
    video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    gallery: [
      '/assets/projects/solitude-frame1.jpg',
      '/assets/projects/solitude-frame2.jpg',
    ],
    projectType: 'spec',
    featured: true,
    published: true,
    order: 3,
    duration: '08:24',
    aspectRatio: '16:9',
    layout: 'large',
    layoutRatio: 'large',
    visualTheme: 'documentary',
    accent: '#D6A84F',
    tags: ['Documentary', 'Atmosphere', 'Slow Cinema', 'Environmental Sound'],
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
    slug: 'apex-system-identity',
    title: 'APEX SYSTEM IDENTITY',
    category: 'Graphic Design',
    categorySlug: 'graphic-design',
    year: '2025',
    subtitle: 'Minimalist Editorial Layout & Type Specimen',
    shortDescription: 'Swiss-rooted design system with hairline registration marks, grotesque headers and disciplined negative space.',
    summary: 'Swiss-inspired editorial grid system for an experimental design publication.',
    description:
      'An unyielding typographic grid offset by asymmetrical editorial anchors. Created as a comprehensive design system featuring custom grid proportions, stark contrast between heavy grotesque headers and delicate italic serifs, and disciplined negative space.',
    role: 'Lead Graphic Designer',
    tools: ['Figma', 'Illustrator', 'InDesign', 'Photoshop'],
    thumbnail: '/assets/projects/apex-thumb.jpg',
    gallery: [
      '/assets/projects/apex-frame1.jpg',
      '/assets/projects/apex-frame2.jpg',
    ],
    projectType: 'commercial',
    featured: true,
    published: true,
    order: 4,
    aspectRatio: '4:3',
    layout: 'offset',
    layoutRatio: 'offset',
    visualTheme: 'editorial',
    accent: '#F3EEE5',
    tags: ['Editorial Grid', 'Swiss Style', 'Typography', 'Identity'],
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
    slug: 'hyper-retention-craft',
    title: 'HYPER-RETENTION CRAFT',
    category: 'Thumbnails',
    categorySlug: 'thumbnails',
    year: '2026',
    subtitle: 'Visual Storytelling & High-CTR Frame Design',
    shortDescription: 'Cinematic subject lighting, focal depth sculpting and instant curiosity engineered for YouTube feeds.',
    summary: 'Thumbnails engineered for instant story clarity, depth grading, and visual focal dominance.',
    description:
      'In modern content ecosystems, the thumbnail is not merely an illustration—it is the first frame of video storytelling. This project showcases layered light painting, subject edge separation, and color hierarchy designed to convey high emotional curiosity in under 400 milliseconds.',
    role: 'Thumbnail Designer & Art Director',
    tools: ['Photoshop', 'Midjourney AI', 'Lightroom', 'Camera Raw'],
    thumbnail: '/assets/projects/hyper-thumb.jpg',
    gallery: [
      '/assets/projects/hyper-frame1.jpg',
      '/assets/projects/hyper-frame2.jpg',
    ],
    projectType: 'spec',
    featured: true,
    published: true,
    order: 5,
    aspectRatio: '16:9',
    layout: 'large',
    layoutRatio: 'large',
    visualTheme: 'thumbnail',
    accent: '#D6A84F',
    tags: ['Thumbnails', 'CTR Engineering', 'Light Painting', 'Visual Hook'],
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
  {
    id: 'synth-genesis-ai',
    slug: 'synth-genesis-ai',
    title: 'SYNTH GENESIS ARCHIVE',
    category: 'AI Creative',
    categorySlug: 'ai-creative',
    year: '2026',
    subtitle: 'Generative Concept Exploration & Hybrid Matte Painting',
    shortDescription: 'Prompt-directed architectural worlds fused with manual digital matte painting and grain blending.',
    summary: 'Exploration of AI-assisted previsualization, cinematic architectural concept art, and high-resolution textures.',
    description:
      'A series of synthetic architectural environments developed using generative AI as an ideation engine, then manually composited, color-graded, and integrated with filmic grain. The pipeline proves that AI tools amplify visual direction when steered with strict art-direction principles.',
    role: 'AI Creative Director & Matte Artist',
    tools: ['Midjourney v6', 'Photoshop', 'Magnific AI', 'DaVinci Resolve'],
    thumbnail: '/assets/projects/synth-thumb.jpg',
    gallery: [
      '/assets/projects/synth-frame1.jpg',
      '/assets/projects/synth-frame2.jpg',
    ],
    projectType: 'experimental',
    featured: false,
    published: true,
    order: 6,
    aspectRatio: '21:9',
    layout: 'offset',
    layoutRatio: 'offset',
    visualTheme: 'ai',
    accent: '#E5C07B',
    tags: ['Generative AI', 'Concept Art', 'Hybrid Workflow', 'Worldbuilding'],
    colorGrade: {
      lut: 'Monochrome Warm Sepia Noir',
      temperature: '3800K',
      highlights: 'Gilded Rim Glow',
      shadows: 'Crushed Basalt Black',
    },
    frames: [
      {
        title: 'Brutalist Monolith Pass',
        timecode: '00:00:00:01',
        description: 'Synthesized mega-structure with procedural atmospheric fog and hard directional sunlight.',
      },
      {
        title: 'Hand-Composited Specular Highlights',
        timecode: '00:00:01:00',
        description: 'Manual brushwork adding micro-scratches, lens dust, and chromatic edge fringing.',
      },
    ],
  },
];

/**
 * Data Helpers & Registry Functions for the Portfolio Engine
 */

export function getPublishedProjects(): Project[] {
  return projectsData
    .filter((p) => p.published)
    .sort((a, b) => a.order - b.order);
}

export function getFeaturedProjects(): Project[] {
  return getPublishedProjects().filter((p) => p.featured);
}

export function getProjectsByCategory(category: string = 'all'): Project[] {
  const published = getPublishedProjects();
  if (!category || category === 'all') return published;

  const normalized = category.toLowerCase().trim();
  return published.filter((p) => {
    const catLower = p.category.toLowerCase();
    const slugLower = p.categorySlug ? p.categorySlug.toLowerCase() : '';
    return catLower === normalized || slugLower === normalized;
  });
}

export function getProjectBySlug(slug: string): Project | undefined {
  if (!slug) return undefined;
  const clean = slug.toLowerCase().trim();
  return projectsData.find((p) => p.slug.toLowerCase() === clean || p.id.toLowerCase() === clean);
}

export function getAdjacentProjects(currentSlug: string): {
  prev: Project | null;
  next: Project | null;
} {
  const published = getPublishedProjects();
  const currentIndex = published.findIndex(
    (p) => p.slug === currentSlug || p.id === currentSlug
  );

  if (currentIndex === -1 || published.length === 0) {
    return { prev: null, next: null };
  }

  const prevIndex = (currentIndex - 1 + published.length) % published.length;
  const nextIndex = (currentIndex + 1) % published.length;

  return {
    prev: published[prevIndex] || null,
    next: published[nextIndex] || null,
  };
}

/**
 * Admin-Ready Content Management Helper Stubs
 * Prepares the architectural interface for future admin / CMS CRUD operations
 */
export function adminUpdateProject(id: string, updates: Partial<Project>): Project | null {
  const idx = projectsData.findIndex((p) => p.id === id);
  if (idx === -1) return null;
  projectsData[idx] = { ...projectsData[idx], ...updates };
  return projectsData[idx];
}

export function adminAddProject(project: Project): Project {
  projectsData.push(project);
  return project;
}

export function adminDeleteProject(id: string): boolean {
  const idx = projectsData.findIndex((p) => p.id === id);
  if (idx === -1) return false;
  projectsData.splice(idx, 1);
  return true;
}
