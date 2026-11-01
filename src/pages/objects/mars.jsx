import { Link } from 'react-router-dom';
import image0 from '../../../assets/images/mars.webp';

export default function MarsPage() {
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
                            <li><span aria-current="page">Mars</span></li>
                        </ol>
                    </nav>
                    <div className="object-hero__grid">
                        <div>
                            <p className="category">Planet</p>
                            <h1 id="page-title" className="object-title">Mars</h1>
                            <p className="lede object-lede">A cold, dusty desert world with the tallest volcano in the solar system and two tiny moons.</p>
                            <p className="object-index">Object 06 of 26</p>
                        </div>
                        <figure className="object-visual">
                            <span className="object-visual__orbit" aria-hidden="true"></span>
                            <img src={image0} alt="Mars - a reddish planet with polar ice caps" width="733" height="783" />
                        </figure>
                    </div>
                </div>
            </header>

            <section className="facts-panel" aria-labelledby="facts-title">
                <div className="container">
                    <h2 id="facts-title" className="facts-panel__title">Key facts</h2>
                    <dl className="facts">
                        <div className="fact"><dt>Distance from Earth</dt><dd>225 million km (avg)</dd></div>
                        <div className="fact"><dt>Radius</dt><dd>3,390 km</dd></div>
                        <div className="fact"><dt>Mass</dt><dd>6.42 × 10²³ kg</dd></div>
                        <div className="fact"><dt>Surface gravity</dt><dd>3.71 m/s² (38% of Earth)</dd></div>
                        <div className="fact"><dt>Orbital period</dt><dd>687 Earth days</dd></div>
                        <div className="fact"><dt>Day length</dt><dd>24.6 hours</dd></div>
                        <div className="fact"><dt>Moons</dt><dd>2 (Phobos, Deimos)</dd></div>
                        <div className="fact"><dt>Atmosphere</dt><dd>95% CO₂, thin</dd></div>
                    </dl>
                </div>
            </section>

            <div className="container object-body">
                <nav className="toc" aria-label="On this page">
                    <p className="toc__title">On this page</p>
                    <ol role="list">
                        <li><a href="#overview">Overview</a></li>
                        <li><a href="#geography">Geography &amp; Climate</a></li>
                        <li><a href="#exploration">Exploration</a></li>
                        <li><a href="#moons">Moons</a></li>
                    </ol>
                </nav>

                <div className="prose">
                    <section id="overview">
                        <h2>Overview</h2>
                        <p>Mars is the fourth planet from the Sun and the second-smallest in the Solar System. Known as the "Red Planet" due to iron oxide (rust) on its surface, Mars has a thin atmosphere composed mostly of carbon dioxide. It features the largest volcano (Olympus Mons), deepest canyon (Valles Marineris), and polar ice caps made of water and dry ice.</p>
                        <p>Mars has been a prime target for exploration due to its potential for past microbial life and future human settlement. Evidence suggests it once had liquid water on its surface billions of years ago.</p>
                    </section>

                    <section id="geography">
                        <h2>Geography &amp; Climate</h2>
                        <p>Mars is a frozen desert with an average temperature of -60°C. The thin atmosphere (0.6% of Earth's pressure) cannot retain heat well. The northern hemisphere is smoother with younger plains, while the southern hemisphere is heavily cratered and older. Olympus Mons stands 21 km high — nearly three times the height of Mount Everest. Valles Marineris stretches over 4,000 km long and up to 7 km deep.</p>
                        <p>Seasonal dust storms can engulf the entire planet. The polar caps grow and shrink with seasons, composed of water ice and frozen CO₂. Subsurface ice exists at mid-latitudes.</p>
                    </section>

                    <section id="exploration">
                        <h2>Exploration</h2>
                        <p>Mars is the most explored planet beyond Earth. NASA's <strong>Mariner 4</strong> (1965) returned the first close-up photos. The <strong>Viking landers</strong> (1976) conducted the first surface experiments. Since the 1990s, orbiters (Mars Global Surveyor, Mars Reconnaissance Orbiter, MAVEN) and rovers (Sojourner, Spirit, Opportunity, Curiosity, Perseverance) have revolutionized our understanding.</p>
                        <p>Current missions search for signs of ancient life, study climate history, and test technologies for human exploration (like MOXIE producing oxygen from CO₂). Sample return missions are planned for the 2030s.</p>
                    </section>

                    <section id="moons">
                        <h2>Moons</h2>
                        <p>Mars has two small, irregularly shaped moons: <strong>Phobos</strong> (22 km diameter) and <strong>Deimos</strong> (12 km). Both are likely captured asteroids. Phobos orbits just 6,000 km above Mars — closer than any other moon to its planet — and is gradually spiraling inward. In 30-50 million years, it may crash into Mars or break into a ring.</p>
                    </section>
                </div>
            </div>

                        <nav className="object-nav" aria-label="More objects">
                <div className="container object-nav__grid">
                    <Link className="object-nav__link object-nav__link--prev" to="/objects/sun">
                        <span className="object-nav__dir"><span className="arrow" aria-hidden="true">←</span> Previous object</span>
                        <span className="object-nav__name">The Sun</span>
                    </Link>
                    <Link className="btn btn--ghost object-nav__back" to="/explore">Back to Explore</Link>
                    <Link className="object-nav__link object-nav__link--next" to="/objects/jupiter">
                        <span className="object-nav__dir">Next object <span className="arrow" aria-hidden="true">→</span></span>
                        <span className="object-nav__name">Jupiter</span>
                    </Link>
                </div>
            </nav>
        </article>
    </main>
  );
}
