import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <main id="main" tabIndex={-1}>
        <section className="page-hero" aria-labelledby="page-title">
            <div className="sky" aria-hidden="true"></div>
            <div className="orbits" aria-hidden="true"><span className="orbits__body"></span></div>
            <div className="container">
                <p className="eyebrow">About</p>
                <h1 id="page-title" className="page-hero__title">About Cosmic Explorer</h1>
                <p className="lede page-hero__lede">A single-page web application for exploring astronomy and space discovery data — designed, built and tested in stages across the term.</p>
            </div>
        </section>

        {/* At a glance */}
        <section className="section section--tight" aria-labelledby="glance-title">
            <div className="container">
                <h2 id="glance-title" className="facts-panel__title">Project at a glance</h2>
                <dl className="facts">
                    <div className="fact"><dt>Course</dt><dd>CSCI 3230U — Web Development</dd></div>
                    <div className="fact"><dt>Term</dt><dd>Winter 2026</dd></div>
                    <div className="fact"><dt>Type</dt><dd>React single-page application</dd></div>
                    <div className="fact"><dt>Current stage</dt><dd>M1 — Static prototype</dd></div>
                </dl>
            </div>
        </section>

        {/* 01 What is it */}
        <section className="section section--tight" aria-labelledby="what-title">
            <div className="container split">
                <div className="split__head">
                    <p className="section-label"><span className="section-label__num">01</span>The product</p>
                    <h2 id="what-title" className="section-title">What is Cosmic Explorer?</h2>
                </div>
                <div className="split__body">
                    <p className="lede">Cosmic Explorer is a single-page web application for exploring astronomy and space discovery data.</p>
                    <p className="text">Browse celestial objects from our solar system and beyond. Search, filter, and discover planets, moons, stars, galaxies, and nebulae — powered by NASA's open APIs.</p>
                    <ul className="tiles" role="list">
                        <li className="tile">
                            <p className="tile__index">Search &amp; Filter</p>
                            <h3 className="tile__title">Find anything</h3>
                            <p className="tile__text">Find objects by name, filter by type (planet, moon, star, galaxy, nebula), and sort by distance, size, or name.</p>
                        </li>
                        <li className="tile">
                            <p className="tile__index">Detail Pages</p>
                            <h3 className="tile__title">Go deeper</h3>
                            <p className="tile__text">Each object has a dedicated page with rich data: specs, exploration history, surface features, and more.</p>
                        </li>
                        <li className="tile">
                            <p className="tile__index">Favourites</p>
                            <h3 className="tile__title">Keep what you find</h3>
                            <p className="tile__text">Save favourite objects locally — persisted in localStorage, accessible across sessions.</p>
                        </li>
                        <li className="tile">
                            <p className="tile__index">Responsive &amp; Accessible</p>
                            <h3 className="tile__title">Built for everyone</h3>
                            <p className="tile__text">Mobile-first design, WCAG AA contrast, semantic HTML, keyboard navigation, and screen-reader support.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        {/* 02 Why */}
        <section className="section section--tight section--alt" aria-labelledby="why-title">
            <div className="container split">
                <div className="split__head">
                    <p className="section-label"><span className="section-label__num">02</span>The reason</p>
                    <h2 id="why-title" className="section-title">Why was it built?</h2>
                </div>
                <div className="split__body">
                    <p className="lede">Cosmic Explorer is the group project for CSCI 3230U — Web Development.</p>
                    <p className="text">The course asks each team to design and build a single-page application that browses and acts on a collection of items drawn from a web service: a searchable, filterable collection of cards, each with a detail page, favourites, and data loaded from an API.</p>
                    <p className="text">Our team applied that brief to astronomy. Planets, moons, stars and galaxies form the collection; NASA's public API platform is the data source. The work is delivered in five graded milestones, so the product grows from a static prototype into a deployed application.</p>
                    <Link className="text-link" to="/milestones">See the milestones <span className="arrow" aria-hidden="true">→</span></Link>
                </div>
            </div>
        </section>

        {/* 03 Data sources */}
        <section className="section section--tight" aria-labelledby="data-title">
            <div className="container split">
                <div className="split__head">
                    <p className="section-label"><span className="section-label__num">03</span>Data sources</p>
                    <h2 id="data-title" className="section-title">Powered by NASA Open APIs.</h2>
                </div>
                <div className="split__body">
                    <p className="text">The primary data source for Cosmic Explorer is NASA's public API platform at <a className="text-link" href="https://api.nasa.gov/" rel="external">api.nasa.gov</a>. Potential endpoints and datasets include:</p>
                    <ul className="tiles" role="list">
                        <li className="tile">
                            <p className="tile__index">01</p>
                            <h3 className="tile__title">APOD</h3>
                            <p className="tile__text">Astronomy Picture of the Day.</p>
                        </li>
                        <li className="tile">
                            <p className="tile__index">02</p>
                            <h3 className="tile__title">Near Earth Objects</h3>
                            <p className="tile__text">Near Earth Object Web Service.</p>
                        </li>
                        <li className="tile">
                            <p className="tile__index">03</p>
                            <h3 className="tile__title">Mars Rover Photos</h3>
                            <p className="tile__text">Imagery from NASA's Mars rovers.</p>
                        </li>
                        <li className="tile">
                            <p className="tile__index">04</p>
                            <h3 className="tile__title">Earth Imagery</h3>
                            <p className="tile__text">Earth imagery and related datasets.</p>
                        </li>
                    </ul>
                    <p className="nasa__note">The team will finalize the specific endpoints after evaluating available data for search, filtering, and detailed object views.</p>
                </div>
            </div>
        </section>

        {/* 04 Technology */}
        <section className="section section--tight section--alt" aria-labelledby="tech-title">
            <div className="container split">
                <div className="split__head">
                    <p className="section-label"><span className="section-label__num">04</span>Technology</p>
                    <h2 id="tech-title" className="section-title">From static prototype to React app.</h2>
                </div>
                <div className="split__body">
                    <div className="tech">
                        <div className="tech__panel">
                            <p className="status status--current">Now</p>
                            <h3 className="tech__title">Static prototype</h3>
                            <ul className="tech__list" role="list">
                                <li>HTML5 — semantic, accessible markup <span>M1</span></li>
                                <li>CSS3 — custom properties, Grid, Flexbox <span>M1</span></li>
                                <li>Responsive from 375px to wide desktop <span>M1</span></li>
                            </ul>
                        </div>
                        <div className="tech__panel tech__panel--next">
                            <p className="status status--upcoming">Next</p>
                            <h3 className="tech__title">React application</h3>
                            <ul className="tech__list" role="list">
                                <li>React + Vite components and state <span>M2</span></li>
                                <li>Live NASA API with loading and error states <span>M3</span></li>
                                <li>Client-side routing for detail views <span>M3</span></li>
                                <li>Favourites persisted in localStorage <span>M3</span></li>
                                <li>Automated tests and public deployment <span>M3</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* 05 Team */}
        <section className="section" aria-labelledby="team-title">
            <div className="container">
                <div className="section-head">
                    <div>
                        <p className="section-label"><span className="section-label__num">05</span>The team</p>
                        <h2 id="team-title" className="section-title">Team Cosmic Explorer</h2>
                    </div>
                    <div className="section-head__aside">
                        <p className="text">Each member owns a vertical slice of the product, built on a shared app shell.</p>
                    </div>
                </div>
                <ul className="team" role="list">
                    <li className="member">
                        <span className="member__avatar" aria-hidden="true">M</span>
                        <h3 className="member__name">Maryam</h3>
                        <p className="member__role">Project Lead / Frontend</p>
                        <p className="member__text">Coordinates project structure, builds main Explore page, implements reusable UI components.</p>
                    </li>
                    <li className="member">
                        <span className="member__avatar" aria-hidden="true">D</span>
                        <h3 className="member__name">Dhruv</h3>
                        <p className="member__role">API / Data &amp; Search</p>
                        <p className="member__text">Integrates NASA APIs, defines data structures, handles data mapping, implements search, filter, and sort.</p>
                    </li>
                    <li className="member">
                        <span className="member__avatar" aria-hidden="true">N</span>
                        <h3 className="member__name">Nithin</h3>
                        <p className="member__role">Object Details / Missions</p>
                        <p className="member__text">Builds astronomical object detail pages, designs mission-related interfaces, creates detailed views.</p>
                    </li>
                    <li className="member">
                        <span className="member__avatar" aria-hidden="true">G</span>
                        <h3 className="member__name">Gamze</h3>
                        <p className="member__role">UI / Accessibility</p>
                        <p className="member__text">Develops responsive layouts, implements accessibility requirements, builds favourites and saved interfaces.</p>
                    </li>
                </ul>
            </div>
        </section>
    </main>
  );
}
