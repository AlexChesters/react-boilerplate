import React, { Component } from 'react'

export default class Example extends Component {
  static get defaultProps () {
    return { text: 'Hello, world!' }
  }
  render () {
    return (
      <h1 className='text-center'>{this.props.text}</h1>
    )
  }
}
