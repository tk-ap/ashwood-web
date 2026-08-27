# Build Journal Design Record — Working Publication

Status: first native `/journal` editorial implementation.

## Purpose

Bring BUILD JOURNAL into ASHWOOD as a native public record rather than an outbound link to a separate GPT Site. Preserve the original journal thesis and copy tone while giving it a cleaner ASHWOOD-native visual system.

The journal should make product work legible while it is still becoming: what was believed, what was built, what changed, what broke, what evidence exists, who enabled the work, and what must be proven next.

## Relationship to Portfolio

The routes share authorship, not a template.

- Portfolio = the work in images.
- Build Journal = the work in motion.
- ASHWOOD = the person and authorship connecting both.

Shared visual grammar:

- ASHWOOD wordmark and restrained navigation;
- near-black / warm-white foundation;
- extreme editorial type scale;
- small uppercase metadata;
- thin rules;
- generous negative space;
- deliberate asymmetry;
- fluorescent green / magenta used sparingly as editorial signals.

Distinct journal grammar:

- chronology instead of photographic sequence;
- evidence and metadata instead of image dominance;
- product chapters rather than SaaS cards;
- status vocabulary and dated records rather than marketing feature blocks.

## Named aesthetic direction

**Working Publication**

Dominant direction: editorial / field journal.
Secondary quality: systems documentation.

The page should feel like an authored publication documenting active product work, not a dashboard, investor deck, developer docs site, or startup landing page.

## Differentiation anchor

**Evidence + chronology.**

The recurring visual device is a dated/event vocabulary that can eventually become a vertical chronology rail: DECISION, SHIPPED, EVIDENCE, FAILED TEST, THESIS. Product chapters can vary in visual weight according to actual activity rather than being forced into equal cards.

## Content contract

Each future product profile should support:

1. product name and one-sentence thesis;
2. problem and why it matters;
3. target user/demographic;
4. intelligence/category framing;
5. ecosystem role and integrations where real;
6. current maturity and availability;
7. product surface or UI evidence;
8. live/public link where genuinely available;
9. evidence and provenance;
10. current focus and what is being proven next;
11. collaborators and enabling platforms;
12. dated milestones from idea through launch and first paid client.

Live, simulated, planned, reconstructed, and historical states must remain visibly distinct.

## Current index scope

The first native pass establishes:

- BUILD JOURNAL hero and original “Building in context” direction;
- product index for ALVIRA, Ailhat, Agent Control, and Ledgato;
- evidence methodology;
- chronology vocabulary;
- ASHWOOD cross-navigation;
- design language that can later expand into `/journal/<product>` profiles.

No fabricated activity counters, fake dates, fake customer metrics, or simulated evidence are introduced in this pass.

## Verification before merge

- review Vercel preview at desktop/tablet/phone widths;
- measure horizontal overflow at desktop, <=1024px, and approximately 390px;
- verify keyboard navigation and visible focus;
- check contrast, heading hierarchy, and link names;
- verify external product links;
- confirm the Journal remains visually related to Portfolio without becoming the same layout;
- reconcile shared visual tokens after Portfolio PR #5 is approved;
- keep draft until preview review is complete.
