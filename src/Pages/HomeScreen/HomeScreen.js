import './HomeScreen.scss';
import React from 'react';
import Button from '../../Components/Button/Button';
import Logo from '../../Components/Logo/Logo';
import { NavLink } from 'react-router-dom';

class HomeScreen extends React.Component{

    
    render(){
        return(
            <main className='home'>
                <Logo />
                <section className='home__instruction-block'>
                    <p className='home__instruction-text home__instruction-text--first'>Arrange the word blocks to match the target sentence</p>
                    <p className='home__instruction-text home__instruction-text--second'>Use arrow keys to move each block into place as it appears</p>
                    <p className='home__instruction-text home__instruction-text--third'>Beat the clock!</p>
                </section>
                <NavLink to='/phrases'><Button buttonText="Start"/></NavLink>
            </main>
        )
    }
}

export default HomeScreen;