import React from 'react';
import { UserData } from './UserData';

const SimpleAppUI = () => {
  return <UserData/>;
};

export const SimpleApp = React.memo(SimpleAppUI);
