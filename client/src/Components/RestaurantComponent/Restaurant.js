


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

const Restaurant = () => {



    return (
        <div>
            <Topheader />
            <Header />
            <div>
                <img className='intro-img' src={res1} alt="" />
            </div>
            <Footer />
        </div>
    )
}

export default Restaurant;