import { Link } from 'react-router-dom';
import image0 from '../../../assets/images/sun.jpg';

export default function ThesunPage() {
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
                            <li><span aria-current="page">The Sun</span></li>
                        </ol>
                    </nav>
                    <div className="object-hero__grid">
                        <div>
                            <p className="category">Star</p>
                            <h1 id="page-title" className="object-title">The Sun</h1>
                            <p className="lede object-lede">The star at the centre of our solar system. It holds 99.8 percent of all the mass in it.</p>
                            <p className="object-index">Object 05 of 26</p>
                        </div>
                        <figure className="object-visual">
                            <span className="object-visual__orbit" aria-hidden="true"></span>
                            <img src={image0} alt="The Sun - a bright yellow star with solar prominences" width="733" height="783" />
                        </figure>
                    </div>
                </div>
            </header>

            <section className="facts-panel" aria-labelledby="facts-title">
                <div className="container">
                    <h2 id="facts-title" className="facts-panel__title">Key facts</h2>
                    <dl className="facts">
                        <div className="fact"><dt>Distance from Earth</dt><dd>150 million km (1 AU)</dd></div>
                        <div className="fact"><dt>Radius</dt><dd>696,340 km</dd></div>
                        <div className="fact"><dt>Mass</dt><dd>1.99 × 10³⁰ kg</dd></div>
                        <div className="fact"><dt>Surface gravity</dt><dd>274 m/s² (28× Earth)</dd></div>
                        <div className="fact"><dt>Surface temperature</dt><dd>5,500°C (photosphere)</dd></div>
                        <div className="fact"><dt>Core temperature</dt><dd>~15 million °C</dd></div>
                        <div className="fact"><dt>Spectral type</dt><dd>G2V</dd></div>
                        <div className="fact"><dt>Age</dt><dd>~4.6 billion years</dd></div>
                    </dl>
                </div>
            </section>

            <div className="container object-body">
                <nav className="toc" aria-label="On this page">
                    <p className="toc__title">On this page</p>
                    <ol role="list">
                        <li><a href="#overview">Overview</a></li>
                        <li><a href="#structure">Structure &amp; Layers</a></li>
                        <li><a href="#activity">Solar Activity</a></li>
                        <li><a href="#future">Future Evolution</a></li>
                    </ol>
                </nav>

                <div className="prose">
                    <section id="overview">
                        <h2>Overview</h2>
                        <p>The Sun is a G-type main-sequence star (G2V) at the center of our Solar System. It contains 99.86% of the system's mass and its gravity holds everything in orbit. The Sun is about 4.6 billion years old and roughly halfway through its main-sequence lifetime. It converts hydrogen into helium through nuclear fusion in its core, releasing enormous energy.</p>
                        <p>Every second, the Sun fuses about 600 million tons of hydrogen, releasing energy equivalent to billions of nuclear weapons. This energy radiates outward, taking thousands of years to reach the surface, then 8 minutes to reach Earth.</p>
                    </section>

                    <section id="structure">
                        <h2>Structure &amp; Layers</h2>
                        <p>The Sun's interior has distinct layers: the <strong>core</strong> (fusion zone, ~25% of radius), the <strong>radiative zone</strong> (energy moves by radiation), and the <strong>convective zone</strong> (energy moves by rising hot plasma). The visible surface is the <strong>photosphere</strong> (where light escapes).</p>
                        <p>Above the photosphere lie the <strong>chromosphere</strong> (reddish, seen during eclipses) and the <strong>corona</strong> (million-degree outer atmosphere, source of solar wind). The corona's extreme heat remains a scientific mystery — magnetic fields likely play a key role.</p>
                    </section>

                    <section id="activity">
                        <h2>Solar Activity</h2>
                        <p>The Sun follows an ~11-year <strong>solar cycle</strong> of magnetic activity. At solar maximum: numerous <strong>sunspots</strong> (cooler magnetic regions), <strong>solar flares</strong> (sudden energy releases), and <strong>coronal mass ejections</strong> (CMEs — massive plasma eruptions). These events drive <strong>space weather</strong>, affecting satellites, power grids, and creating auroras.</p>
                        <p>The solar wind — a constant stream of charged particles — shapes planetary magnetospheres and blows comet tails. Earth's magnetic field protects us from most effects.</p>
                    </section>

                    <section id="future">
                        <h2>Future Evolution</h2>
                        <p>In ~5 billion years, the Sun will exhaust its core hydrogen and expand into a <strong>red giant</strong>, potentially engulfing Mercury, Venus, and possibly Earth. It will then shed its outer layers as a <strong>planetary nebula</strong>, leaving a <strong>white dwarf</strong> — a dense, Earth-sized remnant that will cool over trillions of years.</p>
                    </section>
                </div>
            </div>

                        <nav className="object-nav" aria-label="More objects">
                <div className="container object-nav__grid">
                    <Link className="object-nav__link object-nav__link--prev" to="/objects/mercury">
                        <span className="object-nav__dir"><span className="arrow" aria-hidden="true">←</span> Previous object</span>
                        <span className="object-nav__name">Mercury</span>
                    </Link>
                    <Link className="btn btn--ghost object-nav__back" to="/explore">Back to Explore</Link>
                    <Link className="object-nav__link object-nav__link--next" to="/objects/mars">
                        <span className="object-nav__dir">Next object <span className="arrow" aria-hidden="true">→</span></span>
                        <span className="object-nav__name">Mars</span>
                    </Link>
                </div>
            </nav>
        </article>
    </main>
  );
}
