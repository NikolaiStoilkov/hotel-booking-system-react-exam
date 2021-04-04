import { useEffect } from 'react';
import { useParams } from 'react-router';
import { Switch, Route, Link } from 'react-router-dom';

import './Navigation.css'
import END_POINTS from '../../../config/END_POINTS';
import Booking from '../BookingComponent/Booking';
import Pictures from '../BookingComponent/PicturesComponent/Pictures'
import History from '../HistoryComponent/History'


const Navigation = () => {


    let { _id, username } = JSON.parse(localStorage.getItem('user'));
    const links = {
        booking: `/profile/${_id}/booking`,
        history: `/profile/${_id}/history`
    }


    const loadHistoryHandler = () => {
        fetch(`http://localhost:5000/profile/history`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userId: _id })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        });

    }


    return (
        <div className='profile-background'>

            <div className='navigation'>
                <div className='navigation-bar'>
                    <ul>
                        <li>
                            <Link to={links.booking} >Booking</Link>
                        </li>
                        <li>
                            <Link to={links.history} onClick={loadHistoryHandler}>History</Link>
                        </li>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                    </ul>
                </div>
                <span className='line'></span>
                <div className='navigation-book-list'>
                    <span className='user'>Hello, {username}</span>
                    <div className='book-list-container'>
                        <Switch>
                            <Route path={links.booking}>
                                <Booking userId={_id}></Booking>
                            </Route>
                            <Route path={links.history}>
                                <History usedId={_id}></History>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navigation;