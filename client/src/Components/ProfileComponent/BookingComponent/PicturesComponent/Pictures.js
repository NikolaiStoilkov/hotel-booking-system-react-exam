import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';


import './Picture.css'

import { SliderData } from '../../../SliderDataComponent/SliderData';
import { useCallback, useState } from 'react';




const Pictures = () => {

    const [picture, setPicture] = useState(0);
    const length = SliderData.length;

    const prevPicture = useCallback(() => {
        setPicture((current) => current === length - 1 ? 0 : current + 1);
    }, [length])


    return (
        <div>
            <FaArrowAltCircleLeft className="left-arrow-pictures" onClick={prevPicture} />
            <div className="picture-container">
                {SliderData.map((slide, index) => {
                    return (
                        <div className={index === picture ? 'slide-pic active-pic' : 'slide-pic'} key={index}>
                            {index === picture && (
                                <img src={slide.image} alt="hotel" className="image-PIC"></img>)}
                        </div>
                    )
                })}
            </div>
            <FaArrowAltCircleRight className="right-arrow-pictures" />
        </div>
    )
}

export default Pictures;