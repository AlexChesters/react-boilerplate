import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as actionCreators from '../actions/action-creators.js'

import Example from '../components/Example'

export class ExampleContainer extends Component {
  render () {
    this.props.getRandomString()
    return <Example text={'Random string from redux: ' + this.props.randomString} />
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    randomString: state.get('randomString')
  }
}
export default connect(mapStateToProps, actionCreators)(ExampleContainer)
