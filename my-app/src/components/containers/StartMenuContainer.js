import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button'




class StartMenuContainer extends React.Component {

    render () {
    return (
      <section className="start-container">
        <h1 className="welcome">BIENVENIDO</h1>
        <div className="buttons-menu">
          <Button className="btn-menu" label={<Link className="link-menu" to='/mesas'>CAJA</Link>}/>
          <Button className="btn-menu" label={<Link className="link-menu" to='/mesas'>PEDIDOS</Link>}/>
          <Button className="btn-menu" label={<Link className="link-menu" to='/mesas'>COCINA</Link>}/>
          <Button className="btn-menu" label={<Link className="link-menu" to='/mesas'>BAR</Link>}/>
          <Button className="btn-menu" label={<Link className="link-menu" to='/mesas'>ADMON</Link>}/>
        </div>
      </section>
    )


  }

}

export default StartMenuContainer
