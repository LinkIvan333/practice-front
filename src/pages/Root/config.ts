import * as React from 'react';

import { RouteEnum } from 'config/routes';
import { About } from 'pages/About';
import { Catalog } from 'pages/Catalog';
import { HomePage } from 'pages/HomePage';

type RouteType = {
  path: RouteEnum;
  PageComponent: React.ComponentType;
};

const ROUTES: RouteType[] = [
  {
    path: RouteEnum.home,
    PageComponent: HomePage,
  },
  {
    path: RouteEnum.about,
    PageComponent: About,
  },
  {
    path: RouteEnum.catalog,
    PageComponent: Catalog,
  },
];

export { ROUTES };
