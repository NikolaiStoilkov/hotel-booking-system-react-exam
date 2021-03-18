import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

import './index.css';


import Home from './components/HomeComponent/Home';
import Hotel from './components/HotelComponent/Hotel';
import Register from './components/RegisterComponent/Register';
import Login from './components/LoginComponent/Login';
import Logout from './components/Logout';
import Profile from './components/ProfileComponent/Profile'



ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Switch>
                <Route path='/profile' component={Profile} />
                <Route path='/logout' component={Logout} />
                <Route path='/login' component={Login} />
                <Route path='/register' component={Register} />
                <Route path='/hotel' component={Hotel} />
                <Route path="/" component={Home} />
            </Switch>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
