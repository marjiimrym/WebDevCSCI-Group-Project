import useNasa from '../hooks/useNasa.js';
import DataStatus from '../components/DataStatus.jsx';
import { FlareList } from '../components/NasaHighlights.jsx';
import HeroBackdrop from '../components/ui/HeroBackdrop.jsx';

const classes = [
  ['X', 'Major flares that can cause radio blackouts across the sunlit side of Earth.'],
  ['M', 'Medium flares that can cause brief radio blackouts near the poles.'],
  ['C', 'Small flares with few noticeable effects on Earth.'],
];

export default function SpaceWeatherPage() {
  const weather = useNasa('weather');
  return (
    <main id="main" tabIndex={-1}>
      <section className="page-hero" aria-labelledby="page-title">
        <HeroBackdrop variant="article" />
        <div className="container">
          <p className="eyebrow">Space weather</p>
          <h1 id="page-title" className="page-hero__title">Recent Solar Flares</h1>
          <p className="lede page-hero__lede">Solar flares are sudden bursts of radiation from the Sun. These are the flares recorded in NASA's DONKI database over the past seven days, newest first.</p>
        </div>
      </section>
      <section className="section" aria-labelledby="flares-title">
        <div className="container space-weather space-weather--page">
          <div className="space-weather__head">
            <h2 id="flares-title" className="space-weather__title">{weather.data.length ? `${weather.data.length} ${weather.data.length === 1 ? 'flare' : 'flares'} this week` : 'Flares this week'}</h2>
            <p className="notice">These are research observations, not an operational forecast.</p>
          </div>
          <DataStatus resource={weather} />
          <FlareList weather={weather} limit={weather.data.length} />
        </div>
      </section>
      <section className="section section--tight section--alt" aria-labelledby="classes-title">
        <div className="container">
          <h2 id="classes-title" className="section-title">Reading the flare class</h2>
          <dl className="card__meta fact-list">
            {classes.map(([letter, text]) => <div key={letter}><dt>Class {letter}</dt><dd>{text}</dd></div>)}
          </dl>
          <p className="text">Each class is ten times stronger than the one below it, and the number after the letter scales within the class. For example, an X2 flare is twice as strong as an X1.</p>
        </div>
      </section>
    </main>
  );
}
