import { renderHook } from '@testing-library/react-hooks'
import { useFlags, useLDClient, LDProvider, asyncWithLDProvider } from 'launchdarkly-react-client-sdk'
import { mockFlags, ldClientMock, resetLDMocks } from './index'

describe('main', () => {
  test('mock kebab-case correctly', () => {
    mockFlags({ 'dev-test-flag': true })

    const {
      result: { current },
    } = renderHook(() => useFlags())

    expect(current.devTestFlag).toBeTruthy()
    expect(current['dev-test-flag']).toBeTruthy()
  })

  test('mock camelCase correctly', () => {
    mockFlags({ devTestFlag: true })

    const {
      result: { current },
    } = renderHook(() => useFlags())

    expect(current.devTestFlag).toBeTruthy()
    expect(current['dev-test-flag']).toBeTruthy()
  })

  test('mock option without case formatting correctly', () => {
    mockFlags({ DEV_test_Flag: true })

    const {
      result: { current },
    } = renderHook(() => useFlags())

    expect(current.DEV_test_Flag).toBeTruthy()
    expect(current['DEV_test_Flag']).toBeTruthy()
  })

  test('mock asyncWithLDProvider correctly', () => {
    expect(asyncWithLDProvider).toBeDefined()
  })

  test('mock asyncWithLDProvider returns promise of a value function', (done) => {
    const providerPromise = asyncWithLDProvider({ clientSideID: 'someid' })

    expect(providerPromise).toBeInstanceOf(Promise)

    providerPromise.then((provider) => {
      expect(provider).toBeInstanceOf(Function)

      expect(provider({ children: 'child' })).toEqual('child')

      done()
    })
  })

  test('mock LDProvider correctly', () => {
    expect(LDProvider).toBeDefined()
  })

  test('mock ldClient correctly', () => {
    const {
      result: { current },
    } = renderHook(() => useLDClient())

    current!.track('page-view')

    expect(ldClientMock.track).toHaveBeenCalledTimes(1)
  })

  test('ldClient mock has complete set of methods', () => {
    expect(ldClientMock.track.mock).toBeDefined()
    expect(ldClientMock.identify.mock).toBeDefined()
    expect(ldClientMock.allFlags.mock).toBeDefined()
    expect(ldClientMock.close.mock).toBeDefined()
    expect(ldClientMock.flush.mock).toBeDefined()
    expect(ldClientMock.getContext.mock).toBeDefined()
    expect(ldClientMock.off.mock).toBeDefined()
    expect(ldClientMock.on.mock).toBeDefined()
    expect(ldClientMock.setStreaming.mock).toBeDefined()
    expect(ldClientMock.variation.mock).toBeDefined()
    expect(ldClientMock.variationDetail.mock).toBeDefined()
    expect(ldClientMock.waitForInitialization.mock).toBeDefined()
    expect(ldClientMock.waitUntilGoalsReady.mock).toBeDefined()
    expect(ldClientMock.waitUntilReady.mock).toBeDefined()
  })

  test('reset all flag mocks', () => {
    mockFlags({ devTestFlag: true })
    renderHook(() => useFlags())

    resetLDMocks()

    expect(useFlags).not.toHaveBeenCalled()
  })

  test('reset ldClientMock ', () => {
    const {
      result: { current },
    } = renderHook(() => useLDClient())
    current!.track('page-view')

    resetLDMocks()

    expect(ldClientMock.track).not.toHaveBeenCalled()
  })
})
