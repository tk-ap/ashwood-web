# ASHWOOD v2 — Reconciliation Record

Status: **V2-A foundation complete; ready for V2-B implementation**  
Branch: `ashwood-v2`  
Phase completed: **V2-A — reconciliation + content foundation**

This file records which concepts from the open historical ASHWOOD PRs are being absorbed into v2 and which are intentionally not being copied forward.

## Baseline

`ashwood-v2` was cut from current `main` at commit `3bac50d225f52c62818f0074b69042d7020f9cb8`.

V2 is not a merge train for the old branches. The rule is:

> absorb the strongest verified idea, then implement it once inside the v2 architecture.

## Locked route direction

Public route structure:

- `/` — ASHWOOD + CURRENT / SITREP
- `/portfolio` — Modeling / visual practice
- `/music` — Music / native listening
- `/journal` — Builds / BUILD JOURNAL
- `/about` — About

Visible primary labels for the v2 implementation pass:

- Modeling
- Music
- Builds
- About

`Builds` is the navigation label; `BUILD JOURNAL` remains the page/editorial identity.

The route labels are locked for implementation unless rendered testing reveals a concrete usability problem.

## Navigation behavior rule

Navigation must remain static, visible, keyboard accessible, and usable on mobile before any decorative interaction is added.

`TAP IN` may remain an interaction language, but the prior expanding hover/focus treatment from PR #9/#10 is **not automatically inherited**. It can be reintroduced only after mobile hit-area, focus, reduced-motion, and overlay-blocking tests pass.

This specifically protects the known failure mode where decorative/hotspot behavior can interfere with access to static home links.

## PR #11 — Field Notes

Decision: **ABSORB CONCEPT + PUBLIC THESIS; DO NOT COPY PERSONAL SOURCE NOTE WHOLESALE.**

Preserve:

- FIELD NOTE as a contemporaneous editorial type inside BUILD JOURNAL;
- BUILD JOURNAL as the durable system of record;
- cross-build thesis synthesis;
- the distinction between a source note and a public edited note;
- the rule that shared patterns do not force every product into one market.

V2-A action completed:

- publication contract added;
- sanitized editorial draft retained for `The distance between available and usable.`;
- personally sensitive source context excluded from automatic publication pending explicit editorial review.

## PR #10 — Combined preview

Decision: **SELECTIVELY ABSORB, THEN SUPERSEDE AFTER EQUIVALENT V2 WORK IS VERIFIED.**

Absorb:

- dedicated `/music` route direction;
- Modeling / Music / Builds / About navigation direction;
- the idea that Music is a distinct creative practice;
- selected identity / operating-philosophy material only after editing;
- repository-level legacy context only when it is appropriate to preserve and not automatically render publicly.

Do not inherit automatically:

- dense About copy;
- private/unreleased listening links;
- placeholder native-listening claims;
- the prior `TAP IN` expanding-nav interaction;
- any route change that has not passed v2 mobile/accessibility review.

## PR #9 — Builds label + TAP IN nav

Decision: **SUPERSEDED BY V2.**

Absorb:

- `Builds` as the visible nav label.

Defer:

- animated `TAP IN →` reveal until rendered verification proves it helps rather than obstructs navigation.

## PR #8 — About / operating philosophy

Decision: **SELECTIVELY ABSORB, THEN SUPERSEDE.**

Preserve as editorial direction:

- clarity before volume;
- evidence before presentation;
- hypothesis → small test → real signal → decision;
- making complexity understandable enough to act on responsibly.

Do not copy the full About draft wholesale. V2-E owns the final public edit.

Deeper personal/family source context remains subject to deliberate editorial review and is not promoted automatically during V2-A.

## PR #3 / #1 — earlier Portfolio branches

Decision: **OBSOLETE.**

Do not revive their legacy-first portfolio structures. The current merged native portfolio remains the v2 baseline.

## V2-A content foundation created

### `/data/sitrep.json`

Single source for manually approved public current state in v2.0.

### `/data/publication-contracts.json`

Machine-readable rules for:

- FIELD NOTES;
- BUILD PROVENANCE;
- SITREP publication/privacy behavior.

### `/journal/field-notes/2026-08-28-distance-between-available-and-usable.md`

Sanitized, non-rendered editorial draft that carries the useful cross-build thesis from PR #11 without promoting personally sensitive source-note material.

## Privacy / publication boundary

Repository source material is not equivalent to approved public copy.

Do not automatically render:

- private founder context;
- sensitive personal source-note details;
- private/unreleased audio;
- prompts or agent conversations;
- credentials / permissions / task telemetry;
- unpublished user/customer information.

## agent-os / Workforce

Locked decision:

> agent-os / Workforce is enabling infrastructure beneath ASHWOOD, not a public ASHWOOD product.

ASHWOOD may publish selected provenance and verified outcomes from agent-supported work. It must not expose internal workforce telemetry or control surfaces.

## V2-A verification

Comparison against `main` after the foundation pass:

- status: `ahead`;
- ahead by: 6 commits at verification time;
- behind by: 0;
- baseline / merge base: `3bac50d225f52c62818f0074b69042d7020f9cb8`;
- changed surfaces at verification: `AGENTS.md`, `ASHWOOD_BUILD_SPEC.md`, `data/*`, this reconciliation record, and one non-rendered Field Note source file;
- no HTML, CSS, browser JavaScript, route implementation, framework, CMS, or backend changes were included in V2-A.

## V2-A acceptance checklist

- [x] implementation branch cut from current production baseline;
- [x] source-of-truth build spec updated for v2;
- [x] agent instructions updated for v2;
- [x] route labels / route responsibilities locked;
- [x] structured SITREP source created;
- [x] public publication/provenance rules created;
- [x] historical PRs reconciled conceptually rather than merged blindly;
- [x] private/personal source material excluded from automatic publication;
- [x] no framework/backend added;
- [x] no rendered design expansion yet;
- [x] sanitized FIELD NOTE source draft added;
- [x] branch compared against `main` and confirmed foundation-only.

## Handoff to V2-B

V2-B may now modify the rendered Home surface, but must begin by reading:

1. `ASHWOOD_BUILD_SPEC.md`;
2. `AGENTS.md`;
3. `data/sitrep.json`;
4. `data/publication-contracts.json`;
5. the relevant repository design-skill instructions.

The next build target is the Home **Living Editorial Field Report**: preserve identity first, then add a sparse CURRENT / SITREP layer, movement, latest Field Note, and resilient static route access.
