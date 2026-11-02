import { Link } from 'react-router-dom';
import image0 from '../../../assets/images/neptune.png';

export default function NeptunePage() {
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
                            <li><span aria-current="page">Neptune</span></li>
                        </ol>
                    </nav>
                    <div className="object-hero__grid">
                        <div>
                            <p className="category">Planet</p>
                            <h1 id="page-title" className="object-title">Neptune</h1>
                            <p className="lede object-lede">The farthest planet from the Sun, a deep-blue ice giant driven by the fastest winds measured on any planet.</p>
                            <p className="object-index">Object 14 of 26</p>
                        </div>
                        <figure className="object-visual">
                            <span className="object-visual__orbit" aria-hidden="true"></span>
                            <img src={image0} width="800" height="800" alt="Illustration of Neptune, a deep blue globe with faint white cloud streaks against black space" />
                        </figure>
                    </div>
                </div>
            </header>

            <section className="facts-panel" aria-labelledby="facts-title">
                <div className="container">
                    <h2 id="facts-title" className="facts-panel__title">Key facts</h2>
                    <dl className="facts">
                        <div className="fact"><dt>Distance from Earth</dt><dd>4.5 billion km</dd></div>
                        <div className="fact"><dt>Radius</dt><dd>24,622 km</dd></div>
                        <div className="fact"><dt>Mass</dt><dd>1.02 × 10²⁶ kg</dd></div>
                        <div className="fact"><dt>Surface gravity</dt><dd>11.15 m/s²</dd></div>
                        <div className="fact"><dt>Orbital period</dt><dd>165 years</dd></div>
                        <div className="fact"><dt>Wind speed</dt><dd>Up to 2,100 km/h</dd></div>
                        <div className="fact"><dt>Atmosphere</dt><dd>Hydrogen, helium, methane</dd></div>
                        <div className="fact"><dt>Known moons</dt><dd>16</dd></div>
                    </dl>
                </div>
            </section>

            <div className="container object-body">
                <nav className="toc" aria-label="On this page">
                    <p className="toc__title">On this page</p>
                    <ol role="list">
                        <li><a href="#overview">Overview</a></li>
                        <li><a href="#winds-weather">Winds &amp; Weather</a></li>
                        <li><a href="#triton-rings">Triton &amp; Rings</a></li>
                        <li><a href="#exploration">Exploration</a></li>
                    </ol>
                </nav>

                <div className="prose">
                    <section id="overview">
                        <h2>Overview</h2>
                        <p>Neptune is the eighth and farthest planet from the Sun, orbiting at 30 astronomical units. It takes 165 years to complete a single circuit, so it has completed only one full orbit since its discovery in 1846.</p>
                        <p>It was the first planet found by prediction rather than observation. Urbain Le Verrier calculated where an unseen world must be disturbing Uranus's orbit; Johann Galle pointed a telescope at that spot the very next night and found Neptune within a degree of the prediction.</p>
                    </section>
                    <section id="winds-weather">
                        <h2>Winds &amp; Weather</h2>
                        <p>Neptune has the fastest winds measured on any planet, reaching about 2,100 kilometres per hour — supersonic relative to the local speed of sound. How it generates so much storm power so far from the Sun is still not well understood.</p>
                        <p>Despite receiving 900 times less sunlight than Earth, Neptune radiates 2.6 times the energy it receives, suggesting heat left over from its formation is still escaping. Voyager 2 photographed the Great Dark Spot, an Earth-sized storm, in 1989; when Hubble looked a few years later it had gone, and new storms had appeared elsewhere.</p>
                    </section>
                    <section id="triton-rings">
                        <h2>Triton &amp; Rings</h2>
                        <p>Neptune has 16 known moons, dominated by Triton, which orbits backwards — a sign it was captured from the Kuiper Belt rather than forming in place. Five faint rings encircle the planet, some gathered into clumps nicknamed 'arcs'.</p>
                        <p>Triton's retrograde orbit is slowly draining its energy. In roughly 3.6 billion years the moon will spiral inside the Roche limit, where Neptune's tides will tear it apart into a temporary ring system.</p>
                    </section>
                    <section id="exploration">
                        <h2>Exploration</h2>
                        <p>Voyager 2 flew past Neptune on 25 August 1989, the last planet visited on the grand tour of the outer solar system. It discovered six moons and the ring arcs, and measured the magnetic field in a single eight-hour window.</p>
                        <p>No spacecraft has returned since. A proposed Neptune Orbiter would study Triton's potential subsurface ocean, the ring system and the planet's internal heat in detail no flyby can match.</p>
                    </section>
                </div>
            </div>
                        <nav className="object-nav" aria-label="More objects">
                <div className="container object-nav__grid">
                    <Link className="object-nav__link object-nav__link--prev" to="/objects/uranus">
                        <span className="object-nav__dir"><span className="arrow" aria-hidden="true">←</span> Previous object</span>
                        <span className="object-nav__name">Uranus</span>
                    </Link>
                    <Link className="btn btn--ghost object-nav__back" to="/explore">Back to Explore</Link>
                    <Link className="object-nav__link object-nav__link--next" to="/objects/triton">
                        <span className="object-nav__dir">Next object <span className="arrow" aria-hidden="true">→</span></span>
                        <span className="object-nav__name">Triton</span>
                    </Link>
                </div>
            </nav>
        </article>
    </main>
  );
}
