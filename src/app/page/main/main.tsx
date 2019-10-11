import React from 'react';
import { AppBar } from '../../components/app-bar/app-bar';
import { Footer } from '../../components/footer';

export const Main = () => {
  return (
    <div>
      <AppBar />
      <div style={{ height: '500px' }}></div>
      <Footer />
    </div>
  );
};
