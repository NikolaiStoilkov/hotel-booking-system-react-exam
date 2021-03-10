
import { useEffect, useState } from 'react';
import { Redirect, Route, Router, Switch, useHistory } from 'react-router-dom';
import './Register.css';
import END_POINTS from '../../config/END_POINTS';

const Register = () => {
    const [user, setUser] = useState({
        username: '',
        password: '',
        rePassword: ''
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

    const HandleClick = (e) => {
        e.preventDefault();

        fetch(`http://localhost:5000/${END_POINTS.USER.REGISTER}`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => {
                return res.json();
            })
            .then(data => {

                //apply data to cookie or local storage
                //create authentication
                console.log(data);

                history.push('/');
            })
            .catch((error) => {
                console.log(error);
            })



    }

    return (
        <div className='register'>
            <form className="form-register">
                <label>Username</label>
                <input type='text' onChange={HandleChange} name='username' value={user.username}></input>
                <hr></hr>
                <label>Password</label>
                <input type='password' onChange={HandleChange} name='password' value={user.password}></input>
                <hr></hr>
                <label>Repeat password</label>
                <input type='password' onChange={HandleChange} name='rePassword' value={user.rePassword}></input>
                <hr></hr>
                <input type='submit' onClick={HandleClick} value='Register'></input>
            </form>
        </div>
    );
}

export default Register;