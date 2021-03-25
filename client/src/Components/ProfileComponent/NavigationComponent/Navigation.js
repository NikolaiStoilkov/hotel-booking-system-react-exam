import { useEffect } from 'react';
import { useParams } from 'react-router';
import { Switch, Route } from 'react-router-dom';

import './Navigation.css'

import Booking from '../BookingComponent/Booking';
import Pictures from '../BookingComponent/PicturesComponent/Pictures'


const Navigation = () => {


    let { _id, username } = JSON.parse(localStorage.getItem('user'));
    const links = {
        booking: `/profile/${_id}/booking`,
        history: `/profile/${_id}/history`
    }



    return (
        <div className='profile-background'>

            <div className='navigation'>
                <div className='navigation-bar'>
                    <ul>
                        <li>
                            <a href={links.booking} >Booking</a>
                        </li>
                        <li>
                            <a href={links.history} >History</a>
                        </li>
                        <li>
                            <a href="/">Home</a>
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
                            <h1>history</h1>
                        </Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navigation;