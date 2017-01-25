/* eslint-env mocha */

import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'

import ExampleComponent from '../../../src/components/Example'

describe('Example component', () => {
  it('renders text', () => {
    const wrapper = shallow(<ExampleComponent text='foobar' />)
    expect(wrapper.find('h1')).to.have.length(1)
    expect(wrapper.text()).to.equal('foobar')
  })
})
