import React, { Component } from 'react';
import {connect} from 'react-redux'
import SingleRow from './SingleRow'

class CrudList extends Component {
  render() {
    return (
    <div className="container">
        <div className="table-responsive">
            <table className="table">
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Qualification</th>
                <th>Gender</th>
                <th>Hobbies</th>
                <th>Comments</th>
                <th>Actions</th>
            <tbody>
                {this.props.lists.map( (list) => <SingleRow key={list.id} list={list} /> )}
            </tbody>
            </table>
        </div>
        {/* {console.log(this.props.lists)} */}
    </div>
    );
   }
}
const mapStateToProps = (state) => {
    return {
        lists : state.crud
    }
}

export default connect(mapStateToProps)(CrudList);