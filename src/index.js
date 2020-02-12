import React from 'react';
import ReactDOM from 'react-dom';
import App from './ToDoList/App/App';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
// import rootReducer from './reducers'
import './index.scss';

const store = createStore(() => {});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
