import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import rootReducer from './root-reducer'

const history = createHistory()

export default function configureStore(initialState = {}) {
  const middleware = routerMiddleware(history)
  const enhancer = compose(
    applyMiddleware(
      thunk,
      middleware
    )
  )
  const store = createStore(rootReducer, initialState, enhancer)
  if (module.hot) {
    module.hot.accept('./root-reducer', () => {
      store.replaceReducer(rootReducer)
    })
  }
  store.history = history
  return store
}
