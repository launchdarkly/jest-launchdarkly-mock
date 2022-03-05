import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { asyncWithLDProvider } from 'launchdarkly-react-client-sdk'
import App from '../universal/app'
;(async () => {
  const LDProvider = await asyncWithLDProvider({
    clientSideID: 'your-client-side-id',
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
