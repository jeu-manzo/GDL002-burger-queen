import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';


const AccordionCollapse = (props) => {

  return (
    <>
      <Accordion defaultActiveKey="0">
        {
          props.mealsTime.map((button, index) =>
            <Card key={index}>
              <Accordion.Toggle as={Card.Header} eventKey={index.toString()}>
                {button}
              </Accordion.Toggle>
              <Accordion.Collapse eventKey={index.toString()}>
                <Card.Body>Hello! I'm the body</Card.Body>
              </Accordion.Collapse>
            </Card>
          )
        }
      </Accordion>
    </>


  );

}

export default AccordionCollapse;
