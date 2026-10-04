import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import App from "./App.jsx";

// Used only at build time by scripts/prerender.js: turns the app into plain HTML
// so the page's text is in index.html before any JavaScript runs.
export function render() {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
