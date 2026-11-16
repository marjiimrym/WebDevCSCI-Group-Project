// AI-assisted - see AI-USAGE.md #2

import { useEffect, useState } from 'react';
import { loadFavourites, saveFavourites, toggleId } from '../lib/favourites.js';

function getStorage() {
  try {
    return window.localStorage;
  } catch {
    return null;
  }
}

export default function useFavourites() {
  const [favouriteIds, setFavouriteIds] = useState(() => loadFavourites(getStorage()));

  useEffect(() => {
    saveFavourites(getStorage(), favouriteIds);
  }, [favouriteIds]);

  function toggleFavourite(id) {
    setFavouriteIds((current) => toggleId(current, id));
  }

  return { favouriteIds, toggleFavourite };
}
