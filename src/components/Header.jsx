
 // AI-assisted - see AI-USAGE.md #4
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext.jsx';
import AuthModal from './AuthModal.jsx';

export default function Header() {
  const { user, logout } = useAuth();
  const [authOpen, setAuthOpen] = useState(false);
  const { pathname } = useLocation();
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link className="brand" to="/" aria-label="Cosmic Explorer">
          <span className="brand__mark" aria-hidden="true"></span>
          <span className="brand__name">Cosmic Explorer</span>
        </Link>

        <nav className="site-nav" aria-label="Main">
          <ul className="site-nav__list" role="list">
            <li>
              <NavLink className={`site-nav__link${pathname.startsWith('/objects/') ? ' is-active' : ''}`} to="/explore">
                Explore
              </NavLink>
            </li>
            <li>
              <NavLink className="site-nav__link" to="/favourites">
                Favourites
              </NavLink>
            </li>
            <li>
              <NavLink className="site-nav__link" to="/asteroids">
                Asteroids
              </NavLink>
            </li>
            <li>
              <NavLink className="site-nav__link" to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink className="site-nav__link" to="/milestones">
                Milestones
              </NavLink>
            </li>

            <li className="site-nav__auth">
              {user ? (
                <>
                  <span className="site-nav__user">{user.email}</span>
                  <button type="button" className="btn btn--ghost btn--sm" onClick={logout}>
                    Log out
                  </button>
                </>
              ) : (
                <button
                  type="button"
                  className="btn btn--primary btn--sm"
                  onClick={() => { console.log('login clicked'); setAuthOpen(true); }}
                >
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
