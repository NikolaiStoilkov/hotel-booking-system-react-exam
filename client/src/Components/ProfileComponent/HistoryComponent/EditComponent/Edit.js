import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';


import './Edit.css';

import Pictures from '../../BookingComponent/PicturesComponent/Pictures';

const Edit = (props) => {

    const [room, setRoom] = useState({
        checkIn: '',
        stayingFrom: '',
        typeOfRoom: '',
        adults: '',
        childrens: '',
        phoneNumber: '',
        email: '',
        roomImg: '',
    })

    const history = useHistory();
    const onLoadRoomDataHandler = (e) => {
        e.preventDefault();

        fetch(`http://localhost:5000/profile/history/edit`,
            {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ roomId: props.roomId })
            })
            .then(resp => resp.json())
            .then(({ editRoom }) => {
                console.log(editRoom)
                setRoom({
                    checkIn: editRoom.checkIn,
                    stayingFrom: editRoom.stayingFrom,
                    typeOfRoom: editRoom.typeOfRoom,
                    adults: editRoom.adults,
                    childrens: editRoom.childrens,
                    phoneNumber: editRoom.phoneNumber,
                    email: editRoom.email,
                    roomImg: editRoom.roomImg,
                });
            })
    }


    const ClickHandler = (e) => {
        e.preventDefault();
        fetch(`http://localhost:5000/profile/history/edit/update`,
            {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ roomId: props.roomId, roomData: room })
            })
            .then(resp => resp.json())
            .then(res => {
                console.log(res);
                history.push('/profile');
            })
            .catch((e) => console.log(e))
    }

    const PictureSrcHandler = (element) => {
        console.log(element.getAttribute('src'));
        let elementSrc = element.getAttribute('src').toString();

        setRoom((prevProps) => {
            return {
                ...prevProps,
                roomImg: elementSrc
            }
        })
        console.log(room);

    }

    const ChangeHandler = (e) => {
        const { name, value } = e.target;

        setRoom(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })

    }

    return (
        <div className="details-room-background" onLoad={props.roomId != '' ? onLoadRoomDataHandler : null} >
            <div className='update-room-data'>
                <div className="booking">
                    <form>
                        <ul>
                            <li>
                                <label htmlFor="">Check-in</label>
                                <input onChange={ChangeHandler} name='checkIn' value={room.checkIn} type="date" />
                                <span className='booking-underscore-date'></span>
                            </li>
                            <li>
                                <label htmlFor="">Staying for</label>
                                <input onChange={ChangeHandler} name='stayingFrom' value={room.stayingFrom} type="text" />
                                <span className='booking-underscore'></span>

                            </li>
                            <li>
                                <label htmlFor="">Room/Apartments</label>
                                <input onChange={ChangeHandler} name='typeOfRoom' value={room.typeOfRoom} type="text" />
                                <span className='booking-underscore'></span>

                            </li>
                            <li>
                                <label htmlFor="">Adults</label>
                                <input onChange={ChangeHandler} name='adults' value={room.adults} type="text" />
                                <span className='booking-underscore'></span>

                            </li>
                            <li>
                                <label htmlFor="">Childrens</label>
                                <input onChange={ChangeHandler} name='childrens' value={room.childrens} type="text" />
                                <span className='booking-underscore'></span>

                            </li>
                            <li>
                                <label htmlFor="">Phone number</label>
                                <input onChange={ChangeHandler} name='phoneNumber' value={room.phoneNumber} type="text" />
                                <span className='booking-underscore'></span>


                            </li>
                            <li>
                                <label htmlFor="">Email</label>
                                <input onChange={ChangeHandler} name='email' value={room.email} type="text" />
                                <span className='booking-underscore'></span>


                            </li>
                            <li>
                                <input onClick={ClickHandler} className='booking-button' type="submit" value='Edit' />
                            </li>
                        </ul>
                        <Pictures getSrc={PictureSrcHandler} ></Pictures>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Edit;