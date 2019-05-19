import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


class NavBarTables extends React.Component {
    render () {
        return (
            <Navbar collapseOnSelect expand="false" variant="dark">
              <Navbar.Brand>Mesas - 05 de Agosto del 2018   (Fulanito)</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link>Caja</Nav.Link>
                  <Nav.Link>Pedidos</Nav.Link>
                  <Nav.Link>Cocina</Nav.Link>
                  <Nav.Link>Bar</Nav.Link>
                  <Nav.Link>Administración</Nav.Link>
                </Nav>
              </Navbar.Collapse>
              </Navbar>
        )
    }
}


export default NavBarTables
