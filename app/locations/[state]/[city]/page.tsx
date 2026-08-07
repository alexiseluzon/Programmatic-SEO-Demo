import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locations, getLocation } from "@/lib/locations";
import { SITE_URL, BUSINESS_NAME } from "@/lib/config";

type Params = Promise<{ state: string; city: string }>;

// Pre-render every known city at build time (SSG) — this is what lets
// programmatic SEO scale to thousands of pages without per-request cost.
export function generateStaticParams() {
  return locations.map((l) => ({ state: l.stateSlug, city: l.citySlug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { state, city } = await params;
  const loc = getLocation(state, city);
  if (!loc) return {};

  const title = `Cleaning Services in ${loc.city}, ${loc.state} | ${BUSINESS_NAME}`;
  const description = `Professional residential and commercial cleaning services in ${loc.city}, ${loc.state}. Licensed, insured, and locally trusted.`;
  const canonicalPath = `/locations/${loc.stateSlug}/${loc.citySlug}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}${canonicalPath}`,
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function CityPage({ params }: { params: Params }) {
  const { state, city } = await params;
  const loc = getLocation(state, city);
  if (!loc) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `${BUSINESS_NAME} - ${loc.city}`,
    image: `${SITE_URL}/og-default.png`,
    address: {
      "@type": "PostalAddress",
      addressLocality: loc.city,
      addressRegion: loc.state,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: loc.lat,
      longitude: loc.lng,
    },
    url: `${SITE_URL}/locations/${loc.stateSlug}/${loc.citySlug}`,
    areaServed: loc.city,
  };

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav className="mb-6 text-sm text-gray-500">
        <a href="/locations" className="hover:underline">
          All Locations
        </a>{" "}
        /{" "}
        <a href={`/locations/${loc.stateSlug}`} className="hover:underline">
          {loc.state}
        </a>{" "}
        / {loc.city}
      </nav>

      <h1 className="text-3xl font-bold mb-4">
        Cleaning Services in {loc.city}, {loc.state}
      </h1>
      <p className="text-gray-600 mb-8">
        We provide reliable residential and commercial cleaning to{" "}
        {loc.city} and surrounding areas. Population served: ~
        {loc.population.toLocaleString()}.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Related areas in {loc.state}</h2>
        <ul className="list-disc list-inside text-blue-600">
          <li>
            <a href={`/locations/${loc.stateSlug}`} className="hover:underline">
              View all {loc.state} locations
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}
