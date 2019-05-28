import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import getMeal from '../data/functions'

const AccordionCollapse = (props) => {

  return (
    <>
      <Accordion defaultActiveKey="0">
        {
          props.mealsTime.map((title, index) =>
            <Card bsPrefix="total-card" key={index}>
              <Accordion.Toggle bsPrefix="title-card" as={Card.Header} eventKey={index.toString()}>
                {title}
              </Accordion.Toggle>
              {
                getMeal.getMealsName(title).map((value, subindex) => (
                  <Accordion.Collapse key={subindex} eventKey={index.toString()}>
                        <Card.Body bsPrefix="title-collapse" >{value}</Card.Body>
                  </Accordion.Collapse>
                ))
              }
            </Card>
          )
        }
      </Accordion>
    </>


  );

}

export default AccordionCollapse;
