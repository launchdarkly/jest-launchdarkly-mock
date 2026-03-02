/** @jest-environment jsdom */
import { ldClientMock, resetLDMocks } from '../../dist/index.js'

// Importing ClientService triggers the module-level initialize() call.
// With the mock in place, ldClient === ldClientMock.
import { ldClient, trackEvent } from './ClientService'

describe('ClientService', () => {
  beforeEach(() => {
    resetLDMocks()
  })

  it('initialize returns ldClientMock', () => {
    expect(ldClient).toBe(ldClientMock)
  })

  it('trackEvent calls ldClient.track', () => {
    trackEvent('my-event')
    expect(ldClientMock.track).toHaveBeenCalledWith('my-event')
  })
})
