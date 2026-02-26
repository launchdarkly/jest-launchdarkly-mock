import React, { FunctionComponent } from 'react'
import { LDClient } from 'launchdarkly-js-client-sdk'
import { useFlags, useLDClient } from 'launchdarkly-react-client-sdk'

const Button: FunctionComponent = ({ children }) => {
  const { devTestFlag } = useFlags()
  const ldClient = useLDClient() as LDClient

  const onClick = () => {
    ldClient.track('button-click')
    ldClient.identify({ key: 'aa0ceb' })
  }

  return devTestFlag ? (
    <button data-testid="test-button" onClick={onClick}>
      {children}
    </button>
  ) : (
    <>button disabled</>
  )
}

export default Button
