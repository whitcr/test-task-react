import React from 'react';
import styles from './ReviewsItem.module.css';
import { IconSVG } from 'components/Icon/Icon';

const MAX_RATING = 5;

export const ReviewItem = ({ name, rating, text }) => {
  const ratingArray = Array(MAX_RATING).fill();

  return (
    <div className={styles.review}>
      <div className={styles.reviewHeader}>
        <div className={styles.row}>
          <img
            src="https://via.placeholder.com/70"
            alt="Reviewer"
            className={styles.image}
          />
        </div>
        <div className={styles.row}>
          <h3>{name}</h3>
          <div className={styles.rating}>
            {ratingArray.map((_, i) => (
              <IconSVG
                key={i}
                name={i < rating ? 'RatingYellow' : 'RatingGray'}
                size={15}
              />
            ))}
          </div>
        </div>
      </div>
      <p className={styles.reviewText}>{text}</p>
    </div>
  );
};
