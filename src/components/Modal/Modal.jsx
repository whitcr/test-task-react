import React, { useState } from 'react';
import styles from './Modal.module.css';
import { IconSVG } from 'components/Icon/Icon';
import { Features } from 'components/Features/Features';
import { Reviews } from 'components/Reviews/Reviews';

export const Modal = ({ item, handleClick }) => {
  const [tab, setTab] = useState('features');

  const handleTabChange = newTab => {
    setTab(newTab);
  };

  return (
    <>
      <div className={styles.modal} onClick={handleClick}>
        <div
          className={styles.content}
          onClick={e => {
            e.stopPropagation();
          }}
        >
          <div className={styles.header}>
            <div className={styles.headerColumn}>
              <span className={styles.title}>{item.name}</span>

              <div className={styles.subtitleContainer}>
                <div className={styles.reviewsCount}>
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
              <span className={styles.price}>€{item.price}</span>
            </div>
            <div className={styles.headerColumn}>
              <button onClick={handleClick} className={styles.button}>
                <IconSVG name="Rating" size={30} />
              </button>
            </div>
          </div>
          <div className={styles.body}>
            <div className={styles.gallery}>
              {item.gallery.map((image, index) => (
                <div
                  key={index}
                  className={styles.imageContainer}
                  style={{ backgroundImage: `url(${image})` }}
                ></div>
              ))}
            </div>
            <div className={styles.description}>{item.description}</div>
          </div>
          <div className={styles.tabs}>
            <button
              className={`${styles.tab} ${
                tab === 'features' ? styles.activeTab : ''
              }`}
              onClick={() => handleTabChange('features')}
            >
              Features
            </button>
            <button
              className={`${styles.tab} ${
                tab === 'reviews' ? styles.activeTab : ''
              }`}
              onClick={() => handleTabChange('reviews')}
            >
              Reviews
            </button>
          </div>
          {tab === 'features' && (
            <div className={styles.features}>
              <Features item={item} />
            </div>
          )}
          {tab === 'reviews' && (
            <div className={styles.reviews}>
              <Reviews reviews={item.reviews} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};
