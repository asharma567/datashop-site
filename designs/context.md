# Datashop design-critic team — shared context

Loaded by `ds-designer`, `ds-frontend`, and `ds-evaluator` at the start of every run. This is the load-bearing core: tokens and hard rules only. References, voice, layout language, and process notes live in `designs/context-appendix.md`.

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

## Font tokens

| Token | Stack | Use |
|---|---|---|
| `--font-display` | Space Grotesk | H1/H2/H3, UI labels, logo wordmark, client-reel fallback text |
| `--font-sans` | Inter | body, long-form prose |
| `--font-editorial` | Instrument Serif (italic) | accent words mid-headline — one per headline, max |
| `--font-mono` | JetBrains Mono | eyebrow labels (uppercase + tracked), metric readouts, episode numbers |

---

## Hard rules

- Use tokens for colors/radii/fonts — never hardcode values that have a token
- No pastel rose / mauve — we pivoted away from Hex's accent color deliberately
- No `hello@datashop.ai` — the contact email is `ajay@datashop.ai`
- "Web3" is out — we use "Crypto" across the site
- No auto-playing video on load. YouTube embeds are click-to-play.
- No iframe grid heavier than 6 tiles on a single index page (browser gets sluggish)
- No "Learn more →" / "Click here" copy — every link's label should describe the destination
- Mobile nav must have a drawer — do not hide the nav links without a hamburger affordance
- Don't commit `designs/active/` or `designs/archive/` (already gitignored)
- Avoid buzzword copy: no "revolutionary", "cutting-edge", "transformative", "leveraging synergies"

### Client mention policy

- **Green list — name freely:** Bonkbot, Xsolla, Unity, Tapjoy, Bondway, RxSense, NVIDIA (founding-partner pedigree, not a client)
- **Anonymize until explicit sign-off:** Sony PlayStation, Bungie, Scopely, Sega — use "AAA publisher" in case studies. Homepage reel + About roster naming is user-approved for now; don't extend to case-study bylines without checking.
- **Anonymized by default (privacy/compliance):** fraud-detection neobank, healthcare RxSense specifics, financial pipelines. Name the vertical, not the client.
