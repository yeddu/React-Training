import React, { useState } from "react";

class Counter extends React.Component {
  
  constructor(){
    super();
    this.state = {
      count : 0
    }
  }
  incrementCount() {
    // this.setState({
    //   count : this.state.count + 1
    // });
    this.setState((prevState) => ({
      count: prevState.count + 1
    }))
  }
  incrementFive() {
    this.incrementCount();
    this.incrementCount();
    this.incrementCount();
    this.incrementCount();
    this.incrementCount();
  }
  render() {
    return (
      <div>
        <h1>Count  {this.state.count}</h1>
        {/* <button onClick={() => this.incrementFive()}>Increment</button> */}
        <button onClick={this.incrementFive.bind(this)}>Increment</button>
      </div>
    );
  }
}
export default Counter;
