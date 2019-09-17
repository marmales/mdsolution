import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createGlobalStyle} from 'styled-components';

import ViewProvider from "./ViewProvider";


const GlobalStyle = createGlobalStyle`
    body {
     margin: 0;
     padding: 0;
    }
`;
const GlobalComponent = <React.Fragment><GlobalStyle/><ViewProvider><App/></ViewProvider></React.Fragment>;
ReactDOM.render(GlobalComponent, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
