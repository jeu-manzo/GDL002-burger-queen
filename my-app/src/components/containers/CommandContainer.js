import React from 'react';
import NavBarTables from '../NavBarTables';
import TabsMenu from '../TabsMenu'
import Button from '../Button'




const CommandContainer = (props) => {




  return (
    <section className="command-container">
      <NavBarTables label="Comanda" labelTwo=" - (Fulanito)" />
      <main className="command" >
        <TabsMenu />
        <div className="command-div">
          <Button className="summary" label="RESUMEN COMANDA"/>
        </div>
      </main>



    </section>
  );
}

export default CommandContainer
