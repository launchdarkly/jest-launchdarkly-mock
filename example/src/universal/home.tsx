import React from 'react'
import Button from './components/button'

const Home = () => (
  <div>
    <h1>Welcome to Universal Hot Reload!!!</h1>
    <Button>button enabled</Button>
    <p>
      Try changing this text in src/universal/home.js and verify that hot reloading works both on the server (view
      source to confirm) and the browser!
    </p>
  </div>
)

export default Home
