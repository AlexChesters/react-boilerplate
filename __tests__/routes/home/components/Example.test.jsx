/* eslint-env jest */

import React from 'react'
import renderer from 'react-test-renderer'

import Example from '../../../../src/routes/home/components/Example'

describe('Example', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Example path={'/2017-04'} text='2017-04' />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
