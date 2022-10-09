import { observer } from 'mobx-react';
import * as React from 'react';
import { Route, Routes, useLocation } from 'react-router';

import Header from 'components/Header/Header';
import { StickyHeader } from 'components/StickyHeader';
import { AboutAnchorArray } from 'config/routes';

import Layout from '../../components/Layout/Layout';

import { ROUTES } from './config';

const Root: React.FC = () => {
  const location = useLocation();

  return (
    <Routes location={location}>
      {ROUTES.map(({ path, PageComponent }) => (
        <Route
          key={path}
          path={path}
          element={
            <Layout>
              <PageComponent />
            </Layout>
          }
        />
      ))}
    </Routes>
  );

  // return useRoutes([
  //   {
  //     path: RouteEnum.home,
  //     element: <Start />,
  //   },
  // ]);
};

export default observer(Root);
