import { useSearchParams } from 'react-router-dom';
// AI-assisted - see AI-USAGE.md #5.
import useNasa from '../hooks/useNasa.js';
import DataStatus from '../components/DataStatus.jsx';
import { filterAsteroids } from '../../assets/js/asteroid-filters.js';
import heroImage from '../../assets/images/openpage.jpg';

const num = new Intl.NumberFormat('en-CA');
const formatDate = (iso) => new Date(iso).toLocaleDateString('en-CA', {
  year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC',
});
const formatKm = (km) => km === null ? 'Unavailable' : km >= 1e6 ? `${(km / 1e6).toFixed(1)} million km` : `${num.format(km)} km`;
const formatNumber = (value) => value === null ? 'Unavailable' : num.format(value);
const sorts = { date: 'Soonest approach', distance: 'Closest pass', size: 'Largest first', speed: 'Fastest first', name: 'Name (A to Z)' };

export default function AsteroidsPage() {
  const resource = useNasa('asteroids');
  const asteroids = resource.data;
  const hazardous = asteroids.filter((asteroid) => asteroid.hazardous).length;
  const hazards = [['all', 'All', asteroids.length], ['yes', 'Potentially hazardous', hazardous], ['no', 'Not hazardous', asteroids.length - hazardous]];
  const dates = asteroids.map((asteroid) => asteroid.approachDate).sort();
  const [params, setParams] = useSearchParams();
  const q = params.get('q') ?? '';
  const hazard = ['all', 'yes', 'no'].includes(params.get('hazard')) ? params.get('hazard') : 'all';
  const sort = Object.hasOwn(sorts, params.get('sort')) ? params.get('sort') : 'date';
  const results = filterAsteroids(asteroids, { q, hazard, sort });

  function update(name, value) {
    setParams((current) => {
      const next = new URLSearchParams(current);
      next.set(name, value);
      return next;
    }, { replace: true });
  }

  return (
    <main id="main" tabIndex={-1}>
      <section className="page-hero page-hero--explore" aria-labelledby="page-title">
        <img className="page-hero__media" src={heroImage} alt="" width="1200" height="675" />
        <div className="sky" aria-hidden="true"></div>
        <div className="container">
          <p className="eyebrow">Near-Earth objects</p>
          <h1 id="page-title" className="page-hero__title">Near-Earth Asteroids</h1>
          <p className="lede page-hero__lede">Explore asteroids NASA tracks passing close to Earth. Search by name, show only the potentially hazardous ones, and sort by date, distance, size or speed.</p>
        </div>
      </section>

      <div className="container toolbar-wrap">
        <DataStatus resource={resource} />
        <form className="toolbar" id="asteroid-filters" role="search" aria-label="Search, filter and sort asteroids" onSubmit={(event) => event.preventDefault()}>
          <div className="field toolbar__search">
            <label className="field__label" htmlFor="q">Search</label>
            <div className="search">
              <input className="input" id="q" name="q" type="search" placeholder="Search by name, e.g. 2010 DO" autoComplete="off" value={q} onChange={(event) => update('q', event.target.value)} />
            </div>
          </div>
          <fieldset className="field toolbar__filter">
            <legend className="field__label">Hazard</legend>
            <div className="chips">
              {hazards.map(([value, label, count]) => (
                <label className="chip" key={value}>
                  <input type="radio" name="hazard" value={value} checked={hazard === value} onChange={() => update('hazard', value)} />
                  <span className="chip__face">{label} <span className="chip__count" data-count={value}>{count}</span></span>
                </label>
              ))}
            </div>
          </fieldset>
          <div className="field toolbar__sort">
            <label className="field__label" htmlFor="sort">Sort by</label>
            <select className="select" id="sort" name="sort" value={sort} onChange={(event) => update('sort', event.target.value)}>
              {Object.entries(sorts).map(([value, label]) => <option key={value} value={value}>{label}</option>)}
            </select>
          </div>
        </form>
      </div>

      <section className="results" aria-labelledby="results-title">
        <div className="container">
          <div className="results__bar">
            <h2 id="results-title" className="results__count" aria-live="polite">
              Showing <strong>{results.length}</strong> of {asteroids.length} asteroids
              {dates.length > 0 && ` · passing Earth ${formatDate(dates[0])} – ${formatDate(dates.at(-1))}`}
            </h2>
            <p className="notice">“Potentially hazardous” is NASA's label for large asteroids whose orbits pass near Earth's, not a prediction of impact</p>
          </div>
          <ul className="card-grid" id="asteroid-grid" role="list">
            {results.map((asteroid) => (
              <li key={asteroid.id}>
                <article className={`card ${asteroid.hazardous ? 'type-hazard' : 'type-asteroid'}`}>
                  <div className="card__body">
                    <p className="category">{asteroid.hazardous ? 'Potentially hazardous' : 'Asteroid'}</p>
                    <h3 className="card__title"><a className="card__link" href={asteroid.jplUrl} rel="external">{asteroid.name}</a></h3>
                    <dl className="card__meta">
                      <div><dt>Closest approach</dt><dd>{formatDate(asteroid.approachDate)}</dd></div>
                      <div><dt>Miss distance</dt><dd>{formatKm(asteroid.missDistanceKm)}</dd></div>
                      <div><dt>Diameter</dt><dd>{asteroid.diameterMinM === null || asteroid.diameterMaxM === null ? 'Unavailable' : `${num.format(asteroid.diameterMinM)}–${num.format(asteroid.diameterMaxM)} m`}</dd></div>
                      <div><dt>Speed</dt><dd>{formatNumber(asteroid.velocityKph)}{asteroid.velocityKph !== null && ' km/h'}</dd></div>
                    </dl>
                    <span className="card__cta" aria-hidden="true">NASA JPL data <span className="arrow">→</span></span>
                  </div>
                </article>
              </li>
            ))}
          </ul>
          <p className="results__status" id="results-status" hidden={results.length > 0}>{asteroids.length ? 'No asteroids match. Try a different name or filter.' : resource.loading ? 'Loading asteroid approaches…' : 'No asteroid approaches reported for this period.'}</p>
        </div>
      </section>
    </main>
  );
}
