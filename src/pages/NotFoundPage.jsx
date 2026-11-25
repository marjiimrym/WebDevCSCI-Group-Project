import { Link } from 'react-router-dom';
import HeroBackdrop from '../components/ui/HeroBackdrop.jsx';

export default function NotFoundPage({ object = false }) {
  return (
    <main id="main" tabIndex={-1}>
      <section className="page-hero page-hero--fill" aria-labelledby="page-title">
        <HeroBackdrop variant="article" />
        <div className="container">
          <p className="eyebrow">404</p>
          <h1 id="page-title" className="page-hero__title">{object ? 'Object not found' : 'Page not found'}</h1>
          <p className="lede page-hero__lede">
            {object
              ? 'That object isn’t in the catalogue. It may have been renamed, or the link has a typo.'
              : 'Nothing orbits at this address. The link may be old or mistyped.'}
          </p>
          <div className="hero__actions">
            <Link className="btn btn--primary btn--lg" to="/explore">Back to Explore</Link>
            <Link className="btn btn--ghost btn--lg" to="/">Go to the home page</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
