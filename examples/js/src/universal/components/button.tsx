import React, { FC, ReactNode } from 'react'
import { LDClient } from 'launchdarkly-js-client-sdk'

type ButtonProps = {
  children: ReactNode
  ldClient: LDClient
}

const Button: FC<ButtonProps> = ({ children, ldClient }) => {
  const onClick = () => {
    ldClient.track('button-click')
    ldClient.identify({ key: 'aa0ceb' })
  }

  return ldClient.variation('dev-test-flag') ? (
    <button data-testid="test-button" onClick={onClick}>
      {children}
    </button>
  ) : (
    <>button disabled</>
  )
}

export default Button
