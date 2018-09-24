import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

//Redux - Reducers
import homeReducer from './reducers/home';
import aboutReducer from './reducers/about';
import contactReducer from './reducers/contact';
import projectsReducer from './reducers/projects';

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
  projects: projectsReducer
});

//create a store object and assign rootReducer
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
