# ASHWOOD v2 — Implementation Plan

Status: approved planning direction, pre-implementation.
Branch: `ashwood-v2-intake`
Source inputs: `ASHWOOD_BUILD_SPEC.md`, `AGENTS.md`, `docs/ASHWOOD_V2_INTAKE.md`, and current unmerged ASHWOOD PRs.
Production rule: no direct production changes from this plan. Build and verify on a dedicated v2 implementation branch before any merge to `main`.

## 1. V2 experience contract

ASHWOOD v2 turns the current site from a mostly static personal-work index into a **living editorial record of current work, thought, and movement** while preserving the distinct identity of Modeling, Music, Builds / BUILD JOURNAL, and About.

V2 must make ASHWOOD feel more alive through actual current state and editorial continuity, not through dashboard styling or fake realtime behavior.

A successful v2 release should let a visitor:

- understand the person and ASHWOOD identity before encountering systems language;
- see what is current without needing to inspect multiple routes;
- move clearly between Modeling, Music, Builds, and About;
- listen to released music natively within ASHWOOD rather than being forced out to a distribution page;
- understand the evolution of selected builds through evidence, decisions, reversals, and current state;
- see meaningful collaborators, tools, platforms, and agent-supported work when relevant;
- understand that agentic execution is part of the operating model without ASHWOOD becoming an Agent OS interface;
- use the entire experience on mobile, keyboard, reduced-motion, and graceful-JavaScript-failure paths.

The visual test remains:

> Quiet shell. Expressive content.

The behavioral test is:

> Current because the information is current, not because the interface pretends to be live.

## 2. Route responsibilities

### `/` — Identity + CURRENT / SITREP

Purpose: introduce the person, connect the different practices, and answer `what is happening now?` without becoming a dashboard.

Required sequence:

1. ASHWOOD / authored identity opening.
2. `I follow ideas wherever they go.` remains visually dominant.
3. `One point of view. Many forms.` remains connective thesis.
4. Quiet `CURRENT / SITREP` snapshot.
5. Current movement across Modeling, Music, and Builds.
6. Latest FIELD NOTE.
7. Clear routes into the distinct bodies of work.

Do not lead with counters, agent telemetry, technical architecture, or product ecosystem diagrams.

### `/portfolio` — Modeling / visual practice

Purpose: remain the image-led creative surface.

V2 changes should be minimal and connective:

- preserve photography-first hierarchy;
- keep current long-hair / current rebrand imagery primary when verified assets are available;
- preserve BarelySain and current work as distinct from legacy archive material;
- use `Modeling` as the visible route label if the final navigation pass confirms that it is clearer than `Portfolio`;
- do not insert SITREP, build telemetry, agent provenance, or technical thesis into the image experience;
- provide only restrained contextual links back into ASHWOOD.

### `/music` — Native listening room

Purpose: establish Music as an independent creative practice and allow released work to be heard natively.

V2 scope:

- add / retain a dedicated Music route;
- make `IN ME` the first released anchor;
- add approved artwork, credits, release context, and native audio playback when source audio is available for publication;
- do not frame private or unfinished UNTITLED material as public catalog;
- do not depend on DistroKid / Spotify / external pages for the basic listening experience;
- external platforms may remain optional secondary links.

Persistent listening across ASHWOOD may be implemented if it can preserve playback during route changes without compromising accessibility, page clarity, or native architecture. If seamless cross-route persistence requires a framework-level rewrite, ship route-local native playback first and treat persistence as a follow-on.

### `/journal` — Builds / BUILD JOURNAL

Purpose: remain the Founder Build Archive, product portfolio, decision record, and public proof layer.

V2 should support:

- product threads and timelines;
- contemporaneous FIELD NOTES;
- reconstructed history clearly labeled as reconstructed;
- problem / target user / category / ecosystem role / maturity / evidence / current focus;
- decisions, reversals, failures, deployment issues, and what changed the founder's mind;
- relationship and platform attribution;
- selected BUILD PROVENANCE;
- current and next proof points.

The visible top-level nav label can be `Builds` while the page identity remains `BUILD JOURNAL` / Founder Build Archive.

### `/about` — Person + lineage + operating philosophy

Purpose: explain the person connecting the work without forcing every discipline into one professional story.

V2 should preserve:

- personal identity and range;
- ASHWOOD as family name before brand abstraction;
- Jamaican/family context where intentionally published;
- Myrtle Alvira Ashwood legacy context where intentionally published;
- `One point of view. Many forms.` as multiplicity-with-continuity;
- selected operating philosophy such as clarity before volume, evidence before presentation, and small tests before false certainty.

Do not make About a long product manifesto. Keep deeper family/legacy research in repository context until deliberately edited for public publication.

## 3. CURRENT / SITREP content contract

### V2.0 public state

Create a small structured content source such as:

`/data/sitrep.json`

Initial contract:

```json
{
  "updated": "YYYY-MM-DD",
  "status": "active",
  "signal": "",
  "movement": [
    { "area": "modeling", "state": "active", "note": "", "href": "/portfolio" },
    { "area": "music", "state": "active", "note": "", "href": "/music" },
    { "area": "builds", "state": "active", "note": "", "href": "/journal" }
  ],
  "latestFieldNote": {
    "date": "",
    "title": "",
    "href": "/journal"
  }
}
```

Rules:

- data is explicitly public and editorially approved;
- `updated` reflects a real content update;
- `status` is not presence tracking;
- no exact live location;
- no fake active-agent counts;
- no fake customer counts;
- no invented activity ticker;
- no derived claim unless its public source is verifiable.

The homepage must remain usable if this file or its JavaScript renderer fails.

## 4. BUILD PROVENANCE contract

BUILD PROVENANCE is a selective publication layer, not a raw execution log.

A selected entry may expose:

```text
HUMAN
Direction / taste / architecture / decision / approval

AGENT WORKFORCE
Research / implementation support / synthesis / testing / documentation

ENABLED BY
Named tools, models, platforms, skills, repositories, or services that materially enabled the work

WITH / INFLUENCED BY
People, collaborators, communities, or source material that materially changed the work

EVIDENCE
Public artifact, PR, deployment, release, decision record, result, or test

NEXT MOVE
The actual next proof point or experiment
```

Do not publish internal prompts, credentials, permissions, private task state, raw agent conversations, or private founder context.

Not every Journal entry needs provenance. Use it when it teaches something about how the work happened.

## 5. agent-os / Workforce boundary

Formal architecture decision:

> agent-os / Workforce is enabling infrastructure beneath ASHWOOD, not a public ASHWOOD product.

Conceptual boundary:

```text
ASHWOOD PUBLIC SURFACE
        ↑
approved outcomes / provenance / verified movement
        ↑
agent-os / Workforce
        ↑
agents · skills · routing · repositories · tools · execution
```

### Publicly appropriate

- what was built;
- what changed;
- selected agent-supported contribution;
- enabling platforms and skills;
- human review / approval boundary;
- verified outcome;
- bounded Build Sponsorship execution state when intentionally public.

### Private by default

- raw prompts;
- credentials and tokens;
- permission architecture;
- internal agent identities unless intentionally published;
- private routing rules;
- task telemetry;
- unpublished product strategy;
- private founder context;
- unpublished user/customer information.

The SITREP may consume approved outcomes from agent-supported work. It must not become an Agent OS dashboard.

## 6. Build Sponsorship / facilitation hook

Do not ship a generic donation surface.

The public concept is task-level sponsorship of bounded, governed execution.

Future flow:

```text
SELECTED ROADMAP ITEM
→ scoped task
→ estimated agent execution budget
→ human oversight requirement
→ complexity / confidence
→ funding progress
→ approved execution boundary
→ agent-supported execution
→ human review
→ public evidence / BUILD JOURNAL outcome
```

V2 implementation should prepare editorial/component space for this concept without inventing active sponsorship mechanics before payment, governance, accounting, and task-publication rules are real.

## 7. Component inventory

### Required v2 components / patterns

- ASHWOOD identity opening
- `CURRENT / SITREP`
- `CURRENT SIGNAL`
- movement row / list
- latest FIELD NOTE feature
- status label / last-updated treatment
- BUILD PROVENANCE section
- collaborator / enabled-by attribution pattern
- dedicated Music release module
- native accessible audio controls or custom controls backed by native `<audio>` semantics
- shared route navigation

### Optional after first rendered review

- persistent audio player
- source-linked public signal badges
- public Build Sponsorship card
- interpreted `ASSESSMENT`

### Explicitly excluded from v2.0

- radar / command-center visual language
- fake terminal
- live agent count
- tactical map
- exact current position
- automatic AI assessment on private data
- realtime backend solely for aesthetics
- large CMS/framework migration without demonstrated need

## 8. Open PR reconciliation

The existing draft/open PRs should not be merged blindly before v2. Their useful work should be absorbed into the v2 implementation branch and the superseded PRs closed after equivalent or improved functionality is verified.

### PR #11 — `Add cross-build Field Notes to BUILD JOURNAL`

Decision: **ABSORB INTO V2**.

Preserve:

- FIELD NOTE as a cross-build editorial type;
- the source-note / public-note distinction;
- thesis-level connection across builds;
- BUILD JOURNAL as durable system of record;
- the principle that related ideas do not force every product into one market.

Review before publishing personal source-note material; preserve privacy boundaries.

### PR #10 — `Preview all current ASHWOOD updates`

Decision: **SELECTIVELY ABSORB, THEN SUPERSEDE**.

Preserve / evaluate:

- dedicated `/music` route;
- `Modeling / Music / Builds / About` navigation direction;
- ASHWOOD family/legacy repository context;
- selected About philosophy;
- `TAP IN` interaction only if visual/mobile/accessibility verification supports it.

Modify:

- About is currently too dense to inherit wholesale;
- Music needs real native listening rather than a placeholder statement;
- private/unreleased listening archive should not be exposed by default;
- current route structure should be reconciled with v2 rather than copied intact.

### PR #9 — `Rename Build Journal to Builds and add TAP IN nav`

Decision: **SUPERSEDED BY V2 / PR #10 concepts**.

Absorb `Builds` as likely visible nav label. Reassess `TAP IN` interaction against mobile hit areas, static-link availability, keyboard behavior, and reduced motion before shipping.

### PR #8 — `Add MeOS philosophy to About`

Decision: **SELECTIVELY ABSORB, THEN SUPERSEDE**.

Preserve:

- legacy context document;
- clarity-before-volume operating principle;
- evidence → hypothesis → test → signal → decision logic where it genuinely describes TK's process.

Do not publish the full current draft About copy as-is.

### PR #3 / PR #1 — earlier Portfolio reconstruction branches

Decision: **OBSOLETE / CLOSE AFTER V2 SAFETY REVIEW**.

Their useful migration work is already represented by later merged/native portfolio work. Do not revive outdated portfolio structures or legacy-first positioning.

## 9. Implementation sequence

### V2-A — Reconciliation + content foundation

1. Create a dedicated implementation branch from the approved baseline.
2. Absorb source content from PR #11 / #10 / #8 where approved.
3. Add `/data/sitrep.json`.
4. Add a small public-content contract for provenance / Field Notes if useful.
5. Lock final route labels and nav behavior.
6. No design expansion until content contracts are stable.

Acceptance:

- no duplicate competing copy;
- no loss of current production routes;
- no private material accidentally promoted;
- no framework/backend addition.

### V2-B — Home / Living Editorial Field Report

1. Preserve identity opening.
2. Add CURRENT / SITREP below it.
3. Add one current signal.
4. Add movement across Modeling / Music / Builds.
5. Add latest Field Note.
6. Preserve clear route access on mobile even if decorative/hotspot layers fail.

Acceptance:

- identity is still primary;
- current layer is readable, sparse, truthful;
- page does not look like a dashboard;
- JS failure leaves core navigation usable.

### V2-C — Builds / Founder Build Archive

1. Integrate FIELD NOTE editorial type.
2. Add BUILD PROVENANCE pattern.
3. Add `WITH / ENABLED BY`, `WHAT CHANGED`, `WHY IT MATTERED`, `NEXT MOVE` where appropriate.
4. Preserve product thread chronology and honest maturity states.
5. Surface agent-supported work only at outcome/provenance level.

Acceptance:

- archive clearly distinguishes history, contemporaneous notes, current state, and interpretation;
- product stories remain distinct;
- attribution is meaningful rather than a logo wall.

### V2-D — Music

1. Establish final Music route design.
2. Add verified `IN ME` release assets and credits.
3. Add native playback from an approved audio asset.
4. Add optional external release links secondarily.
5. Test whether persistent listening can be added without architecture churn.

Acceptance:

- visitor can hear the released song without leaving ASHWOOD;
- playback controls are keyboard/screen-reader usable;
- private/unreleased audio is not exposed by default.

### V2-E — About + Portfolio connective pass

1. Edit About down to the strongest identity/lineage/operating-philosophy narrative.
2. Preserve deeper legacy context in docs without forcing it all into public copy.
3. Add only minimal cross-links to Portfolio.
4. Verify current-image hierarchy and mobile gallery behavior.

Acceptance:

- About connects rather than explains everything;
- Portfolio remains visually autonomous and photography-led.

### V2-F — Future-signal hooks

Prepare interfaces, but do not activate automatically, for:

- public GitHub-derived build evidence;
- Vercel deployment state;
- released music state;
- Build Sponsorship status;
- later AI `ASSESSMENT` from public approved sources.

Acceptance:

- no machine-derived signal is displayed without a source and editorial rule;
- no private connector data is exposed.

### V2-G — Visual / accessibility / release verification

Perform rendered verification before merge.

Required checks:

- desktop / tablet / mobile for every route;
- no horizontal overflow;
- visible and usable static navigation at all target widths;
- no hotspot or interaction overlay blocks route access;
- keyboard navigation and visible focus;
- lightbox focus behavior;
- audio keyboard / assistive control behavior;
- reduced-motion behavior;
- JS failure / missing SITREP-data fallback;
- broken internal/external links;
- image loading / crop / alt text review;
- no fabricated live status;
- no private data in provenance;
- final rendered comparison against production.

Only after the preview passes should v2 be considered for merge to `main`.

## 10. Design direction

Working name: **Living Editorial Field Report**.

Dominant language: editorial publication.
Secondary language: systems documentation.

Use:

- warm paper / black ink foundation where consistent with native ASHWOOD;
- extreme negative space;
- small tracked status typography;
- thin rules;
- strong image-led Portfolio contrast;
- sparse status vocabulary;
- restrained, purposeful transitions.

Avoid:

- generic SaaS cards;
- pill-heavy UI;
- gradients used as technology decoration;
- decorative telemetry;
- excessive panels;
- animated noise;
- military cosplay.

## 11. Release gate

V2 is ready only when all of the following are true:

- Home communicates identity first and current movement second.
- Modeling remains a credible standalone creative portfolio.
- Music is a credible native listening surface for at least one released work.
- Builds reads as a founder archive rather than a product catalog.
- Field Notes are integrated without creating a second parallel publication system.
- Provenance shows collaboration and agent-supported execution selectively and truthfully.
- agent-os remains infrastructure, not a public ASHWOOD product.
- no private operational state is exposed.
- no fake realtime language exists.
- mobile navigation is continuously available and unobstructed.
- all relevant repository skill and visual-verification instructions have been followed.
- Vercel preview is visually reviewed before any merge.

## 12. Definition of v2

ASHWOOD v2 should feel like this:

> The visitor meets a person first, sees what is moving now, enters distinct bodies of work on their own terms, and can trace how ideas became artifacts through an honest archive of decisions, collaborators, tools, agent-supported execution, and evidence.

The system underneath may become increasingly sophisticated. The public experience should become increasingly clear.