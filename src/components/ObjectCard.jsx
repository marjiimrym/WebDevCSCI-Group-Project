import { Link } from 'react-router-dom';
import FavouriteButton from './FavouriteButton.jsx';
import { objectImage } from '../data/images.js';

function formatDistance(kilometres) {
  if (!kilometres) return 'Here';
  if (kilometres >= 1e15) {
    const lightYears = kilometres / 9.4607e12;
    return `${new Intl.NumberFormat('en', { notation: 'compact', maximumFractionDigits: 1 }).format(lightYears)} ly`;
  }
  if (kilometres >= 1e6) {
    return `${new Intl.NumberFormat('en', { notation: 'compact', maximumFractionDigits: 0 }).format(kilometres)} km`;
  }
  if (kilometres >= 1e3) {
    return `${new Intl.NumberFormat('en', { notation: 'compact', maximumFractionDigits: 0 }).format(kilometres)} km`;
  }
  return `${kilometres} km`;
}

export default function ObjectCard({ object, isFavourite, onToggleFavourite }) {
  return (
    <article className={`card object-card type-${object.tag.toLowerCase()}`}>
      <div className="card__media">
        <img src={objectImage(object.cover)} alt="" width="1200" height="750" loading="lazy" />
      </div>
      <FavouriteButton
        objectTitle={object.title}
        isFavourite={isFavourite}
        onToggleFavorite={onToggleFavourite}
      />
      <div className="card__body">
        <div className="card__eyebrow">
          <p className="category">{object.tag}</p>
          <p className="card__distance">{formatDistance(object.distance)}</p>
        </div>
        <h3 className="card__title">
          <Link className="card__link" to={`/objects/${object.id}`}>{object.title}</Link>
        </h3>
        <p className="card__text">{object.summary}</p>
      </div>
    </article>
  );
}
