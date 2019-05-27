import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import getMeal from '../data/functions'

const AccordionCollapse = (props) => {

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
  //
  // const jiji = lunchFood.map((x, index) => x[index]).map((y) => y + "  P")


  return (
    <>
      <Accordion defaultActiveKey="0">
        {
          props.mealsTime.map((title, index) =>
            <Card key={index}>
              <Accordion.Toggle as={Card.Header} eventKey={index.toString()}>
                {title}
              </Accordion.Toggle>
              {
                getMeal.getMealsName(props.time, props.both, props.types, props.mealsTime).map((x, subtit) => x[index]).map((y, dos) =>
                  <Accordion.Collapse key={dos} eventKey={index.toString()}>
                        <Card.Body>{y}</Card.Body>
                  </Accordion.Collapse>

                )
              }
            </Card>
          )
        }
      </Accordion>
    </>


  );

}

export default AccordionCollapse;
