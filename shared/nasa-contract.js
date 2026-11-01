// AI-assisted - see AI-USAGE.md #5.
import { z } from 'zod';

export const isoDate = z.string().regex(/^\d{4}-\d{2}-\d{2}$/).refine((value) => {
  const date = new Date(`${value}T00:00:00Z`);
  return Number.isFinite(date.getTime()) && date.toISOString().slice(0, 10) === value;
});
export const timestamp = z.string().datetime();
export const safeUrl = z.string().url().refine((value) => {
  const url = new URL(value);
  return url.protocol === 'https:' && !url.username && !url.password && !url.searchParams.has('api_key');
});
const measurement = z.number().finite().nonnegative().nullable();
export const asteroidSchema = z.object({
  id: z.string().regex(/^\d+$/), name: z.string().min(1).max(300), hazardous: z.boolean(),
  diameterMinM: measurement, diameterMaxM: measurement, approachDate: isoDate,
  velocityKph: measurement, missDistanceKm: measurement, jplUrl: safeUrl,
});
export const apodSchema = z.object({
  date: isoDate, title: z.string().min(1).max(500), explanation: z.string().max(20000),
  mediaType: z.enum(['image', 'video', 'other']), imageUrl: safeUrl.nullable(),
  pageUrl: safeUrl, credit: z.string().max(2000), alt: z.string().max(2000),
});
export const imageSchema = z.object({
  id: z.string().min(1).max(300), title: z.string().min(1).max(500),
  description: z.string().max(10000), imageUrl: safeUrl, pageUrl: safeUrl,
  date: z.string().max(50), credit: z.string().max(500),
});
export const weatherSchema = z.object({
  id: z.string().min(1).max(200), beginTime: timestamp, peakTime: timestamp.nullable(),
  classType: z.string().max(30), sourceLocation: z.string().max(100), pageUrl: safeUrl,
});
export const schemas = {
  asteroids: z.array(asteroidSchema).max(5000), apod: apodSchema.nullable(),
  images: z.array(imageSchema).max(24), weather: z.array(weatherSchema).max(5000),
};
export const metaSchema = z.object({
  source: z.enum(['nasa', 'fallback', 'unavailable', 'disabled']),
  cached: z.boolean(), stale: z.boolean(), fetchedAt: timestamp.nullable(),
  refreshAfter: timestamp.nullable(), message: z.string().max(500).nullable(),
});
export const envelopeSchema = (kind) => z.object({ data: schemas[kind], meta: metaSchema });
