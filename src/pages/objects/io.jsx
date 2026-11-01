import { Link } from 'react-router-dom';
import image0 from '../../../assets/images/io.svg';

export default function IoPage() {
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
                            <li><span aria-current="page">Io</span></li>
                        </ol>
                    </nav>
                    <div className="object-hero__grid">
                        <div>
                            <p className="category">Moon</p>
                            <h1 id="page-title" className="object-title">Io</h1>
                            <p className="lede object-lede">The most volcanically active world in the solar system, kept molten by the tidal grip of Jupiter and its sibling moons.</p>
                            <p className="object-index">Object 09 of 26</p>
                        </div>
                        <figure className="object-visual">
                            <span className="object-visual__orbit" aria-hidden="true"></span>
                            <img src={image0} width="800" height="800" alt="Illustration of Io, a yellow volcanic moon flecked with red against black space" />
                        </figure>
                    </div>
                </div>
            </header>

            <section className="facts-panel" aria-labelledby="facts-title">
                <div className="container">
                    <h2 id="facts-title" className="facts-panel__title">Key facts</h2>
                    <dl className="facts">
                        <div className="fact"><dt>Distance from Earth</dt><dd>780 million km (avg)</dd></div>
                        <div className="fact"><dt>Radius</dt><dd>1,822 km</dd></div>
                        <div className="fact"><dt>Surface gravity</dt><dd>1.80 m/s²</dd></div>
                        <div className="fact"><dt>Orbital period</dt><dd>1.77 days</dd></div>
                        <div className="fact"><dt>Surface temperature</dt><dd>-143°C average</dd></div>
                        <div className="fact"><dt>Active volcanoes</dt><dd>400+ confirmed</dd></div>
                        <div className="fact"><dt>Atmosphere</dt><dd>Sulfur dioxide (trace)</dd></div>
                        <div className="fact"><dt>Discovered</dt><dd>1610, Galileo Galilei</dd></div>
                    </dl>
                </div>
            </section>

            <div className="container object-body">
                <nav className="toc" aria-label="On this page">
                    <p className="toc__title">On this page</p>
                    <ol role="list">
                        <li><a href="#overview">Overview</a></li>
                        <li><a href="#tidal-heating">Tidal Heating</a></li>
                        <li><a href="#volcanism">Volcanism</a></li>
                        <li><a href="#exploration">Exploration</a></li>
                    </ol>
                </nav>

                <div className="prose">
                    <section id="overview">
                        <h2>Overview</h2>
                        <p>Io is slightly larger than our own Moon and orbits closest of the four Galilean satellites to Jupiter, completing a lap every 42 hours. It is tidally locked, so one face always points at the planet.</p>
                        <p>Its surface is painted in yellows, oranges, whites and reds by sulfur compounds, and it is free of impact craters — any crater is quickly buried by fresh volcanic material.</p>
                    </section>
                    <section id="tidal-heating">
                        <h2>Tidal Heating</h2>
                        <p>Io's orbit is kept slightly eccentric by a resonance with Europa and Ganymede: for every four orbits Io makes, Europa makes two and Ganymede one. Because the orbit is never a perfect circle, Jupiter's gravity flexes Io's body continuously.</p>
                        <p>That flexing generates enormous internal friction and heat — enough to melt the interior. Io radiates about twice as much heat as it receives from the Sun, and all of it is produced by tides.</p>
                    </section>
                    <section id="volcanism">
                        <h2>Volcanism</h2>
                        <p>Io has more than 400 confirmed volcanoes, some filling lava lakes hundreds of kilometres across. Loki Patera alone can outshine the rest of the moon in infrared. Eruptions loft sulfur dioxide plumes 300 kilometres above the surface.</p>
                        <p>The escaping gas forms a doughnut of charged particles around Jupiter and feeds the intense radiation belts that make the Jovian environment so hostile to spacecraft and electronics.</p>
                    </section>
                    <section id="exploration">
                        <h2>Exploration</h2>
                        <p>Voyager 1 made the discovery in 1979 when engineer Linda Morabito noticed a crescent bulging off the limb while enhancing an image — the first active volcano ever seen beyond Earth.</p>
                        <p>Galileo, Juno and ground-based telescopes have monitored Io ever since, but no spacecraft has orbited it. A dedicated Io Jupiter Observer remains a proposed way to watch the most violent world in the solar system up close.</p>
                    </section>
                </div>
            </div>
                        <nav className="object-nav" aria-label="More objects">
                <div className="container object-nav__grid">
                    <Link className="object-nav__link object-nav__link--prev" to="/objects/europa">
                        <span className="object-nav__dir"><span className="arrow" aria-hidden="true">←</span> Previous object</span>
                        <span className="object-nav__name">Europa</span>
                    </Link>
                    <Link className="btn btn--ghost object-nav__back" to="/explore">Back to Explore</Link>
                    <Link className="object-nav__link object-nav__link--next" to="/objects/ganymede">
                        <span className="object-nav__dir">Next object <span className="arrow" aria-hidden="true">→</span></span>
                        <span className="object-nav__name">Ganymede</span>
                    </Link>
                </div>
            </nav>
        </article>
    </main>
  );
}
