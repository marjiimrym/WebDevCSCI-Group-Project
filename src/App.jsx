import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Layout from './components/Layout.jsx';
import ExplorePage from './pages/ExplorePage.jsx';
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

    //changing this section so that Header and Footer and gone from App.jsx
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
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
        </Route>
      </Routes>
    </BrowserRouter>









  );
}