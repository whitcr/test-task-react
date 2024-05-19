import React from 'react';
import styles from './Reviews.module.css';
import { ReviewItem } from './ReviewItem';
import { Form } from 'components/Form/Form';

export const Reviews = ({ reviews }) => {
  return (
    <>
      <hr className={styles.line} />
      <div className={styles.reviewContainer}>
        <div className={styles.columnReviews}>
          {reviews.map((review, index) => (
            <ReviewItem
              key={index}
              name={review.reviewer_name}
              rating={review.reviewer_rating}
              text={review.comment}
            />
          ))}
        </div>
        <div className={styles.columnForm}>
          <Form />
        </div>
      </div>
    </>
  );
};
