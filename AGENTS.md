# ASHWOOD repository instructions

Read `ASHWOOD_BUILD_SPEC.md` before changing product structure, content, branding, navigation, public state, or route behavior. It is the repository source of truth.

## Active implementation context

ASHWOOD v2 is being implemented on branch `ashwood-v2`.

Current phase: **V2-A — reconciliation + content foundation**.

Do not treat open historical PRs as merge instructions. Their useful ideas are being selectively absorbed into v2. Do not merge or copy an old branch wholesale unless the current v2 source of truth explicitly calls for it.

No direct production/main changes should be made from v2 work until a rendered Vercel preview passes the release gate.

## Core identity

- **ASHWOOD** is the umbrella identity and primary site brand.
- **Tahlia Ashwood Peart** is the full personal name.
- **TK Ashwood** is the established professional/public name.
- **TAP IN** is occasional invitation language derived from T.A.P.; it is not the company or site name.
- `I follow ideas wherever they go.` is the personal operating line.
- `One point of view. Many forms.` is the connective v2 thesis.
- **BUILD JOURNAL** is the Founder Build Archive and durable system of record.
- **agent-os / Workforce** is enabling infrastructure beneath the work, not a public ASHWOOD product.

## Route ownership

- `/` is the ASHWOOD doorway and v2 `CURRENT / SITREP` surface. Identity must remain primary; current state is secondary.
- `/portfolio` is the photography-led Modeling / visual-practice route. Do not add build telemetry, SITREP, agent provenance, or technical thesis to this route.
- `/music` is the dedicated Music / native listening route. Released public work only by default; private or unfinished audio must not be exposed automatically.
- `/journal` is the Builds / BUILD JOURNAL Founder Build Archive. It owns product/build chronology, FIELD NOTES, selected BUILD PROVENANCE, evidence, collaborators, maturity, and current/next proof points.
- `/about` explains the person connecting these distinct bodies of work without becoming a long product manifesto.

Visible navigation direction for v2 is **Modeling / Music / Builds / About**, while `/journal` retains BUILD JOURNAL as its page identity.

Do not merge creative work and SaaS work into one feed or force them into one aesthetic. Connect them through ASHWOOD and the person, with contextual cross-links only.

## CURRENT / SITREP rules

Public current state lives in `/data/sitrep.json`.

- Treat it as editorial content, not presence tracking.
- Use only real, intentionally public state.
- `updated` must reflect an actual editorial update.
- No exact current location.
- No fake live counters, customer counts, active-agent counts, or task telemetry.
- No invented ticker.
- No machine-derived claim without a verifiable public source and an editorial rule.
- Core route navigation must remain usable if SITREP data or JavaScript fails.

## BUILD JOURNAL purpose

BUILD JOURNAL must serve four uses at once:

1. continuity and accountability while products evolve;
2. a truthful record of decisions, pivots, evidence, failures, and learning;
3. a professional reference showing product judgment and execution;
4. a subtle investor/pitch resource explaining the product portfolio and what is being proven.

Each product profile should include: product name, category, problem, target user/demographic where appropriate, product thesis, ecosystem role, current maturity, live preview when appropriate, evidence, collaborators/platforms, current focus, and a dated build timeline.

Distinguish contemporaneous updates from reconstructed history. Do not imply unbuilt functionality is live.

## FIELD NOTES

FIELD NOTES are an editorial type inside BUILD JOURNAL, not a parallel publication system.

- They may connect ideas across builds at the thesis level.
- They must not force distinct products into the same market or audience.
- Personal source-note material requires deliberate editorial review before publication.
- Prefer public observation, evidence, what changed, why it mattered, and the next test.

## BUILD PROVENANCE

BUILD PROVENANCE is selective public attribution, not a raw execution log.

Appropriate public fields include:

- `HUMAN` — direction, taste, architecture, decision, approval;
- `AGENT WORKFORCE` — bounded research, implementation support, synthesis, testing, documentation;
- `ENABLED BY` — named tools, models, platforms, skills, repositories, services;
- `WITH / INFLUENCED BY` — people, collaborators, communities, source material;
- `EVIDENCE` — public artifact, PR, deployment, release, result, test, or decision record;
- `NEXT MOVE` — the actual next proof point.

Never expose credentials, permissions, raw prompts, private task state, raw agent conversations, unpublished founder context, private customer/user data, or internal control surfaces.

## agent-os / Workforce boundary

ASHWOOD may show approved outcomes and provenance from agent-supported work. It must not become an Agent OS dashboard.

Publicly appropriate:

- what was built;
- what changed;
- selected agent-supported contribution;
- enabling platforms and skills;
- human review / approval boundary;
- verified outcome.

Private by default:

- internal agent identities unless intentionally published;
- prompts;
- credentials / tokens;
- routing rules;
- permissions;
- private task queues and telemetry;
- private product strategy;
- unpublished founder or customer context.

## Attribution

True education requires collaboration. Credit the sites, platforms, models, tools, people, and communities that materially enabled each build. Explain what each collaborator enabled and where the original ASHWOOD work begins. Avoid a generic logo wall.

## Migration and release safety

- GitHub is the permanent source of truth; commit every production change.
- Vercel is the production host.
- The updated GPT Portfolio Site is the primary reference for current visual identity, copy, sequencing, and recent work.
- The Adobe Portfolio is a legacy archive only. Its short-hair/fade-era photography must not become the primary current positioning merely because those files are locally available.
- Current long-hair work, BarelySain, and the updated GPT Site's rebrand lead the Portfolio once verified assets are available. Legacy images may support a later archive section.
- The GPT Site and Adobe Portfolio remain untouched source references until migration is verified.
- Never delete, modify, prematurely redirect, or depend on a legacy ChatGPT Site in production.
- Do not promote v2 until its preview passes functional, responsive, accessibility, privacy, state-truthfulness, and visual checks.
- No framework, CMS, realtime backend, or animation system should be added without demonstrated need.

## V2 implementation order

1. **V2-A:** reconcile source concepts, lock content/publication contracts, route labels, and source-of-truth rules.
2. **V2-B:** Home — identity + CURRENT / SITREP + movement + latest Field Note.
3. **V2-C:** Builds — FIELD NOTES + BUILD PROVENANCE + attribution + chronology/current proof.
4. **V2-D:** Music — native released-audio listening.
5. **V2-E:** About + Portfolio connective pass.
6. **V2-F:** prepare verified future public-signal hooks; do not activate private/automatic signals.
7. **V2-G:** rendered verification and release gate.

When uncertain, prioritize: function, clarity, content, design, decoration.

For v2, also apply:

1. identity before telemetry;
2. actual state before animation;
3. evidence before assessment;
4. distinct practices remain distinct;
5. no fake realtime;
6. no dashboardification;
7. no new infrastructure solely for aesthetic effect.

## Repository design skills

Before changing any browser-rendered surface, read `skills/SKILL_RESOLUTION.md` and the selected vendored `SKILL.md` files completely. For `/portfolio`, use the `creative-portfolio` stack defined there. `scroll-experience` is optional and subordinate to photography; never use it to justify scroll hijacking, content delays, or motion that competes with the work.
