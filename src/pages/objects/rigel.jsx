import { Link } from 'react-router-dom';
import image0 from '../../../assets/images/rigel.svg';

export default function RigelPage() {
  return (
    <main id="main" tabIndex={-1}>
        <article className="object type-star" aria-labelledby="page-title">
            <header className="object-hero">
                <div className="sky" aria-hidden="true"></div>
                <div className="container">
                    <nav className="breadcrumb" aria-label="Breadcrumb">
                        <ol role="list">
                            <li><Link to="/explore">Explore</Link></li>
                            <li>Stars</li>
                            <li><span aria-current="page">Rigel</span></li>
                        </ol>
                    </nav>
                    <div className="object-hero__grid">
                        <div>
                            <p className="category">Star</p>
                            <h1 id="page-title" className="object-title">Rigel</h1>
                            <p className="lede object-lede">A blue supergiant marking the foot of Orion, shining roughly 120,000 times brighter than the Sun.</p>
                            <p className="object-index">Object 20 of 26</p>
                        </div>
                        <figure className="object-visual">
                            <span className="object-visual__orbit" aria-hidden="true"></span>
                            <img src={image0} width="800" height="800" alt="Illustration of Rigel, a blue supergiant radiating a cold blue-white glow against black space" />
                        </figure>
                    </div>
                </div>
            </header>

            <section className="facts-panel" aria-labelledby="facts-title">
                <div className="container">
                    <h2 id="facts-title" className="facts-panel__title">Key facts</h2>
                    <dl className="facts">
                        <div className="fact"><dt>Distance</dt><dd>~860 light-years</dd></div>
                        <div className="fact"><dt>Radius</dt><dd>78.9 × Sun</dd></div>
                        <div className="fact"><dt>Mass</dt><dd>~21 × Sun</dd></div>
                        <div className="fact"><dt>Spectral type</dt><dd>B8 Ia (blue supergiant)</dd></div>
                        <div className="fact"><dt>Surface temperature</dt><dd>12,100 K</dd></div>
                        <div className="fact"><dt>Luminosity</dt><dd>~120,000 × Sun</dd></div>
                        <div className="fact"><dt>Age</dt><dd>~8 million years</dd></div>
                        <div className="fact"><dt>Constellation</dt><dd>Orion</dd></div>
                    </dl>
                </div>
            </section>

            <div className="container object-body">
                <nav className="toc" aria-label="On this page">
                    <p className="toc__title">On this page</p>
                    <ol role="list">
                        <li><a href="#overview">Overview</a></li>
                        <li><a href="#a-life-in-the-fast-lane">A Life in the Fast Lane</a></li>
                        <li><a href="#a-multiple-star">A Multiple Star</a></li>
                        <li><a href="#in-the-constellation-orion">In the Constellation Orion</a></li>
                    </ol>
                </nav>

                <div className="prose">
                    <section id="overview">
                        <h2>Overview</h2>
                        <p>Rigel is a blue supergiant marking the foot of Orion, and the seventh-brightest star in the sky. Despite its cool-sounding name it is fiercely hot: its surface glows at about 12,100 K, nearly twice the temperature of the Sun.</p>
                        <p>Its light is a striking blue-white, a sharp contrast with the red shoulder of Betelgeuse on the opposite side of the constellation. At 860 light-years away Rigel is more distant than Betelgeuse but far more luminous, which is why the two appear comparable in brightness.</p>
                    </section>
                    <section id="a-life-in-the-fast-lane">
                        <h2>A Life in the Fast Lane</h2>
                        <p>Rigel packs about 21 solar masses into a single star, and massive stars burn through their fuel quickly. It has existed for only about 8 million years — a blink compared with the Sun's 4.6 billion — yet it is already nearing the end of its life.</p>
                        <p>It radiates roughly 120,000 times the Sun's energy, most of it as ultraviolet light. When it runs out of fuel it will collapse and explode as a supernova, seeding the galaxy with the heavy elements that future stars and planets are built from.</p>
                    </section>
                    <section id="a-multiple-star">
                        <h2>A Multiple Star</h2>
                        <p>Rigel is not a single point of light but a system. The bright primary is occasionally eclipsed by a close companion, and two fainter stars lie farther out, making at least four bodies in the system.</p>
                        <p>The primary itself pulsates irregularly, varying in brightness by a few hundredths of a magnitude over periods of weeks. It is classified as a Beta Cephei-type variable, a class of hot massive stars that pulse as the opacity of their interiors changes.</p>
                    </section>
                    <section id="in-the-constellation-orion">
                        <h2>In the Constellation Orion</h2>
                        <p>Rigel sits at Orion's lower left, opposite Betelgeuse at the shoulder. The two stars are not physically associated — they only look like a pair from Earth — and their colour difference makes Orion one of the most striking constellations in the sky.</p>
                        <p>Rigel's position at the hunter's foot has made it a landmark in star charts for centuries, and its brightness makes it an easy naked-eye target from almost anywhere on Earth.</p>
                    </section>
                </div>
            </div>
                        <nav className="object-nav" aria-label="More objects">
                <div className="container object-nav__grid">
                    <Link className="object-nav__link object-nav__link--prev" to="/objects/betelgeuse">
                        <span className="object-nav__dir"><span className="arrow" aria-hidden="true">←</span> Previous object</span>
                        <span className="object-nav__name">Betelgeuse</span>
                    </Link>
                    <Link className="btn btn--ghost object-nav__back" to="/explore">Back to Explore</Link>
                    <Link className="object-nav__link object-nav__link--next" to="/objects/orion-nebula">
                        <span className="object-nav__dir">Next object <span className="arrow" aria-hidden="true">→</span></span>
                        <span className="object-nav__name">Orion Nebula</span>
                    </Link>
                </div>
            </nav>
        </article>
    </main>
  );
}
