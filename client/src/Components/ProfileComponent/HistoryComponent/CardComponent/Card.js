import React, { useEffect, useState } from 'react'

import './Card.css'

const Card = (props) => {


    const [userRoom, setUserRoom] = useState({

    })



    useEffect(() => {

    } , []);

    console.log(props.roomDetails);
    return (
        <div className='history-container'>
            <div className="room-card">
                
            </div>
        </div>
    )
}


export default Card;
