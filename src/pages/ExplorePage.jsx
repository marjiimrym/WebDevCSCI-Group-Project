import objects from '../../data/objects.json';
import { Link } from 'react-router-dom';
import FavouriteButton from '../components/FavouriteButton.jsx';

export default function ExplorePage({ favouriteIds, onToggleFavourite }) {
  return (
    <main id="main" className="section">
        <div className="container">
            <h1 className="explore-title">Explore</h1>
            <ul className="card-grid" role="list">
                {objects.map((object) => (
                    <li key={object.id}>
                        <article className={`card type-${object.tag.toLowerCase()}`}>
                            <div className="card__media">
                                <img
                                    src={`/${object.cover}`}
                                    alt=""
                                    width="733"
                                    height="783"
                                    loading="lazy"
                                />
                            </div>
                            <div className="card__body">
                                <p className="category">{object.tag}</p>

                                <h2 className="card__title">
                                    <Link to={`/objects/${object.id}`}>
                                    {object.title}
                                    </Link>
                                </h2>
                                
                                <FavouriteButton
                                    objectTitle={object.title}
                                    isFavourite={favouriteIds.includes(object.id)}
                                    onToggleFavorite={() => onToggleFavourite(object.id)}
                                />
                                <p className="card__text">{object.summary}</p>
                            </div>
                        </article>
                    </li>
                ))}
            </ul>
        </div>
    </main>
);
}
