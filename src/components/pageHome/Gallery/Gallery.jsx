import React from 'react';
import styles from './Gallery.module.css';
import img1 from '../../../images/gallery-image-1.jpg';
import img2 from '../../../images/gallery-image-2.jpg';
import img3 from '../../../images/gallery-image-3.jpg';

export const Gallery = () => {
  return (
    <div className={styles.section}>
      <h2 className={styles.title}>Gallery</h2>
      <div className={styles.images}>
        <div className={styles.image}>
          <img src={img1} alt="Camper in nature" className={styles.zoomImage} />
        </div>
        <div className={styles.image}>
          <img
            src={img2}
            alt="Camper on a mountain road"
            className={styles.zoomImage}
          />
        </div>
        <div className={styles.image}>
          <img
            src={img3}
            alt="Camper by the lake"
            className={styles.zoomImage}
          />
        </div>
      </div>
    </div>
  );
};
