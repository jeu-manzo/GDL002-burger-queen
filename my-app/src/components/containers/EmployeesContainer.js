import React from 'react';
import NavBarTables from '../NavBarTables';
import Button from '../Button';

const EmployeesContainer = (props) => {

  return (
    <section className="employees-container">
      <NavBarTables/>
      <div className="buttons-employees">
        {
          props.employees.map((employee, index) => {
            return (
              <Button className="btn-employee" label={employee} key={index} />
            )
          })
        }
      </div>
    </section>
  )
}

export default EmployeesContainer
