import type { Metadata, Viewport } from "next";
import { Fraunces, Italianno, Outfit } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { MobileBar } from "@/components/MobileBar";
import { StyleChooser } from "@/components/StyleChooser";
import { businessJsonLd } from "@/lib/seo";
import { nav, site } from "@/lib/site";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
});

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

const italianno = Italianno({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-italianno",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: "Dakpannen renovatie Someren & Eindhoven | Alles Onder Een Dak",
    template: "%s | Alles Onder Een Dak",
  },
  description:
    "Dakdekker in Someren en Eindhoven. Dakpannen renovatie, lekkage, isolatie en onderhoud. 15 jaar garantie. Vraag een vrijblijvende offerte aan.",
  applicationName: site.name,
  authors: [{ name: site.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    siteName: site.name,
    url: "/",
    title: "Dakpannen renovatie Someren & Eindhoven | Alles Onder Een Dak",
    description:
      "Vernieuw uw pannendak met Alles Onder Een Dak. Specialist in dakpannen renovatie voor particulieren en bedrijven, met 15 jaar garantie.",
    images: [
      {
        url: "/images/hero-straat.jpeg",
        width: 1920,
        height: 1440,
        alt: "Gerenoveerd rood pannendak op een bakstenen woning",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dakpannen renovatie Someren & Eindhoven | Alles Onder Een Dak",
    description:
      "Dakdekker voor pannendaken, lekkage en onderhoud in Someren, Eindhoven en omgeving.",
    images: ["/images/hero-straat.jpeg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#1c1612",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="nl"
      className={`${fraunces.variable} ${outfit.variable} ${italianno.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full font-sans text-ink">
        <JsonLd data={businessJsonLd()} />
        <a
          href="#inhoud"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2"
        >
          Naar de inhoud
        </a>
        <Header items={[...nav]} phone={site.phoneDisplay} phoneHref={site.phoneHref} />
        <StyleChooser />
        <main id="inhoud">{children}</main>
        <Footer />
        <MobileBar phone={site.phoneDisplay} phoneHref={site.phoneHref} whatsappHref={site.whatsappHref} />
      </body>
    </html>
  );
}
