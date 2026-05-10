export const SITE = {
  name: 'Datashop',
  title: 'Datashop — AI & data engineering for forward-thinking teams',
  description:
    'We are a specialized engineering firm that transforms how organizations operate around AI and takes working MVPs into production systems that scale. Crypto, real-time ML, and GenAI pipelines for teams that have to ship.',
  url: 'https://datashop.ai',
  author: 'Datashop',
  tagline: 'Artificial intelligence. Real business results.',
} as const;

export const NAV = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'What we do' },
  { href: '/case-studies', label: 'Case studies' },
  { href: '/podcasts', label: 'Podcast' },
  { href: '/communities', label: 'Communities & partnerships' },
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
  /** Set true for monochrome-black logos so we render them inverted (white) on the dark page. */
  invert?: boolean;
};

export const CLIENTS: Client[] = [
  { label: 'Unity', logo: '/logos/unity.svg', invert: true },
  { label: 'PlayStation', logo: '/logos/playstation.svg', invert: true },
  { label: 'NVIDIA', logo: '/logos/nvidia.svg', invert: true },
  { label: 'Sega', logo: '/logos/sega.svg' },
  { label: 'Bonkbot', logo: '/logos/bonkbot.svg', invert: true },
  { label: 'Scopely', logo: '/logos/scopely.png', invert: true },
  { label: 'Bungie', logo: '/logos/bungie.png' },
  { label: 'Xsolla', logo: '/logos/xsolla.png' },
  { label: 'Bondway', logo: '/logos/bondway.png' },
  { label: 'Tapjoy', logo: '/logos/tapjoy.png' },
  { label: 'RxSense', logo: '/logos/rxsense.png' },
  { label: 'Rocket Money', logo: '/logos/rocket-money.png' },
  { label: 'Trustpilot', logo: '/logos/trustpilot.png' },
  { label: 'Creator Games', logo: '/logos/creator-games.png' },
  { label: 'Pinwheel', logo: '/logos/pinwheel.png' },
  { label: 'Michael Burgis & Associates', logo: '/logos/burgis.png' },
];

/** Plain-text roster for prose references. Kept in sync with CLIENTS. */
export const CLIENT_ROSTER = CLIENTS.map((c) => c.label);

