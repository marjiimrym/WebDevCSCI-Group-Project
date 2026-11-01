import { Link } from 'react-router-dom';
import image0 from '../../../assets/images/titan.svg';

export default function TitanPage() {
  return (
    <main id="main" tabIndex={-1}>
        <article className="object type-moon" aria-labelledby="page-title">
            <header className="object-hero">
                <div className="sky" aria-hidden="true"></div>
                <div className="container">
                    <nav className="breadcrumb" aria-label="Breadcrumb">
                        <ol role="list">
                            <li><Link to="/explore">Explore</Link></li>
                            <li>Moons</li>
                            <li><span aria-current="page">Titan</span></li>
                        </ol>
                    </nav>
                    <div className="object-hero__grid">
                        <div>
                            <p className="category">Moon</p>
                            <h1 id="page-title" className="object-title">Titan</h1>
                            <p className="lede object-lede">Saturn's largest moon and the only moon with a thick atmosphere, where rivers and lakes are filled with liquid methane.</p>
                            <p className="object-index">Object 12 of 26</p>
                        </div>
                        <figure className="object-visual">
                            <span className="object-visual__orbit" aria-hidden="true"></span>
                            <img src={image0} width="800" height="800" alt="Illustration of Titan, an orange-hazed moon against black space" />
                        </figure>
                    </div>
                </div>
            </header>

            <section className="facts-panel" aria-labelledby="facts-title">
                <div className="container">
                    <h2 id="facts-title" className="facts-panel__title">Key facts</h2>
                    <dl className="facts">
                        <div className="fact"><dt>Distance from Earth</dt><dd>1.43 billion km (avg)</dd></div>
                        <div className="fact"><dt>Radius</dt><dd>2,575 km (largest moon)</dd></div>
                        <div className="fact"><dt>Surface gravity</dt><dd>1.35 m/s²</dd></div>
                        <div className="fact"><dt>Orbital period</dt><dd>15.9 days</dd></div>
                        <div className="fact"><dt>Surface temperature</dt><dd>-179°C</dd></div>
                        <div className="fact"><dt>Atmosphere</dt><dd>94.2% nitrogen</dd></div>
                        <div className="fact"><dt>Surface liquids</dt><dd>Lakes of methane and ethane</dd></div>
                        <div className="fact"><dt>Discovered</dt><dd>1655, Christiaan Huygens</dd></div>
                    </dl>
                </div>
            </section>

            <div className="container object-body">
                <nav className="toc" aria-label="On this page">
                    <p className="toc__title">On this page</p>
                    <ol role="list">
                        <li><a href="#overview">Overview</a></li>
                        <li><a href="#a-methane-water-cycle">A Methane Water Cycle</a></li>
                        <li><a href="#exploration">Exploration</a></li>
                        <li><a href="#why-it-matters">Why It Matters</a></li>
                    </ol>
                </nav>

                <div className="prose">
                    <section id="overview">
                        <h2>Overview</h2>
                        <p>Titan is Saturn's largest moon and the second-largest in the solar system — bigger than the planet Mercury. It is the only moon with a thick atmosphere, dense enough to stand on the surface without a pressure suit, though the air would be unbreathable.</p>
                        <p>A permanent orange haze of organic particles hides the ground from view in visible light, which is why Titan stayed a mystery until spacecraft flew past with radar and infrared instruments.</p>
                    </section>
                    <section id="a-methane-water-cycle">
                        <h2>A Methane Water Cycle</h2>
                        <p>At -179°C, methane plays the role water plays on Earth. It evaporates, forms clouds, falls as rain, carves rivers and collects in lakes and seas near the north pole. Kraken Mare alone is larger than the Caspian Sea.</p>
                        <p>Beneath the water-ice crust, evidence points to a global liquid water ocean kept warm by tidal heating and radioactive decay — another possible habitat, sandwiched between two very different chemistries.</p>
                    </section>
                    <section id="exploration">
                        <h2>Exploration</h2>
                        <p>The Huygens probe landed on Titan on 14 January 2005, the most distant landing humans have ever achieved. It photographed river channels and shorelines during its descent. Cassini mapped 67 percent of the surface by radar over 127 close passes.</p>
                        <p>NASA's Dragonfly, a nuclear-powered rotorcraft, is planned to launch in 2028 and arrive around 2034 to fly between sites and sample the surface chemistry directly.</p>
                    </section>
                    <section id="why-it-matters">
                        <h2>Why It Matters</h2>
                        <p>Titan's atmosphere is rich in complex organic molecules — the same chemistry thought to have preceded life on early Earth, but frozen and preserved. It is a natural laboratory for prebiotic chemistry at planetary scale.</p>
                        <p>That combination of a warm interior ocean, an organic-rich surface and a stable energy source is why Titan is regarded as one of the most promising places in the solar system to look for life, or for the chemistry that comes just before it.</p>
                    </section>
                </div>
            </div>
                        <nav className="object-nav" aria-label="More objects">
                <div className="container object-nav__grid">
                    <Link className="object-nav__link object-nav__link--prev" to="/objects/saturn">
                        <span className="object-nav__dir"><span className="arrow" aria-hidden="true">←</span> Previous object</span>
                        <span className="object-nav__name">Saturn</span>
                    </Link>
                    <Link className="btn btn--ghost object-nav__back" to="/explore">Back to Explore</Link>
                    <Link className="object-nav__link object-nav__link--next" to="/objects/uranus">
                        <span className="object-nav__dir">Next object <span className="arrow" aria-hidden="true">→</span></span>
                        <span className="object-nav__name">Uranus</span>
                    </Link>
                </div>
            </nav>
        </article>
    </main>
  );
}
