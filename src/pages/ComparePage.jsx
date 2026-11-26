import { useSearchParams } from 'react-router-dom';
import objects from '../../data/objects.json';
import ObjectCard from '../components/ObjectCard.jsx';
import HeroBackdrop from '../components/ui/HeroBackdrop.jsx';

const byId = new Map(objects.map((object) => [object.id, object]));
const compact = new Intl.NumberFormat('en', { notation: 'compact', maximumFractionDigits: 1 });

// Earth's catalogue distance is 0, so distance ratios involving it are undefined.
function compareLine(a, b, field) {
  const earth = [a, b].find((object) => field === 'distance' && !object.distance);
  if (earth) return `${earth.title} is our viewpoint, so there is no distance to compare.`;
  const [big, small] = a[field] >= b[field] ? [a, b] : [b, a];
  const factor = big[field] / small[field];
  if (factor < 1.05) return `${a.title} and ${b.title} are about the same ${field === 'radius' ? 'size' : 'distance from Earth'}.`;
  return field === 'radius'
    ? `${big.title} is ${compact.format(factor)}× wider than ${small.title}.`
    : `${big.title} is ${compact.format(factor)}× farther from Earth than ${small.title}.`;
}

export default function ComparePage({ favouriteIds, onToggleFavourite }) {
  const [params, setParams] = useSearchParams();
  const a = byId.get(params.get('a')) ?? byId.get('earth');
  const b = byId.get(params.get('b')) ?? byId.get('mars');

  function update(name, value) {
    setParams((current) => {
      const next = new URLSearchParams(current);
      next.set(name, value);
      return next;
    }, { replace: true });
  }

  const picker = (name, selected, label) => (
    <div className="field">
      <label className="field__label" htmlFor={`compare-${name}`}>{label}</label>
      <select className="select" id={`compare-${name}`} value={selected.id} onChange={(event) => update(name, event.target.value)}>
        {objects.map((object) => <option key={object.id} value={object.id}>{object.title}</option>)}
      </select>
    </div>
  );

  return (
    <main id="main" tabIndex={-1}>
      <section className="page-hero page-hero--explore" aria-labelledby="page-title">
        <HeroBackdrop variant="catalogue" />
        <div className="container">
          <p className="eyebrow">Side by side</p>
          <h1 id="page-title" className="page-hero__title">Compare Objects</h1>
          <p className="lede page-hero__lede">Pick any two objects from the catalogue to compare their size and distance from Earth.</p>
        </div>
      </section>

      <div className="container toolbar-wrap">
        <form className="toolbar toolbar--pair" aria-label="Choose two objects to compare" onSubmit={(event) => event.preventDefault()}>
          {picker('a', a, 'First object')}
          {picker('b', b, 'Second object')}
        </form>
      </div>

      <section className="results" aria-labelledby="compare-title">
        <div className="container">
          <h2 id="compare-title" className="results__count" aria-live="polite">{a.title} vs {b.title}</h2>
          <dl className="card__meta fact-list">
            <div><dt>Radius</dt><dd>{a.title}: {compact.format(a.radius)} km · {b.title}: {compact.format(b.radius)} km</dd></div>
            <div><dt>Size</dt><dd>{compareLine(a, b, 'radius')}</dd></div>
            <div><dt>Distance</dt><dd>{compareLine(a, b, 'distance')}</dd></div>
          </dl>
          <ul className="card-grid" role="list">
            {[a, b].map((object, index) => (
              <li key={`${index}-${object.id}`}>
                <ObjectCard object={object} isFavourite={favouriteIds.includes(object.id)} onToggleFavourite={() => onToggleFavourite(object.id)} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
