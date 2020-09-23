import React, { FunctionComponent } from 'react'
import { useFlags } from 'launchdarkly-react-client-sdk'

const Button: FunctionComponent = ({ children }) => {
  const { devTestFlag } = useFlags()
  return devTestFlag ? <button>{children}</button> : <>Button is disabled</>
}

export default Button
