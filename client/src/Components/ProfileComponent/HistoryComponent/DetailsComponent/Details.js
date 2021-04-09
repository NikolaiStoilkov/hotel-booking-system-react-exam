import React, { useEffect, useState } from 'react';


import './Details.css';

import Pictures from '../../BookingComponent/PicturesComponent/Pictures';

const Details = (props) => {
    const { _id } = JSON.parse(localStorage.getItem('user'));
    const userId = _id;
    const [room, setRoom] = useState({
        checkIn: '',
        stayingFrom: '',
        typeOfRoom: '',
        adults: '',
        childrens: '',
        phoneNumber: '',
        email: '',
        roomImg: 'https://pix6.agoda.net/hotelImages/6395607/-1/9c841444ec7a198e3fc2da32077ea95b.jpg?s=1024x768',
        userId: userId
    })
    console.log(userId)
    const onLoadDataHandler = (e) => {
        e.preventDefault();
        console.log({ userId: _id});
        fetch(`http://localhost:5000/profile/history/details`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userId: room.userId})
        })
        .then(resp => resp.json())
        .then(data => {
            console.log(data);
        })

    }
    const ClickHandler = (e) => {
        e.preventDefault();
        // fetch(`http://localhost:5000/profile/booking`,
        //     {
        //         method: 'POST',
        //         mode: 'cors',
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify({userID})
        //     })
        //     .then(resp => resp.json())
        //     .then(res => {
        //         console.log(res);
        //         history.push('/profile');
        //     })
        //     .catch((e) => console.log(e))
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
        <div className="details-room-background" onLoad={onLoadDataHandler}>
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

export default Details;