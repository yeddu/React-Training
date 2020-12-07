import React, { Component } from 'react'
import axios from 'axios'
import {Link, Route, BrowserRouter as Router} from 'react-router-dom'
import PostDetails from './PostDetails'
import './posts.scss'
class PostList extends Component {
	constructor(props) {
		super(props)

		this.state = {
      posts: [],
      errorMsg: ''
		}
	}

	componentDidMount() {
		axios
			.get('https://jsonplaceholder.typicode.com/posts')
			.then(response => {
				console.log(response)
				this.setState({ posts: response.data })
			})
			.catch(error => {
        console.log(error)
        this.setState({errorMsg: 'Error retrieving data'})
			})
	}

	render() {
		const { posts, errorMsg } = this.state
		let match = this.props.match
		return (
			<Router>
				<div className="post-container">
					{posts.length
									? posts.slice(0, 10).map(post => <div className="posts-card" key={post.id}><Link to={`/posts/${post.id}`}><p><strong>{post.title}</strong></p></Link></div>)
						: null}
						{errorMsg ? <div>{errorMsg}</div> : null}
					<Route path={`/posts/:id`} render={routerProps => <PostDetails {...routerProps}  posts={posts} />} />
				</div>
		</Router>
		)
	}
}

export default PostList