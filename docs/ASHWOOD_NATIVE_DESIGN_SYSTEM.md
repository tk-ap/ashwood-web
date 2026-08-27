# ASHWOOD Native Design System

Status: foundation reference
Source evidence: rendered `ashwood-info.vercel.app` landing page reviewed 2026-08-26.

## Aesthetic direction

**Quiet shell, expressive content.**

ASHWOOD itself should feel restrained, architectural, and authored: warm paper, black ink, extreme negative space, small tracked identity type, one decisive display statement, and almost no decorative chrome. The content route supplies the expression.

## Identity thesis

**I follow ideas wherever they go.** is the personal operating principle. It explains movement across modeling, music, technology, product building, creative direction, and future forms without forcing those practices into a single maker category.

**One point of view. Many forms.** is the underlying ASHWOOD philosophy. It expresses the connective tissue across those forms rather than claiming authorship of every image or artifact presented on the site.

Landing hierarchy:

- ASHWOOD
- Tahlia Ashwood Peart
- `I follow ideas / wherever they go.`
- `One point of view. Many forms.`
- Portfolio · Build Journal · About

## Shared visual grammar

- Warm off-white paper and near-black ink are the root palette.
- ASHWOOD wordmark is small, uppercase, tracked, and structurally consistent.
- Site geometry uses disciplined gutters and a generous maximum canvas.
- Display typography is oversized, low-line-height, and deliberately sparse.
- Metadata is small uppercase type with tracking.
- Rules are thin and quiet.
- Navigation should feel placed, not componentized.
- Negative space is an active design element.
- Avoid generic SaaS cards, gradients, pill-heavy UI, decorative dashboards, and unnecessary chrome.
- Native HTML/CSS first. JavaScript only when interaction requires it.

## Route expressions

### Home — Identity
Warm paper. Maximum negative space. Minimal copy. The canonical composition pairs the personal operating principle `I follow ideas wherever they go.` with the quieter ASHWOOD thesis `One point of view. Many forms.`

### Portfolio — Image
Inherits ASHWOOD geometry, masthead proportions, metadata logic, spacing rhythm, focus behavior, and responsive principles. It may invert to a dark editorial canvas. Photography is the dominant material. TK Ashwood is the creative identity inside the ASHWOOD parent shell; the portfolio may present TK as subject/muse as well as collaborator, so site language must not imply TK photographed every image.

### Build Journal — Thought / Evidence
Begins with ASHWOOD-level quiet and authorship. The archive may become denser or alternate paper/dark evidence sections as chronology accumulates. Dates, reasoning, evidence, screenshots, annotations, and artifacts replace photography as the dominant material.

## Front-end principles

1. Shared tokens belong in `/styles.css`.
2. Route CSS should override expression, not reinvent fundamentals.
3. Prefer fluid `clamp()` typography and spacing over breakpoint piles.
4. Keep semantic heading hierarchy, visible focus states, keyboard navigation, and reduced-motion behavior.
5. Avoid duplicating masthead/nav/footer geometry across route styles when a shared primitive can serve it.
6. Rendered desktop/tablet/mobile verification is required before calling a route visually complete.

## Design quality target

- Distinctiveness: high through restraint and authored composition, not ornament.
- Fidelity: preserve the clean ASHWOOD landing identity while allowing Portfolio and Journal to remain different mediums.
- Intentionality: every route should be recognizable as ASHWOOD before its content-specific styling becomes apparent.
