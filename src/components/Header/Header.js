import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className='header'>
            <h4 className='htext'>So Many Animals</h4>
            <div className='mini'>
                <Link to='/'>
                    <h4>Home</h4>
                </Link>
                <Link to='browsing'>
                    <h4>Browsing</h4>
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

export default Header;