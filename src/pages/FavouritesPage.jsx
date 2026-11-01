import objects from '../../data/objects.json';
import FavouriteButton from '../components/FavouriteButton.jsx';

export default function FavouritesPage({ favouriteIds, onToggleFavourite }) {
  const favourites = objects.filter((object) => favouriteIds.includes(object.id));

  return (
    <main id="main" className="section">
      <div className="container">
        <h1>Favourites</h1>
        {favourites.length === 0 ? (
          <p>No favourites yet. Tap the heart on an Explore card to add one.</p>
        ) : (
          <ul role="list">
            {favourites.map((object) => (
              <li key={object.id}>
                {object.title}
                <FavouriteButton
                  objectTitle={object.title}
                  isFavourite
                  onToggleFavorite={() => onToggleFavourite(object.id)}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}