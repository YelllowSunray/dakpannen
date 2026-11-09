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

  return (
    <div className="style-chooser fixed bottom-[calc(4.85rem+env(safe-area-inset-bottom))] left-1/2 z-40 w-[min(100vw-1.25rem,32rem)] -translate-x-1/2 md:bottom-5">
      <div className="border border-black/15 bg-white px-3 py-3 text-black shadow-[0_10px_32px_rgba(0,0,0,0.18)]">
        <p className="text-center text-xs font-semibold uppercase leading-none text-neutral-500">
          Stijlkeuze voor de klant
        </p>
        <div role="radiogroup" aria-label="Stijlkeuze voor de klant" className="mt-2.5 grid grid-cols-3 gap-2">
          {STYLES.map((item) => {
            const selected = style === item.id;
            return (
              <button
                key={item.id}
                type="button"
                role="radio"
                aria-checked={selected}
                title={item.text}
                onClick={() => choose(item.id)}
                className={`flex min-h-14 flex-col items-center justify-center gap-1.5 px-2 py-2 text-sm font-semibold leading-none ${
                  selected ? "bg-black text-white" : "bg-neutral-100 text-black"
                }`}
              >
                <span className="flex shrink-0" aria-hidden="true">
                  {item.swatch.map((color) => (
                    <span key={color} className="h-3.5 w-3.5" style={{ background: color }} />
                  ))}
                </span>
                {item.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
