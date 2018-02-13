import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'

import reducers from '../reducers'

export default (initialState) => {
  const store = createStore(
    combineReducers(reducers),
    initialState,
    applyMiddleware(logger)
  )

  return store
}
