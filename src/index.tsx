import { markup } from '@ktsstudio/mediaproject-style';
import * as React from 'react';
import { render } from 'react-dom';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import App from './App';
import './styles/styles.scss';

const startApp = () => {
  markup().init();

  render(<App />, document.getElementById('root'));
};

startApp();
