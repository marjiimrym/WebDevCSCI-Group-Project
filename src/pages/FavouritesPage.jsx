import { Link } from 'react-router-dom';
import objects from '../../data/objects.json';
import ObjectCard from '../components/ObjectCard.jsx';
import HeroBackdrop from '../components/ui/HeroBackdrop.jsx';

// Near, mid and far: the same three the home page features.
const suggestedIds = ['moon', 'mars', 'galaxy'];

export default function FavouritesPage({ favouriteIds, onToggleFavourite }) {
  const favouriteObjects = objects.filter((object) => favouriteIds.includes(object.id));
  const suggestions = objects.filter((object) => suggestedIds.includes(object.id));
  const count = favouriteObjects.length;

  return (
    <main id="main" tabIndex={-1}>
      <section className="page-hero" aria-labelledby="page-title">
        <HeroBackdrop variant="article" />
        <div className="container">
          <p className="eyebrow">Your shelf</p>
          <h1 id="page-title" className="page-hero__title">Favourites</h1>
          <p className="lede page-hero__lede">
            {count
              ? `${count} saved ${count === 1 ? 'object' : 'objects'}, kept on this device.`
              : 'Objects you save with the heart button stay here, on this device.'}
          </p>
        </div>
      </section>

      <section className="section section--tight" aria-label={count ? 'Saved objects' : 'Suggested objects'}>
        <div className="container">
          {count === 0 ? (
            <>
              <div className="empty-state">
                <h2 className="empty-state__title">No favourites yet.</h2>
                <p className="text">Tap the heart on any object to keep it here. These three are a good place to start.</p>
                <Link className="btn btn--primary" to="/explore">Browse all 26 objects <span className="arrow" aria-hidden="true">→</span></Link>
              </div>
              <ul className="card-grid" role="list">
                {suggestions.map((object) => (
                  <li key={object.id}>
                    <ObjectCard object={object} isFavourite={false} onToggleFavourite={() => onToggleFavourite(object.id)} />
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <ul className="card-grid" role="list">
              {favouriteObjects.map((object) => (
                <li key={object.id}>
                  <ObjectCard object={object} isFavourite onToggleFavourite={() => onToggleFavourite(object.id)} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </main>
  );
}
