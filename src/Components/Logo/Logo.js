import './Logo.scss';
import React from 'react';

class Logo extends React.Component{
    render(){
        return(
            <main className='logo'>
                <div className='logo__circle'></div>
                <h1 className='logo__text'>Ayajuthem Tetris</h1>
            </main>
        )
    }
}

export default Logo;