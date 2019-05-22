import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button'




class StartMenuContainer extends React.Component {

    render () {
    return (
      <section className="start-container">
        <h1 className="welcome">BIENVENIDO</h1>
        <div className="buttons-menu">
          <Button className="btn-menu" label={<Link className="link-menu" to='/caja-empleados'>CAJA</Link>}/>
          <Button className="btn-menu" label={<Link className="link-menu" to='/pedidos-empleados'>PEDIDOS</Link>}/>
          <Button className="btn-menu" label={<Link className="link-menu" to='/cocina-empleados'>COCINA</Link>}/>
          <Button className="btn-menu" label={<Link className="link-menu" to='/bar-empleados'>BAR</Link>}/>
          <Button className="btn-menu" label={<Link className="link-menu" to='/admon-empleados'>ADMON</Link>}/>
        </div>
      </section>
    )


  }

}

export default StartMenuContainer
