import Link from "next/link";
import { site } from "@/lib/site";

export function CtaBand({
  title = "Plan vandaag nog uw dakcheck",
  text = "Vraag een vrijblijvende offerte of inspectie aan. We reageren snel en regelen het dak van opname tot garantie.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-ink text-cream">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-16 sm:px-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-clay">Vrijblijvend</p>
          <h2 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">{title}</h2>
          <p className="mt-4 text-lg text-cream/75">{text}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact#offerte"
            className="inline-flex h-12 items-center justify-center rounded-full bg-clay px-6 font-semibold text-ink hover:bg-white"
          >
            Vraag een offerte aan
          </Link>
          <a
            href={site.phoneHref}
            className="inline-flex h-12 items-center justify-center rounded-full border border-white/25 px-6 font-semibold text-white hover:bg-white/10"
          >
            Bel {site.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
