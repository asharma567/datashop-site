# Datashop design-critic team — shared context

This file is loaded by `ds-designer`, `ds-frontend`, and `ds-evaluator` at the start of every run. It's the long-lived instinct layer so each iteration doesn't have to re-derive basics.

---

## Design references

**Primary:** [hex.tech](https://hex.tech/resources/events/) — mirror the matte-dark + pastel accents + minimal iconography + editorial italic + corner-bracket hover + masked client reel rhythm. We do **not** mirror their dusty rose accent; see palette below.

**Primary palette anchor:** The Datashop podcast YouTube banner — matte warm charcoal background + electric lime accent block with near-black text. This is the two-color statement we pulled into the site palette.
- Channel URL: https://www.youtube.com/@datashop-ai

**Secondary reference:** The original `datashop.ai` Webflow site — take its restraint, whitespace, and three-card rhythm on services. Do **not** mimic its color palette (those are being retired).

---

## Palette — committed, not negotiable mid-run

Defined in `src/styles/global.css` under `@theme`. Use tokens, never hardcode these values.

| Token | Hex | Role |
|---|---|---|
| `--color-bg` | `#26262a` | matte charcoal surface |
| `--color-bg-elev` | `#2f2f34` | card / raised surface |
| `--color-bg-muted` | `#36363b` | hover surface |
| `--color-fg` | `#f6f6f5` | primary text |
| `--color-fg-muted` | `#b0b0ad` | secondary text |
| `--color-fg-subtle` | `#76767a` | eyebrow / meta text |
| `--color-border` | `#3a3a3f` | hairlines |
| `--color-border-strong` | `#50505a` | button borders, dividers |
| `--color-accent` | `#ddff66` | **electric lime — primary pop** |
| `--color-accent-soft` | `#e9ff99` | lime hover / subtle variant |
| `--color-accent-dim` | `#9fb836` | dark lime for on-light use |
| `--color-cool` | `#a8e8ff` | secondary (sparingly) |
| `--color-on-accent` | `#1a1a1c` | near-black for text on lime |

**Explicit anti-palette:** dusty rose (`#f5c0c0`), mint teal (`#5cb198`), pastel peach (`#fcd7a1`), lavender (`#c9c6fa`). All were tried; all replaced. Do not reintroduce without explicit user ask.

---

## Typography

Loaded via Google Fonts in `src/layouts/BaseLayout.astro`:

| Token | Stack | Use |
|---|---|---|
| `--font-display` | Space Grotesk | H1/H2/H3, UI labels, logo wordmark, client-reel fallback text |
| `--font-sans` | Inter | body, long-form prose |
| `--font-editorial` | Instrument Serif (italic) | accent words mid-headline (e.g. *Real business results*, *engagement*, *talk*) |
| `--font-mono` | JetBrains Mono | eyebrow labels (uppercase + tracked), metric readouts, episode numbers |

Headline pattern: sans-serif bold + one italic-serif accent word in lime. Don't overuse the italic — one per headline, max.

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

## Client mention policy

- **Green list — name freely in marketing copy, case studies, about page, logo reel:**
  Bonkbot, Xsolla, Unity, Tapjoy, Bondway, RxSense, NVIDIA (noted as founding-partner pedigree, not a client)

- **Anonymize until explicit sign-off:**
  Sony PlayStation, Bungie, Scopely, Sega. For case studies touching these, use "AAA publisher" and describe the shape of the work without identifying the company. The homepage logo reel and the About page roster currently surface these names — that's user-approved for now, but don't extend it to case-study bylines without checking.

- **Anonymized by default (privacy/compliance):**
  Fraud-detection neobank, healthcare RxSense specifics, financial pipelines. Name the vertical, not the client.

---

## Anti-patterns (learned the hard way)

- No pastel rose / mauve — we pivoted away from Hex's accent color deliberately
- No `hello@datashop.ai` — the contact email is `ajay@datashop.ai`
- "Web3" is out — we use "Crypto" across the site
- No auto-playing video on load. YouTube embeds are click-to-play.
- No iframe grid heavier than 6 tiles on a single index page (browser gets sluggish)
- No "Learn more →" / "Click here" copy — every link's label should describe the destination
- Mobile nav must have a drawer — do not hide the nav links without a hamburger affordance
- Don't commit `designs/active/` or `designs/archive/` (already gitignored)

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
└── contact.astro            # mailto form + direct email fallback

src/components/
├── Nav.astro                # sticky, responsive with mobile drawer
├── Footer.astro
├── ClientReel.astro         # marquee logo strip
└── YouTubeEmbed.astro       # lazy, nocookie iframe

src/layouts/BaseLayout.astro # html/head + nav + main slot + footer
src/styles/global.css        # Tailwind + @theme tokens + .grain, .brackets, .prose
src/consts.ts                # SITE, NAV, CLIENTS
src/content.config.ts        # case-studies, podcasts, services collections
```

---

## What counts as "done" for a typical iteration

- `npm run build` completes clean
- Affected pages render at 1280×900 and 375×812 without layout overflow or hidden-but-accessible-only nav
- Console is clean (ignore YouTube nocookie's `compute-pressure` warning)
- Interactive flows exercised in the brief actually work (contact form mailto href, mobile nav drawer opens/closes, embed loads, etc.)
- No new hardcoded colors/sizes that should have been tokens
- Design-critic (Mode B) returns zero BLOCKER-priority issues
