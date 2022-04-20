import React from 'react'
import { render } from '@testing-library/react'
import { ldClientMock } from 'jest-launchdarkly-mock'

import { Contact } from './contact'

describe('contact page', () => {
  it('flag on', () => {
    const { getByText } = render(<Contact flags={{ devTestFlag: true }} ldClient={ldClientMock} />)
    expect(getByText('Flag on')).toBeTruthy()
  })

  it('flag off', () => {
    const { getByText } = render(<Contact flags={{ devTestFlag: false }} ldClient={ldClientMock} />)
    expect(getByText('Flag off')).toBeTruthy()
  })
})
