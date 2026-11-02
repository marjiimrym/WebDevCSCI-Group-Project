import { Link } from 'react-router-dom';
import image0 from '../../../assets/images/triangulum.jpg';

export default function TriangulumPage() {
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
                            <li><span aria-current="page">Triangulum Galaxy</span></li>
                        </ol>
                    </nav>
                    <div className="object-hero__grid">
                        <div>
                            <p className="category">Galaxy</p>
                            <h1 id="page-title" className="object-title">Triangulum Galaxy</h1>
                            <p className="lede object-lede">The third-largest galaxy in our Local Group and the most distant object visible to the naked eye, 2.7 million light-years away.</p>
                            <p className="object-index">Object 25 of 26</p>
                        </div>
                        <figure className="object-visual">
                            <span className="object-visual__orbit" aria-hidden="true"></span>
                            <img src={image0} width="800" height="800" alt="Illustration of the Triangulum Galaxy, a face-on spiral with loose glowing arms against black space" />
                        </figure>
                    </div>
                </div>
            </header>

            <section className="facts-panel" aria-labelledby="facts-title">
                <div className="container">
                    <h2 id="facts-title" className="facts-panel__title">Key facts</h2>
                    <dl className="facts">
                        <div className="fact"><dt>Distance</dt><dd>2.73 million light-years</dd></div>
                        <div className="fact"><dt>Diameter</dt><dd>~60,000 light-years</dd></div>
                        <div className="fact"><dt>Type</dt><dd>Spiral (SA(s)cd)</dd></div>
                        <div className="fact"><dt>Stars</dt><dd>~40 billion</dd></div>
                        <div className="fact"><dt>Catalogue</dt><dd>Messier 33</dd></div>
                        <div className="fact"><dt>Group</dt><dd>Local Group (third largest)</dd></div>
                        <div className="fact"><dt>Constellation</dt><dd>Triangulum</dd></div>
                        <div className="fact"><dt>Discovery</dt><dd>1654, Giovanni Hodierna</dd></div>
                    </dl>
                </div>
            </section>

            <div className="container object-body">
                <nav className="toc" aria-label="On this page">
                    <p className="toc__title">On this page</p>
                    <ol role="list">
                        <li><a href="#overview">Overview</a></li>
                        <li><a href="#structure">Structure</a></li>
                        <li><a href="#a-run-on-the-distance-ladder">A Run on the Distance Ladder</a></li>
                        <li><a href="#how-to-see-it">How to See It</a></li>
                    </ol>
                </nav>

                <div className="prose">
                    <section id="overview">
                        <h2>Overview</h2>
                        <p>The Triangulum Galaxy is the third-largest galaxy in our Local Group, after Andromeda and the Milky Way. It lies 2.73 million light-years away and is seen almost exactly face-on, so its spiral structure is on full display.</p>
                        <p>It is one of the most distant objects visible to the unaided eye, appearing as a faint smudge of magnitude 5.7 under a truly dark sky — a view humans have had for as long as there have been humans, though it was not recognised as a galaxy until the 20th century.</p>
                    </section>
                    <section id="structure">
                        <h2>Structure</h2>
                        <p>M33 has loosely wound, fragmented arms and no obvious central bulge, giving it a softer appearance than the grand spirals. It is small and diffuse compared with Andromeda, containing perhaps 40 billion stars to Andromeda's trillion.</p>
                        <p>Its most striking feature is NGC 604, one of the largest star-forming regions in the Local Group. Stretching about 1,500 light-years across, it is roughly 100 times the size of the Orion Nebula and contains more than 100 massive young stars.</p>
                    </section>
                    <section id="a-run-on-the-distance-ladder">
                        <h2>A Run on the Distance Ladder</h2>
                        <p>Because M33 is relatively close and rich in variable stars, Cepheids and red giants, it became an important stepping stone in measuring cosmic distance. Disagreements over its exact distance — estimates have ranged from 2.3 to 3.2 million light-years — made it a test case for calibrating the methods used to measure the whole universe.</p>
                        <p>It may be a companion of Andromeda or an independent member of the Local Group falling in for the first time; its motion suggests the two have interacted in the past.</p>
                    </section>
                    <section id="how-to-see-it">
                        <h2>How to See It</h2>
                        <p>M33 is found in the small constellation Triangulum, near Andromeda. Binoculars reveal it as a soft oval glow, and a small telescope shows the brighter star-forming knots within the arms.</p>
                        <p>It is a favourite autumn and winter target, best placed high in the sky on clear moonless nights. Photographers find it a rewarding challenge, since long exposures reveal the spiral arms that the eye can only guess at.</p>
                    </section>
                </div>
            </div>
                        <nav className="object-nav" aria-label="More objects">
                <div className="container object-nav__grid">
                    <Link className="object-nav__link object-nav__link--prev" to="/objects/galaxy">
                        <span className="object-nav__dir"><span className="arrow" aria-hidden="true">←</span> Previous object</span>
                        <span className="object-nav__name">Andromeda Galaxy</span>
                    </Link>
                    <Link className="btn btn--ghost object-nav__back" to="/explore">Back to Explore</Link>
                    <Link className="object-nav__link object-nav__link--next" to="/objects/whirlpool">
                        <span className="object-nav__dir">Next object <span className="arrow" aria-hidden="true">→</span></span>
                        <span className="object-nav__name">Whirlpool Galaxy</span>
                    </Link>
                </div>
            </nav>
        </article>
    </main>
  );
}
