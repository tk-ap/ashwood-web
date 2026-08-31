# ASHWOOD v2 — Implementation Intake

Status: active working brief for reconciling cross-chat outputs before UI implementation.
Branch: `ashwood-v2-intake`
Rule: do not treat any single prior chat output as canonical on its own. Reconcile each recommendation against `ASHWOOD_BUILD_SPEC.md`, `AGENTS.md`, the native design system, existing merged routes, and other v2 inputs before implementation.

## V2 objective

ASHWOOD v2 should make the site feel more alive, more legible as a body of ongoing work, and more useful as public proof of TK Ashwood's evolving point of view — without turning the site into a dashboard, military-themed interface, or generic personal brand.

The first upload contained TWO distinct outputs and they should remain separate in the intake:

- **Input 01:** alignment / reputation / ownership / IP / distribution strategy.
- **Input 02:** ASHWOOD SITREP / living field-report concept.

Their ideas overlap, but neither should be treated as the source for the other.

---

## Input 01 — Alignment, reputation concentration, relationship equity, ownership, IP, pricing, distribution

### Source thesis

The first output assesses progress against a 12–18 month strategy centered on:

1. becoming known for one thing;
2. building relationship equity;
3. negotiating ownership;
4. creating intellectual property;
5. pricing from value rather than discomfort;
6. adding distribution around what is owned.

Its most useful conclusion for ASHWOOD v2 is that the user's ownership/IP trajectory is ahead of the public reputation trajectory. The public layer should therefore make the underlying capability and point of view easier for outsiders to recognize rather than adding more disconnected categories.

### Decision: IMPLEMENT as public-proof strategy

ASHWOOD v2 should help visitors understand the recurring capability behind the work through evidence rather than self-scoring or generic positioning language.

Make visible:

- recurring concern with context, intelligence, authorization, execution, governance, continuity, and coordination burden;
- the way product concepts evolved rather than appearing fully formed;
- the user's ability to turn ambiguous problems into systems and named frameworks;
- collaborators, tools, platforms, and influences that materially moved the work;
- what changed, what was learned, and what is being tested next;
- economic proof and real-world use as it becomes available.

Do **not** publish private directional scores such as `6.5/10`, `9/10`, etc. The site should demonstrate the thesis through the work.

### Reputation concentration implication

The near-term ASHWOOD role is not to create another product category. It is to make the existing body of work legible enough that an outsider can understand the through-line.

ASHWOOD should therefore increasingly function as:

- proof of thought;
- proof of work;
- proof of evolution;
- proof of collaboration;
- proof of ownership;
- eventually proof of economic value.

This should remain broader than a technical résumé because ASHWOOD also carries modeling, music, and other forms of work.

### Relationship equity layer

BUILD JOURNAL should increasingly record not only what changed, but who or what enabled the change when relevant.

Recommended fields for future entries:

- `WITH / ENABLED BY`
- `WHAT CHANGED`
- `WHY IT MATTERED`
- `NEXT MOVE`

This preserves the existing ASHWOOD principle that true education requires collaboration and makes the archive a relationship record as well as a founder record.

### Ownership / IP implication

V2 should emphasize depth and appreciation of existing assets rather than multiplying surfaces.

Practical rule:

> Make what is already owned more valuable before adding another public category.

Named frameworks, category language, build history, source records, product architecture, and reusable operating concepts should be documented cleanly enough to become teachable and referenceable without turning the site into a claims page.

### Distribution implication

ASHWOOD is one of the main distribution surfaces around the work. V2 should improve discovery and continuity across:

- Modeling
- Music
- Builds / BUILD JOURNAL
- About
- future public frameworks / essays only when real material exists

Distribution should come from stronger routing, clearer context, shareable entries, current public proof, and good attribution — not from adding noisy marketing modules.

### Pricing implication

No pricing UI is implied by this output. The relevant v2 lesson is to distinguish:

- execution cost;
- asset value;
- judgment / architecture;
- outcome value.

This may later inform Build Sponsorship, services, advisory, licensing, or product pricing, but no public pricing mechanic should be invented solely from this strategy output.

### Input 01 classification

- Reputation concentration thesis — **IMPLEMENT**
- Relationship equity / collaborator visibility — **IMPLEMENT**
- Existing-asset appreciation over more invention — **IMPLEMENT as editorial/product rule**
- Distribution around owned work — **IMPLEMENT**
- Public self-scoring — **REJECT**
- New pricing UI — **DEFER until there is a real offer**

---

## Input 02 — ASHWOOD SITREP / living field-report concept

### Source thesis

The second output proposes that ASHWOOD become a live field report on one person's work, thinking, and movement rather than a conventional static portfolio.

Its strongest concept is:

> ASHWOOD can behave like a living field report on one person's work, thinking, and movement.

That idea should strengthen the existing thesis rather than replace it:

- `I follow ideas wherever they go.` remains the personal operating principle.
- `One point of view. Many forms.` remains the ASHWOOD connective thesis.
- Modeling, Music, Builds / BUILD JOURNAL, and About remain distinct disciplines/routes.
- BUILD JOURNAL remains the durable founder archive and evidence record.

### Decision: IMPLEMENT, but not literally

Keep the concept. Modify the vocabulary and architecture.

Do not replace the current navigation with `OPERATIONS`, `FIELD NOTES`, `ARCHIVE`, etc. The existing route names remain clearer and protect the distinct identity of each practice.

Use the field-report / SITREP vocabulary as a **secondary connective grammar** across the site:

- STATUS
- SIGNAL
- FIELD NOTE
- MOVEMENT
- ASSESSMENT
- ACTIVE / IN DEVELOPMENT / ARCHIVED
- LAST UPDATED

Use these selectively, especially on Home and BUILD JOURNAL.

### Do not implement

- Do not turn the whole site into a command-center UI.
- Do not make veteran identity the public hero or primary marketing proposition.
- Do not rename Modeling, Music, Builds, or About into military terms.
- Do not publish exact live location / `CURRENT POSITION` data.
- Do not fabricate activity counts, live status, timestamps, customer state, project state, or AI assessments.
- Do not add a realtime backend simply to create the appearance of activity.
- Do not use fake terminal animation, decorative radar, tactical maps, or military cosplay.

## Proposed v2 home architecture from Input 02

### 1. Preserve the authored identity opening

Keep the landing thesis visually dominant:

- ASHWOOD
- Tahlia Ashwood Peart
- `I follow ideas wherever they go.`
- `One point of view. Many forms.`

The landing should still feel editorial, sparse, and unmistakably ASHWOOD.

### 2. Add a quiet `CURRENT / SITREP` layer after the identity moment

This is not a dashboard. It is a concise live-or-current editorial snapshot.

Example content contract:

```text
CURRENT / SITREP
STATUS      ACTIVE
UPDATED     AUG 31, 2026

CURRENT SIGNAL
A short authored observation about what is changing now.

MOVEMENT
Modeling     current work / curation state
Music        release / listening state
Builds       current product or thesis movement

LATEST FIELD NOTE
One recent thought or decision from BUILD JOURNAL.
```

The section should privilege a small number of meaningful updates rather than counters.

### 3. Route visitors into the actual bodies of work

The current explicit routes remain intact:

- Modeling
- Music
- Builds
- About

The SITREP should make those routes feel connected, not replace them.

## Technical implementation path for Input 02

The current repository is deliberately native HTML/CSS/JS and explicitly avoids adding frameworks/backends without demonstrated need. Preserve that constraint.

### V2.0 — structured current state, no new backend

Add a small structured state source, for example:

`/data/sitrep.json`

Suggested schema:

```json
{
  "updated": "2026-08-31",
  "status": "active",
  "signal": "",
  "movement": [
    { "area": "modeling", "state": "active", "note": "" },
    { "area": "music", "state": "active", "note": "" },
    { "area": "builds", "state": "active", "note": "" }
  ],
  "latestFieldNote": {
    "date": "",
    "title": "",
    "href": "/journal"
  }
}
```

Render it progressively with lightweight JavaScript. If JavaScript fails, the core site and route navigation must remain fully usable.

This provides one source of truth for the current layer without pretending the page is realtime.

### V2.1 — verified public signals

Only after V2.0 proves useful, optionally derive selected public signals from sources already intended to be public, such as:

- published BUILD JOURNAL entries;
- public GitHub activity;
- Vercel deployment status;
- released music / approved public work.

Every machine-derived signal must be factual and source-verifiable.

### V2.2 — interpreted assessment

An AI-generated `ASSESSMENT` layer can be explored later, but it must:

- operate only on explicitly public / approved inputs;
- distinguish fact from interpretation;
- never expose private founder context by default;
- never invent project state;
- be editorially reviewable before publication.

The useful question is not `what can AI say about TK?` but `what pattern is becoming visible across already-public work?`

## Design direction from Input 02

Name: **Living Editorial Field Report**

Dominant direction: editorial / publication.
Secondary quality: systems documentation.

This extends the current `Quiet shell, expressive content` system and the BUILD JOURNAL's existing `Working Publication` direction.

### Differentiation anchor

The page should feel alive because the **content state is current**, not because the interface imitates a control room.

Memorable device:

- sparse editorial status language;
- actual dated movement;
- one current signal;
- one clear field note;
- visible continuity across otherwise distinct practices.

### Motion

Use restrained transitions only when state actually changes or a visitor reveals detail. Preserve reduced-motion behavior. No fake live ticker unless there is genuinely timestamped public activity to show.

## Veteran background

Treat the field-report vocabulary as an underlying grammar, not a public identity takeover.

If veteran context is included later, About is the appropriate place for a concise factual reference. It should explain part of the observational / adaptive working style without making military service the lead proposition of ASHWOOD.

### Input 02 classification

- SITREP / living field report — **IMPLEMENT as secondary Home + Journal grammar**
- Full military information architecture — **REJECT**
- Exact current-position / location display — **REJECT**
- Realtime backend immediately — **DEFER**
- AI interpreted assessment — **DEFER until public state layer is reliable**
- Static fake activity counters — **REJECT**

---

## Architecture decision — agent-os / Workforce inside ASHWOOD

### Decision

**IMPLEMENT as enabling infrastructure and provenance, not as a separate ASHWOOD offering.**

Agent OS / Workforce is a foundational execution layer across the broader ecosystem. ASHWOOD should not reposition it as a public product, nav item, or standalone destination. Instead, ASHWOOD can become a strong public proof surface for what a governed agentic operating model actually enables.

Working relationship:

> ASHWOOD shows the work.  
> BUILD JOURNAL shows how the work happened.  
> agent-os / Workforce helps make the work possible.

### 1. Use agent-os behind the ASHWOOD build

The framework can support real ASHWOOD work such as:

- repository-aware agent routing;
- owned and vendor skill selection;
- implementation and refactoring;
- design / frontend execution;
- research and synthesis;
- testing and visual verification;
- release checks;
- documentation and handoffs.

The public site does not need to expose this machinery directly. The visible outcome should be a better-maintained, more coherent, continuously documented body of work.

### 2. Add build provenance to selected BUILD JOURNAL entries

For major releases, decisions, experiments, and builds, ASHWOOD may expose a compact provenance layer such as:

- `HUMAN` — direction, judgment, taste, approval, constraint-setting;
- `AGENT WORKFORCE` — research, implementation, synthesis, testing, documentation, or other bounded execution;
- `TOOLS / PLATFORMS` — GitHub, Vercel, ChatGPT, Codex, and other systems that materially enabled the work.

This is not a machine-generated activity log. It is an editorial record of meaningful collaboration.

Recommended UI/content label to explore:

- `HOW THIS WAS BUILT`
- `BUILD PROVENANCE`

This supports the broader ASHWOOD principle that true education requires collaboration and makes the Founder Build Archive more useful as evidence of the operating model behind the work.

### 3. Connect agent-os to Build Sponsorship / facilitation

The strongest public-facing connection is not access to the workforce itself. It is a governed execution model for selected build tasks.

Conceptual flow:

```text
ROADMAP ITEM
→ bounded task / scope
→ estimated agent execution budget
→ expected human oversight
→ sponsor funds the specific task
→ governance / authorization boundary
→ agent workforce executes within that boundary
→ human review / approval
→ verified outcome
→ evidence enters BUILD JOURNAL
```

The sponsor is therefore funding a bounded unit of governed execution, not transferring unrestricted funds or authority to an autonomous agent.

This can eventually connect the existing Build Sponsorship idea to concrete evidence of what was funded, what work occurred, how much human oversight was required, and what outcome resulted.

### 4. Allow SITREP to consume approved outcomes, not internal telemetry

The v2 SITREP may eventually surface public state that originated from agent-enabled work, but only when the result is approved and factually verifiable.

Good examples:

```text
MOVEMENT / BUILDS
Native music listening integrated.
Implementation complete · human review pending.
```

```text
LATEST SIGNAL
Mobile navigation conflict resolved after visual verification.
```

Avoid:

```text
03 AGENTS ACTIVE
07 TASKS RUNNING
WORKFORCE ONLINE
```

unless those counts become genuinely meaningful, public, verified product information. Internal workforce activity is not itself the story.

### Public-positioning implication

This architecture can strengthen the reputation goal from Input 01 without turning ASHWOOD into a technical résumé.

The public signal becomes:

> TK designs and operates governed agentic systems that can carry real work across distinct creative and product environments.

That claim should be demonstrated through provenance and outcomes rather than stated everywhere as marketing copy.

### Privacy / governance guardrails

Do not expose through ASHWOOD:

- private agent identities or unnecessary internal role names;
- credentials, permissions, tokens, mailbox access, or authorization scopes;
- private repository state;
- internal prompts or founder context that was not approved for publication;
- private task queues;
- unreviewed agent reasoning or assessments;
- execution telemetry solely to make the system appear active.

Public provenance should explain **who/what materially contributed** while protecting the internal operating surface.

### agent-os / Workforce classification

- Agent OS / Workforce as separate ASHWOOD nav/product — **REJECT**
- Agent-enabled ASHWOOD implementation — **IMPLEMENT**
- BUILD JOURNAL provenance layer — **IMPLEMENT selectively**
- Human / agent / tool attribution — **IMPLEMENT where meaningful**
- Build Sponsorship governed-execution connection — **IMPLEMENT as product-direction contract; public mechanics can phase in later**
- SITREP consumption of approved agent-enabled outcomes — **IMPLEMENT when verified**
- Public workforce dashboard / live internal agent telemetry — **REJECT**
- Exposure of private permissions, prompts, or operating context — **REJECT**

---

## Combined v2 guardrails after Inputs 01 + 02 + agent-os architecture decision

1. Identity before telemetry.
2. Actual state before animation.
3. Evidence before assessment.
4. Distinct practices remain distinct.
5. Public current state must never expose private operational context automatically.
6. No new infrastructure solely for aesthetic effect.
7. No fake realtime.
8. No dashboardification of the native ASHWOOD shell.
9. The site should make TK's point of view clearer without forcing one profession to explain every form of work.
10. Make existing owned work more legible and valuable before creating another category.
11. Collaboration and attribution are part of the evidence, not footer decoration.
12. Agent infrastructure remains infrastructure unless there is a genuine public product reason to expose it.
13. Provenance may reveal meaningful human / agent / tool collaboration; it must not leak internal control surfaces.
14. Future cross-chat outputs must be reconciled here before implementation.

## Intake status

Inputs logged: **2**, plus **1 cross-cutting architecture decision** for agent-os / Workforce.

Current intake is sufficient to begin a coherent v2 implementation plan when desired.