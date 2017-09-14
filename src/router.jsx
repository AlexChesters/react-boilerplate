import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import App from './App'
import Home from './routes/home'

export default function router () {
  return (
    <Router>
      <App>
        <Route exact path='/' component={Home} />
      </App>
    </Router>
  )
}
