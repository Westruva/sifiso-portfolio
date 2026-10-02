import { useEffect, useState } from "react";

export const MODES = [
  { id: "light", label: "Light" },
  { id: "dark", label: "Dark" },
  { id: "system", label: "System" },
];

export const ACCENTS = [
  { id: "coral", label: "Coral" },
  { id: "violet", label: "Violet" },
  { id: "teal", label: "Teal" },
  { id: "amber", label: "Amber" },
];

const MODE_KEY = "theme-mode";
const ACCENT_KEY = "theme-accent";

// Storage can throw in private windows or when site data is blocked.
function readSetting(key, allowed, fallback) {
  try {
    const value = localStorage.getItem(key);
    return allowed.some((option) => option.id === value) ? value : fallback;
  } catch {
    return fallback;
  }
}

function saveSetting(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    // Theme still works for this visit; it just won't be remembered.
  }
}

export function useTheme() {
  const [mode, setMode] = useState(() => readSetting(MODE_KEY, MODES, "system"));
  const [accent, setAccent] = useState(() => readSetting(ACCENT_KEY, ACCENTS, "coral"));

  useEffect(() => {
    const root = document.documentElement;
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const apply = () => {
      const isDark = mode === "dark" || (mode === "system" && media.matches);
      root.dataset.theme = isDark ? "dark" : "light";
    };

    apply();
    saveSetting(MODE_KEY, mode);

    // Only follow OS changes while the visitor has chosen "System".
    if (mode !== "system") return undefined;
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, [mode]);

  useEffect(() => {
    document.documentElement.dataset.accent = accent;
    saveSetting(ACCENT_KEY, accent);
  }, [accent]);

  return { mode, setMode, accent, setAccent };
}
