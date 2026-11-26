 // AI-assisted - see AI-USAGE.md #4
import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import AuthModal from './AuthModal.jsx';

const links = [
  ['/explore', 'Explore'],
  ['/favourites', 'Favourites'],
  ['/asteroids', 'Asteroids'],
  ['/gallery', 'Gallery'],
  ['/apod', 'Daily Image'],
  ['/space-weather', 'Space Weather'],
  ['/compare', 'Compare'],
  ['/about', 'About'],
];

export default function Header() {
  const { user, logout } = useAuth();
  const [authOpen, setAuthOpen] = useState(false);
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
          onClick={(event) => event.target.closest('a, .site-nav__auth button') && setOpen(false)}
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

            <li className="site-nav__auth">
              {user ? (
                <>
                  <span className="site-nav__user">{user.email}</span>
                  <button type="button" className="btn btn--ghost btn--sm" onClick={logout}>
                    Log out
                  </button>
                </>
              ) : (
                <button type="button" className="btn btn--primary btn--sm" onClick={() => setAuthOpen(true)}>
                  Log in
                </button>
              )}
            </li>
          </ul>
        </nav>
      </div>
      {authOpen && <AuthModal onClose={() => setAuthOpen(false)} />}
    </header>
  );
}
