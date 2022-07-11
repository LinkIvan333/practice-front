import * as React from 'react';
import { Link } from 'react-router-dom';

import Footer from 'components/footer';
import Header from 'components/header';
import { RouteEnum } from 'config/routes';

import { Title } from './MainPage.styles';

const MainPage: React.FC = () => {
  return (
    <div>
      <Header />
      <Title>Главная</Title>
      <Link to={RouteEnum.onboarding}>К онбордингу</Link>
      <Footer />
    </div>
  );
};

export default React.memo(MainPage);
