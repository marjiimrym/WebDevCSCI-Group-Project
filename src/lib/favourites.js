// AI-assisted - see AI-USAGE.md #2

export const FAVOURITES_KEY = 'cosmic-explorer:favourites';

export function toggleId(ids, id) {
  return ids.includes(id) ? ids.filter((x) => x !== id) : [...ids, id];
}

export function loadFavourites(storage) {
  try {
    const raw = storage?.getItem(FAVOURITES_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter((id) => typeof id === 'string') : [];
  } catch {
    return [];
  }
}

export function saveFavourites(storage, ids) {
  try {
    storage?.setItem(FAVOURITES_KEY, JSON.stringify(ids));
  } catch {
    // Storage is full or blocked: favourites keep working in memory.
  }
}
