// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://ohmyhf.app',
  // Temporary GitHub Pages project-site prefix until ohmyhf.app goes live
  // (set in CI; remove BASE_PATH from the workflow once the custom domain is configured).
  base: process.env.BASE_PATH || '/',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
