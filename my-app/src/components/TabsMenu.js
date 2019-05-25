import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import AccordionCollapse from './AccordionCollapse'
import Accordion from 'react-bootstrap/Accordion';




const TabsMenu = (props) => {



  return (
    <>
      <Tabs defaultActiveKey="comida-cena">
        <Tab eventKey="desayuno" title="Desayuno">
          <Tabs defaultActiveKey="alimentos-desayuno">
            <Tab eventKey="alimentos-desayuno" title="Alimentos">
            <Accordion>
              <AccordionCollapse />
            </Accordion>
            </Tab>
            <Tab eventKey="bebidas-desayuno" title="Bebidas">
              *Bebidas*
            </Tab>
            <Tab eventKey="postres-desayuno" title="Postres">
              *Postres*
            </Tab>
          </Tabs>
        </Tab>
        <Tab eventKey="comida-cena" title="Comida/Cena">
        <Tabs defaultActiveKey="alimentos-comida">
          <Tab eventKey="alimentos-comida" title="Alimentos">
            *Alimentos*
          </Tab>
          <Tab eventKey="bebidas-comida" title="Bebidas">
            *Bebidas*
          </Tab>
          <Tab eventKey="postres-comida" title="Postres">
            *Postres*
          </Tab>
        </Tabs>
        </Tab>
      </Tabs>
    </>
  );
}

export default TabsMenu
