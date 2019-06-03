import React from 'react';
import Button from './Button'




class Counter  extends React.Component {
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
    return this.setState(({ counterField }) => ({
      counterField: counterField - 1
    }));
  }


  render() {
    return (
      <>
        <Button className="btn-counter" label="+" onClick={this.incrementCount}/>
        <Button className="btn-counter" label="-" onClick={this.decrementCount}/>
        <h1>{this.state.counterField}</h1>
      </>
    );
  }
}

export default Counter
