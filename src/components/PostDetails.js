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
  // componentDidMount() {
  //   //console.log(this.props)
  //   axios
	// 		.get(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`)
	// 		.then(response => {
	// 			console.log(response)
	// 			this.setState({ postdetails: response.data })
	// 		})
	// 		.catch(error => {
  //       console.log(error)
	// 		})
  // }
  render() {
    //const { postdetails } = this.state
    const posts = this.props.posts
    let match = this.props.match
    let postdetails = posts.find(element => element.id === parseInt(match.params.id))
    return (
      <>
        <h2>Post Details: </h2>
        <p><strong>{postdetails.id}</strong></p>
        <p><strong>{postdetails.title}</strong></p>
        <p><strong>{postdetails.body}</strong></p>
      </>
    );
  }
}

export default PostDetails;

