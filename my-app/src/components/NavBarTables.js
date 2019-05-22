import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';



class NavBarTables extends React.Component {

  newDate = new Date();
  months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
            "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  month = this.months[this.newDate.getMonth()];
  day = this.newDate.getDate();
  year = this.newDate.getFullYear();

    render () {
        return (
            <Navbar collapseOnSelect expand="false" variant="dark">
              <Navbar.Brand>Mesas - {this.day} {this.month} {this.year} </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                  <span className="area-nav"><Link className="link-menu-nav" to='/caja-empleados'>CAJA</Link></span>
                  <span className="area-nav"><Link className="link-menu-nav" to='/pedidos-empleados'>PEDIDOS</Link></span>
                  <span className="area-nav"><Link className="link-menu-nav" to='/cocina-empleados'>COCINA</Link></span>
                  <span className="area-nav"><Link className="link-menu-nav" to='/bar-empleados'>BAR</Link></span>
                  <span className="area-nav"><Link className="link-menu-nav" to='/admon-empleados'>ADMMINISTRACIÓN</Link></span>    
                </Nav>
              </Navbar.Collapse>
              </Navbar>
        )
    }
}


export default NavBarTables
