import React from 'react';
import styles from './Hero.module.css';

import main from '../../../images/main.jpg';
import { Button } from 'components/Button';
import { Link } from 'react-router-dom';
import { IconSVG } from 'components/Icon/Icon';

export const Hero = () => {
  return (
    <div className={styles.section}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1 className={styles.animatedText}>
            <span>Immerse yourself in un</span>
            <span>forgettable</span>
            <span>adventures</span>
          </h1>
          <p className={styles.animatedText}>
            Rent a camper and embark on the journey of your dreams
          </p>
          <Link to="/Catalog">
            <Button text="Book now" />
          </Link>
        </div>
        <div className={styles.infoCards}>
          <div className={styles.infoCard}>
            <IconSVG name="HeartRed" size={20} />
            <h3>Comfort on wheels</h3>
            <p>
              Our campers are fully equipped with everything you need for a
              comfortable stay in nature.
            </p>
          </div>
          <div className={styles.infoCard}>
            <IconSVG name="Route" size={20} />
            <h3>Explore new places</h3>
            <p>
              With a camper, you can travel to the most remote and beautiful
              natural spots.
            </p>
          </div>

          <div className={styles.infoCard}>
            <IconSVG name="RatingYellow" size={20} />
            <h3>Unforgettable experiences</h3>
            <p>
              A camper trip will be one of the most exciting adventures of your
              life.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.image}>
        <img src={main} alt="Camper in nature" />
      </div>
    </div>
  );
};
