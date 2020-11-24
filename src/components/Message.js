import React, { useState } from "react";
import axios from "axios";
class Message extends React.Component {
  constructor(){
    super();
    this.state = {
      message : 'welcome Visitor'
    }
  }
  changeMessage() {
    this.setState({
      message : 'Thank You for subscribing'
    });
  }
  render() {
    return (
      <div>
        <h1>Welcome {this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </div>
    );
  }
}
export default Message;
