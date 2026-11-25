 // AI-assisted - see AI-USAGE.md #4
import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const links = [
  ['/explore', 'Explore'],
  ['/favourites', 'Favourites'],
  ['/asteroids', 'Asteroids'],
  ['/about', 'About'],
  ['/milestones', 'Milestones'],
];

export default function Header() {
  const { pathname } = useLocation();
  // The menu button only shows on phones; on wider screens the list is always visible.
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header" onKeyDown={(event) => event.key === 'Escape' && setOpen(false)}>
      <div className="container site-header__inner">
        <Link className="brand" to="/" aria-label="Cosmic Explorer" onClick={() => setOpen(false)}>
          <span className="brand__mark" aria-hidden="true"></span>
          <span className="brand__name">Cosmic Explorer</span>
        </Link>

        <nav
          className={`site-nav${open ? ' is-open' : ''}`}
          aria-label="Main"
          onClick={(event) => event.target.closest('a') && setOpen(false)}
        >
          <button
            className="nav-toggle"
            type="button"
            aria-expanded={open}
            aria-controls="site-nav-list"
            onClick={() => setOpen((isOpen) => !isOpen)}
          >
            <span className="nav-toggle__icon" aria-hidden="true"></span>
            Menu
          </button>
          <ul id="site-nav-list" className="site-nav__list" role="list">
            {links.map(([to, label]) => (
              <li key={to}>
                <NavLink
                  className={`site-nav__link${to === '/explore' && pathname.startsWith('/objects/') ? ' is-active' : ''}`}
                  to={to}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
