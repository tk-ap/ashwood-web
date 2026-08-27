# ASHWOOD

## Personal Work Ecosystem — Build Specification

**Owner:** Tahlia Ashwood Peart  
**Professional/public name:** TK Ashwood  
**Primary identity:** ASHWOOD  
**Interaction language:** TAP IN  
**Repository:** `tk-ap/ashwood-web`  
**Production host:** Vercel  
**Status:** active migration

## North star

ASHWOOD is the doorway into the different things Tahlia Ashwood Peart is making, building, exploring, and involved with. It is neither one conventional portfolio nor one creative project.

> **Different work. Same person.**

Distinct bodies of work must retain their own content, audience, visual identity, and editorial logic. ASHWOOD and the person establish their relationship.

## Brand architecture

- **Tahlia Ashwood Peart:** full personal name.
- **TK Ashwood:** established professional/public identity.
- **ASHWOOD:** umbrella identity and strongest site-level brand.
- **TAP IN:** a restrained invitation into the ecosystem, derived from T.A.P. It must never replace or visually overpower ASHWOOD.

The landing page should communicate “Things I’m making, building, and exploring” and feel like a doorway rather than a conventional portfolio homepage.

## Information architecture

### `/` — ASHWOOD landing

A concise personal work index that introduces the person and routes visitors into distinct work. Avoid lengthy ecosystem explanations.

### `/portfolio` — Creative ventures

The creative-ventures portfolio includes, as real material becomes available: modeling; fashion, runway, campaigns, and photography; acting and performance; music production; and other creative collaborations and selected visual work.

Modeling is the first migration checkpoint, not the permanent limit of the Portfolio.

The experience should be editorial, minimal, image-led, elegant, quiet, immersive, responsive, and accessible. It must not resemble a SaaS application, dashboard, startup landing page, or generic software portfolio. Photography and work samples are the primary content.

### `/journal` — BUILD JOURNAL

BUILD JOURNAL is both a SaaS product portfolio and a living build record. It must explain:

- each product and its category;
- the issue it aims to solve;
- the intended user and target demographic;
- the product thesis and ecosystem role;
- current maturity and honest capability status;
- evidence, previews, artifacts, decisions, failures, and lessons;
- the dated journey from ideation through launch and first paid client;
- the sites, platforms, tools, models, collaborators, and communities that enabled the work.

It must support continuity, professional/resume use, and investor/pitch use without reading like a startup-marketing page. Clearly distinguish reconstructed history from contemporaneous updates and simulation from live capability.

Creative work and SaaS work must not become a single feed. Cross-link only when there is a genuine relationship.

### `/about` — About Tahlia

Explain the person connecting the work and the range of disciplines without forcing every discipline into a single narrative.

Do not build future routes until real content requires them.

## BUILD JOURNAL product-profile contract

Every SaaS product profile should support:

1. product name and one-sentence thesis;
2. problem and why it matters;
3. target user/demographic;
4. intelligence/category framing;
5. ecosystem role and relevant integrations;
6. current maturity and availability;
7. current product surface or UI preview;
8. live/public link when genuinely available;
9. evidence and provenance;
10. current focus and what is being proven next;
11. collaborators and enabling platforms;
12. chronological milestones from idea to first paid client.

The public journal should never automatically publish private founder context. Public records require explicit review and approval.

## Attribution principle

True education requires collaboration. Without the existing environment, the builds do not make sense. Acknowledge every platform, site, model, skill, person, or community that materially contributed. Explain what was enabled, how it shaped the work, and where the ASHWOOD contribution begins. Do not reduce this to a logo wall.

## Portfolio migration sources

Primary references:

1. `https://tk-ashwood-portfolio.tahlia-ashwood.chatgpt.site/`
2. `https://tkashwood.myportfolio.com/`

The original sources must remain untouched. The Vercel reconstruction must be independent and backed by GitHub.

### Modeling requirements

- Preserve the established visual identity and photography where assets are available.
- BarelySain is the latest work and must remain distinct from unrelated work.
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
          +-- /journal
          +-- /about
```

Do not introduce a framework, CMS, animation system, or abstraction without a demonstrated need. Separate content from presentation where useful. All production changes must be committed.

## Quality requirements

- Semantic HTML and logical heading hierarchy.
- Keyboard navigation and visible focus states.
- Useful alt text and accessible interactive labels.
- Strong desktop, tablet, and mobile layouts.
- Responsive, appropriately sized images with lazy loading where useful.
- No full-resolution loading of the entire image library on first paint.
- Restrained motion that never competes with the work.
- No major broken links, runtime errors, or fabricated capability claims.

## Migration sequence

### Phase 1 — Portfolio safety checkpoint

Inspect both references; reconstruct the modeling portfolio; archive photography and credits in GitHub; validate function, fidelity, responsive behavior, accessibility, lightbox, and performance; deploy a Vercel preview; verify it; and promote only after verification.

Phase 1 is complete only when the correct hero, distinct BarelySain presentation, deduplicated galleries, DTLA knit-sweater selection, accurate Malibu classification, image enlargement, responsive layouts, and production deployment are verified.

### Phase 2 — ASHWOOD ecosystem

Refine the ASHWOOD landing, expand the creative Portfolio to additional real ventures, implement BUILD JOURNAL product profiles/timelines, and complete About. Keep Portfolio and BUILD JOURNAL visually distinct.

### Phase 3 — Durable publishing

Add a custom domain, contextual cross-links, refined navigation, and an approved capture-to-publication workflow. Add content tooling only when repeated publishing proves it necessary.

## Decision rule

Prioritize function, clarity, content, design, then decoration.

For Portfolio, let the work do the talking. For BUILD JOURNAL, let the process and product evidence be visible. For the landing page, let the person connect the dots.
