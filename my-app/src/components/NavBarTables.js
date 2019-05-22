import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';



const NavBarTables = (props) =>  {

  const newDate = new Date();
  const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
            "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  const month = months[newDate.getMonth()];
  const day = newDate.getDate();
  const year = newDate.getFullYear();


  return (
      <Navbar collapseOnSelect expand="false" variant="dark">
        <Navbar.Brand>{props.label} - {day} {month} {year} </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <span className="area-nav"><Link className="link-menu-nav" to='/usuarios-caja'>CAJA</Link></span>
            <span className="area-nav"><Link className="link-menu-nav" to='/usuarios-pedidos'>PEDIDOS</Link></span>
            <span className="area-nav"><Link className="link-menu-nav" to='/usuarios-cocina'>COCINA</Link></span>
            <span className="area-nav"><Link className="link-menu-nav" to='/usuarios-bar'>BAR</Link></span>
            <span className="area-nav"><Link className="link-menu-nav" to='/usuarios-administracion'>ADMMINISTRACIÓN</Link></span>
          </Nav>
        </Navbar.Collapse>
        </Navbar>
  )

}


export default NavBarTables
