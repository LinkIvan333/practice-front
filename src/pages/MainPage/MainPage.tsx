import * as React from 'react';
import { Link } from 'react-router-dom';

import { RouteEnum } from 'config/routes';
import {Title} from "./MainPage.styles";

const MainPage: React.FC = () => {
  return (
    <div >
      <Title>Главная</Title>
      <Link to={RouteEnum.onboarding}>
        К онбордингу
      </Link>
    </div>
  );
};

export default React.memo(MainPage);
