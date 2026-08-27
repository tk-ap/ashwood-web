# ASHWOOD

Personal work ecosystem for Tahlia Ashwood Peart (TK Ashwood).

## Phase 1

The first implementation checkpoint is an independent reconstruction of the creative Portfolio, beginning with modeling. The original ChatGPT Site and Adobe Portfolio remain untouched references.

Target architecture:

- `/` — ASHWOOD landing / personal work index
- `/portfolio` — Creative ventures: modeling first, then acting, music production, and other real creative work
- `/journal` — SaaS product portfolio + real-time BUILD JOURNAL
- `/about` — About Tahlia

Brand hierarchy:

- **Tahlia Ashwood Peart** — full personal name
- **TK Ashwood** — established professional/public identity
- **ASHWOOD** — umbrella identity
- **TAP IN** — invitation/interaction language; not the primary brand

## Deployment

This repository is intentionally a minimal static starting point connected directly to Vercel. No CMS or application framework is required for the initial checkpoint.

Production flow:

`GitHub main → Vercel → Production`

## Source of truth

`ASHWOOD_BUILD_SPEC.md` governs product, migration, content, brand, and architecture decisions. `AGENTS.md` contains the concise operating instructions every repository agent must follow.

The original Portfolio, Adobe Portfolio, and BUILD JOURNAL ChatGPT Sites remain reference/legacy versions. They must not be modified or used as production dependencies.
