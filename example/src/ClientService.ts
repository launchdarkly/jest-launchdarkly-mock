import { initialize } from 'launchdarkly-react-client-sdk'
import { LDClient } from 'launchdarkly-js-client-sdk'

// Module-level initialization — the pattern that issue #82 enables testing
export const ldClient: LDClient = initialize('my-client-id', {
  key: 'user-key',
  kind: 'user',
  anonymous: false,
})

export const trackEvent = (eventName: string) => {
  ldClient.track(eventName)
}
