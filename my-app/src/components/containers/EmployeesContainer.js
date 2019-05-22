import React from 'react';
import NavBarTables from '../NavBarTables';
import Button from '../Button';

const EmployeesContainer = (props) => {

  let string = "";

    if (window.location.pathname === "/usuarios-bar") {
      string = "BAR";
    }else if (window.location.pathname === "/usuarios-pedidos") {
      string = "PEDIDOS";
    }else if (window.location.pathname === "/usuarios-cocina") {
      string = "COCINA";
    }else if (window.location.pathname === "/usuarios-caja") {
      string = "CAJA";
    }else {
      string = "ADMINISTRACION";
    }


  return (
    <section className="employees-container">
      <NavBarTables label={string} />
      <div className="buttons-employees">
        {
          props.employees.map((employee, index) => {
            return (
              <Button className="btn-employee" name={employee} label={employee} key={index} onClick={(e) => console.log(e.target.name)} />
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
