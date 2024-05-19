import React, { useEffect, useState } from 'react';
import styles from './CardItem.module.css';
import { Button } from 'components/Button';
import { Modal } from 'components/Modal/Modal';
import { TagList } from 'components/TagList/TagList';
import { IconSVG } from 'components/Icon/Icon';
import { useDispatch, useSelector } from 'react-redux';
import { addFavoritesCard, deleteFavoritesCard } from 'store/favoritesSlice';
import { selectIsFavorite } from 'store/selector';

export const CardItem = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isFavorite = useSelector(state => selectIsFavorite(state, item));
  const dispatch = useDispatch();

  const handleClick = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleKeyUp = event => {
    if (event.key === 'Escape') {
      handleClose();
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener('keyup', handleKeyUp);
      document.body.style.overflow = 'hidden';
    } else {
      document.removeEventListener('keyup', handleKeyUp);
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, [isModalOpen]);

  const handleFavorite = () => {
    if (isFavorite) {
      dispatch(deleteFavoritesCard(item._id));
    } else {
      dispatch(addFavoritesCard(item));
    }
  };

  return (
    <li className={styles.container}>
      <div
        className={styles.imageContainer}
        style={{ backgroundImage: `url(${item.gallery[0]})` }}
      ></div>
      <div className={styles.textContainer}>
        <div className={styles.titlesContainer}>
          <p className={styles.title}>{item.name}</p>
          <p className={styles.price}>
            €{item.price}{' '}
            <span onClick={handleFavorite} className={styles.iconFavContainer}>
              <IconSVG
                name={isFavorite ? 'HeartRed' : 'HeartDefault'}
                size={20}
              />
            </span>
          </p>
        </div>
        <div className={styles.subtitleContainer}>
          <div className={styles.reviews}>
            <IconSVG name="RatingYellow" size={20} />
            <p>{item.rating}</p>
            <p>({item.reviews.length} Reviews)</p>
          </div>
          <p className={styles.location}>
            <span className={styles.icon}>
              <IconSVG name="MapPin" size={20} />
            </span>
            {item.location}
          </p>
        </div>
        <div className={styles.descriptionContainer}>
          <p className={styles.description}>{item.description}</p>
        </div>
        <div className={styles.tagsContainer}>
          <TagList details={item} full={false} />
        </div>
        <div className={styles.buttonContainer}>
          <Button text="Show more" onClick={handleClick} />
        </div>
      </div>
      {isModalOpen && <Modal item={item} handleClick={handleClose} />}
    </li>
  );
};
