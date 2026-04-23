export const SITE = {
  name: 'Datashop',
  title: 'Datashop — AI & data engineering for forward-thinking teams',
  description:
    'We are a specialized engineering firm that transforms how organizations operate around AI and takes working MVPs into production systems that scale. Crypto, real-time ML, and GenAI pipelines for teams that have to ship.',
  url: 'https://datashop.ai',
  author: 'Datashop',
  email: 'ajay@datashop.ai',
  tagline: 'Artificial intelligence. Real business results.',
} as const;

export const NAV = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'What we do' },
  { href: '/case-studies', label: 'Case studies' },
  { href: '/podcasts', label: 'Podcast' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
] as const;

/**
 * Client reel. `logo` is the path under /public when we have a real SVG;
 * otherwise null and the ClientReel component renders a styled text wordmark
 * in the brand color. Add more logos by dropping an SVG into /public/logos/
 * and pointing the entry at it.
 */
export type Client = {
  label: string;
  logo: string | null;
  /** Brand color used for the text wordmark fallback. */
  color?: string;
};

export const CLIENTS: Client[] = [
  { label: 'Xsolla', logo: null, color: '#FF005B' },
  { label: 'Unity', logo: '/logos/unity.svg' },
  { label: 'PlayStation', logo: '/logos/playstation.svg' },
  { label: 'Bungie', logo: null, color: '#0B0F16' },
  { label: 'Scopely', logo: null, color: '#E8663A' },
  { label: 'Sega', logo: '/logos/sega.svg' },
  { label: 'Tapjoy', logo: null, color: '#5E2EFF' },
  { label: 'Bonkbot', logo: null, color: '#F7931A' },
  { label: 'Bondway', logo: null, color: '#0F3D73' },
  { label: 'RxSense', logo: null, color: '#1A8C5F' },
  { label: 'NVIDIA', logo: '/logos/nvidia.svg' },
];

/** Plain-text roster for prose references. Kept in sync with CLIENTS. */
export const CLIENT_ROSTER = CLIENTS.map((c) => c.label);

