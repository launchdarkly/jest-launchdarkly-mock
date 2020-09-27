import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { mockFlags, ldClientMock } from 'jest-launchdarkly-mock'

import Button from './button'

describe('button', () => {
  it('flag on', () => {
    mockFlags({ devTestFlag: true })
    const { asFragment } = render(<Button />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('flag off', () => {
    mockFlags({ 'dev-test-flag': false })
    const { asFragment } = render(<Button />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('track', () => {
    mockFlags({ 'dev-test-flag': true })
    const { getByTestId } = render(<Button />)
    fireEvent.click(getByTestId('test-button'))

    expect(ldClientMock.track).toBeCalledWith('button-click')
  })

  it('identify', () => {
    mockFlags({ 'dev-test-flag': true })
    const { getByTestId } = render(<Button />)
    fireEvent.click(getByTestId('test-button'))

    expect(ldClientMock.identify).toBeCalledWith({ key: 'aa0ceb' })
  })
})
