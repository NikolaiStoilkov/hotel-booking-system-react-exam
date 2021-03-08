import React from 'react';
import './Home';

import ImageSlider from '../ImageSliderComponent/ImageSlider';
import { SliderData } from '../SliderDataComponent/SliderData';

const Home = () => {


    return (
        <ImageSlider slides={ SliderData }>
            
        </ImageSlider>
    )
}

export default Home;