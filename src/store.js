import { combineReducers, compose, createStore, applyMiddleware } from 'redux';
import {
  routerForBrowser,
  initializeCurrentLocation,
} from 'redux-little-router';

// import my reducer

const routes = {
  '/one': {
    title: 'One',
    randoFunction: () => alert('This is one!'),
  },
  '/two': {
    title: 'Two',
  },
  '/three': {
    title: 'Three',
  },
  '/': {
    title: 'Home',
  },
};

const { reducer, middleware, enhancer } = routerForBrowser({
  // The configured routes. Required.
  routes,
});

const initialState = {};

const store = createStore(
  combineReducers({ router: reducer }),
  initialState,
  compose(enhancer, applyMiddleware(middleware))
);
const initialLocation = store.getState().router;
if (initialLocation) {
  store.dispatch(initializeCurrentLocation(initialLocation));
}

export default store;
