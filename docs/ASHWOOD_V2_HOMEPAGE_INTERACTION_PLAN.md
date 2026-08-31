# ASHWOOD v2 — Homepage Hotspot / Easter Egg Interaction Plan

Status: locked planning direction before V2-B rendered implementation  
Branch: `ashwood-v2`  
Scope: homepage interaction only. This document does not authorize production merge.

## Purpose

ASHWOOD's homepage can contain an experimental discovery layer without making discovery a prerequisite for navigation.

The hotspot / easter-egg system should make the homepage feel inhabited, curious, and responsive to attention. It must never become the site's only navigation, a game the visitor must solve, or an interaction layer that blocks static links.

Core rule:

> The homepage works completely without finding, hovering, tapping, or loading an easter egg.

The hotspot is additive discovery. Static routes and core content are primary infrastructure.

## 1. Layer architecture

### Layer 0 — Static / guaranteed

Always rendered in normal document flow:

- ASHWOOD wordmark;
- Tahlia Ashwood Peart;
- `I follow ideas wherever they go.`;
- `One point of view. Many forms.`;
- CURRENT / SITREP;
- static route links: Modeling / Music / Builds / About.

If JavaScript fails, pointer tracking is unavailable, reduced motion is requested, or a device is touch-only, Layer 0 remains complete and usable.

### Layer 1 — Ambient field

A purely visual render layer can create the sense that something is present beneath the page.

Candidate visual language:

- very low-contrast breathing / bloom;
- slow field drift or luminance change;
- restrained green accent as a subtle ASHWOOD signature rather than a technology/neon effect;
- no fake radar, terminal, tactical grid, or decorative telemetry.

Technical rule:

- ambient render surface uses `pointer-events: none`;
- it cannot sit above or intercept links, audio controls, SITREP content, or text selection;
- reduced-motion mode removes continuous movement while preserving static visual character.

### Layer 2 — Hotspot controls

Actual discovery points must be semantic controls, not invisible pointer traps.

Desktop:

- hotspot can have a generous visual/hover sensing area inside the hero field;
- the actual interactive target is a real `<button>` or `<a>`;
- cursor proximity may wake the bloom, but nothing opens until deliberate activation;
- hotspot coordinates are constrained away from primary navigation and SITREP interaction zones.

Touch / coarse pointer:

- no roaming invisible hit area;
- hotspot becomes a stable, intentionally placed tappable affordance or compact discovery marker;
- minimum touch target follows normal accessibility sizing;
- it may not overlay the static nav at any viewport width.

Keyboard:

- every actionable hotspot is reachable by keyboard;
- focus reveals the same content as hover/tap activation;
- focus order follows DOM order, not visual coordinates.

### Layer 3 — Reveal UI

Hotspot activation should reveal content in a stable DOM region rather than spawn an uncontrolled floating layer.

Preferred behavior:

- reveal appears adjacent to or below the hero/current layer;
- it does not push the static nav off-screen unexpectedly on mobile;
- it can be closed/reversed without losing focus;
- only one reveal is active at a time;
- revealed content remains selectable, readable, and linkable.

Avoid full-screen modal behavior for routine easter eggs.

## 2. Interaction concept: EUREKA

Working name: **EUREKA hotspot**.

EUREKA is not a fifth public route. It is the doorway into the hidden connective layer of ASHWOOD.

At rest:

- nearly invisible / ambient;
- does not advertise itself like a CTA;
- visual bloom may breathe subtly where motion is allowed.

On attention:

- proximity / focus increases the bloom;
- a small textual cue may resolve, e.g. `EUREKA`, `FOUND SOMETHING`, or another final editorial label chosen during visual review;
- activation reveals one approved piece of additional context or capability.

The point is discovery, not mystery for mystery's sake.

## 3. Homepage capability mapping

The homepage has two different maps that must not be confused.

### A. Public route map — explicit

Always visible:

- **Modeling** → `/portfolio`
- **Music** → `/music`
- **Builds** → `/journal`
- **About** → `/about`

These are the primary destinations.

### B. Easter-egg capability map — contextual

The hidden layer should expose *what ASHWOOD can let a visitor do or understand*, not create duplicate product navigation.

Initial capability set:

#### SEE

Meaning: enter the visual / modeling practice.

Possible reveal:

- one current image / visual fragment / campaign reference;
- then explicit `Modeling →` route.

Do not load a hidden full gallery on the homepage.

#### LISTEN

Meaning: hear released music natively.

Primary easter-egg candidate:

- reveal `IN ME — t.kap feat. CASHDEN`;
- play / pause from native audio semantics once the approved audio asset is in-repo;
- offer `Music →` as the deeper route.

This is the strongest candidate for the first functional easter egg because discovery produces an immediate capability, not just more copy.

#### READ / FOLLOW THE THOUGHT

Meaning: reveal the latest FIELD NOTE or current authored observation.

Possible reveal:

- title + date + one short line;
- route to BUILD JOURNAL.

Do not duplicate the full SITREP or journal on the hero.

#### TRACE

Meaning: show how selected work came together.

Possible reveal:

- a compact BUILD PROVENANCE example: `HUMAN / AGENT WORKFORCE / ENABLED BY`;
- route into a relevant Builds entry.

This is where agent-os can become legible through outcome/provenance without exposing the internal workforce interface.

#### CURRENT

Meaning: understand what is moving now.

This capability belongs primarily to the explicit SITREP, not to a hidden hotspot. The easter-egg system may link to or animate attention toward CURRENT but should not hide current state behind discovery.

## 4. Recommended v2 first-release mapping

Do not launch five hotspots at once.

V2-B first rendered pass should implement one hotspot system with a small rotation of reveal types or a single deterministic reveal.

Recommended initial hierarchy:

1. **EUREKA → LISTEN / IN ME** — first true functional easter egg.
2. **EUREKA → latest FIELD NOTE** — optional second reveal after first interaction or in a later pass.
3. **TRACE / BUILD PROVENANCE** — introduce once V2-C provides real provenance entries.
4. **SEE / Modeling** — use only if there is a strong visual reason; the static Modeling route already covers discovery well.

The hotspot should not become a carousel of hidden features before the first interaction is proven on desktop and mobile.

## 5. State model

Suggested front-end states:

```text
idle
→ sensed       (desktop proximity only; visual, not semantic state)
→ focused      (keyboard)
→ revealed     (deliberate activation)
→ active       (audio or expanded content running)
→ dismissed
```

Rules:

- `sensed` never triggers navigation or audio;
- audio never autoplays from proximity/hover;
- activation is deliberate;
- reveal state should be represented in accessible DOM attributes;
- page reload returns to a sane default unless persistence has a clear user benefit.

## 6. Spatial safety zones

The homepage should define explicit no-overlap rectangles/zones around:

- wordmark / masthead;
- thesis text;
- static route navigation;
- SITREP links;
- music controls once present;
- viewport bottom safe area on mobile.

Desktop hotspot sensing may exist only inside the remaining decorative field.

On mobile, do not use coordinate-based invisible sensing. Render an explicit stable discovery target in document flow.

No hotspot layer may use a full-viewport interactive overlay.

## 7. Capability-to-UI matrix

| Capability | Explicit surface | Easter-egg surface | Functional requirement |
| --- | --- | --- | --- |
| Identity | Hero | Ambient only | Never hidden |
| Current state | SITREP | May point toward it | Truthful, dated |
| Modeling / SEE | Static nav | Optional visual reveal | Route remains primary |
| Music / LISTEN | Static nav + Music route | Strong first easter egg | Native user-initiated playback |
| Builds / READ | Static nav + latest Field Note | Optional short reveal | Link to journal record |
| Provenance / TRACE | Builds entries | Later easter egg | Public-approved contribution data only |
| About | Static nav | No hidden dependency | Explicit route |
| agent-os / Workforce | No public route | Provenance only | Never expose control surface / telemetry |

## 8. Visual rendering rules

The hotspot must fit **Living Editorial Field Report**, not override it.

Use:

- negative space as the interaction canvas;
- subtle luminance / blur / bloom;
- one accent behavior;
- editorial microcopy;
- state transitions that feel discovered rather than advertised.

Avoid:

- visible target rings;
- radar sweeps;
- game HUDs;
- floating SaaS cards;
- neon cyber aesthetics;
- cursor trails that reduce readability;
- continuous animations competing with the thesis;
- canvas/WebGL unless CSS/SVG cannot achieve the intended effect reliably.

Default implementation preference:

1. semantic HTML for interactive controls/content;
2. CSS for bloom / visual states;
3. lightweight JS for proximity/state management;
4. SVG only if the bloom/field genuinely benefits;
5. no canvas/WebGL in v2 unless demonstrated necessary.

## 9. Failure and accessibility contract

The following must all be true before the hotspot is considered shippable:

- disabling JavaScript leaves all routes available;
- touch users never need hover;
- hotspot never overlaps static links;
- keyboard users can discover/activate/dismiss it;
- screen-reader users get a meaningful label, not decorative noise;
- audio requires deliberate activation;
- Escape/dismiss returns focus correctly when a reveal behaves like a disclosure;
- reduced-motion eliminates continuous breathing/drift;
- at 320px and other mobile widths, static route hit areas remain unobstructed;
- no horizontal overflow;
- zoom/text scaling does not cause the hotspot to cover navigation.

This specifically addresses the prior mobile failure mode where experimental hotspot rendering could block the homepage's static links.

## 10. V2-B implementation order

1. Render the new static Home + SITREP with zero hotspot behavior.
2. Verify static desktop/mobile/navigation first.
3. Add the ambient non-interactive field (`pointer-events: none`).
4. Add one semantic EUREKA control.
5. Add one reveal target, preferably `LISTEN / IN ME` if approved audio is available; otherwise use latest FIELD NOTE while preserving the music contract for V2-D.
6. Verify coarse pointer / keyboard / reduced-motion.
7. Only then consider proximity sensing or secondary easter eggs.

## Decision

The hotspot is a **progressive-enhancement discovery system**, not navigation infrastructure.

The first v2 homepage should prove one excellent easter egg before expanding the capability map.
