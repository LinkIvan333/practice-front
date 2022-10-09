import { Provider } from 'mobx-react';
import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Root from 'pages/Root';
import stores from 'store/index';

require('swiper/css');
require('swiper/css/free-mode');
require('swiper/css/navigation');
require('swiper/css/thumbs');
require('swiper/css/pagination');

const App: React.FC = () => {
  return (
    <Router>
      <Provider {...stores}>
        <Root />
      </Provider>
    </Router>
  );
};

export default App;
