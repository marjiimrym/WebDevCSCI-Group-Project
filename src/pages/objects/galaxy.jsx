import { Link } from 'react-router-dom';
import image0 from '../../../assets/images/andromeda.png';

export default function GalaxyPage() {
  return (
    <main id="main" tabIndex={-1}>
        <article className="object type-galaxy" aria-labelledby="page-title">
            <header className="object-hero">
                <div className="sky" aria-hidden="true"></div>
                <div className="container">
                    <nav className="breadcrumb" aria-label="Breadcrumb">
                        <ol role="list">
                            <li><Link to="/explore">Explore</Link></li>
                            <li>Galaxies</li>
                            <li><span aria-current="page">Andromeda Galaxy</span></li>
                        </ol>
                    </nav>
                    <div className="object-hero__grid">
                        <div>
                            <p className="category">Galaxy</p>
                            <h1 id="page-title" className="object-title">Andromeda Galaxy</h1>
                            <p className="lede object-lede">The nearest large galaxy to ours, home to roughly a trillion stars.</p>
                            <p className="object-index">Object 24 of 26</p>
                        </div>
                        <figure className="object-visual">
                            <span className="object-visual__orbit" aria-hidden="true"></span>
                            <img src={image0} alt="Andromeda Galaxy - a spiral galaxy with blue arms and yellow core" width="733" height="783" />
                        </figure>
                    </div>
                </div>
            </header>

            <section className="facts-panel" aria-labelledby="facts-title">
                <div className="container">
                    <h2 id="facts-title" className="facts-panel__title">Key facts</h2>
                    <dl className="facts">
                        <div className="fact"><dt>Distance from Earth</dt><dd>2.5 million light-years</dd></div>
                        <div className="fact"><dt>Diameter</dt><dd>~220,000 light-years</dd></div>
                        <div className="fact"><dt>Mass</dt><dd>~1.5 × 10¹² solar masses</dd></div>
                        <div className="fact"><dt>Stellar count</dt><dd>~1 trillion</dd></div>
                        <div className="fact"><dt>Type</dt><dd>SA(s)b (barred spiral)</dd></div>
                        <div className="fact"><dt>Apparent magnitude</dt><dd>3.4 (naked eye visible)</dd></div>
                        <div className="fact"><dt>Local Group rank</dt><dd>Largest by mass</dd></div>
                        <div className="fact"><dt>Satellite galaxies</dt><dd>30+ known</dd></div>
                    </dl>
                </div>
            </section>

            <div className="container object-body">
                <nav className="toc" aria-label="On this page">
                    <p className="toc__title">On this page</p>
                    <ol role="list">
                        <li><a href="#overview">Overview</a></li>
                        <li><a href="#structure">Structure</a></li>
                        <li><a href="#satellites">Satellite Galaxies</a></li>
                        <li><a href="#collision">Future Collision</a></li>
                        <li><a href="#observing">Observing Andromeda</a></li>
                    </ol>
                </nav>

                <div className="prose">
                    <section id="overview">
                        <h2>Overview</h2>
                        <p>The Andromeda Galaxy (Messier 31, M31, or NGC 224) is a barred spiral galaxy approximately 2.5 million light-years from Earth. It is the nearest major galaxy to the Milky Way and the largest galaxy in the Local Group, containing roughly one trillion stars — several times more than our galaxy. Visible to the naked eye under dark skies, it appears as a faint, elongated smudge spanning about 3° of sky (six full Moons wide).</p>
                        <p>Andromeda and the Milky Way are gravitationally bound and approaching each other at ~110 km/s. In ~4-5 billion years, they will begin a merger that will transform both into a single elliptical galaxy ("Milkdromeda").</p>
                    </section>

                    <section id="structure">
                        <h2>Structure</h2>
                        <p>Andromeda is a classic barred spiral with a central bar (~27,000 ly long), a bright bulge of old stars, and prominent spiral arms traced by young blue stars, H II regions, and dust lanes. The disk is warped at the edges, likely from interactions with satellite galaxies. A massive dark matter halo extends far beyond the visible disk.</p>
                        <p>The core hosts a supermassive black hole (~140 million solar masses) with a peculiar double nucleus — possibly two merging black holes or a single black hole with an eccentric stellar disk. The bulge contains mostly old, metal-rich stars; the disk hosts ongoing star formation.</p>
                    </section>

                    <section id="satellites">
                        <h2>Satellite Galaxies</h2>
                        <p>Andromeda has a rich system of dwarf satellite galaxies (over 30 confirmed), including the bright ellipticals <strong>M32</strong> (compact, likely stripped core) and <strong>M110</strong> (dwarf elliptical with dust). Many satellites lie in a vast, rotating plane — a structure challenging standard cosmological models. Streams of tidally disrupted dwarfs (like the Giant Stellar Stream) wrap around Andromeda, evidence of ongoing cannibalism.</p>
                    </section>

                    <section id="collision">
                        <h2>Future Collision</h2>
                        <p>Andromeda and the Milky Way are on a collision course. Current data suggests a first close pass in ~4 billion years, triggering bursts of star formation as gas clouds compress. The galaxies will swing past each other, then fall back and fully merge in ~6-7 billion years. The Sun will likely be flung to a new orbit; direct stellar collisions are extremely rare due to vast distances.</p>
                        <p>The resulting "Milkdromeda" will be a giant elliptical galaxy with little gas for new stars. By then, the Sun will be a red giant or white dwarf, and Earth uninhabitable. The Local Group's other galaxies (Triangulum, Magellanic Clouds, dwarfs) will eventually join the merger.</p>
                    </section>

                    <section id="observing">
                        <h2>Observing Andromeda</h2>
                        <p>Best seen in autumn (Northern Hemisphere), locate it by finding the Great Square of Pegasus and star-hopping from Alpheratz. Binoculars reveal the bright core and oval glow; telescopes (6"+ aperture) show dust lanes and companions M32/M110. Astrophotography captures its full spiral grandeur. Edwin Hubble's 1923-24 observations of Cepheid variables in Andromeda proved it lay far beyond the Milky Way, settling the "Great Debate" and establishing the extragalactic distance scale.</p>
                    </section>
                </div>
            </div>

                        <nav className="object-nav" aria-label="More objects">
                <div className="container object-nav__grid">
                    <Link className="object-nav__link object-nav__link--prev" to="/objects/milky-way">
                        <span className="object-nav__dir"><span className="arrow" aria-hidden="true">←</span> Previous object</span>
                        <span className="object-nav__name">Milky Way Galaxy</span>
                    </Link>
                    <Link className="btn btn--ghost object-nav__back" to="/explore">Back to Explore</Link>
                    <Link className="object-nav__link object-nav__link--next" to="/objects/triangulum">
                        <span className="object-nav__dir">Next object <span className="arrow" aria-hidden="true">→</span></span>
                        <span className="object-nav__name">Triangulum Galaxy</span>
                    </Link>
                </div>
            </nav>
        </article>
    </main>
  );
}
