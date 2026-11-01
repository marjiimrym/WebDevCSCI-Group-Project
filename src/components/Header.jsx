// AI-assisted - see AI-USAGE.md #4
import { Link } from 'react-router-dom';
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
                    <li><Link className="site-nav__link" to="/">Explore</Link></li>
                    <li><a className="site-nav__link" href="/pages/asteroids.html">Asteroids</a>
                    </li>
                    <li>
                    <a className="site-nav__link" href="/pages/about.html">
                        About
                    </a>
                    </li>
                    <li>
                    <a className="site-nav__link" href="/pages/contact.html">
                        Contact
                    </a>
                    </li>
                    <li>
                    <a className="site-nav__link" href="/pages/milestones.html">
                        Milestones
                    </a>
</li>
                </ul>
            </nav>
        </div>
    </header>
  );
}
