import React from 'react';
import TablesContainer from '../components/containers/TablesContainer';
import StartMenuContainer from '../components/containers/StartMenuContainer';
import EmployeesBarContainer from '../components/containers/EmployeesBarContainer';
import CommandContainer from '../components/containers/CommandContainer'
import { BrowserRouter as Router, Route } from 'react-router-dom';



class Routers extends React.Component {
  render() {
    return (
      <Router>
        <>
          <Route exact path="/" component={StartMenuContainer} />
          <Route exact path="/inicio" component={StartMenuContainer}/>
          <Route exact path="/mesas" component={TablesContainer} />
          <Route exact path="/bar-empleados" component={EmployeesBarContainer} />
          <Route exact path="/comanda" component={CommandContainer} />

        </>
      </Router>
    )
  }
}

export default Routers;
