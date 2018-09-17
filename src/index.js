// *** Base Imports ***
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// *** Extra imports ***
import { store } from './store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

//combine all the page configuration components here.
const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

// *** Execution ***
ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
