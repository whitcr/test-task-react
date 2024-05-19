import { FavoritesList } from 'components/FavoritesList';
import React, { useEffect } from 'react';

export const Favorites = () => {
  useEffect(() => {
    document.title = 'Favorites';
  }, []);

  return <FavoritesList />;
};
