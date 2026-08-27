# Portfolio Design Record — Editorial Systems Portfolio

Status: implementation direction for the first current-identity `/portfolio` reconstruction.

## Purpose

Reconstruct `/portfolio` as the creative-ventures portfolio defined by `ASHWOOD_BUILD_SPEC.md`: modeling first, then other creative disciplines only when real material exists. The page must read as authored creative work, not as a SaaS/product index.

Primary visitor outcome: within roughly 30 seconds, a visitor should understand who TK Ashwood is creatively, see current representative work, distinguish recent work from archive material, and have an obvious path to make contact or continue into ASHWOOD.

## Named aesthetic direction

**Editorial Systems Portfolio**

Dominant direction: editorial / magazine.
Secondary quality: refined minimalism.

The visual language should feel like a contemporary fashion/editorial portfolio with disciplined systems thinking underneath it. Photography carries the emotional weight; typography, spacing, and sequencing provide authorship. Technology-product UI conventions are explicitly out of scope for this route.

## DFII

- Aesthetic Impact: 4/5 — large photographic scale and asymmetric editorial composition can be memorable without effects.
- Context Fit: 5/5 — directly matches modeling, fashion, campaign, and creative-venture material.
- Implementation Feasibility: 4/5 — achievable in the current static HTML/CSS architecture; lightbox behavior may require a small amount of native JavaScript.
- Performance Safety: 4/5 — safe if responsive image sizing, lazy loading, and restrained motion are enforced.
- Consistency Risk: 3/5 — expressive asymmetry requires disciplined responsive rules and rendered verification.

**DFII: 14 — execute with discipline.**

## Source precedence and reference observations

Source precedence remains:

1. Updated GPT Portfolio Site — authoritative for current visual identity, copy, sequencing, recent long-hair photography, BarelySain, and current work.
2. User-supplied current assets and metadata.
3. Adobe Portfolio — legacy archive and historical credits only.

Verified repository-level observations that may guide implementation now:

- The current identity must lead with recent long-hair imagery rather than fade-era legacy photography.
- BarelySain is the latest work and must remain distinct from unrelated work.
- Strong DTLA knit-sweater imagery should be preserved without repetitive near-duplicates.
- Image `6508` is the preferred hero once its correct source is verified.
- Malibu coastline photography must not be classified as BarelySain without source evidence.

**Source-fidelity gate:** the authoritative GPT Portfolio could not be fetched through the current chat web path during creation of this record. Exact visual observations, copy transcription, final image sequence, credits, and asset selection must be verified from that source before the reconstruction is called faithful or production-ready. Do not invent missing source details.

## Design system snapshot

### Typography

Use typography as editorial structure rather than UI chrome.

- Display: one expressive editorial face, selected only if it can be loaded legally and performantly; otherwise use a high-quality locally available serif fallback strategy rather than adding a framework or font package.
- Body/navigation: one restrained sans-serif companion.
- Avoid Arial/Inter/Roboto as the final portfolio typography.
- Use large display scale selectively; photography remains primary.

Final font selection is deferred until the authoritative source is visually inspected so the reconstruction does not drift from the current rebrand.

### Color tokens

Keep the existing warm paper/ink relationship as a provisional base until source inspection confirms or replaces it:

- `--paper`: warm near-white
- `--ink`: near-black
- `--muted-ink`: reduced-emphasis text
- `--rule`: low-contrast divider
- `--accent`: optional and source-derived; no invented SaaS accent palette

Color should support the photography rather than compete with it.

### Spacing rhythm

Use a restrained editorial rhythm rather than card-grid spacing:

- micro: 4–8px
- text/internal: 12–24px
- section: 48–96px
- major editorial break: 12–20vh where composition benefits

Spacing may be intentionally asymmetric, but accidental alignment drift must be caught in rendered review.

### Motion philosophy

Natural document scrolling only.

Allowed:
- restrained opacity/transform entrance where it improves orientation;
- subtle image/link hover states on pointer devices;
- lightbox open/close transitions;
- reduced-motion support.

Not allowed:
- scroll hijacking;
- content delayed behind animation;
- decorative parallax competing with photography;
- custom motion added merely to make the page feel interactive.

## Differentiation anchor

**Photographic scale + editorial asymmetry.**

If the ASHWOOD wordmark were removed from a screenshot, the page should still be recognizable through a sequence of large, differently scaled images, deliberate negative space, restrained captions/credits, and typography that behaves like an editorial spread rather than a stack of website cards.

This avoids generic UI by treating the work itself as the interface instead of packaging every item into equal cards, tiles, pills, or dashboard components.

## What is explicitly preserved

- ASHWOOD as the site-level umbrella identity.
- TK Ashwood as the established public/professional identity.
- The separation between creative Portfolio and BUILD JOURNAL/SaaS work.
- Current GPT Portfolio source hierarchy and current-image precedence.
- BarelySain as distinct recent work.
- Existing accessible ASHWOOD route navigation unless source inspection justifies a portfolio-specific variation that remains coherent with the site.
- Semantic HTML, visible keyboard focus, responsive behavior, and accessible image enlargement.

## First implementation composition

The first faithful modeling checkpoint should aim for this editorial sequence, subject to source verification:

1. Minimal ASHWOOD masthead / Portfolio context.
2. Current-identity opening: TK Ashwood + concise creative descriptor + verified recent hero photography.
3. Recent work sequence led by current long-hair imagery.
4. BarelySain as a distinct editorial project grouping with verified credits/context.
5. Additional selected modeling/fashion/campaign work using deduplicated image sequences, including the strong DTLA knit-sweater selection where source-appropriate.
6. Clearly subordinate archive/earlier work only when useful and accurately labeled.
7. Simple contact/continue path and ASHWOOD navigation.

Product links for ALVIRA, Ailhat, Agent Control, and Ledgato do not belong in the creative portfolio body; those move conceptually to BUILD JOURNAL.

## Implementation constraints

- Stay in native HTML/CSS/JS unless demonstrated need requires otherwise.
- Do not introduce a framework, CMS, animation library, or abstraction for this pass.
- Prefer responsive `srcset`/`sizes` when usable source variants exist.
- Lazy-load below-the-fold imagery.
- Preserve aspect ratios to avoid layout shift.
- Lightbox must be keyboard operable, close with Escape, expose meaningful accessible labels, and restore focus to the originating image/link.
- Header/nav rows must wrap safely.
- Use `overflow-x: clip` only as a defensive backstop; root causes of overflow still must be found.

## Verification gates before completion

Do not call the implementation complete until all of the following have runtime evidence:

- authoritative GPT source visually inspected and final source sequence/credits reconciled;
- desktop screenshot reviewed;
- tablet screenshot reviewed;
- phone screenshot reviewed;
- horizontal overflow measured at desktop, <=1024px, and approximately 390px with result `0`;
- keyboard navigation verified;
- lightbox keyboard behavior and focus restoration verified;
- image loading checked for correct sizing/lazy loading;
- accessibility structure and names checked;
- console errors and warnings resolved;
- broken links checked;
- preview reviewed before any production promotion.

## Production rule

This branch/PR is a reconstruction workspace. It must not be described as production-ready or promoted merely because the code is complete. Source fidelity and rendered verification are blocking gates.
