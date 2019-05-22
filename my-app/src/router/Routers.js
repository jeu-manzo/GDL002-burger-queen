import React from 'react';
import TablesContainer from '../components/containers/TablesContainer';
import StartMenuContainer from '../components/containers/StartMenuContainer';
import EmployeesContainer from '../components/containers/EmployeesContainer';
// import CommandContainer from '../components/containers/CommandContainer'
import employees from '../data/employees';
import { BrowserRouter as Router, Route } from 'react-router-dom';



class Routers extends React.Component {
  render() {
    return (
      <Router>
        <>
          <Route exact path="/" component={StartMenuContainer} />
          <Route exact path="/inicio" component={StartMenuContainer}/>
          <Route exact path="/mesas" component={TablesContainer} />
          <Route exact path="/bar-empleados" render={(routeProps) => (
            <EmployeesContainer {...routeProps} employees={employees.bar} />
          )} />
          <Route exact path="/cocina-empleados" render={(routeProps) => (
            <EmployeesContainer {...routeProps} employees={employees.kitchen} />
          )} />
          <Route exact path="/pedidos-empleados" render={(routeProps) => (
            <EmployeesContainer {...routeProps} employees={employees.waiters} />
          )} />
          <Route exact path="/admon-empleados" render={(routeProps) => (
            <EmployeesContainer {...routeProps} employees={employees.administration} />
          )} />
          <Route exact path="/caja-empleados" render={(routeProps) => (
            <EmployeesContainer {...routeProps} employees={employees.checkoutCash} />
          )} />

        </>
      </Router>
    )
  }
}

export default Routers;
