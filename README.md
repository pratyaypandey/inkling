# inkling

Inkling is a lightweight home for small AI projects, demos, experiments, and the repositories behind them.

The site is intentionally spare: a warm paper page, a small wordmark, and a growing `~/projects` list. It should feel like a portfolio holder rather than a product homepage. The work is the focus.

## What Lives Here

- A front page for Inkling and the people behind it.
- Links to demos, project pages, and external repositories.
- A place to collect one-off experiments without turning each one into a full site.
- Design language and agent guidance for keeping future additions coherent.

## Design Direction

Inkling should stay quiet, legible, and expressive through restraint.

- Use warm paper, dark ink, muted text, fine rules, and one vermilion accent.
- Prefer monospace typography and copy that reads like a short note or source comment.
- Keep the front page sparse. Add density in project detail pages, not in the masthead.
- Treat each project row as a doorway: title, arrow, one sentence, then a demo or repo link.
- Avoid generic SaaS polish, oversized marketing sections, decorative cards, and broad gradients.

## Local Development

Install dependencies:

```sh
npm install
```

Run the dev server:

```sh
npm run dev
```

Build for production:

```sh
npm run build
```

Preview the production build:

```sh
npm run preview
```

## Project Structure

```text
src/
  App.jsx                  page shell
  components/
    Masthead.jsx           wordmark and tagline
    Projects.jsx           project list data and rows
    WeToggle.jsx           people reveal interaction
    GraphMark.jsx          small network mark
  styles.css               visual system and layout
  tokens.js                JavaScript mirror of core colors
```

## Adding A Project

Start in `src/components/Projects.jsx`.

Each project should have:

- `name`: the display title.
- `href`: a demo page, sub-page, or external repository.
- `desc`: one quiet sentence describing what the viewer can expect.

For projects that need more than a row, add a focused page or route and link to it from the list. Keep the front page as the index.

## Agent Notes

Claude-facing guidance lives in `CLAUDE.md` and `.claude/skills/`. Use those files when extending the design language, adding demo pages, or connecting projects to other repositories.
