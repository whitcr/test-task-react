import { Header } from 'layouts/header';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Catalog } from '../pages/Catalog';
import { Favorites } from '../pages/Favorites';
import { Loader } from './Loader/Loader';

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
