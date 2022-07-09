import * as React from 'react';
import { Link } from 'react-router-dom';

import { RouteEnum } from 'config/routes';
import {Title} from "./MainPage.styles";
import Header from "components/header";
import Footer from "components/footer";

const MainPage: React.FC = () => {
  return (
    <div >
        <Header />
        <Title>Главная</Title>
        <Link to={RouteEnum.onboarding}>
        К онбордингу
        </Link>
        <Footer />
    </div>
  );
};

export default React.memo(MainPage);
