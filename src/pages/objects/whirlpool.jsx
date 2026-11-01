import { Link } from 'react-router-dom';
import image0 from '../../../assets/images/whirlpool.svg';

export default function WhirlpoolPage() {
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
                            <li><span aria-current="page">Whirlpool Galaxy</span></li>
                        </ol>
                    </nav>
                    <div className="object-hero__grid">
                        <div>
                            <p className="category">Galaxy</p>
                            <h1 id="page-title" className="object-title">Whirlpool Galaxy</h1>
                            <p className="lede object-lede">A grand-design spiral 31 million light-years away, caught mid-interaction with a smaller companion galaxy.</p>
                            <p className="object-index">Object 26 of 26</p>
                        </div>
                        <figure className="object-visual">
                            <span className="object-visual__orbit" aria-hidden="true"></span>
                            <img src={image0} width="800" height="800" alt="Illustration of the Whirlpool Galaxy, a grand-design spiral with two bright arms against black space" />
                        </figure>
                    </div>
                </div>
            </header>

            <section className="facts-panel" aria-labelledby="facts-title">
                <div className="container">
                    <h2 id="facts-title" className="facts-panel__title">Key facts</h2>
                    <dl className="facts">
                        <div className="fact"><dt>Distance</dt><dd>23 million light-years</dd></div>
                        <div className="fact"><dt>Diameter</dt><dd>~76,900 light-years</dd></div>
                        <div className="fact"><dt>Type</dt><dd>Grand-design spiral (SA(s)bc)</dd></div>
                        <div className="fact"><dt>Companion galaxy</dt><dd>NGC 5195</dd></div>
                        <div className="fact"><dt>Catalogue</dt><dd>Messier 51</dd></div>
                        <div className="fact"><dt>Constellation</dt><dd>Canes Venatici</dd></div>
                        <div className="fact"><dt>Discovered</dt><dd>1773, Charles Messier</dd></div>
                        <div className="fact"><dt>First spiral resolved</dt><dd>1845, Lord Rosse</dd></div>
                    </dl>
                </div>
            </section>

            <div className="container object-body">
                <nav className="toc" aria-label="On this page">
                    <p className="toc__title">On this page</p>
                    <ol role="list">
                        <li><a href="#overview">Overview</a></li>
                        <li><a href="#the-interaction">The Interaction</a></li>
                        <li><a href="#the-first-spiral">The First Spiral</a></li>
                        <li><a href="#star-formation">Star Formation</a></li>
                    </ol>
                </nav>

                <div className="prose">
                    <section id="overview">
                        <h2>Overview</h2>
                        <p>The Whirlpool Galaxy, catalogued as M51, is the textbook example of a grand-design spiral — a galaxy with two bright, well-defined arms winding cleanly out from its centre. It lies about 23 million light-years away in Canes Venatici, the Hunting Dogs.</p>
                        <p>It is accompanied by the smaller, yellowish galaxy NGC 5195, which appears at the end of one of the spiral arms. The pair is one of the most photographed and most studied galaxy systems in the sky.</p>
                    </section>
                    <section id="the-interaction">
                        <h2>The Interaction</h2>
                        <p>NGC 5195 has passed close to M51, and the encounter is what gives the Whirlpool its extraordinary definition. The near pass sent a density wave through M51's disk, compressing gas and dust and brightening the arms into prominence.</p>
                        <p>A tidal bridge of material connects the two galaxies, and the smaller one shows signs of being stripped and disturbed. The pair is caught mid-collision, a snapshot of a process that takes hundreds of millions of years.</p>
                    </section>
                    <section id="the-first-spiral">
                        <h2>The First Spiral</h2>
                        <p>In 1845 the Irish astronomer William Parsons, the third Earl of Rosse, built a 72-inch telescope and drew M51's curling arms. It was the first time anyone had recognised a nebula as having spiral structure.</p>
                        <p>That drawing, made nearly 70 years before anyone understood that such nebulae were galaxies far beyond our own, effectively began the study of galactic structure.</p>
                    </section>
                    <section id="star-formation">
                        <h2>Star Formation</h2>
                        <p>The compressed arms are studded with pink knots of ionised hydrogen where massive young stars are forming, and the system has hosted multiple observed supernovae, including SN 2011dh, a bright stellar explosion recorded in 2011.</p>
                        <p>Its combination of face-on orientation, bright arms and active star formation makes M51 a standard reference galaxy — the object astronomers reach for when they need to explain what a spiral galaxy looks like.</p>
                    </section>
                </div>
            </div>
                        <nav className="object-nav" aria-label="More objects">
                <div className="container object-nav__grid">
                    <Link className="object-nav__link object-nav__link--prev" to="/objects/triangulum">
                        <span className="object-nav__dir"><span className="arrow" aria-hidden="true">←</span> Previous object</span>
                        <span className="object-nav__name">Triangulum Galaxy</span>
                    </Link>
                    <Link className="btn btn--ghost object-nav__back" to="/explore">Back to Explore</Link>
                    <Link className="object-nav__link object-nav__link--next" to="/objects/earth">
                        <span className="object-nav__dir">Next object <span className="arrow" aria-hidden="true">→</span></span>
                        <span className="object-nav__name">Earth</span>
                    </Link>
                </div>
            </nav>
        </article>
    </main>
  );
}
