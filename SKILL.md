---
name: casey-jones-strategies-design
description: Use this skill to generate well-branded interfaces and assets for Casey Jones Strategies (a 501(c)(3) anti-displacement nonprofit), either for production or throwaway prototypes/mocks. Contains essential design guidelines, colors, type, fonts, locomotive brand assets, and a complete website UI kit for prototyping.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files (especially `colors_and_type.css`, `assets/`, and `ui_kits/website/`).

If creating visual artifacts (slides, mocks, throwaway prototypes, etc.), copy assets out of `assets/` and create static HTML files for the user to view. Import `colors_and_type.css` into any new HTML so type, color, and motion tokens are available; then use the JSX components in `ui_kits/website/` as exemplars for nav, hero, story-cards, strategy-mixer, programs, volunteer forms, the collective constellation, the investment-group section, and the trust/transparency layout.

If working on production code, you can copy assets and read the rules in `README.md` to become an expert in designing with this brand. Key tenets to enforce, in order:

1. **"Development Without Displacement"** is the message — never dilute it. One headline per section. Calm urgency.
2. **Civic + editorial + Americana railroading.** Public Sans body, DM Serif Display headlines, IBM Plex Mono eyebrows. The locomotive seal is the only illustration that should feel hand-drawn.
3. **Compliance copy is part of the design.** Use the verbatim disclaimers from the README (investment, charitable solicitation, EIN line). Do not bury them.
4. **Never use emoji.** Use Lucide stroke icons or unicode civic glyphs (`•`, `→`, `—`).
5. **Restraint with color.** Gold is the only accent on dark; river-blue is the only accent on paper; rust is used once per page maximum.
6. **Steam locomotive, not a tractor.** When rendering the brand mark, keep the round boiler, tall funnel, and cowcatcher. Animate smoke puffs and rail motion lines subtly. Respect `prefers-reduced-motion`.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions about audience and surface (one-pager? campaign landing? grant report? volunteer flyer?), and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
