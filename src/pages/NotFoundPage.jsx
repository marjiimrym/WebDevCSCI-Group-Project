import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <main id="main" className="section">
      <div className="container">
        <h1>Page not found</h1>
        <p>We couldn't find that page.</p>
        <Link to="/">Back to home</Link>
      </div>
    </main>
  );
}
