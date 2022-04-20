import React from 'react'
import { Routes, Link, Route } from 'react-router-dom'
import { LDClient } from 'launchdarkly-js-client-sdk'
import Home from './home'
import Contact from './contact'

const App = ({ ldClient }: { ldClient: LDClient }) => (
  <div>
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <Routes>
        <Route path="/">
          <Route index element={<Home ldClient={ldClient} />} />
          <Route path="home" element={<Home ldClient={ldClient} />} />
        </Route>
        <Route path="/contact">
          <Contact ldClient={ldClient} />
        </Route>
      </Routes>
    </main>
  </div>
)

export default App
