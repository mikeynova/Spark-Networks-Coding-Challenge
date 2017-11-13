/* global document */
/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import ReactDOM from 'react-dom'

import configureStore from './store'
import AppRoot from './app-root.jsx'

const store = configureStore()

function render(Component) {
  ReactDOM.render(
    <Component store={store} history={store.history}/>,
    document.getElementById('app')
  )
}

if (module.hot) {
  module.hot.accept('./app-root.jsx', () => {
    const newRoutes = require('./app-root.jsx').default
    render(newRoutes)
  })
}

render(AppRoot)
