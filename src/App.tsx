import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Stats from './stats'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fas)


function App() {
  return (
    <>
      <div>
        <Navbar variant="dark" expand="lg" style={{background: "#500000"}}>
          <Navbar.Brand>Maroon &amp; White Leadership</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/" active={(window.location.pathname === '/')}>Home</Nav.Link>
              <Nav.Link href="/upload" active={(window.location.pathname === '/upload')}>Upload</Nav.Link>
              <Nav.Link href="/stats" active={(window.location.pathname === '/stats')}>Statistics</Nav.Link>
              <Nav.Link href="/logout" active={(window.location.pathname === '/logout')}>Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/stats">
              <Stats/>
            </Route>
            <Route path="/">
              <FontAwesomeIcon icon={["fas", "coffee"]}/>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
