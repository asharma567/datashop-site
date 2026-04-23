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
    description: z.string(),
    duration: z.string().optional(),
    published: z.date(),
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
  }),
});

export const collections = { caseStudies, podcasts, services };
