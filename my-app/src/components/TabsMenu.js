import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import AccordionCollapse from './AccordionCollapse'
import food from '../data/food3.js'



const TabsMenu = (props) => {
  function getMealTime(time, both, types) {
    const mealTime = food.filter(meal => meal.mealTime === time || meal.mealTime === both)
    const mealType = mealTime.filter(type => type.type === types)
    const mealClass = mealType.map(meal => meal.class)
    const classIndex = mealClass[0];
    const classType = classIndex.map(index => index.className)
    return classType
  }


  const breakFastFood = getMealTime("Desayuno", "Ambos", "Alimento");
  const breakFastDrinks = getMealTime("Desayuno", "Ambos", "Bebidas");
  const breakFastDesserts = getMealTime("Desayuno", "Ambos", "Postres");
  const lunchFood = getMealTime("Comida", "Ambos", "Alimento");
  const lunchDrinks = getMealTime("Comida", "Ambos", "Bebidas");
  const lunchDesserts = getMealTime("Comida", "Ambos", "Postres");

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
