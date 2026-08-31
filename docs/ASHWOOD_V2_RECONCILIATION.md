# ASHWOOD v2 — Reconciliation Record

Status: active implementation record  
Branch: `ashwood-v2`  
Phase: **V2-A — reconciliation + content foundation**

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

V2-A action:

- add publication contract;
- retain a sanitized editorial draft for `The distance between available and usable.`;
- defer any personally sensitive source context until explicit editorial approval.

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

### FIELD NOTE draft source

A sanitized non-rendered draft may be stored under `journal/field-notes/` so v2 can absorb the useful thesis from PR #11 without copying personally sensitive source material into the public experience.

## Privacy / publication boundary

During V2-A, repository source material is not equivalent to approved public copy.

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
- [ ] add sanitized FIELD NOTE source draft;
- [ ] compare branch against `main` and confirm V2-A contains only foundation changes.

Once the final two items are complete, V2-A is ready to hand into V2-B.
