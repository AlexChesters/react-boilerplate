import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'

import Example from './components/Example'

export default class HomeContainer extends Component {
  constructor (props) {
    super(props)
    this.state = { title: null }
  }

  async componentDidMount () {
    const res = await fetch('https://j8gfdwfat2.execute-api.eu-west-1.amazonaws.com/prod/whatson')
    const data = await res.json()
    this.setState({ title: data[0].title })
  }

  render () {
    return (
      <Example text={`Random string from redux: ${this.state.title}`} />
    )
  }
}
