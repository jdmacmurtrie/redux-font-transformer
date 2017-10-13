import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App.js';
import sizeAdjust from './reducers/sizeAdjust'
import submissions from './reducers/submissions'
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  sizeAdjust,
  submissions,
  form: formReducer
})

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
