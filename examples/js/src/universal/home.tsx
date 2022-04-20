import React, { FC } from 'react'
import { LDClient } from 'launchdarkly-js-client-sdk'
import Button from './components/button'

type HomeProps = {
  ldClient: LDClient
}

const Home: FC<HomeProps> = ({ ldClient }) => (
  <div>
    <h1>Welcome to Universal Hot Reload!!!</h1>
    <Button ldClient={ldClient}>button enabled</Button>
    <p>
      Try changing this text in src/universal/home.js and verify that hot reloading works both on the server (view
      source to confirm) and the browser!
    </p>
  </div>
)

export default Home
