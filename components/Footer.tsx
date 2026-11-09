import Link from "next/link";
import { nav, services, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="font-serif text-3xl">Alles Onder Een Dak</p>
          <p className="mt-3 max-w-xs text-cream/75">{site.slogan}</p>
          <address className="mt-6 not-italic text-cream/85">
            {site.street}
            <br />
            {site.postalCode} {site.city}
            <br />
            <a className="mt-3 inline-block font-semibold text-white hover:text-clay" href={site.phoneHref}>
              {site.phoneDisplay}
            </a>
            <br />
            <a className="hover:text-clay" href={site.emailHref}>
              {site.email}
            </a>
          </address>
        </div>

        <div className="md:col-span-3">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-clay">Menu</p>
          <ul className="mt-4 space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link className="text-cream/85 hover:text-white" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-5">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-clay">Diensten</p>
          <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  className="text-cream/85 hover:text-white"
                  href={`/diensten/${service.slug}`}
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-sm text-cream/60 sm:flex-row sm:justify-between sm:px-6">
          <p>© 2026 Alles Onder Een Dak. Dakdekker in Someren en Eindhoven.</p>
          <p>15 jaar garantie op nieuwe werkzaamheden.</p>
        </div>
      </div>
    </footer>
  );
}
