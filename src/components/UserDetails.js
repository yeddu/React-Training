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
    //alert(match.params.id);
    let userdetails = users.find(element => element.id === parseInt(match.params.id))
    return (
      <div className="user-detail-card">
        <p><strong>User Id : {userdetails.id}</strong></p>
        <p><strong>Name : {userdetails.name}</strong></p>
        <p><strong>E-Mail : {userdetails.email}</strong></p>
        <p><strong>Phone : {userdetails.phone}</strong></p>
        <p><strong>Website : {userdetails.website}</strong></p>
      </div>
    );
  }
}

export default UserDetails;

