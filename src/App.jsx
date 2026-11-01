import { Suspense, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import RouteEffects from './components/RouteEffects.jsx';
import HomePage from './pages/HomePage.jsx';
import ExplorePage from './pages/ExplorePage.jsx';
import FavouritesPage from './pages/FavouritesPage.jsx';
import ObjectDetailPage from './pages/ObjectDetailPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import MilestonesPage from './pages/MilestonesPage.jsx';
import AsteroidsPage from './pages/AsteroidsPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import legacyRoutes from './data/legacyRoutes.json';

function LegacyRedirect({ to }) {
  const { search, hash } = useLocation();
  return <Navigate to={`${to}${search}${hash}`} replace />;
}

export default function App() {
  const [favouriteIds, setFavouriteIds] = useState([]);

  function toggleFavourite(id) {
    setFavouriteIds((currentIds) => currentIds.includes(id)
      ? currentIds.filter((currentId) => currentId !== id)
      : [...currentIds, id]);
  }

  return (
    <BrowserRouter>
      <a className="skip-link" href="#main">Skip to main content</a>
      <Header />
      <Suspense fallback={<main id="main" className="section" tabIndex={-1}><p className="container" role="status">Loading object…</p></main>}>
        <RouteEffects />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/explore" element={<ExplorePage favouriteIds={favouriteIds} onToggleFavourite={toggleFavourite} />} />
          <Route path="/objects/:id" element={<ObjectDetailPage />} />
          <Route path="/favourites" element={<FavouritesPage favouriteIds={favouriteIds} onToggleFavourite={toggleFavourite} />} />
          <Route path="/asteroids" element={<AsteroidsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/milestones" element={<MilestonesPage />} />
          {Object.entries(legacyRoutes).map(([file, to]) => (
            <Route key={file} path={file === 'index.html' ? '/index.html' : `/pages/${file}`} element={<LegacyRedirect to={to} />} />
          ))}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}
