import React, { useEffect, useState } from 'react';
import './Header.css';
import HotelLogo from '../../images/whitepalace.png'

const Header = () => {
    const [headerText, setHeaderText] = useState();
    useEffect(() => {
        const header = document.getElementById("header");
        const scrollCallBack = window.addEventListener("scroll", () => {
            if (window.pageYOffset > header.offsetHeight) {
                header.classList.add("sticky");
                setHeaderText();
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
            <img src={HotelLogo} className="logo"></img>
            <ul className="navbar-links">
                <li>
                    <a href="/hotel">HOTEL</a>
                </li>
                <li>
                    <a href="/spa">SPA</a>
                </li>
                <li>
                    <a href="/contacts">CONTACTS</a>
                </li>
                <li>
                    <a href="/login">LOGIN</a>
                </li>
                <li>
                    <a href="/register">REGISTER</a>
                </li>


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