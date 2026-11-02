import { Link } from 'react-router-dom';
import FavouriteButton from './FavouriteButton.jsx';
import { objectImage } from '../data/images.js';

export default function ObjectCard({ object, isFavourite, onToggleFavourite }) {
  return (
    <article className={`card type-${object.tag.toLowerCase()}`}>
      <div className="card__media">
        <img src={objectImage(object.cover)} alt="" width="733" height="783" loading="lazy" />
      </div>
      <div className="card__body">
        <p className="category">{object.tag}</p>
        <h3 className="card__title"><Link className="card__link" to={`/objects/${object.id}`}>{object.title}</Link></h3>
        <FavouriteButton objectTitle={object.title} isFavourite={isFavourite} onToggleFavorite={onToggleFavourite} />
        <p className="card__text">{object.summary}</p>
        <span className="card__cta" aria-hidden="true">Explore <span className="arrow">→</span></span>
      </div>
    </article>
  );
}
