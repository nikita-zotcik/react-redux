/**
 * Created by snikz on 14/05/2017.
 */
import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers';
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk' //k

export default function configureStore(initialState) {
  const logger = createLogger();
  const store = createStore(rootReducer, initialState, applyMiddleware(thunk,logger))
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer)
    })
  }
  return store;
}
