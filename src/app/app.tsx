import React from 'react';
import { Main } from './page/main/main';
import { BrowserRouter as Router } from 'react-router-dom';

export const App = () => (
  <Router>
    <Main />
  </Router>
);
