import backHome from '../../Assets/backHome.png';
import './BackNav.scss';
import {NavLink} from 'react-router-dom';

function BackNav() {
   
    return (  
        <div className='back-nav'>
            <NavLink to='/'><img className='back-nav__image' src={backHome} alt='back arrow to home'/></NavLink>
        </div>
    );
}

export default BackNav;