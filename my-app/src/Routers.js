import React from 'react';
import TablesContainer from './components/containers/TablesContainer';
import StartMenuContainer from './components/containers/StartMenuContainer';
import EmployeesContainer from './components/containers/EmployeesContainer';
import CommandContainer from './components/containers/CommandContainer';


import employees from './data/employees';
import { BrowserRouter as Router, Route } from 'react-router-dom';



class Routers extends React.Component {
  render() {
    return (
      <Router basename="/">
        <>
          <Route exact path="/" component={StartMenuContainer} />
          <Route exact path="/inicio" component={StartMenuContainer}/>
          <Route exact path="/mesas" component={TablesContainer} />
          <Route exact path="/comanda" component={CommandContainer} />
          <Route exact path="/usuarios-bar" render={(routeProps) => (
            <EmployeesContainer {...routeProps} employees={employees.bar} />
          )} />
          <Route exact path="/usuarios-cocina" render={(routeProps) => (
            <EmployeesContainer {...routeProps} employees={employees.kitchen} />
          )} />
          <Route exact path="/usuarios-pedidos" render={(routeProps) => (
            <EmployeesContainer {...routeProps} employees={employees.waiters} />
          )} />
          <Route exact path="/usuarios-administracion" render={(routeProps) => (
            <EmployeesContainer {...routeProps} employees={employees.administration} />
          )} />
          <Route exact path="/usuarios-caja" render={(routeProps) => (
            <EmployeesContainer {...routeProps} employees={employees.checkoutCash} />
          )} />

        </>
      </Router>
    )
  }
}

export default Routers;
