import React from 'react';
import TablesContainer from '../components/containers/TablesContainer';
import { BrowserRouter as Router, Route } from 'react-router-dom';



class Routers extends React.Component {
  render() {
    return (
      <Router>
        <>
          <Route exact path="/" component={TablesContainer} />
          <Route exact path="/mesas" component={TablesContainer} />
        </>
      </Router>
    )
  }
}

export default Routers;
