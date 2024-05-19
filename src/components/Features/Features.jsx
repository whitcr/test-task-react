import React from 'react';
import styles from './Features.module.css';
import { TagList } from 'components/TagList/TagList';
import { Form } from 'components/Form/Form';

export const Features = ({ item }) => {
  const renderRow = (key, value) => (
    <div className={styles.row} key={key}>
      <div className={styles.key}>{key}</div>
      <div className={styles.value}>{value}</div>
    </div>
  );

  return (
    <>
      <hr className={styles.line} />
      <div className={styles.featuresContainer}>
        <div className={styles.columnFeatures}>
          <div className={styles.tagsContainer}>
            <TagList details={item} full={true} />
          </div>
          <div className={styles.detailsContainer}>
            <div className={styles.title}>Vehicle details</div>
            <hr className={styles.line} />
            <div className={styles.table}>
              {renderRow('Form', item.form)}
              {renderRow('Length', item.length)}
              {renderRow('Width', item.width)}
              {renderRow('Height', item.height)}
              {renderRow('Tank', item.tank)}
              {renderRow('Consumption', item.consumption)}
            </div>
          </div>
        </div>
        <div className={styles.columnForm}>
          <Form />
        </div>
      </div>
    </>
  );
};
