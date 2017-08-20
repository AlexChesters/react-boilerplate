import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import * as actionCreators from '../actions/action-creators.js'

import Example from '../components/Example'

export class ExampleContainer extends Component {
  render () {
    this.props.getRandomString()
    return <Example text={'Random string from redux: ' + this.props.randomString} />
  }
}

ExampleContainer.propTypes = {
  getRandomString: PropTypes.func.isRequired,
  randomString: PropTypes.string
}

const mapStateToProps = (state, ownProps) => {
  return {
    randomString: state.randomString.string
  }
}
export default connect(mapStateToProps, actionCreators)(ExampleContainer)
