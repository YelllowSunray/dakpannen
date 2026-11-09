import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Logo } from "@/components/Logo";
import { CtaBand } from "@/components/CtaBand";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Over ons",
  description:
    "Alles Onder Een Dak is een dakdekkersfamilie uit Someren. Dakpannen renovatie, reparatie en nieuwbouw voor particulieren en bedrijven in Eindhoven en omgeving.",
  path: "/over-ons",
  image: "/images/werk-gevel.jpeg",
});

export default function OverOnsPage() {
  return (
    <>
      <article className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Over ons", path: "/over-ons" },
          ]}
        />
        <div className="grid items-end gap-8 lg:grid-cols-2">
          <div>
            <Logo
              linked={false}
              stacked
              markClassName="h-12 w-auto sm:h-14"
              wordClassName="text-[2.4rem] leading-[0.82] sm:text-[2.8rem]"
              className="mb-8 gap-3"
            />
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-clay-deep">Over ons</p>
            <h1 className="mt-3 font-serif text-5xl leading-tight md:text-6xl">
              Alles onder één dak: uw dakpartner
            </h1>
          </div>
          <p className="text-lg leading-relaxed text-bark">
            Vertrouwen, vakmanschap en ontzorging. We helpen particulieren en bedrijven met alle
            soorten dakwerk: nieuwbouw, renovatie, onderhoud en herstel. Een hecht team combineert
            jarenlange praktijkervaring met duurzame materialen, zodat uw dak veilig, waterdicht en
            toekomstbestendig is.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl">
          <Image
            src="/images/werk-gevel.jpeg"
            alt="Bedrijfsbus van Alles Onder Een Dak voor een woning met pannendak in de regio"
            width={1920}
            height={1440}
            className="max-h-[32rem] w-full object-cover"
            priority
            sizes="(min-width: 1152px) 72rem, 100vw"
          />
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-12">
          <div className="space-y-5 text-lg leading-relaxed text-bark lg:col-span-7">
            <h2 className="font-serif text-3xl text-ink">Een dakdekkersfamilie</h2>
            <p>
              Alles Onder Een Dak is de dakdekker van Eindhoven en omstreken. We werken vooral voor
              particulieren, en ook voor grotere bedrijven. Door jarenlange ervaring in dit vak
              leveren we vakwerk in alle dakwerken.
            </p>
            <p>
              Het bedrijf is ontstaan uit een dakdekkersfamilie en wordt nog steeds voortgezet. De
              diensten zijn meegegroeid met de wensen van klanten en met de markt: van een klassiek
              pannendak tot isolatie, platdakbedekking en schoorsteenherstel.
            </p>
            <p>
              We zijn actief in de ruime regio rond Someren en Eindhoven. Of het nu gaat om een plat
              of hellend dak, isolatie, dakgoten of een dringende herstelling: u heeft één
              aanspreekpunt dat het regelt. Geen geschakel tussen aannemers, wel duidelijke
              communicatie en heldere afspraken.
            </p>
            <h2 className="pt-4 font-serif text-3xl text-ink">Waar we op vertrouwen</h2>
            <p>
              Stel: u komt thuis en ziet een lekkage op het plafond. U zoekt een dakdekker en wilt
              weten op wie u kunt bouwen. Ons advies is nuchter. Ga af op uw gevoel, en doe daarna
              een klein beetje onderzoek. Ervaringen van andere opdrachtgevers zeggen vaak meer dan
              een mooie belofte.
            </p>
            <p>
              Zelf houden we het concreet. We gebruiken duurzame producten met een keurmerk en geven
              15 jaar garantie op nieuwe werkzaamheden. Op de bus staat waar we voor komen:
              renovatie, nieuwbouw en onderhoud.
            </p>
          </div>
          <aside className="h-fit rounded-3xl bg-sand p-7 lg:col-span-5">
            <p className="font-serif text-2xl">In het kort</p>
            <ul className="mt-4 space-y-3 text-bark">
              <li>Familiebedrijf, voortgezet door de volgende generatie</li>
              <li>Particulieren en bedrijven</li>
              <li>Someren, Eindhoven en de wijde omgeving</li>
              <li>15 jaar garantie op nieuwe werkzaamheden</li>
              <li>Materialen met een keurmerk</li>
              <li>Eén aanspreekpunt voor het hele dak</li>
            </ul>
            <p className="mt-6 text-sm text-muted">
              {site.street}, {site.postalCode} {site.city}
            </p>
            <Link
              href="/contact#offerte"
              className="mt-6 inline-flex h-12 items-center justify-center rounded-full bg-clay-deep px-5 font-semibold text-white"
            >
              Neem contact op
            </Link>
          </aside>
        </div>
      </article>
      <CtaBand />
    </>
  );
}
