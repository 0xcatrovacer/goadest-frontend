import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link, Route, Switch } from "react-router-dom"
import Location from './locations/Location'
import Home from './home/Home'
import Blog from './blog/Blog'
const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg" id="navbar">
        <Link to="/">
          <Navbar.Brand className="brand">GoaDest</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link className="link" to="/blogs">
              <Nav.Link as={Link} to='/blogs'>Community</Nav.Link>
            </Link>
            <Nav.Item>
              <Link className="link" to="/locations">
                <Nav.Link as={Link} to='/locations'>Locations</Nav.Link>
              </Link>
            </Nav.Item>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Switch>

        <Route path='/blogs' component={Blog} />
        <Route path='/' exact component={Home} />
        <Route path='/locations' component={Location} />

      </Switch>

    </div>

  )
}

export default Header