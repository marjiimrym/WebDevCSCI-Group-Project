import { Link } from 'react-router-dom';
import image0 from '../../../assets/images/sirius.svg';

export default function SiriusPage() {
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
                            <li><span aria-current="page">Sirius</span></li>
                        </ol>
                    </nav>
                    <div className="object-hero__grid">
                        <div>
                            <p className="category">Star</p>
                            <h1 id="page-title" className="object-title">Sirius</h1>
                            <p className="lede object-lede">The brightest star in Earth's night sky, a blue-white star twice the Sun's mass with a faint white dwarf companion.</p>
                            <p className="object-index">Object 17 of 26</p>
                        </div>
                        <figure className="object-visual">
                            <span className="object-visual__orbit" aria-hidden="true"></span>
                            <img src={image0} width="800" height="800" alt="Illustration of Sirius, a brilliant blue-white star with a soft glow against black space" />
                        </figure>
                    </div>
                </div>
            </header>

            <section className="facts-panel" aria-labelledby="facts-title">
                <div className="container">
                    <h2 id="facts-title" className="facts-panel__title">Key facts</h2>
                    <dl className="facts">
                        <div className="fact"><dt>Distance</dt><dd>8.6 light-years</dd></div>
                        <div className="fact"><dt>Radius</dt><dd>1.19 × Sun</dd></div>
                        <div className="fact"><dt>Mass</dt><dd>2.06 × Sun</dd></div>
                        <div className="fact"><dt>Spectral type</dt><dd>A1V (main sequence)</dd></div>
                        <div className="fact"><dt>Surface temperature</dt><dd>9,940 K</dd></div>
                        <div className="fact"><dt>Luminosity</dt><dd>25.4 × Sun</dd></div>
                        <div className="fact"><dt>Companion</dt><dd>Sirius B (white dwarf)</dd></div>
                        <div className="fact"><dt>Apparent magnitude</dt><dd>-1.46 (brightest star)</dd></div>
                    </dl>
                </div>
            </section>

            <div className="container object-body">
                <nav className="toc" aria-label="On this page">
                    <p className="toc__title">On this page</p>
                    <ol role="list">
                        <li><a href="#overview">Overview</a></li>
                        <li><a href="#the-sirius-system">The Sirius System</a></li>
                        <li><a href="#a-star-in-culture">A Star in Culture</a></li>
                        <li><a href="#how-to-see-it">How to See It</a></li>
                    </ol>
                </nav>

                <div className="prose">
                    <section id="overview">
                        <h2>Overview</h2>
                        <p>Sirius is the brightest star in Earth's night sky, shining at magnitude -1.46 — outshining the next brightest star, Canopus, by a factor of two. It sits 8.6 light-years away in Canis Major, the Greater Dog, and marks the dog's chest.</p>
                        <p>It is a young, hot, blue-white star of spectral type A, twice the mass of the Sun and 25 times more luminous. Its light has been a fixed reference point for calendars and navigation for thousands of years.</p>
                    </section>
                    <section id="the-sirius-system">
                        <h2>The Sirius System</h2>
                        <p>Sirius is not one star but two. Sirius A is accompanied by Sirius B, a white dwarf roughly the size of Earth but carrying the mass of the Sun — matter compressed so densely that a teaspoon of it would weigh tons.</p>
                        <p>Sirius B was predicted from wobbles in the orbit of A and first seen in 1862 by Alvan Graham Clark, making it the first white dwarf ever discovered. The pair orbit each other every 50 years, and the faint companion is easily lost in the glare of the primary.</p>
                    </section>
                    <section id="a-star-in-culture">
                        <h2>A Star in Culture</h2>
                        <p>The ancient Egyptians called it Sopdet and timed the flooding of the Nile by its heliacal rising, when it first appears above the horizon before dawn. To the Greeks it was Seirios, 'the scorcher', and to Rome its appearance with the Sun defined the Dog Days of summer.</p>
                        <p>It has featured in the navigation traditions of Polynesia and in the mythology of cultures from Japan to the Indigenous peoples of the Americas, largely because it is impossible to miss.</p>
                    </section>
                    <section id="how-to-see-it">
                        <h2>How to See It</h2>
                        <p>Sirius is a winter star for the Northern Hemisphere and a summer star for the Southern. The easiest route is to find Orion's belt and follow the line of its three stars down and to the left; Sirius is the brilliant point at the end of it.</p>
                        <p>Binoculars show it clearly as a single white point, but a small telescope can reveal Sirius B about 10 arcseconds from its parent — a challenging catch because of the glare, best attempted when the pair is near their closest separation.</p>
                    </section>
                </div>
            </div>
                        <nav className="object-nav" aria-label="More objects">
                <div className="container object-nav__grid">
                    <Link className="object-nav__link object-nav__link--prev" to="/objects/proxima-centauri">
                        <span className="object-nav__dir"><span className="arrow" aria-hidden="true">←</span> Previous object</span>
                        <span className="object-nav__name">Proxima Centauri</span>
                    </Link>
                    <Link className="btn btn--ghost object-nav__back" to="/explore">Back to Explore</Link>
                    <Link className="object-nav__link object-nav__link--next" to="/objects/vega">
                        <span className="object-nav__dir">Next object <span className="arrow" aria-hidden="true">→</span></span>
                        <span className="object-nav__name">Vega</span>
                    </Link>
                </div>
            </nav>
        </article>
    </main>
  );
}
