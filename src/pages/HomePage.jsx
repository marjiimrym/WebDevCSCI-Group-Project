import { Link } from 'react-router-dom';
// AI-assisted - see AI-USAGE.md #5.
import NasaHighlights from '../components/NasaHighlights.jsx';
import ObjectCard from '../components/ObjectCard.jsx';
import HeroBackdrop from '../components/ui/HeroBackdrop.jsx';
import objects from '../../data/objects.json';

const featuredIds = ['moon', 'mars', 'galaxy'];
const featuredObjects = featuredIds
  .map((id) => objects.find((object) => object.id === id))
  .filter(Boolean);

export default function HomePage({ favouriteIds = [], onToggleFavourite }) {
  return (
    <main id="main" tabIndex={-1}>
        {/* Hero */}
        <section className="hero" data-enter aria-labelledby="hero-title">
            <HeroBackdrop variant="home" />

            <div className="container hero__inner">
                <p className="eyebrow">
                    <span>NASA Data <span className="eyebrow__sep" aria-hidden="true">•</span></span>
                    <span>Space Discovery <span className="eyebrow__sep" aria-hidden="true">•</span></span>
                    <span>Astronomy</span>
                </p>
                <h1 id="hero-title" className="hero__title">
                    <span className="hero__line">Explore 26 objects.</span>{' '}
                    <span className="hero__line hero__line--accent">An astronomy catalogue.</span>
                </h1>
                <p className="lede hero__lede">Browse 26 objects, from the Moon to the Andromeda Galaxy. Each one has a clear summary, key facts and a full profile.</p>
                <div className="hero__actions">
                    <Link className="btn btn--primary btn--lg" to="/explore">Open the catalogue <span className="arrow" aria-hidden="true">→</span></Link>
                    <a className="btn btn--ghost btn--lg" href="#discover">See how it works</a>
                </div>
            </div>

            <div className="scroll-cue" aria-hidden="true">
                <span className="scroll-cue__line"></span>
            </div>
        </section>

        {/* 01 Explore the cosmos */}
        <section id="discover" className="section" aria-labelledby="intro-title">
            <div className="container intro">
                <div>
                    <p className="section-label"><span className="section-label__num">01</span>Explore the cosmos</p>
                    <h2 id="intro-title" className="section-title">Browse objects from our solar system and beyond.</h2>
                </div>
                <div className="intro__body">
                    <p className="lede">Cosmic Explorer is a single-page web application for exploring astronomy and space discovery data.</p>
                    <p className="text">Browse celestial objects from our solar system and beyond — planets, moons, stars, galaxies and nebulae — then open any one of them for a full profile: a clear summary, key facts at a glance, and deeper sections on what makes it remarkable.</p>
                    <dl className="stats">
                        <div className="stat">
                            <dt className="stat__label">Featured objects</dt>
                            <dd className="stat__value">26</dd>
                        </div>
                        <div className="stat">
                            <dt className="stat__label">NASA datasets</dt>
                            <dd className="stat__value">04</dd>
                        </div>
                        <div className="stat">
                            <dt className="stat__label">Project milestones</dt>
                            <dd className="stat__value">05</dd>
                        </div>
                    </dl>
                </div>
            </div>
        </section>

        {/* 02 Featured discoveries */}
        <section className="section section--alt" aria-labelledby="featured-title">
            <div className="container">
                <div className="section-head">
                    <div>
                        <p className="section-label"><span className="section-label__num">02</span>Featured discoveries</p>
                        <h2 id="featured-title" className="section-title">Three featured objects.</h2>
                    </div>
                    <div className="section-head__aside">
                        <p className="text">The Moon is next door, Mars is our nearest planetary neighbour, and Andromeda is the nearest large galaxy. Each opens into a detailed profile.</p>
                        <p className="spotlight__note">Near, mid and far: one object at each scale.</p>
                    </div>
                </div>

                <div className="discoveries">
                    {featuredObjects.map((object) => (
                        <ObjectCard
                            key={object.id}
                            object={object}
                            isFavourite={favouriteIds.includes(object.id)}
                            onToggleFavourite={onToggleFavourite}
                        />
                    ))}
                </div>

                <div className="spotlight__action">
                    <Link className="text-link" to="/explore">View all 26 objects <span className="arrow" aria-hidden="true">→</span></Link>
                </div>
            </div>
        </section>

        {/* 03 A universe to discover */}
        <section className="section" aria-labelledby="features-title">
            <div className="container">
                <div className="section-head">
                    <div>
                        <p className="section-label"><span className="section-label__num">03</span>A universe to discover</p>
                        <h2 id="features-title" className="section-title">Four ways into the cosmos.</h2>
                    </div>
                    <div className="section-head__aside">
                        <p className="text">Cosmic Explorer is designed around a simple loop: browse the collection, narrow it down, and go deep on the objects that catch your eye.</p>
                    </div>
                </div>

                <ul className="features" role="list">
                    <li className="feature">
                        <span className="icon icon--orbit" aria-hidden="true"></span>
                        <p className="feature__label">Discover</p>
                        <h3 className="feature__title">Browse celestial objects.</h3>
                        <p className="feature__text">Move through planets, moons, stars and galaxies in one consistent catalogue.</p>
                    </li>
                    <li className="feature">
                        <span className="icon icon--search" aria-hidden="true"></span>
                        <p className="feature__label">Search</p>
                        <h3 className="feature__title">Find objects quickly.</h3>
                        <p className="feature__text">Jump straight to the object you are looking for by name.</p>
                    </li>
                    <li className="feature">
                        <span className="icon icon--filter" aria-hidden="true"></span>
                        <p className="feature__label">Filter</p>
                        <h3 className="feature__title">Narrow down discoveries.</h3>
                        <p className="feature__text">Filter by type of object and sort by distance from Earth, name or size.</p>
                    </li>
                    <li className="feature">
                        <span className="icon icon--planet" aria-hidden="true"></span>
                        <p className="feature__label">Learn</p>
                        <h3 className="feature__title">Explore detailed information.</h3>
                        <p className="feature__text">Open any object for its key facts, structure and the science behind it.</p>
                    </li>
                </ul>
            </div>
        </section>

        {/* 04 Powered by NASA data */}
        <section className="section section--tight" aria-labelledby="nasa-title">
            <div className="container">
                <div className="nasa__panel">
                    <div className="nasa__intro">
                        <p className="section-label"><span className="section-label__num">04</span>Powered by NASA data</p>
                        <h2 id="nasa-title" className="section-title">Built on open NASA data.</h2>
                        <p className="text">Cosmic Explorer connects astronomy discovery with publicly available NASA data, drawn from NASA's Open API platform.</p>
                        <a className="text-link" href="https://api.nasa.gov/" rel="external">api.nasa.gov <span className="arrow" aria-hidden="true">↗</span></a>
                        <p className="nasa__note">NASA data refreshes on its own. Each live section shows when it last updated and whether you are seeing a cached copy.</p>
                    </div>

                    <ul className="tiles" role="list">
                        <li className="tile">
                            <p className="tile__index">01</p>
                            <h3 className="tile__title">APOD</h3>
                            <p className="tile__text">Astronomy Picture of the Day — a daily image of the universe with a short explanation.</p>
                        </li>
                        <li className="tile">
                            <p className="tile__index">02</p>
                            <h3 className="tile__title">Near Earth Objects</h3>
                            <p className="tile__text">Data on asteroids that pass close to Earth, including their approaches.</p>
                        </li>
                        <li className="tile">
                            <p className="tile__index">03</p>
                            <h3 className="tile__title">NASA Image Library</h3>
                            <p className="tile__text">Search space photography and mission imagery on the Explore page.</p>
                        </li>
                        <li className="tile">
                            <p className="tile__index">04</p>
                            <h3 className="tile__title">Space Weather</h3>
                            <p className="tile__text">Recent solar flare observations from NASA DONKI.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <NasaHighlights />

        {/* Closing call to action */}
        <section className="section cta" aria-labelledby="cta-title">
            <div className="container cta__inner">
                <p className="section-label">Start anywhere</p>
                <h2 id="cta-title" className="section-title">Pick a starting point.</h2>
                <p className="lede">Browse the catalogue, search NASA imagery, or explore the latest near-Earth asteroid approaches.</p>
                <div className="cta__actions">
                    <Link className="btn btn--primary btn--lg" to="/explore">Open the catalogue <span className="arrow" aria-hidden="true">→</span></Link>
                    <Link className="btn btn--ghost btn--lg" to="/milestones">View milestones</Link>
                </div>
            </div>
        </section>
    </main>
  );
}
