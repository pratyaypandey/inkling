---
name: inkling-project-entry
description: Use when adding or updating Inkling project entries, demo links, sub-pages, repository links, or lightweight project detail pages.
---

# Inkling Project Entry Workflow

Use this skill whenever adding a new demo, project row, repo connection, or sub-page.

## Choose The Link Target

Prefer targets in this order:

1. Live demo or hosted sub-page.
2. A project detail page inside this site.
3. External repository.
4. Short placeholder only if the project is intentionally not public yet.

## Front Page Row

Edit `src/components/Projects.jsx`.

Each row needs:

- `name`: short, memorable, and specific.
- `href`: relative path for local pages, absolute URL for external demos/repos.
- `desc`: one sentence, no pitch language.

Rows should stay scannable. If a project needs multiple links, add a detail page and make the row point there.

## Detail Pages And Demos

- Keep a detail page lightweight: project name, one clear sentence, demo link, repo link, status, and any constraints.
- A demo page may be more expressive than the front page, but it should still inherit Inkling's typography and color tokens where practical.
- Prefer one page per demo until there is enough content to justify navigation.
- Use relative asset and route paths so static hosting works with `base: './'`.

## External Repos

- Link to the canonical repo, not a fork or temporary branch.
- Use external links for active projects that live elsewhere.
- If a repo is private, say less rather than linking to a dead end.

## Before Finishing

- Verify every new link has a real target or an intentional placeholder.
- Run `npm run build`.
