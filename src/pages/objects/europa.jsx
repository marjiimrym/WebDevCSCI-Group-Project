import { Link } from 'react-router-dom';
import image0 from '../../../assets/images/europa.png';

export default function EuropaPage() {
  return (
    <main id="main" tabIndex={-1}>
        <article className="object type-moon" aria-labelledby="page-title">
            <header className="object-hero">
                <div className="sky" aria-hidden="true"></div>
                <div className="container">
                    <nav className="breadcrumb" aria-label="Breadcrumb">
                        <ol role="list">
                            <li><Link to="/explore">Explore</Link></li>
                            <li>Moons</li>
                            <li><span aria-current="page">Europa</span></li>
                        </ol>
                    </nav>
                    <div className="object-hero__grid">
                        <div>
                            <p className="category">Moon</p>
                            <h1 id="page-title" className="object-title">Europa</h1>
                            <p className="lede object-lede">An icy Jovian moon hiding a global saltwater ocean beneath its shell — a leading candidate for life beyond Earth.</p>
                            <p className="object-index">Object 08 of 26</p>
                        </div>
                        <figure className="object-visual">
                            <span className="object-visual__orbit" aria-hidden="true"></span>
                            <img src={image0} width="800" height="800" alt="Illustration of Europa, a pale cracked ice sphere against black space" />
                        </figure>
                    </div>
                </div>
            </header>

            <section className="facts-panel" aria-labelledby="facts-title">
                <div className="container">
                    <h2 id="facts-title" className="facts-panel__title">Key facts</h2>
                    <dl className="facts">
                        <div className="fact"><dt>Distance from Earth</dt><dd>779 million km (avg)</dd></div>
                        <div className="fact"><dt>Radius</dt><dd>1,561 km</dd></div>
                        <div className="fact"><dt>Surface gravity</dt><dd>1.31 m/s²</dd></div>
                        <div className="fact"><dt>Orbital period</dt><dd>3.55 days</dd></div>
                        <div className="fact"><dt>Surface temperature</dt><dd>-160°C</dd></div>
                        <div className="fact"><dt>Ice shell</dt><dd>15-25 km thick</dd></div>
                        <div className="fact"><dt>Ocean depth</dt><dd>~100 km</dd></div>
                        <div className="fact"><dt>Discovered</dt><dd>1610, Galileo Galilei</dd></div>
                    </dl>
                </div>
            </section>

            <div className="container object-body">
                <nav className="toc" aria-label="On this page">
                    <p className="toc__title">On this page</p>
                    <ol role="list">
                        <li><a href="#overview">Overview</a></li>
                        <li><a href="#the-ocean-beneath">The Ocean Beneath</a></li>
                        <li><a href="#the-icy-surface">The Icy Surface</a></li>
                        <li><a href="#exploration">Exploration</a></li>
                    </ol>
                </nav>

                <div className="prose">
                    <section id="overview">
                        <h2>Overview</h2>
                        <p>Europa is the fourth-largest of Jupiter's moons and the smoothest solid surface in the solar system. Almost no impact craters scar its face, which means the ice is geologically young and constantly being renewed.</p>
                        <p>It is one of four Galilean moons Galileo Galilei discovered in 1610, a find that helped end the idea that everything orbits Earth.</p>
                    </section>
                    <section id="the-ocean-beneath">
                        <h2>The Ocean Beneath</h2>
                        <p>Europa hides a global saltwater ocean under an ice shell 15 to 25 kilometres thick, holding perhaps 100 kilometres of depth — roughly twice the volume of all Earth's oceans combined.</p>
                        <p>The ocean stays liquid because Jupiter's gravity stretches and squeezes the moon as it orbits, generating heat through friction. Measurements of Europa's induced magnetic field by the Galileo spacecraft are the strongest evidence that a conductive, salty layer lies beneath the surface.</p>
                    </section>
                    <section id="the-icy-surface">
                        <h2>The Icy Surface</h2>
                        <p>The surface is crossed by long reddish streaks called lineae, cracks in the ice that have opened and filled with material from below, some stretching thousands of kilometres. Elsewhere, ice blocks appear to have drifted and refrozen into chaotic terrain.</p>
                        <p>Those fractures, and the rusty colouring of the surface material, suggest the ocean is not sealed off — chemistry from the interior reaches the outside, which makes the surface a place to sample without ever digging.</p>
                    </section>
                    <section id="exploration">
                        <h2>Exploration</h2>
                        <p>NASA's Galileo orbiter studied Europa through the 1990s, and Hubble reported possible water plumes erupting in 2012 and 2014. Juno flew past in September 2022, returning the closest images since Galileo.</p>
                        <p>Europa Clipper launched in October 2024 and will arrive at Jupiter in 2030 for a series of close flybys. Its instruments will measure the ocean, the ice shell and surface chemistry to answer a single question: is this world habitable.</p>
                    </section>
                </div>
            </div>
                        <nav className="object-nav" aria-label="More objects">
                <div className="container object-nav__grid">
                    <Link className="object-nav__link object-nav__link--prev" to="/objects/jupiter">
                        <span className="object-nav__dir"><span className="arrow" aria-hidden="true">←</span> Previous object</span>
                        <span className="object-nav__name">Jupiter</span>
                    </Link>
                    <Link className="btn btn--ghost object-nav__back" to="/explore">Back to Explore</Link>
                    <Link className="object-nav__link object-nav__link--next" to="/objects/io">
                        <span className="object-nav__dir">Next object <span className="arrow" aria-hidden="true">→</span></span>
                        <span className="object-nav__name">Io</span>
                    </Link>
                </div>
            </nav>
        </article>
    </main>
  );
}
