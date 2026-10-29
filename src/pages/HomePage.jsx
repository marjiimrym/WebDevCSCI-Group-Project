// AI-assisted - see AI-USAGE.md #4
import heroImage from '../../assets/images/openpage.jpg';
import sunImage from '../../assets/images/sun.jpg';
import moonImage from '../../assets/images/moon.jpg';
import marsImage from '../../assets/images/mars.webp';
import jupiterImage from '../../assets/images/jupiter.jpg';
import saturnImage from '../../assets/images/saturn.png';
import andromedaImage from '../../assets/images/andromeda.png';

export default function HomePage() {
  return (
    <main id="main" tabIndex={-1}>
        {/* Hero */}
        <section className="hero" aria-labelledby="hero-title">
            <img className="hero__media" src={heroImage} alt="" width="1200" height="675" />
            <div className="sky" aria-hidden="true"></div>
            <div className="orbits" aria-hidden="true"><span className="orbits__body"></span></div>

            <div className="container hero__inner">
                <p className="eyebrow">
                    <span>NASA Data <span className="eyebrow__sep" aria-hidden="true">•</span></span>
                    <span>Space Discovery <span className="eyebrow__sep" aria-hidden="true">•</span></span>
                    <span>Astronomy</span>
                </p>
                <h1 id="hero-title" className="hero__title">
                    <span className="hero__line">Explore the</span>
                    <span className="hero__line hero__line--accent">Universe.</span>
                </h1>
                <p className="lede hero__lede">Cosmic Explorer is your guide to the night sky. Discover planets, moons, stars, galaxies, nebulae and other astronomical objects, each with a detailed profile of the facts that define it.</p>
                <div className="hero__actions">
                    <a className="btn btn--primary btn--lg" href="pages/explore.html">Launch Explorer <span className="arrow" aria-hidden="true">→</span></a>
                    <a className="btn btn--ghost btn--lg" href="#discover">Discover More</a>
                </div>
            </div>

            <div className="scroll-cue" aria-hidden="true">
                <span>Scroll to explore</span>
                <span className="scroll-cue__line"></span>
            </div>
        </section>

        {/* 01 Explore the cosmos */}
        <section id="discover" className="section" aria-labelledby="intro-title">
            <div className="container intro">
                <div>
                    <p className="section-label"><span className="section-label__num">01</span>Explore the cosmos</p>
                    <h2 id="intro-title" className="section-title">A field guide to the universe, built for the web.</h2>
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
                        <h2 id="featured-title" className="section-title">From our nearest neighbour to the nearest large galaxy.</h2>
                    </div>
                    <div className="section-head__aside">
                        <p className="text">Twenty-six objects to explore — planets, moons, stars, galaxies and nebulae, from the Moon next door to a galaxy 23 million light-years away. Six are featured below; each opens into its own detailed page.</p>
                        <a className="text-link" href="pages/explore.html">View all objects <span className="arrow" aria-hidden="true">→</span></a>
                    </div>
                </div>

                <div className="discoveries">
                    <article className="card card--feature type-star">
                        <div className="card__media">
                            <img src={sunImage} alt="" width="733" height="783" loading="lazy" />
                        </div>
                        <div className="card__body">
                            <p className="category">Star</p>
                            <h3 className="card__title"><a className="card__link" href="pages/thesun.html">The Sun</a></h3>
                            <p className="card__text">The star at the centre of our solar system. It holds 99.8 percent of all the mass in it.</p>
                            <span className="card__cta" aria-hidden="true">Explore <span className="arrow">→</span></span>
                        </div>
                    </article>

                    <article className="card card--feature type-moon">
                        <div className="card__media">
                            <img src={moonImage} alt="" width="733" height="783" loading="lazy" />
                        </div>
                        <div className="card__body">
                            <p className="category">Moon</p>
                            <h3 className="card__title"><a className="card__link" href="pages/moon.html">The Moon</a></h3>
                            <p className="card__text">Earth's only natural satellite. Its pull drives our ocean tides, and its far side always faces away from us.</p>
                            <span className="card__cta" aria-hidden="true">Explore <span className="arrow">→</span></span>
                        </div>
                    </article>

                    <article className="card type-planet">
                        <div className="card__media">
                            <img src={marsImage} alt="" width="733" height="783" loading="lazy" />
                        </div>
                        <div className="card__body">
                            <p className="category">Planet</p>
                            <h3 className="card__title"><a className="card__link" href="pages/mars.html">Mars</a></h3>
                            <p className="card__text">A cold, dusty desert world with the tallest volcano in the solar system and two tiny moons.</p>
                            <span className="card__cta" aria-hidden="true">Explore <span className="arrow">→</span></span>
                        </div>
                    </article>

                    <article className="card type-planet">
                        <div className="card__media">
                            <img src={jupiterImage} alt="" width="733" height="783" loading="lazy" />
                        </div>
                        <div className="card__body">
                            <p className="category">Planet</p>
                            <h3 className="card__title"><a className="card__link" href="pages/jupiter.html">Jupiter</a></h3>
                            <p className="card__text">The largest planet, a banded gas giant with a storm wider than Earth that has raged for centuries.</p>
                            <span className="card__cta" aria-hidden="true">Explore <span className="arrow">→</span></span>
                        </div>
                    </article>

                    <article className="card type-planet">
                        <div className="card__media">
                            <img src={saturnImage} alt="" width="733" height="783" loading="lazy" />
                        </div>
                        <div className="card__body">
                            <p className="category">Planet</p>
                            <h3 className="card__title"><a className="card__link" href="pages/saturn.html">Saturn</a></h3>
                            <p className="card__text">Famous for its wide, bright rings, made mostly of water ice. It is light enough to float in water.</p>
                            <span className="card__cta" aria-hidden="true">Explore <span className="arrow">→</span></span>
                        </div>
                    </article>

                    <article className="card card--wide type-galaxy">
                        <div className="card__media">
                            <img src={andromedaImage} alt="" width="733" height="783" loading="lazy" />
                        </div>
                        <div className="card__body">
                            <p className="category">Galaxy</p>
                            <h3 className="card__title"><a className="card__link" href="pages/galaxy.html">Andromeda Galaxy</a></h3>
                            <p className="card__text">The nearest large galaxy to ours, home to roughly a trillion stars — and on a slow collision course with the Milky Way.</p>
                            <span className="card__cta" aria-hidden="true">Explore <span className="arrow">→</span></span>
                        </div>
                    </article>
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
                        <p className="nasa__note">Endpoints are being evaluated. Live data integration is planned for Milestone 3.</p>
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
                            <h3 className="tile__title">Mars Rover Photos</h3>
                            <p className="tile__text">Imagery returned from the surface of Mars by NASA's rovers.</p>
                        </li>
                        <li className="tile">
                            <p className="tile__index">04</p>
                            <h3 className="tile__title">Earth Imagery</h3>
                            <p className="tile__text">Satellite imagery of our home planet, seen from orbit.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        {/* Closing call to action */}
        <section className="section cta" aria-labelledby="cta-title">
            <div className="container cta__inner">
                <p className="section-label">Ready when you are</p>
                <h2 id="cta-title" className="section-title">Ready to explore?</h2>
                <p className="lede">Browse the prototype catalogue and open any object for its full profile. Live NASA data integration is planned for Milestone 3.</p>
                <div className="cta__actions">
                    <a className="btn btn--primary btn--lg" href="pages/explore.html">Launch Explorer <span className="arrow" aria-hidden="true">→</span></a>
                    <a className="btn btn--ghost btn--lg" href="pages/milestones.html">View milestones</a>
                </div>
            </div>
        </section>
    </main>
  );
}
