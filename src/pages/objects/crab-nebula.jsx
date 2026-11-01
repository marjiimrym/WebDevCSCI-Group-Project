import { Link } from 'react-router-dom';
import image0 from '../../../assets/images/crab-nebula.svg';

export default function CrabNebulaPage() {
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
                            <li><span aria-current="page">Crab Nebula</span></li>
                        </ol>
                    </nav>
                    <div className="object-hero__grid">
                        <div>
                            <p className="category">Nebula</p>
                            <h1 id="page-title" className="object-title">Crab Nebula</h1>
                            <p className="lede object-lede">The shredded remains of a supernova that Chinese astronomers recorded in 1054, now powered by a spinning neutron star.</p>
                            <p className="object-index">Object 22 of 26</p>
                        </div>
                        <figure className="object-visual">
                            <span className="object-visual__orbit" aria-hidden="true"></span>
                            <img src={image0} width="800" height="800" alt="Illustration of the Crab Nebula, a tangle of orange filaments around a bright core against black space" />
                        </figure>
                    </div>
                </div>
            </header>

            <section className="facts-panel" aria-labelledby="facts-title">
                <div className="container">
                    <h2 id="facts-title" className="facts-panel__title">Key facts</h2>
                    <dl className="facts">
                        <div className="fact"><dt>Distance</dt><dd>6,500 light-years</dd></div>
                        <div className="fact"><dt>Radius</dt><dd>~5.5 light-years</dd></div>
                        <div className="fact"><dt>Type</dt><dd>Supernova remnant</dd></div>
                        <div className="fact"><dt>Central object</dt><dd>Crab Pulsar (30 rotations/second)</dd></div>
                        <div className="fact"><dt>Recorded</dt><dd>1054 CE by Chinese astronomers</dd></div>
                        <div className="fact"><dt>Catalogued</dt><dd>1758, Charles Messier (M1)</dd></div>
                        <div className="fact"><dt>Constellation</dt><dd>Taurus</dd></div>
                        <div className="fact"><dt>Expansion speed</dt><dd>~1,500 km/s</dd></div>
                    </dl>
                </div>
            </section>

            <div className="container object-body">
                <nav className="toc" aria-label="On this page">
                    <p className="toc__title">On this page</p>
                    <ol role="list">
                        <li><a href="#overview">Overview</a></li>
                        <li><a href="#the-pulsar">The Pulsar</a></li>
                        <li><a href="#structure">Structure</a></li>
                        <li><a href="#why-it-matters">Why It Matters</a></li>
                    </ol>
                </nav>

                <div className="prose">
                    <section id="overview">
                        <h2>Overview</h2>
                        <p>The Crab Nebula is the wreckage of a star that exploded as a supernova. Chinese, Japanese and Arab astronomers recorded the 'guest star' of 1054 CE, noting that it was visible in daylight for 23 days and remained bright enough to see at night for nearly two years.</p>
                        <p>Almost seven centuries later, while hunting for Halley's Comet, Charles Messier found the fuzzy object and made it the first entry in his catalogue — M1, the start of the list that still bears his name.</p>
                    </section>
                    <section id="the-pulsar">
                        <h2>The Pulsar</h2>
                        <p>At the nebula's centre sits the Crab Pulsar, a neutron star about 20 kilometres across that spins 30 times every second, sweeping a beam of radiation like a lighthouse. It was discovered in 1968, confirming that supernovae leave neutron stars behind.</p>
                        <p>The pulses arrive across the spectrum, from radio waves to gamma rays, and the spin is slowing by roughly 3.6 nanoseconds per day as the star's rotational energy powers the surrounding nebula. It is one of the most studied objects in all of astronomy.</p>
                    </section>
                    <section id="structure">
                        <h2>Structure</h2>
                        <p>The nebula spans about 11 light-years and is still expanding at 1,500 kilometres per second. Its glowing filaments are the shredded outer layers of the original star, rich in oxygen, calcium and iron forged in its core and in the explosion itself.</p>
                        <p>Between the filaments, electrons spiralling at nearly light speed through the magnetic field produce a smooth synchrotron glow running from radio waves to X-rays — light produced not by heat but by magnetism.</p>
                    </section>
                    <section id="why-it-matters">
                        <h2>Why It Matters</h2>
                        <p>Because the Crab's timing is so precise and its history so well documented, it serves as a calibration source for gamma-ray telescopes and a laboratory for the physics of extreme matter.</p>
                        <p>The explosion also demonstrates the central role supernovae play in the chemistry of the universe: the calcium in your bones and the iron in your blood were assembled in stars and scattered by events exactly like this one.</p>
                    </section>
                </div>
            </div>
                        <nav className="object-nav" aria-label="More objects">
                <div className="container object-nav__grid">
                    <Link className="object-nav__link object-nav__link--prev" to="/objects/orion-nebula">
                        <span className="object-nav__dir"><span className="arrow" aria-hidden="true">←</span> Previous object</span>
                        <span className="object-nav__name">Orion Nebula</span>
                    </Link>
                    <Link className="btn btn--ghost object-nav__back" to="/explore">Back to Explore</Link>
                    <Link className="object-nav__link object-nav__link--next" to="/objects/milky-way">
                        <span className="object-nav__dir">Next object <span className="arrow" aria-hidden="true">→</span></span>
                        <span className="object-nav__name">Milky Way Galaxy</span>
                    </Link>
                </div>
            </nav>
        </article>
    </main>
  );
}
