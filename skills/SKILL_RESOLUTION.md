# ASHWOOD skill resolution

Vendored skill files are repository-local operating instructions for coding agents. Read every selected `SKILL.md` completely before acting. Upstream examples are guidance, not permission to add frameworks or dependencies that conflict with `ASHWOOD_BUILD_SPEC.md`.

## Creative Portfolio stack

Use in this order for `/portfolio` work:

1. `vendor/antigravity/frontend-design/SKILL.md` — define and score the aesthetic direction before code.
2. `vendor/antigravity/interactive-portfolio/SKILL.md` — keep the work discoverable, current, mobile-first, and professionally useful.
3. `vendor/antigravity/design-spatial/SKILL.md` — compose, render, measure, and visually critique the result.
4. `vendor/antigravity/frontend-developer/SKILL.md` — implement responsive behavior, accessibility, image performance, and maintainable interaction.
5. `vendor/antigravity/browser-testing-with-devtools/SKILL.md` — verify the real rendered result, console, accessibility tree, image loading, and performance with whatever equivalent browser tools the environment provides.
6. `vendor/antigravity/deterministic-design/SKILL.md` — final measurement layer; passing gates is necessary but never evidence of taste by itself.

`vendor/antigravity/scroll-experience/SKILL.md` is optional. For the creative Portfolio, restrict it to progressive enhancement: natural scrolling, sparse transform/opacity effects, no hidden content, no scroll hijacking, and complete reduced-motion support.

## Portfolio source precedence

1. Updated GPT Portfolio Site: current visual identity, copy, sequence, long-hair photography, BarelySain, recent work.
2. User-supplied current source assets and metadata.
3. Adobe Portfolio: legacy archive and historical credits only.

Never choose a legacy image as the current hero merely because it is locally available.

## Required design record

Before implementation, record:

- named aesthetic direction;
- DFII score;
- reference observations from the current GPT Site;
- design tokens and spacing rhythm;
- motion philosophy;
- differentiation anchor;
- what is explicitly being preserved from the source.

Before reporting completion, verify at desktop, tablet, and phone widths. Measure horizontal overflow at each width, confirm keyboard lightbox behavior and focus restoration, check image loading and console output, and compare rendered screenshots against the reference. Do not promote production from an unreviewed preview.
