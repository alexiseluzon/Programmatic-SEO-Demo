import type { Metadata } from "next";
import { BUSINESS_NAME } from "@/lib/config";

export const metadata: Metadata = {
  title: `${BUSINESS_NAME} — Programmatic SEO Demo`,
  description:
    "Next.js programmatic SEO demo: dynamic location pages, sitemap, canonical tags, and structured data at scale.",
};

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="text-4xl font-bold mb-4">{BUSINESS_NAME}</h1>
      <p className="text-gray-600 mb-8">
        A technical SEO demo showing dynamic, indexable location pages built
        with Next.js App Router — sitemap generation, canonical tags,
        structured data, and internal linking at scale.
      </p>
      <a
        href="/locations"
        className="inline-block rounded-full bg-black text-white px-6 py-3 hover:bg-zinc-800"
      >
        Browse Locations
      </a>
    </main>
  );
}
