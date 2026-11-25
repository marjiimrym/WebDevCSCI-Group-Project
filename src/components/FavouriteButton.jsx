export default function FavouriteButton({ isFavourite, onToggleFavorite, objectTitle }) {
  const label = isFavourite
    ? `Remove ${objectTitle} from favourites`
    : `Add ${objectTitle} to favourites`;

  return (
    <button
      className="favourite-button"
      type="button"
      onClick={onToggleFavorite}
      aria-pressed={isFavourite}
      aria-label={label}
      title={label}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path
          d="M12 20.2 4.7 13a4.6 4.6 0 0 1 6.5-6.5l0.8 0.8 0.8-0.8a4.6 4.6 0 1 1 6.5 6.5Z"
          fill={isFavourite ? 'currentColor' : 'none'}
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
