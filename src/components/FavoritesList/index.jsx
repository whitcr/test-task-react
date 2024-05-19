import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import { selectFavorites } from 'store/selector';

import { CardItem } from 'components/CardItem/CardItem';

export const FavoritesList = () => {
  const items = useSelector(selectFavorites);

  const [visibleCards, setVisibleCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(4);

  useEffect(() => {
    setVisibleCards(items.slice(0, currentIndex));
  }, [items, currentIndex]);

  const loadMore = () => {
    setCurrentIndex(currentIndex + 4);
  };

  return (
    <>
      {visibleCards.length > 0 ? (
        <ul className="favList">
          {visibleCards.map(item => (
            <CardItem key={item._id} item={item} />
          ))}
        </ul>
      ) : (
        <p className="errorMessage">Nothing to show</p>
      )}
      {items && items.length > visibleCards.length && (
        <button onClick={loadMore}>Load more</button>
      )}
    </>
  );
};
