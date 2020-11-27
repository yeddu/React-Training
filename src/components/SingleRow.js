import React, { Component } from 'react';
import {connect} from 'react-redux'

class SingleRow extends Component {
  render() {
  return (
    <>
        <tr>
            <td>{this.props.list.name}</td>
            <td>{this.props.list.email}</td>
            <td>{this.props.list.qualification}</td>
            <td>{this.props.list.gender}</td>
            <td>{this.props.list.comments}</td>
            <td><button className="btn btn-danger"
                    onClick={()=>this.props.dispatch({type:'DELETE_ROW',id:this.props.list.id})}>
      Delete</button></td>
        </tr>
    </>
  );
 }
}
export default connect()(SingleRow);