import React, { useEffect, useState } from 'react';
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
            if (window.pageYOffset > header.offsetHeight) {
                header.classList.add("sticky");
            } else {
                header.classList.remove("sticky");
            }
        });
        return () => {
            window.removeEventListener("scroll", scrollCallBack);
        };
    }, []);


    return (
        <header id="header" className="navbar">
            <img src={HotelLogo} className="logo" alt="hotelLogo"></img>
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
                {
                    auth.isLogged === false ?
                        <li>
                            <a href="/login">LOGIN</a>
                        </li>
                        :
                        <li>
                            <a href="/profile">PROFILE</a>
                        </li>
                }
                {
                    auth.isLogged === false ?
                        <li>
                            <a href="/register">REGISTER</a>
                        </li>
                        :
                        <li>
                            <a href="/logout">LOGOUT</a>
                        </li>
                }
            </ul>
        </header>
    )

}

export default Header;


{/* <a href="/hotel">HOTEL</a>
<a href="/rooms">ROOMS</a>
<a href="/restaurants">RESTAURANTS</a>
<a href="/spa">SPA</a>
<a href="/contacts">CONTACTS</a>
<a href="/login">LOGIN</a>
<a href="/register">REGISTER</a> */}