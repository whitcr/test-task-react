import React from 'react';
import styles from './WhyUs.module.css';

import { IconSVG } from 'components/Icon/Icon';

export const WhyUs = () => {
  return (
    <div className={styles.section}>
      <h2 className={styles.title}>Why us?</h2>
      <div className={styles.cards}>
        <div className={styles.card}>
          <IconSVG name="MapPin" size={40} />
          <h3>Affordable prices</h3>
          <p>We offer competitive prices for camper rentals.</p>
        </div>
        <div className={styles.card}>
          <IconSVG name="van" size={40} />
          <h3>Wide selection of campers</h3>
          <p>We have a variety of campers for every taste and budget.</p>
        </div>
        <div className={styles.card}>
          <IconSVG name="automatic" size={40} />
          <h3>High quality</h3>
          <p>We guarantee the high quality of our campers and services.</p>
        </div>
      </div>
    </div>
  );
};
