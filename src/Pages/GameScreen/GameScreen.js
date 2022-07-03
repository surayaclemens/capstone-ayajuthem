import "./GameScreen.scss";
import React from "react";
import Button from "../../Components/Button/Button";
import BackNav from "../../Components/BackNav/BackNav";
// import Timer from '../../Components/Timer/Timer';
import AnswerModal from "../../Components/AnswerModal/AnswerModal";
import EnglishPhrase from "../../Components/EnglishPhrase/EnglishPhrase";
import FallingBlocks from "../../Components/FallingBlocks/FallingBlocks";
import NextList from "../../Components/NextList/NextList";
import Output from "../../Components/Output/Output";
// import { NavLink } from 'react-router-dom';
import dummyImage from "../../Assets/dummy.svg";
import phrasesAPI from "../../utils/apiConfig";

class GameScreen extends React.Component {
  state = {
    phraseObj: "",
    phrasesArray: [],
    blockVisible: false,
    blockArray: [],
    output: [],
    showAnswerModal: false,
    // userAnswerCorrect: false
  };

  // INITIAL MOUNT
  dataURL = "http://localhost:5050/phrases";

  componentDidMount() {

    document.title="Game on 🧱 👀 🕹 "

    phrasesAPI.getAll()
        .then((response) => {
        // get all the phrases from API 
        const allPhrases = response.data;

        // put all the phrases in current state
        this.setState({
          phrasesArray: allPhrases,
        });

        // randomize all phrases from API to get single phrase for phraseObj
        const randomIndex = Math.floor(Math.random() * allPhrases.length);
        let singlePhrase = allPhrases[randomIndex];
        // split the single phrase to have its morphs in an array
        let morphArray = singlePhrase.ayajuthem.split(" ");
        // get random word from the split array, filter that one out, keep going through array until all are out (while loop - while length of array >=1)
        this.setState({
            phraseObj: singlePhrase,
            blockArray: morphArray,
        });

        console.log(singlePhrase);
        console.log(morphArray)
    
  
        // call randomizer for each morph in array to get single morph for play block
            // timed after mount so defined & staggered
            // sets currentBlock -> randomMorph
            // used forEach here because I need to take each one out of the array
        // setTimeout(() => {
           
        // }, 3000);

        // allMorphs?.forEach((morph) => {
        //   setTimeout(() => {
        //     this.getRandomMorph(allMorphs);
        //   }, 1000);
        //   console.log(morph);
        // });
      })
      .catch((error) => console.error(error));
  }

componentDidUpdate(){
    // let allMorphs = this.state.phraseObj.ayajuthem?.split(" ");
    // // console.log(this.state.phraseObj.ayajuthem)
    // allMorphs?.forEach((morph) => {
    //     // this.getRandomMorph(allMorphs);
    //     let singleMorph = morph;
    //     console.log(singleMorph);
    // });
    // state change is just whatever block they're on
}



    // array in right order, array in random order
    // do randomizing in mount, determine which word is first, second, third (array of 3 shuffled morphs) then pull one in update
    // component did update just changes class for visibility

    // Morpheme randomizer for single morpheme for play block
    getRandomMorph = (array) => {
        const randomNumber = Math.floor(Math.random() * array.length);
        let randomMorph = array[randomNumber];
            this.setState({
                currentBlock: randomMorph
            });
    };

  // FUNCTIONS FOR BLOCKS

  // showBlock = () => {
  //     this.setState({
  //         showBlock: true
  //     })
  // }

  // FUNCTIONS FOR MODAL
  showModal = () => {
    this.setState({
      showAnswerModal: true,
    });
  };

  hideModal = () => {
    this.setState({
      showAnswerModal: false,
    });
  };

  // Get new random phrase on click of "next" within modal
  handleNext = () => {
    this.getRandomPhrase(this.state.phrasesArray);
    this.setState({
      showAnswerModal: false,
    });
    this.getRandomMorph(this.state.morphArray);
  };

  // answerMessage = () => {
  //     // if user output == answer -> display correct message, else display incorrect
  //     console.log('write this function later');
  // }

  render() {
    // console.log(this.state.phraseObj.ayajuthem)
    // console.log(this.state.phraseObj.english)
    return (
      <main className="main">
            <AnswerModal
            showAnswerModal={this.state.showAnswerModal}
            hideModal={this.hideModal}
            answerMessage={this.answerMessage}
            handleNext={this.handleNext}
            />

            <div className="main__top-wrapper">
            <BackNav />
            {/* <Timer /> */}
            <h2 className="main__test-title">60s</h2>
            </div>

            <EnglishPhrase phrase={this.state.phraseObj.english} />

            <section className="game">
            <img className="game__image" src={dummyImage} alt="" />
            <div className="game__fall-space">
                    <FallingBlocks morphsArray={this.state.blockArray}
                    />
            </div>
            <div className="game__next-list">
                <NextList ayajuthem={this.state.phraseObj.ayajuthem} />
            </div>
            </section>

            <div className="game__output">
                <Output />
            </div>

            <Button buttonText="Check" handler={this.showModal} className='button button--plain'/>
      </main>
    );
  }
}

export default GameScreen;
