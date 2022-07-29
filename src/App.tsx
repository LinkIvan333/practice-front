import * as React from 'react';
import {BrowserRouter, HashRouter} from 'react-router-dom';
import './index.scss';
import Root from 'pages/Root';
import {createRootStore, rootStore} from "store/globals";
import { Provider } from 'mobx-react';

const App = () => {
    createRootStore();


    return(
        <Provider rootStore={rootStore}>
            //TODO: вернуть на браузер роутер
            <HashRouter>
                <Root />
            </HashRouter>
        </Provider>

    );
}

export default App;
