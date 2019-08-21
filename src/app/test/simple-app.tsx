import React from 'react';
import { User } from './user';

const SimpleAppUI = () => {
  return <User/>;
};

export const SimpleApp = React.memo(SimpleAppUI);
