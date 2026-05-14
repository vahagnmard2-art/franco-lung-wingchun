import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://francolungwingchun.com";
  const now = new Date();
  const routes = [
    { path: "",         freq: "weekly"  as const, priority: 1.0 },
    { path: "/about",   freq: "monthly" as const, priority: 0.8 },
    { path: "/lineage", freq: "monthly" as const, priority: 0.8 },
    { path: "/system",  freq: "monthly" as const, priority: 0.8 },
    { path: "/classes", freq: "monthly" as const, priority: 0.9 },
    { path: "/gallery", freq: "monthly" as const, priority: 0.7 },
    { path: "/contact", freq: "monthly" as const, priority: 0.9 },
    { path: "/privacy", freq: "yearly"  as const, priority: 0.3 },
  ];

  return routes.map(({ path, freq, priority }) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: freq,
    priority,
  }));
}
