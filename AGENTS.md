# ASHWOOD repository instructions

Read `ASHWOOD_BUILD_SPEC.md` before changing product structure, content, branding, or navigation. It is the repository source of truth.

## Core identity

- **ASHWOOD** is the umbrella identity and primary site brand.
- **Tahlia Ashwood Peart** is the full personal name.
- **TK Ashwood** is the established professional/public name.
- **TAP IN** is occasional invitation language derived from T.A.P.; it is not the company or site name.
- The unifying idea is: **Different work. Same person.**

## Route ownership

- `/` is a concise doorway into the ecosystem: things Tahlia is making, building, and exploring.
- `/portfolio` is the **creative-ventures portfolio**. It begins with modeling and should expand only when real content exists for acting, music production, campaigns, performance, and other creative collaborations. It is visual, editorial, minimal, and photography-led.
- `/journal` is the **SaaS/build portfolio and living record**. It explains each product, the issue it aims to solve, its target demographic, current maturity, evidence, and the dated journey from ideation through launch and first paid client.
- `/about` explains the person connecting these distinct bodies of work.

Do not merge creative work and SaaS work into one feed or force them into one aesthetic. Connect them through ASHWOOD and the person, with contextual cross-links only.

## BUILD JOURNAL purpose

BUILD JOURNAL must serve four uses at once:

1. continuity and accountability while products evolve;
2. a truthful real-time record of decisions, pivots, evidence, failures, and learning;
3. a professional résumé/reference showing product judgment and execution;
4. a subtle investor/pitch resource explaining the product portfolio and what is being proven.

Each product profile should include: product name, category, problem, target user/demographic, product thesis, ecosystem role, current maturity, live preview when appropriate, evidence, collaborators/platforms, current focus, and a dated build timeline. Distinguish contemporaneous updates from reconstructed history. Do not imply unbuilt functionality is live.

## Attribution

True education requires collaboration. Credit the sites, platforms, models, tools, people, and communities that materially enabled each build. Explain what each collaborator enabled and where the original ASHWOOD work begins. Avoid a generic logo wall.

## Migration safety

- GitHub is the permanent source of truth; commit every production change.
- Vercel is the production host.
- The updated GPT Portfolio Site is the primary reference for current visual identity, copy, sequencing, and recent work.
- The Adobe Portfolio is a legacy archive only. Its short-hair/fade-era photography must not become the primary current positioning merely because those files are locally available.
- Current long-hair work, BarelySain, and the updated GPT Site's rebrand lead the Portfolio once verified assets are available. Legacy images may support a later archive section.
- The GPT Site and Adobe Portfolio remain untouched source references until migration is verified.
- Never delete, modify, prematurely redirect, or depend on a legacy ChatGPT Site in production.
- Do not promote a reconstruction until its preview passes functional, responsive, accessibility, and visual checks.

## Current implementation order

1. Reconstruct the creative Portfolio faithfully as a standalone `/portfolio` experience.
2. Archive available photography and credits in this repository.
3. Verify desktop, tablet, mobile, keyboard navigation, image lightbox, performance, and broken links.
4. Deploy and verify a Vercel preview.
5. Promote the verified Portfolio.
6. Expand the broader ASHWOOD landing, BUILD JOURNAL product profiles/timeline, and About experience.

When uncertain, prioritize: function, clarity, content, design, decoration.

## Repository design skills

Before changing any browser-rendered surface, read `skills/SKILL_RESOLUTION.md` and the selected vendored `SKILL.md` files completely. For `/portfolio`, use the `creative-portfolio` stack defined there. `scroll-experience` is optional and subordinate to photography; never use it to justify scroll hijacking, content delays, or motion that competes with the work.
