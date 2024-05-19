import React from 'react';
import styles from './Tag.module.css';
import { IconSVG } from 'components/Icon/Icon';

export const Tag = ({ name, value }) => (
  <>
    <div className={styles.container}>
      <div className={styles.svgContainer}>
        <IconSVG name={name} size={20} />
      </div>
      <div className={styles.textContainer}>
        <p className={styles.text}>
          {value} {name}
        </p>
      </div>
    </div>
  </>
);
