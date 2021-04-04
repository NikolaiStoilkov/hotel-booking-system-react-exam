import React, { useCallback, useEffect, useState } from 'react';
import { SliderData } from '../SliderDataComponent/SliderData.js'
import './ImageSlider.css';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const ImageSlider = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;
    
    const nextSlider = useCallback(() => {
        setCurrent((current) => current === length - 1 ? 0 : current + 1);
    }, [length]);

    const prevSlider = useCallback((current) => {
        setCurrent((current) => current === 0 ? length - 1 : current -1);
    },[length]);

    useEffect(() => {
        setInterval(() => {
            nextSlider();
        }, 5000)
    }, [nextSlider]);



    if (!Array.isArray(slides) || slides.length <= 0) {
        return null
    }

    return (
        <section className="slider">
            <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlider} />
            <FaArrowAltCircleRight className="right-arrow" onClick={nextSlider} />
            { SliderData.map((slide, index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                        {index === current && (
                            <img src={slide.image} alt="hotel" className="image"></img>)}
                    </div>
                )
            })}
        </section>
    );


}

export default ImageSlider;