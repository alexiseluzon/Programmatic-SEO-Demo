import type { Metadata } from "next";
import { getAllStates } from "@/lib/locations";
import { BUSINESS_NAME } from "@/lib/config";

export const metadata: Metadata = {
  title: `All Service Locations | ${BUSINESS_NAME}`,
  description: "Browse every state and city we provide cleaning services in.",
  alternates: { canonical: "/locations" },
};

export default function LocationsIndex() {
  const states = getAllStates();

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold mb-6">All Locations</h1>
      <ul className="space-y-2">
        {states.map((s) => (
          <li key={s.stateSlug}>
            <a href={`/locations/${s.stateSlug}`} className="text-blue-600 hover:underline">
              {s.state}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
