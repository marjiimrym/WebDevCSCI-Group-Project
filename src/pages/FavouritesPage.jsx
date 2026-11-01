
import objects from '../../data/objects.json';
import FavouriteButton from '../components/FavouriteButton.jsx';

export default function FavouritesPage({
  favouriteIds,
  onToggleFavourite
}) {
  const favouriteObjects = objects.filter((object) =>
    favouriteIds.includes(object.id)
  );

  if (favouriteObjects.length === 0) {
    return (
      <main id="main">
        <div className="container">
          <h1>Favourites</h1>
          <p>No favourites yet</p>
        </div>
      </main>
    );
  }

  return (
    <main id="main">
      <div className="container">
        <h1>Favourites</h1>

        <ul>
          {favouriteObjects.map((object) => (
            <li key={object.id}>
              {object.title}
              <FavouriteButton
                objectTitle={object.title}
                isFavourite={favouriteIds.includes(object.id)}
                onToggleFavorite={() =>
                  onToggleFavourite(object.id)
                }
              />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
