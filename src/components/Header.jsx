// AI-assisted - see AI-USAGE.md #5
import { useEffect, useRef, useState } from 'react';
import SpaceIcon from './SpaceIcon.jsx';

const links = [['Explore', 'explore'], ['Asteroids', 'asteroids'], ['About', 'about'], ['Milestones', 'milestones']];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 761px)');
    const closeOnDesktop = () => { if (desktop.matches) setOpen(false); };
    desktop.addEventListener('change', closeOnDesktop);
    return () => desktop.removeEventListener('change', closeOnDesktop);
  }, []);

  useEffect(() => {
    if (!open) return;
    const dismiss = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const outside = (event) => {
      if (!headerRef.current?.contains(event.target)) setOpen(false);
    };
    document.addEventListener('keydown', dismiss);
    document.addEventListener('pointerdown', outside);
    return () => {
      document.removeEventListener('keydown', dismiss);
      document.removeEventListener('pointerdown', outside);
    };
  }, [open]);

  return (
    <header ref={headerRef} className={`obs-header${scrolled ? ' is-scrolled' : ''}${open ? ' menu-is-open' : ''}`}
      onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false); }}>
      <div className="obs-container obs-header__inner">
        <a className="brand" href="index.html" aria-current="page" aria-label="Cosmic Explorer">
          <span className="brand__mark" aria-hidden="true" />
          <span className="brand__name">Cosmic Explorer<span className="obs-brand-caption">A little closer to the extraordinary</span></span>
        </a>
        <button ref={toggleRef} className="obs-menu-toggle" type="button" aria-expanded={open} aria-controls="main-navigation" aria-label={open ? 'Close navigation' : 'Open navigation'} onClick={() => setOpen(!open)}>
          <span /><span />
        </button>
        <nav id="main-navigation" className="obs-nav" aria-label="Main">
          <ul role="list">
            {links.map(([label, path]) => <li key={path}><a href={`pages/${path}.html`} onClick={() => setOpen(false)}>{label}</a></li>)}
          </ul>
          <a className="obs-nav-cta" href="pages/explore.html">Enter the observatory <SpaceIcon name="external" /></a>
        </nav>
      </div>
    </header>
  );
}
