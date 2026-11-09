import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Alles Onder Een Dak",
    short_name: "Alles Onder Een Dak",
    description: "Dakpannen renovatie en dakdekker in Someren en Eindhoven.",
    start_url: "/",
    display: "standalone",
    background_color: "#faf7f2",
    theme_color: "#1c1612",
    lang: "nl",
  };
}
