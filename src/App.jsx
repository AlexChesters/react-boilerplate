import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './styles/index.scss'

export default class App extends Component {
  render () {
    return (
      <section>
        {this.props.children}
      </section>
    )
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
}
