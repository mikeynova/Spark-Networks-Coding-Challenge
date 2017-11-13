import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import rootReducer from './root-reducer'

const history = createHistory()

export default function configureStore() {
  const middleware = routerMiddleware(history)
  const store = createStore(
    rootReducer,
    applyMiddleware(middleware)
  )
  if (module.hot) {
    module.hot.accept('./root-reducer', () => {
      store.replaceReducer(rootReducer)
    })
  }
  store.history = history
  return store
}
