import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { mockFlags, ldClientMock, resetLDMocks } from 'dist'

import Button from './button'

describe('button', () => {
  beforeEach(() => {
    resetLDMocks()
  })

  // mocking camelCased flags
  it('camelCased flag on', () => {
    mockFlags({ devTestFlag: true })
    const { getByTestId } = render(<Button />)
    expect(getByTestId('test-button')).toBeTruthy()
  })

  it('camelCased flag off', () => {
    mockFlags({ devTestFlag: false })
    const { getByText } = render(<Button />)
    expect(getByText('button disabled')).toBeTruthy()
  })

  // mocking kebab-cased flags
  it('kebab-cased flag on', () => {
    mockFlags({ 'dev-test-flag': true })
    const { getByTestId } = render(<Button />)
    expect(getByTestId('test-button')).toBeTruthy()
  })

  it('kebab-cased flag off', () => {
    mockFlags({ 'dev-test-flag': false })
    const { getByText } = render(<Button />)
    expect(getByText('button disabled')).toBeTruthy()
  })

  // mocking snake_cased flags
  it('snake_cased flag on', () => {
    mockFlags({ dev_test_flag: true })
    const { getByTestId } = render(<Button />)
    expect(getByTestId('test-button')).toBeTruthy()
  })

  it('snake_cased flag off', () => {
    mockFlags({ dev_test_flag: false })
    const { getByText } = render(<Button />)
    expect(getByText('button disabled')).toBeTruthy()
  })

  // mocking snake_cased flags
  it('snake_cased flag off', () => {
    mockFlags({ dev_test_flag: false })
    const { getByText } = render(<Button />)
    expect(getByText('button disabled')).toBeTruthy()
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
