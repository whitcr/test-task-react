import React from 'react';
import styles from './Services.module.css';

import { IconSVG } from 'components/Icon/Icon';

export const Services = () => {
  return (
    <div className={styles.section}>
      <h2 className={styles.title}>Our services</h2>
      <div className={styles.cards}>
        <div className={styles.card}>
          <IconSVG name="Route" size={40} />
          <h3>Navigation</h3>
          <p>We provide navigation systems for convenient travel.</p>
        </div>
        <div className={styles.card}>
          <IconSVG name="kitchen" size={40} />
          <h3>Kitchen equipment</h3>
          <p>Our campers are fully equipped with kitchenware.</p>
        </div>
        <div className={styles.card}>
          <IconSVG name="beds" size={40} />
          <h3>Comfortable sleeping places</h3>
          <p>We guarantee a comfortable sleep in our campers.</p>
        </div>
      </div>
    </div>
  );
};
