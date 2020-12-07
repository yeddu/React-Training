import React from 'react';
import { login } from '../../utils/common';
import './Signin.scss'
const SignIn = (props) => {

    const handleLogin = (event) => {
        event.preventDefault();
        login();
        props.history.push('/dashboard');
    }

    return (
        <div className="flex-container">
            <div className="login-item">
                <h1>Sign In </h1>
                <form action="" method="get" className="form form-login" onSubmit={handleLogin}>
                    <div className="form-field">
                        <input id="login-username" type="text" className="form-input" placeholder="Username" required/>
                    </div>

                    <div className="form-field">
                        <input id="login-password" type="password" className="form-input" placeholder="Password" required/>
                    </div>

                    <div className="form-field">
                        <input type="submit" value="Sign In"/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignIn;