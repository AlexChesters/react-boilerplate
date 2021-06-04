import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './styles/index.scss'

import Home from './routes/home'

export default function router () {
  return (
    <Router basename={'/my-app'}>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </Router>
  )
}
