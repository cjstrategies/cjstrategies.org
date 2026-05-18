# Casey Jones Strategies — Design System

> **Development Without Displacement.**
>
> A purpose-built civic design system for Casey Jones Strategies (CJS), a 501(c)(3) nonprofit working at the intersection of housing justice, economic empowerment, volunteer action, grassroots strategy, and future community-aligned investment.

This package is the brand operating system. It contains type, color, motion, voice, iconography, and a complete UI kit so any agent or designer can produce on-brand artifacts — from a one-pager to a full campaign — without re-deriving the brand from scratch.

---

## What's in this folder

```
├── README.md                  ← you are here
├── SKILL.md                   ← Claude Skill manifest (cross-compatible w/ Claude Code)
├── colors_and_type.css        ← all design tokens (CSS variables + semantic HTML)
├── assets/
│   ├── logo-color.png         ← color locomotive seal (1024×1024 raster, original upload — primary brand mark)
│   └── logo-mono.png          ← monochrome locomotive seal (1024×1024 raster, for dark surfaces)
├── preview/                   ← cards rendered in the Design System tab
└── ui_kits/
    └── website/               ← the full cjstrategies.org site
        ├── README.md
        ├── index.html         ← interactive long-page site
        ├── Nav.jsx, Hero.jsx, Story.jsx, Strategy.jsx,
        ├── Programs.jsx, Volunteer.jsx, Collective.jsx,
        ├── Investment.jsx, Trust.jsx, Contact.jsx, Footer.jsx
        └── (motion + form utilities)
```

---

## Source materials referenced

| Source | Location | Notes |
| --- | --- | --- |
| GitHub repo | [`cjstrategies/cjstrategies.org`](https://github.com/cjstrategies/cjstrategies.org) | Currently a placeholder (`README.md` only). The brand and copy in this system come from the written brief, not the repo. Future contributors should re-check the repo for any updated source. |
| Raster logos | `uploads/logo clr.png`, `uploads/logo wht.png` | Original locomotive seal artwork. Imported to `assets/logo-color.png` / `assets/logo-mono.png`. |
| Brand brief | (system prompt) | Color palette, voice, required sections, copy, and motion spec are taken verbatim from the project brief. Treat this README + `colors_and_type.css` as the canonical condensed version. |

If you have view-access to the GitHub repo and find new content there, prefer it over this system — and please update this README with the new path.

---

## The brand in 30 seconds

**Casey Jones Strategies** is a movement nonprofit. The visual language sits at the intersection of three references:

1. **Civic design** — clear, durable, ledger-like. Public Sans (USWDS), hairline rules, mono labels, plenty of white-space-as-receipt.
2. **Editorial / movement poster** — DM Serif Display for big confident headlines. Strong vertical rhythm, generous section spacing, single dominant message per screen.
3. **Vintage Americana railroading** — the steam-locomotive seal, warm cream paper, brass-gold accents, river-blue water tones. Friendly, rooted, hand-touched — never theme-park kitsch.

Three words: **rooted, civic, forward-moving.**

---

## CONTENT FUNDAMENTALS

How CJS talks — distilled from the brief copy.

### Stance
- **Plural and protective.** The subject is almost always *the community*, *residents*, *neighbors* — rarely the organization itself. CJS positions itself as a partner, not a savior. ("We help residents… build power.")
- **Calm urgency.** The work is urgent (displacement is happening *now*) but the tone is steady, never panicked or breathless. Avoid hype words like "revolutionary," "disruptive," "unprecedented."
- **Action-shaped.** Headlines are imperatives or declarations, not questions. "Turn community care into real capacity." "Trust is built with receipts."
- **Legally honest.** Every section that touches money, investment, or advice carries a plain-language disclaimer. Compliance copy is *part of the design*, not buried fine print.

### Voice rules

| Rule | Example | Don't |
| --- | --- | --- |
| Sentence case for body, headline case for proper nouns only | "Future Community Investment Group" | "Future Community Investment GROUP" |
| Short, declarative sentences. ~10–18 words. | "Neighborhood change should not become community removal." | Long compound paragraphs |
| Active verbs at the start of CTAs | "Get Connected", "Volunteer Sign Up", "Join Interest List" | "Click here to find out more" |
| "We" (the org) + "you" (visitor) — sparingly | "We partner with residents…" | "Our amazing team is on a mission…" |
| Plain over jargon | "displacement pressure", "rent increases" | "demographic transition vectors" |
| Numbers spelled out under 10 unless legal/EIN | "four lanes", "EIN: 33-1380624" | "4 lanes" |

### Casing
- **Headlines:** sentence case with a period. *"Tools for people who refuse to be pushed out."* The period is intentional — it asserts.
- **Eyebrows / labels:** UPPERCASE with wide tracking (0.18em) in IBM Plex Mono. *"COMMUNITY EDUCATION • GRASSROOTS STRATEGY • RESIDENT-LED PROGRESS"*
- **Buttons:** Sentence case. *"Get connected"*, *"Volunteer sign up"*. Never ALL CAPS in buttons.
- **Trust pills:** mixed; mono uppercase OK for legal markers like "501(C)(3) NONPROFIT" and "EIN: 33-1380624".

### Vibe
- The voice of a thoughtful organizer who has done a lot of community work. Warm but precise. Knows the law, knows the block.
- Emoji: **never.** Use civic glyphs (•, →, —) or stroke icons instead.
- Em-dashes are encouraged for civic-editorial rhythm: "A digital front porch, a strategy room, and a movement poster — clean enough to trust, strong enough to remember."
- Three-word lists. "See. Gather. Move. Stay." "Protect. Preserve. Build." Three-beat patterns mirror the train cadence.

### Required compliance copy (use verbatim)
- *"Site content is educational and informational. It does not provide legal, financial, tax, or investment advice."*
- *"This page is informational only. Nothing here is an offer to sell securities or a solicitation to invest."*
- *"501(c)(3) nonprofit • EIN: 33-1380624 • Educational content only"*

---

## VISUAL FOUNDATIONS

### Color system

The full palette is in `colors_and_type.css`. Conceptual roles:

| Role | Token | Hex | Use |
| --- | --- | --- | --- |
| Ink (primary bg) | `--ink` | `#07121d` | Default page background. Night sky behind the train. |
| Rich navy (elev 1) | `--rich-navy` | `#102235` | Section bands inside `--ink`. |
| Deep blue (elev 2) | `--deep-blue` | `#173044` | Card surfaces on dark sections. |
| River blue (link/water) | `--river-blue` | `#1f6f8b` | Hyperlinks, water/glow accents, sage-adjacent. |
| Warm cream (paper) | `--warm-cream` | `#f5ecd9` | Light surface for story / trust sections. |
| Paper cream (lightest) | `--paper-cream` | `#fffaf0` | Lightest paper. Default fg on dark. |
| Muted gold (accent) | `--gold` | `#d9a441` | Eyebrows, brass accents, focus rings, primary CTA. |
| Sage green (preserve) | `--sage` | `#8fae90` | "Stay/preserve" lane, calmer surfaces. |
| Clay rust (urgent) | `--rust` | `#b8643f` | "See/displacement", warning, fire glyph. |

**Rules:**
- Default surface is **dark** (`--ink`). Light sections (`--paper-cream`) are explicit *paper inserts* — used for the Mission/Story and Transparency sections to break rhythm.
- Gold is the ONLY pure accent on dark surfaces. River-blue is the ONLY accent on paper. Never both in the same card.
- Rust is used **once** per page — for the displacement-pressure callout. Restraint makes it land.
- Never gradient-blend two brand colors. A single radial wash of `--ink → --rich-navy` is the only gradient allowed (used in hero).

### Type system

- **Display:** DM Serif Display — italics allowed sparingly for emphasis in pull-quotes only.
- **Body:** Public Sans 400. The civic system font. Width-comfortable, slightly humanist.
- **Mono / labels:** IBM Plex Mono 400 for eyebrows, trust pills, EIN/legal markers, numeric values.
- **Files:** all three families ship with the system as TTFs in `fonts/`, loaded via `@font-face` in `colors_and_type.css`. Currently only weight 400 (normal + italic) is provided per family — heavier weights (500/600/700) used in headlines and buttons are **browser-synthesized** via `font-synthesis: weight style`. This works well across modern browsers but is slightly less crisp than true cut weights. If CJS later ships proper 500/600/700 files, drop them into `fonts/` and add matching `@font-face` blocks.

### Spacing & rhythm
- 4pt baseline grid. Section vertical rhythm is `clamp(80px, 9vw, 160px)` — generous, civic.
- Container max-width: 1240px. Prose max-width: 64ch.
- One CTA cluster per section. One headline per section. Negative space is a feature.

### Backgrounds & surfaces
- **No photographic backgrounds** in the system. Photos appear inside aspect-ratio cards with `--warm-cream` borders.
- **No noise textures or gradients** other than the hero radial wash.
- **Hairline rules** (1px `--rule`) are the primary section separator — like ledger lines.
- **Civic patterns:** a horizontal "rail" line motif (long dash + double dot) appears as a section divider; a subtle dotted grid (4px) shows behind cards in the strategy mixer.

### Borders, cards, shadows
- Cards on dark: `--deep-blue` fill, 1px `--rule` border, `--r-4` radius (14px), `--sh-3` shadow.
- Cards on cream: `--paper-cream` fill, 1px `--rule-ink` border, `--r-4` radius, `--sh-cream` shadow.
- Trust pills: `--r-full`, 1px border, mono micro caps.
- Inputs: `--r-2` (4px), 1.5px border `--rule-strong`, no shadow.
- Buttons: `--r-3` (8px), no shadow at rest; lifted on hover with `--sh-3`.

### Hover, press, focus
- **Hover (button primary):** shifts up 2px, gains `--sh-3`, gold deepens 4% via underlying transparency.
- **Hover (button ghost):** border brightens to `--rule-strong`, fg → paper-cream.
- **Hover (card):** 1.5° tilt (rotateX/Y based on cursor), shadow deepens. Magnetic — translates 4–8px toward cursor.
- **Press:** scale(0.985), 80ms.
- **Focus:** 2px solid `--gold` ring, 3px offset. No box-shadow rings (a11y-clear).

### Motion
- **Easing:**
  - `--ease-civic` (`cubic-bezier(.22,.61,.36,1)`) for fades & reveals — confident, no overshoot.
  - `--ease-rail` for swaps / mixer changes — like rail switching.
  - `--ease-spring` for magnetic button motion — small overshoot allowed.
- **Reveal-on-scroll:** 24px translateY + opacity, 640ms, `--ease-civic`, staggered 80ms.
- **Locomotive idle:** train bounces ±2px every 3.2s, smoke puffs every 1.6s (3 stacked SVG circles fading + rising).
- **Cursor light:** desktop only, 480px radial gold at 6% opacity following cursor over hero.
- **Scroll progress:** 2px gold bar pinned to top, transforms `scaleX`.
- **Reduced motion:** all transforms set to 0.001ms via `prefers-reduced-motion`. Smoke and idle bounce disabled.

### Transparency & blur
- Used sparingly. Sticky nav background uses `backdrop-filter: blur(20px)` over `rgba(7,18,29,0.72)` once scrolled.
- No frosted glass elsewhere.

### Radii
- Almost everything is **0–8px**. The largest radius is 22px on hero-feature cards. Trust pills and avatars are the only full circles. This restraint reinforces the "ledger" civic feel.

### Imagery direction
- Warm cool-leaning navy, with cream paper accents. Black-and-white photography preferred when available, never sepia.
- Grain: optional 1–2% noise on the hero background only.
- Hand-touched but not "scrappy" — the locomotive seal is the only illustration that should ever feel hand-drawn.

---

## ICONOGRAPHY

Casey Jones Strategies uses a **minimal, civic icon vocabulary** — stroke-based, 1.5px stroke, 24px frame. The goal is the readability of municipal signage.

- **Source:** [Lucide](https://lucide.dev/) (MIT-licensed, CDN-available). Closest match to the civic-stamp aesthetic, with consistent stroke weight and rounded joints.
- **Embed:** CDN at `https://unpkg.com/lucide@latest/dist/umd/lucide.js`. Selected icons are *also* copied into `assets/icons/` as SVG so the system works offline.
- **Color:** icons inherit `currentColor`. Default `--accent` (gold) on dark sections; `--ink-fg` on cream sections.
- **Stroke weight:** 1.5px (Lucide default).
- **Size:** 16 / 20 / 24 / 32. Hero glyphs only at 48+.

**Substitution flag:** the brand has no custom icon set. Lucide is a deliberate proxy. If CJS later commissions custom icons, replace `assets/icons/` and remove the CDN link.

### Glyph mapping (the canonical set)

| Concept | Lucide name | Where used |
| --- | --- | --- |
| See / observe | `eye` | Story card #1 |
| Gather / community | `users-round` | Story card #2 |
| Move / strategy | `route` | Story card #3 |
| Stay / preserve | `tree-pine` | Story card #4 |
| Learn | `book-open` | Strategy lane |
| Connect | `link` | Strategy lane |
| Preserve | `landmark` | Strategy lane |
| Prepare | `compass` | Strategy lane |
| Volunteer | `hand-heart` | Volunteer section |
| Investment | `coins` | Investment section |
| Donate | `heart-handshake` | Trust section |
| Privacy | `shield-check` | Trust card |
| Legal | `scale` | Trust card |
| Mail | `mail` | Footer / contact |
| External | `arrow-up-right` | Inline links |

### Use of unicode / glyphs
- Bullet dot `•` is the canonical eyebrow separator. *"COMMUNITY EDUCATION • GRASSROOTS STRATEGY • RESIDENT-LED PROGRESS"*
- Em-dash `—` (not hyphen) for sentence breaks.
- Right-arrow `→` allowed inline at the end of CTAs ("Join interest list →").
- **No emoji. Ever.**

### Logo

- **Master mark:** the round seal — a vintage cartoon steam locomotive in front of mountains, "CASEY JONES" wrapped over the top, "STRATEGIES" anchoring the bottom.
  - Color: deep navy on cream/white. Single-color brand.
  - Two raster versions ship with the system:
    - `assets/logo-color.png` — dark navy seal on white. Use on cream/paper surfaces, light mode, print, and as the dominant hero mark.
    - `assets/logo-mono.png` — cream seal on white. Use on dark/ink surfaces (small navbar/footer marks). The raster already has a transparent-equivalent flat fill so it composites cleanly over `--ink`.
  - These raster files are the **only** brand-mark sources in the system. Do not redraw the locomotive as SVG, do not crop the train out of the seal, and do not separate the wordmark from the round badge.
- **Animated hero:** the master seal is used at large scale in the hero, with a gentle 3.2s vertical bob (`±2px`) and a sibling smoke-puff layer (SVG circles, cream, fading-rising) positioned above the funnel. Idle animation only — no rotation, no skew, no scale.
- **Don't:** never recolor the seal in gold or rust. Never set it on a photographic background. Never extract only the train and use it without the circle. Never apply drop-shadows directly to the seal — its built-in line-weight is the shadow.

---

## Index — go deeper

| File | What it is |
| --- | --- |
| [`colors_and_type.css`](colors_and_type.css) | Canonical token export. Import this and you have the brand. |
| [`SKILL.md`](SKILL.md) | Skill manifest for Claude Code / Skills runtime. |
| [`assets/logo-color.png`](assets/logo-color.png) | Master seal — navy locomotive on cream. Use on light surfaces. |
| [`assets/logo-mono.png`](assets/logo-mono.png) | Master seal — cream locomotive. Use on dark surfaces. |
| [`preview/`](preview) | Design-system tab cards (type, color, motion, components). |
| [`ui_kits/website/`](ui_kits/website) | The full cjstrategies.org site as an interactive prototype. |

---

## Open caveats & asks (for the brand owner)

1. **Font files installed.** DM Serif Display, Public Sans, and IBM Plex Mono ship in `fonts/` at weight 400 only. Heavier weights are browser-synthesized. If you have access to true 500/600/700 cuts (especially for Public Sans which gets the most heavy-weight usage in buttons and headings), drop them in and we'll wire them up.
2. **Photography:** no photos were provided. Real resident photography (in B&W, full-bleed) would dramatically lift the Story and Volunteer sections. Please send a starter set of 8–12 images.
3. **Codebase mount:** the attached `cjstrategies.org` folder mounted empty; the referenced GitHub repo also contains only a placeholder README. All copy and structure here is taken verbatim from the written brief. If a real codebase exists later, re-import and we can align this system to it.
4. **Compliance review:** the Future Investment Group + Donation sections include placeholder disclaimer copy that should be reviewed by counsel before any live launch.

---

> *"This is not just a website. It is a public signal: the community is organized, awake, and building forward."*
