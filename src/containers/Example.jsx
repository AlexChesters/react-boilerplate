import React, { Component } from 'react'
import { connect } from 'react-redux'

import Example from '../components/Example'

export class ExampleContainer extends Component {
  render () {
    return <Example text={this.props.randomString} />
  }
}

const mapStateToProps = state => {
  return {
    randomString: state.get('randomString')
  }
}
export default connect(mapStateToProps)(ExampleContainer)
