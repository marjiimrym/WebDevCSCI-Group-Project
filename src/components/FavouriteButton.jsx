export default function FavouriteButton({ isFavourite, onToggleFavorite, objectTitle,}) {
  return (
    <button
      className="favourite-button"
      type="button"
      onClick={onToggleFavorite}
      aria-pressed={isFavourite}
      aria-label={`Favourite ${objectTitle}`}
      
    >
      {isFavourite ? '♥' : '♡'}
    </button>

  );
}
