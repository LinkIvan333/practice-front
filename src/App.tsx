import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Root from 'pages/Root';

const App = () => (
    <BrowserRouter>
        <Root />
    </BrowserRouter>
)

export default App;
