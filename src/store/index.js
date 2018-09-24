import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

//Redux - Reducers
import homeReducer from './reducers/home';
import aboutReducer from './reducers/about';
import contactReducer from './reducers/contact';
import workReducer from './reducers/work';

// *** Constants ***

const composeEnhancers =
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

//combine reducers into one.
const rootReducer = combineReducers({
  home : homeReducer,
  about: aboutReducer,
  contact: contactReducer,
  work: workReducer
});

//create a store object and assign rootReducer
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
