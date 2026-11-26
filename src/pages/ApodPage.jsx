import useNasa from '../hooks/useNasa.js';
import DataStatus from '../components/DataStatus.jsx';
import { DailyFeature } from '../components/NasaHighlights.jsx';
import HeroBackdrop from '../components/ui/HeroBackdrop.jsx';

export default function ApodPage() {
  const apod = useNasa('apod');
  return (
    <main id="main" tabIndex={-1}>
      <section className="page-hero" aria-labelledby="page-title">
        <HeroBackdrop variant="article" />
        <div className="container">
          <p className="eyebrow">Today from NASA</p>
          <h1 id="page-title" className="page-hero__title">Astronomy Picture of the Day</h1>
          <p className="lede page-hero__lede">Each day NASA features a different image or video of the universe, with a short explanation written by a professional astronomer.</p>
        </div>
      </section>
      <section className="section" aria-label="Today's feature">
        <div className="container">
          <DataStatus resource={apod} />
          {apod.data
            ? <DailyFeature data={apod.data} />
            : <p className="nasa-empty">{apod.loading ? 'Loading the daily feature…' : 'The daily feature is unavailable right now. Please try again later.'}</p>}
        </div>
      </section>
    </main>
  );
}
