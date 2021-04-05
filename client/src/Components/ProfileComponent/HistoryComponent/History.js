import React, { useEffect, useState } from 'react'

import END_POINTS from '../../../config/END_POINTS';
import './History.css'

import Card from './CardComponent/Card'

const History = (props) => {


    const [userRoom, setUserRoom] = useState({

    })

    const loadHistoryHandler = useEffect(() => {

        fetch(`http://localhost:5000/profile/history`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userId: props.userId })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            });

    }, []);



    return (
        <div className='history-containers-info' onLoad={loadHistoryHandler}>

        </div>
    )
}


export default History
