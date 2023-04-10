import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'style/base.css'
import 'style/index.css'
import { Provider } from 'react-redux'
import store from './store/index'

ReactDOM.render(
  <Provider store={store}>
    <App></App>
  </Provider>,
  document.querySelector('#root')
)
