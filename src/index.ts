jest.mock('launchdarkly-react-client-sdk', () => ({ useFlags: jest.fn() }))

import kebabCase from 'lodash.kebabcase'
import camelCase from 'lodash.camelcase'
import { LDFlagSet } from 'launchdarkly-js-sdk-common'
import { useFlags } from 'launchdarkly-react-client-sdk'

const mockUseFlags = useFlags as jest.Mock

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
