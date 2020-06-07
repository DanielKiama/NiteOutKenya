import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './css/bootstrap.min.css';
import './css/font-awesome.min.css'
import './fonts/style.css'
import './css/animate.css'
import Home from './home';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
