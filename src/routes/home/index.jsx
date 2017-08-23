import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { getRandomString } from './actions'

import Example from './components/Example'

export class HomeContainer extends Component {
  constructor (props) {
    super(props)
    props.getRandomString()
  }

  render () {
    const { randomString } = this.props
    const text = randomString
      ? `Random string from redux: ${randomString}`
      : undefined
    return <Example text={text} />
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
