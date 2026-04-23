export const SITE = {
  name: 'Datashop',
  title: 'Datashop — AI & data engineering for forward-thinking teams',
  description:
    'We are a specialized engineering firm that transforms how organizations operate around AI and takes working MVPs into production systems that scale. Web3, real-time ML, and GenAI pipelines for teams that have to ship.',
  url: 'https://datashop.ai',
  author: 'Datashop',
  email: 'hello@datashop.ai',
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
 * The pragmatic proof roster. These names appear in the fodder doc and on the
 * about page. Sensitive ones (AAA studios under NDA) are surfaced by name on the
 * fodder doc but may warrant anonymization depending on each client's agreement.
 */
export const CLIENT_ROSTER = [
  'Bonkbot',
  'Xsolla',
  'Unity',
  'Sony PlayStation',
  'Bungie',
  'Scopely',
  'Sega',
] as const;
