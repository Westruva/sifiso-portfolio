import { useEffect, useId, useRef, useState } from "react";
import { ACCENTS, MODES } from "../hooks/useTheme";

const MODE_ICONS = {
  light: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  ),
  dark: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z" />
    </svg>
  ),
  system: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8M12 16v4" />
    </svg>
  ),
};

function ThemeSwitcher({ mode, setMode, accent, setAccent }) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);
  const buttonRef = useRef(null);
  const panelId = useId();

  useEffect(() => {
    if (!open) return undefined;

    const handlePointer = (event) => {
      if (!wrapperRef.current?.contains(event.target)) setOpen(false);
    };
    const handleKey = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };

    document.addEventListener("pointerdown", handlePointer);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("pointerdown", handlePointer);
      document.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  return (
    <div className="theme-switcher" ref={wrapperRef}>
      <button
        ref={buttonRef}
        type="button"
        className="icon-button"
        aria-expanded={open}
        aria-controls={open ? panelId : undefined}
        aria-label="Change theme"
        onClick={() => setOpen((value) => !value)}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 3a9 9 0 1 0 0 18c1.1 0 1.7-.9 1.7-1.8 0-.5-.2-.9-.5-1.2-.3-.3-.5-.7-.5-1.2 0-1 .8-1.8 1.8-1.8H16a5 5 0 0 0 5-5c0-4-4-7-9-7Z" />
          <circle cx="7.5" cy="11" r="1.2" className="fill" />
          <circle cx="10" cy="7" r="1.2" className="fill" />
          <circle cx="15" cy="7" r="1.2" className="fill" />
        </svg>
      </button>

      {/* Rendered only while open: the saved theme isn't known when pre-rendering at build time,
          so keeping the checked radios out of the initial HTML avoids a hydration mismatch. */}
      {open && (
        <div className="theme-panel" id={panelId}>
          <fieldset>
            <legend>Mode</legend>
            <div className="segmented">
              {MODES.map((option) => (
                <label key={option.id} className="segment">
                  <input
                    type="radio"
                    name="theme-mode"
                    value={option.id}
                    checked={mode === option.id}
                    onChange={() => setMode(option.id)}
                  />
                  <span>
                    {MODE_ICONS[option.id]}
                    {option.label}
                  </span>
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend>Accent</legend>
            <div className="swatches">
              {ACCENTS.map((option) => (
                <label key={option.id} className="swatch" data-swatch={option.id} title={option.label}>
                  <input
                    type="radio"
                    name="theme-accent"
                    value={option.id}
                    checked={accent === option.id}
                    onChange={() => setAccent(option.id)}
                  />
                  <span className="swatch-dot" />
                  <span className="visually-hidden">{option.label}</span>
                </label>
              ))}
            </div>
          </fieldset>
        </div>
      )}
    </div>
  );
}

export default ThemeSwitcher;
