import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllStates, getCitiesByState } from "@/lib/locations";
import { BUSINESS_NAME } from "@/lib/config";

type Params = Promise<{ state: string }>;

export function generateStaticParams() {
  return getAllStates().map((s) => ({ state: s.stateSlug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { state } = await params;
  const states = getAllStates();
  const match = states.find((s) => s.stateSlug === state);
  if (!match) return {};

  return {
    title: `Cleaning Services in ${match.state} | ${BUSINESS_NAME}`,
    description: `Browse all cities we serve in ${match.state}.`,
    alternates: { canonical: `/locations/${match.stateSlug}` },
  };
}

export default async function StatePage({ params }: { params: Params }) {
  const { state } = await params;
  const states = getAllStates();
  const match = states.find((s) => s.stateSlug === state);
  if (!match) notFound();

  const cities = getCitiesByState(state);

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <nav className="mb-6 text-sm text-gray-500">
        <a href="/locations" className="hover:underline">
          All Locations
        </a>{" "}
        / {match.state}
      </nav>
      <h1 className="text-3xl font-bold mb-6">Cities we serve in {match.state}</h1>
      <ul className="grid grid-cols-2 gap-3">
        {cities.map((c) => (
          <li key={c.citySlug}>
            <a
              href={`/locations/${c.stateSlug}/${c.citySlug}`}
              className="text-blue-600 hover:underline"
            >
              {c.city}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
