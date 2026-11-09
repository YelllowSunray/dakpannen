import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaBand } from "@/components/CtaBand";
import { pageMeta } from "@/lib/seo";
import { services, site, towns } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Dakdekker Someren, Eindhoven en omgeving",
  description:
    "Alles Onder Een Dak werkt vanuit Someren in Eindhoven, Helmond, Asten, Deurne, Geldrop, Veldhoven, Weert en de rest van de regio. Vraag een vrijblijvende offerte aan.",
  path: "/werkgebied",
});

export default function WerkgebiedPage() {
  return (
    <>
      <article className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Werkgebied", path: "/werkgebied" },
          ]}
        />
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-clay-deep">Werkgebied</p>
        <h1 className="mt-3 max-w-3xl font-serif text-5xl leading-tight md:text-6xl">
          Dakdekker in Someren, Eindhoven en de regio
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-bark">
          Ons adres is {site.street} in {site.localityDetail}, gemeente {site.city}. Van daaruit
          werken we voor particulieren en bedrijven in Eindhoven en de wijde omgeving. Hieronder de
          plaatsen die in dat gebied vallen. Staat uw woonplaats er niet tussen, bel dan even.
        </p>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {towns.map((town) => (
            <li key={town.name} className="rounded-3xl border border-line bg-white p-6">
              <h2 className="font-serif text-2xl">Dakdekker {town.name}</h2>
              <p className="mt-2 leading-relaxed text-bark">{town.note}</p>
            </li>
          ))}
        </ul>
        <section className="mt-14">
          <h2 className="font-serif text-3xl">Welk dakwerk zoekt u?</h2>
          <ul className="mt-5 flex flex-wrap gap-2">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/diensten/${service.slug}`}
                  className="inline-flex rounded-full bg-sand px-4 py-2 text-sm font-medium hover:bg-ink hover:text-cream"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </article>
      <CtaBand title="Woont u in de regio? Vraag een dakcheck aan." />
    </>
  );
}
