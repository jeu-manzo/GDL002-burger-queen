import React from 'react';
import NavBarTables from '../NavBarTables';
import Button from '../Button';
import employees from '../../data/employees';

class EmployeesBarContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: []
    }
  }

  componentDidMount () {
    this.setState({ employees: employees.bar })
  }

  render () {
    return (
      <section className="emp-bar-container">
        <NavBarTables/>
        <div className="buttons-employees">
          {
            this.state.employees.map((btn, index) => {
              return (
                <Button className="btn-employee" label={btn} key={index} />
              )
            })
          }
        </div>
      </section>
    )

  }

}

export default EmployeesBarContainer;
