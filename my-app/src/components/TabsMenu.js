import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import AccordionCollapse from './AccordionCollapse'
import getMeal from '../data/functions'




const TabsMenu = (props) => {

  const breakFastFood = getMeal("Desayuno", "Ambos", "Alimento");
  const breakFastDrinks = getMeal("Desayuno", "Ambos", "Bebidas");
  const breakFastDesserts = getMeal("Desayuno", "Ambos", "Postres");
  const lunchFood = getMeal("Comida", "Ambos", "Alimento");
  const lunchDrinks = getMeal("Comida", "Ambos", "Bebidas");
  const lunchDesserts = getMeal("Comida", "Ambos", "Postres");

  return (
    <>
      <Tabs defaultActiveKey="comida-cena">
        <Tab eventKey="desayuno" title="Desayuno">
          <Tabs defaultActiveKey="alimentos-desayuno">
            <Tab eventKey="alimentos-desayuno" title="Alimentos">
              <AccordionCollapse mealsTime={breakFastFood}/>
            </Tab>
            <Tab eventKey="bebidas-desayuno" title="Bebidas">
              <AccordionCollapse mealsTime={breakFastDrinks}/>
            </Tab>
            <Tab eventKey="postres-desayuno" title="Postres">
              <AccordionCollapse mealsTime={breakFastDesserts}/>
            </Tab>
          </Tabs>
        </Tab>
        <Tab eventKey="comida-cena" title="Comida/Cena">
        <Tabs defaultActiveKey="alimentos-comida">
          <Tab eventKey="alimentos-comida" title="Alimentos">
            <AccordionCollapse mealsTime={lunchFood}/>
          </Tab>
          <Tab eventKey="bebidas-comida" title="Bebidas">
            <AccordionCollapse mealsTime={lunchDrinks}/>
          </Tab>
          <Tab eventKey="postres-comida" title="Postres">
            <AccordionCollapse mealsTime={lunchDesserts}/>
          </Tab>
        </Tabs>
        </Tab>
      </Tabs>
    </>
  );
}

export default TabsMenu
