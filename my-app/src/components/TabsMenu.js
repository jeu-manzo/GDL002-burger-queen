import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import AccordionCollapse from './AccordionCollapse'
import getMeal from '../data/functions'




const TabsMenu = (props) => {

  const breakFastFood = getMeal.getMealClassName("Desayuno", "Ambos", "Alimento");
  const breakFastDrinks = getMeal.getMealClassName("Desayuno", "Ambos", "Bebidas");
  const breakFastDesserts = getMeal.getMealClassName("Desayuno", "Ambos", "Postres");
  const lunchFood = getMeal.getMealClassName("Comida", "Ambos", "Alimento");
  const lunchDrinks = getMeal.getMealClassName("Comida", "Ambos", "Bebidas");
  const lunchDesserts = getMeal.getMealClassName("Comida", "Ambos", "Postres");

  // const breakFastFoodName = getMeal.getMealsName("Desayuno", "Ambos", "Alimento", breakFastFood)
  // const breakFastDrinksName = getMeal.getMealsName("Desayuno", "Ambos", "Bebidas", breakFastDrinks);
  // const breakFastDessertsName = getMeal.getMealsName("Desayuno", "Ambos", "Postres", breakFastDesserts);
  // const lunchFoodName = getMeal.getMealsName("Comida", "Ambos", "Alimento", lunchFood);
  // const lunchDrinksName = getMeal.getMealsName("Comida", "Ambos", "Bebidas", lunchDrinks);
  // const lunchDessertsName = getMeal.getMealsName("Comida", "Ambos", "Postres", lunchDesserts);

  return (
    <>
      <Tabs defaultActiveKey="comida-cena">
        <Tab eventKey="desayuno" title="Desayuno">
          <Tabs defaultActiveKey="alimentos-desayuno">
            <Tab eventKey="alimentos-desayuno" title="Alimentos">
              <AccordionCollapse mealsTime={breakFastFood} time="Desayuno" both="Ambos" types="Alimento"/>
            </Tab>
            <Tab eventKey="bebidas-desayuno" title="Bebidas">
              <AccordionCollapse mealsTime={breakFastDrinks} time="Desayuno" both="Ambos" types="Bebidas"/>
            </Tab>
            <Tab eventKey="postres-desayuno" title="Postres">
              <AccordionCollapse mealsTime={breakFastDesserts} time="Desayuno" both="Ambos" types="Postres"/>
            </Tab>
          </Tabs>
        </Tab>
        <Tab eventKey="comida-cena" title="Comida/Cena">
        <Tabs defaultActiveKey="alimentos-comida">
          <Tab eventKey="alimentos-comida" title="Alimentos">
            <AccordionCollapse mealsTime={lunchFood} time="Comida" both="Ambos" types="Alimento"/>
          </Tab>
          <Tab eventKey="bebidas-comida" title="Bebidas">
            <AccordionCollapse mealsTime={lunchDrinks} time="Comida" both="Ambos" types="Bebidas"/>
          </Tab>
          <Tab eventKey="postres-comida" title="Postres">
            <AccordionCollapse mealsTime={lunchDesserts} time="Comida" both="Ambos" types="Postres"/>
          </Tab>
        </Tabs>
        </Tab>
      </Tabs>
    </>
  );
}

export default TabsMenu
