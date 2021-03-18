import { useHistory } from 'react-router-dom'

const Logout = () => {
    localStorage.removeItem('user');
    const history = useHistory();
    return (
        <div>
            {history.push('/')}
        </div>
    )
}

export default Logout;