import React from 'react';
import { User } from './user';
import { Service } from './service';
import { Reservation } from './reservation';

export const SimpleApp = React.memo(() => {
  return (
    <>
      <User />
      <Service />
      <Reservation />
    </>
  );
});
