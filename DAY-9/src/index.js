import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
ReactDOM.render(
  <Provider store={store}>
  <Router>
    <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
serviceWorker.unregister();