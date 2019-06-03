import React from 'react';
import Button from './Button'




class Counter  extends React.Component {
  constructor(props) {
    super(props);
    this.incrementCount = this.incrementCount.bind(this);
    this.decrementCount = this.decrementCount.bind(this);
    this.state = {
      incrementField: '',
      decrementField: '',


    };
  }

  incrementCount() {
    alert("suma")
  }

  decrementCount() {
    alert("resta")
  }


  render() {
    return (
      <>
        <Button className="btn-counter" label="+" onClick={this.incrementCount}/>
        <Button className="btn-counter" label="-" onClick={this.decrementCount}/>
        <h1>0</h1>
      </>
    );
  }
}

export default Counter
