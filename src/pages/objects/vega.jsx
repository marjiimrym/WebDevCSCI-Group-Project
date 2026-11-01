import { Link } from 'react-router-dom';
import image0 from '../../../assets/images/vega.svg';

export default function VegaPage() {
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
                            <li><span aria-current="page">Vega</span></li>
                        </ol>
                    </nav>
                    <div className="object-hero__grid">
                        <div>
                            <p className="category">Star</p>
                            <h1 id="page-title" className="object-title">Vega</h1>
                            <p className="lede object-lede">The fifth-brightest star in the sky and a calibration standard for astronomers, 25 light-years away in Lyra.</p>
                            <p className="object-index">Object 18 of 26</p>
                        </div>
                        <figure className="object-visual">
                            <span className="object-visual__orbit" aria-hidden="true"></span>
                            <img src={image0} width="800" height="800" alt="Illustration of Vega, a bright blue-white star with a soft halo against black space" />
                        </figure>
                    </div>
                </div>
            </header>

            <section className="facts-panel" aria-labelledby="facts-title">
                <div className="container">
                    <h2 id="facts-title" className="facts-panel__title">Key facts</h2>
                    <dl className="facts">
                        <div className="fact"><dt>Distance</dt><dd>25 light-years</dd></div>
                        <div className="fact"><dt>Radius</dt><dd>2.36 × Sun</dd></div>
                        <div className="fact"><dt>Mass</dt><dd>2.1 × Sun</dd></div>
                        <div className="fact"><dt>Spectral type</dt><dd>A0V (main sequence)</dd></div>
                        <div className="fact"><dt>Surface temperature</dt><dd>9,602 K</dd></div>
                        <div className="fact"><dt>Luminosity</dt><dd>40 × Sun</dd></div>
                        <div className="fact"><dt>Age</dt><dd>~455 million years</dd></div>
                        <div className="fact"><dt>Constellation</dt><dd>Lyra</dd></div>
                    </dl>
                </div>
            </section>

            <div className="container object-body">
                <nav className="toc" aria-label="On this page">
                    <p className="toc__title">On this page</p>
                    <ol role="list">
                        <li><a href="#overview">Overview</a></li>
                        <li><a href="#the-standard-candle">The Standard Candle</a></li>
                        <li><a href="#a-young-solar-system">A Young Solar System</a></li>
                        <li><a href="#fast-rotation-the-pole-star">Fast Rotation &amp; the Pole Star</a></li>
                    </ol>
                </nav>

                <div className="prose">
                    <section id="overview">
                        <h2>Overview</h2>
                        <p>Vega is the fifth-brightest star in the sky and the brightest in the constellation Lyra, the lyre. It sits 25 light-years away, burns at about 9,600 K, and radiates 40 times the Sun's energy.</p>
                        <p>It is a young star, roughly 455 million years old, and one of the nearest of its type. On summer nights in the Northern Hemisphere it hangs nearly overhead, the anchor of the small triangle that makes up Lyra.</p>
                    </section>
                    <section id="the-standard-candle">
                        <h2>The Standard Candle</h2>
                        <p>Vega is the reference point of stellar photometry. In 1955 it was defined as the zero point of the UBV magnitude system, meaning every star's brightness was originally measured against Vega.</p>
                        <p>That convention held until the system was recalibrated so that Vega's measured magnitude is exactly zero. For decades, the brightness of essentially every star you see was calibrated against this one point of light.</p>
                    </section>
                    <section id="a-young-solar-system">
                        <h2>A Young Solar System</h2>
                        <p>In 1984 the Infrared Astronomical Satellite detected more infrared radiation coming from Vega than a bare star should produce. The excess turned out to be a disk of dust — the first debris disk ever found around a main-sequence star.</p>
                        <p>Dust that cold should be blown away or clumped into planets within a few million years, so Vega's disk implies it is continually replenished, likely by collisions between unseen bodies. It was the first strong hint that other stars have planetary systems, a full decade before the first exoplanet was confirmed.</p>
                    </section>
                    <section id="fast-rotation-the-pole-star">
                        <h2>Fast Rotation &amp; the Pole Star</h2>
                        <p>Vega spins at 92 percent of the speed at which it would fly apart, with an equatorial velocity of about 24.6 km/s against 18 km/s at the poles. The centrifugal force bulges it into an oblate shape and makes the poles hotter and brighter than the equator.</p>
                        <p>Its rotation axis points close to the Sun, which is why Vega was the pole star around 12,000 BC and will be again around 13,700 AD as Earth's axial precession slowly traces a circle among the stars.</p>
                    </section>
                </div>
            </div>
                        <nav className="object-nav" aria-label="More objects">
                <div className="container object-nav__grid">
                    <Link className="object-nav__link object-nav__link--prev" to="/objects/sirius">
                        <span className="object-nav__dir"><span className="arrow" aria-hidden="true">←</span> Previous object</span>
                        <span className="object-nav__name">Sirius</span>
                    </Link>
                    <Link className="btn btn--ghost object-nav__back" to="/explore">Back to Explore</Link>
                    <Link className="object-nav__link object-nav__link--next" to="/objects/betelgeuse">
                        <span className="object-nav__dir">Next object <span className="arrow" aria-hidden="true">→</span></span>
                        <span className="object-nav__name">Betelgeuse</span>
                    </Link>
                </div>
            </nav>
        </article>
    </main>
  );
}
