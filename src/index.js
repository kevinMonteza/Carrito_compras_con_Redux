import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";


import store from './store';
import { loadProducts }from './actions';

/**
 * para mostrar los productos
 */
store.dispatch(loadProducts());   

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
