import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaBand } from "@/components/CtaBand";
import { Gallery } from "@/components/Gallery";
import { pageMeta } from "@/lib/seo";
import { projects } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Ons werk",
  description:
    "Fotogalerij van dakpannen renovatie en nieuwe pannendaken door Alles Onder Een Dak in Someren, Eindhoven en omgeving.",
  path: "/ons-werk",
});

export default function OnsWerkPage() {
  return (
    <>
      <article className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Ons werk", path: "/ons-werk" },
          ]}
        />
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-clay-deep">Fotogalerij</p>
        <h1 className="mt-3 max-w-3xl font-serif text-5xl leading-tight md:text-6xl">Ons werk</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-bark">
          Als specialist in dakpannen renovatie weten we hoe belangrijk een goed dak is voor een
          huis of bedrijfspand. Het beschermt u en uw spullen tegen het weer en zorgt voor een
          veilig onderkomen. Daken worden vaak vergeten tot er problemen ontstaan. In deze galerij
          ziet u hoe een vernieuwd pannendak eruitziet, en hoe we op locatie werken.
        </p>
        <div className="mt-10">
          <Gallery items={projects} />
        </div>
        <ul className="mt-10 grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <li key={project.title} className="rounded-3xl bg-sand p-6">
              <h2 className="font-serif text-2xl">{project.title}</h2>
              <p className="mt-2 leading-relaxed text-bark">{project.caption}</p>
            </li>
          ))}
        </ul>
      </article>
      <CtaBand
        title="Laat u inspireren, en vraag een offerte aan"
        text="Elk dak is anders. Stuur een foto of een korte omschrijving, dan kijken we vrijblijvend mee."
      />
    </>
  );
}
