# ohmyhf website

Marketing site for **ohmyhf** — an unofficial, open-source Hugging Face desktop client (Apache-2.0).

This repository builds a static Astro site (English at `/`, Simplified Chinese at `/zh/`) suitable for GitHub Pages or Cloudflare Pages.

> Not affiliated with Hugging Face, Inc. “Hugging Face” is a trademark of Hugging Face, Inc., used here only for referential purposes.

## Requirements

- Node.js 22.12+
- [pnpm](https://pnpm.io/) 10+

## Local development

```bash
pnpm install
pnpm dev
```

Open [http://localhost:4321/](http://localhost:4321/) (English) and [http://localhost:4321/zh/](http://localhost:4321/zh/) (简体中文).

## Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `pnpm dev`      | Start the Astro dev server |
| `pnpm build`    | Production static build → `dist/` |
| `pnpm preview`  | Preview the production build |
| `pnpm lint`     | Run ESLint               |
| `pnpm format`   | Format with Prettier     |

## Build

```bash
pnpm build
```

Output is written to `dist/` and can be served by any static host.

## Deployment

### GitHub Pages

1. In the repository settings, enable **GitHub Pages** with source **GitHub Actions**.
2. Push to `main`. The workflow in `.github/workflows/build.yml` runs `pnpm lint`, `pnpm build`, uploads `dist/`, and deploys with `actions/deploy-pages` (deploy job is gated to `main`).
3. Optionally set a custom domain in Pages settings. Update `site` in `astro.config.mjs` to match.

### Cloudflare Pages

1. Create a Cloudflare Pages project linked to this repository.
2. Build settings:
   - **Framework preset:** None / Astro
   - **Build command:** `pnpm build`
   - **Build output directory:** `dist`
   - **Node version:** 22 (or set `NODE_VERSION=22` in environment variables)
3. Install command: `pnpm install` (enable pnpm in the Pages build image, or use `npx pnpm@10 install`).
4. Deploy on every push to `main` (or your chosen production branch).

## Placeholder media

Product screenshots and recordings are not available yet. UI is implemented as HTML/CSS mockups that can be swapped for real assets later. See [`docs/media-replacement.md`](docs/media-replacement.md) for the inventory and replacement steps (added in a later phase).

## License

Apache-2.0 — see [LICENSE](LICENSE). Copyright 2026 ohmyhf contributors.
