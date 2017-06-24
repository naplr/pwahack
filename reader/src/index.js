import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import 'react-mdl/extra/material.css'
import 'react-mdl/extra/material.js'

import App from './App'
import registerServiceWorker from './registerServiceWorker'
import './index.css'
import reducers from './reducers'

const finalCreateStore = compose(
    applyMiddleware(thunk)
)(createStore)

export const store = finalCreateStore(reducers)

ReactDOM.render(
    <div>
  <Provider store={ store }>
    <App />  
  </Provider>
  </div>
  ,document.getElementById('root')
)

registerServiceWorker()
