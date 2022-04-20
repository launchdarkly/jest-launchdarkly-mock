import React from 'react'
import { Switch, Link, Route } from 'react-router-dom'
import Home from './home'
import Contact from './contact'

const App = () => (
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
      <Switch>
        <Route exact path={['/', '/home']}>
          <Home />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </main>
  </div>
)

export default App
