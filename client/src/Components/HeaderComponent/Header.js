import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import HotelLogo from '../../images/whitepalace.png'

const Header = (props) => {
    const [auth, setAuth] = useState({
        isLogged: false,
        _id: '',
        username: '',
        token: ''
    })

    useEffect(() => {
        if (localStorage.getItem('user')) {
            setAuth(JSON.parse(localStorage.getItem('user')));
        }
    }, []);


    useEffect(() => {
        const header = document.getElementById("header");
        const scrollCallBack = window.addEventListener("scroll", () => {
            if (window.pageYOffset >= header.offsetTop) {
                header.classList.add("sticky" ,"on-change-transition", "on-change-logo", "on-changed-navbar");
            } else {
                header.classList.remove("sticky", "on-change-transition", "on-change-logo","on-changed-navbar");
            }
        });
        return () => {
            window.removeEventListener("scroll", scrollCallBack);
        };
    }, []);


    return (
        <header id="header" className="navbar">
            <img id='hotel-logo' src={HotelLogo} className="logo" alt="hotelLogo"></img>
            <ul id='navbar-links-ul' className="navbar-links">
                <li>
                    <Link to="/">HOME</Link>
                </li>
                <li>
                    <Link to="/spa">SPA</Link>
                </li>
                <li>
                    <Link to="/restaurant">RESTAURANT</Link>
                </li>
                {
                    auth.isLogged === false ?
                        <li>
                            <Link to="/login">LOGIN</Link>
                        </li>
                        :
                        <li>
                            <Link to={`/profile/${auth._id}/booking`}>PROFILE</Link>
                        </li>
                }
                {
                    auth.isLogged === false ?
                        <li>
                            <Link to="/register">REGISTER</Link>
                        </li>
                        :
                        <li>
                            <Link to="/logout">LOGOUT</Link>
                        </li>
                }
            </ul>
        </header>
    )

}

export default Header;