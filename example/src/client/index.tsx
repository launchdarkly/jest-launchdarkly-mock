import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { asyncWithLDProvider } from 'launchdarkly-react-client-sdk'
import App from '../universal/app'
;(async () => {
  const LDProvider = await asyncWithLDProvider({
    clientSideID: 'YOUR_CLIENT_SIDE_ID',
  })
  render(
    <LDProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </LDProvider>,
    document.getElementById('reactDiv'),
  )
})()
