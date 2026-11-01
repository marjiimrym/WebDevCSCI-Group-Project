import { mkdir, writeFile } from "node:fs/promises";

const API_URL =
  "https://exoplanetarchive.ipac.caltech.edu/TAP/sync";

const query = `
    SELECT
    pl_name,
    hostname,
    disc_year,
    discoverymethod,
    disc_facility,
    pl_rade,
    pl_bmasse,
    pl_orbper,
    pl_orbsmax,
    pl_orbeccen,
    pl_eqt,
    pl_insol,
    sy_dist,
    st_teff,
    st_rad,
    st_mass,
    st_spectype,
    sy_pnum,
    sy_snum,
    ra,
    dec
    FROM pscomppars
    WHERE
    hostname LIKE 'TRAPPIST-1%'
    OR hostname LIKE 'Kepler-22%'
    OR hostname LIKE 'Proxima Cen%'
    OR hostname LIKE 'Kepler-186%'
    OR hostname LIKE 'Kepler-452%'
    OR hostname LIKE 'TOI-700%'
    OR hostname LIKE '51 Peg%'
    ORDER BY hostname, pl_name
    `;

const url = new URL(API_URL);

url.searchParams.set("query", query.trim());
url.searchParams.set("format", "json");

function round(value, digits = 2) {
  if (value === null || value === undefined) {
    return null;
  }

  return Number(Number(value).toFixed(digits));
}

async function downloadPlanets() {
  console.log("Fetching NASA Exoplanet Archive data...");

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(
      `NASA API error: ${response.status}`
    );
  }

  const rawData = await response.json();

  const planets = rawData.map((p) => ({
    id: p.pl_name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, ""),

    discovery: {
      year: p.disc_year,
      method: p.discoverymethod,
      facility: p.disc_facility
    },

    radius: {
      value: p.pl_rade,
      unit: "Earth radii"
    },

    mass: {
      value: p.pl_bmasse,
      unit: "Earth masses"
    },

    orbitalPeriod: {
      value: p.pl_orbper,
      unit: "days"
    },

    orbitalDistance: {
      value: p.pl_orbsmax,
      unit: "AU"
    },

    eccentricity: p.pl_orbeccen,

    equilibriumTemperature: {
      value: p.pl_eqt,
      unit: "K"
    },

    insolationFlux: {
      value: p.pl_insol,
      unit: "Earth flux"
    },

    distance: {
      parsecs: p.sy_dist,
      lightYears:
        p.sy_dist !== null
          ? round(p.sy_dist * 3.26156)
          : null
    },

    star: {
      name: p.hostname,

      temperature: {
        value: p.st_teff,
        unit: "K"
      },

      radius: {
        value: p.st_rad,
        unit: "Solar radii"
      },

      mass: {
        value: p.st_mass,
        unit: "Solar masses"
      },

      spectralType: p.st_spectype
    },

    system: {
      numberOfPlanets: p.sy_pnum,
      numberOfStars: p.sy_snum
    },

    coordinates: {
      rightAscension: {
        value: p.ra,
        unit: "degrees"
      },

      declination: {
        value: p.dec,
        unit: "degrees"
      }
    }
  }));

  await mkdir("public/data", {
    recursive: true
  });

  await writeFile(
    "public/data/exoplanets.json",
    JSON.stringify(planets, null, 2),
    "utf8"
  );

  console.log(
    `Successfully downloaded ${planets.length} planets!`
  );
}

downloadPlanets().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});