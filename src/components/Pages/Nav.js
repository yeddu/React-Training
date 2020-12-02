import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Nav extends Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/"  className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/posts" className="nav-link">Posts</Link>
                        </li>
                        <li className="nav-item">
                        < Link to="/details" className="nav-link">Profile</Link>
                        </li>
                        </ul>
                    </div>
                </nav>
            </>
        );
    }
}

export default Nav;