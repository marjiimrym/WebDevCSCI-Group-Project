import { Link } from 'react-router-dom';
import image0 from '../../../assets/images/uranus.svg';

export default function UranusPage() {
  return (
    <main id="main" tabIndex={-1}>
        <article className="object type-planet" aria-labelledby="page-title">
            <header className="object-hero">
                <div className="sky" aria-hidden="true"></div>
                <div className="container">
                    <nav className="breadcrumb" aria-label="Breadcrumb">
                        <ol role="list">
                            <li><Link to="/explore">Explore</Link></li>
                            <li>Planets</li>
                            <li><span aria-current="page">Uranus</span></li>
                        </ol>
                    </nav>
                    <div className="object-hero__grid">
                        <div>
                            <p className="category">Planet</p>
                            <h1 id="page-title" className="object-title">Uranus</h1>
                            <p className="lede object-lede">An ice giant tipped onto its side, rolling around the Sun with a 98-degree tilt that gives it seasons lasting 21 years each.</p>
                            <p className="object-index">Object 13 of 26</p>
                        </div>
                        <figure className="object-visual">
                            <span className="object-visual__orbit" aria-hidden="true"></span>
                            <img src={image0} width="800" height="800" alt="Illustration of Uranus, a pale cyan globe with faint bands against black space" />
                        </figure>
                    </div>
                </div>
            </header>

            <section className="facts-panel" aria-labelledby="facts-title">
                <div className="container">
                    <h2 id="facts-title" className="facts-panel__title">Key facts</h2>
                    <dl className="facts">
                        <div className="fact"><dt>Distance from Earth</dt><dd>2.87 billion km</dd></div>
                        <div className="fact"><dt>Radius</dt><dd>25,362 km</dd></div>
                        <div className="fact"><dt>Mass</dt><dd>8.68 × 10²⁵ kg</dd></div>
                        <div className="fact"><dt>Surface gravity</dt><dd>8.69 m/s²</dd></div>
                        <div className="fact"><dt>Orbital period</dt><dd>84 years</dd></div>
                        <div className="fact"><dt>Axial tilt</dt><dd>97.8°</dd></div>
                        <div className="fact"><dt>Atmosphere</dt><dd>Hydrogen, helium, methane</dd></div>
                        <div className="fact"><dt>Known moons</dt><dd>28</dd></div>
                    </dl>
                </div>
            </section>

            <div className="container object-body">
                <nav className="toc" aria-label="On this page">
                    <p className="toc__title">On this page</p>
                    <ol role="list">
                        <li><a href="#overview">Overview</a></li>
                        <li><a href="#extreme-seasons">Extreme Seasons</a></li>
                        <li><a href="#rings-moons">Rings &amp; Moons</a></li>
                        <li><a href="#exploration">Exploration</a></li>
                    </ol>
                </nav>

                <div className="prose">
                    <section id="overview">
                        <h2>Overview</h2>
                        <p>Uranus is the seventh planet from the Sun and the first discovered with a telescope. William Herschel spotted it on 13 March 1781, doubling the known size of the solar system overnight. It is an ice giant: rather than a layer of gas around rock, most of its mass is a hot, dense fluid of water, ammonia and methane.</p>
                        <p>The planet appears a flat, featureless cyan because methane in its atmosphere absorbs red light. Beneath the calm exterior, models suggest temperatures reach thousands of degrees near a small rocky core.</p>
                    </section>
                    <section id="extreme-seasons">
                        <h2>Extreme Seasons</h2>
                        <p>Uranus is tipped on its side with an axial tilt of 97.8 degrees, so it orbits the Sun rolling rather than spinning upright. Each pole spends 42 years in continuous sunlight, then 42 years in darkness.</p>
                        <p>The cause is still debated; the leading explanation is a collision with an Earth-sized body early in the solar system's history. Because sunlight is weak at 19 astronomical units, the seasons are gentler than the geometry suggests, though the poles are surprisingly warmer than the equator at high altitudes.</p>
                    </section>
                    <section id="rings-moons">
                        <h2>Rings &amp; Moons</h2>
                        <p>Thirteen faint, dark rings circle the planet, discovered in 1977 when Uranus passed in front of a star and the rings blinked the starlight. Two more were found by the Hubble Space Telescope in 2005-2006.</p>
                        <p>Its 28 known moons are named after characters from Shakespeare and Alexander Pope rather than classical figures — Miranda, Ariel, Umbriel, Titania and Oberon are the five largest. Miranda, the innermost big moon, has one of the strangest surfaces known: a jumbled patchwork of huge canyons and ice terraces.</p>
                    </section>
                    <section id="exploration">
                        <h2>Exploration</h2>
                        <p>Voyager 2 made the only close visit, flying past Uranus on 24 January 1986. It found ten new moons, refined the ring count and measured the planet's bizarre magnetic field, which is offset from the centre and tilted 59 degrees from the rotation axis.</p>
                        <p>The 2022 US Planetary Science Decadal Survey ranked a Uranus Orbiter and Probe as the highest-priority new mission for the region, calling it the best way to understand how ice giants form and why they differ from Jupiter and Saturn.</p>
                    </section>
                </div>
            </div>
                        <nav className="object-nav" aria-label="More objects">
                <div className="container object-nav__grid">
                    <Link className="object-nav__link object-nav__link--prev" to="/objects/titan">
                        <span className="object-nav__dir"><span className="arrow" aria-hidden="true">←</span> Previous object</span>
                        <span className="object-nav__name">Titan</span>
                    </Link>
                    <Link className="btn btn--ghost object-nav__back" to="/explore">Back to Explore</Link>
                    <Link className="object-nav__link object-nav__link--next" to="/objects/neptune">
                        <span className="object-nav__dir">Next object <span className="arrow" aria-hidden="true">→</span></span>
                        <span className="object-nav__name">Neptune</span>
                    </Link>
                </div>
            </nav>
        </article>
    </main>
  );
}
