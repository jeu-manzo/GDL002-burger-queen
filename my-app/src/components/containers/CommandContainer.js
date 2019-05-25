import React from 'react';
import NavBarTables from '../NavBarTables';
import Button from '../Button';
import AccordionCollapse from '../AccordionCollapse';

import TabsMenu from '../TabsMenu'
import { Link } from 'react-router-dom';
import menu from '../../data/menu.js'




const CommandContainer = (props) => {

  function getMealTime(time) {
    const mealTime = menu.filter(meal => meal.hour === time)
    return mealTime
  }

  const lunch = getMealTime("Comida");


  console.log(lunch);

  return (
    <section className="command-container">
      <NavBarTables label="Comanda" labelTwo=" - (Fulanito)" />
      <header>
        <TabsMenu />

      </header>
      <main>

      </main>



    </section>
  );
}

export default CommandContainer
