import React from 'react';
import  './Home.css';

import ImageSlider from '../ImageSliderComponent/ImageSlider';
import { SliderData } from '../SliderDataComponent/SliderData';
import Header from '../HeaderComponent/Header'
import Topheader from '../TopheaderComponent/Topheader'
import Footer from '../FooterComponent/Footer'

const Home = () => {


    return (
        <div>
            <Topheader />
            <Header />
            <div className='home-container'>
                <h2>We are Royal Palace</h2>
                <span>Hotel "Royal Palace" is the most central and tallest hotel in the heart of the famous Black Sea resort Sunny Beach, at a distance of 150 meters from the beach.The hotel has 20 floors and has 491 beds, which are divided into apartments, double and single rooms with direct or side sea view to the bay of Sunny Beach and Nessebar. They are equipped with the necessary amenities for the summer vacation of all guests and have a balcony, bathroom with tub, hairdryer, air conditioning, refrigerator, cable TV, telephone, free wireless internet.The water park of Hotel Kuban is a wonderful place for water fun and thrills and offers its visitors many slides and pools. The water park will provide all its guests with all-day entertainment and will make their stay really full of energy and variety. The evening lights spilling into the water and surrounding the statues of ancient gods will fill your mood with indescribable romance and color.At the pool bar you can enjoy refreshing summer cocktails, have a cup of coffee and enjoy the beautiful view.For you and your children, open the doors and the newly opened play center, where you will find plenty of entertainment that will brighten up your holiday.For a pleasant and unforgettable stay of its guests, the hotel complex "Royal Palace" offers a gym and sauna.</span>
            </div>
            <ImageSlider slides={SliderData} />

            <Footer />
        </div>
    )
}

export default Home;