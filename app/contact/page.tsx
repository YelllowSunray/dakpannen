import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { pageMeta } from "@/lib/seo";
import { services, site } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Contact en offerte",
  description:
    "Neem contact op met Alles Onder Een Dak in Someren. Bel 06 22 18 02 97, app via WhatsApp of vraag een vrijblijvende offerte aan voor uw dak.",
  path: "/contact",
});

const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=5.715%2C51.352%2C5.744%2C51.363&layer=mapnik&marker=${site.lat}%2C${site.lng}`;

export default function ContactPage() {
  return (
    <article className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]}
      />
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-clay-deep">Contact</p>
          <h1 className="mt-3 font-serif text-5xl leading-tight md:text-6xl">
            Welkom bij dakpannen-renovatie.nl
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-bark">
            Dé specialist in dakpannen renovatie voor al uw dakwerkzaamheden. Bel, app of stuur het
            formulier. De offerte is vrijblijvend.
          </p>
          <address className="mt-8 not-italic">
            <p className="font-serif text-2xl">{site.name}</p>
            <p className="mt-2 text-bark">
              {site.street}
              <br />
              {site.postalCode} {site.city}
              <br />
              <span className="text-muted">{site.localityDetail}, gemeente Someren</span>
            </p>
            <a className="mt-4 block text-2xl font-semibold text-clay-deep" href={site.phoneHref}>
              {site.phoneDisplay}
            </a>
            <a className="mt-1 block text-bark hover:text-ink" href={site.emailHref}>
              {site.email}
            </a>
            <a className="mt-4 inline-flex font-semibold text-ink hover:text-clay-deep" href={site.whatsappHref}>
              Of stuur direct een WhatsApp
            </a>
          </address>
          <div className="mt-8 overflow-hidden rounded-3xl border border-line">
            <iframe
              title="Kaart van Alles Onder Een Dak, Kampstraat 22 in Someren"
              src={mapSrc}
              className="h-72 w-full"
              loading="lazy"
            />
          </div>
          <p className="mt-2 text-sm text-muted">
            <a
              className="underline"
              href={`https://www.openstreetmap.org/?mlat=${site.lat}&mlon=${site.lng}#map=17/${site.lat}/${site.lng}`}
            >
              Open de kaart groter
            </a>
          </p>
        </div>
        <div>
          <h2 className="font-serif text-3xl">Vrijblijvende offerte</h2>
          <p className="mt-2 mb-5 text-bark">
            Voor- en achternaam, een manier om u te bereiken, en een korte omschrijving. Dat is
            genoeg om te starten.
          </p>
          <ContactForm
            services={services.map((service) => ({ slug: service.slug, title: service.title }))}
          />
        </div>
      </div>
    </article>
  );
}
