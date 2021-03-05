import './Footer.css'

import facebook from '../../images/facebook.png'
import googleMaps from '../../images/google-maps.png'
import youtube from '../../images/youtube.png'
import instagram from '../../images/instagram.png'
import twitter from '../../images/twitter.png'

const Footer = () => {

    return (
        <div className="footer">
            <div className="footer-left-colum">
                <h3>Useful links</h3>
                <ul>
                    <li>
                        <a href="/rooms">
                            Rooms
                        </a>
                    </li>
                    <li>
                        <a href="/FAQ">
                            FAQ
                        </a>

                    </li>
                    <li>
                        <a href="/spa">
                            SPA
                        </a>
                    </li>
                    
                </ul>
            </div>
            <div className="footer-center-colum">
                <h3>Contacts</h3>
                <ul>
                    <li>Adress: Hotel Royal Palace, Kaspichan</li>
                    <li>Reception: 0953125998</li>
                    <li>Email: royalpalace@email.com</li>
                    <li>royalpalaceresort@email.com</li>
                </ul>
            </div>
            <div className="footer-right-colum">
                <h3>Follow us!</h3>
                <ul>
                    <li>
                        <a href='#'>
                            <img className="facebook"src={facebook}></img>
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <img src={googleMaps}></img>
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <img src={youtube}></img>
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <img src={instagram}></img>
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <img src={twitter}></img>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;