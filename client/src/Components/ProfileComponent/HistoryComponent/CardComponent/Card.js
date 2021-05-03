import React from 'react'
import { Link } from 'react-router-dom';

//styles
import './Card.css';

const Card = (props) => {
    return (
        <div id={props.uniqRoomId} className='booked-room-container' key={props.uniqKey}>
            <ul id='btn'>
                <li>
                    <Link
                        to={`/profile/history/edit/${props.uniqRoomId}`}
                        className='details-btn'
                    >Edit</Link>
                </li>
                <li>
                    <Link to={`/profile/${props.userId}/delete/${props.uniqRoomId}`} className='details-btn' >Delete</Link>
                </li>
            </ul>
            <div className='room-data' >
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
