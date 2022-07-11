import * as React from 'react';

import { RouteEnum } from 'config/routes';
import MainPage from 'pages/MainPage';
import OnboardingPage from 'pages/OnboardingPage';

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
];

export { ROUTES };
