import React from 'react';
import { Switch, Route,Redirect } from "react-router-dom";


import Home from './Components/HomeComponent/Home';
import Register from './Components/RegisterComponent/Register';
import Login from './Components/LoginComponent/Login';
import Logout from './Components/Logout';
import Profile from './Components/ProfileComponent/Profile';
import Spa from './Components/SpaComponent/Spa';
import Restaurant from './Components/RestaurantComponent/Restaurant';
import AuthContext from './context/AuthContext';
import Edit from './Components/ProfileComponent/HistoryComponent/EditComponent/Edit';

function App() {
    const data = localStorage.getItem('user') === true ? JSON.parse(localStorage.getItem('user')) : '';

    return (
        <div>
            <AuthContext.Provider value={data._id}>
                <Switch>
                    <Route path='/profile/history/edit/:roomId' component={Edit}></Route>
                    <Route path='/profile/:userId/delete/:roomId' render={({ match }) => {
                        fetch(`http://localhost:5000/profile/history/delete`, {
                            method: 'POST',
                            mode: 'cors',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ roomId: match.params.roomId, userId: match.params.userId })
                        })
                            .then(resp => {
                                return resp.json();
                            })
                            .then(res => {
                                //TODO: notify for deleted room
                            })
                            .catch((error) => {
                                //TODO: make notification for errors
                                console.log(error);
                            });
                        return <Redirect to='/profile' />
                    }}></Route>
                    <Route path='/restaurant' component={Restaurant} />
                    <Route path='/spa' component={Spa} />
                    <Route path='/profile' component={Profile} />
                    <Route path='/logout' component={Logout} />
                    <Route path='/login' component={Login} />
                    <Route path='/register' component={Register} />
                    <Route path="/" component={Home} />
                </Switch>
            </AuthContext.Provider>
        </div>
    )
}

export default App;