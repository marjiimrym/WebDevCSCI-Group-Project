import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import metadata from '../data/pageMetadata.json';

export default function RouteEffects() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const page = pathname === '/'
      ? { title: 'Cosmic Explorer — Explore the Universe', description: 'Discover planets, moons, stars, galaxies and nebulae with Cosmic Explorer.' }
      : pathname === '/favourites'
        ? { title: 'Favourites | Cosmic Explorer', description: 'Your favourite celestial objects.' }
        : metadata[pathname.replace(/\/$/, '')] ?? { title: 'Not found | Cosmic Explorer', description: 'This page could not be found.' };
    document.title = page.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', page.description);
    if (hash) {
      let anchor;
      try { anchor = decodeURIComponent(hash.slice(1)); } catch { anchor = hash.slice(1); }
      document.getElementById(anchor)?.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}
