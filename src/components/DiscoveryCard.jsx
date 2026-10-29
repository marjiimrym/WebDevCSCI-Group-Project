// AI-assisted - see AI-USAGE.md #5
import SpaceIcon from './SpaceIcon.jsx';

export default function DiscoveryCard({ object, index }) {
  return (
    <article className={`discovery-card discovery-card--${object.id}`} data-reveal>
      <img className="discovery-card__image" src={object.image} alt="" width="733" height="783" loading="lazy" decoding="async" />
      <div className="discovery-card__top" aria-hidden="true"><span>0{index + 1} / FIELD NOTES</span><SpaceIcon name="star" /></div>
      <div className="discovery-card__content">
        <p className="obs-category"><span />{object.tag}</p>
        <h3><a href={object.href}>{object.title}<span className="discovery-card__arrow"><SpaceIcon name="external" /></span></a></h3>
        <p className="discovery-card__description">{object.summary}</p>
      </div>
    </article>
  );
}
