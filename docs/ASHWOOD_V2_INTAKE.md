# ASHWOOD v2 — Implementation Intake

Status: active working brief for reconciling cross-chat outputs before UI implementation.
Branch: `ashwood-v2-intake`
Rule: do not treat any single prior chat output as canonical on its own. Reconcile each recommendation against `ASHWOOD_BUILD_SPEC.md`, `AGENTS.md`, the native design system, existing merged routes, and other v2 inputs before implementation.

## V2 objective

ASHWOOD v2 should make the site feel more alive, more legible as a body of ongoing work, and more useful as public proof of TK Ashwood's evolving point of view — without turning the site into a dashboard, military-themed interface, or generic personal brand.

The strongest synthesis from the first v2 input is:

> ASHWOOD can behave like a living field report on one person's work, thinking, and movement.

That idea should strengthen the existing thesis rather than replace it:

- `I follow ideas wherever they go.` remains the personal operating principle.
- `One point of view. Many forms.` remains the ASHWOOD connective thesis.
- Modeling, Music, Builds / BUILD JOURNAL, and About remain distinct disciplines/routes.
- BUILD JOURNAL remains the durable founder archive and evidence record.

## Input 01 — Reputation concentration + living SITREP layer

### Source ideas worth preserving

The source output identifies two related opportunities:

1. The ownership/IP trajectory is stronger than the public reputation trajectory. The site should make the underlying capability and point of view easier for outsiders to recognize.
2. ASHWOOD can feel like a living field report rather than a static portfolio by surfacing current status, recent movement, signals, field notes, and eventually interpreted assessments.

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

## Proposed v2 home architecture

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

## Reputation / public-proof implication

The source output correctly identifies that ASHWOOD should help outsiders understand the through-line behind the builds.

Do **not** publish private directional scores such as `6.5/10`, `9/10`, etc.

Instead, v2 should make the following visible through evidence:

- the recurring interest in context, intelligence, authorization, and governed execution;
- the way product concepts evolved rather than appearing fully formed;
- the user's ability to turn ambiguous problems into systems and named frameworks;
- collaborators, tools, platforms, and influences that materially moved the work;
- what changed, what was learned, and what is being tested next.

This strengthens the user's recognizable public capability without reducing ASHWOOD to a technical résumé.

## Relationship equity layer

BUILD JOURNAL should increasingly record not only what changed, but who or what enabled the change when relevant.

Recommended fields for future entries:

- `WITH / ENABLED BY`
- `WHAT CHANGED`
- `WHY IT MATTERED`
- `NEXT MOVE`

This preserves the existing ASHWOOD principle that true education requires collaboration and makes the archive a relationship record as well as a founder record.

## Technical implementation path

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

## Design direction

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

## V2 guardrails

1. Identity before telemetry.
2. Actual state before animation.
3. Evidence before assessment.
4. Distinct practices remain distinct.
5. Public current state must never expose private operational context automatically.
6. No new infrastructure solely for aesthetic effect.
7. No fake realtime.
8. No dashboardification of the native ASHWOOD shell.
9. The site should make TK's point of view clearer without forcing one profession to explain every form of work.
10. Future cross-chat outputs must be reconciled here before implementation.

## Intake status

Input 01 classification:

- Reputation concentration thesis — **IMPLEMENT as public-proof strategy**
- Relationship equity / collaborator visibility — **IMPLEMENT in BUILD JOURNAL content contract**
- SITREP / living field report — **IMPLEMENT as secondary Home + Journal grammar**
- Full military information architecture — **REJECT**
- Exact current-position / location display — **REJECT**
- Realtime backend immediately — **DEFER**
- AI interpreted assessment — **DEFER until public state layer is reliable**
- Static fake activity counters — **REJECT**

More v2 outputs should be appended and reconciled before the visual implementation branch is cut.