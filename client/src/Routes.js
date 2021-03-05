import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import Home from './Components/HomeComponent/Home'
const Routes = () => {


    return (
        <Router>
            <Switch>
                <Route path="/" >
                    <Home></Home>
                </Route>
                <Route path="/hotel" >
                    <Home></Home>
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes;