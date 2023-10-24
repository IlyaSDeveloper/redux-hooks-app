import React from "react";
import App from 'App';
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from './modules/api/store';

import CssBaseline from '@material-ui/core/CssBaseline';

// const container = document.getElementById('root');
// const root = createRoot(container);
ReactDOM.render (
    <Provider store={store}>
        <CssBaseline/>
        <App/>
    </Provider>,
    document.getElementById('root')
);