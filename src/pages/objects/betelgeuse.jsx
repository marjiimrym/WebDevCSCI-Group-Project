import { Link } from 'react-router-dom';
import image0 from '../../../assets/images/betelgeuse.png';

export default function BetelgeusePage() {
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
                            <li><span aria-current="page">Betelgeuse</span></li>
                        </ol>
                    </nav>
                    <div className="object-hero__grid">
                        <div>
                            <p className="category">Star</p>
                            <h1 id="page-title" className="object-title">Betelgeuse</h1>
                            <p className="lede object-lede">A red supergiant on the edge of stellar death, so vast it would swallow the orbit of Jupiter if placed at our Sun.</p>
                            <p className="object-index">Object 19 of 26</p>
                        </div>
                        <figure className="object-visual">
                            <span className="object-visual__orbit" aria-hidden="true"></span>
                            <img src={image0} width="800" height="800" alt="Illustration of Betelgeuse, a deep orange-red supergiant glowing against black space" />
                        </figure>
                    </div>
                </div>
            </header>

            <section className="facts-panel" aria-labelledby="facts-title">
                <div className="container">
                    <h2 id="facts-title" className="facts-panel__title">Key facts</h2>
                    <dl className="facts">
                        <div className="fact"><dt>Distance</dt><dd>~642 light-years</dd></div>
                        <div className="fact"><dt>Radius</dt><dd>~764 × Sun</dd></div>
                        <div className="fact"><dt>Mass</dt><dd>~16-19 × Sun</dd></div>
                        <div className="fact"><dt>Spectral type</dt><dd>M1-2 Ia-ab (red supergiant)</dd></div>
                        <div className="fact"><dt>Surface temperature</dt><dd>3,600 K</dd></div>
                        <div className="fact"><dt>Luminosity</dt><dd>~100,000 × Sun</dd></div>
                        <div className="fact"><dt>Age</dt><dd>~8-10 million years</dd></div>
                        <div className="fact"><dt>Variability</dt><dd>~400-day cycle</dd></div>
                    </dl>
                </div>
            </section>

            <div className="container object-body">
                <nav className="toc" aria-label="On this page">
                    <p className="toc__title">On this page</p>
                    <ol role="list">
                        <li><a href="#overview">Overview</a></li>
                        <li><a href="#the-great-dimming">The Great Dimming</a></li>
                        <li><a href="#supernova-coming">Supernova Coming</a></li>
                        <li><a href="#the-surface-itself">The Surface Itself</a></li>
                    </ol>
                </nav>

                <div className="prose">
                    <section id="overview">
                        <h2>Overview</h2>
                        <p>Betelgeuse is a red supergiant marking the shoulder of Orion and one of the largest stars visible to the naked eye. If it replaced our Sun, its surface would extend past the orbit of Jupiter and swallow Mercury, Venus, Earth and Mars.</p>
                        <p>It is a cool star — its surface glows at about 3,600 K, cooler than the Sun — but it is so vast that it radiates roughly 100,000 times more energy. Its name comes from an Arabic phrase meaning 'the armpit of the central one', fitting its position in the constellation.</p>
                    </section>
                    <section id="the-great-dimming">
                        <h2>The Great Dimming</h2>
                        <p>In late 2019 Betelgeuse dimmed dramatically, losing about 35 percent of its brightness and fading from magnitude 0.5 to 1.6 over a few weeks. Observers wondered whether it was about to explode.</p>
                        <p>Combined observations from Hubble and ALMA showed the cause: the star had ejected a cloud of material that cooled into dust and drifted across its face, blocking the light. The dimming was a surface event, not the prelude to a supernova.</p>
                    </section>
                    <section id="supernova-coming">
                        <h2>Supernova Coming</h2>
                        <p>Betelgeuse is in the final stage of its life and will end as a supernova — probably within the next 100,000 years, sudden by astronomical standards but uncertain by human ones.</p>
                        <p>At 642 light-years it poses no danger to Earth. The explosion would be bright enough to see in daylight for months and at night for years, casting shadows and outshining the Moon, before fading to leave a neutron star or black hole behind.</p>
                    </section>
                    <section id="the-surface-itself">
                        <h2>The Surface Itself</h2>
                        <p>Betelgeuse is not a smooth sphere. Its surface is a boiling patchwork of convection cells, some as large as the orbit of the Earth, which brighten and darken as hot material rises and cools.</p>
                        <p>It is also losing mass at a remarkable rate — roughly a Sun's worth of material every 10,000 years — creating a bow shock as it plows through the interstellar medium. The red glow we see is that shed material as much as the star itself.</p>
                    </section>
                </div>
            </div>
                        <nav className="object-nav" aria-label="More objects">
                <div className="container object-nav__grid">
                    <Link className="object-nav__link object-nav__link--prev" to="/objects/vega">
                        <span className="object-nav__dir"><span className="arrow" aria-hidden="true">←</span> Previous object</span>
                        <span className="object-nav__name">Vega</span>
                    </Link>
                    <Link className="btn btn--ghost object-nav__back" to="/explore">Back to Explore</Link>
                    <Link className="object-nav__link object-nav__link--next" to="/objects/rigel">
                        <span className="object-nav__dir">Next object <span className="arrow" aria-hidden="true">→</span></span>
                        <span className="object-nav__name">Rigel</span>
                    </Link>
                </div>
            </nav>
        </article>
    </main>
  );
}
