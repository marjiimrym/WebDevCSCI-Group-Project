// AI-assisted - see AI-USAGE.md #4

export default function Header() {
  return (
    <header className="site-header">
        <div className="container site-header__inner">
            <a className="brand" href="index.html">
                <span className="brand__mark" aria-hidden="true"></span>
                <span className="brand__name">Cosmic Explorer</span>
            </a>
            <nav className="site-nav" aria-label="Main">
                <ul className="site-nav__list" role="list">
                    <li><a className="site-nav__link" href="pages/explore.html">Explore</a></li>
                    <li><a className="site-nav__link" href="pages/asteroids.html">Asteroids</a></li>
                    <li><a className="site-nav__link" href="pages/about.html">About</a></li>
                    <li><a className="site-nav__link" href="pages/milestones.html">Milestones</a></li>
                </ul>
            </nav>
        </div>
    </header>
  );
}
