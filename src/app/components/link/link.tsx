import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';

export interface LinkProps {
  styles?: React.CSSProperties;
  value?: string;
  children?: React.ReactNode;
  pathTo: string;
}

export const Link = ({ children, styles, value, pathTo }: LinkProps) => (
  <RouterLink style={styles} to={pathTo}>
    {children ? children : value}
  </RouterLink>
);
