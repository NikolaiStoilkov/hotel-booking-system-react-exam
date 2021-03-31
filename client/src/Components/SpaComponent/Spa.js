import React from 'react';
import { Link } from 'react-router-dom';


import './Spa.css';


//images
import spa1 from '../../images/spa/spa1.jpg'
import spa2 from '../../images/spa/spa2.jpg'
import spa3 from '../../images/spa/spa3.jpg'
import spa4 from '../../images/spa/spa4.jpg'

import Header from '../HeaderComponent/Header'
import Topheader from '../TopheaderComponent/Topheader'
import Footer from '../FooterComponent/Footer'

const Spa = () => {


    return (
        <div>
            <Topheader />
            <Header />
            <div className="intro">
                <h2>Спорт и СПА</h2>
                <p>Обновеният Спа център предлага разнообразни възможности за спорт и релакс: просторна фитнес зала, закрит плувен басейн с размери 25/12.5 м, джакузи, хидромасажна вана, солариум, билярд, тенис на маса, термо зона, която включва: хамам, парна баня, финландска сауна, аромасауна, вани за крака, кнайп-пътека, шоков басейн, ледено ведро.</p>
            </div>
            <div className="spa-container-info">
                <div className='right'>
                    <h2>Спорт</h2>
                    <p>Ние предлага ме разнообразни възможности за спорт и релакс: добре обзаведена фитнес зала, закрит плувен басейн с размери 25/12,5 м, билярд, тенис на маса.Богат избор на хидро процедури- хидро масажна вана,арома вана, джакузи.</p>
                </div>
                <img className='image-size' src={spa1} alt="" />
                <img className='image-size' src={spa2} alt="" />
                <div className='left'>
                    <h2>Салон за красота</h2>
                    <p>Повишете  настроението си в нашият салона за красота!Преобразете се, наслаждавайки се на страхотна и модерна атмосфера. Сръчният и опитен персонал , ще ви облее със стил и красота. Съживете косата си и обновете ръцете и ходилата си. Ще ви обградим с изключителено внимание и експертна помощ. Работим с водещи марки в сферата на красотата.</p>
                    <h3>ВКЛЮЧЕНИ УСЛУГИ:</h3>
                    <p>
                        Фризиране и терапии на коса
                        Педикюр и маникюр
                        Кола маска & и спа терапии лице</p>
                </div>
            </div>
            <section className='section-style'>
                <h1>ТЕРМО ЗОНА</h1>
                <p>Започнете вашето Спа приключение съчетавайки различни температурни режими за подобрение на тонуса и пречистване от токсините.</p>
            </section>
            <div className="spa-container-info">
                <div className='right'>
                    <h2>Сауна</h2>
                    <p>Като част от спа процедурите Ви предлагаме възможността да се насладите на една класическа финландска сауна. Успокойте и отпуснете уморените си мускули, премахнете умствената умора и намалете напрежението и стреса.</p>
                </div>
                <img className='image-size' src={spa3} alt="" />
                <img className='image-size' src={spa4} alt="" />
                <div className="left">
                    <h2>Вани за Крака</h2>
                    <p>с морски соли, Ледено вердо и Шоков басейн се ползват след всякакъв вид термотерапия, важно е тялото да е много добре загрято. Има мощно стимулиращо действие върху целия организъм.
                    </p>
                </div>
            </div>
            <section className='section-style-end'>
                
            </section>
            <Footer />
        </div>
    )

}


export default Spa;
