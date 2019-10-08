import React from 'react';
import styles from './app-bar.scss';
import { Logo } from '../logo/logo';

export const AppBar = () => {
  return (
    <header className={styles.appBar}>
      <Logo className={styles.appBarLogo} />
    </header>
  );
};
