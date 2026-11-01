import { Link } from 'react-router-dom';
import image0 from '../../../assets/images/orion-nebula.svg';

export default function OrionNebulaPage() {
  return (
    <main id="main" tabIndex={-1}>
        <article className="object type-nebula" aria-labelledby="page-title">
            <header className="object-hero">
                <div className="sky" aria-hidden="true"></div>
                <div className="container">
                    <nav className="breadcrumb" aria-label="Breadcrumb">
                        <ol role="list">
                            <li><Link to="/explore">Explore</Link></li>
                            <li>Nebulae</li>
                            <li><span aria-current="page">Orion Nebula</span></li>
                        </ol>
                    </nav>
                    <div className="object-hero__grid">
                        <div>
                            <p className="category">Nebula</p>
                            <h1 id="page-title" className="object-title">Orion Nebula</h1>
                            <p className="lede object-lede">A stellar nursery 1,344 light-years away, and the brightest region of star formation visible to the naked eye.</p>
                            <p className="object-index">Object 21 of 26</p>
                        </div>
                        <figure className="object-visual">
                            <span className="object-visual__orbit" aria-hidden="true"></span>
                            <img src={image0} width="800" height="800" alt="Illustration of the Orion Nebula, a glowing pink and violet cloud of gas against black space" />
                        </figure>
                    </div>
                </div>
            </header>

            <section className="facts-panel" aria-labelledby="facts-title">
                <div className="container">
                    <h2 id="facts-title" className="facts-panel__title">Key facts</h2>
                    <dl className="facts">
                        <div className="fact"><dt>Distance</dt><dd>1,344 light-years</dd></div>
                        <div className="fact"><dt>Radius</dt><dd>~12 light-years</dd></div>
                        <div className="fact"><dt>Type</dt><dd>Diffuse emission nebula (H II)</dd></div>
                        <div className="fact"><dt>Catalogue</dt><dd>Messier 42, NGC 1976</dd></div>
                        <div className="fact"><dt>Young stars</dt><dd>1,000+ (including the Trapezium)</dd></div>
                        <div className="fact"><dt>Mass</dt><dd>~2,000 Suns</dd></div>
                        <div className="fact"><dt>Constellation</dt><dd>Orion</dd></div>
                        <div className="fact"><dt>Discovery</dt><dd>1610, Nicolas-Claude Peiresc</dd></div>
                    </dl>
                </div>
            </section>

            <div className="container object-body">
                <nav className="toc" aria-label="On this page">
                    <p className="toc__title">On this page</p>
                    <ol role="list">
                        <li><a href="#overview">Overview</a></li>
                        <li><a href="#the-trapezium">The Trapezium</a></li>
                        <li><a href="#a-stellar-nursery">A Stellar Nursery</a></li>
                        <li><a href="#observation">Observation</a></li>
                    </ol>
                </nav>

                <div className="prose">
                    <section id="overview">
                        <h2>Overview</h2>
                        <p>The Orion Nebula is the brightest region of star formation visible to the naked eye — the fuzzy middle 'star' in Orion's sword. It lies 1,344 light-years away and stretches about 24 light-years across, with a mass around 2,000 times that of the Sun.</p>
                        <p>It is the nearest region of massive star formation and the most studied of its kind. Under a dark sky it shows as a soft grey smudge; through any telescope it resolves into glowing wings of gas surrounding a brilliant core.</p>
                    </section>
                    <section id="the-trapezium">
                        <h2>The Trapezium</h2>
                        <p>At the nebula's heart are four massive, extremely young stars known as the Trapezium, only a couple of million years old. Their ultraviolet radiation floods the surrounding hydrogen with energy, stripping electrons and making the gas glow — the light we see is essentially fluorescent.</p>
                        <p>These stars are so luminous and short-lived that they are clearing a cavity in the cloud, pushing gas outward and slowly dispersing the nursery that created them. The nebula's glow is powered entirely by them.</p>
                    </section>
                    <section id="a-stellar-nursery">
                        <h2>A Stellar Nursery</h2>
                        <p>Hubble observations revealed hundreds of protoplanetary disks — dark ovals of dust silhouetted against the glowing gas, each one a solar system in the making. These 'proplyds' provided the first clear evidence that disks of material surround newborn stars.</p>
                        <p>More than a thousand young stars have been catalogued in the region, in various stages of formation, from collapsing knots of gas to fully formed stars with debris disks still orbiting them.</p>
                    </section>
                    <section id="observation">
                        <h2>Observation</h2>
                        <p>The Orion Nebula is one of the few star-forming regions visible without a telescope, found in the sword hanging below Orion's belt. Binoculars show its oval glow, and a small telescope reveals the four Trapezium stars at its centre.</p>
                        <p>It is best placed in the winter sky and remains an accessible target from city locations, since its brightness overcomes moderate light pollution. Larger telescopes begin to show the dark dust lanes that divide the glowing gas.</p>
                    </section>
                </div>
            </div>
                        <nav className="object-nav" aria-label="More objects">
                <div className="container object-nav__grid">
                    <Link className="object-nav__link object-nav__link--prev" to="/objects/rigel">
                        <span className="object-nav__dir"><span className="arrow" aria-hidden="true">←</span> Previous object</span>
                        <span className="object-nav__name">Rigel</span>
                    </Link>
                    <Link className="btn btn--ghost object-nav__back" to="/explore">Back to Explore</Link>
                    <Link className="object-nav__link object-nav__link--next" to="/objects/crab-nebula">
                        <span className="object-nav__dir">Next object <span className="arrow" aria-hidden="true">→</span></span>
                        <span className="object-nav__name">Crab Nebula</span>
                    </Link>
                </div>
            </nav>
        </article>
    </main>
  );
}
