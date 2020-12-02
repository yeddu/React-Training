import React, { Component } from "react";
import {Link} from 'react-router-dom'
import axios from 'axios'

class UserDetails extends Component {
  constructor(props){
    super(props);
    this.state = {
      users : []
    }
  }
  render() {
    const users = this.props.users
    let match = this.props.match
    let userdetails = users.find(element => element.id === parseInt(match.params.id))
    return (
      <>
        <h2>User Details: </h2>
        <p><strong>{userdetails.id}</strong></p>
        <p><strong>{userdetails.name}</strong></p>
        <p><strong>{userdetails.email}</strong></p>
      </>
    );
  }
}

export default UserDetails;

