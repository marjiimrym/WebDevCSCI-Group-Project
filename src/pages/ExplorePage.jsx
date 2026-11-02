import { useSearchParams } from 'react-router-dom';
import objects from '../../data/objects.json';
import heroImage from '../../assets/images/openpage.jpg';
import ObjectCard from '../components/ObjectCard.jsx';
import bgImage from '../../assets/images/background.jpg';
// AI-assisted - see AI-USAGE.md #5.
import NasaImageSearch from '../components/NasaImageSearch.jsx';

const categories = [['all', 'All'], ['planet', 'Planets'], ['moon', 'Moons'], ['star', 'Stars'], ['galaxy', 'Galaxies'], ['nebula', 'Nebulae']];
const sorts = { distance: 'Distance from Earth', name: 'Name (A to Z)', size: 'Size' };
const sorters = {
  distance: (a, b) => a.distance - b.distance,
  name: (a, b) => a.title.localeCompare(b.title),
  size: (a, b) => b.radius - a.radius,
};

export default function ExplorePage({ favouriteIds, onToggleFavourite }) {
  const [params, setParams] = useSearchParams();
  const q = params.get('q') ?? '';
  const type = categories.some(([value]) => value === params.get('type')) ? params.get('type') : 'all';
  const sort = Object.hasOwn(sorts, params.get('sort')) ? params.get('sort') : 'distance';
  const results = objects
    .filter((object) => object.title.toLowerCase().includes(q.trim().toLowerCase()))
    .filter((object) => type === 'all' || object.tag.toLowerCase() === type)
    .sort(sorters[sort]);

  function update(name, value) {
    setParams((current) => {
      const next = new URLSearchParams(current);
      next.set(name, value);
      return next;
    }, { replace: true });
  }

  return (
    <main id="main" tabIndex={-1}>
    <div
      className="page-bg"
      aria-hidden="true"
      style={{
        backgroundImage: `linear-gradient(rgba(8, 9, 20, 0.72), rgba(8, 9, 20, 0.9)), url(${bgImage})`,
      }}
    />
      <section className="page-hero page-hero--explore" aria-labelledby="page-title">
        <img className="page-hero__media" src={heroImage} alt="" width="1200" height="675" />
        <div className="sky" aria-hidden="true"></div>
        <div className="container">
          <p className="eyebrow">The catalogue</p>
          <h1 id="page-title" className="page-hero__title">Explore<br />the cosmos.</h1>
          <p className="lede page-hero__lede">Twenty-six planets, moons, stars, galaxies and nebulae — from your own backyard to a galaxy 23 million light-years away.</p>
        </div>
      </section>
      <div className="container toolbar-wrap">
        <form className="toolbar" role="search" aria-label="Search, filter and sort objects" onSubmit={(event) => event.preventDefault()}>
          <div className="field toolbar__search">
            <label className="field__label" htmlFor="q">Search</label>
            <div className="search">
              <input className="input" id="q" name="q" type="search" placeholder="Search by name, e.g. Saturn" autoComplete="off" value={q} onChange={(event) => update('q', event.target.value)} />
            </div>
          </div>
          <fieldset className="field toolbar__filter">
            <legend className="field__label">Type of object</legend>
            <div className="chips">
              {categories.map(([value, label]) => (
                <label className="chip" key={value}>
                  <input type="radio" name="type" value={value} checked={type === value} onChange={() => update('type', value)} />
                  <span className="chip__face">{label} <span className="chip__count">{value === 'all' ? objects.length : objects.filter((object) => object.tag.toLowerCase() === value).length}</span></span>
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
            <h2 id="results-title" className="results__count" aria-live="polite">Showing <strong>{results.length}</strong> of {objects.length} objects · sorted by {sorts[sort].toLowerCase()}</h2>
          </div>
          <ul className="card-grid" role="list">
            {results.map((object) => (
              <li key={object.id}>
                <ObjectCard object={object} isFavourite={favouriteIds.includes(object.id)} onToggleFavourite={() => onToggleFavourite(object.id)} />
              </li>
            ))}
          </ul>
          {results.length === 0 && <p className="results__status">No objects match. Try a different name or filter.</p>}
        </div>
      </section>
      <NasaImageSearch />
    </main>
  );
}
