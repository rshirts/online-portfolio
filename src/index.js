import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { BrowersRouter } from 'react-router-dom';
import { createStore, combineReducers } from 'redux'
import registerServiceWorker from './registerServiceWorker';



//combine all the page configuration components here.
const app = (
  <BrowersRouter>
    <App />
  </BrowersRouter>
)

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
