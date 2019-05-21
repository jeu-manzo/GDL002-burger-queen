import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/tablesContainer.css';
import './styles/startMenuContainer.css';
import './styles/employeesBarContainer.css';
import Routers from './router/Routers';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Routers />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
