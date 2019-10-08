import React from 'react';
import styles from './app-bar.scss';
import { Logo } from '../logo/logo';
import { Navigation } from '../navigation/navigation';
import { NAVIGATION } from '../../constants/navigation';

export const AppBar = () => {
  return (
    <header className={styles.appBar}>
      <Logo className={styles.appBarLogo} />
      <Navigation items={NAVIGATION} className={styles.appBarNavigation} />
    </header>
  );
};
