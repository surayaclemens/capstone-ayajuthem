import './Logo.scss';
import React from 'react';
import logoImage from '../../Assets/logo.png';

class Logo extends React.Component{
    render(){
        return(
            <main className='logo'>
                <div className='logo__circle'>
                    <img className='logo__image' src={logoImage} alt='logo'/>
                </div>
                {/* <h1 className='logo__text'>Ayajuthem Tetris</h1> */}
            </main>
        )
    }
}

export default Logo;