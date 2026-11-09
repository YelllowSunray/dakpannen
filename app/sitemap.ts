import type { MetadataRoute } from "next";
import { services, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = "2026-11-09";
  const pages: { path: string; priority: number }[] = [
    { path: "/", priority: 1 },
    { path: "/diensten", priority: 0.9 },
    { path: "/contact", priority: 0.9 },
    { path: "/over-ons", priority: 0.7 },
    { path: "/ons-werk", priority: 0.7 },
    { path: "/werkgebied", priority: 0.8 },
    ...services.map((service) => ({ path: `/diensten/${service.slug}`, priority: 0.8 })),
  ];

  return pages.map((page) => ({
    url: `${site.domain}${page.path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: page.priority,
  }));
}
