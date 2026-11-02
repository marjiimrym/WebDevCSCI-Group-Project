

export default function MilestonesPage() {
  return (
    <main id="main" tabIndex={-1}>
        <section className="page-hero" aria-labelledby="page-title">
            <div className="sky" aria-hidden="true"></div>
            <div className="orbits" aria-hidden="true"><span className="orbits__body"></span></div>
            <div className="container">
                <p className="eyebrow">Milestones</p>
                <h1 id="page-title" className="page-hero__title">From proposal to product.</h1>
                <p className="lede page-hero__lede">Five graded checkpoints take Cosmic Explorer from a team and a topic to a deployed, working application.</p>
                <dl className="stats">
                    <div className="stat">
                        <dt className="stat__label">Complete</dt>
                        <dd className="stat__value">01</dd>
                    </div>
                    <div className="stat">
                        <dt className="stat__label">In progress</dt>
                        <dd className="stat__value">01</dd>
                    </div>
                    <div className="stat">
                        <dt className="stat__label">Upcoming</dt>
                        <dd className="stat__value">03</dd>
                    </div>
                </dl>
            </div>
        </section>

        <section className="section" aria-labelledby="timeline-title">
            <div className="container">
                <h2 id="timeline-title" className="visually-hidden">Milestone timeline</h2>
                <ol className="timeline" role="list">
                    <li className="timeline__item timeline__item--complete">
                        <span className="timeline__node" aria-hidden="true"></span>
                        <article className="timeline__card">
                            <div className="timeline__head">
                                <p className="timeline__num">M0</p>
                                <p className="status status--complete">Complete</p>
                            </div>
                            <h3 className="timeline__title">Team &amp; Topic</h3>
                            <p className="timeline__text">Team formed, GitHub repo created, topic locked: Cosmic Explorer using NASA APIs.</p>
                            <dl className="timeline__meta">
                                <div><dt>When</dt><dd>Lab 01</dd></div>
                                <div><dt>Weight</dt><dd>2%</dd></div>
                            </dl>
                        </article>
                    </li>

                    <li className="timeline__item timeline__item--current">
                        <span className="timeline__node" aria-hidden="true"></span>
                        <article className="timeline__card">
                            <div className="timeline__head">
                                <p className="timeline__num">M1</p>
                                <p className="status status--current">In progress</p>
                            </div>
                            <h3 className="timeline__title">Proposal &amp; Static Prototype</h3>
                            <p className="timeline__text">Written proposal, wireframes, and static HTML/CSS prototype (this site) — semantic, responsive, accessible.</p>
                            <dl className="timeline__meta">
                                <div><dt>When</dt><dd>Lab 03</dd></div>
                                <div><dt>Weight</dt><dd>8%</dd></div>
                            </dl>
                        </article>
                    </li>

                    <li className="timeline__item timeline__item--upcoming">
                        <span className="timeline__node" aria-hidden="true"></span>
                        <article className="timeline__card">
                            <div className="timeline__head">
                                <p className="timeline__num">M2</p>
                                <p className="status status--upcoming">Upcoming</p>
                            </div>
                            <h3 className="timeline__title">React Foundation</h3>
                            <p className="timeline__text">Prototype rebuilt as React app with Vite: components, props, state, event handling, list rendering on mock data.</p>
                            <dl className="timeline__meta">
                                <div><dt>When</dt><dd>Lab 06</dd></div>
                                <div><dt>Weight</dt><dd>12%</dd></div>
                            </dl>
                        </article>
                    </li>

                    <li className="timeline__item timeline__item--upcoming">
                        <span className="timeline__node" aria-hidden="true"></span>
                        <article className="timeline__card">
                            <div className="timeline__head">
                                <p className="timeline__num">M3</p>
                                <p className="status status--upcoming">Upcoming</p>
                            </div>
                            <h3 className="timeline__title">Baseline Working Project</h3>
                            <p className="timeline__text">Live API integration, search/filter/sort, routed detail views, persisted favourites, controlled form, tests, deployed.</p>
                            <dl className="timeline__meta">
                                <div><dt>When</dt><dd>Lab 10</dd></div>
                                <div><dt>Weight</dt><dd>14%</dd></div>
                            </dl>
                        </article>
                    </li>

                    <li className="timeline__item timeline__item--upcoming">
                        <span className="timeline__node" aria-hidden="true"></span>
                        <article className="timeline__card">
                            <div className="timeline__head">
                                <p className="timeline__num">M4</p>
                                <p className="status status--upcoming">Upcoming</p>
                            </div>
                            <h3 className="timeline__title">Independent Concept &amp; Video</h3>
                            <p className="timeline__text">Research &amp; integrate a novel concept (e.g., TanStack Query, Framer Motion, PWA), produce a 1–3 min demo video.</p>
                            <dl className="timeline__meta">
                                <div><dt>When</dt><dd>Exam period</dd></div>
                                <div><dt>Weight</dt><dd>8%</dd></div>
                            </dl>
                        </article>
                    </li>
                </ol>
            </div>
        </section>
    </main>
  );
}
