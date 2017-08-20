import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './styles'

export default class App extends Component {
  static get defaultProps () {
    return { style: { height: 'inherit', backgroundColor: styles.main } }
  }
  render () {
    return (
      <section style={this.props.style}>
        {this.props.children}
      </section>
    )
  }
}

App.propTypes = {
  style: PropTypes.shape({
    height: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired
  }),
  children: PropTypes.object.isRequired
}
