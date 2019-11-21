import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import { App } from './App'

const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <Component />
    </Provider>,
    document.getElementById('app')
  )
}

render(App)
