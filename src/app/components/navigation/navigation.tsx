import React from 'react';
import { map } from 'lodash';
import { Link } from '../link';
import styles from './navigation.scss';

export interface ItemProps {
  value: string;
  pathTo: string;
}

export interface NavigationProps {
  items: Array<ItemProps>;
  className?: string;
}

export const Navigation = ({ items, className }: NavigationProps) => {
  return (
    <div className={className}>
      <nav className={styles.navigation}>
        {map(items, item => (
          <Link {...item} key={item.value} className={styles.navigationItem} />
        ))}
      </nav>
    </div>
  );
};
