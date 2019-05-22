import React from 'react';
import NavBarTables from '../NavBarTables';
import Button from '../Button';

const EmployeesContainer = (props) => {

  return (
    <section className="employees-container">
      <NavBarTables label="Area" />
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
