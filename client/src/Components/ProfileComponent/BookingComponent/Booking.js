import { useEffect, useState } from 'react';


import './Booking.css'

const Booking = (props) => {
    console.log(props.userId);
    const [room, setRoom] = useState({
        checkIn: '',
        stayingFrom: '',
        typeOfRoom: '',
        adults: '',
        childrens: '',
        phoneNumber: '',
        email: '',
    })

    const ClickHandler = (e) => {
        e.preventDefault();
        fetch(`http://localhost:5000/profile/${props.userId}/booking`,
            {
                method: 'POST',
                mode: 'cors',
                header: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(room)
            })
                .then(resp => resp.json())
                .then(res => {
                    console.log(res);

                })
                .catch((e) => console.log(e))
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
        <div className='booking'>
            <ul>
                <li>
                    <label htmlFor="">Check-in</label>
                    <input onChange={ChangeHandler} name='checkIn' value={room.checkIn} type="date" />
                    <span className='booking-underscore'></span>
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
                    <input  onClick={ClickHandler} className='booking-button' type="button" value='Book' />

                </li>
            </ul>


        </div>
    )
}


export default Booking;
