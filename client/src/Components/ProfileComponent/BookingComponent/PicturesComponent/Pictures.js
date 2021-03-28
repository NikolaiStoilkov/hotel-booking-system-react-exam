import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';


import './Picture.css'

import { RoomData } from '../RoomDataImages';
import { useCallback, useEffect, useState } from 'react';




const Pictures = (props) => {

    const [picture, setPicture] = useState(0);
    const length = RoomData.length;

    const prevPicture = useCallback(() => {
        setPicture((current) => current === length - 1 ? 0 : current + 1);
    }, [length])

    const nextPicture = useCallback((current) => {
        setPicture((current) => current === 0 ? length - 1 : current - 1);
    }, [length]);




    const ClickHandler = () => {
        let imgElement = document.getElementById('image');
        props.getSrc(imgElement)
    }


    return (
        <div onClick={ClickHandler}>
            <span className='room-pic-span'>Choose a room:</span>
            <FaArrowAltCircleLeft className="left-arrow-pictures" onClick={prevPicture} />
            <div className="picture-container">
                {RoomData.map((slide, index) => {
                    return (
                        <div className={index === picture ? 'slide-pic active-pic' : 'slide-pic'} key={index}>
                            {index === picture && (
                                <img id='image'
                                    src={slide.image}
                                    alt="hotel"
                                    className="image-pic"></img>)}
                        </div>
                    )
                })}
            </div>
            <FaArrowAltCircleRight className="right-arrow-pictures" onClick={nextPicture} />
        </div>
    )
}

export default Pictures;