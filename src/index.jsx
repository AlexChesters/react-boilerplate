import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import reducer from './reducers'

import App from './App'

import Home from './routes/home'

const middlewares = [thunk]
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(...middlewares))
)
store.dispatch({
  type: 'SET_RANDOM_STRING',
  string: Math.random().toString(36).substring(7)
})

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App>
        <Route exact path='/' component={Home} />
      </App>
    </Router>
  </Provider>,
  document.getElementById('app')
)
