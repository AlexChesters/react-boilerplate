import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import reducer from './reducers/reducer.js'
import { createLogger } from 'redux-logger'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Example from './containers/Example'

const middlewares = [thunk]

if (process.env.NODE_ENV === 'development') {
  middlewares.push(createLogger())
}

const store = createStore(reducer, applyMiddleware(...middlewares))
store.dispatch({
  type: 'SET_STATE',
  state: {
    randomString: Math.random().toString(36).substring(7)
  }
})

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path='/' component={Example} />
    </Router>
  </Provider>,
  document.getElementById('app')
)
