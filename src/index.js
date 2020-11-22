import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import { createStore } from 'redux'
import App from './App';
import { Provider } from 'react-redux'
import { store } from './store/configureStore'

ReactDOM.render(
  <Provider store={store}>
    <div className='app'>
    <App />
    </div>
  </Provider>,
  document.getElementById('root')
);

