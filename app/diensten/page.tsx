import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaBand } from "@/components/CtaBand";
import { pageMeta } from "@/lib/seo";
import { services } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Dakdiensten",
  description:
    "Dakinspectie, dakpannen renovatie, lekkage, nieuwe pannen, isolatie, schoorsteen, lood en zink, dakbedekking en onderhoud in Someren en Eindhoven.",
  path: "/diensten",
});

export default function DienstenPage() {
  return (
    <>
      <article className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Diensten", path: "/diensten" },
          ]}
        />
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-clay-deep">Diensten</p>
        <h1 className="mt-3 max-w-3xl font-serif text-5xl leading-tight md:text-6xl">
          Expert in dakpanrenovatie, en alles wat daarbij hoort
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-bark">
          Dakpannenrenovatie.nl is dé specialist in dakpannen renovatie voor particulieren en
          bedrijven. We zorgen voor een professionele en duurzame oplossing, zodat u weer jarenlang
          zorgeloos onder een mooi en veilig dak zit.
        </p>
        <ul className="mt-12 grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <li key={service.slug}>
              <Link
                href={`/diensten/${service.slug}`}
                className="block h-full rounded-3xl border border-line bg-white p-7 hover:border-clay-deep"
              >
                <h2 className="font-serif text-3xl">{service.title}</h2>
                <p className="mt-3 leading-relaxed text-bark">{service.lead}</p>
                <span className="mt-5 inline-flex text-sm font-semibold text-clay-deep">
                  Lees verder
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </article>
      <CtaBand title="Niet zeker welke dienst u nodig heeft?" text="Beschrijf het dak. Wij zeggen of het een reparatie, een renovatie of een nieuw dak moet worden." />
    </>
  );
}
