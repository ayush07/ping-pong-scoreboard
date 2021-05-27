import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom';
import { store } from './store/store';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById('root'),
);
