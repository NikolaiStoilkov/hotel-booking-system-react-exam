
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './Register.css';

import Header from '../HeaderComponent/Header'
import Topheader from '../TopheaderComponent/Topheader'
import Footer from '../FooterComponent/Footer'
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

        fetch(`${END_POINTS.LOCAL_HOST}${END_POINTS.USER.REGISTER}`, {
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
        <div>
            <Topheader />
            <Header />
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
            <Footer />
        </div>
    );
}

export default Register;