import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css'
import Router from './Router';
import * as serviceWorker from './serviceWorker';
import { AppContextProvider } from './components/Context/AppContext';

ReactDOM.render(
    <AppContextProvider>
        <Router />
    </AppContextProvider>
    ,document.querySelector('#root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
