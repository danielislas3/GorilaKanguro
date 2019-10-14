import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css'
import Router from './Router';
import * as serviceWorker from './serviceWorker';
import { AppContextProvider } from './components/Context/AppContext';
import { AppContextConsumer } from './components/Context/AppContext'

ReactDOM.render(
    <AppContextProvider>

        <Router />
        <AppContextConsumer>
            {
                (cx) => {
                    console.log(cx.state)
                    return (
                        <>
                        </>

                ) }
        }
        </AppContextConsumer>
    </AppContextProvider>
    , document.querySelector('#root'));

serviceWorker.unregister();
