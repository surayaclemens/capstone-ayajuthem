import './GameScreen.scss';
import React from 'react';
import Button from '../../Components/Button/Button';
import BackNav from '../../Components/BackNav/BackNav';
// import Timer from '../../Components/Timer/Timer';
import AnswerModal from '../../Components/AnswerModal/AnswerModal';
import EnglishPhrase from '../../Components/EnglishPhrase/EnglishPhrase';
import FallingBlocks from '../../Components/FallingBlocks/FallingBlocks';
import NextList from '../../Components/NextList/NextList';
import Output from '../../Components/Output/Output';
// import { NavLink } from 'react-router-dom';
import dummyImage from '../../Assets/dummy.svg';
import phrasesAPI from '../../utils/apiConfig';


class GameScreen extends React.Component {
    state = {
        phraseObj: "",
        phrasesArray: "",
        // blockVisible: false,
        currentBlock: "",
        secondBlock: "",
        output: [],
        showAnswerModal: false,
        // userAnswerCorrect: false
    }


// INITIAL MOUNT
    dataURL = 'http://localhost:5050/phrases';

    componentDidMount(){
        phrasesAPI.getAll()
        .then(response => {

            // get all the phrases from api
            const allPhrases = response.data;
            
            // put all the phrases in current state
            this.setState({
                phrasesArray: allPhrases
            })

            // call randomizer on all to get single phrase for phraseObj
            // the randomizer sets phraseObj -> an index of allPhrases array which is a single object with id, eng, ayaj. the eng gets put into component
            this.getRandomPhrase(allPhrases)
            
            
            // turn ayajuthem string from phraseObj into array to use to get random morpheme for block
            let allMorphs = this.state.phraseObj.ayajuthem?.split (" ");

            // call randomizer for each morph in array to get single morph for play block
            // timed 1 second after mount so defined & staggered
            // the randomizer sets currentBlock -> randomMorph
                allMorphs?.forEach((morph) => {
                    setTimeout(() => {this.getRandomMorph(allMorphs)}, 1000)
                    console.log(morph);
                })
        })
        .catch(error => console.error(error))
    }

// RANDOMIZERS

// Phrase randomizer for single phrase phraseObj from all phrases
    getRandomPhrase = (array) => {
        // console.log(array)
            const randomIndex = Math.floor(Math.random() * array.length);
            let singlePhrase = array[randomIndex]
            this.setState({
                phraseObj: singlePhrase
            })
    }

// Morpheme randomizer for single morpheme for play block
    getRandomMorph = (array) => {
        const randomNumber = Math.floor(Math.random() * array.length);
        let randomMorph = array[randomNumber]; 
        if (!this.state.currentBlock){
            this.setState({
                currentBlock: randomMorph
            })
        } else {
            console.log(randomMorph)
        }

    }


// FUNCTIONS FOR BLOCKS

    // showBlock = () => {
    //     this.setState({
    //         showBlock: true
    //     })
    // }

    
// need to invoke this function somehow to get classes applied - what's wrong with this set timeout???
    // setTimeout(() => {showBlock()}, 3000)


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
        this.getRandomPhrase(this.state.phrasesArray);
        this.setState({
            showAnswerModal: false
        })
        this.getRandomMorph(this.state.morphArray);
    }

      
    // answerMessage = () => {
    //     // if user output == answer -> display correct message, else display incorrect
    //     console.log('write this function later');
    // }

    
    render(){
        // console.log(this.state.phraseObj.ayajuthem)
        // console.log(this.state.phraseObj.english)
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

                <EnglishPhrase phrase={this.state.phraseObj.english}/>
                

                <section className='game'>
                    <img className='game__image' src={dummyImage} alt=''/>
                    <div className='game__fall-space'>
                        <FallingBlocks 
                        firstBlock={this.state.currentBlock}
                        // allMorphs={this.state.allMorphs}
                        secondBlock={this.state.secondBlock}
                        // thirdBlock={this.state.thirdBlock}
                        />
                    </div>
                    <div className='game__next-list'>
                        <NextList ayajuthem={this.state.phraseObj.ayajuthem}/>
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

