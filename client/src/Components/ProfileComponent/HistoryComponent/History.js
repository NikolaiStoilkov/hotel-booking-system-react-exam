import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


import END_POINTS from '../../../config/END_POINTS';
import './History.css'

import Card from './CardComponent/Card';

const History = (props) => {

    const [data, setRooms] = useState([]);
    // console.log(JSON.stringify({user: props.userId}))
    
    const loadHistoryHandler = useEffect(() => {

        fetch(`http://localhost:5000/profile/history`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user: props.userId })
        })
            .then(resp => {
                return resp.json();
            })
            .then(res => {
                setRooms(res);
            })
            .catch((error) => {
                //TODO: make notification
                console.log(error);
            })

    }, []);


    return (
        <div className='history-containers-info' onLoad={loadHistoryHandler} >
            {
                (data.rooms != undefined || data.rooms != null ?
                    data.rooms.map((room, i) => {
                        let roomId = room._id;
                        props.getId(roomId);
                        return (
                            <Card callback={loadHistoryHandler}
                                uniqRoomId={roomId}
                                userId={props.userId}
                                roomData={room}
                                uniqKey={i} >
                            </Card>)
                    }) :
                    <div className='loading'>
                        <p>Loading...</p>
                    </div>)
            }


        </div>
    )
}



export default History
