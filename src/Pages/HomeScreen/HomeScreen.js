import './HomeScreen.scss';
import React from 'react';
import Button from '../../Components/Button/Button';
import Logo from '../../Components/Logo/Logo';
import { NavLink } from 'react-router-dom';

class HomeScreen extends React.Component{
    
    
    render(){
        document.title="🧩Ayajuthem Tetris 🧩"


        return(
            <main className='home'>
                <Logo />
                <section className='home__instruction-block'>

                    <p className='home__instruction-text home__instruction-text--first'>Arrange the Ayajuthem word blocks </p>

                    <p className='home__instruction-text home__instruction-text--second'>to match the English target</p>

                    <p className='home__instruction-text home__instruction-text--third'>Use arrow keys to move</p>

                    <p className='home__instruction-text home__instruction-text--fourth'>each block into place as it appears</p>

                    <p className='home__instruction-text home__instruction-text--fifth'>Beat the clock!</p>
                    

                </section>
                <div className='home__button-wrapper'>
                    <NavLink to='/phrases'>
                        <Button buttonText="Start"
                                className='button'/>
                    </NavLink>
                </div>
            </main>
        )
    }
}

export default HomeScreen;