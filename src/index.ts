jest.mock('launchdarkly-react-client-sdk', () => {
  const { camelCaseKeys } = jest.requireActual('launchdarkly-react-client-sdk')
  return {
    camelCaseKeys,
    useLDClient: jest.fn(),
    useFlags: jest.fn(),
    withLDConsumer: jest.fn(),
  }
})

import kebabCase from 'lodash.kebabcase'
import camelCase from 'lodash.camelcase'
import { LDFlagSet } from 'launchdarkly-js-sdk-common'
import { useFlags, useLDClient } from 'launchdarkly-react-client-sdk'

const mockUseFlags = useFlags as jest.Mock
const mockUseLDClient = useLDClient as jest.Mock
export const ldClientMock = {
  track: jest.fn(),
  identify: jest.fn(),
}

mockUseLDClient.mockImplementation(() => ldClientMock)

export const mockFlags = (flags: LDFlagSet) => {
  mockUseFlags.mockImplementation(() => {
    const result: LDFlagSet = {}
    Object.keys(flags).forEach((k) => {
      const kebab = kebabCase(k)
      const camel = camelCase(k)
      result[kebab] = flags[k]
      result[camel] = flags[k]
    })
    return result
  })
}
