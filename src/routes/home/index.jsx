import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { getRandomString } from './actions'

import Example from './components/Example'

export class HomeContainer extends Component {
  render () {
    this.props.getRandomString()
    return <Example text={'Random string from redux: ' + this.props.randomString} />
  }
}

HomeContainer.propTypes = {
  getRandomString: PropTypes.func.isRequired,
  randomString: PropTypes.string
}

const mapStateToProps = (state, ownProps) => {
  return {
    randomString: state.randomString.string
  }
}
export default connect(mapStateToProps, { getRandomString })(HomeContainer)
