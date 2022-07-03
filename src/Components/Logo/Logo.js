import './Logo.scss';
import React from 'react';
import logoImage from '../../Assets/frame2.png';

class Logo extends React.Component{
    render(){
        return(
            <main className='logo'>
               
                    <img className='logo__image' src={logoImage} alt='logo'/>
                
            </main>
        )
    }
}

export default Logo;