import { Link } from 'react-router-dom';
import image0 from '../../../assets/images/moon.png';

export default function MoonPage() {
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
                            <li><span aria-current="page">The Moon</span></li>
                        </ol>
                    </nav>
                    <div className="object-hero__grid">
                        <div>
                            <p className="category">Moon</p>
                            <h1 id="page-title" className="object-title">The Moon</h1>
                            <p className="lede object-lede">Earth's only natural satellite. Its pull drives our ocean tides, and its far side always faces away from us.</p>
                            <p className="object-index">Object 02 of 26</p>
                        </div>
                        <figure className="object-visual">
                            <span className="object-visual__orbit" aria-hidden="true"></span>
                            <img src={image0} alt="The Moon's cratered surface in grayscale" width="733" height="783" />
                        </figure>
                    </div>
                </div>
            </header>

            <section className="facts-panel" aria-labelledby="facts-title">
                <div className="container">
                    <h2 id="facts-title" className="facts-panel__title">Key facts</h2>
                    <dl className="facts">
                        <div className="fact"><dt>Distance from Earth</dt><dd>384,400 km (avg)</dd></div>
                        <div className="fact"><dt>Radius</dt><dd>1,737 km</dd></div>
                        <div className="fact"><dt>Mass</dt><dd>7.34 × 10²² kg</dd></div>
                        <div className="fact"><dt>Surface gravity</dt><dd>1.62 m/s² (16.6% of Earth)</dd></div>
                        <div className="fact"><dt>Orbital period</dt><dd>27.3 days</dd></div>
                        <div className="fact"><dt>Surface temperature</dt><dd>-173°C to 127°C</dd></div>
                        <div className="fact"><dt>Atmosphere</dt><dd>Exosphere (near vacuum)</dd></div>
                        <div className="fact"><dt>Age</dt><dd>~4.5 billion years</dd></div>
                    </dl>
                </div>
            </section>

            <div className="container object-body">
                <nav className="toc" aria-label="On this page">
                    <p className="toc__title">On this page</p>
                    <ol role="list">
                        <li><a href="#overview">Overview</a></li>
                        <li><a href="#surface">Surface Features</a></li>
                        <li><a href="#exploration">Exploration</a></li>
                        <li><a href="#effects">Effects on Earth</a></li>
                    </ol>
                </nav>

                <div className="prose">
                    <section id="overview">
                        <h2>Overview</h2>
                        <p>The Moon is Earth's only natural satellite and the fifth largest moon in the Solar System. It orbits Earth at an average distance of 384,400 km, taking about 27.3 days to complete one orbit. The Moon is tidally locked to Earth, meaning the same side always faces our planet.</p>
                        <p>Formed roughly 4.5 billion years ago — likely from debris ejected when a Mars-sized body collided with early Earth — the Moon has been a constant companion throughout our planet's history. Its surface bears the scars of billions of years of impacts, with no atmosphere to erode the craters.</p>
                    </section>

                    <section id="surface">
                        <h2>Surface Features</h2>
                        <p>The Moon's surface is divided into two main types of terrain: the dark, flat <strong>maria</strong> (Latin for "seas") and the bright, heavily cratered <strong>highlands</strong>. The maria are vast basaltic plains formed by ancient volcanic eruptions, while the highlands are older, more rugged terrain.</p>
                        <p>Notable features include the <strong>Sea of Tranquility</strong> (Apollo 11 landing site), the massive <strong>South Pole–Aitken basin</strong> (one of the largest impact craters in the Solar System), and prominent craters like <strong>Tycho</strong>, <strong>Copernicus</strong>, and <strong>Clavius</strong>. The Moon also has mountains, rilles (channels), and lava tubes.</p>
                    </section>

                    <section id="exploration">
                        <h2>Exploration</h2>
                        <p>The Moon is the only celestial body beyond Earth that humans have visited. The Soviet Union's <strong>Luna 2</strong> became the first human-made object to reach the Moon in 1959. <strong>Luna 9</strong> achieved the first soft landing in 1966.</p>
                        <p>NASA's <strong>Apollo program</strong> landed 12 astronauts on the Moon between 1969 and 1972, starting with Apollo 11 (Neil Armstrong and Buzz Aldrin). The Apollo missions returned 382 kg of lunar samples. Since then, numerous orbiters and landers from the US, USSR/Russia, China, India, Japan, and ESA have studied the Moon. NASA's <strong>Artemis program</strong> aims to return humans to the lunar surface and establish a sustained presence.</p>
                    </section>

                    <section id="effects">
                        <h2>Effects on Earth</h2>
                        <p>The Moon's gravity is the primary driver of Earth's ocean tides, creating two tidal bulges as Earth rotates. It also stabilizes Earth's axial tilt, which helps maintain a relatively stable climate over geological timescales. Without the Moon, Earth's tilt could vary chaotically, leading to extreme climate shifts.</p>
                        <p>The Moon is gradually receding from Earth at about 3.8 cm per year due to tidal interactions. In the distant past, it was much closer, making days shorter and tides more extreme. The Moon also causes a subtle lengthening of Earth's day over millions of years.</p>
                    </section>
                </div>
            </div>

                        <nav className="object-nav" aria-label="More objects">
                <div className="container object-nav__grid">
                    <Link className="object-nav__link object-nav__link--prev" to="/objects/earth">
                        <span className="object-nav__dir"><span className="arrow" aria-hidden="true">←</span> Previous object</span>
                        <span className="object-nav__name">Earth</span>
                    </Link>
                    <Link className="btn btn--ghost object-nav__back" to="/explore">Back to Explore</Link>
                    <Link className="object-nav__link object-nav__link--next" to="/objects/venus">
                        <span className="object-nav__dir">Next object <span className="arrow" aria-hidden="true">→</span></span>
                        <span className="object-nav__name">Venus</span>
                    </Link>
                </div>
            </nav>
        </article>
    </main>
  );
}
