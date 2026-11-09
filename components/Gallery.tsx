"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import type { GalleryItem } from "@/lib/site";

export function Gallery({ items }: { items: GalleryItem[] }) {
  const [active, setActive] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();

  useEffect(() => {
    if (active === null) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") {
        setActive((index) => (index === null ? index : (index + 1) % items.length));
      }
      if (event.key === "ArrowLeft") {
        setActive((index) => (index === null ? index : (index - 1 + items.length) % items.length));
      }
    }
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [active, items.length]);

  const item = active === null ? null : items[active];

  return (
    <>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
        {items.map((photo, index) => (
          <li key={photo.src} className={index === 0 ? "sm:col-span-2 lg:col-span-4" : "lg:col-span-2"}>
            <button
              type="button"
              onClick={() => setActive(index)}
              className="group relative block w-full overflow-hidden rounded-3xl text-left focus-visible:outline-offset-4"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                className="aspect-[4/3] w-full object-cover motion-safe:transition motion-safe:duration-500 motion-safe:group-hover:scale-[1.03]"
                sizes={index === 0 ? "(min-width: 1024px) 60vw, 100vw" : "(min-width: 1024px) 30vw, 100vw"}
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent p-5 pt-16 text-cream">
                <span className="block font-serif text-2xl">{photo.title}</span>
                <span className="mt-1 block text-sm text-cream/80">Bekijk groter</span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      {item ? (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-ink/92 p-4 sm:items-center"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          onClick={() => setActive(null)}
        >
          <div
            className="w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-3 flex items-center justify-between gap-4 text-cream">
              <p id={titleId} className="font-serif text-2xl">
                {item.title}
              </p>
              <button
                ref={closeRef}
                type="button"
                onClick={() => setActive(null)}
                className="inline-flex h-11 items-center rounded-full border border-white/30 px-4 text-sm"
              >
                Sluiten
              </button>
            </div>
            <Image
              src={item.src}
              alt={item.alt}
              width={item.width}
              height={item.height}
              className="max-h-[70vh] w-full rounded-2xl object-contain"
            />
            <p className="mt-3 max-w-3xl text-cream/80">{item.caption}</p>
            <div className="mt-4 flex gap-2">
              <button
                type="button"
                className="h-11 rounded-full border border-white/30 px-4 text-sm text-cream"
                onClick={() =>
                  setActive((index) => (index === null ? index : (index - 1 + items.length) % items.length))
                }
              >
                Vorige
              </button>
              <button
                type="button"
                className="h-11 rounded-full border border-white/30 px-4 text-sm text-cream"
                onClick={() => setActive((index) => (index === null ? index : (index + 1) % items.length))}
              >
                Volgende
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
