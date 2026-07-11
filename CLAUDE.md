# Inkling Agent Guidance

This repo is a lightweight portfolio holder for Inkling projects. Keep the work expressive, but do not turn the front page into a marketing site.

## Product Shape

- The front page is an index, not a landing page.
- Future demos may live as singular pages, sub-pages, or links out to other repos.
- Project entries should point to the best available artifact: live demo first, repo second, write-up third.
- Preserve the sense of quiet space between the masthead and `~/projects`.

## Design Language

- Source of truth: `src/styles.css` and `src/tokens.js`.
- Palette: warm paper, dark ink, muted text, fine rules, one vermilion accent.
- Typography: JetBrains Mono, short lines, compact labels, no hero-scale embellishment beyond the wordmark.
- Layout: one centered narrow column, generous vertical space, full-width project rows, no cards.
- Motion: subtle hover states only. Do not add ornamental animation unless a demo itself requires it.
- Copy: terse, human, lowercase-friendly, slightly technical. Prefer phrases that feel like comments or commit messages.

## Engineering Constraints

- Keep the app small: React + Vite, no routing library until there is a real need.
- Add data close to where it is rendered unless project growth justifies extraction.
- Use stable relative paths because `vite.config.js` sets `base: './'`.
- Run `npm run build` before pushing changes.
- Do not remove `project/` or `chats/`; they preserve the design handoff context.

## Relevant Skills

- Use `.claude/skills/inkling-design-language/SKILL.md` before changing layout, visual style, or copy tone.
- Use `.claude/skills/inkling-project-entry/SKILL.md` before adding projects, demos, sub-pages, or repo links.
