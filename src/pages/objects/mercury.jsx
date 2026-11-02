import { Link } from 'react-router-dom';
import image0 from '../../../assets/images/mercury.png';

export default function MercuryPage() {
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
                            <li><span aria-current="page">Mercury</span></li>
                        </ol>
                    </nav>
                    <div className="object-hero__grid">
                        <div>
                            <p className="category">Planet</p>
                            <h1 id="page-title" className="object-title">Mercury</h1>
                            <p className="lede object-lede">The smallest planet and the closest to the Sun, a cratered world of rock with no atmosphere to soften its swings from scorching to freezing.</p>
                            <p className="object-index">Object 04 of 26</p>
                        </div>
                        <figure className="object-visual">
                            <span className="object-visual__orbit" aria-hidden="true"></span>
                            <img src={image0} width="800" height="800" alt="Illustration of Mercury, a heavily cratered grey-brown sphere against black space" />
                        </figure>
                    </div>
                </div>
            </header>

            <section className="facts-panel" aria-labelledby="facts-title">
                <div className="container">
                    <h2 id="facts-title" className="facts-panel__title">Key facts</h2>
                    <dl className="facts">
                        <div className="fact"><dt>Distance from Earth</dt><dd>77 million km (closest)</dd></div>
                        <div className="fact"><dt>Radius</dt><dd>2,440 km (smallest planet)</dd></div>
                        <div className="fact"><dt>Mass</dt><dd>3.30 × 10²³ kg</dd></div>
                        <div className="fact"><dt>Surface gravity</dt><dd>3.70 m/s² (38% of Earth)</dd></div>
                        <div className="fact"><dt>Orbital period</dt><dd>88 days</dd></div>
                        <div className="fact"><dt>Surface temperature</dt><dd>-173°C to 427°C</dd></div>
                        <div className="fact"><dt>Atmosphere</dt><dd>Exosphere (sodium, oxygen)</dd></div>
                        <div className="fact"><dt>Moons</dt><dd>None</dd></div>
                    </dl>
                </div>
            </section>

            <div className="container object-body">
                <nav className="toc" aria-label="On this page">
                    <p className="toc__title">On this page</p>
                    <ol role="list">
                        <li><a href="#overview">Overview</a></li>
                        <li><a href="#surface">Surface</a></li>
                        <li><a href="#magnetosphere">Magnetosphere</a></li>
                        <li><a href="#exploration">Exploration</a></li>
                    </ol>
                </nav>

                <div className="prose">
                    <section id="overview">
                        <h2>Overview</h2>
                        <p>Mercury is the smallest planet and the closest to the Sun, completing an orbit every 88 days. It has no substantial atmosphere, so its surface is exposed to the full extremes of space — a swing of about 600°C between day and night.</p>
                        <p>Its rotation is locked in a 3:2 spin-orbit resonance: Mercury turns exactly three times for every two orbits. Combined with its slow rotation, this means a single solar day — sunrise to sunrise — lasts 176 Earth days, two full Mercury years.</p>
                    </section>
                    <section id="surface">
                        <h2>Surface</h2>
                        <p>Mercury's surface looks much like the Moon's: heavily cratered, with no atmosphere to erase the scars. The largest feature is the Caloris Basin, an impact crater 1,550 kilometres across whose name means 'heat' because the Sun once pointed directly into it.</p>
                        <p>Close inspection shows long cliffs called lobate scarps, wrinkles in the crust left as the planet's large iron core cooled and the whole world contracted by as much as 7 kilometres. Radar observations of polar craters that never see sunlight reveal water ice buried in permanent shadow.</p>
                    </section>
                    <section id="magnetosphere">
                        <h2>Magnetosphere</h2>
                        <p>Mercury is the only rocky planet besides Earth with a global magnetic field, though it is just 1 percent as strong. It is generated by a still-convecting part of the planet's enormous iron core, which makes up roughly 85 percent of the planet's radius.</p>
                        <p>The weak field interacts violently with the solar wind, filling Mercury's thin exosphere with sodium, calcium and oxygen stripped from the surface and producing bright tails that stream away from the Sun.</p>
                    </section>
                    <section id="exploration">
                        <h2>Exploration</h2>
                        <p>Mariner 10 made the first flybys in 1974-75, mapping about 45 percent of the surface before the instrument failed. MESSENGER became the first spacecraft to orbit Mercury in 2011, completing global mapping and confirming the polar ice.</p>
                        <p>ESA and JAXA's BepiColombo arrived in the Mercury system in 2026 and will enter orbit after a series of flybys, carrying a much larger instrument suite to study the interior, surface and magnetic environment together.</p>
                    </section>
                </div>
            </div>
                        <nav className="object-nav" aria-label="More objects">
                <div className="container object-nav__grid">
                    <Link className="object-nav__link object-nav__link--prev" to="/objects/venus">
                        <span className="object-nav__dir"><span className="arrow" aria-hidden="true">←</span> Previous object</span>
                        <span className="object-nav__name">Venus</span>
                    </Link>
                    <Link className="btn btn--ghost object-nav__back" to="/explore">Back to Explore</Link>
                    <Link className="object-nav__link object-nav__link--next" to="/objects/sun">
                        <span className="object-nav__dir">Next object <span className="arrow" aria-hidden="true">→</span></span>
                        <span className="object-nav__name">The Sun</span>
                    </Link>
                </div>
            </nav>
        </article>
    </main>
  );
}
