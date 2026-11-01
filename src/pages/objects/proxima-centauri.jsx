import { Link } from 'react-router-dom';
import image0 from '../../../assets/images/proxima-centauri.svg';

export default function ProximaCentauriPage() {
  return (
    <main id="main" tabIndex={-1}>
        <article className="object type-star" aria-labelledby="page-title">
            <header className="object-hero">
                <div className="sky" aria-hidden="true"></div>
                <div className="container">
                    <nav className="breadcrumb" aria-label="Breadcrumb">
                        <ol role="list">
                            <li><Link to="/explore">Explore</Link></li>
                            <li>Stars</li>
                            <li><span aria-current="page">Proxima Centauri</span></li>
                        </ol>
                    </nav>
                    <div className="object-hero__grid">
                        <div>
                            <p className="category">Star</p>
                            <h1 id="page-title" className="object-title">Proxima Centauri</h1>
                            <p className="lede object-lede">The closest star to the Sun, a cool red dwarf with at least one Earth-sized planet in its habitable zone.</p>
                            <p className="object-index">Object 16 of 26</p>
                        </div>
                        <figure className="object-visual">
                            <span className="object-visual__orbit" aria-hidden="true"></span>
                            <img src={image0} width="800" height="800" alt="Illustration of Proxima Centauri, a small dim red star glowing against black space" />
                        </figure>
                    </div>
                </div>
            </header>

            <section className="facts-panel" aria-labelledby="facts-title">
                <div className="container">
                    <h2 id="facts-title" className="facts-panel__title">Key facts</h2>
                    <dl className="facts">
                        <div className="fact"><dt>Distance</dt><dd>4.24 light-years (closest star)</dd></div>
                        <div className="fact"><dt>Radius</dt><dd>0.15 × Sun</dd></div>
                        <div className="fact"><dt>Mass</dt><dd>0.12 × Sun</dd></div>
                        <div className="fact"><dt>Spectral type</dt><dd>M5.5Ve (red dwarf)</dd></div>
                        <div className="fact"><dt>Surface temperature</dt><dd>3,042 K</dd></div>
                        <div className="fact"><dt>Luminosity</dt><dd>0.0017 × Sun</dd></div>
                        <div className="fact"><dt>Known planets</dt><dd>Proxima b (plus candidate c)</dd></div>
                        <div className="fact"><dt>Age</dt><dd>~4.85 billion years</dd></div>
                    </dl>
                </div>
            </section>

            <div className="container object-body">
                <nav className="toc" aria-label="On this page">
                    <p className="toc__title">On this page</p>
                    <ol role="list">
                        <li><a href="#overview">Overview</a></li>
                        <li><a href="#the-alpha-centauri-system">The Alpha Centauri System</a></li>
                        <li><a href="#proxima-b">Proxima b</a></li>
                        <li><a href="#flares-exploration">Flares &amp; Exploration</a></li>
                    </ol>
                </nav>

                <div className="prose">
                    <section id="overview">
                        <h2>Overview</h2>
                        <p>Proxima Centauri is the closest star to the Sun, at 4.24 light-years — about 40 trillion kilometres. Despite being our nearest neighbour it is far too faint to see without a telescope, shining at magnitude 11 in the constellation Centaurus.</p>
                        <p>It is a red dwarf of spectral class M, with less than a seventh of the Sun's mass and a surface temperature of about 3,042 K. Red dwarfs are the most common stars in the galaxy, and because they burn fuel so slowly Proxima will outlive the Sun by trillions of years.</p>
                    </section>
                    <section id="the-alpha-centauri-system">
                        <h2>The Alpha Centauri System</h2>
                        <p>Proxima is gravitationally bound to the Alpha Centauri binary — a pair of sun-like and orange stars that are the third-brightest points in the night sky. From their perspective Proxima is a distant companion orbiting about 13,000 astronomical units away.</p>
                        <p>The three together form the nearest star system to our own. Alpha Centauri A and B would be easily visible to the naked eye from a planet around Proxima, hanging in the sky as an exceptionally bright double star.</p>
                    </section>
                    <section id="proxima-b">
                        <h2>Proxima b</h2>
                        <p>In 2016 astronomers announced Proxima b, a planet of at least 1.16 Earth masses orbiting within the star's habitable zone every 11.2 days. It is the nearest known exoplanet to Earth.</p>
                        <p>The planet is probably tidally locked, with one hemisphere in permanent day, and it receives about 65 percent of the light Earth gets. Whether it retained an atmosphere is unknown, and it is the single most studied target in the search for nearby habitable worlds.</p>
                    </section>
                    <section id="flares-exploration">
                        <h2>Flares &amp; Exploration</h2>
                        <p>Proxima is a flare star. It blasts out eruptions far larger than anything the Sun produces — including one in January 2011, the brightest ever recorded on Proxima, roughly ten times more energetic than the largest solar flare.</p>
                        <p>Such events could strip a planet's atmosphere over time. Even so, Proxima is the target of Breakthrough Starshot, a concept to push tiny light-driven sails to 20 percent of light speed, reaching the system in about 20 to 25 years.</p>
                    </section>
                </div>
            </div>
                        <nav className="object-nav" aria-label="More objects">
                <div className="container object-nav__grid">
                    <Link className="object-nav__link object-nav__link--prev" to="/objects/triton">
                        <span className="object-nav__dir"><span className="arrow" aria-hidden="true">←</span> Previous object</span>
                        <span className="object-nav__name">Triton</span>
                    </Link>
                    <Link className="btn btn--ghost object-nav__back" to="/explore">Back to Explore</Link>
                    <Link className="object-nav__link object-nav__link--next" to="/objects/sirius">
                        <span className="object-nav__dir">Next object <span className="arrow" aria-hidden="true">→</span></span>
                        <span className="object-nav__name">Sirius</span>
                    </Link>
                </div>
            </nav>
        </article>
    </main>
  );
}
