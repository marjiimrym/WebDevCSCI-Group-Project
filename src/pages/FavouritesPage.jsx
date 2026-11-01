import { Link } from 'react-router-dom';
import objects from '../../data/objects.json';
import ObjectCard from '../components/ObjectCard.jsx';

export default function FavouritesPage({ favouriteIds, onToggleFavourite }) {
  const favouriteObjects = objects.filter((object) => favouriteIds.includes(object.id));

  return (
    <main id="main" className="section" tabIndex={-1}>
      <div className="container">
        <h1>Favourites</h1>
        {favouriteObjects.length === 0 ? (
          <>
            <p>No favourites yet</p>
            <Link className="text-link" to="/explore">Explore objects</Link>
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
    </main>
  );
}