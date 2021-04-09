import React, { useEffect, useState } from 'react'
import { Link, useHistory, Route, Switch } from 'react-router-dom';


import './Card.css';

import Edit from '../EditComponent/Edit';




const Card = (props) => {

    const setId = useEffect(() => {
        const elements = document.querySelectorAll('.room-data');

        elements[props.uniqKey].id = props.roomData._id;

    }, []);

    const history = useHistory();
    let id;

    const deleteBookedRoomFromHistoryHandler = (e) => {
        const elementWithId = e.target.parentNode.parentNode.parentNode;
        const selectedPartials = elementWithId.querySelectorAll('.room-data');
        for (const divRoomsId of selectedPartials) {
            id = divRoomsId.id;
        }

        console.log(JSON.stringify({ roomId: id }));
        fetch(`http://localhost:5000/profile/history/delete`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ roomId: id, userId: props.userId })
        })
            .then(resp => {
                return resp.json();
            })
            .then(res => {
                console.log(res);
                history.push(`/profile`)
            })
            .catch((error) => {
                //TODO: make notification
                console.log(error);
            })
    }

    return (<div className='booked-room-container' >
        <ul id='btn'>
            <li>
                <Link to={`/profile/history/edit`} className='details-btn' >Edit</Link>
            </li>
            <li>
                <Link to={`/profile/${props.userId}/history/delete`} className='details-btn' onClick={deleteBookedRoomFromHistoryHandler}>Delete</Link>

            </li>
        </ul>


        

        
        <div className='room-data' onLoad={setId}>

            <ul>
                <li>
                    <label>Check-in: </label>
                    <label>{props.roomData.checkIn}</label>
                </li>
                <li>
                    <label>Staying for: </label>
                    <label>{props.roomData.stayingFrom}</label>
                </li>
                <li>
                    <label>Type of room: </label>
                    <label>{props.roomData.typeOfRoom}</label>
                </li>
                <li>
                    <label>Adults: </label>
                    <label>{props.roomData.adults}</label>
                </li>
                <li>
                    <label>Childrens: </label>
                    <label>{props.roomData.childrens}</label>
                </li>
                <li>
                    <label>Phone number: </label>
                    <label>{props.roomData.phoneNumber}</label>

                </li>
                <li>
                    <label>email adress: </label>
                    <label>{props.roomData.email}</label>
                </li>
            </ul>
        </div>

        <img src={props.roomData.roomImg} className='logo logo-to-right' alt="booked-room-img" />
    </div>)
}


export default Card;
