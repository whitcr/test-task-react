import { Tag } from 'components/Tag/Tag';
import React from 'react';
import styles from './TagList.module.css';
export const TagList = ({ details, full }) => {
  const generateTags = (details, full) => {
    const tags = [];

    let count = 0;
    for (const [key, value] of Object.entries(details)) {
      if (value > 0 && (full || count < 6)) {
        tags.push(<Tag key={key} name={key} value={value} />);
        count++;
      }
    }
    return tags;
  };

  const tags = generateTags(details.details, full);
  return <div className={styles.tagsList}>{tags}</div>;
};
