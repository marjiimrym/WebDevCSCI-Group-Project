import { Link } from 'react-router-dom';
import image0 from '../../../assets/images/venus.svg';

export default function VenusPage() {
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
                            <li><span aria-current="page">Venus</span></li>
                        </ol>
                    </nav>
                    <div className="object-hero__grid">
                        <div>
                            <p className="category">Planet</p>
                            <h1 id="page-title" className="object-title">Venus</h1>
                            <p className="lede object-lede">Earth's near-twin in size, wrapped in a thick carbon dioxide atmosphere that traps heat until its surface glows at 464°C.</p>
                            <p className="object-index">Object 03 of 26</p>
                        </div>
                        <figure className="object-visual">
                            <span className="object-visual__orbit" aria-hidden="true"></span>
                            <img src={image0} width="800" height="800" alt="Illustration of Venus, a smooth yellow-white globe of thick cloud against black space" />
                        </figure>
                    </div>
                </div>
            </header>

            <section className="facts-panel" aria-labelledby="facts-title">
                <div className="container">
                    <h2 id="facts-title" className="facts-panel__title">Key facts</h2>
                    <dl className="facts">
                        <div className="fact"><dt>Distance from Earth</dt><dd>38 million km (closest)</dd></div>
                        <div className="fact"><dt>Radius</dt><dd>6,052 km</dd></div>
                        <div className="fact"><dt>Mass</dt><dd>4.87 × 10²⁴ kg</dd></div>
                        <div className="fact"><dt>Surface gravity</dt><dd>8.87 m/s² (90% of Earth)</dd></div>
                        <div className="fact"><dt>Orbital period</dt><dd>225 days</dd></div>
                        <div className="fact"><dt>Surface temperature</dt><dd>464°C (average)</dd></div>
                        <div className="fact"><dt>Atmosphere</dt><dd>96.5% carbon dioxide</dd></div>
                        <div className="fact"><dt>Rotation</dt><dd>243 days (retrograde)</dd></div>
                    </dl>
                </div>
            </section>

            <div className="container object-body">
                <nav className="toc" aria-label="On this page">
                    <p className="toc__title">On this page</p>
                    <ol role="list">
                        <li><a href="#overview">Overview</a></li>
                        <li><a href="#surface-interior">Surface &amp; Interior</a></li>
                        <li><a href="#atmosphere">Atmosphere</a></li>
                        <li><a href="#exploration">Exploration</a></li>
                    </ol>
                </nav>

                <div className="prose">
                    <section id="overview">
                        <h2>Overview</h2>
                        <p>Venus is the second planet from the Sun and Earth's closest twin by size and mass, which is why it earned the nickname 'Earth's twin'. The resemblance ends at the surface. Venus is the hottest planet in the solar system — hotter even than Mercury — because its atmosphere traps heat in a runaway greenhouse effect.</p>
                        <p>It rotates backwards compared with most planets, and so slowly that a single Venusian day lasts 243 Earth days, longer than its 225-day year. From the surface, the Sun would rise in the west once every 117 Earth days.</p>
                    </section>
                    <section id="surface-interior">
                        <h2>Surface &amp; Interior</h2>
                        <p>Radar mapping by NASA's Magellan spacecraft revealed a world of volcanic plains, shield volcanoes and mountain ridges, including Maat Mons at nearly 8 kilometres high. There are no ocean basins and apparently no plate tectonics — the crust is a single unbroken shell.</p>
                        <p>Surface pressure is about 92 times Earth's, the same crush a diver feels 900 metres underwater. Landing probes have recorded a landscape of smooth, fractured basalt bathed in a dim orange light.</p>
                    </section>
                    <section id="atmosphere">
                        <h2>Atmosphere</h2>
                        <p>The atmosphere is 96.5 percent carbon dioxide with clouds of sulfuric acid droplets. Those clouds reflect about 76 percent of incoming sunlight, which is why Venus is so bright in our sky, yet very little of that light ever reaches the ground.</p>
                        <p>At cloud level the winds race around the planet in about four days, far faster than the planet itself rotates — a phenomenon called super-rotation that still puzzles atmospheric scientists.</p>
                    </section>
                    <section id="exploration">
                        <h2>Exploration</h2>
                        <p>Mariner 2 made the first successful planetary flyby in 1962. The Soviet Venera programme achieved the first soft landing on another planet in 1970, and Venera 13 survived on the surface for 127 minutes in 1982.</p>
                        <p>Magellan mapped 98 percent of the surface by radar between 1990 and 1994. ESA's EnVision, along with NASA's proposed VERITAS and DAVINCI missions, aim to map the surface in detail and measure whether Venus still has active volcanism today.</p>
                    </section>
                </div>
            </div>
                        <nav className="object-nav" aria-label="More objects">
                <div className="container object-nav__grid">
                    <Link className="object-nav__link object-nav__link--prev" to="/objects/moon">
                        <span className="object-nav__dir"><span className="arrow" aria-hidden="true">←</span> Previous object</span>
                        <span className="object-nav__name">The Moon</span>
                    </Link>
                    <Link className="btn btn--ghost object-nav__back" to="/explore">Back to Explore</Link>
                    <Link className="object-nav__link object-nav__link--next" to="/objects/mercury">
                        <span className="object-nav__dir">Next object <span className="arrow" aria-hidden="true">→</span></span>
                        <span className="object-nav__name">Mercury</span>
                    </Link>
                </div>
            </nav>
        </article>
    </main>
  );
}
