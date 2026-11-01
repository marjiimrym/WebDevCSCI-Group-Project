// AI-assisted - see AI-USAGE.md #4

//changing file to creater header links

import { Link, NavLink } from 'react-router-dom';

const navLinks = [
  { to: '/explore', label: 'Explore' },
  { to: '/favourites', label: 'Favourites' },
  { to: '/asteroids', label: 'Asteroids' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link className="brand" to="/" aria-label="Cosmic Explorer">
          <span className="brand__mark" aria-hidden="true"></span>
          <span className="brand__name">Cosmic Explorer</span>
        </Link>
        <nav className="site-nav" aria-label="Main">
          <ul className="site-nav__list" role="list">
            {navLinks.map((
                { to, label }) => (
              <li key={to}>
                <NavLink className="site-nav__link" to={to}>
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
