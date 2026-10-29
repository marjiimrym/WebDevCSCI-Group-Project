// AI-assisted - see AI-USAGE.md #5
import heroImage from '../../assets/images/openpage.jpg';
import DiscoveryCard from '../components/DiscoveryCard.jsx';
import SpaceIcon from '../components/SpaceIcon.jsx';
import { categories, categoryCount, featuredObjects, objectCount, saturnImage, galaxyImage } from '../data/landing.js';
import { useHeroParallax, useSectionReveal } from '../hooks/useLandingMotion.js';

const steps = [
  { title: 'Follow your curiosity.', label: 'Discover', icon: 'orbit', text: 'Wander through planets, moons, stars, galaxies and nebulae. See what catches your eye.', link: 'Browse the catalogue', href: 'pages/explore.html' },
  { title: 'Find a closer encounter.', label: 'Search', icon: 'search', text: 'Find an asteroid by name in our saved NASA sample. Catalogue-wide search is coming next.', link: 'Search asteroids', href: 'pages/asteroids.html' },
  { title: 'Look a little closer.', label: 'Filter', icon: 'filter', text: 'Filter sample asteroids by hazard status and compare approach dates, size, speed and distance.', link: 'Try asteroid filters', href: 'pages/asteroids.html' },
  { title: 'Go beyond the surface.', label: 'Learn', icon: 'star', text: 'Get to know each world through key facts, detailed profiles and the science behind it.', link: 'Meet our nearest neighbour', href: 'pages/moon.html' },
];

function SectionLabel({ number, children }) {
  return <p className="obs-label"><span>{number}</span><span className="obs-label__line" aria-hidden="true" />{children}</p>;
}

export default function HomePage({ motionEnabled, reducedMotion, onToggleMotion }) {
  const heroRef = useHeroParallax(motionEnabled);
  const mainRef = useSectionReveal(motionEnabled);

  return (
    <main id="main" className="obs-home" ref={mainRef} tabIndex={-1}>
      <section className="observatory-hero" ref={heroRef} aria-labelledby="hero-title">
        <div className="hero-backdrop" aria-hidden="true">
          <img src={heroImage} alt="" width="1200" height="675" decoding="async" />
        </div>
        <div className="hero-stars ambient" aria-hidden="true" />
        <div className="obs-container hero-layout">
          <div className="hero-copy">
            <p className="hero-kicker"><span className="status-dot" /> YOUR WINDOW INTO THE COSMOS</p>
            <h1 id="hero-title">Explore the{' '}<em>Universe.</em></h1>
            <p className="hero-description">Somewhere, something incredible is waiting to be discovered. Start with the worlds in our own cosmic neighbourhood.</p>
            <div className="obs-actions">
              <a className="obs-button obs-button--primary" href="pages/explore.html">Launch Explorer <SpaceIcon name="arrow" /></a>
              <a className="obs-button obs-button--outline" href="#discover">Discover More <span aria-hidden="true">↓</span></a>
            </div>
            <p className="hero-topics"><span>NASA DATA</span><span>SPACE DISCOVERY</span><span>ASTRONOMY</span></p>
          </div>

          <div className="hero-observation">
            <div className="hero-orbit hero-orbit--outer ambient" aria-hidden="true"><i /></div>
            <div className="hero-orbit hero-orbit--inner" aria-hidden="true" />
            <div className="hero-crosshair hero-crosshair--one" aria-hidden="true">+</div>
            <div className="hero-crosshair hero-crosshair--two" aria-hidden="true">+</div>
            <div className="hero-planet">
              <img src={saturnImage} alt="Saturn, its softly banded globe encircled by broad, luminous rings" width="733" height="783" fetchPriority="high" decoding="async" />
            </div>
            <div className="observation-label"><span className="observation-label__rule" /><span>IN FOCUS / SATURN<br /><small>A world beyond the ordinary</small></span></div>
            <a href="pages/saturn.html" className="observation-link" aria-label="Explore Saturn"><SpaceIcon name="external" /></a>
            <div className="hero-note hero-note--collection"><SpaceIcon name="orbit" /><div><strong>{objectCount}</strong><span>worlds to discover</span></div><span className="hero-note__corner" aria-hidden="true">↗</span></div>
            <div className="hero-note hero-note--categories"><span className="status-dot" /><span>{categoryCount} categories. Endless curiosity.</span></div>
          </div>
        </div>

        <div className="obs-container hero-bottom">
          <a className="obs-scroll" href="#discover"><span className="obs-scroll__track"><i className="ambient" /></span>SCROLL TO EXPLORE</a>
          <span className="hero-bottom__note">A FIELD GUIDE TO THE EXTRAORDINARY</span>
          <button className="motion-toggle" onClick={onToggleMotion} type="button" disabled={reducedMotion} aria-label={reducedMotion ? 'Motion reduced by system preference' : motionEnabled ? 'Pause ambient motion' : 'Enable ambient motion'}>
            <span aria-hidden="true">{motionEnabled ? 'Ⅱ' : '▷'}</span>{reducedMotion ? 'Reduced motion' : motionEnabled ? 'Pause motion' : 'Enable motion'}
          </button>
        </div>
      </section>

      <section id="discover" className="catalogue-intro" aria-labelledby="intro-title">
        <div className="obs-container">
          <div className="catalogue-intro__heading" data-reveal><SpaceIcon name="star" /><h2 id="intro-title">One universe. <em>So much to discover.</em></h2><p>{objectCount} curated objects. {categoryCount} ways to see the cosmos.</p></div>
          <ul className="category-strip" role="list" aria-label="Catalogue categories" data-reveal>
            {categories.map((category) => <li key={category.name}><span className={`category-symbol category-symbol--${category.name.toLowerCase()}`} aria-hidden="true" /><span>{category.label}</span><span className="category-strip__count">{String(category.count).padStart(2, '0')}</span></li>)}
          </ul>
        </div>
      </section>

      <section className="obs-section featured-section" aria-labelledby="featured-title">
        <div className="obs-container">
          <div className="obs-section-head" data-reveal>
            <div><SectionLabel number="01">FEATURED DISCOVERIES</SectionLabel><h2 id="featured-title">Extraordinary worlds.<br /><em>Just a little closer.</em></h2></div>
            <div className="obs-section-head__aside"><p>From our nearest neighbour to a distant spiral galaxy. Get to know the places that make our universe remarkable.</p><a className="obs-text-link" href="pages/explore.html">View all {objectCount} objects <SpaceIcon name="arrow" /></a></div>
          </div>
          <div className="discovery-grid">
            {featuredObjects.map((object, index) => <DiscoveryCard key={object.id} object={object} index={index} />)}
          </div>
          <p className="gallery-footnote"><span className="status-dot" />A curated collection, made for curious minds.<span>OUR COSMIC NEIGHBOURHOOD & BEYOND</span></p>
        </div>
      </section>

      <section className="obs-section experience-section" aria-labelledby="experience-title">
        <div className="obs-container">
          <div className="obs-section-head" data-reveal><div><SectionLabel number="02">THE DISCOVERY EXPERIENCE</SectionLabel><h2 id="experience-title">Let curiosity <em>be your compass.</em></h2></div><p className="obs-section-head__aside">You don’t need a telescope.<br />Just a sense of wonder.</p></div>
          <ol className="experience-grid" role="list">
            {steps.map((step, index) => <li className="experience-step" key={step.label} data-reveal>
              <div className="experience-step__top"><span className="experience-step__icon"><SpaceIcon name={step.icon} /></span><span>0{index + 1}</span></div>
              <p className="experience-step__label">{step.label}</p><h3>{step.title}</h3><p className="experience-step__description">{step.text}</p><a className="obs-text-link" href={step.href}>{step.link}<SpaceIcon name="arrow" /></a>
            </li>)}
          </ol>
        </div>
      </section>

      <section className="obs-section nasa-section" aria-labelledby="nasa-title">
        <div className="obs-container nasa-layout">
          <div className="nasa-story" data-reveal><SectionLabel number="03">SCIENCE, OPEN TO EVERYONE</SectionLabel><div className="nasa-orbit-mark" aria-hidden="true"><SpaceIcon name="orbit" /></div><h2 id="nasa-title">Real discoveries.<br /><em>Open possibilities.</em></h2><p>Space belongs to all of us. We’re building on NASA’s publicly available data to bring a little more of it within reach.</p><a className="obs-text-link" href="https://api.nasa.gov/" rel="external">Explore NASA Open APIs <SpaceIcon name="external" /></a><p className="nasa-disclaimer">Independent project. Not affiliated with or endorsed by NASA.</p></div>
          <div className="nasa-resources">
            <article className="nasa-resource nasa-resource--available" data-reveal><SpaceIcon name="asteroid" /><div><span className="resource-status">SAMPLE DATA AVAILABLE</span><h3>Near Earth Objects</h3><p>Explore saved NASA asteroid data, including close approaches, estimated sizes and hazard classifications. Live updates are planned.</p><a className="obs-text-link" href="pages/asteroids.html">Explore the asteroid sample <SpaceIcon name="arrow" /></a></div></article>
            <article className="nasa-resource" data-reveal><SpaceIcon name="image" /><div><span className="resource-status resource-status--planned">PLANNED INTEGRATION</span><h3>Astronomy Picture of the Day</h3><p>A new perspective on the cosmos, with the story behind the image. A daily discovery experience is on our horizon.</p></div></article>
            <article className="nasa-resource" data-reveal><SpaceIcon name="star" /><div><span className="resource-status resource-status--planned">EXPLORE THE SOURCE</span><h3>A universe of knowledge</h3><p>Discover astronomical imagery, missions and scientific resources directly from NASA.</p><a className="obs-text-link" href="https://science.nasa.gov/universe/" rel="external">Visit NASA Science <SpaceIcon name="external" /></a></div></article>
            <a className="nasa-roadmap" href="pages/milestones.html">See what’s next for Cosmic Explorer <SpaceIcon name="arrow" /></a>
          </div>
        </div>
      </section>

      <section className="journey-section" aria-labelledby="journey-title">
        <img className="journey-image" src={galaxyImage} alt="" width="733" height="783" loading="lazy" decoding="async" />
        <div className="journey-orbit ambient" aria-hidden="true" />
        <div className="obs-container journey-content" data-reveal><SpaceIcon name="star" /><p className="obs-label">THE UNIVERSE IS WAITING</p><h2 id="journey-title">Your journey through<br />the cosmos <em>starts here.</em></h2><p>Explore extraordinary worlds, uncover astronomical discoveries,<br className="desktop-break" /> and experience the wonders of our universe.</p><div className="obs-actions"><a className="obs-button obs-button--primary" href="pages/explore.html">Start Exploring <SpaceIcon name="arrow" /></a><a className="obs-button obs-button--outline" href="pages/asteroids.html">Discover Asteroids <SpaceIcon name="external" /></a></div><span className="journey-signoff">STAY CURIOUS. LOOK UP.</span></div>
      </section>
    </main>
  );
}
