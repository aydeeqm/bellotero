import { combineReducers, applyMiddleware, createStore, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'

const composeEnhancers =
  (process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const rootReducer = combineReducers({
  initials: {}
})

const store = createStore(
  rootReducer,
  {},
  composeEnhancers(applyMiddleware(thunkMiddleware))
)

export default store
