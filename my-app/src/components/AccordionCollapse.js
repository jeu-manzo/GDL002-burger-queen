import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import getMeal from '../data/functions'
import Button from './Button'

class AccordionCollapse extends React.Component {
  constructor(props) {
    super(props);
    this.incrementCount = this.incrementCount.bind(this);
    this.decrementCount = this.decrementCount.bind(this);
    this.state = {
      counterField: 0,
    };
  }

  incrementCount() {
    return this.setState(({ counterField }) => ({
      counterField: counterField + 1
    }));
  }

  decrementCount() {
    this.setState(({ counterField }) => ({
      counterField: counterField - 1
    }));
  }

render() {
    return (
      <>
        <Accordion defaultActiveKey="0">
          {
            this.props.mealsTime.map((title, index) =>
              <Card bsPrefix="total-card" key={index}>
                <Accordion.Toggle bsPrefix="title-card" as={Card.Header} eventKey={index.toString()}>
                  {title}
                </Accordion.Toggle>
                {
                  getMeal.getMealsName(title).map((value, subindex) => (
                    <Accordion.Collapse key={subindex} eventKey={index.toString()}>
                          <Card.Body bsPrefix="title-collapse" >
                            {
                              <div className="container-counter">
                                <Button className="btn-counter" label="-" onClick={this.decrementCount}/>
                                <div className="container-counter-two">
                                  <h1>{value}</h1>
                                  <p> >> {this.state.counterField}</p>
                                </div>
                                <Button className="btn-counter" label="+" onClick={this.incrementCount}/>
                              </div>
                            }
                          </Card.Body>
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

}

export default AccordionCollapse;
