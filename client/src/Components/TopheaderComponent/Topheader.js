import './Topheader.css';
import topheaderImg from '../../images/walls.jpg'

const Topheader = () => {


    return (
        <div>

            <div className="topheader">
                <img className="topheader-img" src={topheaderImg} alt="topheader"></img>

                <a href="/">
                    <h1>ROYAL PALACE</h1>
                </a>
                <p>Relax your soul!</p>
            </div>

        </div>
    );
}


export default Topheader;