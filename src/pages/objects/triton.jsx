import { Link } from 'react-router-dom';
import image0 from '../../../assets/images/triton.svg';

export default function TritonPage() {
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
                            <li><span aria-current="page">Triton</span></li>
                        </ol>
                    </nav>
                    <div className="object-hero__grid">
                        <div>
                            <p className="category">Moon</p>
                            <h1 id="page-title" className="object-title">Triton</h1>
                            <p className="lede object-lede">Neptune's largest moon orbits backwards, and its frozen surface erupts geysers of nitrogen — a captured Kuiper Belt world.</p>
                            <p className="object-index">Object 15 of 26</p>
                        </div>
                        <figure className="object-visual">
                            <span className="object-visual__orbit" aria-hidden="true"></span>
                            <img src={image0} width="800" height="800" alt="Illustration of Triton, a pale blue-white frozen moon against black space" />
                        </figure>
                    </div>
                </div>
            </header>

            <section className="facts-panel" aria-labelledby="facts-title">
                <div className="container">
                    <h2 id="facts-title" className="facts-panel__title">Key facts</h2>
                    <dl className="facts">
                        <div className="fact"><dt>Distance from Earth</dt><dd>4.50 billion km (avg)</dd></div>
                        <div className="fact"><dt>Radius</dt><dd>1,353 km</dd></div>
                        <div className="fact"><dt>Surface gravity</dt><dd>0.78 m/s²</dd></div>
                        <div className="fact"><dt>Orbital period</dt><dd>5.88 days (retrograde)</dd></div>
                        <div className="fact"><dt>Surface temperature</dt><dd>-235°C (coldest measured)</dd></div>
                        <div className="fact"><dt>Atmosphere</dt><dd>Thin nitrogen</dd></div>
                        <div className="fact"><dt>Surface features</dt><dd>Nitrogen geysers</dd></div>
                        <div className="fact"><dt>Discovered</dt><dd>1846, William Lassell</dd></div>
                    </dl>
                </div>
            </section>

            <div className="container object-body">
                <nav className="toc" aria-label="On this page">
                    <p className="toc__title">On this page</p>
                    <ol role="list">
                        <li><a href="#overview">Overview</a></li>
                        <li><a href="#a-frozen-surface">A Frozen Surface</a></li>
                        <li><a href="#orbital-decay">Orbital Decay</a></li>
                        <li><a href="#exploration">Exploration</a></li>
                    </ol>
                </nav>

                <div className="prose">
                    <section id="overview">
                        <h2>Overview</h2>
                        <p>Triton is Neptune's largest moon, holding 99.5 percent of the mass of the entire Neptunian satellite system, and it orbits in the opposite direction to Neptune's rotation. That backwards orbit is the giveaway: Triton did not form here.</p>
                        <p>It is almost certainly a captured Kuiper Belt object — a dwarf-planet-like world that strayed too close and was taken. Its surface composition and density match those of Pluto more closely than they match Neptune's other moons.</p>
                    </section>
                    <section id="a-frozen-surface">
                        <h2>A Frozen Surface</h2>
                        <p>Triton's surface is among the coldest measured anywhere, at -235°C, covered in nitrogen, carbon monoxide and methane ices. Much of it is 'cantaloupe terrain', a dimpled landscape unlike anywhere else, and craters are rare and small — the surface is young.</p>
                        <p>Voyager 2 photographed dark plumes rising 8 kilometres high and streaming downwind for 150 kilometres: geysers of nitrogen gas carrying dark dust, erupting as sunlight warms buried volatile ices.</p>
                    </section>
                    <section id="orbital-decay">
                        <h2>Orbital Decay</h2>
                        <p>Because Triton orbits backwards, tides are draining its orbital energy rather than adding it. The moon is slowly spiralling inward, and in roughly 3.6 billion years it will cross the Roche limit.</p>
                        <p>There Neptune's gravity will pull it apart, building a ring of debris far brighter than Neptune's present rings — a glimpse of how rings around giant planets may have formed in the first place.</p>
                    </section>
                    <section id="exploration">
                        <h2>Exploration</h2>
                        <p>Voyager 2's flyby in August 1989 remains the only visit. It lasted a few hours, yet revealed geysers, a tenuous atmosphere and a strange world nobody had predicted.</p>
                        <p>A proposed Neptune Orbiter would study Triton's interior — models suggest a liquid water ocean may survive from radioactive heating — and determine whether this captured Kuiper Belt world could support conditions for life.</p>
                    </section>
                </div>
            </div>
                        <nav className="object-nav" aria-label="More objects">
                <div className="container object-nav__grid">
                    <Link className="object-nav__link object-nav__link--prev" to="/objects/neptune">
                        <span className="object-nav__dir"><span className="arrow" aria-hidden="true">←</span> Previous object</span>
                        <span className="object-nav__name">Neptune</span>
                    </Link>
                    <Link className="btn btn--ghost object-nav__back" to="/explore">Back to Explore</Link>
                    <Link className="object-nav__link object-nav__link--next" to="/objects/proxima-centauri">
                        <span className="object-nav__dir">Next object <span className="arrow" aria-hidden="true">→</span></span>
                        <span className="object-nav__name">Proxima Centauri</span>
                    </Link>
                </div>
            </nav>
        </article>
    </main>
  );
}
