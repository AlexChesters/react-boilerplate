import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Example extends Component {
  static get defaultProps () {
    return {
      text: 'Hello, world!',
      style: {
        display: 'flex',
        justifyContent: 'center'
      }
    }
  }
  render () {
    return (
      <section style={this.props.style}>
        <h1>{this.props.text}</h1>
      </section>
    )
  }
}

Example.propTypes = {
  style: PropTypes.shape({
    display: PropTypes.string.isRequired,
    justifyContent: PropTypes.string.isRequired
  }),
  text: PropTypes.string
}
