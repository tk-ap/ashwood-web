# ASHWOOD v2 — Home Design Record

Status: V2-B implementation record  
Branch: `ashwood-v2`

## Named direction

**Living Editorial Field — first pass**

Dominant direction: editorial / severe minimal.  
Secondary quality: responsive field / quiet discovery.

The page should feel authored and inhabited, not like a portfolio template and not like a software dashboard.

## Purpose

The homepage must let a visitor:

1. meet TK / ASHWOOD first;
2. understand what is moving now;
3. enter Modeling, Music, Builds, or About without friction;
4. discover that ASHWOOD contains deeper capabilities if they pay attention.

The hotspot is not part of the task path. It is a reward after the page already works.

## DFII

- Aesthetic impact: 4/5
- Context fit: 5/5
- Implementation feasibility: 5/5
- Performance safety: 5/5
- Consistency risk: 2/5

**DFII = 17 − 2 = 15 / 15**

Proceed fully, but keep the first hotspot behavior intentionally simple.

## Differentiation anchor

> A largely quiet editorial page contains one barely-there responsive point in its negative space. Activating it reveals a field index — SEE / LISTEN / READ / TRACE — rather than a conventional navigation menu or feature grid.

The memorable object is the **EUREKA bloom + field index**, not a decorative dashboard.

## What is preserved

- current ASHWOOD paper / ink world;
- `I follow ideas wherever they go.` as the dominant authored line;
- `One point of view. Many forms.`;
- sparse shell and extreme negative space;
- native HTML/CSS/JS architecture;
- static links as guaranteed infrastructure.

## Spatial composition

### First viewport

- masthead: ASHWOOD left; static Modeling / Music / Builds / About routes right;
- identity mass sits left / lower-left rather than centered;
- right side remains deliberately under-occupied;
- EUREKA lives inside that negative field on desktop;
- on mobile EUREKA returns to document flow and never overlays route links.

### After the first viewport

CURRENT / SITREP uses editorial rows rather than cards:

- STATUS / UPDATED metadata;
- one current signal as the main text mass;
- three movement rows;
- latest Field Note.

The FIELD INDEX reveal follows as a distinct but visually related layer.

## Capability execution

Do not render capabilities as four equal cards.

Use a staggered editorial index:

- SEE — visual practice / Modeling;
- LISTEN — released music / Music;
- READ — thought in motion / Field Note / Builds;
- TRACE — provenance / how work happened / Builds.

CURRENT remains explicit in SITREP and is intentionally absent from the hidden index.

## Color

Existing foundation:

- paper: `#f5f3ef`
- ink: `#171717`

V2-B signal accent:

- muted field green: `#536b3d`

Use the green only as a low-energy signal/bloom/focus accent. It should read organic and inherited, not cyber/neon.

## Typography

V2-B preserves the current repository typography while the spatial system is being proven. Do not add a font dependency solely for this pass.

Typography hierarchy is created through:

- scale;
- line length;
- weight;
- tracking;
- case;
- negative space.

A later site-wide type decision may replace the base family without changing this layout contract.

## Spacing rhythm

Primary rhythm:

- shell gutter: existing responsive ASHWOOD gutter;
- micro: 8–12px;
- small: 18–24px;
- medium: 38–48px;
- large: 72–112px;
- sectional: 120–200px when viewport allows.

The page should not feel evenly spaced. Long pauses are intentional.

## Motion philosophy

- ambient bloom may breathe very slowly;
- hover/focus may increase bloom intensity;
- activation reveals the field index with one opacity/translate transition;
- no cursor trail;
- no continuous text motion;
- no autoplay;
- reduced-motion removes breathing and reveal translation.

## Implementation constraints

- no framework;
- no canvas/WebGL;
- ambient layer `pointer-events:none`;
- semantic EUREKA `<button>` is the only hotspot action target;
- no full-viewport interactive overlay;
- route navigation remains static and in document flow;
- `body` uses `overflow-x: clip` only as a safety net; narrow overflow still must be measured;
- no capability depends on hover.

## First-pass acceptance

The pass succeeds if:

- removing JS leaves a complete homepage and usable routes;
- EUREKA feels intentional but subordinate;
- the FIELD INDEX feels like discovery rather than a feature section;
- SITREP communicates current state without dashboard styling;
- mobile static navigation cannot be blocked by the hotspot;
- visual verification finds zero horizontal overflow at desktop and phone widths;
- all interactive targets remain keyboard accessible and appropriately sized.
