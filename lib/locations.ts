// Simulates a DB/CMS-backed dataset of service locations.
// In production this would come from Postgres/CMS, not a static file.
// Scaled to ~60 cities to demonstrate the pattern at programmatic scale —
// the same generateStaticParams/sitemap logic scales to thousands without
// code changes, only data growth.

export type Location = {
  state: string;
  stateSlug: string;
  city: string;
  citySlug: string;
  population: number;
  lat: number;
  lng: number;
};

export const locations: Location[] = [
  // California
  { state: "California", stateSlug: "california", city: "Los Angeles", citySlug: "los-angeles", population: 3898747, lat: 34.0522, lng: -118.2437 },
  { state: "California", stateSlug: "california", city: "San Diego", citySlug: "san-diego", population: 1386932, lat: 32.7157, lng: -117.1611 },
  { state: "California", stateSlug: "california", city: "Sacramento", citySlug: "sacramento", population: 524943, lat: 38.5816, lng: -121.4944 },
  { state: "California", stateSlug: "california", city: "San Francisco", citySlug: "san-francisco", population: 873965, lat: 37.7749, lng: -122.4194 },
  { state: "California", stateSlug: "california", city: "San Jose", citySlug: "san-jose", population: 1013240, lat: 37.3382, lng: -121.8863 },
  { state: "California", stateSlug: "california", city: "Fresno", citySlug: "fresno", population: 542107, lat: 36.7378, lng: -119.7871 },
  { state: "California", stateSlug: "california", city: "Long Beach", citySlug: "long-beach", population: 466742, lat: 33.7701, lng: -118.1937 },
  { state: "California", stateSlug: "california", city: "Oakland", citySlug: "oakland", population: 440646, lat: 37.8044, lng: -122.2712 },
  { state: "California", stateSlug: "california", city: "Bakersfield", citySlug: "bakersfield", population: 403455, lat: 35.3733, lng: -119.0187 },
  { state: "California", stateSlug: "california", city: "Anaheim", citySlug: "anaheim", population: 346824, lat: 33.8366, lng: -117.9143 },

  // Texas
  { state: "Texas", stateSlug: "texas", city: "Austin", citySlug: "austin", population: 961855, lat: 30.2672, lng: -97.7431 },
  { state: "Texas", stateSlug: "texas", city: "Dallas", citySlug: "dallas", population: 1304379, lat: 32.7767, lng: -96.7970 },
  { state: "Texas", stateSlug: "texas", city: "Houston", citySlug: "houston", population: 2304580, lat: 29.7604, lng: -95.3698 },
  { state: "Texas", stateSlug: "texas", city: "San Antonio", citySlug: "san-antonio", population: 1495295, lat: 29.4241, lng: -98.4936 },
  { state: "Texas", stateSlug: "texas", city: "Fort Worth", citySlug: "fort-worth", population: 918915, lat: 32.7555, lng: -97.3308 },
  { state: "Texas", stateSlug: "texas", city: "El Paso", citySlug: "el-paso", population: 678415, lat: 31.7619, lng: -106.4850 },
  { state: "Texas", stateSlug: "texas", city: "Arlington", citySlug: "arlington-tx", population: 398854, lat: 32.7357, lng: -97.1081 },
  { state: "Texas", stateSlug: "texas", city: "Corpus Christi", citySlug: "corpus-christi", population: 317863, lat: 27.8006, lng: -97.3964 },
  { state: "Texas", stateSlug: "texas", city: "Plano", citySlug: "plano", population: 285494, lat: 33.0198, lng: -96.6989 },
  { state: "Texas", stateSlug: "texas", city: "Laredo", citySlug: "laredo", population: 255205, lat: 27.5306, lng: -99.4803 },

  // Florida
  { state: "Florida", stateSlug: "florida", city: "Miami", citySlug: "miami", population: 442241, lat: 25.7617, lng: -80.1918 },
  { state: "Florida", stateSlug: "florida", city: "Orlando", citySlug: "orlando", population: 307573, lat: 28.5383, lng: -81.3792 },
  { state: "Florida", stateSlug: "florida", city: "Tampa", citySlug: "tampa", population: 384959, lat: 27.9506, lng: -82.4572 },
  { state: "Florida", stateSlug: "florida", city: "Jacksonville", citySlug: "jacksonville", population: 949611, lat: 30.3322, lng: -81.6557 },
  { state: "Florida", stateSlug: "florida", city: "St. Petersburg", citySlug: "st-petersburg", population: 258308, lat: 27.7676, lng: -82.6403 },
  { state: "Florida", stateSlug: "florida", city: "Hialeah", citySlug: "hialeah", population: 223109, lat: 25.8576, lng: -80.2781 },
  { state: "Florida", stateSlug: "florida", city: "Tallahassee", citySlug: "tallahassee", population: 196169, lat: 30.4383, lng: -84.2807 },
  { state: "Florida", stateSlug: "florida", city: "Fort Lauderdale", citySlug: "fort-lauderdale", population: 182760, lat: 26.1224, lng: -80.1373 },

  // New York
  { state: "New York", stateSlug: "new-york", city: "New York City", citySlug: "new-york-city", population: 8336817, lat: 40.7128, lng: -74.0060 },
  { state: "New York", stateSlug: "new-york", city: "Buffalo", citySlug: "buffalo", population: 278349, lat: 42.8864, lng: -78.8784 },
  { state: "New York", stateSlug: "new-york", city: "Rochester", citySlug: "rochester", population: 211328, lat: 43.1566, lng: -77.6088 },
  { state: "New York", stateSlug: "new-york", city: "Yonkers", citySlug: "yonkers", population: 211569, lat: 40.9312, lng: -73.8987 },
  { state: "New York", stateSlug: "new-york", city: "Syracuse", citySlug: "syracuse", population: 148620, lat: 43.0481, lng: -76.1474 },
  { state: "New York", stateSlug: "new-york", city: "Albany", citySlug: "albany", population: 99224, lat: 42.6526, lng: -73.7562 },

  // Illinois
  { state: "Illinois", stateSlug: "illinois", city: "Chicago", citySlug: "chicago", population: 2746388, lat: 41.8781, lng: -87.6298 },
  { state: "Illinois", stateSlug: "illinois", city: "Aurora", citySlug: "aurora", population: 180542, lat: 41.7606, lng: -88.3201 },
  { state: "Illinois", stateSlug: "illinois", city: "Naperville", citySlug: "naperville", population: 149104, lat: 41.7508, lng: -88.1535 },
  { state: "Illinois", stateSlug: "illinois", city: "Joliet", citySlug: "joliet", population: 150362, lat: 41.5250, lng: -88.0817 },
  { state: "Illinois", stateSlug: "illinois", city: "Rockford", citySlug: "rockford", population: 148655, lat: 42.2711, lng: -89.0940 },

  // Arizona
  { state: "Arizona", stateSlug: "arizona", city: "Phoenix", citySlug: "phoenix", population: 1608139, lat: 33.4484, lng: -112.0740 },
  { state: "Arizona", stateSlug: "arizona", city: "Tucson", citySlug: "tucson", population: 542629, lat: 32.2226, lng: -110.9747 },
  { state: "Arizona", stateSlug: "arizona", city: "Mesa", citySlug: "mesa", population: 504258, lat: 33.4152, lng: -111.8315 },
  { state: "Arizona", stateSlug: "arizona", city: "Chandler", citySlug: "chandler", population: 275987, lat: 33.3062, lng: -111.8413 },
  { state: "Arizona", stateSlug: "arizona", city: "Scottsdale", citySlug: "scottsdale", population: 241361, lat: 33.4942, lng: -111.9261 },

  // Washington
  { state: "Washington", stateSlug: "washington", city: "Seattle", citySlug: "seattle", population: 749256, lat: 47.6062, lng: -122.3321 },
  { state: "Washington", stateSlug: "washington", city: "Spokane", citySlug: "spokane", population: 228989, lat: 47.6588, lng: -117.4260 },
  { state: "Washington", stateSlug: "washington", city: "Tacoma", citySlug: "tacoma", population: 219346, lat: 47.2529, lng: -122.4443 },
  { state: "Washington", stateSlug: "washington", city: "Vancouver", citySlug: "vancouver-wa", population: 194829, lat: 45.6387, lng: -122.6615 },
  { state: "Washington", stateSlug: "washington", city: "Bellevue", citySlug: "bellevue", population: 151854, lat: 47.6101, lng: -122.2015 },

  // Georgia
  { state: "Georgia", stateSlug: "georgia", city: "Atlanta", citySlug: "atlanta", population: 498715, lat: 33.7490, lng: -84.3880 },
  { state: "Georgia", stateSlug: "georgia", city: "Augusta", citySlug: "augusta", population: 202081, lat: 33.4735, lng: -82.0105 },
  { state: "Georgia", stateSlug: "georgia", city: "Columbus", citySlug: "columbus-ga", population: 206922, lat: 32.4610, lng: -84.9877 },
  { state: "Georgia", stateSlug: "georgia", city: "Savannah", citySlug: "savannah", population: 147780, lat: 32.0809, lng: -81.0912 },
  { state: "Georgia", stateSlug: "georgia", city: "Athens", citySlug: "athens", population: 127315, lat: 33.9519, lng: -83.3576 },
];

export function getAllStates() {
  const map = new Map<string, string>();
  for (const l of locations) map.set(l.stateSlug, l.state);
  return Array.from(map, ([stateSlug, state]) => ({ stateSlug, state }));
}

export function getCitiesByState(stateSlug: string) {
  return locations.filter((l) => l.stateSlug === stateSlug);
}

export function getLocation(stateSlug: string, citySlug: string) {
  return locations.find((l) => l.stateSlug === stateSlug && l.citySlug === citySlug);
}
