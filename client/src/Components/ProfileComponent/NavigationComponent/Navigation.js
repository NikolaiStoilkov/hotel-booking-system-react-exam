import { Route, Link } from 'react-router-dom';
import './Navigation.css';
import Booking from '../BookingComponent/Booking';
import History from '../HistoryComponent/History';

const Navigation = (props) => {
    let { _id, username } = JSON.parse(localStorage.getItem('user'));

    return (
        <div className='profile-background'>

            <div className='navigation'>
                <div className='navigation-bar'>
                    <ul>
                        <li>
                            <Link to={`/profile/${_id}/booking`} >Booking</Link>
                        </li>
                        <li>
                            <Link to={`/profile/${_id}/history`}>History</Link>
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
                        <Route path={`/profile/:userId/booking`}>
                            <Booking userId={_id}></Booking>
                        </Route>
                        <Route path={`/profile/:userId/history`}>
                            <History userId={_id}></History>
                        </Route>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navigation;