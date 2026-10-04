# sifiso-portfolio

The personal website of Sifiso Wayne Moyo, built with React and Vite. It is a single page with selected projects, a toolbox, an about section and contact links.

Visitors can switch between light, dark and system themes and choose one of four accent colours (coral, violet, teal or amber). The choice is saved in their browser.

## Run locally

Requirements: Node.js 20.19 or newer.

```sh
npm install
npm run dev
```

The site runs at `http://localhost:5173`. Use `npm run build` for a production build in `dist/` and `npm run lint` to check the code.

### How the build works

The page is pre-rendered, so the HTML Cloudflare serves already contains all the text. Search engines and link previews can read it without running JavaScript. `npm run build` runs three steps:

1. `vite build`: the normal browser build in `dist/`
2. `vite build --ssr src/entry-server.jsx --outDir dist-ssr`: a temporary Node build of the app
3. `node scripts/prerender.js`: renders the app to HTML, puts it inside `<div id="root">` in `dist/index.html`, then deletes `dist-ssr/`

In the browser, `src/main.jsx` attaches React to that HTML with `hydrateRoot`. Anything a component renders must therefore be the same at build time as on a visitor's first render. Read browser-only state, such as `localStorage`, in effects or in UI that only appears after interaction (like the theme panel).

## Project structure

- `src/data/content.js`: all copy, projects and links. Edit this file to update the site.
- `src/components/`: page sections (`Hero`, `Projects`, `Toolbox`, `About`, `Contact`) and the `ThemeSwitcher`
- `src/hooks/useTheme.js`: light/dark/system mode and accent colour, saved to `localStorage`
- `src/hooks/useReveal.js`: fades sections in as they scroll into view
- `src/index.css`: theme tokens and all styles
- `index.html`: applies the saved theme before the page first renders, so it never flashes the wrong colours
- `src/entry-server.jsx`, `scripts/prerender.js`: build-time pre-rendering (see above)
- `wrangler.jsonc`: Cloudflare Worker config. Serves `dist/` and returns `404.html` for unknown URLs.

## Updating

- **Add a featured project:** add an entry to `featuredProjects` in `src/data/content.js`. Give it `size: "wide"` to make it span four columns on desktop.
- **Change contact links:** edit `socials` in `src/data/content.js`. They appear in the Contact section and the footer. Logos are inline SVGs in `src/components/SocialIcon.jsx`. To add a new app, add its 24×24 path there, plus a `[data-brand]` colour in `src/index.css`.
- **Add a screenshot:** export a WebP about 1280px wide into `public/projects/`, then add `image: { src, alt }` to the project in `content.js`. Use `size: "half"` to span three columns. Everything in `public/` is published, so blur any personal details first. Unedited originals go in `design/`, which is git-ignored.
- **Add an accent colour:** add it to `ACCENTS` in `src/hooks/useTheme.js`. Then in `src/index.css`, add a `:root[data-accent="…"]` block and a `[data-swatch="…"]` rule.

## Deploy

**Netlify:** create a site from this repository. `netlify.toml` already sets the build command (`npm run build`) and the publish directory (`dist`).
