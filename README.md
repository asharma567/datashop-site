# datashop.ai

The new Datashop marketing site. Replaces Webflow. Built with Astro + Tailwind, deployed to Cloudflare Pages.

## Getting started

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # production build to ./dist
npm run preview   # preview the production build locally
```

## Project structure

```
src/
├── components/      # Nav, Footer, reusable UI
├── content/
│   ├── case-studies/   # .md / .mdx — one per engagement
│   ├── podcasts/       # .md / .mdx — one per episode
│   └── services/       # .md / .mdx — what we do
├── content.config.ts   # collection schemas (typed frontmatter)
├── consts.ts           # site metadata, nav links
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   ├── index.astro
│   ├── about.astro
│   ├── contact.astro
│   ├── services.astro
│   ├── case-studies/
│   │   ├── index.astro       # list
│   │   └── [...slug].astro   # detail
│   └── podcasts/
│       ├── index.astro
│       └── [...slug].astro
└── styles/
    └── global.css
```

## Adding content

### A new case study

Create `src/content/case-studies/<slug>.md`:

```yaml
---
title: "Short, benefit-led title"
client: "Company name"
industry: "SaaS"
summary: "One-sentence teaser shown on the index page."
problem: "What was broken, in one paragraph."
approach: "What we did, in one paragraph."
outcome: "What changed, in one paragraph."
metrics:
  - label: "Cost/query"
    value: "-68%"
  - label: "p95 latency"
    value: "8.2s → 1.4s"
published: 2026-02-14
featured: true      # surfaces on homepage
---

Body prose here. Heading tags, quotes, code blocks all work.
Switch to .mdx if you want to embed custom components per study.
```

### A new podcast episode

Create `src/content/podcasts/ep<N>-<slug>.md`:

```yaml
---
title: "Episode title"
episode: 2
guest: "Jane Doe"
guestTitle: "Chief Data Officer, Acme"
description: "One-paragraph summary for the list view."
duration: "52 min"
published: 2026-03-01
spotifyUrl: "https://open.spotify.com/..."
appleUrl: "https://podcasts.apple.com/..."
youtubeUrl: "https://youtube.com/..."
---

## Show notes

- 02:15 — First topic
- 11:40 — Second topic
```

### Editing services

`src/content/services/*.md` — each file is one service, `order` in frontmatter controls sort.

## Deployment

Target: **Cloudflare Pages** (free tier, unlimited bandwidth, auto SSL).

1. Push this repo to GitHub
2. Cloudflare Pages → Connect to Git → select the repo
3. Build command: `npm run build`
4. Output directory: `dist`
5. Set custom domain `datashop.ai` (and `www.datashop.ai`) in Pages settings
6. At Namecheap, change `CNAME @` and `CNAME www` to point at the Pages-provided hostname
7. SSL auto-provisions in minutes
