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

export default function NasaHighlights() {
  const apod = useNasa('apod');
  const weather = useNasa('weather');
  return (
    <section className="section section--alt nasa-live" aria-labelledby="daily-title">
      <div className="container">
        <p className="section-label">NASA discoveries</p>
        <h2 id="daily-title" className="section-title">Astronomy Picture of the Day</h2>
        <DataStatus resource={apod} />
        {apod.data ? <article className="daily-feature">
          {apod.data.imageUrl && <ResilientImage className="daily-feature__image" src={apod.data.imageUrl} alt={apod.data.alt} loading="lazy" width="800" height="600" />}
          <div>
            <p><time dateTime={apod.data.date}>{apod.data.date}</time>{apod.data.mediaType !== 'image' && ' · Video or interactive feature'}</p>
            <h3>{apod.data.title}</h3>
            <p className="daily-feature__explanation">{apod.data.explanation}</p>
            {apod.data.credit && <p className="notice">Credit: {apod.data.credit}</p>}
            <a className="text-link" href={apod.data.pageUrl} rel="external">View the full feature on NASA</a>
          </div>
        </article> : <p>{apod.loading ? 'Loading the daily feature…' : 'The daily feature is unavailable. Explore our curated discoveries above while updates recover.'}</p>}
        <div className="space-weather" aria-labelledby="weather-title">
          <h2 id="weather-title">Recent solar flares</h2>
          <p className="notice">NASA DONKI research observations from the past seven days; not an operational forecast.</p>
          <DataStatus resource={weather} />
          {weather.data.length ? <ul className="weather-list">
            {weather.data.slice(0, 3).map((event) => <li key={event.id}>
              <a href={event.pageUrl} rel="external">{event.classType || 'Unclassified'} solar flare</a>
              <time dateTime={event.beginTime}>{new Date(event.beginTime).toLocaleString()}</time>
              <span>{event.sourceLocation || 'Location unavailable'}</span>
            </li>)}
          </ul> : <p>{weather.loading ? 'Loading space weather…' : weather.meta.source === 'nasa' ? 'No solar flares reported in this period.' : 'Space weather observations are currently unavailable.'}</p>}
        </div>
      </div>
    </section>
  );
}
