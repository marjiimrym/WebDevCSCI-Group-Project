import { Link } from 'react-router-dom';
import image0 from '../../../assets/images/earth.svg';

export default function EarthPage() {
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
                            <li><span aria-current="page">Earth</span></li>
                        </ol>
                    </nav>
                    <div className="object-hero__grid">
                        <div>
                            <p className="category">Planet</p>
                            <h1 id="page-title" className="object-title">Earth</h1>
                            <p className="lede object-lede">The only world known to harbour life, with liquid water oceans covering 71 percent of its surface and a magnetic field that shields it.</p>
                            <p className="object-index">Object 01 of 26</p>
                        </div>
                        <figure className="object-visual">
                            <span className="object-visual__orbit" aria-hidden="true"></span>
                            <img src={image0} width="800" height="800" alt="Illustration of Earth, a blue and white marble lit from the left against black space" />
                        </figure>
                    </div>
                </div>
            </header>

            <section className="facts-panel" aria-labelledby="facts-title">
                <div className="container">
                    <h2 id="facts-title" className="facts-panel__title">Key facts</h2>
                    <dl className="facts">
                        <div className="fact"><dt>Distance from Earth</dt><dd>0 km</dd></div>
                        <div className="fact"><dt>Radius</dt><dd>6,371 km</dd></div>
                        <div className="fact"><dt>Mass</dt><dd>5.97 × 10²⁴ kg</dd></div>
                        <div className="fact"><dt>Surface gravity</dt><dd>9.81 m/s²</dd></div>
                        <div className="fact"><dt>Orbital period</dt><dd>365.25 days</dd></div>
                        <div className="fact"><dt>Surface temperature</dt><dd>-89°C to 57°C</dd></div>
                        <div className="fact"><dt>Atmosphere</dt><dd>78% nitrogen, 21% oxygen</dd></div>
                        <div className="fact"><dt>Moons</dt><dd>1 (The Moon)</dd></div>
                    </dl>
                </div>
            </section>

            <div className="container object-body">
                <nav className="toc" aria-label="On this page">
                    <p className="toc__title">On this page</p>
                    <ol role="list">
                        <li><a href="#overview">Overview</a></li>
                        <li><a href="#atmosphere-climate">Atmosphere &amp; Climate</a></li>
                        <li><a href="#oceans-life">Oceans &amp; Life</a></li>
                        <li><a href="#a-dynamic-world">A Dynamic World</a></li>
                    </ol>
                </nav>

                <div className="prose">
                    <section id="overview">
                        <h2>Overview</h2>
                        <p>Earth is the third planet from the Sun and the only object confirmed to harbour life. It formed about 4.54 billion years ago from the dust and gas of the young solar system, and it has been geologically active ever since — a planet that continually recycles its own crust rather than preserving it.</p>
                        <p>Roughly 71 percent of the surface is covered by liquid water, a feature no other world in the solar system shares. Earth sits inside the Sun's habitable zone, where pressures and temperatures allow water to exist as solid, liquid and gas at once — the balance that made its biosphere possible.</p>
                    </section>
                    <section id="atmosphere-climate">
                        <h2>Atmosphere &amp; Climate</h2>
                        <p>The atmosphere is 78 percent nitrogen and 21 percent oxygen, with trace argon and carbon dioxide. Oxygen is itself a biological product: photosynthetic organisms transformed the atmosphere over billions of years. An ozone layer in the stratosphere absorbs most incoming ultraviolet radiation.</p>
                        <p>A natural greenhouse effect keeps the average surface temperature near 15°C; without it the planet would sit around -18°C. Circulation between equator and poles drives weather, while the jet stream steers storm systems from west to east through the mid-latitudes.</p>
                    </section>
                    <section id="oceans-life">
                        <h2>Oceans &amp; Life</h2>
                        <p>The oceans hold 97 percent of Earth's water and reach 10,935 metres deep in the Challenger Deep of the Mariana Trench. Hydrothermal vents on the seafloor support ecosystems that run on chemical energy rather than sunlight, showing that life does not require the surface at all.</p>
                        <p>Life spans the whole system, from microbial mats in Antarctic ice to organisms drifting in the stratosphere. That range is what makes Earth the reference point in the search for life elsewhere.</p>
                    </section>
                    <section id="a-dynamic-world">
                        <h2>A Dynamic World</h2>
                        <p>Earth's outer shell is divided into tectonic plates that collide, split apart and slide past one another, building mountains, opening ocean basins and venting carbon dioxide through volcanoes. The same cycle regulates the climate over millions of years.</p>
                        <p>A liquid iron outer core generates a global magnetic field that deflects the solar wind, and an axial tilt of 23.4 degrees produces the seasons. The Moon stabilises that tilt, keeping climate swings far milder than they would otherwise be.</p>
                    </section>
                </div>
            </div>
                        <nav className="object-nav" aria-label="More objects">
                <div className="container object-nav__grid">
                    <Link className="object-nav__link object-nav__link--prev" to="/objects/whirlpool">
                        <span className="object-nav__dir"><span className="arrow" aria-hidden="true">←</span> Previous object</span>
                        <span className="object-nav__name">Whirlpool Galaxy</span>
                    </Link>
                    <Link className="btn btn--ghost object-nav__back" to="/explore">Back to Explore</Link>
                    <Link className="object-nav__link object-nav__link--next" to="/objects/moon">
                        <span className="object-nav__dir">Next object <span className="arrow" aria-hidden="true">→</span></span>
                        <span className="object-nav__name">The Moon</span>
                    </Link>
                </div>
            </nav>
        </article>
    </main>
  );
}
