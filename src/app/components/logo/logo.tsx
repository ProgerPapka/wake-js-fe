import React from 'react';
import styles from './logo.scss';
import image from '../../../assets/logo/Wakeclub1.png';
import imageSecondary from '../../../assets/logo/Wakeclub1-secondary.png';

interface LogoProps {
  className?: string;
  secondaryLogo?: boolean;
}

export const Logo = ({ className, secondaryLogo = false }: LogoProps) => {
  return (
    <div className={className}>
      <img src={secondaryLogo ? imageSecondary : image} alt="WakeClub Logo" className={styles.logo} />
    </div>
  );
};
