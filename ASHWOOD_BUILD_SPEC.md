# ASHWOOD

## Personal Work Ecosystem — Build Specification

**Owner:** Tahlia Ashwood Peart  
**Professional/public name:** TK Ashwood  
**Primary identity:** ASHWOOD  
**Interaction language:** TAP IN  
**Repository:** `tk-ap/ashwood-web`  
**Production host:** Vercel  
**Status:** v2 implementation in progress on `ashwood-v2`

## North star

ASHWOOD is the doorway into the different things Tahlia Ashwood Peart is making, building, exploring, and involved with. It is neither one conventional portfolio nor one creative project.

> **Different work. Same person.**

V2 extends that idea with a second operating line:

> **One point of view. Many forms.**

Distinct bodies of work must retain their own content, audience, visual identity, and editorial logic. ASHWOOD and the person establish their relationship.

The v2 experience should feel like a **living editorial record of current work, thought, and movement**. It should feel current because the information is current, not because the interface imitates a control room or fake realtime system.

## Brand architecture

- **Tahlia Ashwood Peart:** full personal name.
- **TK Ashwood:** established professional/public identity.
- **ASHWOOD:** umbrella identity and strongest site-level brand.
- **TAP IN:** a restrained invitation into the ecosystem, derived from T.A.P. It must never replace or visually overpower ASHWOOD.
- **BUILD JOURNAL:** Founder Build Archive and durable public record of product/build evolution.
- **agent-os / Workforce:** enabling infrastructure beneath selected work, not a public ASHWOOD product or primary navigation item.

The landing page should communicate “Things I’m making, building, and exploring” and feel like a doorway rather than a conventional portfolio homepage.

## V2 experience contract

A successful v2 release should let a visitor:

- understand the person and ASHWOOD identity before encountering systems language;
- see what is current without inspecting every route;
- move clearly between Modeling, Music, Builds, and About;
- listen to released music natively within ASHWOOD;
- understand selected build evolution through evidence, decisions, reversals, collaborators, tools, and current proof points;
- see agent-supported work only through meaningful provenance and approved outcomes;
- use the full experience on mobile, keyboard, reduced-motion, and graceful-JavaScript-failure paths.

Visual rule:

> **Quiet shell. Expressive content.**

Behavioral rule:

> **Actual state before animation. Evidence before assessment.**

## Information architecture

### `/` — ASHWOOD landing + CURRENT / SITREP

A concise personal work index that introduces the person and routes visitors into distinct work.

V2 sequence:

1. authored ASHWOOD identity opening;
2. `I follow ideas wherever they go.` as the dominant personal operating line;
3. `One point of view. Many forms.` as connective thesis;
4. a quiet `CURRENT / SITREP` snapshot;
5. current movement across Modeling, Music, and Builds;
6. latest FIELD NOTE;
7. clear route access into the distinct bodies of work.

The CURRENT layer is editorial state, not presence tracking. Do not lead with counters, agent telemetry, exact location, technical architecture, or product ecosystem diagrams.

### `/portfolio` — Modeling / visual practice

The creative-ventures portfolio remains image-led and photography-first. Modeling is the current primary public practice on this route.

The experience should be editorial, minimal, elegant, quiet, immersive, responsive, and accessible. It must not resemble a SaaS application, dashboard, startup landing page, or generic software portfolio. Photography and work samples are primary content.

V2 should make only restrained connective changes here. Do not insert SITREP, build telemetry, agent provenance, or technical thesis into the image experience.

### `/music` — Music / native listening

Music is an independent creative practice inside ASHWOOD, not an appendix to Modeling.

V2 should:

- establish a dedicated Music route;
- use released work as the public catalog foundation;
- make `IN ME` the first released anchor;
- support approved artwork, credits, release context, and native audio playback when source audio is available for publication;
- keep private or unfinished listening material private by default;
- use external distribution links only as optional secondary destinations.

Route-local native playback is acceptable for v2.0. Persistent cross-route listening is optional and must not trigger a framework rewrite solely for continuity.

### `/journal` — Builds / BUILD JOURNAL

The visible top-level navigation label may be `Builds`; the page identity remains **BUILD JOURNAL / Founder Build Archive**.

BUILD JOURNAL is both a SaaS/product portfolio and a living build record. It must explain:

- each product and its category;
- the issue it aims to solve;
- intended user / target demographic where appropriate;
- product thesis and ecosystem role;
- current maturity and honest capability status;
- evidence, previews, artifacts, decisions, failures, and lessons;
- dated journey from ideation through launch and first paid client where applicable;
- sites, platforms, tools, models, collaborators, and communities that materially enabled the work;
- contemporaneous FIELD NOTES;
- selected BUILD PROVENANCE;
- current proof point and next move.

It must support continuity, professional/reference use, and investor/pitch use without reading like startup marketing. Clearly distinguish reconstructed history from contemporaneous updates and simulation from live capability.

Creative work and SaaS work must not become a single feed. Cross-link only when there is a genuine relationship.

### `/about` — About Tahlia

Explain the person connecting the work and range of disciplines without forcing every discipline into a single professional narrative.

V2 may include intentionally published identity, family/legacy context, and operating philosophy, but About must remain edited and concise. Deeper source material can remain repository context until deliberately approved for public copy.

Do not build future routes until real content requires them.

## CURRENT / SITREP contract

The public current-state source lives at `/data/sitrep.json`.

Rules:

- every field is explicitly public and editorially approved;
- `updated` reflects a real editorial update;
- `status` is not presence tracking;
- no exact live location;
- no fake active-agent/customer/task counts;
- no invented activity ticker;
- no derived claim without a verifiable public source;
- the homepage remains usable if SITREP data or JavaScript fails.

## BUILD JOURNAL product-profile contract

Every SaaS product profile should support:

1. product name and one-sentence thesis;
2. problem and why it matters;
3. target user/demographic where appropriate;
4. intelligence/category framing;
5. ecosystem role and relevant integrations;
6. current maturity and availability;
7. current product surface or UI preview;
8. live/public link when genuinely available;
9. evidence and provenance;
10. current focus and what is being proven next;
11. collaborators and enabling platforms;
12. chronological milestones from idea to first paid client where applicable.

The public journal should never automatically publish private founder context. Public records require explicit review and approval.

## FIELD NOTE contract

FIELD NOTES capture what the work is revealing beyond any single product while BUILD JOURNAL remains the durable system of record.

FIELD NOTES may connect multiple builds at the thesis level, but must not force products into the same market, audience, or use case. Personal source-note material requires deliberate editorial review before publication.

Recommended fields:

- date;
- type / scope;
- status;
- current observation;
- what changed;
- why it mattered;
- evidence;
- next move.

## BUILD PROVENANCE contract

BUILD PROVENANCE is selective editorial attribution, not a raw execution log.

A selected entry may expose:

- **HUMAN:** direction, taste, architecture, decision, approval;
- **AGENT WORKFORCE:** bounded research, implementation support, synthesis, testing, documentation;
- **ENABLED BY:** tools, models, platforms, skills, repositories, or services that materially enabled the work;
- **WITH / INFLUENCED BY:** people, collaborators, communities, or source material that materially changed the work;
- **EVIDENCE:** public artifact, PR, deployment, release, decision record, result, or test;
- **NEXT MOVE:** the actual next proof point or experiment.

Do not publish internal prompts, credentials, permissions, private task state, raw agent conversations, private founder context, or unpublished customer/user information.

## agent-os / Workforce boundary

Formal v2 architecture decision:

> **agent-os / Workforce is enabling infrastructure beneath ASHWOOD, not a public ASHWOOD product.**

Conceptual relationship:

```text
ASHWOOD PUBLIC SURFACE
        ↑
approved outcomes / provenance / verified movement
        ↑
agent-os / Workforce
        ↑
agents · skills · routing · repositories · tools · execution
```

ASHWOOD may show what was built, what changed, selected agent-supported contribution, enabling platforms/skills, the human review boundary, and verified outcomes. It must not expose private routing, permissions, credentials, prompts, task telemetry, or internal control surfaces.

## Build Sponsorship / facilitation direction

Do not ship a generic donation surface.

The intended future concept is task-level sponsorship of bounded, governed execution:

```text
SELECTED ROADMAP ITEM
→ scoped task
→ estimated agent execution budget
→ expected human oversight
→ complexity / confidence
→ funding progress
→ approved execution boundary
→ agent-supported execution
→ human review
→ public evidence / BUILD JOURNAL outcome
```

V2 may prepare editorial/component space for this direction. Do not invent live sponsorship mechanics before payment, governance, accounting, and publication rules are real.

## Attribution principle

True education requires collaboration. Without the existing environment, the builds do not make sense. Acknowledge every platform, site, model, skill, person, or community that materially contributed. Explain what was enabled, how it shaped the work, and where the ASHWOOD contribution begins. Do not reduce this to a logo wall.

## Portfolio migration sources

Primary references:

1. **Current / authoritative:** `https://tk-ashwood-portfolio.tahlia-ashwood.chatgpt.site/`
2. **Legacy archive:** `https://tkashwood.myportfolio.com/`

The original sources must remain untouched. The Vercel reconstruction must be independent and backed by GitHub.

The GPT Site represents the current rebrand and recent appearance: long hair rather than the older fade. Its copy, hierarchy, current photography, and sequencing take precedence. The Adobe Portfolio documents earlier work; do not use its short-hair/fade-era photography as the primary hero or current positioning simply because it is easier to retrieve. If retained, legacy photography belongs after the current work or in a clearly marked archive.

### Modeling requirements

- Preserve the established visual identity and photography where assets are available.
- BarelySain is the latest work and must remain distinct from unrelated work.
- Lead with verified recent long-hair photography and the current rebrand.
- Do not classify Malibu coastline photography as BarelySain unless source evidence establishes the relationship.
- Preferred hero asset is image `6508` when its correct source becomes available.
- Preserve strong DTLA knit-sweater imagery and avoid repetitive near-duplicates.
- Clean obvious duplicates and prefer the highest-quality useful version.
- Clicking an image opens an accessible, keyboard-operable lightbox without losing gallery context.

## Technical architecture

Use one maintainable application where practical:

```text
GitHub: tk-ap/ashwood-web
          |
          v
Vercel production
          |
          +-- /
          +-- /portfolio
          +-- /music
          +-- /journal
          +-- /about
```

Do not introduce a framework, CMS, realtime backend, animation system, or abstraction without a demonstrated need. Separate content from presentation where useful. All production changes must be committed.

V2.0 uses structured local public state before adding external automation:

- `/data/sitrep.json` for current editorial state;
- repository content contracts for Field Notes / provenance;
- native HTML/CSS/JS unless a later requirement proves insufficient.

## Quality requirements

- Semantic HTML and logical heading hierarchy.
- Keyboard navigation and visible focus states.
- Useful alt text and accessible interactive labels.
- Strong desktop, tablet, and mobile layouts.
- Responsive, appropriately sized images with lazy loading where useful.
- No full-resolution loading of the entire image library on first paint.
- Restrained motion that never competes with the work.
- Reduced-motion support.
- Core navigation remains visible and usable if decorative/hotspot layers fail.
- No major broken links, runtime errors, fabricated capability claims, or fake live state.
- No private operational state in public provenance.
- Vercel preview must be visually reviewed before any merge to `main`.

## V2 implementation sequence

### V2-A — Reconciliation + content foundation

- establish `ashwood-v2` from the current production baseline;
- reconcile open PR concepts rather than merging them blindly;
- add structured current-state and publication contracts;
- lock route labels / boundaries;
- make no design expansion until the content model is stable.

### V2-B — Home / Living Editorial Field Report

Preserve identity first, then add CURRENT / SITREP, movement, latest Field Note, and resilient route access.

### V2-C — Builds / Founder Build Archive

Integrate FIELD NOTES, BUILD PROVENANCE, collaborator/enabler attribution, chronology, and honest maturity/current proof states.

### V2-D — Music

Establish final Music design and native released-audio playback.

### V2-E — About + Portfolio connective pass

Edit About to the strongest connective narrative and make only minimal connective changes to the photography-led Portfolio.

### V2-F — Future public-signal hooks

Prepare interfaces for verified public GitHub/Vercel/release/sponsorship signals without activating them automatically.

### V2-G — Verification / release gate

Verify desktop, tablet, mobile, keyboard, reduced motion, audio accessibility, navigation availability, JS-failure fallback, links, imagery, truthful state, privacy, and rendered comparison before merge.

## Decision rule

Prioritize function, clarity, content, design, then decoration.

For Portfolio, let the work do the talking. For BUILD JOURNAL, let the process and product evidence be visible. For the landing page, let the person connect the dots.

For v2 specifically:

1. identity before telemetry;
2. actual state before animation;
3. evidence before assessment;
4. distinct practices remain distinct;
5. no fake realtime;
6. no dashboardification;
7. no infrastructure solely for aesthetic effect;
8. make existing owned work more legible before creating another category.
