import React, { Component } from "react";
import {Link} from 'react-router-dom'
import axios from 'axios'

class PostDetails extends Component {
  constructor(props){
    super(props);
    this.state = {
        postdetails : []
    }
  }
  componentDidMount() {
    //console.log(this.props)
    axios
			.get(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`)
			.then(response => {
				console.log(response)
				this.setState({ postdetails: response.data })
			})
			.catch(error => {
        console.log(error)
			})
  }
  render() {
    const { postdetails } = this.state
    return (
      <div className="container">
        <div>{postdetails.id}</div>
        <div>{postdetails.title}</div>
        <div>{postdetails.body}</div>
      </div>
    );
  }
}

export default PostDetails;

