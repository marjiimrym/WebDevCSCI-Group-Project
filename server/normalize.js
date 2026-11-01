// AI-assisted - see AI-USAGE.md #5.
import { schemas, safeUrl } from '../shared/nasa-contract.js';
import { convert } from 'html-to-text';

const text = (value, max) => typeof value === 'string' ? convert(value.slice(0, max * 4), {
  wordwrap: false,
  selectors: [
    { selector: 'a', options: { ignoreHref: true } },
    { selector: 'img', format: 'skip' },
    { selector: 'script', format: 'skip' },
    { selector: 'style', format: 'skip' },
  ],
}).trim().slice(0, max) : '';

// Migrate previously saved text without discarding the last successful NASA snapshot.
export function cleanCachedText(kind, data) {
  if (kind === 'apod' && data) return { ...data, title: text(data.title, 500),
    explanation: text(data.explanation, 20000), credit: text(data.credit, 2000), alt: text(data.alt, 2000) };
  if (kind === 'images') return data.map((item) => ({ ...item, title: text(item.title, 500),
    description: text(item.description, 10000), credit: text(item.credit, 500) }));
  return data;
}
function number(value) {
  if (value === undefined || value === null || value === '') return null;
  if (!['string', 'number'].includes(typeof value) || !Number.isFinite(Number(value)) || Number(value) < 0) {
    throw new Error('Invalid measurement');
  }
  return Math.round(Number(value));
}
function https(value) {
  if (typeof value !== 'string') return null;
  const parsed = safeUrl.safeParse(value.replace(/^http:\/\//, 'https://'));
  return parsed.success ? parsed.data : null;
}

// Shared with the existing snapshot script; preserve its field names and units.
export function normalizeAsteroids(feed, startDate, endDate) {
  if (!feed?.near_earth_objects || typeof feed.near_earth_objects !== 'object' || Array.isArray(feed.near_earth_objects)) {
    throw new Error('Invalid NeoWs feed');
  }
  const objects = new Map();
  for (const group of Object.values(feed.near_earth_objects)) {
    if (!Array.isArray(group)) throw new Error('Invalid NeoWs group');
    for (const neo of group) {
      if (!neo || !Array.isArray(neo.close_approach_data)) throw new Error('Invalid asteroid');
      const approaches = neo.close_approach_data.filter((a) => a && a.orbiting_body === 'Earth'
        && a.close_approach_date >= startDate && a.close_approach_date <= endDate)
        .sort((a, b) => a.close_approach_date.localeCompare(b.close_approach_date));
      if (!approaches.length) continue;
      const approach = approaches[0];
      const item = {
        id: neo.id, name: text(neo.name, 300), hazardous: neo.is_potentially_hazardous_asteroid,
        diameterMinM: number(neo.estimated_diameter?.meters?.estimated_diameter_min),
        diameterMaxM: number(neo.estimated_diameter?.meters?.estimated_diameter_max),
        approachDate: approach.close_approach_date,
        velocityKph: number(approach.relative_velocity?.kilometers_per_hour),
        missDistanceKm: number(approach.miss_distance?.kilometers),
        jplUrl: `https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=${encodeURIComponent(neo.id)}`,
      };
      if (!objects.has(item.id) || item.approachDate < objects.get(item.id).approachDate) objects.set(item.id, item);
    }
  }
  return schemas.asteroids.parse([...objects.values()].sort((a, b) => a.approachDate.localeCompare(b.approachDate)));
}

export function normalizeApod(payload) {
  const data = Array.isArray(payload) ? payload[0] : payload;
  if (!data || !['image', 'video', 'other'].includes(data.media_type)) throw new Error('Invalid APOD');
  // In the WordPress contract `url` can be an HTML page; only `hdurl` is the image.
  const imageUrl = data.media_type === 'image' ? https(data.hdurl) : null;
  if (data.media_type === 'image' && !imageUrl) throw new Error('Missing APOD image');
  return schemas.apod.parse({
    date: data.date, title: text(data.title, 500), explanation: text(data.explanation, 20000),
    mediaType: data.media_type, imageUrl, pageUrl: https(data.permalink) || https(data.url),
    credit: text(data.credit || data.copyright, 2000), alt: text(data.alt || data.title, 2000),
  });
}

export function normalizeImages(payload) {
  if (!Array.isArray(payload?.collection?.items)) throw new Error('Invalid NASA image search');
  return schemas.images.parse(payload.collection.items.slice(0, 24).map((item) => {
    const data = item.data?.[0];
    if (!data || data.media_type !== 'image') throw new Error('Invalid image item');
    return {
      id: data.nasa_id, title: text(data.title, 500), description: text(data.description, 10000),
      imageUrl: https(item.links?.find((link) => link.rel === 'preview')?.href),
      pageUrl: `https://images.nasa.gov/details/${encodeURIComponent(data.nasa_id)}`,
      date: text(data.date_created, 50), credit: text(data.photographer || data.secondary_creator || data.center, 500),
    };
  }));
}

export function normalizeWeather(payload) {
  if (!Array.isArray(payload)) throw new Error('Invalid DONKI data');
  const date = (value) => {
    if (typeof value !== 'string' || !/^\d{4}-\d\d-\d\dT/.test(value)) throw new Error('Invalid event time');
    return new Date(/[Z+-]\d?\d?:?\d?\d?$/.test(value.slice(10)) ? value : `${value}Z`).toISOString();
  };
  return schemas.weather.parse(payload.map((item) => ({
    id: item.flrID, beginTime: date(item.beginTime), peakTime: item.peakTime ? date(item.peakTime) : null,
    classType: text(item.classType, 30), sourceLocation: text(item.sourceLocation, 100),
    pageUrl: https(item.link)?.replace('kauai.ccmc.gsfc.nasa.gov', 'ccmc.gsfc.nasa.gov'),
  })).sort((a, b) => b.beginTime.localeCompare(a.beginTime)));
}
