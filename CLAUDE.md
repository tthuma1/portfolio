# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio website for Tim Thuma (https://timthuma.com), built with Nuxt 4 (Vue 3) and Tailwind CSS. The production site is statically generated.

## Commands

```bash
npm install          # install dependencies (runs `nuxt prepare` via postinstall)
npm run dev          # dev server with hot reload at localhost:3000
npm run generate     # static generation for production (output in .output/)
npm run build        # SSR build
npm run preview      # preview a production build
```

There are no tests or linters configured.

## Architecture

Single-page site — there is no `pages/` directory. `app/app.vue` is the entire page: it composes `TheHeader`, `SectionLanding`, the content cards, and `SectionContact`, and owns two pieces of client-side state:

- **Dark mode**: toggled via `TheHeader`'s `toggleDark` event, applied by putting the `dark` class on the root div (Tailwind `darkMode: 'class'`), and persisted in `localStorage.theme`.
- **Responsive layout**: `app.vue` tracks `window.innerWidth` and renders the content cards in `v-if` desktop (two columns) or mobile (single column) layouts. It initializes to 1000px pre-mount to avoid layout shift on desktop.

Components in `app/components/` are auto-imported by Nuxt. The `Card*` components (About, Skills, Achievements, Projects, Hobbies) all wrap their content in `ContentCard`, the shared card shell with the heading slot. Navigation anchors for these sections live in `app/assets/links.js` and correspond to `#about`, `#skills`, etc.

Other notable points:

- `nuxt.config.ts` holds all `<head>` metadata: SEO/OG tags plus a large block of PWA apple-touch-startup-image links. The Inter font faces are inlined in a `<style>` block in `app.vue` (deliberately, to avoid an external stylesheet request).
- Custom Tailwind theme bits are in `tailwind.config.js`: a `neutral-850` color and the `fade`/`move` animations used on the landing section.
- `public/` holds all static assets (project images, icons, `manifest.json`) and a `_headers` file with HSTS settings, which suggests Cloudflare/Netlify-style static hosting.
