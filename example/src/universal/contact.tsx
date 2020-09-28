import React, { FunctionComponent as FC, useEffect } from 'react'
import { LDFlagSet } from 'launchdarkly-js-sdk-common'
import { LDClient } from 'launchdarkly-js-client-sdk'
import { withLDConsumer } from 'launchdarkly-react-client-sdk'

type ContactProps = {
  flags: LDFlagSet
  ldClient: LDClient
}

export const Contact: FC<ContactProps> = ({ flags, ldClient }) => {
  useEffect(() => {
    ldClient.track('contact page viewed')
  }, [])

  return (
    <>
      {flags.devTestFlag ? <div>Flag on</div> : <div>Flag off</div>}
      <h1>This is the contact page</h1>
      <p>
        Check out my blog at{' '}
        <a href="http://reactjunkie.com" target="_blank" rel="noopener noreferrer">
          reactjunkie.com
        </a>
      </p>
    </>
  )
}

export default withLDConsumer()(Contact)
