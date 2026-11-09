"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type Item = { href: string; label: string };

export function Header({
  items,
  phone,
  phoneHref,
}: {
  items: Item[];
  phone: string;
  phoneHref: string;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function active(href: string) {
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="shrink-0" aria-label="Alles Onder Een Dak, naar de startpagina">
          <Image
            src="/images/logo.png"
            alt="Alles Onder Een Dak"
            width={1920}
            height={562}
            priority
            className="h-10 w-auto sm:h-12"
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Hoofdmenu">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium tracking-wide ${
                active(item.href) ? "text-clay-deep" : "text-bark hover:text-ink"
              }`}
              aria-current={active(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={phoneHref}
            className="hidden text-sm font-semibold text-ink hover:text-clay-deep md:inline"
          >
            {phone}
          </a>
          <Link
            href="/contact#offerte"
            className="inline-flex h-11 items-center rounded-full bg-clay-deep px-4 text-sm font-semibold text-white hover:bg-ink"
          >
            Offerte
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line lg:hidden"
            aria-expanded={open}
            aria-controls="mobiel-menu"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Menu sluiten" : "Menu openen"}</span>
            <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
              <span className={`h-0.5 bg-ink transition ${open ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`h-0.5 bg-ink transition ${open ? "opacity-0" : ""}`} />
              <span className={`h-0.5 bg-ink transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobiel-menu"
          className="fixed inset-x-0 bottom-0 top-[4.25rem] z-40 overflow-y-auto bg-cream px-6 py-6 lg:hidden"
          aria-label="Mobiel menu"
        >
          <ul className="flex flex-col">
            {items.map((item) => (
              <li key={item.href} className="border-b border-line">
                <Link
                  href={item.href}
                  className="flex min-h-14 items-center font-serif text-3xl text-ink"
                  aria-current={active(item.href) ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3">
            <a
              href={phoneHref}
              className="inline-flex h-12 items-center justify-center rounded-full bg-ink text-base font-semibold text-cream"
            >
              Bel {phone}
            </a>
            <Link
              href="/contact#offerte"
              className="inline-flex h-12 items-center justify-center rounded-full bg-clay-deep text-base font-semibold text-white"
            >
              Vrijblijvende offerte
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
