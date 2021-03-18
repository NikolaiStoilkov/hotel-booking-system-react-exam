
import './Navigation.css'

const Navigation = () => {


    return (
        <div className='profile-background'>
           
            <div className='navigation'>
                <div className='navigation-bar'>
                    <ul>
                        <li>
                            <a href="/profile/:id/booking">Booking</a>
                        </li>
                        <li>
                            <a href="/profile/:id/history">History</a>
                        </li>
                        <li>
                            <a href="/">Home</a>
                        </li>
                    </ul>

                </div>
                <span></span>
                <div className='navigation-book-list'>
                    <div className='book-list-container'>
                        {
                            
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navigation;