import '../Header.css';

const GuestHeader = ({ image }) => {

    return (
        <header id="header" className="navbar">
            <img src={ image } className="logo" alt="hotelLogo"></img>
            <ul className="navbar-links">
                <li>
                    <a href="/hotel">HOTEL</a>
                </li>
                <li>
                    <a href="/spa">SPA</a>
                </li>
                <li>
                    <a href="/useful">USEFUL</a>
                </li>
                <li>
                    <a href="/login">LOGIN</a>
                </li>
                <li>
                    <a href="/register">REGISTER</a>
                </li>
            </ul>
        </header>
    )
}

export default GuestHeader;