"use client";

import { useLayoutEffect, useState } from "react";

const STYLES = [
  {
    id: "bestaand",
    label: "Bestaand",
    text: "Warm en afgerond, zoals de site nu is.",
    swatch: ["#faf7f2", "#e08a45", "#1c1612"],
  },
  {
    id: "modern",
    label: "Modern",
    text: "Zwart-wit met oranje. Scherp en recht.",
    swatch: ["#ffffff", "#0a0a0a", "#ed7c30"],
  },
  {
    id: "hoekig",
    label: "Hoekig",
    text: "Scherpe driehoeken. Oranje, wit en zwart.",
    swatch: ["#ffffff", "#ed7c30", "#111111"],
  },
] as const;

type SiteStyle = (typeof STYLES)[number]["id"];

const STORAGE_KEY = "dak-stijl";

function readStyle(): SiteStyle {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "modern" || stored === "hoekig" || stored === "bestaand") return stored;
  } catch {
    /* private mode */
  }
  return "bestaand";
}

function applyStyle(style: SiteStyle) {
  if (style === "bestaand") document.documentElement.removeAttribute("data-style");
  else document.documentElement.setAttribute("data-style", style);
  try {
    localStorage.setItem(STORAGE_KEY, style);
  } catch {
    /* private mode */
  }
}

export function StyleChooser() {
  const [style, setStyle] = useState<SiteStyle>("bestaand");

  useLayoutEffect(() => {
    const stored = readStyle();
    applyStyle(stored);
    setStyle(stored);
  }, []);

  function choose(next: SiteStyle) {
    applyStyle(next);
    setStyle(next);
  }

  const options = (compact: boolean) =>
    STYLES.map((item) => {
      const selected = style === item.id;
      return (
        <button
          key={item.id}
          type="button"
          role="radio"
          aria-checked={selected}
          title={item.text}
          onClick={() => choose(item.id)}
          className={`flex flex-col items-center justify-center gap-1 bg-white px-2 font-semibold leading-none text-black ${
            compact ? "h-12 text-sm" : "min-h-14 py-2 text-sm"
          } ${selected ? "is-selected" : ""}`}
        >
          <span className="flex shrink-0" aria-hidden="true">
            {item.swatch.map((color) => (
              <span
                key={color}
                className={compact ? "h-2.5 w-2.5" : "h-3.5 w-3.5"}
                style={{ background: color }}
              />
            ))}
          </span>
          {item.label}
        </button>
      );
    });

  return (
    <>
      <div
        className="style-chooser fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 gap-2 px-3 pt-2 md:hidden"
        style={{ paddingBottom: "calc(0.5rem + env(safe-area-inset-bottom))" }}
        role="radiogroup"
        aria-label="Stijlkeuze"
      >
        {options(true)}
      </div>
      <div className="style-chooser fixed bottom-5 left-1/2 z-40 hidden w-[min(100vw-1.25rem,32rem)] -translate-x-1/2 md:block">
        <div className="border-2 border-black bg-white px-3 py-3 text-black shadow-[0_12px_32px_rgba(0,0,0,0.22)]">
          <p className="text-center text-xs font-semibold uppercase leading-none text-black">
            Stijlkeuze
          </p>
          <div role="radiogroup" aria-label="Stijlkeuze" className="mt-2.5 grid grid-cols-3 gap-2">
            {options(false)}
          </div>
        </div>
      </div>
    </>
  );
}
