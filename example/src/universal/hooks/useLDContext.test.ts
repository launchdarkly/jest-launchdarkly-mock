import { ldClientMock, resetLDMocks } from 'jest-launchdarkly-mock'
import { renderHook } from '@testing-library/react-hooks'

import useLDContext from './useLDContext'

describe('button', () => {
  afterEach(() => {
    resetLDMocks()
  })

  it('identify', () => {
    ldClientMock.getContext.mockImplementation(() => {
      return {
        kind: 'multi',
        user: {
          key: 'yus',
        },
      }
    })
    renderHook(() => useLDContext())
    expect(ldClientMock.identify).toBeCalled()
  })
})
