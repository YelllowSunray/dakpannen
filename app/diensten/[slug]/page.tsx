import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaBand } from "@/components/CtaBand";
import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { faqJsonLd, pageMeta } from "@/lib/seo";
import { getService, relatedServices, services, site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return pageMeta({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/diensten/${service.slug}`,
    image: service.image,
  });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  const related = relatedServices(service.slug);

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.metaDescription,
    url: `${site.domain}/diensten/${service.slug}`,
    image: `${site.domain}${service.image}`,
    areaServed: ["Someren", "Eindhoven"],
    provider: { "@id": `${site.domain}/#bedrijf` },
  };

  return (
    <>
      <JsonLd data={serviceLd} />
      <JsonLd data={faqJsonLd(service.faqs)} />
      <article className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Diensten", path: "/diensten" },
            { name: service.title, path: `/diensten/${service.slug}` },
          ]}
        />
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-clay-deep">
              Dakdekker Someren en Eindhoven
            </p>
            <h1 className="mt-3 font-serif text-5xl leading-tight md:text-6xl">{service.title}</h1>
            <p className="mt-5 text-lg leading-relaxed text-bark">{service.lead}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact#offerte"
                className="inline-flex h-12 items-center justify-center rounded-full bg-clay-deep px-6 font-semibold text-white"
              >
                Vrijblijvende offerte
              </Link>
              <a
                href={site.phoneHref}
                className="inline-flex h-12 items-center justify-center rounded-full border border-ink px-6 font-semibold"
              >
                Bel {site.phoneDisplay}
              </a>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl">
            <Image
              src={service.image}
              alt={service.imageAlt}
              width={service.width}
              height={service.height}
              priority
              className="aspect-[4/3] w-full object-cover"
              sizes="(min-width: 1024px) 36rem, 100vw"
            />
          </div>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-12">
          <div className="space-y-5 text-lg leading-relaxed text-bark lg:col-span-7">
            {service.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <h2 className="pt-4 font-serif text-3xl text-ink">Zo herkent u het</h2>
            <ul className="list-disc space-y-2 pl-5">
              {service.signs.map((sign) => (
                <li key={sign}>{sign}</li>
              ))}
            </ul>
          </div>
          <aside className="h-fit rounded-3xl bg-sand p-7 lg:col-span-5">
            <h2 className="font-serif text-2xl">Wat we doen</h2>
            <ul className="mt-4 space-y-3 text-bark">
              {service.includes.map((item) => (
                <li key={item} className="border-b border-line/80 pb-3 last:border-b-0">
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        </div>

        <section className="mt-16">
          <h2 className="font-serif text-4xl">Vragen over {service.title.toLowerCase()}</h2>
          <div className="mt-4">
            <FaqList faqs={service.faqs} />
          </div>
        </section>

        <section className="mt-16">
          <h2 className="font-serif text-3xl">Gerelateerde diensten</h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-3">
            {related.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/diensten/${item.slug}`}
                  className="block h-full rounded-3xl border border-line p-5 hover:border-clay-deep"
                >
                  <h3 className="font-serif text-2xl">{item.title}</h3>
                  <p className="mt-2 text-bark">{item.card}</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </article>
      <CtaBand title={`Hulp nodig met ${service.title.toLowerCase()}?`} />
    </>
  );
}
