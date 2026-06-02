// ===========================================
// PROJECT DATA - Edit this file to update your portfolio
// ===========================================

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string; // Place images in public/images/projects/
  images?: string[]; // Optional: array of images for gallery view
  stack: string[];
  links: { type: 'live' | 'github' | 'npm' | 'casestudy'; url: string }[];
}

export interface FeaturedProject {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  images?: string[]; // Optional: array of images for gallery view
  problem: string;
  solution: string;
  result: string;
  stats: { value: string; label: string }[];
  stack: string[];
  links: { type: 'live' | 'github' | 'casestudy'; url: string }[];
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  initials: string;
  avatar?: string; // Optional: place in public/images/avatars/
}

// ===========================================
// FEATURED PROJECT (the big case study card)
// ===========================================
export const featuredProject: FeaturedProject = {
  id: 'featured-movieception',
  title: 'Movieception',
  subtitle: 'A full-stack app for tracking movies and TV shows - watched, watching, or want to watch - with a clean UI that stays out of your way.',
  image: '/images/projects/movieception.png',
  images: [
    '/images/projects/movieception.png',
    '/images/projects/movieception.png',
    '/images/projects/movieception.png',
  ],
  problem: 'Every movie tracker is either too bloated or too basic. I wanted something <strong>clean and minimal</strong> - and used it as a reason to build a real full-stack app.',
  solution: 'Built it end to end with <strong>React/TypeScript</strong> on the frontend, a <strong>.NET 10 C# REST API</strong>, Azure SQL for the database, and <strong>Auth0</strong> for auth. Deployed to Azure App Service on Linux with a custom domain.',
  result: 'A live production app at <strong>movieception.com</strong> that I actually use, and the project that solidified my backend fundamentals.',
  stats: [
    { value: '2 Platforms', label: 'Web + Mobile' },
    { value: 'Auth0', label: 'Secure auth' },
    { value: 'Azure', label: 'Cloud hosted' },
    { value: 'Live', label: 'In production' },
  ],
  stack: ['React', 'TypeScript', '.NET 10', 'Azure SQL', 'Auth0'],
  links: [
    { type: 'live', url: 'https://movieception.com' },
  ],
};

// ===========================================
// PROJECTS (the smaller project cards)
// ===========================================
export const projects: Project[] = [
  // {
  //   id: 'project-1',
  //   title: 'Lattice',
  //   description: 'A therapy scheduling platform that makes booking sessions as simple as picking a time. Built for a local mental health practice.',
  //   image: '/images/projects/lattice.png',
  //   stack: ['Next.js', 'Prisma', 'Stripe'],
  //   links: [
  //     { type: 'live', url: 'https://example.com' },
  //     { type: 'github', url: 'https://github.com/yourname/lattice' },
  //   ],
  // },
  // {
  //   id: 'project-2',
  //   title: 'Plotpoint',
  //   description: 'A newsroom CMS built for speed. Editors can publish breaking stories in under 30 seconds with the real-time collaboration features.',
  //   image: '/images/projects/plotpoint.png',
  //   stack: ['React', 'tRPC', 'Postgres'],
  //   links: [
  //     { type: 'live', url: 'https://example.com' },
  //     { type: 'github', url: 'https://github.com/yourname/plotpoint' },
  //   ],
  // },
  // {
  //   id: 'project-3',
  //   title: 'Ridgeway HVAC',
  //   description: 'Marketing site for a family-owned HVAC company. Clean design, fast performance, and a quote request form that actually converts.',
  //   image: '/images/projects/ridgeway.png',
  //   stack: ['Astro', 'Tailwind', 'Netlify'],
  //   links: [
  //     { type: 'live', url: 'https://example.com' },
  //   ],
  // },
  // {
  //   id: 'project-4',
  //   title: 'tinyform',
  //   description: "An open-source form validation library that's actually tiny. Zero dependencies, tree-shakeable, and TypeScript-first.",
  //   image: '/images/projects/tinyform.png',
  //   stack: ['TypeScript', 'Vitest', 'npm'],
  //   links: [
  //     { type: 'github', url: 'https://github.com/yourname/tinyform' },
  //     { type: 'npm', url: 'https://npmjs.com/package/tinyform' },
  //   ],
  // },
];

// ===========================================
// TESTIMONIALS (interlaced with projects)
// ===========================================
export const testimonials: Testimonial[] = [
  // {
  //   id: 'testimonial-1',
  //   quote: 'Daniel brought clarity to a messy codebase and shipped features faster than we thought possible. His component work cut our dev time in half.',
  //   name: 'Sarah Kim',
  //   role: 'Engineering Lead, Meridian',
  //   initials: 'SK',
  //   // avatar: '/images/avatars/sarah.jpg', // Optional
  // },
  // {
  //   id: 'testimonial-2',
  //   quote: "Working with Daniel felt like having a co-founder who actually cared. He pushed back when needed and delivered something better than what I asked for.",
  //   name: 'Marcus Rivera',
  //   role: 'Founder, Plotpoint',
  //   initials: 'MR',
  // },
  // {
  //   id: 'testimonial-3',
  //   quote: "tinyform replaced three different libraries in our stack. It's the validation API I wish existed five years ago. Huge props to Daniel.",
  //   name: 'Jamie Lin',
  //   role: 'Staff Engineer, Vercel',
  //   initials: 'JL',
  // },
];
