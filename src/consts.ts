export const SITE = {
  name: 'Datashop',
  title: 'Datashop — AI transformation for forward-thinking businesses',
  description:
    'An AI consultancy that helps leadership teams transform how their organizations operate and turns MVPs into production systems that scale.',
  url: 'https://datashop.ai',
  author: 'Datashop',
  email: 'hello@datashop.ai',
} as const;

export const NAV = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'What we do' },
  { href: '/case-studies', label: 'Case studies' },
  { href: '/podcasts', label: 'Podcast' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
] as const;
