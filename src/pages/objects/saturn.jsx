import { Link } from 'react-router-dom';
import image0 from '../../../assets/images/saturn.png';

export default function SaturnPage() {
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
                            <li><span aria-current="page">Saturn</span></li>
                        </ol>
                    </nav>
                    <div className="object-hero__grid">
                        <div>
                            <p className="category">Planet</p>
                            <h1 id="page-title" className="object-title">Saturn</h1>
                            <p className="lede object-lede">Famous for its wide, bright rings, made mostly of water ice. It is light enough to float in water.</p>
                            <p className="object-index">Object 11 of 26</p>
                        </div>
                        <figure className="object-visual">
                            <span className="object-visual__orbit" aria-hidden="true"></span>
                            <img src={image0} alt="Saturn - a tan planet with prominent rings" width="733" height="783" />
                        </figure>
                    </div>
                </div>
            </header>

            <section className="facts-panel" aria-labelledby="facts-title">
                <div className="container">
                    <h2 id="facts-title" className="facts-panel__title">Key facts</h2>
                    <dl className="facts">
                        <div className="fact"><dt>Distance from Earth</dt><dd>1.43 billion km (avg)</dd></div>
                        <div className="fact"><dt>Radius</dt><dd>58,232 km</dd></div>
                        <div className="fact"><dt>Mass</dt><dd>5.68 × 10²⁶ kg (95× Earth)</dd></div>
                        <div className="fact"><dt>Surface gravity</dt><dd>10.44 m/s² (1.07× Earth)</dd></div>
                        <div className="fact"><dt>Orbital period</dt><dd>29.4 Earth years</dd></div>
                        <div className="fact"><dt>Day length</dt><dd>10.7 hours</dd></div>
                        <div className="fact"><dt>Moons</dt><dd>146+ confirmed</dd></div>
                        <div className="fact"><dt>Density</dt><dd>0.69 g/cm³</dd></div>
                    </dl>
                </div>
            </section>

            <div className="container object-body">
                <nav className="toc" aria-label="On this page">
                    <p className="toc__title">On this page</p>
                    <ol role="list">
                        <li><a href="#overview">Overview</a></li>
                        <li><a href="#rings">The Rings</a></li>
                        <li><a href="#moons">Notable Moons</a></li>
                        <li><a href="#exploration">Exploration</a></li>
                    </ol>
                </nav>

                <div className="prose">
                    <section id="overview">
                        <h2>Overview</h2>
                        <p>Saturn is the sixth planet from the Sun and the second-largest in the Solar System. A gas giant like Jupiter, it's famous for its spectacular ring system — the most extensive and visible of any planet. Saturn has the lowest density of all planets (0.69 g/cm³), less than water, meaning it would float if placed in a large enough ocean.</p>
                        <p>Like Jupiter, Saturn is mostly hydrogen and helium with a rapid 10.7-hour rotation that flattens it at the poles. It radiates more heat than it receives from the Sun, powered by helium rain sinking through its interior.</p>
                    </section>

                    <section id="rings">
                        <h2>The Rings</h2>
                        <p>Saturn's rings extend up to 282,000 km from the planet but are remarkably thin — typically just 10-100 meters thick. Composed of &gt;99% water ice (with traces of rock), they range from dust grains to house-sized chunks. The main rings (A, B, C) are separated by gaps like the <strong>Cassini Division</strong> (4,800 km wide), cleared by moon Mimas's gravity.</p>
                        <p>Shepherd moons (Pan, Daphnis, Atlas, Pandora, Prometheus) maintain sharp ring edges and create waves. The rings may be young (100-400 million years) — possibly debris from a shattered moon or comet — and are slowly raining material onto Saturn. They could vanish in ~100-300 million years.</p>
                    </section>

                    <section id="moons">
                        <h2>Notable Moons</h2>
                        <ul role="list">
                            <li><strong>Titan</strong> — Largest moon, thick nitrogen atmosphere, methane/ethane lakes, organic chemistry</li>
                            <li><strong>Enceladus</strong> — Icy crust, global subsurface ocean, geysers ejecting water into space (E-ring source)</li>
                            <li><strong>Mimas</strong> — "Death Star" crater (Herschel), orbits within Cassini Division</li>
                            <li><strong>Iapetus</strong> — Two-toned (bright/dark hemispheres), equatorial ridge</li>
                            <li><strong>Rhea, Dione, Tethys</strong> — Mid-sized icy moons with varied cratering and tectonics</li>
                        </ul>
                        <p>Titan and Enceladus are top targets in the search for extraterrestrial life.</p>
                    </section>

                    <section id="exploration">
                        <h2>Exploration</h2>
                        <p>Pioneer 11 (1979), Voyager 1/2 (1980-81), and <strong>Cassini-Huygens</strong> (2004-2017) revolutionized Saturn science. Cassini orbited 294 times; its <strong>Huygens probe</strong> landed on Titan (2005) — the only outer Solar System landing. Cassini's Grand Finale dove between rings and planet before burning up. <strong>Dragonfly</strong> (NASA, launch 2028) will fly a rotorcraft on Titan in the 2030s.</p>
                    </section>
                </div>
            </div>

                        <nav className="object-nav" aria-label="More objects">
                <div className="container object-nav__grid">
                    <Link className="object-nav__link object-nav__link--prev" to="/objects/ganymede">
                        <span className="object-nav__dir"><span className="arrow" aria-hidden="true">←</span> Previous object</span>
                        <span className="object-nav__name">Ganymede</span>
                    </Link>
                    <Link className="btn btn--ghost object-nav__back" to="/explore">Back to Explore</Link>
                    <Link className="object-nav__link object-nav__link--next" to="/objects/titan">
                        <span className="object-nav__dir">Next object <span className="arrow" aria-hidden="true">→</span></span>
                        <span className="object-nav__name">Titan</span>
                    </Link>
                </div>
            </nav>
        </article>
    </main>
  );
}
