import React from 'react'
import { ldClientMock, resetLDMocks } from 'jest-launchdarkly-mock'
import { render } from '@testing-library/react'

import useLDContext from './useLDContext'

const TestApp = () => {
  useLDContext()
  return <></>
}

describe('identify', () => {
  afterEach(() => {
    resetLDMocks()
  })

  test('identify', () => {
    ldClientMock.getContext.mockImplementation(() => {
      return {
        kind: 'multi',
        user: {
          key: 'yus',
        },
      }
    })
    render(<TestApp />)
    expect(ldClientMock.identify).toBeCalled()
  })
})
