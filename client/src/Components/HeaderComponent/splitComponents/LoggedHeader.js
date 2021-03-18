import React from 'react';

import '../Header.css'

const LoggedHeader = ({ image }) => {

    return (
        <header id="header" className="navbar">
            <img src={image} className="logo" ></img>
            <ul className="navbar-links">
                <li>
                    <a href="/hotel">HOTEL</a>
                </li>
                <li>
                    <a href="/spa">SPA</a>
                </li>
                <li>
                    <a href="/useful">USEFUL</a>
                </li>
                <li>
                    <a href="/profile">PROFILE</a>
                </li>
                <li>
                    <a href="/logout">LOGOUT</a>
                </li>
            </ul>
        </header>
    )
}

export default LoggedHeader;