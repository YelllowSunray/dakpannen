import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { CtaBand } from "@/components/CtaBand";
import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { faqJsonLd } from "@/lib/seo";
import { homeFaqs, projects, services, site, towns } from "@/lib/site";

const pillars = [
  {
    title: "Ervaring in dakpanrenovatie",
    text: "Door jarenlange ervaring leveren we hoogwaardig werk en kunnen we snel en efficiënt te werk gaan.",
  },
  {
    title: "Vakmanschap en kwaliteit",
    text: "Vakmanschap en kwaliteit gaan hand in hand. Dat ziet u terug in de pannen, de nok en de aansluitingen.",
  },
  {
    title: "15 jaar garantie",
    text: "Op alle nieuwe werkzaamheden. We gebruiken duurzame producten met een keurmerk, en geven daarom 15 jaar garantie.",
  },
];

const steps = [
  { n: "01", title: "U neemt contact op", text: "Bel, app of stuur het formulier. Vertel kort wat er speelt." },
  { n: "02", title: "We komen kijken", text: "Inspectie en een helder advies. De offerte daarna is vrijblijvend." },
  { n: "03", title: "We voeren het uit", text: "Renovatie, reparatie, nieuwbouw of onderhoud. Eén aanspreekpunt." },
  { n: "04", title: "U krijgt garantie", text: "15 jaar op nieuwe werkzaamheden, met materialen die een keurmerk hebben." },
];

export default function Home() {
  return (
    <>
      <JsonLd data={faqJsonLd(homeFaqs)} />
      <section data-hero className="relative isolate min-h-[calc(100svh-5rem)]">
        <Image
          src="/images/hero-straat.jpeg"
          alt="Gerenoveerd oranjerood pannendak met dakkapel op een bakstenen rijwoning"
          fill
          priority
          loading="eager"
          sizes="100vw"
          className="object-cover object-[center_70%]"
        />
        <div className="hero-shade-x absolute inset-0 bg-gradient-to-r from-ink/88 via-ink/55 to-ink/15" />
        <div className="hero-shade-y absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/15 to-ink/25" />
        <div className="relative z-10 mx-auto flex min-h-[calc(100svh-5rem)] max-w-6xl flex-col justify-end px-4 pb-28 pt-12 sm:px-6 md:pb-36">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-clay">
            Dakdekker in Someren en Eindhoven
          </p>
          <h1 className="mt-4 max-w-4xl font-serif text-5xl leading-[1.02] text-white sm:text-6xl md:text-7xl">
            Vernieuw uw pannendak
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85 sm:text-xl">
            Welkom bij Alles Onder Een Dak, dé specialist in dakpannen renovatie voor een veilig en
            duurzaam dak. Voor particulieren en bedrijven.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact#offerte"
              className="inline-flex h-14 items-center justify-center rounded-full bg-clay px-7 text-base font-semibold text-ink hover:bg-white"
            >
              Vraag een vrijblijvende offerte
            </Link>
            <a
              href={site.phoneHref}
              className="inline-flex h-14 items-center justify-center rounded-full border border-white/40 px-7 text-base font-semibold text-white hover:bg-white/10"
            >
              Bel {site.phoneDisplay}
            </a>
          </div>
          <p className="mt-6 font-serif text-lg italic text-white/80">{site.slogan}</p>
        </div>
      </section>

      <section className="border-b border-line bg-white">
        <ul className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
          {[
            ["15 jaar", "garantie op nieuw werk"],
            ["Familiebedrijf", "dakdekkers van huis uit"],
            ["Eén aanspreekpunt", "van inspectie tot oplevering"],
            ["Someren", "actief in Eindhoven en regio"],
          ].map(([title, text]) => (
            <li key={title} className="border-line px-4 py-6 sm:px-6 md:border-r md:last:border-r-0">
              <p className="font-serif text-2xl text-ink">{title}</p>
              <p className="mt-1 text-sm text-muted">{text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-clay-deep">
            Expert in dakpanrenovatie
          </p>
          <h2 className="mt-3 font-serif text-4xl leading-tight text-ink md:text-6xl">
            Een pannendak dat weer jaren meekan.
          </h2>
        </div>
        <div className="lg:col-span-5">
          <p className="text-lg leading-relaxed text-bark">
            Dakpannenrenovatie.nl, Alles Onder Een Dak, is dé specialist in dakpannen renovatie voor
            particuliere en zakelijke klanten. Met jarenlange ervaring zorgen we voor een duurzame
            oplossing voor elk pannendak, zodat u zorgeloos onder een mooi en veilig dak woont of
            werkt.
          </p>
          <Link href="/over-ons" className="mt-5 inline-flex font-semibold text-clay-deep hover:text-ink">
            Over het familiebedrijf
          </Link>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-4 pb-8 sm:px-6 md:grid-cols-3">
        {pillars.map((pillar) => (
          <article key={pillar.title} className="rounded-3xl bg-sand p-7">
            <h3 className="font-serif text-2xl text-ink">{pillar.title}</h3>
            <p className="mt-3 leading-relaxed text-bark">{pillar.text}</p>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-clay-deep">Diensten</p>
            <h2 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">
              Professionele dakrenovaties op maat
            </h2>
            <p className="mt-4 text-lg text-bark">
              Van inspectie tot een compleet nieuw dak. U kunt bij ons terecht voor alles rond
              dakpannen en dakwerk, inclusief lood, zink, schoorstenen en isolatie.
            </p>
          </div>
          <Link
            href="/diensten"
            className="inline-flex h-12 shrink-0 items-center justify-center rounded-full border border-ink px-5 font-semibold hover:bg-ink hover:text-cream"
          >
            Alle diensten
          </Link>
        </div>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <li key={service.slug}>
              <Link
                href={`/diensten/${service.slug}`}
                className="flex h-full flex-col rounded-3xl border border-line bg-white p-6 hover:border-clay-deep"
              >
                <h3 className="font-serif text-2xl">{service.title}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-bark">{service.card}</p>
                <span className="mt-5 text-sm font-semibold text-clay-deep">Meer over deze dienst</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-8 sm:px-6 lg:grid-cols-2">
        <div className="overflow-hidden rounded-3xl">
          <Image
            src="/images/werk-detail.jpeg"
            alt="Rijwoning met links een nieuw rood pannendak en rechts het oude donkere dak"
            width={1920}
            height={1440}
            className="h-full w-full object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-clay-deep">In het werk</p>
          <h2 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">Oud naast nieuw.</h2>
          <p className="mt-4 text-lg leading-relaxed text-bark">
            Op één blok ziet u wat een dakpannen renovatie doet. Links de nieuwe rode pannen, rechts
            het verweerde dak dat vocht vasthoudt. Poreuze pannen, mos en algen zijn het begin van
            lekkage in de onderdakconstructie. We vernieuwen het dak voordat die schade er is.
          </p>
          <Link href="/ons-werk" className="mt-6 inline-flex font-semibold text-clay-deep hover:text-ink">
            Bekijk de projecten
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-serif text-4xl md:text-5xl">Zo werken we</h2>
        <ol className="mt-8 grid gap-4 md:grid-cols-4">
          {steps.map((step) => (
            <li key={step.n} className="rounded-3xl bg-ink p-6 text-cream">
              <p className="font-serif text-3xl text-clay">{step.n}</p>
              <h3 className="mt-4 font-serif text-2xl">{step.title}</h3>
              <p className="mt-2 text-cream/75">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="font-serif text-4xl md:text-5xl">Onze dakprojecten in beeld</h2>
          <Link href="/ons-werk" className="hidden font-semibold text-clay-deep sm:inline">
            Fotogalerij
          </Link>
        </div>
        <ul className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {projects.slice(0, 4).map((project) => (
            <li key={project.src} className="overflow-hidden rounded-2xl">
              <Link href="/ons-werk" aria-label={project.title}>
                <Image
                  src={project.src}
                  alt={project.alt}
                  width={project.width}
                  height={project.height}
                  className="aspect-square w-full object-cover"
                  sizes="(min-width: 768px) 25vw, 50vw"
                />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-serif text-4xl md:text-5xl">Werkgebied</h2>
        <p className="mt-4 max-w-2xl text-lg text-bark">
          Vanuit Someren werken we in Eindhoven en de wijde omgeving. Staat uw plaats er niet bij?
          Bel even, dan zeggen we direct of we kunnen komen.
        </p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {towns.map((town) => (
            <li key={town.name}>
              <Link
                href="/werkgebied"
                className="inline-flex rounded-full border border-line bg-white px-4 py-2 text-sm font-medium hover:border-clay-deep"
              >
                Dakdekker {town.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <h2 className="font-serif text-4xl md:text-5xl">Vragen die we vaak horen</h2>
        <div className="mt-6">
          <FaqList faqs={homeFaqs} />
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-clay-deep">Contact</p>
          <h2 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">
            Vraag nu uw offerte aan
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-bark">
            Welkom bij Alles Onder Een Dak, dé specialist in dakpannen renovatie voor al uw
            dakwerkzaamheden. Beschrijf kort het dak. We reageren met een vrijblijvend voorstel.
          </p>
          <address className="mt-6 not-italic text-bark">
            <span className="block font-semibold text-ink">{site.name}</span>
            {site.street}, {site.postalCode} {site.city}
            <a className="mt-2 block text-lg font-semibold text-clay-deep" href={site.phoneHref}>
              {site.phoneDisplay}
            </a>
            <a className="block hover:text-ink" href={site.emailHref}>
              {site.email}
            </a>
          </address>
        </div>
        <ContactForm services={services.map((service) => ({ slug: service.slug, title: service.title }))} />
      </section>

      <CtaBand
        title="Daklekkage of een dak dat toe is aan vernieuwing?"
        text="Staat paraat als het om vakwerk gaat. Bel, app, of vraag vandaag nog een dakcheck aan."
      />
    </>
  );
}
