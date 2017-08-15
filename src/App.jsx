import React, { Component } from 'react'

import styles from './styles'

export default class Background extends Component {
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
