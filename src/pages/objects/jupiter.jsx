import { Link } from 'react-router-dom';
import image0 from '../../../assets/images/jupiter.png';

export default function JupiterPage() {
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
                            <li><span aria-current="page">Jupiter</span></li>
                        </ol>
                    </nav>
                    <div className="object-hero__grid">
                        <div>
                            <p className="category">Planet</p>
                            <h1 id="page-title" className="object-title">Jupiter</h1>
                            <p className="lede object-lede">The largest planet, a banded gas giant with a storm wider than Earth that has raged for centuries.</p>
                            <p className="object-index">Object 07 of 26</p>
                        </div>
                        <figure className="object-visual">
                            <span className="object-visual__orbit" aria-hidden="true"></span>
                            <img src={image0} alt="Jupiter - a banded gas giant with the Great Red Spot" width="733" height="783" />
                        </figure>
                    </div>
                </div>
            </header>

            <section className="facts-panel" aria-labelledby="facts-title">
                <div className="container">
                    <h2 id="facts-title" className="facts-panel__title">Key facts</h2>
                    <dl className="facts">
                        <div className="fact"><dt>Distance from Earth</dt><dd>778 million km (avg)</dd></div>
                        <div className="fact"><dt>Radius</dt><dd>69,911 km</dd></div>
                        <div className="fact"><dt>Mass</dt><dd>1.90 × 10²⁷ kg (318× Earth)</dd></div>
                        <div className="fact"><dt>Surface gravity</dt><dd>24.79 m/s² (2.5× Earth)</dd></div>
                        <div className="fact"><dt>Orbital period</dt><dd>11.86 Earth years</dd></div>
                        <div className="fact"><dt>Day length</dt><dd>9.9 hours</dd></div>
                        <div className="fact"><dt>Moons</dt><dd>95+ confirmed</dd></div>
                        <div className="fact"><dt>Composition</dt><dd>~90% H, ~10% He</dd></div>
                    </dl>
                </div>
            </section>

            <div className="container object-body">
                <nav className="toc" aria-label="On this page">
                    <p className="toc__title">On this page</p>
                    <ol role="list">
                        <li><a href="#overview">Overview</a></li>
                        <li><a href="#atmosphere">Atmosphere &amp; Great Red Spot</a></li>
                        <li><a href="#galilean-moons">Galilean Moons</a></li>
                        <li><a href="#exploration">Exploration</a></li>
                    </ol>
                </nav>

                <div className="prose">
                    <section id="overview">
                        <h2>Overview</h2>
                        <p>Jupiter is the fifth planet from the Sun and the largest in the Solar System — more than twice as massive as all other planets combined. A gas giant composed mostly of hydrogen and helium, it lacks a solid surface. Its rapid rotation (9.9 hours) creates powerful banded cloud patterns and the most intense magnetic field of any planet.</p>
                        <p>Jupiter acts as a "cosmic vacuum cleaner," its gravity deflecting or capturing comets and asteroids that might threaten the inner planets. It has a faint ring system and at least 95 known moons, including the four large Galilean moons.</p>
                    </section>

                    <section id="atmosphere">
                        <h2>Atmosphere &amp; Great Red Spot</h2>
                        <p>Jupiter's visible bands are ammonia clouds in different altitudes and temperatures. The <strong>Great Red Spot</strong> is an anticyclonic storm at least 350 years old, large enough to swallow Earth. It rotates counterclockwise every 6 days and has been shrinking over recent decades. Smaller storms appear and merge constantly.</p>
                        <p>Deep below the clouds, pressure and temperature rise dramatically. At ~20% of the radius, hydrogen becomes metallic — a fluid conductor generating the immense magnetic field. The core may be a dense mix of rock and metal under millions of atmospheres.</p>
                    </section>

                    <section id="galilean-moons">
                        <h2>Galilean Moons</h2>
                        <p>Jupiter's four largest moons (discovered by Galileo in 1610) are worlds in their own right:</p>
                        <ul role="list">
                            <li><strong>Io</strong> — Most volcanically active body in Solar System, sulfur-covered, tidally heated</li>
                            <li><strong>Europa</strong> — Smooth ice crust over a global subsurface ocean, prime candidate for life</li>
                            <li><strong>Ganymede</strong> — Largest moon in Solar System (bigger than Mercury), has own magnetic field</li>
                            <li><strong>Callisto</strong> — Heavily cratered, ancient surface, likely subsurface ocean</li>
                        </ul>
                        <p>All four are locked in orbital resonances (Io:Europa:Ganymede = 1:2:4) that drive tidal heating.</p>
                    </section>

                    <section id="exploration">
                        <h2>Exploration</h2>
                        <p>Pioneer 10/11 (1970s), Voyager 1/2 (1979), Galileo (1995-2003), and Juno (2016-present) have studied Jupiter. Juno's polar orbits reveal chaotic cyclones at the poles, a "fuzzy" core, and deep atmospheric dynamics. <strong>Europa Clipper</strong> (launch 2024) and <strong>JUICE</strong> (ESA, en route) will explore the icy moons in the 2030s.</p>
                    </section>
                </div>
            </div>

                        <nav className="object-nav" aria-label="More objects">
                <div className="container object-nav__grid">
                    <Link className="object-nav__link object-nav__link--prev" to="/objects/mars">
                        <span className="object-nav__dir"><span className="arrow" aria-hidden="true">←</span> Previous object</span>
                        <span className="object-nav__name">Mars</span>
                    </Link>
                    <Link className="btn btn--ghost object-nav__back" to="/explore">Back to Explore</Link>
                    <Link className="object-nav__link object-nav__link--next" to="/objects/europa">
                        <span className="object-nav__dir">Next object <span className="arrow" aria-hidden="true">→</span></span>
                        <span className="object-nav__name">Europa</span>
                    </Link>
                </div>
            </nav>
        </article>
    </main>
  );
}
