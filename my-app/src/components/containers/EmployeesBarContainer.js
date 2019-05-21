import React from 'react';
import NavBarTables from '../NavBarTables';
import Button from '../Button';
import employees from '../data/employees'


class CommandContainer extends React.Component {

  employeesBar = employees.bar.map( employee => employee);

  render () {
    return (
      <section className="command-container">
        <NavBarTables/>
        {
          this.employeesBar.map((btn) => {
            return (
              <Button className="btn-ready" label={btn}/>
            )
          })
        }
      </section>
    )


  }

}

export default CommandContainer
