import * as React from 'react';
import { IconType } from './icon-enum';
import classNames from 'classnames';
import styles from './icon.scss';

const iconStyles = classNames(styles);

export interface IconProps {
  type?: IconType;
  color?: string;
  style?: React.CSSProperties;
  component?: React.ComponentType;
}

export const Icon = ({}: IconProps) => {
  return <div className={iconStyles}>Icon</div>;
};
