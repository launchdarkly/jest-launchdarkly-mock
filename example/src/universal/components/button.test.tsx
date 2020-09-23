import React from 'react'
import { render } from '@testing-library/react'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { mockFlags } from '../../../ld-mock.js'
import Button from './button'

describe('button', () => {
  it('flag on', () => {
    mockFlags({ 'dev-test-flag': true })
    const { asFragment } = render(<Button />)
    expect(asFragment()).toMatchSnapshot()
  })

  // it('flag off', () => {
  //   mockFlags({ 'dev-test-flag': false })
  //   const { asFragment } = render(<Button />)
  //   expect(asFragment()).toMatchSnapshot()
  // })
})
