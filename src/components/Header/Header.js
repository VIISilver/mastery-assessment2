import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div className='header'>
                <h4 className='htext'>So Many Animals</h4>
                <div className='mini'>
                    <Link to='/'>
                        <h4>Home</h4>
                    </Link>
                    <Link to='/details'>
                        <h4>Details</h4>
                    </Link>
                    <Link to='/'>
                        <h4>Signout</h4>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Header;