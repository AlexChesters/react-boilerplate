import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'

import Example from './components/Example'

export default class HomeContainer extends Component {
  constructor (props) {
    super(props)
    this.state = { title: null, subtitle: null }
  }

  async componentDidMount () {
    const res = await fetch('https://www.reddit.com/r/all.json')
    const data = await res.json()
    const firstItem = data.data.children[0].data
    this.setState({
      title: firstItem.title,
      subtitle: firstItem.subreddit_name_prefixed
    })
  }

  render () {
    return (
      <Example
        title={this.state.title}
        subtitle={this.state.subtitle}
      />
    )
  }
}
