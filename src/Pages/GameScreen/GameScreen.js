import './GameScreen.scss';
import React from 'react';
import Button from '../../Components/Button/Button';
import BackNav from '../../Components/BackNav/BackNav';
// import Timer from '../../Components/Timer/Timer';
import NextList from '../../Components/NextList/NextList';
import AnswerModal from '../../Components/AnswerModal/AnswerModal';
import InputPhrase from '../../Components/InputPhrase/InputPhrase';
// import { NavLink } from 'react-router-dom';
import dummyImage from '../../Assets/dummy.svg';
import phrasesAPI from '../../utils/apiConfig';

class GameScreen extends React.Component{
    state = {
        input: {},
        allInputs: [],
        image: null,
        output: [],
        showAnswerModal: false,
        userAnswerCorrect: false
    }

// INITIAL MOUNT PULLING IN ALL DATA
    dataURL = 'http://localhost:5050/phrases';

    componentDidMount(){
        phrasesAPI.getAll()
        .then(response => {
            // const firstPhrase = response.data[0];
            const allPhrases = response.data;
            this.setState({

                // input: firstPhrase,
                allInputs: allPhrases
                // image:
            })
            this.getRandomPhrase(allPhrases)
        })
        .catch(error => console.error(error))
    }

// RANDOMIZER 
    getRandomPhrase = (array) => {
        console.log(array)
            const randomPhrase = Math.floor(Math.random() * array.length);
            this.setState({
                input:array[randomPhrase]
            })
            // console.log(randomPhrase)
    }

    shufflePhrases(array){
        return array.sort(() => Math.random()-0.5)
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

// FUNCTION TO GET NEW RANDOM PHRASE ON NEXT CLICK
    handleNext = () => {
        this.getRandomPhrase(this.state.allInputs);
        this.setState({
            // input: nextRandomPhrase,
            showAnswerModal: false
        })

        this.shufflePhrases(this.state.allInputs)
    }
    
    // answerMessage = () => {
    //     // if user output == answer -> display correct message, else display incorrect
    //     console.log('write this function later');
    // }

    
    render(){
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
                    <div className='game__fall-space'></div>
                    <div className='game__next-list'>
                        {/* <NextList /> */}
                    </div>
                </section>

                <div className='game__output'>
                    {/* <Output /> */}
                </div>

                <Button buttonText="Check" handler={this.showModal} />
                
            </main>
        )
    }
}

export default GameScreen;


// UPDATE COMPONENT WHEN CHANGING PHRASE/DYNAMIC URL
// for when each phrase is url with id, make it so if the current phraseId is different from the last one, get the info for the current one

    // componentDidUpdate(prevProps, prevState) {
    //     const currentPhraseId = this.props.match.params.phraseId;
    //     const previousPhraseId = prevProps.match.params.phraseId;

    //     if (currentPhraseId !== previousPhraseId){
    //         phrasesAPI.getOne(currentPhraseId)
    //             .then(response => {
    //                 this.setState({
    //                     input: response.data
    //                 })
    //             })
    //     }
    // }