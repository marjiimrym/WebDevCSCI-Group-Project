
 // AI-assisted - see AI-USAGE.md #4
import { Link, NavLink, useLocation } from 'react-router-dom';

export default function Header() {
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
          </ul>
        </nav>
      </div>
    </header>
  );
}
