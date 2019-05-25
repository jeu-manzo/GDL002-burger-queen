import React from 'react';
import NavBarTables from '../NavBarTables';
import Button from '../Button';
import AccordionCollapse from '../AccordionCollapse';
import { Link } from 'react-router-dom';




class CommandContainer extends React.Component {

  render() {
    return (
      <section className="command-container">
        <NavBarTables label="Comanda" labelTwo=" - (Fulanito)" />
        <header>
          <div>
            <Button label="Dasyunos" />
            <Button label="Comida" />
          </div>
          <div>
            <Link className="link-menu-nav" to='/comanda'>Alimentos</Link>
            <Link className="link-menu-nav" to='/comanda'>Bebidas</Link>
            <Link className="link-menu-nav" to='/comanda'>Postres</Link>
          </div>
        </header>
        <main>
          <AccordionCollapse />
        </main>



      </section>
    );
  }
}

export default CommandContainer
