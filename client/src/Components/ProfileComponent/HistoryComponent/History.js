import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


import END_POINTS from '../../../config/END_POINTS';
import './History.css'

import Card from './CardComponent/Card'

const History = (props) => {

    const [data, setRooms] = useState([]);
    // console.log(JSON.stringify({user: props.userId}))
    const loadHistoryHandler = useEffect(() => {

        fetch(`http://localhost:5000/profile/history`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user: props.userId })
        })
            .then(resp => {
                return resp.json();
            })
            .then(res => {
                setRooms(res);
            })
            .catch((error) => {
                //TODO: make notification
                console.log(error);
            })

    }, []);


    return (
        <div className='history-containers-info' onLoad={loadHistoryHandler} >
            {
                (data.rooms != undefined ?
                    data.rooms.map((room) => {
                        // console.log(room);
                        return (<div className='booked-room-container'>
                            <div className='room-data'>
                                <Link to='/profile/userId/history/details' className='details-btn' />
                                <ul>
                                    <li>
                                        <label>Check-in: </label>
                                        <label>{room.checkIn}</label>
                                    </li>
                                    <li>
                                        <label>Staying for: </label>
                                        <label>{room.stayingFrom}</label>
                                    </li>
                                    <li>
                                        <label>Type of room: </label>
                                        <label>{room.typeOfRoom}</label>
                                    </li>
                                    <li>
                                        <label>Adults: </label>
                                        <label>{room.adults}</label>
                                    </li>
                                    <li>
                                        <label>Childrens: </label>
                                        <label>{room.childrens}</label>
                                    </li>
                                    <li>
                                        <label>Phone number: </label>
                                        <label>{room.phoneNumber}</label>

                                    </li>
                                    <li>
                                        <label>email adress: </label>
                                        <label>{room.email}</label>
                                    </li>
                                </ul>
                            </div>

                            <img src={room.roomImg} className='logo logo-to-right' alt="booked-room-img" />
                        </div>)
                    }) :
                    <div>
                        <p>Loading...</p>
                    </div>)
            }

        </div>
    )
}



export default History
