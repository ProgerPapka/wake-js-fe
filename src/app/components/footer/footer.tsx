import React from 'react';
import { Copyright } from './copyright';
import styles from './footer.scss';
import { FooterLinks } from './footer-links';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <FooterLinks />
      <Copyright />
    </footer>
  );
};
