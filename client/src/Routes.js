import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    withRouter
} from "react-router-dom";
import Home from './components/HomeComponent/Home'
import Hotel from './components/HotelComponent/Hotel';
import Register from './components/RegisterComponent/Register';
const Routes = () => {


    return (
        <Router>
            <Switch>
                <Route path='/register' component={ Register } />
                <Route path='/hotel'component={ Hotel } />
                <Route path="/" component={ Home } /> 
            </Switch>
        </Router>
    )
}

export default  Routes ;