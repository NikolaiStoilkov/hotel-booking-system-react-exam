import React, { useEffect, useState } from 'react'

import './History.css'

import Card from './CardComponent/Card';

const History = (props) => {
    const [data, setRooms] = useState([]);
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

    }, [props.userId]);

    return (
        <div className='history-containers-info' onLoad={loadHistoryHandler} >
            {
                (data.length !== 0 ?
                    data.rooms.map((room, i) => {
                        return (
                            <Card
                                uniqRoomId={room._id}
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
