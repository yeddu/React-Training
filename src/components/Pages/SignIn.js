import React from 'react';
import { login } from '../../utils/common';

const SignIn = (props) => {

    const handleLogin = () => {
        login();
        props.history.push('/dashboard');
    }

    return (
        <div className="">
            <div className="container">
                <div className="row col-lg-12">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4"><h1>Sign in</h1></div>
                    <div className="col-lg-4"></div>
                </div>
                <div className="row col-lg-12 ">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4">
                        <button className="btn btn-primary" onClick={() => handleLogin()}>Click here to log in</button>
                    </div>
                    <div className="col-lg-4"></div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;