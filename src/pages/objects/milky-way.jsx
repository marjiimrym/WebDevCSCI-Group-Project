import { Link } from 'react-router-dom';
import image0 from '../../../assets/images/milky-way.svg';

export default function MilkyWayPage() {
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
                            <li><span aria-current="page">Milky Way Galaxy</span></li>
                        </ol>
                    </nav>
                    <div className="object-hero__grid">
                        <div>
                            <p className="category">Galaxy</p>
                            <h1 id="page-title" className="object-title">Milky Way Galaxy</h1>
                            <p className="lede object-lede">Our home galaxy: a barred spiral of 100 to 400 billion stars, with a supermassive black hole at its centre.</p>
                            <p className="object-index">Object 23 of 26</p>
                        </div>
                        <figure className="object-visual">
                            <span className="object-visual__orbit" aria-hidden="true"></span>
                            <img src={image0} width="800" height="800" alt="Illustration of the Milky Way, a luminous barred spiral seen at an angle against black space" />
                        </figure>
                    </div>
                </div>
            </header>

            <section className="facts-panel" aria-labelledby="facts-title">
                <div className="container">
                    <h2 id="facts-title" className="facts-panel__title">Key facts</h2>
                    <dl className="facts">
                        <div className="fact"><dt>Distance to centre</dt><dd>26,000 light-years</dd></div>
                        <div className="fact"><dt>Diameter</dt><dd>100,000-180,000 light-years</dd></div>
                        <div className="fact"><dt>Stars</dt><dd>100-400 billion</dd></div>
                        <div className="fact"><dt>Type</dt><dd>Barred spiral (SBbc)</dd></div>
                        <div className="fact"><dt>Age</dt><dd>~13.6 billion years</dd></div>
                        <div className="fact"><dt>Central black hole</dt><dd>Sagittarius A* (4.15 million Suns)</dd></div>
                        <div className="fact"><dt>Sun's orbit</dt><dd>Once per ~230 million years</dd></div>
                        <div className="fact"><dt>Nearest large galaxy</dt><dd>Andromeda</dd></div>
                    </dl>
                </div>
            </section>

            <div className="container object-body">
                <nav className="toc" aria-label="On this page">
                    <p className="toc__title">On this page</p>
                    <ol role="list">
                        <li><a href="#overview">Overview</a></li>
                        <li><a href="#structure">Structure</a></li>
                        <li><a href="#place-in-the-local-group">Place in the Local Group</a></li>
                        <li><a href="#seeing-it">Seeing It</a></li>
                    </ol>
                </nav>

                <div className="prose">
                    <section id="overview">
                        <h2>Overview</h2>
                        <p>The Milky Way is the galaxy we live in — a barred spiral containing 100 to 400 billion stars, including the Sun. Seen from a dark site it is a luminous band arcing overhead: the combined light of billions of distant suns too far apart to resolve individually.</p>
                        <p>The name comes from the Greek galaktikos, 'milky', by way of the Latin via lactea. The Romans thought it was a spilled stream of milk, and mythologies around the world have offered their own stories for the same bright road.</p>
                    </section>
                    <section id="structure">
                        <h2>Structure</h2>
                        <p>Our galaxy is organised into a central bar roughly 10,000 light-years long, surrounded by spiral arms of gas, dust and young stars. The Sun sits in a minor spur between two major arms, 26,000 light-years from the centre.</p>
                        <p>At the very core lies Sagittarius A*, a supermassive black hole of 4.15 million solar masses imaged by the Event Horizon Telescope in 2022. The galaxy also has a diffuse halo of old stars and globular clusters extending far beyond the visible disk.</p>
                    </section>
                    <section id="place-in-the-local-group">
                        <h2>Place in the Local Group</h2>
                        <p>The Milky Way is one of two large spirals in the Local Group, a collection of roughly 80 galaxies bound by gravity. The other giant is Andromeda, and the two are falling toward each other at about 110 kilometres per second.</p>
                        <p>In roughly 4.5 billion years they will merge into a single elliptical galaxy sometimes called Milkomeda. The Sun will likely survive the encounter, though the solar system's position in the merged galaxy will be completely different.</p>
                    </section>
                    <section id="seeing-it">
                        <h2>Seeing It</h2>
                        <p>The Milky Way is visible to the naked eye wherever the sky is genuinely dark, but light pollution has hidden it from most of North America and Europe. It covers only a small fraction of the sky, yet contains the overwhelming majority of what we can see of the universe without a telescope.</p>
                        <p>The best views come from new moons in summer, away from city lights, when the bright core of the galaxy rises in the south. A pair of binoculars is enough to resolve star clouds, dark dust lanes and clusters too faint for the unaided eye.</p>
                    </section>
                </div>
            </div>
                        <nav className="object-nav" aria-label="More objects">
                <div className="container object-nav__grid">
                    <Link className="object-nav__link object-nav__link--prev" to="/objects/crab-nebula">
                        <span className="object-nav__dir"><span className="arrow" aria-hidden="true">←</span> Previous object</span>
                        <span className="object-nav__name">Crab Nebula</span>
                    </Link>
                    <Link className="btn btn--ghost object-nav__back" to="/explore">Back to Explore</Link>
                    <Link className="object-nav__link object-nav__link--next" to="/objects/galaxy">
                        <span className="object-nav__dir">Next object <span className="arrow" aria-hidden="true">→</span></span>
                        <span className="object-nav__name">Andromeda Galaxy</span>
                    </Link>
                </div>
            </nav>
        </article>
    </main>
  );
}
