import React from 'react';
import classNames from 'classnames';
import styles from './app-test.scss';
import img from '../assets/test.jpg';

export const App = () => {
  return (
    <div className={classNames(styles.appTest)}>
      <img  alt='test image' src={img}/>
      <div className={styles.appTestImg}>test</div>
    </div>
  );
};
