import { Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';


import './Profile.css'
import Navigation from './NavigationComponent/Navigation'
import Details from './HistoryComponent/EditComponent/Edit';
import Edit from './HistoryComponent/EditComponent/Edit'

const Profile = (props) => {

    const [currentId, setCurrentId ] = useState('');
    const getId = (id) => {
        setCurrentId(id);
    }

    return (
        <div>

            <Navigation getId={getId} ></Navigation>
            <Switch>
                <Route path='/profile/history/edit' >
                    <Edit roomId={currentId}></Edit>
                </Route>
            </Switch>


        </div>
    )
}

export default Profile;