import React, { Component } from 'react'
import axios from 'axios'
import {Link, Route, BrowserRouter as Router} from 'react-router-dom'
import UserDetails from './UserDetails'

class Users extends Component {
	constructor(props) {
		super(props)

		this.state = {
      users: [],
      errorMsg: ''
		}
	}

	componentDidMount() {
		axios
			.get('https://jsonplaceholder.typicode.com/users')
			.then(response => {
				console.log(response)
				this.setState({ users: response.data })
			})
			.catch(error => {
        console.log(error)
        this.setState({errorMsg: 'Error retrieving data'})
			})
	}

	render() {
		const { users, errorMsg } = this.state
		//let match = this.props.match
		return (
			<Router>
				<div className="container">
					List of Users
					{users.length
									? users.map(user => <div key={user.id}><Link to={`/users/${user.id}`}><p><strong>{user.name}</strong></p></Link></div>)
						: null}
						{errorMsg ? <div>{errorMsg}</div> : null}
					<Route path={`/users/:id`} render={routerProps => <UserDetails {...routerProps}  users={users} />} />
				</div>
		</Router>
		)
	}
}

export default Users