# Portfolio Design Record — Editorial Systems Portfolio

Status: implementation direction for the first current-identity `/portfolio` reconstruction.

## Purpose

Reconstruct `/portfolio` as the creative-ventures portfolio defined by `ASHWOOD_BUILD_SPEC.md`: modeling first, with other creative disciplines included only when real material exists. The page must read as authored creative work, not as a SaaS/product index.

Primary visitor outcome: within roughly 30 seconds, a visitor should understand who TK Ashwood is creatively, see current representative work, distinguish recent work from archive material, and have an obvious booking/contact path.

## Named aesthetic direction

**Editorial Systems Portfolio**

Dominant direction: editorial / magazine.
Secondary quality: refined minimalism.

The implementation should preserve the current GPT Portfolio’s visual grammar rather than reinterpret it: near-black canvas, warm off-white typography, fluorescent green and magenta accents, oversized editorial type, numbered sections, thin rules, high-contrast photography, large negative space, and asymmetric image composition.

## DFII

- Aesthetic Impact: 4/5
- Context Fit: 5/5
- Implementation Feasibility: 4/5
- Performance Safety: 4/5
- Consistency Risk: 3/5

**DFII: 14 — execute with discipline.**

## Verified source observations

The updated GPT Portfolio has now been visually inspected through user-supplied browser evidence covering the hero, introduction, BarelySain, selected work, runway, About, model profile, selected experience, music, contact, and footer.

Verified visual/content characteristics:

- Hero uses current long-hair BarelySain photography and oversized `TK Ashwood` typography.
- Header navigation is compact and portfolio-specific: Work, About, Music, Details, Book TK.
- Hero descriptor: “A distinct presence for fashion, editorial, runway, and image-led storytelling.”
- Opening statement: “Individuality isn’t a detail. It’s the whole image.”
- BarelySain is section `01 / Latest Work` and is treated as the newest chapter, with Malibu + DTLA / Los Angeles context and Cashden campaign credit.
- Selected Work is section `02`; this reconstruction intentionally reframes earlier imagery as archive + range so fade-era work is not mistaken for current appearance.
- Runway is section `03 / Runway` with the `On the walk` framing.
- About is section `04 / About` and uses “Presence with a point of view.”
- Model Profile is section `05 / Model Profile` with digitals + booking details.
- Selected Experience is section `06`.
- Music is section `07 / Music`, presenting t.kap and debut single `IN ME` as a distinct second creative practice.
- Contact is section `08 / Contact`, with WHO Management agency booking context.
- Footer distinguishes `TK Ashwood · Model` from `t.kap · Recording artist`.

## Source precedence

1. Updated GPT Portfolio Site — authoritative for current visual identity, copy, sequencing, current photography, BarelySain, and current work.
2. User-supplied current assets and metadata.
3. Adobe Portfolio — legacy archive and historical credits only.

The current identity must lead with recent long-hair imagery. Older short-hair/fade material may remain only as clearly contextualized range/archive work. BarelySain remains distinct from unrelated work.

## Design system snapshot

### Typography

Typography is structural and oversized rather than decorative. The current implementation uses a restrained Helvetica-style sans stack as a source-faithful temporary choice until exact font provenance is verified. Do not introduce a font dependency merely for novelty.

### Color tokens

- `--paper`: near-black `#090909`
- `--ink`: warm off-white `#f0eee7`
- `--muted`: reduced-emphasis gray
- `--green`: fluorescent acid green
- `--magenta`: vivid magenta
- `--line`: low-contrast off-white divider

Accents are sparse and subordinate to photography.

### Spacing rhythm

Use large editorial breaks, asymmetric whitespace, and variable image scale rather than a regular product-card grid. Major sections should feel like spreads rather than UI modules.

### Motion philosophy

Natural document scrolling only. Smooth anchor scrolling is allowed with reduced-motion fallback. No scroll hijacking, decorative parallax, or motion that competes with photography.

## Differentiation anchor

**Photographic scale + editorial asymmetry.**

The page should remain recognizable without the logo through extreme type scale, negative space, asymmetric image sequencing, restrained captions, fluorescent accents, and thin editorial rules.

## Approved content architecture

1. Hero — TK Ashwood + current creative descriptor + current BarelySain hero.
2. Manifesto statement — “Individuality isn’t a detail. It’s the whole image.”
3. `01 / Latest Work` — BarelySain, treated as one featured campaign with a deeper image sequence.
4. `02 / Selected Work` — explicitly archive + range, not current digitals.
5. `03 / Runway` — `On the walk`.
6. `04 / About` — concise identity and creative point of view.
7. `05 / Model Profile` — current digitals, booking measurements, location, travel, representation.
8. `06 / Selected Experience` — compact verified credits layer.
9. `07 / Music` — t.kap / `IN ME`, visually distinct but still within the creative portfolio.
10. `08 / Contact` — booking hierarchy, WHO Management, direct/creative contact, Instagram.
11. Footer — `TK®`, model / recording-artist identity split.

Product links for ALVIRA, Ailhat, Agent Control, Ledgato, and other SaaS work do not belong in the creative portfolio body; that work belongs in BUILD JOURNAL.

## Image policy for this branch

The additional BarelySain shoot is still uploading to Google Drive. Until the actual source files are available:

- do not use stock photography;
- do not fabricate or scrape replacement campaign imagery;
- reserve deliberate asset frames in the layout;
- use existing verified source assets only when their provenance is clear;
- select the final BarelySain hero/main edit/extended campaign only after reviewing the full upload;
- replace current short-hair digitals with current long-hair digitals before production promotion.

## Implementation constraints

- Stay in native HTML/CSS/JS unless demonstrated need requires otherwise.
- Do not introduce a framework, CMS, animation library, or abstraction for this pass.
- Preserve semantic headings, keyboard-visible focus, responsive wrapping, and at least 44px primary action targets.
- Use responsive image sizing and lazy loading once real assets are integrated.
- Lightbox work begins only when image assets exist; it must be keyboard operable, close with Escape, and restore focus.
- `overflow-x: clip` is a defensive backstop only; rendered overflow still must be measured.

## Verification gates before completion

Do not call the reconstruction complete until all of the following have runtime evidence:

- final BarelySain asset edit reconciled with uploaded source files;
- verified current digitals/measurements/contact details;
- desktop screenshot reviewed;
- tablet screenshot reviewed;
- phone screenshot reviewed;
- horizontal overflow measured at desktop, <=1024px, and approximately 390px with result `0`;
- keyboard navigation verified;
- lightbox keyboard behavior and focus restoration verified after assets are integrated;
- image loading checked for correct sizing/lazy loading;
- accessibility structure and names checked;
- console errors and warnings resolved;
- broken links checked;
- Vercel preview reviewed before any production promotion.

## Production rule

This branch/PR is a reconstruction workspace. It remains draft and must not be merged or promoted merely because the image-independent HTML/CSS is implemented. Asset selection, source fidelity, and rendered verification are blocking gates.
