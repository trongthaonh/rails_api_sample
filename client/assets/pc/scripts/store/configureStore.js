import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import rootReducer from '../reducers/rootReducer';

export default function configureStore() {
  const logger = createLogger();
  const middleware = [thunk, promise, logger];
  const store = createStore(
    rootReducer,
    applyMiddleware(...middleware)
  );
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = rootReducer.default;
      store.replaceReducer(nextReducer);
    });
  }
  return store;
}
