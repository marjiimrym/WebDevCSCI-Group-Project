import { Link } from 'react-router-dom';
// AI-assisted - see AI-USAGE.md #4

export default function Footer() {
  return (
    <footer className="site-footer">
        <div className="container">
            <div className="footer__grid">
                <div className="footer__brand">
                    <Link className="brand" to="/">
                        <span className="brand__mark" aria-hidden="true"></span>
                        <span className="brand__name">Cosmic Explorer</span>
                    </Link>
                    <p className="footer__tagline">Exploring the universe, one discovery at a time.</p>
                </div>
                <nav className="footer__col" aria-label="Footer">
                    <h2 className="footer__heading">Navigate</h2>
                    <ul className="footer__list" role="list">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/explore">Explore</Link></li>
                        <li><Link to="/favourites">Favourites</Link></li>
                        <li><Link to="/asteroids">Asteroids</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/milestones">Milestones</Link></li>
                    </ul>
                </nav>
                <div className="footer__col">
                    <h2 className="footer__heading">Course</h2>
                    <p>CSCI 3230U — Web Development</p>
                    <p>Winter 2026 · Group project</p>
                </div>
                <div className="footer__col">
                    <h2 className="footer__heading">Data</h2>
                    <p>Data source: <a href="https://api.nasa.gov/" rel="external">NASA Open APIs</a></p>
                    <p>Not affiliated with or endorsed by NASA.</p>
                </div>
            </div>
            <div className="footer__base">
                <p>© 2026 Team Cosmic Explorer</p>
                <p>Discover the cosmos with our local catalogue.</p>
            </div>
        </div>
    </footer>
  );
}
