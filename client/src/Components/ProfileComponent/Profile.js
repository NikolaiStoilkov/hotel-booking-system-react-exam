import { Route } from 'react-router-dom';



import './Profile.css'
import Navigation from './NavigationComponent/Navigation'
import Details from '../ProfileComponent/HistoryComponent/DetailsComponent/Details';



const Profile = (props) => {

    function setId(id) {
        props.getUserId(id);
    }

    return (
        <div>

            <Navigation getUserId={setId}></Navigation>



        </div>
    )
}

export default Profile;