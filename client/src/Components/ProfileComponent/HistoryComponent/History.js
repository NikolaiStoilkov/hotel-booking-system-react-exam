import React, { useEffect, useState } from 'react'

import END_POINTS from '../../../config/END_POINTS';
import './History.css'

import Card from './CardComponent/Card'

const History = (props) => {
    
    // console.log(JSON.stringify({user: props.userId}))
    const loadHistoryHandler = useEffect(() => {

        fetch(`http://localhost:5000/profile/history`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({user: props.userId})
        })
            .then(resp => {
                return resp.json();
            })
            .then(res => {
                console.log(res);
            })
            .catch((error) => {
                //TODO: make notification
                console.log(error);
            })

    }, []);



    return (
        <div className='history-containers-info' onLoad={loadHistoryHandler} >

        </div>
    )
}


export default History
