import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';

export interface LinkProps {
  styles?: React.CSSProperties;
  className?: string;
  value?: string;
  children?: React.ReactNode;
  pathTo: string;
}

export const Link = ({ children, styles, value, pathTo, className }: LinkProps) => (
  <RouterLink style={styles} to={pathTo} className={className}>
    {children ? children : value}
  </RouterLink>
);
