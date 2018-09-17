import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

//Redux - Reducers
import mainReducer from './reducers/main';

// *** Constants ***

const composeEnhancers =
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

//combine reducers into one.
const rootReducer = combineReducers({
  main : mainReducer
});

//create a store object and assign rootReducer
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
