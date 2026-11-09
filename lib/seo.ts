import type { Metadata } from "next";
import { site } from "./site";

export function pageMeta({
  title,
  description,
  path,
  image = "/images/hero-straat.jpeg",
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      locale: "nl_NL",
      type: "website",
      siteName: site.name,
      images: [{ url: image, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export function businessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "@id": `${site.domain}/#bedrijf`,
    name: site.name,
    alternateName: ["Dakpannen Renovatie", "dakpannen-renovatie.nl"],
    url: site.domain,
    image: `${site.domain}/images/hero-straat.jpeg`,
    logo: `${site.domain}/images/logo.png`,
    telephone: "+31622180297",
    email: site.email,
    slogan: site.slogan,
    description:
      "Alles Onder Een Dak is de dakdekker in Someren en Eindhoven voor dakpannen renovatie, lekkage, isolatie en onderhoud. 15 jaar garantie op nieuwe werkzaamheden.",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.street,
      postalCode: site.postalCode,
      addressLocality: site.city,
      addressRegion: site.region,
      addressCountry: site.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.lat,
      longitude: site.lng,
    },
    areaServed: [
      "Someren",
      "Eindhoven",
      "Helmond",
      "Asten",
      "Deurne",
      "Geldrop",
      "Nuenen",
      "Veldhoven",
      "Weert",
    ],
    knowsAbout: [
      "Dakpannen renovatie",
      "Daklekkage",
      "Dakisolatie",
      "Schoorsteen renovatie",
      "Lood- en zinkwerk",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Dakdiensten",
      itemListElement: [
        "Dakpannen renovatie",
        "Daklekkage",
        "Nieuwe dakpannen",
        "Dakrenovatie",
        "Dakinspectie",
        "Dakisolatie",
        "Schoorsteen renovatie",
        "Lood- en zinkwerk",
        "Dakbedekking",
        "Dakonderhoud",
        "Nieuw dak",
      ].map((name) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name },
      })),
    },
  };
}

export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${site.domain}${item.path}`,
    })),
  };
}
