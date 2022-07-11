import * as React from 'react';
import { Link } from 'react-router-dom';

import { RouteEnum } from 'config/routes';

const OnboardingPage: React.FC = () => {
  return (
    <div>
      <h1>онбординг</h1>
      <Link to={RouteEnum.main}>К главной</Link>
    </div>
  );
};

export default React.memo(OnboardingPage);
