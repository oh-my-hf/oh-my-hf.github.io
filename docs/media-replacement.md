# Placeholder media replacement

Product screenshots and recordings are not available yet. Marketing visuals use HTML/CSS UI mockups (and a generated OG image) that can be swapped for real assets later.

Each mockup component includes a `PLACEHOLDER` comment with the intended filename.

## Inventory

| Location | Component / asset | Current state | Future asset spec | Replacement steps |
| -------- | ----------------- | ------------- | ----------------- | ----------------- |
| Hero | `src/components/mockups/HeroAppWindow.astro` | CSS model of the macOS-style triple-pane app window | `hero-app-window.png` — recommended 2560×1600 @2x (or short silent loop ≤8s WebM/MP4 of the same view) | Capture a real app screenshot at that size. Replace the mockup markup in `Hero.astro` with an `<img>` (or `<video>`) pointing at `public/media/hero-app-window.png`, keeping explicit `width`/`height`. Remove or keep the Astro mockup file unused. |
| Features · Browse | `src/components/mockups/FeatureBrowse.astro` | CSS close-up of the triple-pane browse UI | `feature-browse.png` — recommended 2560×1600 @2x | Same pattern: drop PNG under `public/media/`, swap the mockup in `Features.astro` for an `<img>`. |
| Features · Command | `src/components/mockups/FeatureCommandPalette.astro` | CSS close-up of the Cmd+K palette | `feature-command-palette.png` — recommended 2560×1600 @2x | Same as above. |
| Features · Downloads | `src/components/mockups/FeatureDownloads.astro` | CSS close-up of the download queue | `feature-downloads.png` — recommended 2560×1600 @2x | Same as above. |
| Features · Cache | `src/components/mockups/FeatureCache.astro` | CSS close-up of cache disk usage | `feature-cache.png` — recommended 2560×1600 @2x | Same as above. |
| Social share | `public/og.png` | Generated static PNG (1200×630) via `pnpm generate:og` | Keep 1200×630; optionally regenerate from a real hero crop | Edit `scripts/generate-og.mjs` (or replace `public/og.png` directly). Re-run `pnpm generate:og` if using the script. Do not add HF logos or HF yellow. |

## Conventions

- Prefer `public/media/<name>.png` for screenshots so paths stay stable.
- Always set explicit `width` and `height` (and `alt` from i18n) to avoid CLS.
- Do not introduce Hugging Face logos, mascots, 🤗 emoji, or HF brand yellow (`#FFD21E` and near).
- Coming soon / trust / download / FAQ sections intentionally have no product mockups.
