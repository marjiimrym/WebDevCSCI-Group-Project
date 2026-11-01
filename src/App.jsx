
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import ExplorePage from './pages/ExplorePage.jsx';
import FavouritesPage from './pages/FavouritesPage.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ObjectDetailPage from './pages/ObjectDetailPage.jsx';
import { useState } from 'react';

export default function App() {
  const [favouriteIds, setFavouriteIds] = useState([]);

  function toggleFavourite(id) {
    setFavouriteIds((currentIds) =>
      currentIds.includes(id)
        ? currentIds.filter((currentId) => currentId !== id)
        : [...currentIds, id],
    );
  }

  return (
    <BrowserRouter>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>

      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <ExplorePage
              favouriteIds={favouriteIds}
              onToggleFavourite={toggleFavourite}
            />
          }
        />

        <Route
          path="/objects/:id"
          element={<ObjectDetailPage />}
        />

        <Route
          path="/favourites"
          element={
            <FavouritesPage
              favouriteIds={favouriteIds}
              onToggleFavourite={toggleFavourite}
            />
          }
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
