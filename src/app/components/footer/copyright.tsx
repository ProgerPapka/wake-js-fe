import React from 'react';
import styles from './footer.scss';

export const Copyright = () => {
  return <div className={styles.copyright}>{`\u00A9 Wakeclub ${new Date().getFullYear()} `}</div>;
};
