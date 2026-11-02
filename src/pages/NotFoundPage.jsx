import { Link } from 'react-router-dom';

export default function NotFoundPage({ object = false }) {
  return (
    <main id="main" className="section" tabIndex={-1}>
      <div className="container">
        <h1>{object ? 'Object not found' : 'Page not found'}</h1>
        <p>We couldn’t find what you were looking for.</p>
        <Link className="btn btn--primary" to="/explore">Back to Explore</Link>
      </div>
    </main>
  );
}
