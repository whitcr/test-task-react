import React, { useEffect, useState } from 'react';
import './index.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectCards, selectError, selectIsLoading } from 'store/selector';
import { getCardsAction } from 'store/catalogSlice';
import { CardItem } from 'components/CardItem/CardItem';

import { Button } from 'components/Button';
import { Loader } from 'components/Loader/Loader';

export const CardList = () => {
  const items = useSelector(selectCards);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const [visibleCards, setVisibleCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(4);

  useEffect(() => {
    dispatch(getCardsAction());
  }, [dispatch]);

  useEffect(() => {
    setVisibleCards(items.slice(0, currentIndex));
  }, [items, currentIndex]);

  const loadMore = () => {
    setCurrentIndex(prevIndex => prevIndex + 4);
  };

  return (
    <div className="cardList">
      {isLoading && <Loader />}
      {error && <h1 className="errorMessage">{error}</h1>}
      {visibleCards.length > 0 ? (
        <ul className="tagList">
          {visibleCards.map(item => (
            <CardItem key={item._id} item={item} />
          ))}
        </ul>
      ) : (
        <p className="errorMessage">Nothing to show</p>
      )}
      {items && items.length > visibleCards.length && (
        <Button text="Load more" onClick={loadMore} />
      )}
    </div>
  );
};
