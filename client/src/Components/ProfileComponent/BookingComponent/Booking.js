import { useEffect, useState } from 'react';


import './Booking.css'

const Booking = (props) => {

    console.log(props.userId);
    const [room, setRoom] = useState({
        checkIn: '',
        stayingFrom: 0,
        typeOfRoom: '',
        adults: 0,
        childrens: 0,
        phoneNumber: '',
        email: '',
    })

    const BookRoom = () => {
        useEffect(
            async () => {
                try {
                    const res = await fetch(`http://localhost:5000/profile/${props.userId}/booking`);

                    return res.json();
                } catch {
                    throw new Error({ errr: 'room cannot be booked' })
                }
            })
    }


    return (
        <div className='booking'>
            <ul>
                <li>
                    <label htmlFor="">Check-in</label>
                    <input type="date" />
                    <span className='booking-underscore'></span>
                </li>
                <li>
                    <label htmlFor="">Staying for</label>
                    <input type="text" />
                    <span className='booking-underscore'></span>

                </li>
                <li>
                    <label htmlFor="">Room/Apartments</label>
                    <input type="text" />
                    <span className='booking-underscore'></span>

                </li>
                <li>
                    <label htmlFor="">Adults</label>
                    <input type="text" />
                    <span className='booking-underscore'></span>

                </li>
                <li>
                    <label htmlFor="">Childrens</label>
                    <input type="text" />
                    <span className='booking-underscore'></span>

                </li>
                <li>
                    <label htmlFor="">Phone number</label>
                    <input type="text" />
                    <span className='booking-underscore'></span>


                </li>
                <li>
                    <label htmlFor="">Email</label>
                    <input type="text" />
                    <span className='booking-underscore'></span>


                </li>
                <li>
                    <input className='booking-button' type="button" onClick={BookRoom} value='Book' />

                </li>
            </ul>


        </div>
    )
}


export default Booking;
