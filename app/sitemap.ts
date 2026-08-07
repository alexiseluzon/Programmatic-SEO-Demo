import type { MetadataRoute } from "next";
import { locations, getAllStates } from "@/lib/locations";
import { SITE_URL } from "@/lib/config";

// Generated at build time. At real scale (thousands of pages) this would
// paginate via sitemap index files (sitemap-0.xml, sitemap-1.xml, ...)
// since a single sitemap is capped at 50,000 URLs by the spec.
export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/locations`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
  ];

  const stateRoutes: MetadataRoute.Sitemap = getAllStates().map((s) => ({
    url: `${SITE_URL}/locations/${s.stateSlug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const cityRoutes: MetadataRoute.Sitemap = locations.map((l) => ({
    url: `${SITE_URL}/locations/${l.stateSlug}/${l.citySlug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...stateRoutes, ...cityRoutes];
}
