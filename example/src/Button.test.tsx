/** @jest-environment jsdom */
import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { mockFlags, ldClientMock, resetLDMocks } from '../../src'

import Button from './Button'

describe('feature flag controls rendering', () => {
  beforeEach(() => {
    resetLDMocks()
  })

  it('renders disabled when no flags are set', () => {
    const { getByText } = render(<Button />)
    expect(getByText('button disabled')).toBeTruthy()
  })

  it('camelCase flag enables button', () => {
    mockFlags({ devTestFlag: true })
    const { getByTestId } = render(<Button />)
    expect(getByTestId('test-button')).toBeTruthy()
  })

  it('camelCase flag disables button', () => {
    mockFlags({ devTestFlag: false })
    const { getByText } = render(<Button />)
    expect(getByText('button disabled')).toBeTruthy()
  })

  it('kebab-case flag enables button', () => {
    mockFlags({ 'dev-test-flag': true })
    const { getByTestId } = render(<Button />)
    expect(getByTestId('test-button')).toBeTruthy()
  })

  it('kebab-case flag disables button', () => {
    mockFlags({ 'dev-test-flag': false })
    const { getByText } = render(<Button />)
    expect(getByText('button disabled')).toBeTruthy()
  })

  it('snake_case flag enables button', () => {
    mockFlags({ dev_test_flag: true })
    const { getByTestId } = render(<Button />)
    expect(getByTestId('test-button')).toBeTruthy()
  })

  it('snake_case flag disables button', () => {
    mockFlags({ dev_test_flag: false })
    const { getByText } = render(<Button />)
    expect(getByText('button disabled')).toBeTruthy()
  })
})

describe('LaunchDarkly client interactions', () => {
  beforeEach(() => {
    resetLDMocks()
  })

  it('calls ldClient.track on click', () => {
    mockFlags({ 'dev-test-flag': true })
    const { getByTestId } = render(<Button />)
    fireEvent.click(getByTestId('test-button'))
    expect(ldClientMock.track).toBeCalledWith('button-click')
  })

  it('calls ldClient.identify on click', () => {
    mockFlags({ 'dev-test-flag': true })
    const { getByTestId } = render(<Button />)
    fireEvent.click(getByTestId('test-button'))
    expect(ldClientMock.identify).toBeCalledWith({ key: 'aa0ceb' })
  })
})

describe('resetLDMocks', () => {
  it('clears flags set in a previous test', () => {
    mockFlags({ devTestFlag: true })
    resetLDMocks()
    const { getByText } = render(<Button />)
    expect(getByText('button disabled')).toBeTruthy()
  })

  it('clears ldClient call history', () => {
    mockFlags({ 'dev-test-flag': true })
    const { getByTestId } = render(<Button />)
    fireEvent.click(getByTestId('test-button'))
    resetLDMocks()
    expect(ldClientMock.track).not.toBeCalled()
    expect(ldClientMock.identify).not.toBeCalled()
  })
})
