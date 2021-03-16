import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import END_POINTS from "../../config/END_POINTS";

const cookie = () => {
    let allCookies = document.headers.get('USER_SESSION');
    console.log(allCookies);
}

const Login = () => {
    const [user, setUser] = useState({
        username: '',
        password: ''
    });

    const history = useHistory();

    
    const HandleChange = (e) => {
        const { name, value } = e.target;

        setUser(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }


    const HandlerClick = (e) => {
        e.preventDefault();

        fetch(`http://localhost:5000/${END_POINTS.USER.LOGIN}`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(resp => {
                return resp.json();
            })
            .then(res => {
                localStorage.setItem('user', res.token);
                history.push('/');
            })
            .catch((error) => {
                //TODO: make notification
                console.log(error);
            })
    }

    return (
        <div>
            <form className='form-register'>
                <label>Username</label>
                <input type='text' onChange={HandleChange} name='username' value={user.username}  ></input>
                <hr></hr>
                <label>Password</label>
                <input type='password' onChange={HandleChange} name='password' value={user.password}></input>
                <hr></hr>
                <input type='submit' onClick={HandlerClick} value='Login'></input>
            </form>
        </div>
    )
}

export default Login