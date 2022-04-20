import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { initialize } from 'launchdarkly-js-client-sdk'
import App from '../universal/app'

const ldClient = initialize('your_client_side_id', {
  key: 'test-user',
})

// iife
;(async () => {
  try {
    await ldClient.waitForInitialization()

    render(
      <BrowserRouter>
        <App ldClient={ldClient} />
      </BrowserRouter>,
      document.getElementById('rootDiv'),
    )
  } catch (err) {
    console.error(`ldClient failed to initialize: ${JSON.stringify(err)}`)
  }
})()
