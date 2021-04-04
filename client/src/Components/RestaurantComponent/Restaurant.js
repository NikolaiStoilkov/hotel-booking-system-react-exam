import { Link } from 'react-router-dom';

import './Restaurant.css';

//images 
import res1 from '../../images/restaurant/res1.jpg';
import res2 from '../../images/restaurant/res2.jpg';
import res3 from '../../images/restaurant/res3.jpg';
import res4 from '../../images/restaurant/res4.jpg';
import res5 from '../../images/restaurant/res5.jpg';
import res6 from '../../images/restaurant/res6.jpg';


import Header from '../HeaderComponent/Header'
import Topheader from '../TopheaderComponent/Topheader'
import Footer from '../FooterComponent/Footer'
import { useEffect, useState } from 'react';

const Restaurant = () => {
    const [userData, setUserData] = useState({
        isLogged: false,
        _id: '',
    })

    useEffect(() => {
        if (localStorage.getItem('user')) {
            setUserData(JSON.parse(localStorage.getItem('user')));
        }
    }, []);
    return (
        <div>
            <Topheader />
            <Header />
            <h2 className='res-on-img'>RESTAURANTS AND BARS</h2>
            <h3 className='res-on-img-after'>WELCOME THROUGHOUT ANY SEASON!</h3>
            <img className='intro-img' src={res1} alt="" />
            <div className="res-container-info">
                <img className='res-image-size' src={res6} alt="" />
                <div className='left'>
                    <h2>Ресторант ROYAL PALACE</h2>
                    <p>Ресторант "ROYAL PALACE" предлага: бюфет закуска и вечеря, а така също и богато меню (А Ла Карт), шведска маса на закуска.</p>
                </div>
                <div className='right'>
                    <h2>Royal Palace</h2>
                    <p>Tyk e мястото, където можете да се насладите на вкусни ястия и на великолепната гледка към планината.</p>
                </div>
                <img className='res-image-size' src={res5} alt="" />
                <img className='res-image-size' src={res4} alt="" />
                <div className='left'>
                    <h2>ЛОБИ бар</h2>
                    <p>Разположени във фоайето на хотела, те предлагат разнообразни коктейли, топли напитки, голямо разнообразие от сладоледи и сладкиши.</p>
                </div>
                <div className='right'>
                    <h2>Бар БАСЕЙН</h2>
                    <p>Ако Ви е нужна ободряваща напитка след изморително плуване посетете Бара при басейна.</p>
                </div>
                <img className='res-image-size' src={res3} alt="" />
                <img className='res-image-size' src={res2} alt="" />
                <div className='left'>
                    <h2>НОЩЕН бар и дискотека</h2>
                    <p>Хотел Royal Palace Ви предлага приятно прекарване на вечерта в нощния бар, разполагащ с 220 места – богат избор на коктейли и любима музика.</p>
                </div>
            </div>
            <section className="res-section-style-end">
                <Link to={userData.isLogged == true ? `/profile/${userData._id}/booking` : '/register'}  className='res-book-btn'>НАПРАВИ РЕЗЕРВАЦИЯ</Link>
            </section>
            <Footer />
        </div>
    )
}

export default Restaurant;