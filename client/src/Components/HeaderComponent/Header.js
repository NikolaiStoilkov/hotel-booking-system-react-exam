import React, { useEffect, useState } from 'react';
import './Header.css';
import LoggedHeader from './splitComponents/LoggedHeader'
import GuestHeader from './splitComponents/GuestHeader';
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
            console.log(JSON.parse(localStorage.getItem('user')))
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
        <div>
            { auth.isLogged ? <LoggedHeader image={HotelLogo} /> : <GuestHeader image={HotelLogo} />}
        </div>)


}

export default Header;


{/* <a href="/hotel">HOTEL</a>
<a href="/rooms">ROOMS</a>
<a href="/restaurants">RESTAURANTS</a>
<a href="/spa">SPA</a>
<a href="/contacts">CONTACTS</a>
<a href="/login">LOGIN</a>
<a href="/register">REGISTER</a> */}