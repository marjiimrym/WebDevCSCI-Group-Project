import FavouriteButton from '../components/FavouriteButton.jsx';

export default function FavouritesPage({ objects, favouriteIds, onToggleLike }) {
  return (
    <ul>
      {objects.map((object) => (
        <li key={object.id}>
          {object.title}
          <FavouriteButton
            objectTitle={object.title}
            isFavourite={favouriteIds.includes(object.id)}
            onToggleFavorite={() => onToggleLike(object.id)}
          />
        </li>
      ))}
    </ul>
  );
}
