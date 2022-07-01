import './GameScreen.scss';
import React from 'react';
import Button from '../../Components/Button/Button';
import BackNav from '../../Components/BackNav/BackNav';
// import Timer from '../../Components/Timer/Timer';
import AnswerModal from '../../Components/AnswerModal/AnswerModal';
import InputPhrase from '../../Components/InputPhrase/InputPhrase';
import FallingBlocks from '../../Components/FallingBlocks/FallingBlocks';
import NextList from '../../Components/NextList/NextList';
import Output from '../../Components/Output/Output';
// import { NavLink } from 'react-router-dom';
import dummyImage from '../../Assets/dummy.svg';
import phrasesAPI from '../../utils/apiConfig';


class GameScreen extends React.Component {
    state = {
        input: "",
        allInputs: [],
        output: [],
        showAnswerModal: false,
        // userAnswerCorrect: false
    }


// INITIAL MOUNT PULLING IN ALL DATA
    dataURL = 'http://localhost:5050/phrases';

    componentDidMount(){
        phrasesAPI.getAll()
        .then(response => {
            const allPhrases = response.data;
            this.setState({
                allInputs: allPhrases
            })
            this.getRandomPhrase(allPhrases)
        })
        .catch(error => console.error(error))
    }

// RANDOMIZER 
    getRandomPhrase = (array) => {
        // console.log(array)
            const randomIndex = Math.floor(Math.random() * array.length);
            let singlePhrase = array[randomIndex]
            this.setState({
                input: singlePhrase
            })
        // console.log(singlePhrase);
    }

// FUNCTIONS FOR MODAL
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

    // Get new random phrase on click of "next" within modal
    handleNext = () => {
        this.getRandomPhrase(this.state.allInputs);
        this.setState({
            showAnswerModal: false
        })
    }
    

      
    // answerMessage = () => {
    //     // if user output == answer -> display correct message, else display incorrect
    //     console.log('write this function later');
    // }

    
    render(){
        console.log(this.state.input.ayajuthem)
        console.log(this.state.input.english)
        return (
            <main className='main'>
                <AnswerModal 
                    showAnswerModal={this.state.showAnswerModal}
                    hideModal={this.hideModal}
                    answerMessage={this.answerMessage} 
                    handleNext={this.handleNext}
                />

                <div className='main__top-wrapper'>
                    <BackNav />
                    {/* <Timer /> */}
                    <h2 className='main__test-title'>60s</h2>
                </div>

                <InputPhrase input={this.state.input.english}/>
                

                <section className='game'>
                    <img className='game__image' src={dummyImage} alt=''/>
                    <div className='game__fall-space'>
                        <FallingBlocks input={this.state.input.ayajuthem}/>
                    </div>
                    <div className='game__next-list'>
                        <NextList input={this.state.input.ayajuthem}/>
                    </div>
                </section>

                <div className='game__output'>
                    <Output />
                </div>

                <Button buttonText="Check" handler={this.showModal} />
                
            </main>
        )
    }
}

export default GameScreen;

