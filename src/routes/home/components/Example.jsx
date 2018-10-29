import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Example.scss'

export default class Example extends Component {
  render () {
    return (
      <section className='example'>
        <h1>{this.props.title}</h1>
        <h4>{this.props.subtitle}</h4>
      </section>
    )
  }
}

Example.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}
