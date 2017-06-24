import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import App from './App'
import registerServiceWorker from './registerServiceWorker'
import './index.css'
import reducers from './reducers'

const finalCreateStore = compose(
    applyMiddleware(thunk)
)(createStore)

export const store = finalCreateStore(reducers)

ReactDOM.render(
  <Provider store={ store }>
    <App />  
  </Provider>
  ,document.getElementById('root')
)

registerServiceWorker()
