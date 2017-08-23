import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Example.scss'

export default class Example extends Component {
  static get defaultProps () {
    return {
      text: 'Hello, world!'
    }
  }
  render () {
    return (
      <section className='example'>
        <h1>{this.props.text}</h1>
      </section>
    )
  }
}

Example.propTypes = {
  text: PropTypes.string
}
