import React, { Component } from 'react';
import { logout, isLogin } from '../../utils/common';
import { Redirect } from 'react-router-dom';
class Dashboard extends Component {
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
            <div className="container">
                <div className="row col-lg-12">
                    <div className="col-lg-4"><h1>Dashboard</h1></div>
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4">
                        {this.state.isLogin ? 
                            <button className="btn btn-primary" onClick={() => this.handleLogout()}>Logout</button>
                            : <Redirect to="/signin"/>
                        }</div>
                </div>
            </div>
        );
    }
}

export default Dashboard;