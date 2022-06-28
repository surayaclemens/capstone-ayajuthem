import './GameScreen.scss';
import React from 'react';
import Button from '../../Components/Button/Button';
import BackNav from '../../Components/BackNav/BackNav';
// import Timer from '../../Components/Timer/Timer';
// import NextList from '../../Components/NextList/NextList';
import AnswerModal from '../../Components/AnswerModal/AnswerModal';
// import InputPhrase from '../../Components/InputPhrase/InputPhrase';
// import axios from 'axios';
// import { NavLink } from 'react-router-dom';
import dummyImage from '../../Assets/dummy.svg';

class GameScreen extends React.Component{
    state = {
        input: "",
        nextList: [],
        image: null,
        output: [],
        showAnswerModal: false,
        userAnswerCorrect: false
    }
// pulling data in from backend to fill initial mount
    dataURL = 'http://localhost:8080/';
    // componentDidMount(){
    //     axios.get(this.dataURL)
    //     .then(response => {
    //         this.setState({
    //             input:,
    //             nextList: ,
    //             image:
    //         })
    //     })
    //     .catch(error => console.error(error))
    // }

    showModal = () => {
        this.setState({
            showAnswerModal: true
        })
    }
    
    hideModal = () => {
        this.setState({
            showAnswerModal: false
        })
    }
    
    answerMessage = () => {
        // if user output == answer -> display correct message, else display incorrect
        console.log('write this function later');
    }
    
    
    
    // putting in jsx holders for input phrase passed in, next morphemes list
    render(){
        return (
            <main className='main'>
                <div className='main__top-wrapper'>
                <BackNav />
                {/* <Timer /> */}
                    <h2 className='main__test-title'>60s</h2>
                </div>
                    <h2 className='main__test-title'>'test input for styling'</h2>
                    {/* <InputPhrase /> */}
                <section className='game'>
                    <img className='game__image' src={dummyImage} alt=''/>
                    <div className='game__fall-space'></div>
                    <div className='game__next-list'>
                        {/* <NextList /> */}
                    </div>
                </section>
                <div className='game__output'>
                    {/* <Output /> */}
                </div>

               {/* button onclick modal, function added as prop to button component */}
                <Button buttonText="Check" onClick={this.showModal} />
                <AnswerModal 
                    showAnswerModal={this.state.showAnswerModal}
                    hideModal={this.hideModal}
                    answerMessage={this.answerMessage} 
                />
            </main>
        )
    }
}

export default GameScreen;