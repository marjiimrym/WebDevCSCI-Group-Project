// AI-assisted - see AI-USAGE.md #5.
import useNasa from '../hooks/useNasa.js';
import DataStatus from './DataStatus.jsx';
import fallbackImage from '../../assets/images/openpage.jpg';

function ResilientImage({ src, alt, ...props }) {
  return <img {...props} src={src} alt={alt} onError={(event) => {
    event.currentTarget.onerror = null;
    if (event.currentTarget.src !== new URL(fallbackImage, window.location.href).href) {
      event.currentTarget.src = fallbackImage;
      event.currentTarget.alt = 'Space illustration; the NASA image is temporarily unavailable.';
    }
  }} />;
}

export { ResilientImage };

// APOD text often repeats its own field name ("Explanation: …", "Credit: Credit: …").
const stripLabel = (text, label) => text.replace(new RegExp(`^(\\s*${label}:\\s*)+`, 'i'), '');

// Noon local time keeps a plain YYYY-MM-DD date on the same calendar day in every time zone.
const formatDay = (date) => new Date(`${date}T12:00:00`).toLocaleDateString('en-CA', { dateStyle: 'long' });

function DailyFeature({ data }) {
  const isImage = data.mediaType === 'image' && data.imageUrl;
  return (
    <article className="daily-feature">
      <div className="daily-feature__media">
        {isImage ? (
          <ResilientImage className="daily-feature__image" src={data.imageUrl} alt={data.alt} loading="lazy" width="800" height="600" />
        ) : (
          <a className="daily-feature__play" href={data.pageUrl} rel="external">
            <span className="daily-feature__play-icon" aria-hidden="true"></span>
            Watch today’s video on NASA
          </a>
        )}
      </div>
      <div className="daily-feature__body">
        <p className="daily-feature__meta">
          <time dateTime={data.date}>{formatDay(data.date)}</time>
          <span aria-hidden="true">·</span>
          {isImage ? 'Image' : 'Video'}
        </p>
        <h3 className="daily-feature__title">{data.title}</h3>
        <p className="daily-feature__explanation">{stripLabel(data.explanation, 'Explanation')}</p>
        {data.credit && <p className="daily-feature__credit">Credit: {stripLabel(data.credit, 'Credit')}</p>}
        <a className="text-link" href={data.pageUrl} rel="external">Read the full entry on NASA <span className="arrow" aria-hidden="true">↗</span></a>
      </div>
    </article>
  );
}

export default function NasaHighlights() {
  const apod = useNasa('apod');
  const weather = useNasa('weather');
  return (
    <section className="section section--alt nasa-live" aria-labelledby="daily-title">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="section-label"><span className="section-label__num">05</span>Today from NASA</p>
            <h2 id="daily-title" className="section-title">Astronomy Picture of the Day</h2>
          </div>
          <div className="section-head__aside">
            <DataStatus resource={apod} />
          </div>
        </div>

        {apod.data
          ? <DailyFeature data={apod.data} />
          : <p className="nasa-empty">{apod.loading ? 'Loading the daily feature…' : 'The daily feature is unavailable. Explore our curated discoveries above while updates recover.'}</p>}

        <div className="space-weather" aria-labelledby="weather-title">
          <div className="space-weather__head">
            <h2 id="weather-title" className="space-weather__title">Recent solar flares</h2>
            <p className="notice">NASA DONKI research observations from the past seven days; not an operational forecast.</p>
          </div>
          <DataStatus resource={weather} />
          {weather.data.length ? <ul className="weather-list" role="list">
            {weather.data.slice(0, 3).map((event) => {
              const flareClass = event.classType || 'Unclassified';
              return <li key={event.id} className="flare" data-class={flareClass[0]}>
                <span className="flare__class" aria-hidden="true">{flareClass}</span>
                <a className="flare__link" href={event.pageUrl} rel="external">{flareClass} solar flare</a>
                <time dateTime={event.beginTime}>{new Date(event.beginTime).toLocaleString('en-CA', { dateStyle: 'medium', timeStyle: 'short' })}</time>
                <span className="flare__region">Region {event.sourceLocation || 'unavailable'}</span>
              </li>;
            })}
          </ul> : <p className="nasa-empty">{weather.loading ? 'Loading space weather…' : weather.meta.source === 'nasa' ? 'No solar flares reported in this period.' : 'Space weather observations are currently unavailable.'}</p>}
        </div>
      </div>
    </section>
  );
}
