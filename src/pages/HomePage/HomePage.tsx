import * as React from 'react';

import { Carousel } from './components/Carousel';
import { News } from './components/News';
import { WorkShop } from './components/WorkShop';
const HomePage = () => {
  return (
    <>
      <Carousel />
      <News />
      <WorkShop />
    </>
  );
};

export default HomePage;
