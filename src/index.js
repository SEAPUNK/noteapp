import React from 'react'
import ReactDOM from 'react-dom'
import createSagaMiddleware from 'redux-saga'
import {createStore, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux'

import appReducer from './reducers'
import appSaga from './sagas'
import App from './components/App'

import 'normalize.css'
import './index.css'

// redux-saga middleware
const sagaMiddleware = createSagaMiddleware()

// Middleware list for Redux
const middleware = [
  sagaMiddleware
]

// Helper function that (isomorphically) determines if the
// Redux DevTools extension is installed
function setupReduxDevTools () {
  const noop = f => f
  if (process.env.NODE_ENV === 'production') return noop
  if (typeof window !== 'object') return noop
  if (!window.devToolsExtension) return noop
  return window.devToolsExtension({
    serializeAction: (key, value) => {
      if (typeof value === 'symbol') return String(value)
      return value
    }
  })
}

// Create Redux store
const store = createStore(
  appReducer,
  compose(
    // Apply middleware
    applyMiddleware(...middleware),
    // Redux DevTools
    setupReduxDevTools()
  )
)

// Start the redux-saga middleware
sagaMiddleware.run(appSaga, store.getState.bind(store))

const rootApp = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(
  rootApp,
  document.getElementById('root')
)
