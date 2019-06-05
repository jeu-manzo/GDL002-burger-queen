import React from 'react';
import NavBarTables from '../NavBarTables';
import Button from '../Button';
import { Link } from 'react-router-dom';


const EmployeesContainer = (props) => {

  let titleMenu = "";
  let pathName = "";


    if (window.location.hash === "#/usuarios-bar") {
      titleMenu = "BAR";
      pathName = "/bar";
    }else if (window.location.hash === "#/usuarios-pedidos") {
      titleMenu = "PEDIDOS";
      pathName = "/mesas";
    }else if (window.location.hash === "#/usuarios-cocina") {
      titleMenu = "COCINA";
      pathName = "/cocina";
    }else if (window.location.hash === "#/usuarios-caja") {
      titleMenu = "CAJA";
      pathName = "/caja";
    }else {
      titleMenu = "ADMINISTRACION";
      pathName = "/administracion";
    }


  return (
    <section className="employees-container">
      <NavBarTables label={titleMenu} />
      <div className="buttons-employees">
        {
          props.employees.map((employee, index) => {
            return (
              <Button className="btn-employee"
              name={employee}
              label={<Link className="link-menu-nav" to={pathName}>{employee}</Link>}
              key={index}
              onClick={(e) => console.log(e.target.name)} />
            )
          })
        }
      </div>
      <div className="employee-footer">
      </div>
    </section>
  )
}

export default EmployeesContainer
