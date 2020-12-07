import React, { Component } from 'react'
import axios from 'axios'
import {Link, Route, BrowserRouter as Router} from 'react-router-dom'
import UserDetails from './UserDetails'
import './Users.scss'
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
				<>
					{/* <h1>Users</h1> */}
					<div className="flex-container">
						
						{users.length
										? users.map(user => <div className="user-card" key={user.id}><Link to={`/users/${user.id}`}><strong>{user.name}</strong></Link></div>)
							: null}
							{errorMsg ? <div>{errorMsg}</div> : null}
					</div>
					<div className="userdetail-container">
						<Route path={`/users/:id`} render={routerProps => <UserDetails {...routerProps}  users={users} />} />
					</div>
				</>
		</Router>
		)
	}
}

export default Users