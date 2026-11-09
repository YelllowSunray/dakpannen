import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pagina niet gevonden",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-3xl flex-col justify-center px-4 py-24 sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-clay-deep">404</p>
      <h1 className="mt-3 font-serif text-5xl text-ink">Deze pagina ligt er niet.</h1>
      <p className="mt-4 text-lg text-bark">
        De link klopt niet meer, of de pagina is verhuisd. Het dak zelf vinden we wel.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="inline-flex h-12 items-center justify-center rounded-full bg-ink px-6 font-semibold text-cream"
        >
          Naar de startpagina
        </Link>
        <Link
          href="/contact#offerte"
          className="inline-flex h-12 items-center justify-center rounded-full bg-clay-deep px-6 font-semibold text-white"
        >
          Offerte aanvragen
        </Link>
      </div>
    </section>
  );
}
