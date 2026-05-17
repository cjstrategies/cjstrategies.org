# cjstrategies.org — Website UI Kit

A clickable, full-page interactive prototype of the Casey Jones Strategies marketing site,
built from `../../colors_and_type.css`. Drop the kit into a real Next.js / Astro / plain-HTML
codebase by translating the components 1:1 — they are intentionally cosmetic and consume tokens.

## Run it

Open `index.html` in any modern browser. Everything is static (no build).

## Components

| File | What it gives you |
| --- | --- |
| `Icon.jsx` | `<Icon name="…" size={20} />` — curated subset of Lucide icons, inlined. |
| `motion.jsx` | `<Reveal>`, `<ScrollProgress>`, `<CursorLight>`, `useMagnetic()`, `useTilt()`. All respect `prefers-reduced-motion`. |
| `primitives.jsx` | `<Button>`, `<Pill>`, `<Eyebrow>`, `<Section>`, `<RailDivider>`, `<Field>`, `<Input>`, `<Textarea>`, `<Select>`, `<BadgeLogo>`, `<Stamp>`. |
| `Nav.jsx` | Sticky navbar with blur-on-scroll, magnetic CTA, mobile drawer. |
| `Hero.jsx` | "Development Without Displacement" hero. Provided seal, animated smoke puffs above the funnel, idle bob, stars + radial wash. |
| `Story.jsx` | Manifesto + 4 story cards (See / Gather / Move / Stay) + challenge band + 3 issue cards. |
| `Strategy.jsx` | The interactive strategy mixer — four lanes, click to swap the panel. |
| `Programs.jsx` | Featured "Resident Power Lab" + 4 program cards on cream paper. |
| `Volunteer.jsx` | Three volunteer category cards + full sign-up form. |
| `Collective.jsx` | Interactive constellation — 5 partner nodes orbit the seal. |
| `Investment.jsx` | Future Community Investment Group placeholder with compliance notice. |
| `Trust.jsx` | Trust & transparency cards + donation impact picker ($25/$50/$100/$250). |
| `Contact.jsx` | Tabbed forms — Get Connected · Volunteer · Investment Group · Partner. |
| `Footer.jsx` | Brand lockup, link columns, socials, big slogan, fine print, credit. |

## What's intentionally cosmetic

- All forms submit to a local "received" state — wire to a real backend, CRM, Google
  Sheet, or Airtable in production.
- The donation picker is a UI surface only. Replace with Donorbox / Stripe / PayPal
  Giving Fund after charitable solicitation review.
- The Investment Group section is informational only. It is not an offer or solicitation
  to invest.

## When designing more pages

- Inherit `colors_and_type.css` first. Everything else follows.
- Use `<Section tone="ink|rich|deep|paper|warm">` to set the surface.
- Use `<Eyebrow>` to label the section, `t-display` for the section headline.
- For cards on dark, use the `--deep-blue` surface + 1px `--rule` border + `--r-4` radius
  + `--sh-3`. For cards on cream, use `--paper-cream` + `--rule-ink` + `--sh-1`.
- Never invent new colors. Never use emoji. Civic glyphs (`•`, `→`, `—`) only.
