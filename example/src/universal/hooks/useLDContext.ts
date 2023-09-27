import { useLDClient } from 'launchdarkly-react-client-sdk'
import { useEffect } from 'react'
import { LDContext } from 'launchdarkly-js-client-sdk'

const useLDContext = () => {
  const ldClient = useLDClient()

  useEffect(() => {
    const ctx = ldClient?.getContext()
    try {
      const mergedCtx: LDContext = {
        kind: 'multi',
        user: (ctx as any).user,
        account: {
          key: 'account-test-key-1',
        },
      }
      ldClient?.identify(mergedCtx)
    } catch (e) {
      console.log(`exception: ${e}`)
    }
  }, [ldClient])
}

export default useLDContext
