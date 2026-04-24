import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const caseStudies = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/case-studies' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    client: z.string(),
    industry: z.string(),
    summary: z.string(),
    problem: z.string(),
    approach: z.string(),
    outcome: z.string(),
    metrics: z.array(z.object({
      label: z.string(),
      value: z.string(),
    })).optional(),
    heroImage: image().optional(),
    published: z.date(),
    featured: z.boolean().default(false),
  }),
});

const podcasts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/podcasts' }),
  schema: z.object({
    title: z.string(),
    episode: z.number(),
    guest: z.string().optional(),
    guestTitle: z.string().optional(),
    /** Short teaser shown on the podcast index tile (2–3 sentences). */
    description: z.string(),
    duration: z.string().optional(),
    published: z.date(),
    /** YouTube video ID used for inline embed + thumbnail. */
    videoId: z.string().optional(),
    spotifyUrl: z.string().url().optional(),
    appleUrl: z.string().url().optional(),
    youtubeUrl: z.string().url().optional(),
  }),
});

const services = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    order: z.number(),
    /** 3–5 scannable bullets shown on the services page. */
    bullets: z.array(z.string()).optional(),
    /** "Who this is for" one-liner shown under the bullets. */
    audience: z.string().optional(),
  }),
});

export const collections = { caseStudies, podcasts, services };
