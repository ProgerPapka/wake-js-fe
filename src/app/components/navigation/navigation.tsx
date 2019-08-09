import React from 'react';
import { map } from 'lodash';
import { Link } from '../link';

export interface ItemProps {
  value: string;
  pathTo: string;
}

export interface NavigationProps {
  items: Array<ItemProps>;
  styles: React.CSSProperties;
}

export const Navigation = ({ items }: NavigationProps) => {
  return (
    <nav>
      {map(items, item => (
        <Link {...item} />
      ))}
    </nav>
  );
};
