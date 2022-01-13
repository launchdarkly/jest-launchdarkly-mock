jest.mock('launchdarkly-react-client-sdk', () => {
  const { camelCaseKeys } = jest.requireActual('launchdarkly-react-client-sdk')
  return {
    asyncWithLDProvider: jest.fn(),
    camelCaseKeys,
    LDProvider: jest.fn(),
    useLDClient: jest.fn(),
    useFlags: jest.fn(),
    withLDConsumer: jest.fn(),
    withLDProvider: jest.fn(),
  }
})

import kebabCase from 'lodash.kebabcase'
import camelCase from 'lodash.camelcase'
import { LDFlagSet } from 'launchdarkly-js-sdk-common'
import {
  asyncWithLDProvider,
  LDProvider,
  useFlags,
  useLDClient,
  withLDConsumer,
  withLDProvider,
} from 'launchdarkly-react-client-sdk'

const mockAsyncWithLDProvider = asyncWithLDProvider as jest.Mock
const mockLDProvider = LDProvider as jest.Mock
const mockUseFlags = useFlags as jest.Mock
const mockUseLDClient = useLDClient as jest.Mock
const mockWithLDConsumer = withLDConsumer as jest.Mock
const mockWithLDProvider = withLDProvider as jest.Mock

export const ldClientMock = {
  track: jest.fn(),
  identify: jest.fn(),
  allFlags: jest.fn(),
  close: jest.fn(),
  flush: jest.fn(),
  getUser: jest.fn(),
  off: jest.fn(),
  on: jest.fn(),
  setStreaming: jest.fn(),
  variation: jest.fn(),
  variationDetail: jest.fn(),
  waitForInitialization: jest.fn(),
  waitUntilGoalsReady: jest.fn(),
  waitUntilReady: jest.fn(),
}

mockAsyncWithLDProvider.mockImplementation(() => (children: any) => children)
mockLDProvider.mockImplementation((children: any) => children)
mockUseLDClient.mockImplementation(() => ldClientMock)
mockWithLDConsumer.mockImplementation(() => () => null)
mockWithLDProvider.mockImplementation(() => (children: any) => children)

export const mockFlags = (flags: LDFlagSet) => {
  mockUseFlags.mockImplementation(() => {
    const result: LDFlagSet = {}
    Object.keys(flags).forEach((k) => {
      const kebab = kebabCase(k)
      const camel = camelCase(k)
      result[kebab] = flags[k]
      result[camel] = flags[k]
      result[k] = flags[k]
    })
    return result
  })
}

export const resetLDMocks = () => {
  mockUseFlags.mockReset()

  Object.keys(ldClientMock).forEach((k) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const jestMockFunction = ldClientMock[k]
    if (typeof jestMockFunction.mock !== 'undefined') {
      jestMockFunction.mockReset()
    }
  })
}
