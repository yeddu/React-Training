import React, { Component } from 'react';
import { logout, isLogin } from '../../utils/common';
import { Link } from 'react-router-dom';

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLogin: isLogin()
        }
    }

    handleLogout = () => {
        logout();
        this.setState({
            isLogin: false
        })
    }

    render() {
        return (
            <div>
                <h1>Home</h1>

                {this.state.isLogin ? 
                    <button className="btn btn-primary" onClick={() => this.handleLogout()}>Click here to logout</button>
                    : <Link to="/signin" className="btn btn-primary">Go to sign in page</Link>
                }
            </div>
        );
    }
}

export default Home;