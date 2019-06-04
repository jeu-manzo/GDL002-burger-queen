import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import AccordionCollapse from './AccordionCollapse'
import getMeal from '../data/functions'




const TabsMenu = (props) => {

  return (
    <>
      <Tabs className="food-tabs" defaultActiveKey="comida-cena">
        <Tab eventKey="desayuno" title="Desayuno" className="examp">
          <Tabs className="food-subTab" defaultActiveKey="alimentos-desayuno">
            <Tab eventKey="alimentos-desayuno" title="Alimentos">
              <AccordionCollapse  mealsTime={getMeal.breakFastFood} />
            </Tab>
            <Tab eventKey="bebidas-desayuno" title="Bebidas">
              <AccordionCollapse mealsTime={getMeal.breakFastDrinks} />
            </Tab>
            <Tab eventKey="postres-desayuno" title="Postres">
              <AccordionCollapse mealsTime={getMeal.breakFastDesserts} />
            </Tab>
          </Tabs>
        </Tab>
        <Tab eventKey="comida-cena" title="Comida/Cena">
        <Tabs className="food-subTab" defaultActiveKey="alimentos-comida">
          <Tab eventKey="alimentos-comida" title="Alimentos">
            <AccordionCollapse mealsTime={getMeal.lunchFood} />
          </Tab>
          <Tab eventKey="bebidas-comida" title="Bebidas">
            <AccordionCollapse mealsTime={getMeal.lunchDrinks}/>
          </Tab>
          <Tab eventKey="postres-comida" title="Postres">
            <AccordionCollapse mealsTime={getMeal.lunchDesserts}/>
          </Tab>
        </Tabs>
        </Tab>
      </Tabs>
    </>
  );
}

export default TabsMenu
