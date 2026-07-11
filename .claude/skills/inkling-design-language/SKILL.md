---
name: inkling-design-language
description: Use when changing Inkling's visual system, layout, copy tone, masthead, project rows, or any page that should feel native to the Inkling portfolio.
---

# Inkling Design Language

Use this skill whenever a change affects how Inkling looks, reads, or feels.

## Read First

1. `src/styles.css`
2. `src/tokens.js`
3. `src/components/Masthead.jsx`
4. `src/components/Projects.jsx`

## Principles

- Keep Inkling as a quiet portfolio index for demos and experiments.
- Preserve the warm paper, ink, muted text, fine rule, and vermilion vocabulary.
- Let empty space do real work. The front page should not become a dense dashboard.
- Make project rows feel like filesystem entries or notes, not product cards.
- Write copy that is compact, specific, and a little technical.

## Visual Rules

- Use a single centered column unless a specific demo page needs another layout.
- Do not add card grids, gradient backgrounds, decorative blobs, or generic SaaS sections.
- Do not introduce new accent colors without also updating `src/tokens.js` and explaining why.
- Keep borders thin and functional.
- Keep hover states restrained: color, background, underline, or arrow emphasis is enough.
- Keep typography monospace and readable; avoid oversized headings inside compact surfaces.

## Copy Rules

- Prefer lowercase where it fits the existing voice.
- Avoid marketing claims, feature lists, and promotional superlatives.
- Make descriptions concrete: what the demo is, what it does, or what it connects to.
- Keep project descriptions to one sentence on the front page.

## Before Finishing

- Check the page at mobile and desktop widths.
- Confirm text does not wrap awkwardly inside rows or links.
- Run `npm run build`.
