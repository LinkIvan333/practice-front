import * as React from 'react';

import { RouteEnum } from 'config/routes';
import MainPage from 'pages/MainPage';
import OnboardingPage from 'pages/OnboardingPage';
import {About} from 'pages/About';
import {PayAndDelivery} from 'pages/PayAndDelivery';
import {Catalog} from 'pages/Catalog';

type RouteType = {
  path: RouteEnum;
  PageComponent: React.ComponentType;
};


const ROUTES: RouteType[] = [
  {
    path: RouteEnum.main,
    PageComponent: MainPage,
  },
  {
    path: RouteEnum.onboarding,
    PageComponent: OnboardingPage,
  },
  {
    path: RouteEnum.about,
    PageComponent: About,
  },
  {
    path: RouteEnum.onboarding,
    PageComponent: OnboardingPage,
  },
  {
    path: RouteEnum.payAndDelivery,
    PageComponent: PayAndDelivery,
  },
  {
    path: RouteEnum.catalog,
    PageComponent: Catalog,
  },
];

export { ROUTES };
