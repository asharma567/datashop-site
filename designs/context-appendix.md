# Datashop design-critic team — context appendix

Longer-form prose moved out of `context.md` (2026-06-12 sweep). `context.md` keeps the load-bearing tokens and hard rules; this file holds references, voice, layout language, and process notes.

---

## Design references

**Primary:** [hex.tech](https://hex.tech/resources/events/) — mirror the matte-dark + pastel accents + minimal iconography + editorial italic + corner-bracket hover + masked client reel rhythm. We do **not** mirror their dusty rose accent; see the palette in `context.md`.

**Primary palette anchor:** The Datashop podcast YouTube banner — matte warm charcoal background + electric lime accent block with near-black text. This is the two-color statement we pulled into the site palette.
- Channel URL: https://www.youtube.com/@datashop-ai

**Secondary reference:** The original `datashop.ai` Webflow site — take its restraint, whitespace, and three-card rhythm on services. Do **not** mimic its color palette (those are being retired).

---

## Typography notes

Loaded via Google Fonts in `src/layouts/BaseLayout.astro`. Token table lives in `context.md`.

Headline pattern: sans-serif bold + one italic-serif accent word in lime. Don't overuse the italic — one per headline, max. Editorial-serif accent examples: *Real business results*, *engagement*, *talk*.

---

## Layout language

- Wide whitespace; sections separated by 1px `--color-border` rules, not colored backgrounds
- Eyebrow labels are uppercase mono, tracked `0.16em`, in `--color-fg-subtle` or an accent
- Card hover: subtle `.brackets` corners appear in lime via pseudo-elements (already wired in `global.css`)
- Homepage hero has a `.grain` film-grain overlay; don't remove
- Client reel is masked on left/right edges (`-webkit-mask-image`) and runs on `animation: reel 54s linear infinite`
- Corner radii: `--radius-sm` (4px) for inputs, `--radius-md` (8px) for reel tiles, `--radius-lg` (14px) for cards, `--radius-xl` (22px) for hero CTA blocks

---

## Voice

Ajay's public voice, from Medium + personal blog. Keep this in the copy whenever tone matters:

- Direct, declarative openers. *"Online dating sucks."*
- Self-aware, willing to name the unglamorous reality. *"I'll admit that when the soul-crushing realities of looking for love online get to me, I've contemplated simply lowering my expectations."*
- Rhetorical beat that invites the reader in. *"Don't we all?"*
- Analytical pivot from anecdote to principle. *"In reality, beauty is subjective and a lot of what attracts us to someone probably lives in our subconscious."*
- Casual sign-off / warm close. *"We're in the home stretch!"*
- On the work: *"A data scientist operating with minimal support, no data/ml engineers or devops team."*
- Engineering hot-take: *"Much like best-practices used in software development, good design is flexible to change and reusable."*
- First-principle framing: *"Show it makes money: Find business value of creating such a product."*

Overall voice markers: **direct, self-aware, data-literate, witty, rhetorical.** Avoid: corporate consultancy throat-clearing, buzzword stacks ("leveraging synergies"), AI marketing noise ("revolutionary", "cutting-edge", "transformative").

---

## Site structure at a glance

```
src/pages/
├── index.astro              # home: hero · reel · services · featured case studies · pullquote · CTA
├── services.astro           # hero · two service cards w/ bullets · reel · CTA
├── case-studies/
│   ├── index.astro          # grid of all case studies
│   └── [...slug].astro      # per-study detail (metrics · problem · approach · outcome · body)
├── podcasts/
│   ├── index.astro          # grid of 5 episodes w/ embedded YouTube + short desc
│   └── [...slug].astro      # per-episode (embed + chapter show-notes)
├── about.astro              # company profile · stats · roster
└── contact.astro            # contact form (POSTs to /api/contact) + direct email fallback

src/components/
├── Nav.astro                # sticky, responsive with mobile drawer
├── Footer.astro
├── ClientReel.astro         # marquee logo strip
└── YouTubeEmbed.astro       # lazy, nocookie iframe

src/layouts/BaseLayout.astro # html/head + nav + main slot + footer
src/styles/global.css        # Tailwind + @theme tokens + .grain, .brackets, .prose
src/consts.ts                # SITE, NAV, CLIENTS
src/content.config.ts        # case-studies, podcasts, services collections
functions/api/contact.ts     # Cloudflare Pages Function — Resend email send
```

---

## What counts as "done" for a typical iteration

- `npm run build` completes clean (build now runs `astro check` first — type errors fail it)
- Affected pages render at 1280×900 and 375×812 without layout overflow or hidden-but-accessible-only nav
- Console is clean (ignore YouTube nocookie's `compute-pressure` warning)
- Interactive flows exercised in the brief actually work (contact form submit + error states, mobile nav drawer opens/closes, embed loads, etc.)
- No new hardcoded colors/sizes that should have been tokens
- Design-critic (Mode B) returns zero BLOCKER-priority issues
