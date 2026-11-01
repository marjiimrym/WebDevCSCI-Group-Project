// AI-assisted - see AI-USAGE.md #5. Synthetic fixtures; no live NASA calls in tests.
export const approach = (date, distance = '1234') => ({
  orbiting_body: 'Earth', close_approach_date: date,
  relative_velocity: { kilometers_per_hour: '42000.8' }, miss_distance: { kilometers: distance },
});
export const neo = {
  id: '123', name: 'Test asteroid', is_potentially_hazardous_asteroid: true,
  estimated_diameter: { meters: { estimated_diameter_min: 12.2, estimated_diameter_max: 25.7 } },
  close_approach_data: [approach('2026-11-03'), approach('2026-11-01', '456')],
};
export const feed = { near_earth_objects: { '2026-11-01': [neo], '2026-11-03': [neo] } };
export const apod = {
  date: '2026-11-01', title: 'A test nebula', explanation: 'A cloud of interstellar gas.',
  media_type: 'image', hdurl: 'https://images-assets.nasa.gov/test.jpg',
  url: 'https://science.nasa.gov/image-article/test/', permalink: 'https://science.nasa.gov/image-article/test/',
  credit: 'NASA test fixture', alt: 'A blue nebula',
};
export const imageResponse = { collection: { items: [{
  data: [{ nasa_id: 'test-image', media_type: 'image', title: 'Orion', description: 'A nebula', center: 'JPL', date_created: '2026-01-01T00:00:00Z' }],
  links: [{ rel: 'preview', href: 'https://images-assets.nasa.gov/test.jpg' }],
}] } };
export const flares = [{
  flrID: '2026-11-01T10:00:00-FLR-001', beginTime: '2026-11-01T10:00Z', peakTime: '2026-11-01T10:05Z',
  classType: 'M1.0', sourceLocation: 'N10W20', link: 'https://ccmc.gsfc.nasa.gov/DONKI/view/FLR/1',
}];
export const meta = { source: 'nasa', cached: false, stale: false, fetchedAt: '2026-11-01T12:00:00.000Z', refreshAfter: '2026-11-01T13:00:00.000Z', message: null };
