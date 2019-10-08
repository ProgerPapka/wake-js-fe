import React from 'react';
import styles from './logo.scss';
import image from '../../../assets/logo/Wakeclub1.png';

interface LogoProps {
  className?: string;
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <div className={className}>
      <img src={image} alt="WakeClub Logo" className={styles.logo} />
    </div>
  );
};
