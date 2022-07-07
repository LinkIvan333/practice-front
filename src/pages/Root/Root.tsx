import * as React from 'react';
import { Route, Routes, useLocation } from 'react-router';

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
              <PageComponent />
          }
        />
      ))}
    </Routes>
  );
};

export default Root;
