import { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';


import './Booking.css'
import Pictures from './PicturesComponent/Pictures';

const Booking = (props) => {
    const [room, setRoom] = useState({
        checkIn: '',
        stayingFrom: '',
        typeOfRoom: '',
        adults: '',
        childrens: '',
        phoneNumber: '',
        email: '',
        roomImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5_vPknhtzuGHEvSr6R_wYmCo_dYKre8FIFg&usqp=CAU',
        userId: props.userId
    })

    const history = useHistory();

    const PictureSrcHandler = (element) => {
        console.log(element.getAttribute('src'));
        let elementSrc = element.getAttribute('src').toString();

        console.log(elementSrc)
        setRoom((prevProps) => {
            return {
                ...prevProps,
                roomImg: elementSrc
            }
        })
        console.log(room);

    };


    const ClickHandler = (e) => {
        e.preventDefault();
        fetch(`http://localhost:5000/profile/booking`,
            {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(room)
            })
            .then(resp => resp.json())
            .then(res => {
                console.log(res);
                history.push('/profile');
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
                        <input onClick={ClickHandler} className='booking-button' type="submit" value='Book' />
                    </li>
                </ul>
                <Pictures getSrc={PictureSrcHandler} ></Pictures>
            </form>

        </div>
    )
}


export default Booking;
