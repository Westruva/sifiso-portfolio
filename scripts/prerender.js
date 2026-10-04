// Runs after both Vite builds (see "build" in package.json):
// 1. loads the server build of the app (dist-ssr/entry-server.js)
// 2. renders it to HTML
// 3. puts that HTML inside <div id="root"> in dist/index.html
// so search engines and link previews see the full page without running JavaScript.
import { readFile, rm, writeFile } from "node:fs/promises";

const root = new URL("../", import.meta.url);
const indexPath = new URL("dist/index.html", root);
const serverDir = new URL("dist-ssr/", root);

const { render } = await import(new URL("entry-server.js", serverDir));
const appHtml = render();

const template = await readFile(indexPath, "utf8");
const placeholder = '<div id="root"></div>';

if (!template.includes(placeholder)) {
  throw new Error(`prerender: ${placeholder} not found in dist/index.html`);
}

await writeFile(indexPath, template.replace(placeholder, `<div id="root">${appHtml}</div>`));

// The server build was only needed to produce the HTML; keep it out of the deploy.
await rm(serverDir, { recursive: true, force: true });

console.log(`prerender: wrote ${Math.round(appHtml.length / 1024)} KB of HTML into dist/index.html`);
