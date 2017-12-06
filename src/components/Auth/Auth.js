import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Auth extends Component {
    render() {
        return (
            <div >
                <Link to='/browsing'>
                    <button><span>Login</span></button>
                </Link>
                <a><button><span>Register</span></button></a>
                <p>Just to show that I can use a paragrah element.</p>
            </div>
        );
    }
}

export default Auth;