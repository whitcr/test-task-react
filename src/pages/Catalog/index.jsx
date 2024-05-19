import { CardList } from 'components/CardList';
import { Filter } from 'components/Filter/Filter';
import React, { useEffect } from 'react';

export const Catalog = () => {
  useEffect(() => {
    document.title = 'Catalog';
  }, []);

  return (
    <div className="catalog">
      <Filter />
      <CardList />
    </div>
  );
};
